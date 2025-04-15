import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KhProfileServiceService {

  constructor(private http: HttpClient) {}
  editUser(editField: string, email: string, password: string) {
    return this.http.post("http://localhost:8080/api/users/edit", {
      email, password, editField
    });
  
  }
}
