import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Dialog } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { Toast } from 'primeng/toast';
import { RequestRegistroEmpleado } from '../../intercambios/request/RequestRegistroEmpleado.request';
import { EmpleadoService } from '../../services/api/empleado-service';
import { ResponseRegistroEmpleado } from '../../intercambios/response/ResponseRegistroEmpleado.response';
import { SelectModule } from 'primeng/select';
import { RequestListaTipoDocumento } from '../../../tipoDocumento/intercambios/request/RequestListaTipoDocumento.request';
import { ResponseListaTipoDocumento } from '../../../tipoDocumento/intercambios/response/ResponseListaTipoDocumento.response';
import { TipoDocumentoModel } from '../../../tipoDocumento/model/TipoDocumentoModel.model';
import { InputMaskModule } from 'primeng/inputmask';
import { DatePickerModule } from 'primeng/datepicker';
import { TipoDocumentoService } from '../../../tipoDocumento/services/api/tipo-documento-service';

@Component({
  selector: 'app-registrar-empleado-page',
  imports: [
    Toast,
    DividerModule,
    Dialog,
    CommonModule,
    FormsModule,
    InputTextModule,
    FileUploadModule,
    Button,
    SelectModule,
    InputMaskModule,
    DatePickerModule,
  ],
  templateUrl: './registrar-empleado-page.html',
  styleUrl: './registrar-empleado-page.css',
  providers: [MessageService],
})
export class RegistrarEmpleadoPage {
  @Input() visible: boolean = true;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onRegistroExitoso = new EventEmitter<void>();

  loading: boolean = false;
  tipoDocumentos: TipoDocumentoModel[] = [];
  empleadoService = inject(EmpleadoService);
  tipoDocumentoService = inject(TipoDocumentoService);
  private messageService = inject(MessageService);
  cdr = inject(ChangeDetectorRef);

  empleado = {
    nombre: '',
    apellido: '',
    telefono: '',
    imagenUrl: 'https://i.pinimg.com/736x/9d/9f/e0/9d9fe08a397670cf7aa24facaddcceee.jpg',
    documento: '',
    idTipoDocumento: null as TipoDocumentoModel | null,
    fechaNacimiento: null as Date | null,
    fechaIngreso: null as Date | null,
  };

  ngOnInit(): void {
    this.ObtenerListaTipoDocumentos(1);
  }

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

  guardar() {
    this.loading = true;

    const request: RequestRegistroEmpleado = {
      nombre: this.empleado.nombre || '',
      apellido: this.empleado.apellido || '',
      telefono: this.empleado.telefono || '',
      imagenUrl: this.empleado.imagenUrl || '',
      documento: this.empleado.documento || '',
      idTipoDocumento: this.empleado.idTipoDocumento?.idTipoDocumentos || 0,
      fechaNacimiento: this.formatearFecha(this.empleado.fechaNacimiento) || '',
      fechaIngreso: this.formatearFecha(this.empleado.fechaIngreso) || '',
    };

    this.empleadoService.RegistrarEmpleado(request).subscribe({
      next: (resp: ResponseRegistroEmpleado) => {
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

  validarDocumento() {
    const tipo = this.empleado.idTipoDocumento;

    if (!tipo) return;

    const min = tipo.longitudMin;
    const max = tipo.longitudMax;
    const valor = this.empleado.documento || '';

    if (valor.length > 0 && (valor.length < min || valor.length > max)) {
      if (max - min == 0) {
        this.messageService.add({
          severity: 'error',
          summary: 'Documento inválido',
          detail: `Debe tener ${max} caracteres`,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Documento inválido',
          detail: `El Debe tener entre ${min} y ${max} caracteres`,
        });
      }
    }
  }

  formatearFecha(fecha: Date | null): string {
    if (!fecha) return '';

    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  volverLista() {
    this.visibleChange.emit(false);
  }

  resetFormulario() {
    this.empleado = {
      nombre: '',
      apellido: '',
      telefono: '',
      imagenUrl: 'https://i.pinimg.com/736x/9d/9f/e0/9d9fe08a397670cf7aa24facaddcceee.jpg',
      documento: '',
      idTipoDocumento: null as TipoDocumentoModel | null,
      fechaNacimiento: null as Date | null,
      fechaIngreso: null as Date | null,
    };
  }
}
