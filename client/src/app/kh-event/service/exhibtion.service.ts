import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exhibition } from './exhibition.model'; 

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  private apiUrl = 'http://localhost:8080/api/exhibitions'; 

  constructor(private http: HttpClient) { }

  getExhibitions(): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.apiUrl);
  }

  getExhibitionById(id: number): Observable<Exhibition> {
    return this.http.get<Exhibition>(`${this.apiUrl}/${id}`);
  }
}
