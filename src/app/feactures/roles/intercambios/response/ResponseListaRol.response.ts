import { ResponseGeneral } from '../../../../shared/response/ResponseGeneral.response';
import { RolModel } from './../../model/rolModel.model';


export class ResponseListaRol extends ResponseGeneral {
  roles: RolModel[] = []
}
