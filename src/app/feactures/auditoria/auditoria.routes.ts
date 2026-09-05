import { Routes } from '@angular/router';

export const AUDITORIA_ROUTES: Routes = [
    {
        path: 'Auditoria',
        loadComponent: () => import('./page/lista-auditoria-page/lista-auditoria-page').then(m => m.ListaAuditoriaPage)
    }
];
