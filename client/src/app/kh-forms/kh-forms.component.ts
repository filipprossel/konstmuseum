import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';



@Component({
  selector: 'app-kh-forms',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './kh-forms.component.html',
  styleUrls: ['./kh-forms.component.scss']
})
export class KhFormsComponent {
  constructor(private router: Router) {}

  goToPosts() {
    this.router.navigate(['/posts']);
  }
}
