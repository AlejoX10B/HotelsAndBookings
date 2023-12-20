import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';


export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
        children: [
            {
                path: 'hotels',
                loadChildren: () => import('../hotels/hotels.module').then(m => m.HotelsModule)
            },
            {
                path: 'bookings',
                loadChildren: () => import('../bookings/bookings.module').then(m => m.BookingsModule)
            },
            { path: '**', redirectTo: 'hotels' }
        ]
    }
]
