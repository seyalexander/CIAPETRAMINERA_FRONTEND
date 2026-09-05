import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { RequestListaVehiculos } from '../../intercambios/request/RequestListaVehiculos.request';
import { Observable } from 'rxjs';
import { ResponseListaVehiculos } from '../../intercambios/response/ResponseListaVehiculos.response';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private readonly url = environment.api;

  public ListarTVehiculos(req: RequestListaVehiculos): Observable<ResponseListaVehiculos> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaVehiculos>(`${this.url}/v1/vehiculo`, {
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
