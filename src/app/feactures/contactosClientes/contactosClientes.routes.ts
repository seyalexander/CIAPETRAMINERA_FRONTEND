import { Routes } from '@angular/router';

export const CONTACTOSCLIENTES_ROUTES: Routes = [
    {
        path: 'ContactosClientes',
        loadComponent: () => import('./page/lista-contactos-clientes-page/lista-contactos-clientes-page').then(m => m.ListaContactosClientesPage)
    }
];
