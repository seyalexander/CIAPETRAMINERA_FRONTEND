import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { TipoDocumentoModel } from "../../model/TipoDocumentoModel.model";

export class ResponseListaTipoDocumento extends ResponseGeneral{
  tipoDocumentos: TipoDocumentoModel[] = []
}
