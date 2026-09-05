import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ToastModule } from 'primeng/toast';
import { UnidadMedidaService } from '../../services/api/unidad-medida-service';
import { RequestRegistrarUnidadMedida } from '../../intercambios/request/RequestRegistrarUnidadMedida.request';
import { ResponseRegistrarUnidadMedida } from '../../intercambios/response/ResponseRegistrarUnidadMedida.response';

@Component({
  selector: 'app-registro-unidad-medida-page',
  imports: [
    AvatarModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    CommonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    SelectModule,
    ToastModule
  ],
  templateUrl: './registro-unidad-medida-page.html',
  styleUrl: './registro-unidad-medida-page.css',
  providers: [MessageService],
})
export class RegistroUnidadMedidaPage {
  @Input() visible: boolean = true;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onRegistroExitoso = new EventEmitter<void>();

  loading: boolean = false;
  unidadMedidaService = inject(UnidadMedidaService);
  private messageService = inject(MessageService);

  unidadMedida = {
    descripcion: '',
    siglas: ''
  }

  guardar() {
    this.loading = true;

    const request: RequestRegistrarUnidadMedida = {
      descripcion: this.unidadMedida.descripcion || '',
      siglas: this.unidadMedida.siglas || ''
    };

    this.unidadMedidaService.RegistrarUnidadMedida(request).subscribe({
      next: (resp: ResponseRegistrarUnidadMedida) => {
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
    this.unidadMedida = {
      descripcion: '',
      siglas: ''
    }
  }
}
