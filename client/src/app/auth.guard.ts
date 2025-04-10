import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const user = localStorage.getItem('user');

  if (user) {

    return true;
  } else {
    router.navigate(['login']); // redirect to login page
    return false;
  }
};
