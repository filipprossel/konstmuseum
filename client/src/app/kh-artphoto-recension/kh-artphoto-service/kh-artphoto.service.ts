import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KhArtphotoService {

  constructor(private http: HttpClient) {}
  createReview(user_id: string, art_id: string, grade: string, review: string) {
    console.log("Test")
    return this.http.post("http://localhost:8080/api/reviews/createReview", {
      user_id, art_id, grade, review
    });
  }
}
