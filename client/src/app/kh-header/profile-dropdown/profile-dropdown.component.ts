import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-dropdown',
  imports: [RouterModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.scss'
})
export class ProfileDropdownComponent {
  profileLink = "/profile";
}
