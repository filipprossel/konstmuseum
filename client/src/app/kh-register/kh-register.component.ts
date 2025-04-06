import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from "primeng/floatlabel"

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-kh-register',
  imports: [FormsModule, InputTextModule, ButtonModule, CommonModule, FloatLabelModule],
  standalone: true,

  templateUrl: './kh-register.component.html',
  styleUrl: './kh-register.component.scss'
})
export class KhRegisterComponent {
  today: string;

  // Input values
  firstname: string = '';
  lastname: string = '';
  dateOfBirth: string = '';
  email: string = '';
  password: string = '';
  passwordVerification: string = '';



  constructor() { 
    this.today = new Date().toISOString().slice(0, 10); // för datepicker
  }

  isValidDate(value: string): boolean {
    const date = new Date(value);
   return !isNaN(date.getTime()) && date <= new Date() && date >= new Date('1900-01-01');
  }

  onSubmit(): void {
      const {
        firstname,
        lastname,
        dateOfBirth,
        email,
        password,
        passwordVerification
        } = this;

      console.log(this);
      // skicka dendär post /login
  }
}
