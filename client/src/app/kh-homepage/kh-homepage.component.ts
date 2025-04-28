import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Carousel } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ExhibitionService } from '../kh-event/service/exhibtion.service';
import { Exhibition } from '../kh-event/service/exhibition.model';
import { KhArtistshowcaseComponent } from "./kh-artistshowcase/kh-artistshowcase.component";

@Component({
  selector: 'app-kh-homepage',
  templateUrl: './kh-homepage.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    Carousel,
    KhArtistshowcaseComponent
],
  styleUrls: ['./kh-homepage.component.scss'],
})
export class KhHomepageComponent implements OnInit {
  eventList: (Exhibition)[] = [];
  responsiveOptions: any[] = [];

  constructor(
    private router: Router,
    private exhibitionService: ExhibitionService
  ) {}

  ngOnInit(): void {
    this.exhibitionService.getExhibitions().subscribe(
      (data: Exhibition[]) => {
        const currentDate = new Date();
  
        this.eventList = data
          .filter(event => new Date(event.exhibition_date_start) > currentDate)
          .map((event) => ({
            exhibition_name: event.exhibition_name,
            exhibition_date_start: event.exhibition_date_start,
            exhibition_date_end: event.exhibition_date_end,
            photos: event.photos.length > 0 ? [{ art_link: event.photos[0].art_link }] : [], 
            exhibition_id: event.exhibition_id,
            exhibition_desc: event.exhibition_desc,               
            artist: event.artist,                   
            place: event.place
          }));
      },
      (error) => {
        console.error('Error loading exhibitions:', error);
      }
    );
  }  

  goToExhibition() {
    this.router.navigate(['/exhibition']);
  }

  goToEvent(exhibition_id: number) {
    this.router.navigate([`/exhibition/${exhibition_id}`]); 
  }
}
