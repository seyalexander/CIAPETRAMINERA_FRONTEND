import { computed, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { RequestLogin } from '../../intercambio/request/RequestLogin.request';
import { ResponseLogin } from '../../intercambio/response/ResponseLogin.resposne';
import { Role } from '../../../../core/auth/roles.enum';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL = environment.api;

  // ===== STATE =====
  private _token = signal<string | null>(this.getToken());
  private _user = signal<string | null>(this.getUser());
  private _roles = signal<string[]>(this.getRoles());

  // ===== COMPUTED =====
  token = computed(() => this._token());
  user = computed(() => this._user());
  roles = computed(() => this._roles());

  constructor(private readonly httpClient: HttpClient) { }

  // ===== LOGIN =====
  login(request: RequestLogin): Observable<ResponseLogin> {
    return this.httpClient
      .post<ResponseLogin>(`${this.URL}/auth/login`, request, {
        headers: { 'Content-Type': 'application/json' },
      })
      .pipe(
        map((response) => {
          if (response.token) {
            this.setSession(response);
          }
          return response;
        })
      );
  }

  // ===== SESSION =====
  private setSession(response: ResponseLogin) {
    sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('user', response.nombre);

    sessionStorage.setItem('roles', JSON.stringify(response.descripcionRol ?? []));

    this._token.set(response.token);
    this._user.set(response.nombre);
    this._roles.set(response.descripcionRol ?? []);
  }

  logout() {
    sessionStorage.clear();
    this._token.set(null);
    this._user.set(null);
    this._roles.set([]);
  }

  // ===== STORAGE HELPERS =====
  private getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  private getUser(): string | null {
    return sessionStorage.getItem('user');
  }

  private getRoles(): string[] {
    const data = sessionStorage.getItem('roles');
    return data ? JSON.parse(data) : [];
  }

  // ===== HELPERS DE ROLES =====
  hasRole(role: Role): boolean {
    return this._roles().includes(role);
  }

  hasAnyRole(roles: Role[]): boolean {
    return roles.some(r => this._roles().includes(r));
  }

  isLoggedIn(): boolean {
    return !!this._token();
  }
}