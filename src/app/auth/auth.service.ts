import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


import { Credentials } from './models/credentials.model';
import { Observable, catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)

  login(credentials: Credentials): Observable<any> {

    const params = new HttpParams()
      .append('email', credentials.email as string)
      .append('password', credentials.password as string)
      .append('role', credentials.role as string)
    
    return this.http.get<any>('http://localhost:3000/users', { params })
      .pipe(
        map(users => {
          if (users.length === 0) throw new Error( 'User not found')
          return users[0]
        }),
        catchError(e => throwError(() => e.message))
      )
  }

}
