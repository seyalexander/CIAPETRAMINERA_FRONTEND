import { ResponseGeneral } from "../../../../shared/response/ResponseGeneral.response";

export class ResponseLogin extends ResponseGeneral {
  usuario: string = '';
  token: string = '';
  nombre: string = '';
  descripcionRol: string[] = [];
}
