import { Routes } from '@angular/router';

export const LOGUEADO_ROUTES: Routes = [
    {
        path: 'Logueado',
        loadComponent: () => import('./page/detalle-logueado-page/detalle-logueado-page').then(m => m.DetalleLogueadoPage)
    }
];
