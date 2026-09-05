import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, computed, inject } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { EmpleadoModel } from '../../model/EmpleadoModel.model';
import { EmpleadoService } from '../../services/api/empleado-service';
import { RequestListarEmpleado } from '../../intercambios/request/RequestListarEmpleado.request';
import { ResponseListaEmpleados } from '../../intercambios/response/ResponseListarEmpleado.response';
import { ResponseEditarEstadoEmpleado } from '../../intercambios/response/ResponseEditarEstadoEmpleado.response';
import { ImageModule } from 'primeng/image';
import { RegistrarEmpleadoPage } from "../registrar-empleado-page/registrar-empleado-page";
import { EditarEmpleadoPage } from "../editar-empleado-page/editar-empleado-page";
import { LoginService } from '../../../login/services/api/login-service';
import { Role } from '../../../../core/auth/roles.enum';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-lista-empleado-page',
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
    ImageModule,
    RegistrarEmpleadoPage,
    EditarEmpleadoPage
],
  templateUrl: './lista-empleado-page.html',
  styleUrl: './lista-empleado-page.css',
  providers: [ConfirmationService, MessageService],
})
export class ListaEmpleadoPage {
  items: MenuItem[] | undefined;

  // LISTA DATOS
  empleados: EmpleadoModel[] = [];
  detalleEmpleadosPage: EmpleadoModel = {} as EmpleadoModel;
  empleadosService = inject(EmpleadoService);
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
    this.ObtenerListaEmpleados(2);
  }

  MostrarOpcionesCabecera() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => this.ObtenerListaEmpleados(2),
      },
    ];
  }

  ObtenerListaEmpleados(estado: number): void {
    this.loading = true;
    const request: RequestListarEmpleado = { estado };
    this.empleadosService.ListarEmpleado(request).subscribe({
      next: (resp: ResponseListaEmpleados) => {
        if (resp.exito) {
          this.empleados = [...resp.empleados];
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al listar monedas', err);
        this.loading = false;
      },
    });
  }

  ConfirmacionAnular(event: Event, empleado: EmpleadoModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: `Está seguro de desactivar al empleado?`,
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
        this.AnularEmpleado(empleado.idEmpleado);
      },
      reject: () => {},
    });
  }

  ConfirmacionActivar(event: Event, empleado: EmpleadoModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: `Está seguro de activar al empleado?`,
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
        this.ActivarEmpleado(empleado.idEmpleado);
      },
      reject: () => {},
    });
  }

  AnularEmpleado(idEmpleado: number) {
    this.loading = true;
    this.empleadosService.AnularEmpleado(idEmpleado).subscribe({
      next: (resp: ResponseEditarEstadoEmpleado) => {
        if (resp.exito) {
          this.messageService.add({
            severity: 'success',
            summary: 'Anulación correcta',
            detail: resp.message,
          });
          this.ObtenerListaEmpleados(2);
        }
        this.loading = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error.message,
        });
        this.ObtenerListaEmpleados(2);
        console.error('Error al anular tipo documento', err);
        this.loading = false;
      },
    });
  }

  ActivarEmpleado(idEmpleado: number) {
    this.loading = true;
    this.empleadosService.ActivarEmpleado(idEmpleado).subscribe({
      next: (resp: ResponseEditarEstadoEmpleado) => {
        if (resp.exito) {
          this.messageService.add({
            severity: 'success',
            summary: 'Activación correcta',
            detail: resp.message,
          });
          this.ObtenerListaEmpleados(2);
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Error al activar tipo documento', err);
        this.loading = false;
      },
    });
  }

  refrescarLista() {
      this.ObtenerListaEmpleados(2);
    }

    showDialog() {
      this.visible = true;
      this.cdr.detectChanges();
    }

    showDialogDetalle(detalle: EmpleadoModel) {
      this.detalleEmpleadosPage = detalle;
      this.visibleDetalle = true;
      this.cdr.detectChanges();
    }

    showDialogEditar(detalle: EmpleadoModel) {
      this.detalleEmpleadosPage = detalle;
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
