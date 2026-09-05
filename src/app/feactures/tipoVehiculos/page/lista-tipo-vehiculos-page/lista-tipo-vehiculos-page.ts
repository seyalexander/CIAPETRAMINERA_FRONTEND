import { ChangeDetectorRef, Component, computed, inject, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';

import { CommonModule } from '@angular/common';

import { SkeletonModule } from 'primeng/skeleton';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { LoginService } from '../../../login/services/api/login-service';
import { Role } from '../../../../core/auth/roles.enum';
import { TipoVehiculoModel } from '../../model/TipoVehiculoModel.model';
import { TipoVehiculoService } from '../../services/api/tipo-vehiculo-service';
import { RequestListaTipoVehiculo } from '../../intercambios/request/RequestListaTipoVehiculo.request';
import { ResponseListaTipoVehiculo } from '../../intercambios/response/ResponseListaTipoVehiculo.response';
import { ResponseEditarEstadoTipoVehiculo } from '../../intercambios/response/ResponseEditarEstadoTipoVehiculo.response';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-lista-tipo-vehiculos-page',
  imports: [
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    TableModule,
    SplitButtonModule,
    ToolbarModule,
    InputTextModule,
    CommonModule,
    SkeletonModule,
    BadgeModule,
    DialogModule,
    ChipModule,
    TagModule,
    ConfirmPopupModule,
    ToastModule,
    RippleModule,
    TooltipModule,
  ],
  templateUrl: './lista-tipo-vehiculos-page.html',
  styleUrl: './lista-tipo-vehiculos-page.css',
  providers: [ConfirmationService, MessageService],
})
export class ListaTipoVehiculosPage {
  items: MenuItem[] | undefined;

   // LISTA DATOS
  tipoVehiculos: TipoVehiculoModel[] = [];
  detalleTipoVehiculosPage: TipoVehiculoModel = {} as TipoVehiculoModel;
  tipoVehiculoService = inject(TipoVehiculoService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  cdr = inject(ChangeDetectorRef);
  cols!: Column[];
  loading: boolean = true;

  // JALANDO ROL DEL LOGIN
  loginService = inject(LoginService);

  // MOSTRAR REGISTRAR
  visible: boolean = false;
  // MOSTRAR DETALLE
  visibleDetalle: boolean = false;
  // MOSTRAR EDITAR
  visibleEditar: boolean = false;

  ngOnInit() {
    this.MostrarOpcionesCabecera();
    this.ObtenerListaVehiculos(2);
  }

  MostrarOpcionesCabecera() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => this.ObtenerListaVehiculos(2),
      },
    ];
  }

  ObtenerListaVehiculos(estado: number): void {
    this.loading = true;
    const request: RequestListaTipoVehiculo = { estado };
    this.tipoVehiculoService.ListarTipoVehiculos(request).subscribe({
      next: (resp: ResponseListaTipoVehiculo) => {
        if (resp.exito) {
          this.tipoVehiculos = [...resp.tipoVehiculos];
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al listar tipos de vehículos', err);
        this.loading = false;
      },
    });
  }

  ConfirmacionAnular(event: Event, tipoVehiculo: TipoVehiculoModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Está seguro de desactivar este tipo de vehículo?',
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },
      accept: () => {
        this.AnularTipoVehiculo(tipoVehiculo.idTipoVehiculo);
      },
      reject: () => { },
    });
  }

  ConfirmacionActivar(event: Event, tipoVehiculo: TipoVehiculoModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Está seguro de activar este tipo de vehículo?',
      icon: 'pi pi-info-circle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'confirmed',
        severity: 'confirmed',
      },
      accept: () => {
        this.ActivarTipoVehiculo(tipoVehiculo.idTipoVehiculo);
      },
      reject: () => { },
    });
  }

  AnularTipoVehiculo(idTipoVehiculo: number) {
    this.loading = true;
    this.tipoVehiculoService.AnularTipoVehiculo(idTipoVehiculo).subscribe({
      next: (resp: ResponseEditarEstadoTipoVehiculo) => {
        if (resp.exito) {
          this.messageService.add({
            severity: 'success',
            summary: 'Anulación correcta',
            detail: resp.message,
          });
          this.ObtenerListaVehiculos(2);
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Error al anular tipo vehículo', err);
        this.loading = false;
      },
    });
  }

  ActivarTipoVehiculo(idTipoVehiculo: number) {
    this.loading = true;
    this.tipoVehiculoService.ActivarTipoVehiculo(idTipoVehiculo).subscribe({
      next: (resp: ResponseEditarEstadoTipoVehiculo) => {
        if (resp.exito) {
          this.messageService.add({
            severity: 'success',
            summary: 'Activación correcta',
            detail: resp.message,
          });
          this.ObtenerListaVehiculos(2);
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Error al activar tipo vehículo', err);
        this.loading = false;
      },
    });
  }



   refrescarLista() {
    this.ObtenerListaVehiculos(2);
  }

  showDialog() {
    this.visible = true;
    this.cdr.detectChanges();
  }

  showDialogDetalle(detalle: TipoVehiculoModel) {
    this.detalleTipoVehiculosPage = detalle;
    this.visibleDetalle = true;
    this.cdr.detectChanges();
  }

  showDialogEditar(detalle: TipoVehiculoModel) {
    this.detalleTipoVehiculosPage = detalle;
    this.visibleEditar = true;
    this.cdr.detectChanges();
  }

  // VALIDACIÓN PERMISOS PARA CADA PROCESO
  esSuperAdmin = computed(() =>
    this.loginService.hasRole(Role.SUPERADMIN)
  );

  esAdmin = computed(() =>
    this.loginService.hasAnyRole([Role.ADMIN, Role.SUPERADMIN])
  );

  puedeCrear = computed(() =>
    this.loginService.hasAnyRole([Role.ADMIN, Role.SUPERADMIN])
  );

  puedeActualizar = computed(() =>
    this.loginService.hasRole(Role.ADMIN)
  );

  puedeVerAuditoria = computed(() =>
    this.loginService.hasRole(Role.SUPERADMIN)
  );
}
