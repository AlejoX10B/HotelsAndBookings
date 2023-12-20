import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingsComponent } from './pages/bookings/bookings.component';


const routes: Routes = [
  { path: '', component: BookingsComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
