import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseListaUnidadMedida } from '../../intercambios/response/ResponseListaUnidadMedida.response';
import { RequestListaUnidadMedida } from '../../intercambios/request/RequesListatUnidadMedida.request';
import { ResponseEditarEstadoUnidadMedida } from '../../intercambios/response/ResponseEditarEstadoUnidadMedida.response';
import { ResponseRegistrarUnidadMedida } from '../../intercambios/response/ResponseRegistrarUnidadMedida.response';
import { RequestRegistrarUnidadMedida } from '../../intercambios/request/RequestRegistrarUnidadMedida.request';

@Injectable({
  providedIn: 'root',
})
export class UnidadMedidaService {
  private readonly url = environment.api;

   public ListarUnidadMedida(
    req: RequestListaUnidadMedida,
  ): Observable<ResponseListaUnidadMedida> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaUnidadMedida>(`${this.url}/v1/unidadMedida`, {
      params,
    });
  }

  public RegistrarUnidadMedida(
    request: RequestRegistrarUnidadMedida,
  ): Observable<ResponseRegistrarUnidadMedida> {
    return this.httpClient.post<ResponseRegistrarUnidadMedida>(
      `${this.url}/v1/unidadMedida`,
      request,
    );
  }

  // public EditarAllTipoDocumento(
  //   request: RequestEditarAllTipoDocumento,
  // ): Observable<ResponseEditarAllTipoDocumento> {
  //   return this.httpClient.put<ResponseEditarAllTipoDocumento>(
  //     `${this.url}/v1/tipoDocumento`,
  //     request,
  //   );
  // }

  public AnularUnidadMedida(idUnidadMedida: number) {
    return this.httpClient.delete<ResponseEditarEstadoUnidadMedida>(
      `${this.url}/v1/unidadMedida/${idUnidadMedida}`,
    );
  }

  public ActivarUnidadMedida(idUnidadMedida: number) {
    return this.httpClient.patch<ResponseEditarEstadoUnidadMedida>(
      `${this.url}/v1/unidadMedida/${idUnidadMedida}/activar`,
      {},
    );
  }

  constructor(private httpClient: HttpClient) {}
}
