import { Routes } from '@angular/router';

export const EMPRESASCLIENTES_ROUTES: Routes = [
    {
        path: 'EmpresasClientes',
        loadComponent: () => import('./page/lista-empresas-clientes-page/lista-empresas-clientes-page').then(m => m.ListaEmpresasClientesPage)
    }
];
