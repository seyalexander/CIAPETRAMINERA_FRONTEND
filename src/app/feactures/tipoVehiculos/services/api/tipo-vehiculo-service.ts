import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestListaTipoDocumento } from '../../../tipoDocumento/intercambios/request/RequestListaTipoDocumento.request';
import { ResponseListaTipoDocumento } from '../../../tipoDocumento/intercambios/response/ResponseListaTipoDocumento.response';
import { RequestListaTipoVehiculo } from '../../intercambios/request/RequestListaTipoVehiculo.request';
import { ResponseListaTipoVehiculo } from '../../intercambios/response/ResponseListaTipoVehiculo.response';
import { ResponseEditarEstadoTipoVehiculo } from '../../intercambios/response/ResponseEditarEstadoTipoVehiculo.response';

@Injectable({
  providedIn: 'root',
})
export class TipoVehiculoService {
  private readonly url = environment.api;

  public ListarTipoVehiculos(
    req: RequestListaTipoVehiculo,
  ): Observable<ResponseListaTipoVehiculo> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaTipoVehiculo>(`${this.url}/v1/tipoVehiculo`, {
      params,
    });
  }

  // public RegistrarTipoDocumento(
  //   request: RequestRegistroTipoDocumento,
  // ): Observable<ResponseRegistroTipoDocumento> {
  //   return this.httpClient.post<ResponseRegistroTipoDocumento>(
  //     `${this.url}/v1/tipoDocumento`,
  //     request,
  //   );
  // }

  // public EditarAllTipoDocumento(
  //   request: RequestEditarAllTipoDocumento,
  // ): Observable<ResponseEditarAllTipoDocumento> {
  //   return this.httpClient.put<ResponseEditarAllTipoDocumento>(
  //     `${this.url}/v1/tipoDocumento`,
  //     request,
  //   );
  // }

  public AnularTipoVehiculo(idTipoVehiculo: number) {
    return this.httpClient.delete<ResponseEditarEstadoTipoVehiculo>(
      `${this.url}/v1/tipoVehiculo/${idTipoVehiculo}`,
    );
  }

  public ActivarTipoVehiculo(idTipoVehiculo: number) {
    return this.httpClient.patch<ResponseEditarEstadoTipoVehiculo>(
      `${this.url}/v1/tipoVehiculo/${idTipoVehiculo}/activar`,
      {},
    );
  }

  constructor(private httpClient: HttpClient) {}
}
