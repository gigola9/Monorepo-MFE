import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import * as fromServices from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: fromServices.AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate([
        '/auth/login'
      ]);
      return false;
    }
  }
}
