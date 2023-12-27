import { Component, Input, computed, effect, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService, HotelsService } from '../../../shared/services';
import { Roles } from '../../../shared/models';
import { HotelStatusOptions } from '../../../shared/constants';


@Component({
  selector: 'hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styles: ''
})
export class HotelDetailComponent {

  private router = inject(Router)
  private authService = inject(AuthService)
  private hotelsService = inject(HotelsService)
  private msgService = inject(MessageService)


  @Input({ transform: numberAttribute }) id!: number

  
  hotel = computed(() => this.hotelsService.queriedHotel())
  user = computed(() => this.authService.user())
  
  readonly HotelStatusOptions = HotelStatusOptions
  readonly Roles = Roles


  constructor() {
    effect(() => {
      (this.user()?.role === Roles.AGENT)
        ? this.hotelsService.getAgentHotel(this.id).subscribe()
        : this.hotelsService.getUserHotel(this.id).subscribe()
    })

    effect(() => {
      if (this.user()?.role === Roles.USER && this.hotel()?.active === false) {
        this.router.navigateByUrl('/')
      }
    })
  }


  changeStatus(status: boolean) {
    if (status == this.hotel()?.active) return

    this.hotelsService.changeHotelStatus(this.id, status)
      .subscribe({
        next: () => {
          this.msgService.add({
            severity: 'success',
            summary: 'Éxito!',
            detail: `El hotel ha sido ${(status) ? 'habilitado': 'deshabilitado'}`
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
