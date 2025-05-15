import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Review } from '../kh-artphoto-recension/kh-artphoto-service/review.model';
import { KhArtphotoService } from '../kh-artphoto-recension/kh-artphoto-service/kh-artphoto.service';
import { ExhibitionService } from '../kh-event/service/exhibtion.service';
import { ActivatedRoute } from '@angular/router';
import { Exhibition } from '../kh-event/service/exhibition.model';
import { ReviewCardComponent } from "./review-card/review-card.component";


@Component({
  selector: 'app-kh-your-reviews',
  imports: [CommonModule, ReviewCardComponent],
  templateUrl: './kh-your-reviews.component.html',
  styleUrl: './kh-your-reviews.component.scss'
})
export class KhYourReviewsComponent implements OnInit {

  reviews: Review[] = []
  exhibition: Exhibition | null = null;

  constructor(private authService: AuthService, private artPhotoService: KhArtphotoService, private exhibitionService: ExhibitionService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.exhibition = history.state.exhibition || null;
  
    if (this.exhibition) {
      this.loadReviews(user.id, this.exhibition.exhibition_id);
    } else {
      const id = Number(this.route.snapshot.paramMap.get('exhibitionId'));
      this.exhibitionService.getExhibitionById(id).subscribe({
        next: (exhib) => {
          this.exhibition = exhib;
          console.log('Exhibition fetched:', this.exhibition);
          this.loadReviews(user.id, this.exhibition.exhibition_id);
        },
        error: (err) => {
          console.error('Error fetching exhibition:', err);
        }
      });
    }
  }
  
  private loadReviews(userId: number, exhibitionId: number) {
    this.artPhotoService.getReviewsByUserAndExhibition(userId, exhibitionId).subscribe({
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
