import { Component, inject } from '@angular/core';

import { AuthService } from '../../auth.service';
import { Credentials } from '../../models/credentials.model';
import { Roles } from '../../../shared/models/user.models';
import { MessageService } from 'primeng/api';


const AgentCredentials = {
  email: 'agent@admin.com',
  password: '12345',
  role: 'ADMIN'
}

const TravelerCredentials = {
  email: 'user@domain.com',
  password: '12345',
  role: 'USER'
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService)
  msgService = inject(MessageService)

  credentials: Credentials = AgentCredentials

  changeCredentials(role: Roles) {
    this.credentials = (role == 'ADMIN')
      ? {...AgentCredentials}
      : {...TravelerCredentials}
  }

  onSubmit() {
    console.log('CREDS', this.credentials)

    this.authService.login(this.credentials)
    .subscribe({
      next: (val) => {
        console.log('USER', val)
      },
      error: () => {
        console.error('ERROR')
        this.msgService.add({
          severity: 'error',
          summary: 'Error!',
          detail: 'No se encontró al usuario'
        })
      }
    })
  }

}
