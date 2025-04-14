import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, FormsModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  images = Array(9).fill(
    'https://images.unsplash.com/photo-1596661893368-66e7d2510fa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

  currentIndex = Math.floor(this.images.length / 2); 

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
