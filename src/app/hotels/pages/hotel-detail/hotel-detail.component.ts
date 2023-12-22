import { Component, DestroyRef, Input, computed, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { HotelsService } from '../../../shared/services';


@Component({
  selector: 'hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss'
})
export class HotelDetailComponent {

  private destroyRef = inject(DestroyRef)
  private hotelsService = inject(HotelsService)

  @Input({ transform: numberAttribute }) id!: number

  hotel = computed(() => this.hotelsService.queriedHotel())

  ngOnInit() {
    this.hotelsService.getHotel(this.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe()
  }

}
