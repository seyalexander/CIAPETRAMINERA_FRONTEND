import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from "primeng/button";
import { TipoDocumentoModel } from '../../model/TipoDocumentoModel.model';
import { Badge } from "primeng/badge";
import { Dialog } from "primeng/dialog";
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-detalle-tipo-documentos-page',
  imports: [Button, Badge, Dialog, TimelineModule, CardModule, DividerModule],
  templateUrl: './detalle-tipo-documentos-page.html',
  styleUrl: './detalle-tipo-documentos-page.css',
})
export class DetalleTipoDocumentosPage {
  @Input() visibleDetalle: boolean = true;
  @Output() visibleDetalleChange  = new EventEmitter<boolean>();
  @Input() detalle: TipoDocumentoModel = new TipoDocumentoModel();

  volverLista() {
    this.visibleDetalleChange .emit(false);
  }
}
