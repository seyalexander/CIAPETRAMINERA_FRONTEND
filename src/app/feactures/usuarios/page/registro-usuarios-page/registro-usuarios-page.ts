import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UsuarioService } from '../../service/api/usuario-service';
import { Dialog, DialogModule } from 'primeng/dialog';
import { Button, ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { PasswordModule } from 'primeng/password';
import { RequestListaRol } from '../../../roles/intercambios/request/RequestListaRol.request';
import { ResponseListaRol } from '../../../roles/intercambios/response/ResponseListaRol.response';
import { RolModel } from '../../../roles/model/rolModel.model';
import { StepperModule } from 'primeng/stepper';
import { RequestRegistrarUsuario } from '../../intercambios/request/RequestRegistrarUsuario.request';
import { ResponseRegistroUsuario } from '../../intercambios/response/ResponseRegistrarUsuario.response';
import { RolesService } from '../../../roles/services/api/roles-service';
import { EmpleadoModel } from '../../../empleado/model/EmpleadoModel.model';
import { EmpleadoService } from '../../../empleado/services/api/empleado-service';
import { RequestListarEmpleado } from '../../../empleado/intercambios/request/RequestListarEmpleado.request';
import { ResponseListaEmpleados } from '../../../empleado/intercambios/response/ResponseListarEmpleado.response';


@Component({
  selector: 'app-registro-usuarios-page',
  imports: [
    AvatarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    DialogModule,
    SelectModule,
    ToastModule,
    ToggleSwitchModule,
    DataViewModule,
    TagModule,
    PasswordModule,
    StepperModule,
  ],
  templateUrl: './registro-usuarios-page.html',
  styleUrl: './registro-usuarios-page.css',
  providers: [MessageService],
})
export class RegistroUsuariosPage {
  @Input() visible: boolean = true;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onRegistroExitoso = new EventEmitter<void>();

  empleados: EmpleadoModel[] = [];
  roles: RolModel[] = [];
  loading: boolean = false;
  empleadosService = inject(EmpleadoService);
  rolesService = inject(RolesService);
  usuarioService = inject(UsuarioService);
  private messageService = inject(MessageService);
  cdr = inject(ChangeDetectorRef);

  empleadoSeleccionado: EmpleadoModel | null = null;
  rolSeleccionado: RolModel | null = null;

  usuario = {
    usuario: '',
    contrasenia: '',
    idRol: 0,
    idEmpleado: 0,
  };

  volverLista() {
    this.visibleChange.emit(false);
  }

  ngOnInit() {
    this.ObtenerListaEmpleados(1);
    this.ObtenerListaRoles(1);
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

  ObtenerListaRoles(estado: number): void {
    this.loading = true;
    const request: RequestListaRol = { estado };
    this.rolesService.ListarRoles(request).subscribe({
      next: (resp: ResponseListaRol) => {
        if (resp.exito) {
          this.roles = [...resp.roles];
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

  getSeverity(product: EmpleadoModel) {
    switch (product.estado) {
      case 1:
        return 'success';

      case 0:
        return 'danger';

      default:
        return null;
    }
  }

  seleccionarEmpleado(emp: EmpleadoModel) {
    this.empleadoSeleccionado = emp;
  }

  seleccionarRol(rol: RolModel) {
    this.usuario.idRol = rol.idRol;
    this.rolSeleccionado = rol;
  }

  guardar() {
    this.loading = true;

    if (!this.empleadoSeleccionado) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Selecciona un empleado',
      });
    }

    const request: RequestRegistrarUsuario = {
      usuario: this.usuario.usuario || '',
      passowrd: this.usuario.contrasenia || '',
      idEmpleado: this.empleadoSeleccionado?.idEmpleado || 0,
      idRol: this.rolSeleccionado?.idRol || 0,
    };

    console.log(request);

    this.usuarioService.RegistrarUsuario(request).subscribe({
      next: (resp: ResponseRegistroUsuario) => {
        this.loading = false;
        if (resp.exito) {
          this.resetFormulario();
          this.visibleChange.emit(false);
          this.onRegistroExitoso.emit();
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

  resetFormulario() {
    this.usuario = {
      usuario: '',
      contrasenia: '',
      idRol: 0,
      idEmpleado: 0,
    };
  }
}
