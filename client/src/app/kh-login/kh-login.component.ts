import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"
import { HttpClient } from '@angular/common/http';
import { KhLoginServiceService } from './kh-loginServices/kh-login-service.service';

import { CommonModule } from '@angular/common';
import { Router, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

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

  constructor(private KhLoginServiceService: KhLoginServiceService, private router: Router){}
  

  onSubmit(): void {
      let {email, password} = this;
      this.KhLoginServiceService.loginUser(email, password).subscribe((data) => {
        console.log(data);
        this.user = data;
        localStorage.setItem("user", JSON.stringify(this.user));
        // göra mycket saker
        this.router.navigate(["/"]);
        
      })
       


      // skicka dendär post /login
  }

}
