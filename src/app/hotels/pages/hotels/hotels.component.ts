import { Component, OnInit, inject } from '@angular/core';

import { AuthService } from '../../../shared/services';
import { Roles } from '../../../shared/models';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent implements OnInit {

  private authService = inject(AuthService)
  

  readonly Roles = Roles

  role: Roles | unknown


  ngOnInit() {
    this.role = this.authService.user()?.role
  }

}
