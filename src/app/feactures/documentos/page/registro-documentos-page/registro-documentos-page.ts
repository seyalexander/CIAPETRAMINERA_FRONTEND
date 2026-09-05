import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FileUploadModule, FileSelectEvent } from 'primeng/fileupload';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-registro-documentos-page',
  standalone: true,
  imports: [
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TextareaModule,
    FileUploadModule,
    TagModule
  ],
  templateUrl: './registro-documentos-page.html',
  styleUrl: './registro-documentos-page.css',
})
export class RegistroDocumentosPage {

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  procesoSeleccionado = {
    id: 1,
    nombre: 'Gestión de Compras'
  };

  nombreArchivo: string = '';

  versionSiguiente: number = 1;

  observacion: string = '';

  archivoSeleccionado?: File;

  cerrarModal() {
    this.visible = false;
    this.visibleChange.emit(false);

    this.nombreArchivo = '';
    this.observacion = '';
    this.archivoSeleccionado = undefined;
    this.versionSiguiente = 1;
  }

  seleccionarArchivo(event: FileSelectEvent) {

    if (!event.files.length) {
      return;
    }

    this.archivoSeleccionado = event.files[0];
    this.nombreArchivo = this.archivoSeleccionado.name;

    // Aquí luego consultarás al backend para obtener
    // la siguiente versión del documento.
    //
    // Ejemplo:
    //
    // this.documentoService.obtenerVersion(
    //      this.procesoSeleccionado.id,
    //      this.nombreArchivo
    // ).subscribe(resp => {
    //      this.versionSiguiente = resp.version;
    // });
  }

  guardar() {

    if (!this.archivoSeleccionado) {
      alert('Seleccione un documento.');
      return;
    }

    const formData = new FormData();

    formData.append('archivo', this.archivoSeleccionado);
    formData.append('idProceso', this.procesoSeleccionado.id.toString());
    formData.append('observacion', this.observacion);

    // La versión debería calcularla nuevamente el backend
    // antes de guardar.
    // No es necesario enviarla.

    console.log(formData);

    // this.documentoService.registrar(formData)
    //   .subscribe(() => {
    //      this.cerrarModal();
    //   });
  }

}