import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { UsuarioModel } from "../../model/usuarioModel.model";

export class ResponseDetalleUsuario extends ResponseGeneral {
    usuario: UsuarioModel = {} as UsuarioModel;
}