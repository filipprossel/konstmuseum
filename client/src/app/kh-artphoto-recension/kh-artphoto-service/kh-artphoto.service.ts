import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtWork } from './artwork.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KhArtphotoService {

  private apiUrl = 'http://localhost:8080/api/photos/art'; 

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
}
