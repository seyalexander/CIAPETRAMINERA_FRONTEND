import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { RequestListaClientes } from '../../intercambios/request/RequestListaClientes.request';
import { Observable } from 'rxjs';
import { ResponseListaClientes } from '../../intercambios/response/ResponseListaClientes.response';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly url = environment.api;

  public ListarTipoClientes(req: RequestListaClientes): Observable<ResponseListaClientes> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaClientes>(`${this.url}/v1/clientes`, {
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
