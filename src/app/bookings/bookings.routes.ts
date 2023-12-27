import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingsComponent } from './pages/bookings/bookings.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingDetailComponent } from './pages/booking-detail/booking-detail.component';

import { roleGuard } from '../shared/guards';

import { Roles } from '../shared/models';


const routes: Routes = [
  { path: '', title: 'Reservas', component: BookingsComponent },
  {
    path: 'add/:hotelId/:roomType',
    title: 'Completar reserva',
    canActivate: [ roleGuard(Roles.USER) ],
    component: BookingFormComponent
  },
  { path: ':id', title: 'Detalle de reserva', component: BookingDetailComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
