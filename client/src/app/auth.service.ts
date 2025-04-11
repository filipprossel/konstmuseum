import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
  }

  getUser() {
    if (this.isBrowser()) {
      const userJson = localStorage.getItem('user');
      return userJson ? JSON.parse(userJson) : null;
    }
    return null;
  }

  logOut() {
    if (this.isBrowser()) {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }
  }
}
