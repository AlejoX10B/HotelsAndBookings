import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsComponent } from './pages/hotels/hotels.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';


const routes: Routes = [
  { path: '', component: HotelsComponent },
  { path: ':id', component: HotelDetailComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
