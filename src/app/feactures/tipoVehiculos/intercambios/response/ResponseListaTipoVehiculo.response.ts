import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { TipoVehiculoModel } from "../../model/TipoVehiculoModel.model";

export class ResponseListaTipoVehiculo extends ResponseGeneral {
    tipoVehiculos: TipoVehiculoModel[] = []
}