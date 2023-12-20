import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

import { environment as env } from '../../../environments/environment';

import { AuthStatus, Credentials } from '../../auth/models';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)


  private _authStatus = signal<AuthStatus>(AuthStatus.LoadingAuth)
  authStatus = computed(() => this._authStatus())

  private _user = signal<any>(null)
  user = computed(() => this._user())


  constructor() {
    this.getCurrentUser()?.subscribe()
  }


  private _setSession(user: any) {
    localStorage.setItem('userId', user.id)

    this._authStatus.set(AuthStatus.Authenticated)
    this._user.set(user)
  }


  logout() {
    localStorage.removeItem('userId')

    this._authStatus.set(AuthStatus.NotAuthenticated)
    this._user.set(null)
  }

  login(credentials: Credentials): Observable<any> {
    const url = `${env.backUrl}/${env.routes.users}`

    const params = new HttpParams()
      .append('email', credentials.email as string)
      .append('password', credentials.password as string)
      .append('role', credentials.role as string)
    
    return this.http.get<any>(url, { params })
      .pipe(
        map(users => {
          if (users.length === 0) throw new Error('User not found')

          this._setSession(users[0])
          return true
        }),
        catchError(e => throwError(() => e.message))
      )
  }

  getCurrentUser(): Observable<any> {
    const userId = localStorage.getItem('userId')    
    if (!userId) {
      this.logout()
      return of(false)
    }

    const url = `${env.backUrl}/${env.routes.users}/${userId}`
    return this.http.get<any>(url)
      .pipe(
        tap(user => this._setSession(user)),
        catchError(e => {
          this._authStatus.set(AuthStatus.NotAuthenticated)
          return throwError(() => e.message)
        })
      )
  }

}
