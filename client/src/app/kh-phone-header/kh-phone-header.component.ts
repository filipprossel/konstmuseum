import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kh-phone-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './kh-phone-header.component.html',
  styleUrl: './kh-phone-header.component.scss'
})
export class KhPhoneHeaderComponent {
  homeLink = "/";
  profileLink = "/profile";
  exploreLink = '/a';
  eventLink = '/b';
  forumLink = '/forms';
  utstallLink = "/d";

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
