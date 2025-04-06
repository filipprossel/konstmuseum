import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kh-header',
  imports: [RouterModule],
  templateUrl: './kh-header.component.html',
  styleUrl: './kh-header.component.scss'
})
export class KhHeaderComponent {
  homeLink = "/homepage";
  exploreLink = "/a";
  eventLink = "/b";
  forumLink = "/c";
}
