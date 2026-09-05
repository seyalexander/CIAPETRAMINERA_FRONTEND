import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { RequestListarEmpleado } from '../../intercambios/request/RequestListarEmpleado.request';
import { Observable } from 'rxjs';
import { ResponseListaEmpleados } from '../../intercambios/response/ResponseListarEmpleado.response';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RequestRegistroEmpleado } from '../../intercambios/request/RequestRegistroEmpleado.request';
import { ResponseRegistroEmpleado } from '../../intercambios/response/ResponseRegistroEmpleado.response';
import { ResponseEditarEstadoEmpleado } from '../../intercambios/response/ResponseEditarEstadoEmpleado.response';
import { ResponseEditarAllEmpleado } from '../../intercambios/response/ResponseEditarAllEmpleado.response';
import { RequestEditarAllEmpleado } from '../../intercambios/request/RequestEditarAllEmpleado.request';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private readonly url = environment.api;

  public ListarEmpleado(req: RequestListarEmpleado): Observable<ResponseListaEmpleados> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaEmpleados>(`${this.url}/v1/empleado`, {
      params,
    });
  }

  public RegistrarEmpleado(request: RequestRegistroEmpleado): Observable<ResponseRegistroEmpleado> {
    return this.httpClient.post<ResponseRegistroEmpleado>(`${this.url}/v1/empleado`, request);
  }

  public AnularEmpleado(idEmpleado: number) {
    return this.httpClient.delete<ResponseEditarEstadoEmpleado>(
      `${this.url}/v1/empleado/${idEmpleado}`,
    );
  }

  public ActivarEmpleado(idEmpleado: number) {
    return this.httpClient.patch<ResponseEditarEstadoEmpleado>(
      `${this.url}/v1/empleado/${idEmpleado}/activar`,
      {},
    );
  }

  public EditarAllEmpleado(
    request: RequestEditarAllEmpleado,
  ): Observable<ResponseEditarAllEmpleado> {
    return this.httpClient.put<ResponseEditarAllEmpleado>(`${this.url}/v1/empleado`, request);
  }

  constructor(private httpClient: HttpClient) {}
}
