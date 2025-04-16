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

  eventList: {
    name: string;
    place: string;
    done: boolean;
    img: string;
  }[] = [];

  filteredEvent: {
    name: string;
    place: string;
    done: boolean;
    img: string;
  }[] = [];

  paginatedEvents: {
    name: string;
    place: string;
    done: boolean;
    img: string;
  }[] = [];

  currentPage = 1;
  itemsPerPage = 12;
  totalPages = 1;
  showPanel: boolean = false;
  exhibitionName: string = '';

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
        this.eventList = data.map(exhibition => ({
          name: exhibition.exhibition_name,
          place: 'Tornedalen Konsthall',
          done: Math.random() < 0.5, // random for now
          img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0fGVufDB8fDB8fHww' + exhibition.exhibition_id
        }));
        this.applyFilter(this.filter);
      },
      error => {
        console.error('Error loading exhibitions:', error);
      }
    );
  }

  applyFilter(filter: 1 | 2 | 3) {
    this.filter = filter;

    if (filter === 1) {
      this.filteredEvent = this.eventList.filter(event => event.done);
    } else if (filter === 2) {
      this.filteredEvent = this.eventList.filter(event => !event.done);
    } else {
      this.filteredEvent = [...this.eventList];
    }

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
