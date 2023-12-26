import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';

import { environment as env } from '../../../environments/environment';
import { Hotel } from '../models';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private http = inject(HttpClient)


  private _agentHotels = signal<Hotel[]>([])
  agentHotels = computed<Hotel[]>(() => this._agentHotels())

  private _queriedHotel = signal<Hotel|null>(null)
  queriedHotel = computed<Hotel|null>(() => this._queriedHotel())


  getAgentHotels(): Observable<Hotel[]> {
    const url = `${env.backUrl}/${env.routes.hotels}`

    return this.http.get<Hotel[]>(url)
      .pipe(
        tap(hotels => this._agentHotels.set(hotels)),
        catchError(e => throwError(() => e.message))
      )
  }

  getHotel(hotelId: number): Observable<Hotel> {
    const url = `${env.backUrl}/${env.routes.hotels}/${hotelId}`

    return this.http.get<Hotel>(url)
      .pipe(
        tap(hotel => this._queriedHotel.set(hotel)),
        catchError(e => throwError(() => e.message))
      )
  }

  createHotel(hotel: any): Observable<any> {
    const url = `${env.backUrl}/${env.routes.hotels}`

    return this.http.post<any>(url, hotel)
      .pipe(
        map(() => true),
        catchError(e => throwError(() => e.message))
      )
  }

  changeHotelStatus(hotelId: number, status: boolean): Observable<boolean> {
    const url = `${env.backUrl}/${env.routes.hotels}/${hotelId}`
    const body = { active: status }

    return this.http.patch<Hotel>(url, body)
      .pipe(
        tap(hotel => this._queriedHotel.set(hotel)),
        map(() => true),
        catchError(e => throwError(() => e.message))
      )
  }
}
