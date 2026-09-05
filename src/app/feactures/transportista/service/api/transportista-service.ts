import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { RequestListaTransportistas } from '../../intercambios/request/RequestListaTransportistas.request';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseListaTransportista } from '../../intercambios/response/ResponseListaTransportistas.response';

@Injectable({
  providedIn: 'root',
})
export class TransportistaService {
  private readonly url = environment.api;

  public ListarTransportistas(req: RequestListaTransportistas): Observable<ResponseListaTransportista> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaTransportista>(`${this.url}/v1/transportista`, {
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
