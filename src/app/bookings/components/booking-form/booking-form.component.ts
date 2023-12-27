import { Component, Input, OnInit, computed, effect, inject, numberAttribute } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';

import { AuthService, BookingsService, HotelsService } from '../../../shared/services';

import { DocTypeOptions, alphabeticValidator, emailValidator, markAllAsDirty, parseUrlToDates } from '../../../shared/constants';


const fb = new FormBuilder()


@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {

  private router = inject(Router)
  private activatedRoute = inject(ActivatedRoute)
  private authService = inject(AuthService)
  private bookingsService = inject(BookingsService)
  private hotelsService = inject(HotelsService)
  private msgService = inject(MessageService)


  @Input({ transform: numberAttribute }) hotelId!: number
  @Input() roomType!: string

  params = toSignal(this.activatedRoute.queryParams)

  user = computed(() => this.authService.user())
  hotel = computed(() => {
    const hotel = this.hotelsService.queriedHotel()

    if (!hotel) {
      return hotel
    }

    return {
      ...hotel,
      rooms: [],
      current_room: hotel?.rooms.find(room => room.kind == this.roomType),
    }
  })

  bookingForm = fb.group({
    user_id:    [null],
    hotel_id:   [null],
    room_type:  [null],
    cost:       [0],
    taxes:      [0],
    dates:      [null, [Validators.required]],
    persons:    [1, [Validators.required, Validators.min(1)]],
    client: fb.group({
      names:      [null, [Validators.required, alphabeticValidator()]],
      lastnames:  [null, [Validators.required, alphabeticValidator()]],
      birthday:   [null, [Validators.required]],
      gender:     [null, Validators.required],
      doc_type:   [null, [Validators.required]],
      doc_num:    [null, [Validators.required]],
      email:      [null, [Validators.required, emailValidator()]],
      phone:      [null, [Validators.required]],
    }),
    emergency_contact: fb.group({
      fullname:   [null, [Validators.required, alphabeticValidator()]],
      phone:      [null, [Validators.required]]
    })
  })

  maxBirthdayDate = new Date()
  minBookingDate = new Date()

  readonly DocTypeOptions = DocTypeOptions
  

  constructor() {
    effect(() => {
      this.hotelsService.getUserHotel(this.hotelId).subscribe()      
    })

    effect(() => {
      if (this.hotel()?.active === false) {
        this.router.navigateByUrl('/bookings')
      }
    })
  }

  ngOnInit() {
    const params = this.params()

    this.bookingForm.patchValue({
      user_id: this.user()?.id as never,
      hotel_id: this.hotelId as never,
      room_type: this.roomType as never,
      cost: this.hotel()?.current_room?.cost,
      taxes: this.hotel()?.current_room?.taxes,
      dates: parseUrlToDates(params!['dates']) as never || null,
      persons: Number(params!['persons']) || 1
    })
  }


  onSubmit() {
    const form = this.bookingForm

    if (form.invalid) {
      this.msgService.add({
        severity: 'error',
        summary: 'Error en el formulario!',
        detail: 'Revisa los datos ingresados'
      })
      markAllAsDirty(form)
      return
    }

    this.bookingsService.generateBooking(form.value)
      .subscribe({
        next: () => {
          this.msgService.add({
            severity: 'success',
            summary: 'Éxito!',
            detail: 'La reserva ha sido registrada! Se ha enviado un email de confirmación'
          })

          this.router.navigateByUrl('/bookings')
        },
        error: (e) => {
          this.msgService.add({
            severity: 'error',
            summary: 'Error!',
            detail: `Ha ocurrido un error al intentar registrar la reserva: ${e}`
          })
        }
      })
    
  }

}
