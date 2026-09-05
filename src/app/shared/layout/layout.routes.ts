import { Routes } from '@angular/router';
import { DASHBOARD_ROUTES } from '../../feactures/dashboard/dashboard.routes';
import { COMERCIAL_ROUTES } from './app-MenuOperaciones/layout_COMERCIAL.routes';
import { OPERACIONES_ROUTES } from './app-MenuOperaciones/layout_OPERACIONES.routes';
import { LOGISTICA_ROUTES } from './app-MenuOperaciones/layout_LOGISTICA.routes';
import { CONFIGURACION_ROUTES } from './app-MenuOperaciones/layout_CONFIGURACION.routes';

export const LAYOUT_ROUTES: Routes = [
  // Panel de inicio (sin layout)
  {
    path: 'Home',
    loadComponent: () => import('./app-inicio/app-inicio').then(m => m.AppInicio),
  },

  // Layout con sidebar
  {
    path: 'Inicio',
    loadComponent: () => import('./app-layout/app-layout').then(m => m.AppLayout),
    children: [
      // Dashboard
      ...DASHBOARD_ROUTES,

      // ============ GESTIÓN COMERCIAL & DOCUMENTOS ============
      ...COMERCIAL_ROUTES,

      // ============ OPERACIONES & PRODUCCIÓN ============
      ...OPERACIONES_ROUTES,

      // ============ LOGÍSTICA, REPORTES & AUDITORÍA ============
      ...LOGISTICA_ROUTES,

      // ============ CONFIGURACIÓN & SEGURIDAD ============
      ...CONFIGURACION_ROUTES
    ]
  }
];