import { Routes } from '@angular/router';
import { AUDITORIA_ROUTES } from '../../../feactures/auditoria/auditoria.routes';
import { LOGUEADO_ROUTES } from '../../../feactures/logueado/logueado.routes';

export const LOGISTICA_ROUTES: Routes = [
  {
    path: 'Logistica',
    children: [
      ...LOGUEADO_ROUTES
    ]
  },
  {
    path: 'Reportes',
    children: [
      ...LOGUEADO_ROUTES
    ]
  },
  {
    path: 'Auditoria',
    children: [
      ...AUDITORIA_ROUTES
    ]
  }
];