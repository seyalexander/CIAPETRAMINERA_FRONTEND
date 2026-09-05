import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RolModel } from '../../model/rolModel.model';
import { Badge } from "primeng/badge";
import { Dialog } from "primeng/dialog";
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { Button } from "primeng/button";


@Component({
  selector: 'app-detalle-roles-page',
  imports: [Button, Badge, Dialog, TimelineModule, CardModule, DividerModule],
  templateUrl: './detalle-roles-page.html',
  styleUrl: './detalle-roles-page.css',
})
export class DetalleRolesPage {
  @Input() visibleDetalle: boolean = true;
  @Output() visibleDetalleChange = new EventEmitter<boolean>();
  @Input() detalle: RolModel = new RolModel();

  volverLista() {
    this.visibleDetalleChange.emit(false);
  }
}
