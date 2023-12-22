import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private http = inject(HttpClient)


  private _agentHotels = signal<any>([])
  agentHotels = computed<any>(() => this._agentHotels())

  private _queriedHotel = signal<any>([])
  queriedHotel = computed<any>(() => this._queriedHotel())


  getAgentHotels() {
    const url = `${env.backUrl}/${env.routes.hotels}`

    return this.http.get(url)
      .pipe(
        tap(hotels => this._agentHotels.set(hotels)),
        catchError(e => throwError(() => e.message))
      )
  }

  getHotel(hotelId: number) {
    const url = `${env.backUrl}/${env.routes.hotels}/${hotelId}`

    return this.http.get(url)
      .pipe(
        tap(hotel => this._queriedHotel.set(hotel)),
        catchError(e => throwError(() => e.message))
      )
  }
}
