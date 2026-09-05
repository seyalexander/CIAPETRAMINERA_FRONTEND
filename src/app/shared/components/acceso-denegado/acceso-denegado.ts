import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-acceso-denegado',
  imports: [ButtonModule, RouterModule, RippleModule, ButtonModule],
  templateUrl: './acceso-denegado.html',
  styleUrl: './acceso-denegado.css',
})
export class AccesoDenegado {}
