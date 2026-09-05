import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { TipoDocumentoModel } from '../../model/TipoDocumentoModel.model';
import { Dialog } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Button } from 'primeng/button';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RequestEditarAllTipoDocumento } from '../../intercambios/request/RequestEditarAllTipoDocumento.request';
import { ResponseEditarAllTipoDocumento } from '../../intercambios/response/ResponseEditarAllTipoDocumento.response';
import { TipoDocumentoService } from '../../services/api/tipo-documento-service';


@Component({
  selector: 'app-editar-tipo-documentos-page',
  imports: [
    Dialog,
    ReactiveFormsModule,
    FormsModule,
    Select,
    Button,
    Toast,
    InputTextModule,
    FloatLabelModule,
  ],
  templateUrl: './editar-tipo-documentos-page.html',
  styleUrl: './editar-tipo-documentos-page.css',
  providers: [MessageService],
})
export class EditarTipoDocumentosPage {
  @Input() visibleEditar: boolean = true;
  @Output() visibleEditarChange = new EventEmitter<boolean>();
  @Input() tipoDocumento: TipoDocumentoModel = new TipoDocumentoModel();
  @Output() onEditarExitoso = new EventEmitter<void>();

  tipoDocumentoService = inject(TipoDocumentoService);
  private messageService = inject(MessageService);

  loading: boolean = false;

  volverLista() {
    this.visibleEditarChange.emit(false);
  }

  tipoDocumentoEditar = {
    idTipoDocumentos: 0,
    descripcion: '',
    codigoSunat: '',
    longitudMin: 0,
    longitudMax: 0,
    tipoCaracter: 0,
    estado: 0,
  };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tipoDocumento'] && this.tipoDocumento) {
      this.tipoDocumentoEditar = {
        idTipoDocumentos: this.tipoDocumento.idTipoDocumentos || 0,
        descripcion: this.tipoDocumento.descripcion || '',
        codigoSunat: this.tipoDocumento.codigoSunat || '',
        longitudMin: this.tipoDocumento.longitudMin || 0,
        longitudMax: this.tipoDocumento.longitudMax || 0,
        tipoCaracter: this.tipoDocumento.tipoCaracter || 0,
        estado: this.tipoDocumento.estado || 0,
      };
    }
  }

  tiposCaracter = [
    { label: 'Numérico', value: 1 },
    { label: 'Letras', value: 2 },
    { label: 'Alfanumérico', value: 3 },
  ];

  estadosTipoDocumentos = [
    { label: 'Inactivo', value: 0 },
    { label: 'Activo', value: 1 },
  ];

  editar() {

    this.loading = true;

    const request: RequestEditarAllTipoDocumento = {
      idTipoDocumentos: this.tipoDocumentoEditar.idTipoDocumentos || 0,
      descripcion: this.tipoDocumentoEditar.descripcion || '',
      codigoSunat: this.tipoDocumentoEditar.codigoSunat || '',
      longitudMax: this.tipoDocumentoEditar.longitudMax || 0,
      longitudMin: this.tipoDocumentoEditar.longitudMin || 0,
      tipoCaracter: this.tipoDocumentoEditar.tipoCaracter || 0,
      estado: this.tipoDocumentoEditar.estado || 0,
    };

    this.tipoDocumentoService.EditarAllTipoDocumento(request).subscribe({
      next: (resp: ResponseEditarAllTipoDocumento) => {
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

  resetFormulario() {
    this.tipoDocumentoEditar = {
      idTipoDocumentos: 0,
      descripcion: '',
      codigoSunat: '',
      longitudMin: 0 as number | 0,
      longitudMax: 0 as number | 0,
      tipoCaracter: 0 as number | 0,
      estado: 0 as number | 0,
    };
  }
}
