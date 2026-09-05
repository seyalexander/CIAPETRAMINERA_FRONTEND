import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestListaRol } from '../../intercambios/request/RequestListaRol.request';
import { Observable } from 'rxjs';
import { ResponseListaRol } from '../../intercambios/response/ResponseListaRol.response';
import { RequestRegistrarRol } from '../../intercambios/request/RequestRegistroRol.request';
import { ResponseRegistrarRol } from '../../intercambios/response/ResponseRegistroRol.response';
import { RequestEditarAllRol } from '../../intercambios/request/RequestEditarAllRol.request';
import { ResponseEditarAllRol } from '../../intercambios/response/ResponseEditarAllRol.response';
import { ResponseEditarEstadoRol } from '../../intercambios/response/ResponseEditarEstadoRol.response';


@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private readonly url = environment.api;

  public ListarRoles(req: RequestListaRol): Observable<ResponseListaRol> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaRol>(`${this.url}/v1/rol`, {
      params,
    });
  }

  public RegistrarRol(request: RequestRegistrarRol): Observable<ResponseRegistrarRol> {
    return this.httpClient.post<ResponseRegistrarRol>(`${this.url}/v1/rol`, request);
  }

  public EditarAllRol(request: RequestEditarAllRol): Observable<ResponseEditarAllRol> {
    return this.httpClient.put<ResponseEditarAllRol>(`${this.url}/v1/rol`, request);
  }

  public AnularRol(idRol: number) {
    return this.httpClient.delete<ResponseEditarEstadoRol>(`${this.url}/v1/rol/${idRol}`);
  }

  public ActivarRol(idRol: number) {
    return this.httpClient.patch<ResponseEditarEstadoRol>(
      `${this.url}/v1/rol/${idRol}/activar`,
      {},
    );
  }

  constructor(private httpClient: HttpClient) {}
}
