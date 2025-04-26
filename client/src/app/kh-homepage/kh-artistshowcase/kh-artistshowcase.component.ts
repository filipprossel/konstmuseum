import { Component, Input } from '@angular/core';
import { Artist } from '../../kh-event/service/exhibition.model';

@Component({
  selector: 'app-kh-artistshowcase',
  templateUrl: './kh-artistshowcase.component.html',
  styleUrls: ['./kh-artistshowcase.component.scss']
})
export class KhArtistshowcaseComponent {
  @Input() artist!: Artist;
}
