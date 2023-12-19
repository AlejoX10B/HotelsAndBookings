import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  imports: [
    RouterOutlet
  ],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppHotel'


  private primengConfig = inject(PrimeNGConfig)


  ngOnInit() {
    this.primengConfig.ripple = true
  }
}
