import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { UnidadMedidaModel } from "../../model/UnidadMedida.model";

export class ResponseListaUnidadMedida extends ResponseGeneral {
    unidadesMedida: UnidadMedidaModel[] = [];
}