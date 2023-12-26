import { Component, computed, inject, signal } from '@angular/core';

import { HotelsService } from '../../../shared/services';

import { Hotel } from '../../../shared/models';


@Component({
  selector: 'user-hotels',
  templateUrl: './user-hotels.component.html',
  styleUrl: './user-hotels.component.scss'
})
export class UserHotelsComponent {

  
  private hotelsService = inject(HotelsService)
  
  
  filter = signal<string|null>(null)

  hotels = computed<Hotel[]>(() => {
    const hotels = this.hotelsService.userHotels()

    if (!this.filter()) return hotels

    return hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(String(this.filter()).toLowerCase())
    })
  })
  
  minDate = new Date()


  constructor() {
    this.hotelsService.getUserHotels().subscribe()
  }

  filterHotels(input: any) {
    this.filter.set(input.value.toLowerCase())
  }

}
