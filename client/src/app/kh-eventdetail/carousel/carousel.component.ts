import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Exhibition } from '../../kh-event/service/exhibition.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() exhibition!: Exhibition | null;
  currentIndex = 0;

  get images(): string[] {
    return this.exhibition?.photos?.map(photo => photo.art_link) || [];
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }
}
