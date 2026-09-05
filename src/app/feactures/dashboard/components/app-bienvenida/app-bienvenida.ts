import { Component } from '@angular/core';

@Component({
  selector: 'app-app-bienvenida',
  imports: [],
  templateUrl: './app-bienvenida.html',
  styleUrl: './app-bienvenida.css',
})
export class AppBienvenida {

  usuarioActual = { nombre: '', rol: '' };

  constructor() {
    const userStr = sessionStorage.getItem('user');
    const rolStr = sessionStorage.getItem('roles');

    this.usuarioActual.nombre = userStr ?? 'Usuario';
    this.usuarioActual.rol = (rolStr ?? '')
      .replaceAll('"', '')
      .trim();
  }

}
