import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengModule } from '../shared/primeng.module';
import { HotelsRoutingModule } from './hotels.routes';

import { HotelsComponent } from './pages/hotels/hotels.component';
import { AgentHotelsComponent } from './components/agent-hotels/agent-hotels.component';
import { UserHotelsComponent } from './components/user-hotels/user-hotels.component';



@NgModule({
  declarations: [
    HotelsComponent,
    AgentHotelsComponent,
    UserHotelsComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
