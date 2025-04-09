import { Component } from '@angular/core';
import {Panel} from 'primeng/panel';
import {Card} from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-kh-homepage',
  templateUrl: './kh-homepage.component.html',
  standalone: true,
  imports: [
    Panel,
    Card,
    ButtonModule,
  ],
  styleUrls: ['./kh-homepage.component.scss']
})
export class KhHomepageComponent {
}
