import { Component, OnInit, inject } from '@angular/core';

import { AuthService } from '../../../shared/services';
import { Roles } from '../../../shared/models';


@Component({
  selector: 'app-hotels',
  template: `
    @if(role === Roles.AGENT) {
      <agent-hotels/>
    }
    @else {
      <user-hotels/>
    }
  `,
  styles: ''
})
export class HotelsComponent implements OnInit {

  private authService = inject(AuthService)
  
  readonly Roles = Roles
  role: Roles | unknown

  ngOnInit() {
    this.role = this.authService.user()?.role
  }

}
