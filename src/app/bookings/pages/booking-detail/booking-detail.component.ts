import { Component, Input, OnInit, computed, inject, numberAttribute } from '@angular/core';

import { AuthService, BookingsService } from '../../../shared/services';
import { Roles } from '../../../shared/models';


@Component({
  selector: 'booking-detail',
  templateUrl: './booking-detail.component.html',
  styles: ''
})
export class BookingDetailComponent implements OnInit {

  private bookingsService = inject(BookingsService)
  private authService = inject(AuthService)

  
  @Input({ transform: numberAttribute }) id!: number
  
  booking = computed(() => this.bookingsService.queriedBooking())
  user = computed(() => this.authService.user())

  readonly Roles = Roles


  ngOnInit() {
    this.bookingsService.getBooking(this.id).subscribe()
  }

}
