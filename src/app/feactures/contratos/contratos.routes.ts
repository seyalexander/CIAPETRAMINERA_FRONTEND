import { Routes } from '@angular/router';

export const CONTRATOS_ROUTES: Routes = [
    {
        path: 'Contratos',
        loadComponent: () => import('./page/lista-contratos-page/lista-contratos-page').then(m => m.ListaContratosPage)
    }
];
