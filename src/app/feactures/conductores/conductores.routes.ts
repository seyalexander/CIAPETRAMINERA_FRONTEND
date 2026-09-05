import { Routes } from '@angular/router';

export const CONDUCTORES_ROUTES: Routes = [
    {
        path: 'Conductores',
        loadComponent: () => import('./page/lista-conductores-page/lista-conductores-page').then(m => m.ListaConductoresPage)
    }
];
