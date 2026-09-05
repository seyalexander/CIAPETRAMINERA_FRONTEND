import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { UsuarioModel } from "../../model/usuarioModel.model";

export class ResponseListaUsuarios extends ResponseGeneral {
  usuarios: UsuarioModel[] = []
}
