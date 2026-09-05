import { Routes } from '@angular/router';

export const MATERIALES_ROUTES: Routes = [
    {
        path: 'Materiales',
        loadComponent: () => import('./page/lista-materiales-page/lista-materiales-page').then(m => m.ListaMaterialesPage)
    }
];
