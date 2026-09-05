import { Routes } from '@angular/router';

export const TIPODOCUMENTOS_ROUTES: Routes = [
    {
        path: 'TipoDocumento',
        loadComponent: () => import('./page/lista-tipo-documentos-page/lista-tipo-documentos-page').then(m => m.ListaTipoDocumentosPage)
    }
];
