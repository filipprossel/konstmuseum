import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Review } from '../kh-artphoto-recension/kh-artphoto-service/review.model';
import { KhArtphotoService } from '../kh-artphoto-recension/kh-artphoto-service/kh-artphoto.service';


@Component({
  selector: 'app-kh-your-reviews',
  imports: [CommonModule],
  templateUrl: './kh-your-reviews.component.html',
  styleUrl: './kh-your-reviews.component.scss'
})
export class KhYourReviewsComponent implements OnInit {

  reviews: Review[] = []

  constructor(private authService: AuthService, private artPhotoService: KhArtphotoService) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    const exhibition = history.state.exhibition;
    console.log(user.id, exhibition.exhibition_id);
  
    this.artPhotoService.getReviewsByUserAndExhibition(user.id, exhibition.exhibition_id)
      .subscribe({
        next: (rawReviews) => {
          this.reviews = rawReviews.map((r: any) => ({
            review_id: r.review_id,
            grade: r.grade,
            review: r.review,
            Art: {
              art_id: r.artphoto.art_id,
              art_name: r.artphoto.art_name,
              art_desc: r.artphoto.art_desc,
              art_link: r.artphoto.art_link,
              exhibition_id: r.artphoto.exhibition_id,
              artphotoartist: r.artphoto.artphotoartist
            }
          }));
        },
        error: (err) => {
          console.error('Error fetching reviews:', err);
        }
      });
  }
  
}
