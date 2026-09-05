import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { ClientesModel } from "../../model/cliente.model";

export class ResponseListaClientes extends ResponseGeneral {
    clientes: ClientesModel[] = []
}