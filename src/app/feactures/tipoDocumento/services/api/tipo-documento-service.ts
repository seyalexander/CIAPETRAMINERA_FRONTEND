import { environment } from './../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestListaTipoDocumento } from '../../intercambios/request/RequestListaTipoDocumento.request';
import { Observable } from 'rxjs';
import { ResponseListaTipoDocumento } from '../../intercambios/response/ResponseListaTipoDocumento.response';
import { HttpParams } from '@angular/common/http';
import { RequestRegistroTipoDocumento } from '../../intercambios/request/RequestRegistroTipoDocumento.request';
import { ResponseRegistroTipoDocumento } from '../../intercambios/response/ResponseRegistroTipoDocumento.response';
import { ResponseEditarAllTipoDocumento } from '../../intercambios/response/ResponseEditarAllTipoDocumento.response';
import { RequestEditarAllTipoDocumento } from '../../intercambios/request/RequestEditarAllTipoDocumento.request';
import { ResponseEditarEstadoTipoDocumento } from '../../intercambios/response/ResponseEditarEstadoTipoDocumento.response';


@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoService {
  private readonly url = environment.api;

  public ListarTipoDocumentos(
    req: RequestListaTipoDocumento,
  ): Observable<ResponseListaTipoDocumento> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaTipoDocumento>(`${this.url}/v1/tipoDocumento`, {
      params,
    });
  }

  public RegistrarTipoDocumento(
    request: RequestRegistroTipoDocumento,
  ): Observable<ResponseRegistroTipoDocumento> {
    return this.httpClient.post<ResponseRegistroTipoDocumento>(
      `${this.url}/v1/tipoDocumento`,
      request,
    );
  }

  public EditarAllTipoDocumento(
    request: RequestEditarAllTipoDocumento,
  ): Observable<ResponseEditarAllTipoDocumento> {
    return this.httpClient.put<ResponseEditarAllTipoDocumento>(
      `${this.url}/v1/tipoDocumento`,
      request,
    );
  }

  public AnularTipoDocumento(idTipoDocumentos: number) {
    return this.httpClient.delete<ResponseEditarEstadoTipoDocumento>(
      `${this.url}/v1/tipoDocumento/${idTipoDocumentos}`,
    );
  }

  public ActivarTipoDocumento(idTipoDocumentos: number) {
    return this.httpClient.patch<ResponseEditarEstadoTipoDocumento>(
      `${this.url}/v1/tipoDocumento/${idTipoDocumentos}/activar`,
      {},
    );
  }

  constructor(private httpClient: HttpClient) {}
}
