import { Routes } from '@angular/router';

export const TIPOTARIFA_ROUTES: Routes = [
    {
        path: 'TipoTarifa',
        loadComponent: () => import('./page/lista-tarifas-tipo-material-page/lista-tarifas-tipo-material-page').then(m => m.ListaTarifasTipoMaterialPage)
    }
];
