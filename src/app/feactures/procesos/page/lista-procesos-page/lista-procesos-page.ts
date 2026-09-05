import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-lista-procesos-page',
  imports: [Button, TableModule, ButtonModule, TagModule, BadgeModule, TooltipModule],
  templateUrl: './lista-procesos-page.html',
  styleUrl: './lista-procesos-page.css',
})
export class ListaProcesosPage {
  procesos = [
  {
    id: 1,
    nombre: 'Compras',
    descripcion: 'Proceso de adquisición de bienes y servicios.',
    responsable: 'Juan Pérez',
    totalDocumentos: 12,
    activo: true
  },
  {
    id: 2,
    nombre: 'Recursos Humanos',
    descripcion: 'Gestión del personal.',
    responsable: 'María López',
    totalDocumentos: 8,
    activo: true
  },
  {
    id: 3,
    nombre: 'Contabilidad',
    descripcion: 'Control financiero y contable.',
    responsable: 'Carlos Díaz',
    totalDocumentos: 15,
    activo: false
  }
];
}
