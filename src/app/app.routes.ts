import { Routes } from '@angular/router';
import { LOGIN_ROUTES } from './feactures/login/login.routes';
import { LAYOUT_ROUTES } from './shared/layout/layout.routes';

export const routes: Routes = [
    ...LOGIN_ROUTES,
    ...LAYOUT_ROUTES,
    {
        path: '**',
        redirectTo: 'Login'
    }
];
