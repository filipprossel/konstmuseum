import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kh-event-showcase',
  imports: [],
  templateUrl: './kh-event-showcase.component.html',
  styleUrl: './kh-event-showcase.component.scss'
})
export class KhEventShowcaseComponent {

  cardClick: boolean = false;

  @Input() event!: { name: string, place: string; done: boolean};

  infoClick() {
    this.cardClick = !this.cardClick;
  }
}
