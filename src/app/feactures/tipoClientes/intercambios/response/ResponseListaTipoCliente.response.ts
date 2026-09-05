import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { TipoClienteModel } from "../../model/tipoCliente.model";

export class ResponseListaTipoCliente extends ResponseGeneral {
    tipoClientes: TipoClienteModel[] = []
}