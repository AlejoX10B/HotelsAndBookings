import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  exports: [
    AvatarModule,
    ButtonModule,
    CardModule,
    ChipModule,
    ChipsModule,
    InputTextModule,
    MenubarModule,
    RadioButtonModule,
    RatingModule,
    TableModule,
    ToastModule
  ]
})
export class PrimengModule { }
