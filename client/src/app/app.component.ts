import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KhHeaderComponent } from "./kh-header/kh-header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KhFooterComponent } from "./kh-footer/kh-footer.component";
import { KhPhoneHeaderComponent } from "./kh-phone-header/kh-phone-header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KhHeaderComponent, CommonModule, KhFooterComponent, KhPhoneHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public router: Router) {}

  hiddenRoutes = ['/login', '/signup'];
  title = 'client';

  shouldShowHeaderFooter(): boolean {
    return !this.hiddenRoutes.includes(this.router.url);
  }
}
