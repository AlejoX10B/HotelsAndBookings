import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';

import { AuthService } from './shared/services';

import { AuthStatus } from './auth/models';


@Component({
  imports: [
    RouterOutlet
  ],
  providers: [
    MessageService
  ],
  standalone: true,
  selector: 'app-root',
  template: '<router-outlet/>',
  styles: ''
})
export class AppComponent {
  title = 'AppHotel'

  private router = inject(Router)
  private primengConfig = inject(PrimeNGConfig)
  private authService = inject(AuthService)


  constructor() {
    effect(() => {
      if (this.authService.authStatus() === AuthStatus.NotAuthenticated) {
        this.router.navigateByUrl('/auth')
        return
      }
    })
  }


  ngOnInit() {
    this.primengConfig.ripple = true
  }
}
