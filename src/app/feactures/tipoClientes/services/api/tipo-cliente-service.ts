import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestListaTipoCliente } from '../../intercambios/request/RequestListaTipoCliente.request';
import { Observable } from 'rxjs';
import { ResponseListaTipoCliente } from '../../intercambios/response/ResponseListaTipoCliente.response';

@Injectable({
  providedIn: 'root',
})
export class TipoClienteService {
  private readonly url = environment.api;

  public ListarTipoClientes(req: RequestListaTipoCliente): Observable<ResponseListaTipoCliente> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaTipoCliente>(`${this.url}/v1/TipoClientes`, {
      params,
    });
  }

  // public RegistrarRol(request: RequestRegistrarRol): Observable<ResponseRegistrarRol> {
  //   return this.httpClient.post<ResponseRegistrarRol>(`${this.url}/v1/rol`, request);
  // }

  // public EditarAllRol(request: RequestEditarAllRol): Observable<ResponseEditarAllRol> {
  //   return this.httpClient.put<ResponseEditarAllRol>(`${this.url}/v1/rol`, request);
  // }

  // public AnularRol(idRol: number) {
  //   return this.httpClient.delete<ResponseEditarEstadoRol>(`${this.url}/v1/rol/${idRol}`);
  // }

  // public ActivarRol(idRol: number) {
  //   return this.httpClient.patch<ResponseEditarEstadoRol>(
  //     `${this.url}/v1/rol/${idRol}/activar`,
  //     {},
  //   );
  // }

  constructor(private httpClient: HttpClient) {}
}
