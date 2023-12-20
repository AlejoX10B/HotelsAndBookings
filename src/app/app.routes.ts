import { Routes } from '@angular/router';

import { isLoggedIn, isNotLoggedIn } from './shared/guards';


export const routes: Routes = [
    {
        path: 'auth',
        canActivate: [ isNotLoggedIn ],
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        canActivate: [ isLoggedIn ],
        loadChildren: () => import('./home/home.routes').then(m => m.routes)
    },
    { path: '**', redirectTo: '/auth' },
]
