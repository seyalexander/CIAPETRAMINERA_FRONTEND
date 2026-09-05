import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface NavigationConfig {
  section: string;
  items: MenuItem[];
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private navigationConfig$ = new BehaviorSubject<NavigationConfig>({
    section: 'home',
    items: []
  });

  // Mapa de rutas a secciones - COMPLETO
  private routeSectionMap: { [key: string]: string } = {

    // =============================================
    // Configuración
    // =============================================

    // Gestión Comercial
    'GestionComercial': 'comercial_comercial',
    'Cliente': 'comercial_comercial',
    'TipoCliente': 'comercial_comercial',
    'EmpresasClientes': 'comercial_comercial',
    'ContactosClientes': 'comercial_comercial',

    // Documentos
    'Documentos': 'comercial_documentos',

    // Tarifas y contratos
    'TarifasContratos': 'comercial_tarifas',
    'TarifasMateriales': 'comercial_tarifas',
    'GestionContratos': 'comercial_tarifas',

    // =============================================
    // Operaciones
    // =============================================

    // Operaciones
    'Operaciones': 'operaciones_operaciones',
    'Vehiculos': 'operaciones_operaciones',
    'TipoVehiculos': 'operaciones_operaciones',
    'IngresoVehiculos': 'operaciones_operaciones',
    'Conductores': 'operaciones_operaciones',
    'Transportistas': 'operaciones_operaciones',
    'Lotes': 'operaciones_operaciones',
    'Procesos': 'operaciones_operaciones',

    // Producción
    'Produccion': 'operaciones_produccion',
    'Maquinaria': 'operaciones_produccion',
    'Cuadrillas': 'operaciones_produccion',
    'Avance': 'operaciones_produccion',

    // Almacén
    'Almacen': 'operaciones_almacen',
    'Inventario': 'operaciones_almacen',
    'GestionSacos': 'operaciones_almacen',
    'Patio': 'operaciones_almacen',
    'MapaCalor': 'operaciones_almacen',
    'Almacenamiento': 'operaciones_almacen',

    // =============================================
    // Logística
    // =============================================

    // Reportes
    'Reportes': 'reportes_reportes',
    'ReportesIngresoVehiculos': 'reportes_reportes',
    
    // Auditoría
    'Logistica': 'logistica_logistica',
    'Auditoria': 'logistica_auditoria',
    'Seguimiento': 'logistica_auditoria',

    // =============================================
    // Configuración
    // =============================================

    // Seguridad
    'Seguridad': 'configuracion_seguridad',
    'ConfiguracionGeneral': 'configuracion_general',
    'Empleados': 'configuracion_seguridad',
    'Usuarios': 'configuracion_seguridad',
    'Roles': 'configuracion_seguridad',

    // Catálogos
    'Catalogos': 'configuracion_catalogos',
    'TipoDocumento': 'configuracion_catalogos',
    'UnidadMedida': 'configuracion_catalogos',
    'Materiales': 'configuracion_catalogos',

    // General
    'Parametros': 'configuracion_general'
  };

  constructor(private router: Router) {
    this.initializeMenus();
    this.detectRouteChanges();
  }

  getNavigationConfig(): Observable<NavigationConfig> {
    return this.navigationConfig$.asObservable();
  }

  setSection(section: string): void {
    console.log("RUTA: ",section);
    
    const config = this.navigationConfig$.value;
    this.navigationConfig$.next({
      ...config,
      section,
      items: this.getMenuItemsBySection(section)
    });
  }

  private detectRouteChanges(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const section = this.getSectionFromUrl(event.urlAfterRedirects);
        if (section) {
          this.setSection(section);
        }
      });
  }

  private getSectionFromUrl(url: string): string | null {
    for (const [route, section] of Object.entries(this.routeSectionMap)) {
      if (url.includes(route)) {
        return section;
      }
    }
    return null;
  }

  private initializeMenus() {
    this.navigationConfig$.next({
      section: 'home',
      items: this.getHomeMenuItems()
    });
  }

  private getMenuItemsBySection(section: string): MenuItem[] {
    console.log("sección ruta: ",section);
    switch (section) {

      // =============================================
      // Gestión Comercial
      // =============================================

      case 'comercial_comercial':
        return this.getComercialComercialMenuItems();
      case 'comercial_documentos':
        return this.getComercialDocumentosMenuItems();
      case 'comercial_tarifas':
        return this.getComercialesTarifasMenuItems();
      
      // =============================================
      // Operaciones - Almacén
      // =============================================

      case 'operaciones_operaciones':
        return this.getOperacionesOperacionesMenuItems();
      case 'operaciones_produccion':
        return this.getOperacionesProduccionMenuItems();
      case 'operaciones_almacen':
        return this.getOperacionesAlmacenMenuItems();
      
      // =============================================
      // Logística
      // =============================================

      case 'logistica_logistica':
        return this.getLogisticaMenuItems();
      case 'logistica_auditoria':
        return this.getLogisticaAuditoriaMenuItems();
      case 'reportes_reportes':
        return this.getLogisticaReportesMenuItems();

      // =============================================
      // Configuración
      // =============================================

      case 'configuracion_seguridad':  
        return this.getConfiguracionSeguridadMenuItems();
      case 'configuracion_catalogos': 
        return this.getConfiguracionCatalogosMenuItems();
      case 'configuracion_general':  
        return this.getConfiguracionGeneralMenuItems();

      // =============================================
      // Default
      // =============================================

      default:
        return this.getHomeMenuItems();
    }
  }

  private getHomeMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Inicio'] }
        ]
      }
    ];
  }

  // =============================================
  // TARIFAS Y CONTRATOS
  // =============================================

  private getComercialComercialMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Gestión Comercial',
        items: [
          { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/Inicio/GestionComercial/Cliente'] },
          { label: 'Tipo Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/Inicio/GestionComercial/TipoCliente'] },
          { label: 'Empresas', icon: 'pi pi-fw pi-building', routerLink: ['/Inicio/GestionComercial/EmpresasClientes'] },
          { label: 'Contactos', icon: 'pi pi-fw pi-address-book', routerLink: ['/Inicio/GestionComercial/ContactosClientes'] },
          { label: 'Tarifas por tipo material', icon: 'pi pi-fw pi-dollar', routerLink: ['/Inicio/GestionComercial/TipoTarifa'] },
        ]
      },
    ];
  }

  private getComercialDocumentosMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Documentos',
        items: [
          { label: 'Documentos', icon: 'pi pi-fw pi-book', routerLink: ['/Inicio/Documentos'] }
        ]
      },
    ]
  }

  private getComercialesTarifasMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Tarifas y Contratos',
        items: [
          { label: 'Tarifas', icon: 'pi pi-fw pi-dollar', routerLink: ['/Inicio/Tarifas'] },
          { label: 'Contratos', icon: 'pi pi-fw pi-file-edit', routerLink: ['/Inicio/Contratos'] }
        ]
      },
    ]
  }

  // =============================================
  // OPERAICONES Y PRODUCCIÓN
  // =============================================

  private getOperacionesOperacionesMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Operación',
        items: [
          { label: 'Ingreso de vehículos', icon: 'pi pi-fw pi-car', routerLink: ['/Inicio/Operaciones/IngresoVehiculos'] },
          { label: 'Tipo Vehículos', icon: 'pi pi-fw pi-truck', routerLink: ['/Inicio/Operaciones/TipoVehiculo'] },
          { label: 'Vehículos', icon: 'pi pi-fw pi-truck', routerLink: ['/Inicio/Operaciones/Vehiculos'] },
          { label: 'Conductores', icon: 'pi pi-fw pi-user', routerLink: ['/Inicio/Operaciones/Conductores'] },
          { label: 'Transportistas', icon: 'pi pi-fw pi-send', routerLink: ['/Inicio/Operaciones/Transportistas'] }
        ]
      },
      {
        label: 'Lotes',
        items: [
          { label: 'Lotes', icon: 'pi pi-fw pi-tags', routerLink: ['/Inicio/Operaciones/Lotes'] },
          { label: 'Estados de lote', icon: 'pi pi-fw pi-check-circle', routerLink: ['/Inicio/Operaciones/EstadosLote'] },
          { label: 'Tipos de material', icon: 'pi pi-fw pi-database', routerLink: ['/Inicio/Operaciones/TiposMaterial'] },
          { label: 'Unidades de medida', icon: 'pi pi-fw pi-calculator', routerLink: ['/Inicio/Operaciones/UnidadesMedida'] }
        ]
      },
    ];
  }

  private getOperacionesProduccionMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Producción',
        items: [
          { label: 'Producción', icon: 'pi pi-user', routerLink: ['/Inicio/Produccion/Produccion'] },
          { label: 'Maquinaria', icon: 'pi pi-users', routerLink: ['/Inicio/Produccion/Maquinaria'] },
          { label: 'Cuadrillas', icon: 'pi pi-fw pi-users', routerLink: ['/Inicio/Produccion/Cuadrillas'] },
          { label: 'Avance', icon: 'pi pi-fw pi-chart-line', routerLink: ['/Inicio/Produccion/Avance'] }
        ]
      }
    ]
  }

  private getOperacionesAlmacenMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Almacén',
        items: [
          { label: 'Inventario', icon: 'pi pi-user', routerLink: ['/Inicio/Almacen/Inventario'] },
          { label: 'Gestión de sacos', icon: 'pi pi-users', routerLink: ['/Inicio/Almacen/GestionSacos'] },
          { label: 'Patio', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio/Almacen/Patio'] },
          { label: 'Mapa de calor', icon: 'pi pi-fw pi-map-marker', routerLink: ['/Inicio/Almacen/MapaCalor'] },
          { label: 'Almacenamiento', icon: 'pi pi-fw pi-archive', routerLink: ['/Inicio/Almacen/Almacenamiento'] }
        ]
      }
    ]
  }

  // =============================================
  // LOGÍSTICA, REPORTES Y AUDITORÍA
  // =============================================

  private getLogisticaMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Logística',
        items: [
          { label: 'Despachos', icon: 'pi pi-fw pi-truck', routerLink: ['/Inicio/Despachos'] }
        ]
      },
      {
        label: 'Reportes',
        items: [
          { label: 'Comercial', icon: 'pi pi-fw pi-users', routerLink: ['/Inicio/ReportesComercial'] },
          { label: 'Operaciones', icon: 'pi pi-fw pi-box', routerLink: ['/Inicio/ReportesOperaciones'] },
          { label: 'Producción', icon: 'pi pi-fw pi-cog', routerLink: ['/Inicio/ReportesProduccion'] }
        ]
      },
      {
        label: 'Auditoría',
        items: [
          { label: 'Auditoría', icon: 'pi pi-fw pi-shield', routerLink: ['/Inicio/Auditoria'] }
        ]
      }
    ];
  }

  private getLogisticaReportesMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Reportes',
        items: [
          { label: 'Reporte Ingreso Vehículos', icon: 'pi pi-user', routerLink: ['/Inicio/Reporte/IngresoVehiculos'] },
          { label: 'Reporte Operaciones', icon: 'pi pi-users', routerLink: ['/Inicio/Reporte/Operaciones'] },
          { label: 'Reporte Producción', icon: 'pi pi-fw pi-cog', routerLink: ['/Inicio/Reporte/Produccion'] },
          { label: 'Reporte Comercial', icon: 'pi pi-fw pi-users', routerLink: ['/Inicio/Reporte/Comercial'] },
          { label: 'Reporte Logística', icon: 'pi pi-fw pi-truck', routerLink: ['/Inicio/Reporte/Logistica'] },
          { label: 'Reporte Auditoría', icon: 'pi pi-fw pi-shield', routerLink: ['/Inicio/Reporte/Auditoria'] },
          { label: 'Reporte Seguimiento', icon: 'pi pi-fw pi-search', routerLink: ['/Inicio/Reporte/Seguimiento'] },
          { label: 'Reporte Configuración', icon: 'pi pi-fw pi-cog', routerLink: ['/Inicio/Reporte/Configuracion'] },
          { label: 'Reporte Catálogos', icon: 'pi pi-fw pi-book', routerLink: ['/Inicio/Reporte/Catalogos'] },
          { label: 'Reporte General', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/Inicio/Reporte/General'] },
          { label: 'Reporte Producción Detallado', icon: 'pi pi-fw pi-cogs', routerLink: ['/Inicio/Reporte/ProduccionDetallado'] },
          { label: 'Reporte Operaciones Detallado', icon: 'pi pi-fw pi-box', routerLink: ['/Inicio/Reporte/OperacionesDetallado'] },
          { label: 'Reporte Comercial Detallado', icon: 'pi pi-fw pi-users', routerLink: ['/Inicio/Reporte/ComercialDetallado'] },
          { label: 'Reporte Logística Detallado', icon: 'pi pi-fw pi-truck', routerLink: ['/Inicio/Reporte/LogisticaDetallado'] },
          { label: 'Reporte Auditoría Detallado', icon: 'pi pi-fw pi-shield', routerLink: ['/Inicio/Reporte/AuditoriaDetallado'] },
          { label: 'Reporte Seguimiento Detallado', icon: 'pi pi-fw pi-search', routerLink: ['/Inicio/Reporte/SeguimientoDetallado'] },
          { label: 'Reporte Configuración Detallado', icon: 'pi pi-fw pi-cog', routerLink: ['/Inicio/Reporte/ConfiguracionDetallado'] },
          { label: 'Reporte Catálogos Detallado', icon: 'pi pi-fw pi-book', routerLink: ['/Inicio/Reporte/CatalogosDetallado'] },
          { label: 'Reporte General Detallado', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/Inicio/Reporte/GeneralDetallado'] }          
        ]
      }
    ]
  }

  private getLogisticaAuditoriaMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Auditoría',
        items: [
          { label: 'Auditoría', icon: 'pi pi-user', routerLink: ['/Inicio/Seguridad/Auditoria'] },
          { label: 'Seguimiento', icon: 'pi pi-users', routerLink: ['/Inicio/Seguridad/Seguimiento'] }
        ]
      }
    ]
  }

  // =============================================
  // CONFIGURACIÓN Y SEGURIDAD
  // =============================================
  
  private getConfiguracionSeguridadMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Seguridad',
        items: [
          { label: 'Empleados', icon: 'pi pi-user', routerLink: ['/Inicio/Seguridad/Empleados'] },
          { label: 'Usuarios', icon: 'pi pi-users', routerLink: ['/Inicio/Seguridad/Usuarios'] },
          { label: 'Roles', icon: 'pi pi-fw pi-sliders-h', routerLink: ['/Inicio/Seguridad/Roles'] }
        ]
      }
    ];
  }

  private getConfiguracionCatalogosMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Catálogos',
        items: [
          { label: 'Tipo Documentos', icon: 'pi pi-fw pi-id-card', routerLink: ['/Inicio/Catalogos/TipoDocumento'] },
          { label: 'Unidades de Medida', icon: 'pi pi-fw pi-calculator', routerLink: ['/Inicio/Catalogos/UnidadMedida'] },
          { label: 'Materiales', icon: 'pi pi-fw pi-box', routerLink: ['/Inicio/Catalogos/Materiales'] }
        ]
      }
    ];
  }

  private getConfiguracionGeneralMenuItems(): MenuItem[] {
    return [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/Inicio'] },
          { label: 'Panel Principal', icon: 'pi pi-fw pi-th', routerLink: ['/Home'] }
        ]
      },
      {
        label: 'Configuración',
        items: [
          { label: 'Parámetros del Sistema', icon: 'pi pi-fw pi-cog', routerLink: ['/Inicio/ConfiguracionGeneral/Parametros'] }
        ]
      }
    ];
  }
}