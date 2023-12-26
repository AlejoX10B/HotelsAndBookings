import { Component, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';

import { PrimengModule } from './shared/primeng.module';
import { AuthService } from './shared/services';

import { AuthStatus } from './auth/models';


@Component({
  imports: [
    RouterOutlet,
    PrimengModule
  ],
  providers: [
    MessageService
  ],
  standalone: true,
  selector: 'app-root',
  template: `
    <p-toast/>
    <router-outlet/>
  `,
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
    this.primengConfig.setTranslation({
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab'],
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    })
  }
}
