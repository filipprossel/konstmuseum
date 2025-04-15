import { Component } from '@angular/core';
import { Panel } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';


interface EventItem {
  title: string;
  date: string;
  image: string;
}
@Component({
  selector: 'app-kh-homepage',
  templateUrl: './kh-homepage.component.html',
  standalone: true,
  imports: [
    CommonModule,
    Panel,
    ButtonModule,
    Carousel,
  ],
  styleUrls: ['./kh-homepage.component.scss']
})
export class KhHomepageComponent {
  Events: EventItem[] = [];
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
      { breakpoint: '768px', numVisible: 2, numScroll: 2 },
      { breakpoint: '560px', numVisible: 1, numScroll: 1 }
    ];

    this.Events = [
      {
        title: 'Vårutställning',
        date: '10 april 2025 13:00',
        image: 'assets/konstart.png'
      },
      {
        title: 'Sommarnattens Magi',
        date: '15 juni 2025 18:00',
        image: 'assets/homepage.png'
      },
      {
        title: 'Mörkret och Ljuset',
        date: '1 september 2025 17:30',
        image: 'assets/nature.png'
      },
      {
        title: 'Vinterljus',
        date: '20 december 2025 14:00',
        image: 'assets/konstart2.png'
      }
    ];
  }
  constructor(private router: Router) {}

  goToExhibition() {
    this.router.navigate(['/exhibition']);
  }
}
