import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../kh-artphoto-recension/kh-artphoto-service/review.model';

@Component({
  selector: 'app-review-card',
  imports: [CommonModule],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent {

  @Input() review!: Review;

}
