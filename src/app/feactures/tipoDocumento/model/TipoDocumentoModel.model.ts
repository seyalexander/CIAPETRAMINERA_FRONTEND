export class TipoDocumentoModel {
  idTipoDocumentos: number = 0;
  descripcion: string = '';
  estado: number = 0;
  longitudMin: number = 0;
  longitudMax: number = 0;
  codigoSunat: string = '';
  tipoCaracter: number = 0;
  descripcionTipoCaracter: string = '';

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
