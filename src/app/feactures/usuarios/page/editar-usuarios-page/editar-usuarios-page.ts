import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioModel } from '../../model/usuarioModel.model';
import { Dialog } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Divider } from 'primeng/divider';
import { DatePicker, DatePickerModule } from 'primeng/datepicker';
import { InputMaskModule } from 'primeng/inputmask';
import { Password } from "primeng/password";
import { RolModel } from '../../../roles/model/rolModel.model';
import { RequestListaRol } from '../../../roles/intercambios/request/RequestListaRol.request';
import { RolesService } from '../../../roles/services/api/roles-service';
import { ResponseListaRol } from '../../../roles/intercambios/response/ResponseListaRol.response';
import { ResponseDetalleUsuario } from '../../intercambios/response/ResponseDetalleUsuario.response';
import { UsuarioService } from '../../service/api/usuario-service';
import { RequestEditarAllUsuario } from '../../intercambios/request/RequestEditarAllUsuario.request';
import { ResponseEditarAllUsuario } from '../../intercambios/response/ResponseEditarAllUsuario.response';

@Component({
  selector: 'app-editar-usuarios-page',
  imports: [
    Dialog,
    ReactiveFormsModule,
    FormsModule,
    Select,
    Button,
    Toast,
    InputTextModule,
    FloatLabelModule,
    Divider,
    DatePicker,
    InputMaskModule,
    DatePickerModule,
    Password
  ],
  templateUrl: './editar-usuarios-page.html',
  styleUrl: './editar-usuarios-page.css',
  providers: [MessageService],
})
export class EditarUsuariosPage {
  @Input() visibleEditar: boolean = true;
  @Output() visibleEditarChange = new EventEmitter<boolean>();
  @Input() usuario: UsuarioModel = new UsuarioModel();
  @Output() onEditarExitoso = new EventEmitter<void>();

  private messageService = inject(MessageService);
  cdr = inject(ChangeDetectorRef);
  rolesService = inject(RolesService);
  usuarioService = inject(UsuarioService);
  roles: RolModel[] = []
  detalleUsuarioPage: UsuarioModel = {} as UsuarioModel;

  loading: boolean = false;

  usuarioEditar = {
    idUsuario: 0,
    usuario: '',
    passowrd: '',
    estado: 0,
    idRol: 0,
    descripcionRol: '',
    idEmpleado: 0,
    nombre: '',
    apellido: '',
  }

  ngOnInit(): void {
    this.ObtenerListaRoles(1);
  }

  estadosTipoDocumentos = [
    { label: 'Inactivo', value: 0 },
    { label: 'Activo', value: 1 },
  ];

  ObtenerDetalleUsuarios(idUsuario: number): void {

    this.loading = true;

    this.usuarioService.DetalleUsuario(idUsuario).subscribe({

      next: (resp: ResponseDetalleUsuario) => {

        if (resp.exito) {

          this.detalleUsuarioPage = resp.usuario;

          this.usuarioEditar = {
            idUsuario: this.detalleUsuarioPage.idUsuario || 0,
            usuario: this.detalleUsuarioPage.usuario || '',
            passowrd: this.detalleUsuarioPage.passowrd || '',
            estado: this.detalleUsuarioPage.estado || 0,
            idRol: this.detalleUsuarioPage.idRol || 0,
            descripcionRol: this.detalleUsuarioPage.descripcionRol || '',
            idEmpleado: this.detalleUsuarioPage.idEmpleado || 0,
            nombre: this.detalleUsuarioPage.nombre || '',
            apellido: this.detalleUsuarioPage.apellido || '',
          };
        }

        this.loading = false;
        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error('Error al obtener usuario', err);
        this.loading = false;

      }

    });

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['usuario'] && this.usuarioEditar) {
      this.ObtenerDetalleUsuarios(this.usuario.idUsuario);
    }
  }

  ObtenerListaRoles(estado: number): void {
    this.loading = true;
    const request: RequestListaRol = { estado };
    this.rolesService.ListarRoles(request).subscribe({
      next: (resp: ResponseListaRol) => {
        if (resp.exito) {
          this.roles = [...resp.roles];
          console.log(resp);

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

  editar() {
    this.loading = true;

    const request: RequestEditarAllUsuario = {
      idUsuario: this.usuarioEditar.idUsuario || 0,
      usuario: this.usuarioEditar.usuario || '',
      passowrd: this.usuarioEditar.passowrd || '',
      estado: this.usuarioEditar.estado || 0,
      idRol: this.usuarioEditar.idRol || 0,
      idEmpleado: this.usuarioEditar.idEmpleado || 0,
    };

    this.usuarioService.EditarAllUsuario(request).subscribe({
      next: (resp: ResponseEditarAllUsuario) => {
        this.loading = false;

        if (resp.exito) {
          this.resetFormulario();
          this.visibleEditarChange.emit(false);
          this.onEditarExitoso.emit();
          this.messageService.add({
            severity: 'success',
            summary: 'success',
            detail: resp.message,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: resp.message,
          });
        }
      },
      error: (err) => {
        this.loading = false;

        const mensaje = err?.error?.message || 'Error inesperado del servidor';

        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: mensaje,
        });
      },
    });
  }


  volverLista() {
    this.visibleEditarChange.emit(false);
  }

  resetFormulario() {
    this.usuarioEditar = {
      idUsuario: 0,
      usuario: '',
      passowrd: '',
      estado: 0,
      idRol: 0,
      descripcionRol: '',
      idEmpleado: 0,
      nombre: '',
      apellido: '',
    }
  }


}
