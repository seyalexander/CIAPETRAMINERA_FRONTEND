import { Component } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-lista-auditoria-page',
  imports: [ButtonModule, TableModule, TagModule],
  templateUrl: './lista-auditoria-page.html',
  styleUrl: './lista-auditoria-page.css',
})
export class ListaAuditoriaPage {
  auditorias = [
  {
    id: 1,
    usuario: 'Administrador',
    modulo: 'Usuarios',
    accion: 'Creó',
    descripcion: 'Registró un nuevo usuario.',
    fecha: '28/06/2026 09:30',
    ip: '192.168.1.10',
    severity: 'success'
  },
  {
    id: 2,
    usuario: 'Juan Pérez',
    modulo: 'Documentos',
    accion: 'Actualizó',
    descripcion: 'Subió una nueva versión del Manual de Calidad.',
    fecha: '28/06/2026 10:15',
    ip: '192.168.1.15',
    severity: 'info'
  },
  {
    id: 3,
    usuario: 'María López',
    modulo: 'Procesos',
    accion: 'Eliminó',
    descripcion: 'Eliminó el proceso Contabilidad.',
    fecha: '28/06/2026 11:05',
    ip: '192.168.1.20',
    severity: 'danger'
  }
];
}
