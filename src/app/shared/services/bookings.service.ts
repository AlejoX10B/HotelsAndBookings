import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { environment as env } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private http = inject(HttpClient)


  generateBooking(booking: any): Observable<boolean> {
    const url = `${env.backUrl}/${env.routes.bookings}`

    return this.http.post<any>(url, booking)
      .pipe(
        map(() => true),
        catchError(e => throwError(() => e.message))
      )
  }
}
