import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    ChipModule,
    ChipsModule,
    DropdownModule,
    FieldsetModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    RadioButtonModule,
    RatingModule,
    SelectButtonModule,
    TableModule,
    TagModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule
  ]
})
export class PrimengModule { }
