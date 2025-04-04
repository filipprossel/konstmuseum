import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kh-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, CommonModule, FloatLabelModule],
  templateUrl: './kh-login.component.html',
  styleUrls: ['./kh-login.component.scss'] 
})
export class KhLoginComponent {
  email: string = '';
  password: string = '';

  onSubmit(): void {
      const {email, password} = this;


      console.log(email, password);
      // skicka dendär post /login
  }

}
