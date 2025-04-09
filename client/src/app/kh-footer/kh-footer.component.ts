import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-kh-footer',
  imports: [RouterModule],
  templateUrl: './kh-footer.component.html',
  styleUrl: './kh-footer.component.scss'
})
export class KhFooterComponent {
  homeLink = "/homepage";
}
