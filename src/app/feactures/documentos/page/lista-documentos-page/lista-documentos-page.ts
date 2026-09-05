import { CommonModule, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from "primeng/table";
import { Select } from "primeng/select";
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from "primeng/button";
import { TagModule } from 'primeng/tag';
import { ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { RegistroDocumentosPage } from "../registro-documentos-page/registro-documentos-page";
import { Toast } from "primeng/toast";
import { ConfirmDialog } from "primeng/confirmdialog";
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-lista-documentos-page',
  imports: [Toast, ConfirmDialog, FormsModule, MultiSelectModule, TagModule, ProgressBarModule, NgClass, TableModule, Select, InputTextModule, InputIconModule, IconFieldModule, CommonModule, Button, RegistroDocumentosPage],
  templateUrl: './lista-documentos-page.html',
  styleUrl: './lista-documentos-page.css',
  providers: [ConfirmationService, MessageService]
})
export class ListaDocumentosPage {

  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  showRegistro: boolean = false;

  mostrarRegistroDocumento() {
    this.showRegistro = true;
  }

  // ===============================================================================
  // EDITAR DOCUMENTO
  // ===============================================================================

  editarDocumento(event: Event, documento: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Desea editar ${documento.descripcion}?`,
      header: 'Anular Usuario',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancel',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger'
      },

      accept: () => {
        // this.anularUsuarioConfirmado(usuario)
      },
      reject: () => { }
    });
  }


  searchProceso = '';
  globalFilter = '';
  tipoSeleccionado: any = null;

  procesoSeleccionado: any = null;

  procesos = [
  { id: 1, nombre: 'Gestión de Expedientes Judiciales', total: 500 },
  { id: 2, nombre: 'Asesoría Legal Corporativa', total: 500 },
  { id: 3, nombre: 'Derecho Civil - Contratos', total: 500 },
  { id: 4, nombre: 'Derecho Penal - Defensa de Clientes', total: 500 },
  { id: 5, nombre: 'Derecho Laboral - Litigios', total: 500 },
  { id: 6, nombre: 'Derecho Tributario y Fiscal', total: 500 },
  { id: 7, nombre: 'Constitución de Empresas', total: 500 },
  { id: 8, nombre: 'Redacción y Revisión de Contratos', total: 500 },
  { id: 9, nombre: 'Procesos de Cobranza Judicial', total: 500 },
  { id: 10, nombre: 'Derecho de Familia - Divorcios y Custodia', total: 500 },
  { id: 11, nombre: 'Derecho Inmobiliario y Propiedad', total: 500 },
  { id: 12, nombre: 'Arbitraje y Resolución de Conflictos', total: 500 },
  { id: 13, nombre: 'Propiedad Intelectual y Marcas', total: 500 },
  { id: 14, nombre: 'Procesos Administrativos', total: 500 },
  { id: 15, nombre: 'Defensa en Procedimientos Sancionadores', total: 500 }
];

  documentos = [
  {
    codigo: 'EXP-CIV-2024-001',
    descripcion: 'Demanda de Obligación de Dar Suma de Dinero',
    fecha: '01-02-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-LAB-2024-002',
    descripcion: 'Contrato de Trabajo - Revisión Legal',
    fecha: '10-03-2024',
    estado: '0',
    version: '02'
  },
  {
    codigo: 'EXP-PEN-2024-003',
    descripcion: 'Escrito de Defensa Penal',
    fecha: '20-05-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-CIV-2024-004',
    descripcion: 'Recurso de Apelación Civil',
    fecha: '05-06-2024',
    estado: '0',
    version: '01'
  },
  {
    codigo: 'EXP-LAB-2024-005',
    descripcion: 'Liquidación de Beneficios Sociales',
    fecha: '18-06-2024',
    estado: '1',
    version: '02'
  },
  {
    codigo: 'EXP-FAM-2024-006',
    descripcion: 'Proceso de Tenencia de Menores',
    fecha: '25-06-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-CIV-2024-001',
    descripcion: 'Demanda de Obligación de Dar Suma de Dinero - Actualización',
    fecha: '01-02-2024',
    estado: '1',
    version: '02'
  },
  {
    codigo: 'EXP-LAB-2024-002',
    descripcion: 'Contrato de Trabajo - Versión Final',
    fecha: '10-03-2024',
    estado: '1',
    version: '03'
  },
  {
    codigo: 'EXP-PEN-2024-003',
    descripcion: 'Escrito de Defensa Penal - Ampliación',
    fecha: '20-05-2024',
    estado: '1',
    version: '02'
  },
  {
    codigo: 'EXP-CIV-2024-007',
    descripcion: 'Proceso de Cobranza Judicial',
    fecha: '12-07-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-CIV-2024-008',
    descripcion: 'Contrato de Arrendamiento Inmobiliario',
    fecha: '15-07-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-PEN-2024-009',
    descripcion: 'Solicitud de Archivo Fiscal',
    fecha: '20-07-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-FAM-2024-010',
    descripcion: 'Divorcio por Mutuo Acuerdo',
    fecha: '25-07-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-CIV-2024-011',
    descripcion: 'Demanda de Indemnización por Daños y Perjuicios',
    fecha: '30-07-2024',
    estado: '1',
    version: '01'
  },
  {
    codigo: 'EXP-LAB-2024-012',
    descripcion: 'Reclamo de Beneficios Laborales',
    fecha: '05-08-2024',
    estado: '1',
    version: '01'
  }
];

  tiposDoc = [
    { label: 'Todos', value: null },
    { label: 'Política', value: 'politica' },
    { label: 'Manual', value: 'manual' }
  ];

  ngOnInit() {
    this.procesoSeleccionado = this.procesos[0];
  }

  procesosFiltrados() {
    return this.procesos.filter(p =>
      p.nombre.toLowerCase().includes(this.searchProceso.toLowerCase())
    );
  }

  selectProceso(p: any) {
    this.procesoSeleccionado = p;
  }

  loading: boolean = true;
}
