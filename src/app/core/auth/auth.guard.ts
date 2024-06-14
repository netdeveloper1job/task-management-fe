import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let router = inject(Router)
  let token = localStorage.getItem('token');
  if(token === null){
    return router.navigate(['/login']);
  }
  return true;
};
