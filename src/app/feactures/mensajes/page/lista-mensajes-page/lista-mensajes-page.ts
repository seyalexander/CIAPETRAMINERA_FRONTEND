import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lista-mensajes-page',
  imports: [CardModule, AvatarModule, BadgeModule, TagModule, ButtonModule],
  templateUrl: './lista-mensajes-page.html',
  styleUrl: './lista-mensajes-page.css',
})
export class ListaMensajesPage {
  mensajes = [
  {
    id: 1,
    titulo: 'Nueva versión registrada',
    descripcion: 'Se registró la versión v4 del Manual de Calidad.',
    fecha: 'Hace 5 minutos',
    tipo: 'Documento',
    severity: 'info',
    icono: 'pi pi-file',
    leido: false
  },
  {
    id: 2,
    titulo: 'Proceso actualizado',
    descripcion: 'El proceso Compras cambió de responsable.',
    fecha: 'Hace 1 hora',
    tipo: 'Proceso',
    severity: 'warning',
    icono: 'pi pi-sitemap',
    leido: true
  },
  {
    id: 3,
    titulo: 'Documento aprobado',
    descripcion: 'El documento Procedimiento de Compras fue aprobado.',
    fecha: 'Ayer',
    tipo: 'Aprobación',
    severity: 'success',
    icono: 'pi pi-check-circle',
    leido: true
  },
  {
    id: 4,
    titulo: 'Cambio de contraseña',
    descripcion: 'Tu contraseña fue modificada correctamente.',
    fecha: 'Hace 2 días',
    tipo: 'Seguridad',
    severity: 'contrast',
    icono: 'pi pi-shield',
    leido: false
  }
];
}
