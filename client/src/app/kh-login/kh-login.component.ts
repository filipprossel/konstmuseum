import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kh-login',
  imports: [
    FloatLabelModule,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './kh-login.component.html',
  styleUrl: './kh-login.component.scss'
})
export class KhLoginComponent {


}
