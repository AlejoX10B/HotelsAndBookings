import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingsComponent } from './pages/bookings/bookings.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

import { roleGuard } from '../shared/guards';

import { Roles } from '../shared/models';


const routes: Routes = [
  { path: '', component: BookingsComponent },
  { path: 'add/:hotelId/:roomType', canActivate: [ roleGuard(Roles.USER) ], component: BookingFormComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
