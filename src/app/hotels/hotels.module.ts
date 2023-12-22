import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimengModule } from '../shared/primeng.module';
import { HotelsRoutingModule } from './hotels.routes';

import { HotelsComponent } from './pages/hotels/hotels.component';
import { AgentHotelsComponent } from './components/agent-hotels/agent-hotels.component';
import { UserHotelsComponent } from './components/user-hotels/user-hotels.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';



@NgModule({
  declarations: [
    HotelsComponent,
    AgentHotelsComponent,
    UserHotelsComponent,
    HotelDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
