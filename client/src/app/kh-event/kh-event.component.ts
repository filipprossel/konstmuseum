import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhEventShowcaseComponent } from './kh-event-showcase/kh-event-showcase.component';
import { AuthService } from '../auth.service';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { UploadPanelComponent } from './upload-panel/upload-panel.component';
import { ExhibitionService } from './service/exhibtion.service';
import { Exhibition } from './service/exhibition.model';

@Component({
  selector: 'app-kh-event',
  imports: [
    CommonModule,
    KhEventShowcaseComponent,
    FloatLabelModule,
    FormsModule,
    UploadPanelComponent
  ],
  templateUrl: './kh-event.component.html',
  styleUrls: ['./kh-event.component.scss']
})
export class KhEventComponent implements OnInit {

  role: number | null = null;
  filter: 1 | 2 | 3 = 3;

  eventList: (Exhibition)[] = [];
  filteredEvent: (Exhibition)[] = [];
  paginatedEvents: (Exhibition)[] = [];  

  currentPage = 1;
  itemsPerPage = 12;
  totalPages = 1;
  showPanel: boolean = false;

  constructor(
    private authService: AuthService,
    private exhibitionService: ExhibitionService
  ) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user) {
      this.role = user.role_id;
    }

    this.loadEventsFromBackend();
  }

  loadEventsFromBackend(): void {
    this.exhibitionService.getExhibitions().subscribe(
      (data: Exhibition[]) => {
        this.eventList = data;
        this.applyFilter(this.filter);
      },
      error => {
        console.error('Error loading exhibitions:', error);
      }
    );
  }
  
  applyFilter(filter: 1 | 2 | 3) {
    this.filter = filter;
    const today = new Date();
  
    this.filteredEvent = this.eventList.filter(event => {
      if (!event.exhibition_date) return false; // skip if no date
  
      if (filter === 1) {
        // Show past events
        return new Date(event.exhibition_date) < today;
      } else if (filter === 2) {
        // Show future/upcoming events
        return new Date(event.exhibition_date) >= today;
      } else {
        // Show all events
        return true;
      }
    });
  
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredEvent.length / this.itemsPerPage);
    this.updatePaginatedEvents();
  }
  

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedEvents();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedEvents();
    }
  }

  updatePaginatedEvents() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedEvents = this.filteredEvent.slice(startIndex, endIndex);
  }

  panelShow() {
    this.showPanel = !this.showPanel;
  }
}
