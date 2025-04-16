import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";
import { Exhibition } from "../kh-event/service/exhibition.model";
import { ExhibitionService } from "../kh-event/service/exhibtion.service";

@Component({
  selector: 'app-kh-event-detail',
  templateUrl: './kh-eventdetail.component.html',
  styleUrls: ['./kh-eventdetail.component.scss'],
  imports: [CarouselComponent]
})
export class KhEventDetailComponent implements OnInit {
  eventId: string | null = null;
  exhibition: Exhibition | null = null;

  constructor(
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService
  ) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');

    if (this.eventId) {
      const id = Number(this.eventId);
      this.exhibitionService.getExhibitionById(id).subscribe({
        next: (data) => {
          this.exhibition = data;
        },
        error: (err) => {
          console.error('Failed to load exhibition', err);
        }
      });
    }
  }
}