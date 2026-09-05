import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NavigationService } from '../../service/Navigation/navigation-service';

interface UserInfo {
  nombre: string;
  rol: string;
}

interface ModuleCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  routerLink: string;
  itemCount?: number;
  section: string;
}

interface ModuleSection {
  id: string;
  name: string;
  color: string;
  colorFrom: string;
  colorTo: string;
}

@Component({
  selector: 'app-app-inicio',
  imports: [CommonModule, RouterModule],
  templateUrl: './app-inicio.html',
  styleUrl: './app-inicio.css',
})
export class AppInicio {

  currentYear = new Date().getFullYear();

  currentUser: UserInfo = {
    nombre: 'Juan Pérez',
    rol: 'Administrador'
  };

  sections: ModuleSection[] = [
    {
      id: 'comercial',
      name: 'Gestión Comercial & Documentos',
      color: 'blue',
      colorFrom: 'from-blue-500',
      colorTo: 'to-blue-600'
    },
    {
      id: 'operaciones',
      name: 'Operaciones & Producción',
      color: 'green',
      colorFrom: 'from-green-500',
      colorTo: 'to-green-600'
    },
    {
      id: 'logistica',
      name: 'Logística, Reportes & Auditoría',
      color: 'purple',
      colorFrom: 'from-purple-500',
      colorTo: 'to-purple-600'
    },
    {
      id: 'configuracion',
      name: 'Configuración & Seguridad',
      color: 'amber',
      colorFrom: 'from-amber-500',
      colorTo: 'to-amber-600'
    }
  ];

  modules: ModuleCard[] = [
    // =============================================
    // COMERCIAL
    // =============================================
    {
      title: 'Gestión Comercial',
      description: 'Clientes, tipos de clientes, empresas y contactos',
      icon: 'pi-users',
      color: '#3B82F6',
      routerLink: '/Inicio/GestionComercial/Cliente',
      itemCount: 5,
      section: 'comercial'
    },
    {
      title: 'Documentos',
      description: 'Gestión de documentos',
      icon: 'pi-book',
      color: '#3B82F6',
      routerLink: '/Inicio/Documentos/Documentos',
      itemCount: 3,
      section: 'comercial'
    },
    {
      title: 'Tarifas y contratos',
      description: 'Tarifas por material y gestión de contratos',
      icon: 'pi-id-card',
      color: '#3B82F6',
      routerLink: '/Inicio/TarifasContratos/TipoTarifa',
      section: 'comercial'
    },
   
    // =============================================
    // OPERACIONES
    // =============================================
    {
      title: 'Operaciones',
      description: 'Recepción de vehículos, lotes, patio y muestras',
      icon: 'pi-car',
      color: '#10B981',
      routerLink: '/Inicio/Operaciones/TipoVehiculo',
      itemCount: 8,
      section: 'operaciones'
    },
    {
      title: 'Producción',
      description: 'Gestión de producción',
      icon: 'pi-industry',
      color: '#10B981',
      routerLink: '/Inicio/Produccion/Procesos',
      itemCount: 5,
      section: 'operaciones'
    },
    {
      title: 'Almacén',
      description: 'Recepción de vehículos, lotes, patio y muestras',
      icon: 'pi-car',
      color: '#10B981',
      routerLink: '/Inicio/Almacen/Procesos',
      itemCount: 8,
      section: 'operaciones'
    },
   

    // =============================================
    // LOGÍSTICA
    // =============================================
    {
      title: 'Logística',
      description: 'Despacho, idstribución y control de entregas',
      icon: 'pi-truck',
      color: '#A855F7',
      routerLink: '/Inicio/Logistica/Despachos',
      itemCount: 10,
      section: 'logistica'
    },
    {
      title: 'Reportes Producción',
      description: 'Reportes de producción',
      icon: 'pi-chart-pie',
      color: '#A855F7',
      routerLink: '/Inicio/Reportes/ReportesComercial',
      section: 'logistica'
    },
    {
      title: 'Auditoría',
      description: 'Auditoría del sistema',
      icon: 'pi-shield',
      color: '#A855F7',
      routerLink: '/Inicio/Auditoria/Auditoria',
      itemCount: 2,
      section: 'logistica'
    },

    // =============================================
    // CONFIGURACIÓN
    // =============================================
    {
      title: 'Seguridad',
      description: 'Empleados, usuarios, roles y permisos',
      icon: 'pi-user',
      color: '#F59E0B',
      routerLink: '/Inicio/Seguridad/Empleados',
      itemCount: 20,
      section: 'configuracion'
    },
    {
      title: 'Catálogos',
      description: 'Tipos de documentos, tipos de tarifas y otros catálogos',
      icon: 'pi-id-card',
      color: '#F59E0B',
      routerLink: '/Inicio/Catalogos/TipoDocumento',
      section: 'configuracion'
    },
    {
      title: 'Configuración general',
      description: 'Parámetros del sistema y configuraciones',
      icon: 'pi-cog',
      color: '#F59E0B',
      routerLink: '/Inicio/ConfiguracionGeneral/Parametros',
      section: 'configuracion'
    }
  ];

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.loadUserInfo();
  }

  private loadUserInfo(): void {
    const userInfo = localStorage.getItem('currentUser');
    if (userInfo) {
      this.currentUser = JSON.parse(userInfo);
    }
  }

  getModulesBySection(sectionId: string): ModuleCard[] {
    return this.modules.filter(m => m.section === sectionId);
  }

  navigateToModule(module: ModuleCard): void {
    this.navigationService.setSection(module.section);
    this.router.navigate([module.routerLink]);
  }

  openHelp(): void {
    window.open('https://docs.ejemplo.com', '_blank');
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.router.navigate(['/Login']);
  }
}