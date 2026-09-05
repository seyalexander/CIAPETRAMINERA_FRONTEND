import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";
import { EmpleadoModel } from "../../model/EmpleadoModel.model";

export class ResponseListaEmpleados extends ResponseGeneral {
  empleados: EmpleadoModel[] = []
}
