import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ResponseListaUsuarios } from '../../intercambios/response/ResponsetListarUsuarios.response';
import { Observable } from 'rxjs';
import { RequestListarUsuario } from '../../intercambios/request/RequestListarUsuarios.request';
import { RequestRegistrarUsuario } from '../../intercambios/request/RequestRegistrarUsuario.request';
import { ResponseRegistroUsuario } from '../../intercambios/response/ResponseRegistrarUsuario.response';
import { ResponseEditarEstadoUsuario } from '../../intercambios/response/ResponseEditarEstadoUsuario.response';
import { ResponseDetalleUsuario } from '../../intercambios/response/ResponseDetalleUsuario.response';
import { ResponseEditarAllUsuario } from '../../intercambios/response/ResponseEditarAllUsuario.response';
import { RequestEditarAllUsuario } from '../../intercambios/request/RequestEditarAllUsuario.request';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly url = environment.api;

  public ListarUsuarios(req: RequestListarUsuario): Observable<ResponseListaUsuarios> {
    let params = new HttpParams();

    if (req.estado !== undefined) {
      params = params.set('estado', req.estado);
    }

    return this.httpClient.get<ResponseListaUsuarios>(`${this.url}/v1/usuario`, {
      params,
    });
  }

  public RegistrarUsuario(request: RequestRegistrarUsuario): Observable<ResponseRegistroUsuario> {
    return this.httpClient.post<ResponseRegistroUsuario>(`${this.url}/v1/usuario`, request);
  }

  public EditarAllUsuario(request: RequestEditarAllUsuario): Observable<ResponseEditarAllUsuario> {
    return this.httpClient.put<ResponseEditarAllUsuario>(`${this.url}/v1/usuario`, request);
  }

  public DetalleUsuario(idUsuario: number) {
    return this.httpClient.get<ResponseDetalleUsuario>(`${this.url}/v1/usuario/${idUsuario}`);
  }

  public AnularUsuario(idUsuario: number) {
    return this.httpClient.delete<ResponseEditarEstadoUsuario>(`${this.url}/v1/usuario/${idUsuario}`);
  }

  public ActivarUsuario(idUsuario: number) {
    return this.httpClient.patch<ResponseEditarEstadoUsuario>(
      `${this.url}/v1/usuario/${idUsuario}/activar`,
      {},
    );
  }

  constructor(private httpClient: HttpClient) {}
}
