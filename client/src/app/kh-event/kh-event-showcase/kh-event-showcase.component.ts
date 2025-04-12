import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kh-event-showcase',
  imports: [],
  templateUrl: './kh-event-showcase.component.html',
  styleUrl: './kh-event-showcase.component.scss'
})
export class KhEventShowcaseComponent {

  @Input() event!: { name: string, place: string; done: boolean};

}
