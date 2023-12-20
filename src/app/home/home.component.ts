import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { PrimengModule } from '../shared/primeng.module';

import { AuthService } from '../shared/services';
import { RolePipe } from '../shared/pipes';

import { AgentMenuItems, UserMenuItems } from '../shared/constants';
import { Roles } from '../shared/models';


@Component({
  imports: [
    PrimengModule,
    RolePipe
  ],
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  menuItems: MenuItem[] | undefined


  private authService = inject(AuthService)

  user = this.authService.user()


  ngOnInit() {
    this.menuItems = (this.user.role === Roles.AGENT)
      ? AgentMenuItems
      : UserMenuItems
  }


  logout() {
    this.authService.logout()
  }

}
