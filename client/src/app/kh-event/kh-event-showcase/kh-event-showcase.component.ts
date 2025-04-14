import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kh-event-showcase',
  imports: [RouterModule],
  templateUrl: './kh-event-showcase.component.html',
  styleUrl: './kh-event-showcase.component.scss'
})
export class KhEventShowcaseComponent {

  cardClick: boolean = false;

  @Input() event!: { name: string, place: string; done: boolean, img: string};

  infoClick() {
    this.cardClick = !this.cardClick;
  }
}
