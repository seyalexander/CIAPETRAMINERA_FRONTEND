import { Routes } from '@angular/router';

export const ROLES_ROUTES: Routes = [
    {
        path: 'Roles',
        loadComponent: () => import('./page/lista-roles-page/lista-roles-page').then(m => m.ListaRolesPage)
    }
];
