import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Exhibition } from '../service/exhibition.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kh-event-showcase',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './kh-event-showcase.component.html',
  styleUrls: ['./kh-event-showcase.component.scss']
})
export class KhEventShowcaseComponent {

  cardClick: boolean = false;

  @Input() exhibition!: Exhibition;
}
