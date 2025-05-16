import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class KhProfileServiceService {
  //Service för att hämta och skicka data från backend:en
  constructor(private http: HttpClient) {}
  editUser(first_name: string, last_name: string, email: string, password: string, user_description: string) {
    return this.http.post("http://localhost:8080/api/users/edit", {
      first_name, last_name, email, password, user_description
    });
  }
  getEventsVisited(user_id: number){
    return this.http.get(
      `http://localhost:8080/api/users/exhibitions?user_id=${user_id}`
    );
  }
}
