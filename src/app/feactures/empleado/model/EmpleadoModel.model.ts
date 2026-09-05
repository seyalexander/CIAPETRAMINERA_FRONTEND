export class EmpleadoModel {
  idEmpleado: number = 0
  nombre: string = ''
  apellido: string = ''
  telefono: string = ''
  imagenUrl: string = ''
  estado: number = 0
  documento: string = ''
  idTipoDocumento: number = 0
  fechaNacimiento: Date = new Date()
  fechaIngreso: Date = new Date()
  idEmpresa: number = 0

    // Auditoría
  fechaCreacion: string = '';
  fechaEdicion: string = '';
  fechaAnulacion: string = '';
  idUsuarioCreacion: number = 0;
  idUsuarioEdicion: number = 0;
  idUsuarioAnulacion: number = 0;
  usuarioCreacion: string = '';
  usuarioEdicion: string = '';
  usuarioAnulacion: string = '';
}
