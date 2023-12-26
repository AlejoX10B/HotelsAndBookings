import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsComponent } from './pages/hotels/hotels.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';


const routes: Routes = [
  { path: '', component: HotelsComponent },
  { path: 'add', component: HotelFormComponent },
  { path: 'edit/:id', component: HotelFormComponent },
  { path: ':id', component: HotelDetailComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
