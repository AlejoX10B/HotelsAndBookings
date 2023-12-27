import { Component, computed, inject } from '@angular/core';

import { BookingsService } from '../../../shared/services';


@Component({
  selector: 'agent-bookings',
  templateUrl: './agent-bookings.component.html',
  styles: ''
})
export class AgentBookingsComponent {

  private bookingsService = inject(BookingsService)


  bookings = computed(() => this.bookingsService.agentBookings())


  ngOnInit() {
    this.bookingsService.getAgentBookings().subscribe()
  }

}
