import { Routes } from '@angular/router';

export const CLIENTE_ROUTES: Routes = [
    {
        path: 'Cliente',
        loadComponent: () => import('./page/lista-clientes-page/lista-clientes-page').then(m => m.ListaClientesPage)
    }
];
