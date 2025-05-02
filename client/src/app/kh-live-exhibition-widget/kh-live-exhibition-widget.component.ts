import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExhibitionService } from '../kh-event/service/exhibtion.service';
import { Exhibition } from '../kh-event/service/exhibition.model';
import { formatDate } from '../utils/Timeformater';

@Component({
  selector: 'app-kh-live-exhibition-widget',
  imports: [CommonModule],
  templateUrl: './kh-live-exhibition-widget.component.html',
  standalone: true,
  styleUrl: './kh-live-exhibition-widget.component.scss'
})
export class KhLiveExhibitionWidgetComponent implements OnInit{
  isWidgetOpened: boolean = false; // ska va false, men så den inte sysn hela
  liveExhibition!: Exhibition;
  dateStr!: String;

  constructor(
    private exhibitionService: ExhibitionService
  ){}

  ngOnInit(): void {
    this.loadEventsFromBackend();
  }

  loadEventsFromBackend(): void {
    this.exhibitionService.getExhibitions().subscribe(
      (data: Exhibition[]) => {
        const now = new Date();

        const normalizeDate = (str: string) => {
          return str.replace(/T(\d{2}:\d{2}):(\d{1})(?!\d)/, 'T$1:0$2');
        };

        data.forEach(event => {
          const start = new Date(normalizeDate(event.exhibition_date_start.toString()));
          const end = new Date(normalizeDate(event.exhibition_date_end.toString()));
        
          if (start <= now && now <= end) {
            this.liveExhibition = event;
            this.isWidgetOpened = true;
            console.log(this.liveExhibition)
            this.dateStr = formatDate(event.exhibition_date_start.toString()) + " till "+
             formatDate(event.exhibition_date_end.toString());
          }
        });
      },
      error => {
        console.error('Error loading exhibitions:', error);
      }
    );
  }

  CloseWidget() { this.isWidgetOpened = false; } 
}
