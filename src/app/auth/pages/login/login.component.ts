import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../../shared/services';

import { Credentials } from '../../models';
import { Roles } from '../../../shared/models';


const AgentCredentials = {
  email: 'alejo@admin.com',
  password: '12345',
  role: Roles.AGENT
}

const TravelerCredentials = {
  email: 'adri@email.com',
  password: '12345',
  role: Roles.USER
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  router = inject(Router)
  authService = inject(AuthService)
  msgService = inject(MessageService)

  readonly Roles = Roles
  credentials: Credentials = AgentCredentials

  changeCredentials(role: Roles) {
    this.credentials = (role === Roles.AGENT)
      ? {...AgentCredentials}
      : {...TravelerCredentials}
  }

  onSubmit() {
    this.authService.login(this.credentials)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/')
        },
        error: () => {
          this.msgService.add({
            severity: 'error',
            summary: 'Error!',
            detail: 'No se encontró al usuario'
          })
        }
      })
  }

}