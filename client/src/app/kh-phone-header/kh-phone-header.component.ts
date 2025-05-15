import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kh-phone-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './kh-phone-header.component.html',
  styleUrl: './kh-phone-header.component.scss'
})
export class KhPhoneHeaderComponent {
  homeLink = "/";
  profileLink = "/profile";
  eventLink = '/event';
  forumLink = '/forms';
  utstallLink = "/exhibition";

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  authService!: AuthService;

  constructor(authService: AuthService,private router: Router) {
    this.authService = authService;
  }

  logOut() {
    this.authService.logOut();
  }
}
