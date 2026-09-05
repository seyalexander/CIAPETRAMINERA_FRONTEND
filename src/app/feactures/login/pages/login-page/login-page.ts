import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { LoginService } from '../../services/api/login-service';
import { RequestLogin } from '../../intercambio/request/RequestLogin.request';
import { Error } from '../../../../shared/components/error/error';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    RouterModule,
    RippleModule,
    Error
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  form: FormGroup;

  usuario: string = '';
  nombre: string = '';

  loading: boolean = false;

  loginError: string = '';
  apiError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {

    if (this.form.invalid) {
      this.loginError = 'Completa todos los campos obligatorios.';
      return;
    }

    this.loading = true;
    this.loginError = '';
    this.apiError = false;

    this.form.disable();

    const request = new RequestLogin();
    request.usuario = this.form.value.username;
    request.clave = this.form.value.password;

    this.loginService.login(request).subscribe({
      next: ({ usuario, token, nombre, exito }) => {

        this.loading = false;
        this.form.enable();

        if (!exito) {
          this.loginError = 'Usuario o contraseña incorrectos.';
          return;
        }

        sessionStorage.setItem('token', token);

        this.usuario = usuario;
        this.nombre = nombre;

        this.router.navigate(['/Home']);
      },

      error: (err) => {

        this.loading = false;
        this.form.enable();

        sessionStorage.removeItem('token');

        if (err.status === 0) {
          this.apiError = true;
          return;
        }

        if (err.status === 401) {
          this.loginError = 'Usuario o contraseña incorrectos.';
          return;
        }

        if (err.status === 403) {
          this.loginError = 'No tienes permisos para acceder al sistema.';
          return;
        }

        if (err.status >= 500) {
          this.loginError = 'Error interno del servidor. Inténtalo nuevamente.';
          return;
        }

        this.loginError = 'Ocurrió un error inesperado.';
      }
    });
  }

  volverLogin() {
    this.apiError = false;
    this.loginError = '';
    this.form.enable();
    this.form.reset();
  }
}