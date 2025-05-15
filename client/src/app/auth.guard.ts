import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service'; 

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService); 

  const user = authService.getUser();

  if (user) {
    return true;
  } else {
    // Lägg till sessionstorage för senaste routen
    // Hämta sneaste routen
    // lägg till useeffect likande när route ändras 
    router.navigate(['login']);
    return false;
  }
};
