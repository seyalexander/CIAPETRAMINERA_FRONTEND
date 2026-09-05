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
import { TipoClienteModel } from '../../model/tipoCliente.model';
import { TipoClienteService } from '../../services/api/tipo-cliente-service';
import { LoginService } from '../../../login/services/api/login-service';
import { RequestListaTipoCliente } from '../../intercambios/request/RequestListaTipoCliente.request';
import { ResponseListaTipoCliente } from '../../intercambios/response/ResponseListaTipoCliente.response';
import { Role } from '../../../../core/auth/roles.enum';

interface Column {
  field: string;
  header: string;
}


@Component({
  selector: 'app-lista-tipocliente-page',
  imports: [ButtonModule,
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
    TooltipModule],
  templateUrl: './lista-tipocliente-page.html',
  styleUrl: './lista-tipocliente-page.css',
  providers: [ConfirmationService, MessageService],
})
export class ListaTipoclientePage {
  items: MenuItem[] | undefined;

  // LISTA DATOS
  // private productService = inject(ProductService);
  tipoClientes: TipoClienteModel[] = [];
  detalleTipoClientePage: TipoClienteModel = {} as TipoClienteModel;
  tipoClienteService = inject(TipoClienteService);
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
    this.ObtenerListaTipoClientes(2);
  }

  MostrarOpcionesCabecera() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => this.ObtenerListaTipoClientes(2),
      },
    ];
  }

  ObtenerListaTipoClientes(estado: number): void {
    this.loading = true;
    const request: RequestListaTipoCliente = { estado };
    this.tipoClienteService.ListarTipoClientes(request).subscribe({
      next: (resp: ResponseListaTipoCliente) => {
        if (resp.exito) {
          this.tipoClientes = [...resp.tipoClientes];
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al listar tipos de documentos', err);
        this.loading = false;
      },
    });
  }

  ConfirmacionAnular(event: Event, tipoCliente: TipoClienteModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Está seguro de desactivar este tipo de cliente?',
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
        // this.AnularTipoDocumento(tipoDocumento.idTipoDocumentos);
      },
      reject: () => { },
    });
  }

  ConfirmacionActivar(event: Event, tipoCliente: TipoClienteModel) {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: 'Está seguro de activar este tipo de documento?',
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
        // this.ActivarTipoDocumento(tipoDocumento.idTipoDocumentos);
      },
      reject: () => { },
    });
  }

  // AnularTipoDocumento(idTipoDocumento: number) {
  //   this.loading = true;
  //   this.tipoDocumentoService.AnularTipoDocumento(idTipoDocumento).subscribe({
  //     next: (resp: ResponseEditarEstadoTipoDocumento) => {
  //       if (resp.exito) {
  //         this.messageService.add({
  //           severity: 'success',
  //           summary: 'Anulación correcta',
  //           detail: resp.message,
  //         });
  //         this.ObtenerListaTipoDocumentos(2);
  //       }

  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       console.error('Error al anular tipo documento', err);
  //       this.loading = false;
  //     },
  //   });
  // }

  // ActivarTipoDocumento(idTipoDocumentos: number) {
  //   this.loading = true;
  //   this.tipoDocumentoService.ActivarTipoDocumento(idTipoDocumentos).subscribe({
  //     next: (resp: ResponseEditarEstadoTipoDocumento) => {
  //       if (resp.exito) {
  //         this.messageService.add({
  //           severity: 'success',
  //           summary: 'Activación correcta',
  //           detail: resp.message,
  //         });
  //         this.ObtenerListaTipoDocumentos(2);
  //       }

  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       console.error('Error al activar tipo documento', err);
  //       this.loading = false;
  //     },
  //   });
  // }


  refrescarLista() {
    this.ObtenerListaTipoClientes(2);
  }

  showDialog() {
    this.visible = true;
    this.cdr.detectChanges();
  }

  showDialogDetalle(detalle: TipoClienteModel) {
    this.detalleTipoClientePage = detalle;
    this.visibleDetalle = true;
    this.cdr.detectChanges();
  }

  showDialogEditar(detalle: TipoClienteModel) {
    this.detalleTipoClientePage = detalle;
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
