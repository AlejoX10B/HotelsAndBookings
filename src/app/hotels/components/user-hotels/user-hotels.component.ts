import { Component, computed, inject, signal } from '@angular/core';
import { NavigationBehaviorOptions, Router } from '@angular/router';

import { HotelsService } from '../../../shared/services';

import { Hotel } from '../../../shared/models';
import { filterNullOptions } from '../../../shared/constants';


@Component({
  selector: 'user-hotels',
  templateUrl: './user-hotels.component.html',
  styleUrl: './user-hotels.component.scss'
})
export class UserHotelsComponent {

  private router = inject(Router)
  private hotelsService = inject(HotelsService)
  
  
  filters = signal<any>({
    location: '',
    dates: null,
    persons: null
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
