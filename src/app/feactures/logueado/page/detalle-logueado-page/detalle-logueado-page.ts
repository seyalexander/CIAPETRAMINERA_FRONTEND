import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-detalle-logueado-page',
  imports: [CardModule, AvatarModule, ButtonModule, TagModule, InputTextModule],
  templateUrl: './detalle-logueado-page.html',
  styleUrl: './detalle-logueado-page.css',
})
export class DetalleLogueadoPage {}
