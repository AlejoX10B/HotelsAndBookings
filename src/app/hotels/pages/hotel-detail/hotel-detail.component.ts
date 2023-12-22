import { Component, DestroyRef, Input, computed, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';

import { HotelsService } from '../../../shared/services';


@Component({
  selector: 'hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss'
})
export class HotelDetailComponent {

  private destroyRef = inject(DestroyRef)
  private hotelsService = inject(HotelsService)
  private msgService = inject(MessageService)

  @Input({ transform: numberAttribute }) id!: number

  statusOptions: any[] = [
    { label: 'Deshabilitado', value: false },
    { label: 'Habilitado', value: true }
  ]

  hotel = computed(() => this.hotelsService.queriedHotel())

  ngOnInit() {
    this.hotelsService.getHotel(this.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe()
  }

  changeStatus(status: boolean) {
    if (status == this.hotel()?.active) return

    this.hotelsService.changeHotelStatus(this.id, status)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.msgService.add({
            severity: 'success',
            summary: 'Éxito!',
            detail: `El hotel ha sido ${(status) ? 'habilitdado': 'deshabilitado'}`
          })
        },
        error: () => {
          this.msgService.add({
            severity: 'error',
            summary: 'Error!',
            detail: 'No se pudo cambiar el estado del hotel'
          })
        }
      })
  }

}
