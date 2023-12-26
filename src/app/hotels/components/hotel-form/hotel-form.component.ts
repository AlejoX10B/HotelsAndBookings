import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { markAllAsDirty, roomTypeOptions, urlValidator } from '../../../shared/constants';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrl: './hotel-form.component.scss'
})
export class HotelFormComponent implements OnInit {

  private msgService = inject(MessageService)


  readonly roomOptions = roomTypeOptions

  hotelForm = new FormBuilder().group({
    id:           [null],
    active:       [true],
    name:         [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    location:     [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    description:  [null, [Validators.minLength(10), Validators.maxLength(250)]],
    img_url:      [null, [urlValidator()]],
    score:        [3, [Validators.required, Validators.min(0), Validators.max(5)]],
    services:     [[]],
    rooms:        new FormBuilder().array([])
  })

  roomForm = new FormBuilder().group({
    active:   [true],
    kind:     [null, [Validators.required]],
    location: [null, [Validators.required]],
    cost:     [0, [Validators.required, Validators.min(0)]],
    taxes:    [0, [Validators.required, Validators.min(0)]]
  })

  get rooms() {
    return this.hotelForm.get('rooms') as FormArray
  }


  ngOnInit() {
    this.addRoom()
  }


  addRoom() {
    this.rooms.push(this.roomForm)
  }

  deleteRoom(index: number) {
    this.rooms.removeAt(index)
  }

  onSubmit() {
    const form = this.hotelForm
    console.log(form.value)
    if (form.invalid) {
      this.msgService.add({
        severity: 'error',
        summary: 'Error en el formulario',
        detail: 'Revisa los datos ingresados'
      })
      markAllAsDirty(form)

      return
    }

    this.msgService.add({
      severity: 'success',
      summary: 'Hotel creado'
    })
  }

}
