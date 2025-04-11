import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { ProfileDropdownComponent } from "./profile-dropdown/profile-dropdown.component"; // Import AuthService to access user data

@Component({
  selector: 'app-kh-header',
  imports: [RouterModule, CommonModule, ProfileDropdownComponent],
  templateUrl: './kh-header.component.html',
  styleUrls: ['./kh-header.component.scss']
})
export class KhHeaderComponent implements OnInit {
  homeLink = "/";
  exploreLink = "/a";
  eventLink = "/b";
  forumLink = "/c";
  utstallLink = "/d";

  userPfp: string = ''; 
  userName: string = '';

  authService!: AuthService; 

  constructor(authService: AuthService) {
    this.authService = authService; 
  }

  ngOnInit(): void {
    const user = this.authService.getUser(); 
    if (user) {
      this.userPfp = user.user_pfp; 
      this.userName = user.first_name;
    }
  }
}
