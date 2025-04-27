import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KhHeaderComponent } from "./kh-header/kh-header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { KhFooterComponent } from "./kh-footer/kh-footer.component";
import { KhPhoneHeaderComponent } from "./kh-phone-header/kh-phone-header.component";
import { KhLiveExhibitionWidgetComponent } from './kh-live-exhibition-widget/kh-live-exhibition-widget.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KhHeaderComponent, CommonModule, KhFooterComponent, KhPhoneHeaderComponent, KhLiveExhibitionWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public router: Router) {}

  title = 'client';
  
  shouldShowHeaderFooter(): boolean {
    let hiddenRoutes = ['/login', '/signup'];
    return !hiddenRoutes.includes(this.router.url);
  }

  shouldShowWidgetLiveExhibition() {
    let hiddenRoutes = ['/login', '/signup', '/exhibition/'];
    return !hiddenRoutes.includes(this.router.url);
  }
}
