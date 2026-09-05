import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-error',
  imports: [ButtonModule, RouterModule, RippleModule, ButtonModule],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class Error {
  @Input()mensajeError: string = ''

  @Output()volver = new EventEmitter<void>();

  volverLogin() {
    this.volver.emit();
  }
}
