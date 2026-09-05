import { Routes } from '@angular/router';

export const TIPOVEHICULOS_ROUTES: Routes = [
    {
        path: 'TipoVehiculo',
        loadComponent: () => import('./page/lista-tipo-vehiculos-page/lista-tipo-vehiculos-page').then(m => m.ListaTipoVehiculosPage)
    }
];
