import { Component, CreateEffectOptions, Injector, Input, OnInit, computed, effect, inject, numberAttribute } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { HotelsService } from '../../../shared/services';

import { Actions, markAllAsDirty, RoomTypeOptions, urlValidator } from '../../../shared/constants';
import { Hotel } from '../../../shared/models';


@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrl: './hotel-form.component.scss'
})
export class HotelFormComponent implements OnInit {

  private router = inject(Router)
  private hotelsService = inject(HotelsService)
  private msgService = inject(MessageService)


  @Input({ transform: numberAttribute }) id!: number
  
  hotel = computed<Hotel|null>(() => this.hotelsService.queriedHotel())

  hotelEffect = effect(() => {
    if (this.action == Actions.Add || !this.hotel()) return

    this.hotelForm.patchValue(this.hotel() as never)
    this._fillRooms()
  })

  hotelForm = new FormBuilder().group({
    active:       [true],
    name:         [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    location:     [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    description:  [null, [Validators.minLength(10), Validators.maxLength(2500)]],
    img_url:      [null, [urlValidator()]],
    score:        [3, [Validators.required, Validators.min(0), Validators.max(5)]],
    services:     [[]],
    rooms:        new FormBuilder().array([])
  })

  get rooms() {
    return this.hotelForm.get('rooms') as FormArray
  }

  readonly RoomOptions = RoomTypeOptions
  readonly Actions = Actions

  action = Actions.Add

  
  ngOnInit() {
    if (!this.router.url.includes('edit')) {
      this.addRoom()
      return
    }

    this.hotelsService.getAgentHotel(this.id).subscribe()
    this.action = Actions.Edit
  }

  
  private _fillRooms() {
    this.hotel()?.rooms?.forEach(room => {
      const roomForm = new FormBuilder().group({
        active:   [true],
        kind:     [null, [Validators.required]],
        location: [null, [Validators.required]],
        cost:     [0, [Validators.required, Validators.min(0)]],
        taxes:    [0, [Validators.required, Validators.min(0)]]
      })
      
      roomForm.patchValue(room as never)
      this.rooms.push(roomForm)
    })
  }

  private _addHotel(form: FormGroup) {
    this.hotelsService.createHotel(form.value)
      .subscribe({
        next: () => {
          this.msgService.add({
            severity: 'success',
            summary: 'Éxito!',
            detail: 'El hotel ha sido creado'
          })

          this.router.navigateByUrl('/hotels')
        },
        error: (e) => {
          this.msgService.add({
            severity: 'error',
            summary: 'Error!',
            detail: `Ha ocurrido un error al intentar crear el hotel: ${e}`
          })
        }
      })
  }

  private _editHotel(form: FormGroup) {
    this.hotelsService.editHotel(this.id, form.value)
      .subscribe({
        next: () => {
          this.msgService.add({
            severity: 'success',
            summary: 'Éxito!',
            detail: 'Los datos han sido modificados'
          })

          this.router.navigateByUrl('/hotels')
        },
        error: (e) => {
          this.msgService.add({
            severity: 'error',
            summary: 'Error!',
            detail: `Ha ocurrido un error al intentar editar el hotel: ${e}`
          })
        }
      })
  }

  addRoom() {
    const roomForm = new FormBuilder().group({
      active:   [true],
      kind:     [null, [Validators.required]],
      location: [null, [Validators.required]],
      cost:     [0, [Validators.required, Validators.min(0)]],
      taxes:    [0, [Validators.required, Validators.min(0)]]
    })
    this.rooms.push(roomForm)
  }

  deleteRoom(index: number) {
    this.rooms.removeAt(index)
  }

  onSubmit() {
    const form = this.hotelForm

    if (form.invalid) {
      this.msgService.add({
        severity: 'error',
        summary: 'Error en el formulario!',
        detail: 'Revisa los datos ingresados'
      })
      markAllAsDirty(form)

      return
    }

    (this.action === Actions.Add)
      ? this._addHotel(form)
      : this._editHotel(form)
    
  }

}
