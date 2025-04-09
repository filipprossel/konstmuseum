import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KhLoginServiceService {

  constructor(private http: HttpClient) {}

  loginUser(email:string, password:string) {
    console.log("shungs")
    console.log(email + password);
    return this.http.post("http://localhost:8080/api/users/login", {
      email, password
    });
  
  }
}
