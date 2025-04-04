import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-kh-login',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './kh-login.component.html',
  styleUrl: './kh-login.component.scss'
})
export class KhLoginComponent {
  email: string = '';
  password: string = '';

  login() {
    // Här ska vi lägga in logiken för att logga in
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
