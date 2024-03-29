import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../shared/primeng.module';
import { DocTypePipe } from '../shared/pipes';
import { GenderPipe } from '../shared/pipes/gender.pipe';
import { RoomTypePipe } from '../shared/pipes/room-type.pipe';
import { ErrorCheckerDirective } from '../shared/directives/error-checker.directive';
import { BookingsRoutingModule } from './bookings.routes';

import { BookingsComponent } from './pages/bookings/bookings.component';
import { AgentBookingsComponent } from './components/agent-bookings/agent-bookings.component';
import { UserBookingsComponent } from './components/user-bookings/user-bookings.component';
import { BookingFormComponent } from './components/booking-form/booking-form.component';
import { BookingDetailComponent } from './pages/booking-detail/booking-detail.component';


@NgModule({
  declarations: [
    BookingsComponent,
    AgentBookingsComponent,
    UserBookingsComponent,
    BookingFormComponent,
    BookingDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    DocTypePipe,
    GenderPipe,
    RoomTypePipe,
    ErrorCheckerDirective,
    BookingsRoutingModule
  ]
})
export class BookingsModule { }
