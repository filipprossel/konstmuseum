import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KhHeaderComponent } from "./kh-header/kh-header.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KhHeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public router: Router) {}

  hiddenRoutes = ['/', '/signup'];
  title = 'client';

  shouldShowHeaderFooter(): boolean {
    return !this.hiddenRoutes.includes(this.router.url);
  }
}
