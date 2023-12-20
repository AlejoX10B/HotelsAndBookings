import { Component } from '@angular/core';

import { PrimengModule } from '../shared/primeng.module';


@Component({
  imports: [
    PrimengModule
  ],
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
