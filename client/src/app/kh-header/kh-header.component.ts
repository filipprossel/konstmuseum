import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { ProfileDropdownComponent } from "./profile-dropdown/profile-dropdown.component";
import {TranslocoDirective, TranslocoService} from '@jsverse/transloco';

@Component({
  selector: 'app-kh-header',
  imports: [RouterModule, CommonModule, ProfileDropdownComponent,TranslocoDirective],
  templateUrl: './kh-header.component.html',
  styleUrls: ['./kh-header.component.scss']
})
export class KhHeaderComponent implements OnInit {
  homeLink = "/";
  exploreLink = "/";
  eventLink = "/b";
  forumLink = "/forms";
  utstallLink = "/exhibition";
  currentLanguage = 'swe';

  userPfp: string = ''; 
  userName: string = '';

  authService!: AuthService; 

  constructor(authService: AuthService,private translocoService: TranslocoService) {
    this.authService = authService; 
  }

  ngOnInit(): void {
    const user = this.authService.getUser(); 
    if (user) {
      this.userPfp = user.user_pfp; 
      this.userName = user.first_name;
    }
  }

  testLanguageSwitch() {
    const currentLang = this.translocoService.getActiveLang();
    const newLang = currentLang === 'swe' ? 'en' : 'swe';
    this.currentLanguage = newLang;
    this.translocoService.setActiveLang(newLang);
    console.log(`Språk växlat till: ${newLang}`);
  }
}
