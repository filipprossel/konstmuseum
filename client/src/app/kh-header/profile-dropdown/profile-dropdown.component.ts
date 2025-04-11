import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dropdown',
  imports: [RouterModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.scss'
})

export class ProfileDropdownComponent {
  profileLink = "/profile";
  
  authService!: AuthService;

  constructor(authService: AuthService,private router: Router) {
    this.authService = authService;
  }

  logOut() {
    this.authService.logOut();
  }
}
