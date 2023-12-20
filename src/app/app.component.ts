import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';


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


  private primengConfig = inject(PrimeNGConfig)


  ngOnInit() {
    this.primengConfig.ripple = true
  }
}
