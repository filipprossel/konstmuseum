import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { HttpClient } from '@angular/common/http';
import { KhLoginServiceService } from './kh-loginServices/kh-login-service.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kh-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, CommonModule, FloatLabelModule],
  templateUrl: './kh-login.component.html',
  styleUrls: ['./kh-login.component.scss'],
  providers: [HttpClient]

})
export class KhLoginComponent {
  email: string = '';
  password: string = '';
  user: any;

  constructor(private KhLoginServiceService: KhLoginServiceService){}
  

  onSubmit(): void {
      let {email, password} = this;
      email = "ErikLindstrom@gmail.com"
      password = "password";
      this.KhLoginServiceService.loginUser(email, password).subscribe((data) => {
        console.log(data);
        this.user = data;
        // göra mycket saker
      })
       


      // skicka dendär post /login
  }

}
