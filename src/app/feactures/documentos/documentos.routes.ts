import { Routes } from '@angular/router';

export const DOCUMENTOS_ROUTES: Routes = [
    {
        path: 'Documentos',
        loadComponent: () => import('./page/lista-documentos-page/lista-documentos-page').then(m => m.ListaDocumentosPage)
    }
];
