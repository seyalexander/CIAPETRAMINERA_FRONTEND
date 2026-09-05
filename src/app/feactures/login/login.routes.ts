import { Routes } from '@angular/router';

export const LOGIN_ROUTES: Routes = [
    {
        path: 'Login',
        loadComponent: () => import('./pages/login-page/login-page').then(m => m.LoginPage)
    }
];
