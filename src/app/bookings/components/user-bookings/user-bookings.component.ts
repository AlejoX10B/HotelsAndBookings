import { Component, OnInit, computed, inject } from '@angular/core';

import { BookingsService } from '../../../shared/services';


@Component({
  selector: 'user-bookings',
  templateUrl: './user-bookings.component.html',
  styles: ''
})
export class UserBookingsComponent implements OnInit {

  private bookingsService = inject(BookingsService)


  bookings = computed(() => this.bookingsService.userBookings())


  ngOnInit() {
    this.bookingsService.getUserBookings().subscribe()
  }

}
