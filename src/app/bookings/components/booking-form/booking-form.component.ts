import { Component, Input, OnInit, computed, effect, inject, numberAttribute } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService, HotelsService } from '../../../shared/services';

import { alphabeticValidator, emailValidator, markAllAsDirty } from '../../../shared/constants';


const fb = new FormBuilder()


@Component({
  selector: 'booking-form',
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {

  private router = inject(Router)
  private authService = inject(AuthService)
  private hotelsService = inject(HotelsService)
  private msgService = inject(MessageService)


  @Input({ transform: numberAttribute }) hotelId!: number
  @Input() roomType!: string


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
    booking: fb.group({
      hotel_id:   [null],
      room_type:  [null],
      dates:      [null, [Validators.required]],
      num_people: [1, [Validators.required, Validators.min(1)]],
    }),
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
    this.bookingForm.patchValue({
      user_id: this.user()?.id as never,
      booking: {
        hotel_id: this.hotelId as never,
        room_type: this.roomType as never,
      }
    })
  }


  onSubmit() {
    const form = this.bookingForm

    console.log(form.value)

    if (form.invalid) {
      this.msgService.add({
        severity: 'error',
        summary: 'Error en el formulario!',
        detail: 'Revisa los datos ingresados'
      })
      markAllAsDirty(form)
      
      return
    }
  }

}
