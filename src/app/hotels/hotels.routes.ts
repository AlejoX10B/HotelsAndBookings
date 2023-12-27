import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HotelsComponent } from './pages/hotels/hotels.component';
import { HotelDetailComponent } from './pages/hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';

import { roleGuard } from '../shared/guards';

import { Roles } from '../shared/models';


const routes: Routes = [
  { path: '', title: 'Hoteles', component: HotelsComponent },
  {
    path: 'add',
    title: 'Registrar hotel',
    canActivate: [ roleGuard(Roles.AGENT) ],
    component: HotelFormComponent
  },
  {
    path: 'edit/:id',
    title: 'Editar hotel',
    canActivate: [ roleGuard(Roles.AGENT) ],
    component: HotelFormComponent
  },
  { path: ':id', title: 'Detalle de hotel', component: HotelDetailComponent },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
