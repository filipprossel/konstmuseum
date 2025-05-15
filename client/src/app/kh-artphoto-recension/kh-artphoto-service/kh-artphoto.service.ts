import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtWork } from './artwork.model';
import { Review } from './review.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KhArtphotoService {

  private apiUrl = 'http://localhost:8080/api/photos/art'; 
  private reviewApiUrl = 'http://localhost:8080/api/reviews/exhibition';


  constructor(private http: HttpClient) {}
  createReview(user_id: string, art_id: string, grade: string, review: string) {
    console.log("Test")
    return this.http.post("http://localhost:8080/api/reviews/createReview", {
      user_id, art_id, grade, review
    });
  }

  getArtworkById(id: number): Observable<ArtWork> {
    return this.http.get<ArtWork>(`${this.apiUrl}/${id}`);
  }

  getReviewsByUserAndExhibition(user_id: number, exhibition_id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.reviewApiUrl}`, {
      params: {
        user_id: user_id.toString(),
        exhibition_id: exhibition_id.toString()
      }
    });
  }
}
