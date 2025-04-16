import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Exhibition } from '../service/exhibition.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kh-event-showcase',
  imports: [RouterModule,CommonModule],
  templateUrl: './kh-event-showcase.component.html',
  styleUrl: './kh-event-showcase.component.scss'
})
export class KhEventShowcaseComponent {

  cardClick: boolean = false;

  @Input() exhibition!: Exhibition;

  infoClick() {
    this.cardClick = !this.cardClick;
  }
}
