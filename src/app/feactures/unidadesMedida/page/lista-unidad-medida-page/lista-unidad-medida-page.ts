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
import { UnidadMedidaModel } from '../../model/UnidadMedida.model';
import { UnidadMedidaService } from '../../services/api/unidad-medida-service';
import { LoginService } from '../../../login/services/api/login-service';
import { RequestListaUnidadMedida } from '../../intercambios/request/RequesListatUnidadMedida.request';
import { ResponseListaUnidadMedida } from '../../intercambios/response/ResponseListaUnidadMedida.response';
import { TipoDocumentoModel } from '../../../tipoDocumento/model/TipoDocumentoModel.model';
import { Role } from '../../../../core/auth/roles.enum';
import { ResponseEditarEstadoUnidadMedida } from '../../intercambios/response/ResponseEditarEstadoUnidadMedida.response';
import { RegistroUnidadMedidaPage } from "../registro-unidad-medida-page/registro-unidad-medida-page";

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-lista-unidad-medida-page',
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
    RegistroUnidadMedidaPage
],
  templateUrl: './lista-unidad-medida-page.html',
  styleUrl: './lista-unidad-medida-page.css',
  providers: [ConfirmationService, MessageService],
})
export class ListaUnidadMedidaPage {
  items: MenuItem[] | undefined;

  unidadesMedida: UnidadMedidaModel[] = []
  detalleUnidadMedida: UnidadMedidaModel = {} as UnidadMedidaModel
  unidadMedidaService = inject(UnidadMedidaService)
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
    this.ObtenerListaUnidadMedida(2);
  }

  MostrarOpcionesCabecera() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => this.ObtenerListaUnidadMedida(2),
      },
    ];
  }

  ObtenerListaUnidadMedida(estado: number): void {
    this.loading = true;
    const request: RequestListaUnidadMedida = { estado };
    this.unidadMedidaService.ListarUnidadMedida(request).subscribe({
      next: (resp: ResponseListaUnidadMedida) => {
        if (resp.exito) {
          this.unidadesMedida = [...resp.unidadesMedida];
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al listar unidades de medida', err);
        this.loading = false;
      },
    });
  }

  ConfirmacionAnular(event: Event, unidadMedida: UnidadMedidaModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Está seguro de desactivar esta unidad de medida?',
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
        this.AnularUnidadMedida(unidadMedida.idUnidadMedida);
      },
      reject: () => { },
    });
  }

  ConfirmacionActivar(event: Event, unidadMedida: UnidadMedidaModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Está seguro de activar esta unidad de medida?',
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
        this.ActivarUnidadMedida(unidadMedida.idUnidadMedida);
      },
      reject: () => { },
    });
  }

  AnularUnidadMedida(idUnidadMedida: number) {
    this.loading = true;
    this.unidadMedidaService.AnularUnidadMedida(idUnidadMedida).subscribe({
      next: (resp: ResponseEditarEstadoUnidadMedida) => {
        if (resp.exito) {
          this.messageService.add({
            severity: 'success',
            summary: 'Anulación correcta',
            detail: resp.message,
          });
          this.ObtenerListaUnidadMedida(2);
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Error al anular unidad de medida', err);
        this.loading = false;
      },
    });
  }

  ActivarUnidadMedida(idUnidadMedida: number) {
    this.loading = true;
    this.unidadMedidaService.ActivarUnidadMedida(idUnidadMedida).subscribe({
      next: (resp: ResponseEditarEstadoUnidadMedida) => {
        if (resp.exito) {
          this.messageService.add({
            severity: 'success',
            summary: 'Activación correcta',
            detail: resp.message,
          });
          this.ObtenerListaUnidadMedida(2);
        }

        this.loading = false;
      },
      error: (err) => {
        console.error('Error al activar unidad de medida', err);
        this.loading = false;
      },
    });
  }

  refrescarLista() {
    this.ObtenerListaUnidadMedida(2);
  }

  showDialog() {
    this.visible = true;
    this.cdr.detectChanges();
  }

  showDialogDetalle(detalle: UnidadMedidaModel) {
    this.detalleUnidadMedida = detalle;
    this.visibleDetalle = true;
    this.cdr.detectChanges();
  }

  showDialogEditar(detalle: UnidadMedidaModel) {
    this.detalleUnidadMedida = detalle;
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
