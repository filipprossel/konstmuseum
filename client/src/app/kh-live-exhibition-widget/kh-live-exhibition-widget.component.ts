import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kh-live-exhibition-widget',
  imports: [CommonModule],
  templateUrl: './kh-live-exhibition-widget.component.html',
  styleUrl: './kh-live-exhibition-widget.component.scss'
})
export class KhLiveExhibitionWidgetComponent implements OnInit{
  isWidgetClosed: boolean = true; // ska va false, men så den inte sysn hela tiden


  ngOnInit(): void {
  
  }

  CloseWidget() { this.isWidgetClosed = true; }
}
