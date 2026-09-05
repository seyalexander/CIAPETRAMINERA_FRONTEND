import { Routes } from '@angular/router';

export const TRANSPORTISTA_ROUTES: Routes = [
    {
        path: 'Transportistas',
        loadComponent: () => import('./page/lista-transportista-page/lista-transportista-page').then(m => m.ListaTransportistaPage)
    }
];
