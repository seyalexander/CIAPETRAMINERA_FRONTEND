export class RolModel {
  idRol: number = 0;
  descripcion: string = '';
  estado: number = 0;

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
