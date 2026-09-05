import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { AppConfigurator } from '../app-configurator/app-configurator';
import { Button, ButtonModule } from 'primeng/button';
import { Component, inject } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-app-topbar',
  imports: [ConfirmDialogModule, RouterModule, CommonModule, StyleClassModule, AppConfigurator, ButtonModule],
  templateUrl: './app-topbar.html',
  styleUrl: './app-topbar.css',
  providers: [ConfirmationService]
})
export class AppTopbar {
  items!: MenuItem[];

  layoutService = inject(LayoutService);
  private router = inject(Router)
  private confirmationService = inject(ConfirmationService)

  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme
    }));
  }

  usuarioLogueado() {
    this.router.navigate(['/Home/Logueado']);
  }

  mensajesSistema() {
    this.router.navigate(['/Home/Mensajes']);
  }

  CerrarSession() {
    this.confirmationService.confirm({
        header: 'Cerrar sesión',
        message: '¿Estás seguro de que deseas salir del sistema?',
        icon: 'pi pi-exclamation-triangle',

        acceptLabel: 'Sí, salir',
        rejectLabel: 'Cancelar',

        acceptButtonStyleClass: 'p-button-danger',
        rejectButtonStyleClass: 'p-button-text',

        accept: () => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            this.router.navigate(['/login']);
        }
    });
}
}
