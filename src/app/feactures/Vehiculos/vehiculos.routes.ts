import { Routes } from '@angular/router';

export const VEHICULOS_ROUTES: Routes = [
    {
        path: 'Vehiculos',
        loadComponent: () => import('./page/lista-vehiculos-page/lista-vehiculos-page').then(m => m.ListaVehiculosPage)
    }
];
