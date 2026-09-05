import { Routes } from '@angular/router';

export const PROCESOS_ROUTES: Routes = [
    {
        path: 'Procesos',
        loadComponent: () => import('./page/lista-procesos-page/lista-procesos-page').then(m => m.ListaProcesosPage)
    }
];
