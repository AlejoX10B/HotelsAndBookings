import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    RadioButtonModule,
    ToastModule
  ]
})
export class PrimengModule { }
