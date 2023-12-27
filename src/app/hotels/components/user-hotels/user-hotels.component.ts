import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { HotelsService } from '../../../shared/services';

import { filterNullOptions } from '../../../shared/constants';

import { Hotel } from '../../../shared/models';


@Component({
  selector: 'user-hotels',
  templateUrl: './user-hotels.component.html',
  styles: ''
})
export class UserHotelsComponent {

  private router = inject(Router)
  private hotelsService = inject(HotelsService)
  
  
  filters = signal<any>({
    location: '',
    dates: [new Date(), new Date()],
    persons: 1
  })

  hotels = computed<Hotel[]>(() => {
    const hotels = this.hotelsService.userHotels()

    if (!this.filters()) return hotels

    return hotels.filter(hotel => {
      return hotel.location.toLowerCase().includes(String(this.filters().location))
    })
  })
  
  minDate = new Date()


  constructor() {
    this.hotelsService.getUserHotels().subscribe()
  }

  filterHotels(input: any) {
    this.filters.update(values => {
      return {
        ...values,
        location: input.value.toLowerCase()
      }
    })
  }

  navigate(hotelId: number) {
    const filters = this.filters()

    console.log(filters)

    if (filters.persons || (filters.dates && filters.dates.length > 0)) {
      this.router.navigate(['/hotels', hotelId], {
        queryParams: filterNullOptions(filters),
        queryParamsHandling: 'merge'
      })

      return
    }

    this.router.navigate(['/hotels', hotelId])
  }

}
