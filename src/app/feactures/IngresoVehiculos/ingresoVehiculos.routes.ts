import { Routes } from '@angular/router';

export const INGRESOVEHICULOS_ROUTES: Routes = [
    {
        path: 'IngresoVehiculos',
        loadComponent: () => import('./page/lista-ingreso-vehiculos-page/lista-ingreso-vehiculos-page').then(m => m.ListaIngresoVehiculosPage)
    }
];
