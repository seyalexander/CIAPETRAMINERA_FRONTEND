import { Routes } from '@angular/router';

export const MENSAJES_ROUTES: Routes = [
    {
        path: 'Mensajes',
        loadComponent: () => import('./page/lista-mensajes-page/lista-mensajes-page').then(m => m.ListaMensajesPage)
    }
];
