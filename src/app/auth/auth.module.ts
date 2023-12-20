import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimengModule } from '../shared/primeng.module';
import { AuthRoutingModule } from './auth.routes';

import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
