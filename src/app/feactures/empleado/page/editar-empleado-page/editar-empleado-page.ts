import { EmpleadoService } from './../../services/api/empleado-service';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { Toast } from 'primeng/toast';
import { EmpleadoModel } from '../../model/EmpleadoModel.model';
import { TipoDocumentoModel } from '../../../tipoDocumento/model/TipoDocumentoModel.model';
import { RequestEditarAllEmpleado } from '../../intercambios/request/RequestEditarAllEmpleado.request';
import { ResponseEditarAllEmpleado } from '../../intercambios/response/ResponseEditarAllEmpleado.response';
import { Divider } from 'primeng/divider';
import { RequestListaTipoDocumento } from '../../../tipoDocumento/intercambios/request/RequestListaTipoDocumento.request';
import { ResponseListaTipoDocumento } from '../../../tipoDocumento/intercambios/response/ResponseListaTipoDocumento.response';
import { DatePicker, DatePickerModule } from "primeng/datepicker";
import { InputMaskModule } from 'primeng/inputmask';
import { TipoDocumentoService } from '../../../tipoDocumento/services/api/tipo-documento-service';

@Component({
  selector: 'app-editar-empleado-page',
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
  ],
  templateUrl: './editar-empleado-page.html',
  styleUrl: './editar-empleado-page.css',
  providers: [MessageService],
})
export class EditarEmpleadoPage {
  @Input() visibleEditar: boolean = true;
  @Output() visibleEditarChange = new EventEmitter<boolean>();
  @Input() empleado: EmpleadoModel = new EmpleadoModel();
  @Output() onEditarExitoso = new EventEmitter<void>();

  tipoDocumentos: TipoDocumentoModel[] = [];

  empleadoService = inject(EmpleadoService);
  tipoDocumentoService = inject(TipoDocumentoService);
  private messageService = inject(MessageService);
  cdr = inject(ChangeDetectorRef);

  loading: boolean = false;

  volverLista() {
    this.visibleEditarChange.emit(false);
  }

  ngOnInit(): void {
    this.ObtenerListaTipoDocumentos(1);

  }

  empleadoEditar = {
    idEmpleado: 0,
    nombre: '',
    apellido: '',
    telefono: '',
    imagenUrl: 'https://i.pinimg.com/736x/9d/9f/e0/9d9fe08a397670cf7aa24facaddcceee.jpg',
    documento: '',
    idTipoDocumento: 0,
    fechaNacimiento: null as Date | null,
    fechaIngreso: null as Date | null,
    estado: 0,
  };

  ObtenerListaTipoDocumentos(estado: number): void {
    this.loading = true;
    const request: RequestListaTipoDocumento = { estado };
    this.tipoDocumentoService.ListarTipoDocumentos(request).subscribe({
      next: (resp: ResponseListaTipoDocumento) => {
        if (resp.exito) {
          this.tipoDocumentos = [...resp.tipoDocumentos];
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['empleado'] && this.empleadoEditar) {
      this.empleadoEditar = {
        idEmpleado: this.empleado.idEmpleado || 0,
        nombre: this.empleado.nombre || '',
        apellido: this.empleado.apellido || '',
        telefono: this.empleado.telefono || '',
        imagenUrl: this.empleado.imagenUrl || '',
        documento: this.empleado.documento || '',
        idTipoDocumento: this.empleado.idTipoDocumento || 0,
        fechaNacimiento: this.empleado.fechaNacimiento
          ? new Date(this.empleado.fechaNacimiento)
          : null,

        fechaIngreso: this.empleado.fechaIngreso ? new Date(this.empleado.fechaIngreso) : null,
        estado: this.empleado.estado || 0,
      };
    }
  }

  estadosEmpleado = [
    { label: 'Inactivo', value: 0 },
    { label: 'Activo', value: 1 },
  ];

  editar() {
    this.loading = true;

    const request: RequestEditarAllEmpleado = {
      idEmpleado: this.empleadoEditar.idEmpleado || 0,
      nombre: this.empleadoEditar.nombre || '',
      apellido: this.empleadoEditar.apellido || '',
      telefono: this.empleadoEditar.telefono || '',
      imagenUrl: this.empleadoEditar.imagenUrl || '',
      documento: this.empleadoEditar.documento || '',
      idTipoDocumento: this.empleadoEditar.idTipoDocumento || 0,
      fechaNacimiento: this.formatearFecha(this.empleadoEditar.fechaNacimiento) || '',
      fechaIngreso: this.formatearFecha(this.empleadoEditar.fechaIngreso) || '',
      estado: this.empleadoEditar.estado || 0,
    };

    this.empleadoService.EditarAllEmpleado(request).subscribe({
      next: (resp: ResponseEditarAllEmpleado) => {
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

  validarDocumento() {
    // const tipo = this.empleado.idTipoDocumento;

    // if (!tipo) return;

    // const min = tipo.longitudMin;
    // const max = tipo.longitudMax;
    // const valor = this.empleado.documento || '';

    // if (valor.length > 0 && (valor.length < min || valor.length > max)) {
    //   if (max - min == 0) {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Documento inválido',
    //       detail: `Debe tener ${max} caracteres`,
    //     });
    //   } else {
    //     this.messageService.add({
    //       severity: 'error',
    //       summary: 'Documento inválido',
    //       detail: `El Debe tener entre ${min} y ${max} caracteres`,
    //     });
    //   }
    // }
  }

  formatearFecha(fecha: Date | null): string {
    if (!fecha) return '';

    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  resetFormulario() {
    this.empleadoEditar = {
      idEmpleado: 0,
      nombre: '',
      apellido: '',
      telefono: '',
      imagenUrl: 'https://i.pinimg.com/736x/9d/9f/e0/9d9fe08a397670cf7aa24facaddcceee.jpg',
      documento: '',
      idTipoDocumento: 0,
      fechaNacimiento: null as Date | null,
      fechaIngreso: null as Date | null,
      estado: 0,
    };
  }
}
