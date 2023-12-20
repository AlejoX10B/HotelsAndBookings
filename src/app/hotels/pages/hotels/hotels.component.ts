import { Component, OnInit, inject } from '@angular/core';

import { AuthService } from '../../../shared/services';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent implements OnInit {

  authService = inject(AuthService)

  ngOnInit() {
    console.log(this.authService.user())
  }

}
