import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { TransportistaModel } from "../../model/transportista.model";

export class ResponseListaTransportista extends ResponseGeneral {
    transportistas: TransportistaModel[] = []
}