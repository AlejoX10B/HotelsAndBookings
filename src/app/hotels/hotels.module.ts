import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrimengModule } from '../shared/primeng.module';
import { RoomTypePipe } from '../shared/pipes/room-type.pipe';
import { StatusPipe } from '../shared/pipes/status.pipe';
import { ErrorCheckerDirective } from '../shared/directives/error-checker.directive';
import { HotelsRoutingModule } from './hotels.routes';

import { HotelsComponent } from './pages/hotels/hotels.component';
import { AgentHotelsComponent } from './components/agent-hotels/agent-hotels.component';
import { UserHotelsComponent } from './components/user-hotels/user-hotels.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';


@NgModule({
  declarations: [
    HotelsComponent,
    AgentHotelsComponent,
    UserHotelsComponent,
    HotelDetailComponent,
    HotelFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    RoomTypePipe,
    StatusPipe,
    ErrorCheckerDirective,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
