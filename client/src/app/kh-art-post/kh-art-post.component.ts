import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  title: string;
  artist: string;
  date: string;
}

@Component({
  selector: 'app-kh-art-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kh-art-post.component.html',
  styleUrls: ['./kh-art-post.component.scss']
})
export class KhArtPostComponent {
  galleryImages: GalleryImage[] = [
    { src: 'assets/artist1.jpg', title: 'Fjällstorm', artist: 'Anna Karisson', date:'2025-10-12' },
    { src: 'assets/artist2.jpg', title: 'Digital Dröm', artist: 'Erik Lindström', date:'2025-10-12' },
    { src: 'assets/artist3.jpg', title: 'Norrskensnatt', artist: 'Martin Sjoberg', date:'2025-10-12' },
    { src: 'assets/konstart.png', title: 'Reflektion', artist: 'Lisa Berg', date:'2025-10-12' },
    { src: 'assets/konstart2.png', title: 'Skogsväsen', artist: 'Jonas Bergström', date:'2025-10-12' },
    { src: 'assets/homepage.png', title: 'Ljus över fjället', artist: 'Maria Holm', date:'2025-10-12' },
    { src: 'assets/nature.png', title: 'Stillhet', artist: 'Sofie Åström',date:'2025-10-12' }
  ];

  selectedImage: GalleryImage | null = null;

  openImage(image: GalleryImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }

}

