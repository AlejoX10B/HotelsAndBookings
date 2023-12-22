import { NgModule } from '@angular/core';

import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
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
    ButtonModule,
    CardModule,
    ChipModule,
    ChipsModule,
    DropdownModule,
    FieldsetModule,
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
