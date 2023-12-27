import { Component, OnInit, inject } from '@angular/core';

import { AuthService } from '../../../shared/services';
import { Roles } from '../../../shared/models';


@Component({
  selector: 'app-bookings',
  template: `
    @if(role === Roles.AGENT) {
      <agent-bookings/>
    }
    @else {
      <user-bookings/>
    }
  `,
  styles: ''
})
export class BookingsComponent implements OnInit {

  private authService = inject(AuthService)
  
  readonly Roles = Roles
  role: Roles | unknown

  ngOnInit() {
    this.role = this.authService.user()?.role
  }

}
