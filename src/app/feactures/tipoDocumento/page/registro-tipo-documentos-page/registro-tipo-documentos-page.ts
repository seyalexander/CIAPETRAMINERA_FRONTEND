import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { RequestRegistroTipoDocumento } from '../../intercambios/request/RequestRegistroTipoDocumento.request';
import { MessageService } from 'primeng/api';
import { ResponseRegistroTipoDocumento } from '../../intercambios/response/ResponseRegistroTipoDocumento.response';
import { ToastModule } from 'primeng/toast';
import { TipoDocumentoService } from '../../services/api/tipo-documento-service';

@Component({
  selector: 'app-registro-tipo-documentos-page',
  imports: [AvatarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    SelectModule,
    ToastModule,],
  templateUrl: './registro-tipo-documentos-page.html',
  styleUrl: './registro-tipo-documentos-page.css',
  providers: [MessageService],
})
export class RegistroTipoDocumentosPage {
  @Input() visible: boolean = true;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onRegistroExitoso = new EventEmitter<void>();

  loading: boolean = false;
  tipoDocumentoService = inject(TipoDocumentoService);
  private messageService = inject(MessageService);

  tipoDocumento = {
    descripcion: '',
    codigoSunat: '',
    longitudMin: 0 as number | 0,
    longitudMax: 0 as number | 0,
    tipoCaracter: 0 as number | 0,
  };

  tiposCaracter = [
    { label: 'Numérico', value: 1 },
    { label: 'Letras', value: 2 },
    { label: 'Alfanumérico', value: 3 },
  ];

  guardar() {
    this.loading = true;

    const request: RequestRegistroTipoDocumento = {
      descripcion: this.tipoDocumento.descripcion || '',
      codigoSunat: this.tipoDocumento.codigoSunat || '',
      longitudMax: this.tipoDocumento.longitudMax || 0,
      longitudMin: this.tipoDocumento.longitudMin || 0,
      tipoCaracter: this.tipoDocumento.tipoCaracter || 0,
    };

    this.tipoDocumentoService.RegistrarTipoDocumento(request).subscribe({
      next: (resp: ResponseRegistroTipoDocumento) => {
       ;

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

  volverLista() {
    this.visibleChange.emit(false);
  }

  resetFormulario() {
    this.tipoDocumento = {
      descripcion: '',
      codigoSunat: '',
      longitudMin: 0 as number | 0,
      longitudMax: 0 as number | 0,
      tipoCaracter: 0 as number | 0,
    };
  }
}
