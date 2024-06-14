import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const requiredRoles = route.data['roles'] as Array<string>;
  let authService = inject(AuthService)
  let router = inject(Router)
  if (requiredRoles && requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.some(role => authService.hasRole(role));

    if (!hasRequiredRole) {
      // Redirect to unauthorized page or handle accordingly
      router.navigate(['public/unauthorized']);
      return false;
    }
  }
  return true;
};
