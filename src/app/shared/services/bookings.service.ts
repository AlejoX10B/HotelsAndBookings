import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, forkJoin, map, switchMap, tap, throwError } from 'rxjs';

import { environment as env } from '../../../environments/environment';

import { AuthService } from './auth.service';
import { HotelsService } from './hotels.service';

import { Booking } from '../models';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private http = inject(HttpClient)
  private authService = inject(AuthService)
  private hotelsService = inject(HotelsService)


  private user = computed(() => this.authService.user())

  private _userBookings = signal<Booking[]>([])
  userBookings = computed<Booking[]>(() => this._userBookings())

  private _agentBookings = signal<Booking[]>([])
  agentBookings = computed<Booking[]>(() => this._agentBookings())


  getAgentBookings(): Observable<Booking[]> {
    const url = `${env.backUrl}/${env.routes.bookings}`

    return this.http.get<Booking[]>(url)
      .pipe(
        switchMap(bookings => {
          const hotelIds = bookings.map(booking => booking.hotel_id)
          return forkJoin(hotelIds.map(id => this.hotelsService.getUserHotel(id)))
            .pipe(
              map(hotels => {
                bookings.forEach((booking, i) => {
                  const relHotel = hotels[i]
                  if (relHotel) {
                    booking.hotel_name = relHotel.name
                    booking.hotel_location = relHotel.location
                  }
                })
                return bookings
              })
            )
        }),
        tap(bookings => {
          this._agentBookings.set(bookings)
          this._userBookings.set([])
        }),
        catchError(e => throwError(() => e.message))
      )
  }

  getUserBookings(): Observable<Booking[]> {
    const url = `${env.backUrl}/${env.routes.bookings}`
    const params = new HttpParams().append('user_id', String(this.user()?.id))

    return this.http.get<Booking[]>(url, { params })
      .pipe(
        switchMap(bookings => {
          const hotelIds = bookings.map(booking => booking.hotel_id)
          return forkJoin(hotelIds.map(id => this.hotelsService.getUserHotel(id)))
            .pipe(
              map(hotels => {
                bookings.forEach((booking, i) => {
                  const relHotel = hotels[i]
                  if (relHotel) {
                    booking.hotel_name = relHotel.name
                    booking.hotel_location = relHotel.location
                  }
                })
                return bookings
              })
            )
        }),
        tap(bookings => {
          this._agentBookings.set([])
          this._userBookings.set(bookings)
        }),
        catchError(e => throwError(() => e.message))
      )
  }

  generateBooking(booking: any): Observable<boolean> {
    const url = `${env.backUrl}/${env.routes.bookings}`

    return this.http.post<any>(url, booking)
      .pipe(
        map(() => true),
        catchError(e => throwError(() => e.message))
      )
  }
}
