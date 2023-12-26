import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from '../services';

import { Roles } from '../models';


export function roleGuard(allowedRole: Roles): CanActivateFn {
  return () => {
    const authService = inject(AuthService)
    const router = inject(Router)

    const currentUser = authService.user()

    if (currentUser?.role === allowedRole) {
      return true
    }

    return router.navigateByUrl('/')
  }
}
