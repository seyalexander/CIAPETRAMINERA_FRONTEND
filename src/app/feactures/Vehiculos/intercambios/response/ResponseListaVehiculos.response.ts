import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { VehiculoModel } from "../../model/Vehiculo.model";

export class ResponseListaVehiculos extends ResponseGeneral {
    vehiculos: VehiculoModel[] = []
}