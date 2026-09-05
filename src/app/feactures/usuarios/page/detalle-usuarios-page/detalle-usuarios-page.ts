import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioModel } from '../../model/usuarioModel.model';

import { Dialog } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { Badge } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { Button } from 'primeng/button';
import { Tag } from "primeng/tag";

@Component({
    selector: 'app-detalle-usuarios-page',
    standalone: true,
    imports: [
    Dialog,
    CardModule,
    Badge,
    DividerModule,
    Button,
    Tag
],
    templateUrl: './detalle-usuarios-page.html',
    styleUrl: './detalle-usuarios-page.css'
})
export class DetalleUsuariosPage {

    @Input() visibleDetalle = false;

    @Output() visibleDetalleChange = new EventEmitter<boolean>();

    @Input() detalle: UsuarioModel = new UsuarioModel();

    volverLista() {
        this.visibleDetalleChange.emit(false);
    }

}