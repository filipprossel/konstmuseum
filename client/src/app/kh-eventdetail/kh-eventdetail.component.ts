import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-kh-event-detail',
  templateUrl: './kh-eventdetail.component.html',
  styleUrls: ['./kh-eventdetail.component.scss'],
  imports: [CarouselComponent]
})
export class KhEventDetailComponent implements OnInit {
  eventId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('id');
    console.log('Showing details for event:', this.eventId);
  }
}
