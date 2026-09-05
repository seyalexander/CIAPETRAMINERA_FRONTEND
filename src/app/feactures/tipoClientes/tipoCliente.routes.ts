import { Routes } from '@angular/router';

export const TIPOCLIENTE_ROUTES: Routes = [
    {
        path: 'TipoCliente',
        loadComponent: () => import('./page/lista-tipocliente-page/lista-tipocliente-page').then(m => m.ListaTipoclientePage)
    }
];
