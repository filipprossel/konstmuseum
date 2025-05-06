import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AuthService } from '../auth.service';
import { ProfileDropdownComponent } from "./profile-dropdown/profile-dropdown.component";
import { KhLanguageSelectorComponent } from './kh-language-selector/kh-language-selector/kh-language-selector.component';
import {TranslocoDirective, TranslocoService} from '@jsverse/transloco';
import { getLanguageImagePath } from './kh-language-selector/kh-language-selector/language.config';

@Component({
  selector: 'app-kh-header',
  imports: [RouterModule, CommonModule, ProfileDropdownComponent,TranslocoDirective, KhLanguageSelectorComponent],
  templateUrl: './kh-header.component.html',
  styleUrls: ['./kh-header.component.scss']
})
export class KhHeaderComponent implements OnInit {
  homeLink = "/";
  exploreLink = "/";
  eventLink = "/b";
  forumLink = "/forms";
  utstallLink = "/exhibition";
  currentLangImg: string | null | undefined;
  currentLanguage:any;

  userPfp: string = ''; 
  userName: string = '';

  authService!: AuthService; 

  constructor(  @Inject(PLATFORM_ID) private platformId: Object,  authService: AuthService,private translocoService: TranslocoService) {
    this.authService = authService; 
  }

  ngOnInit(): void {
      if(isPlatformBrowser(this.platformId)) {
        window.addEventListener('localLanguageChange', (event: any) => {
          const newLang = event.detail?.newLang;
          console.log('Language change', newLang);
          this.translocoService.setActiveLang(newLang);
          this.currentLangImg = getLanguageImagePath(newLang);
        });
      }
    
    const user = this.authService.getUser(); 
    if (user) {
      this.userPfp = user.user_pfp; 
      this.userName = user.first_name;
    }
  console.log(this.currentLangImg);

  if (typeof window !== 'undefined' && localStorage) {
    const savedLang = localStorage.getItem("language") ?? "swe";
    this.currentLangImg = getLanguageImagePath(savedLang);
    this.translocoService.setActiveLang(savedLang);
  }

  }


  // testLanguageSwitch() {
  //   const currentLang = this.translocoService.getActiveLang();
  //   const newLang = currentLang === 'swe' ? 'en' : 'swe';
  //   this.currentLanguage = newLang;
  //   this.translocoService.setActiveLang(newLang);
  //   console.log(`Språk växlat till: ${newLang}`);
  // }
}
