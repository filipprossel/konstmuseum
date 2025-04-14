import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhEventShowcaseComponent } from './kh-event-showcase/kh-event-showcase.component';

@Component({
  selector: 'app-kh-event',
  imports: [CommonModule, KhEventShowcaseComponent],
  templateUrl: './kh-event.component.html',
  styleUrls: ['./kh-event.component.scss']
})
export class KhEventComponent {

  filter: 1 | 2 | 3 = 3;

  eventList = [
    { name: "Impressionism", place: "Tornedalen Konsthall", done: false },
    { name: "Renaissance Art", place: "Tornedalen Konsthall", done: true },
    { name: "Modern Art", place: "Tornedalen Konsthall", done: false },
    { name: "Picasso", place: "Tornedalen Konsthall", done: false },
    { name: "Classical Sculpture", place: "Tornedalen Konsthall", done: true },
    { name: "Contemporary Art", place: "Tornedalen Konsthall", done: false },
    { name: "Abstract Art", place: "Tornedalen Konsthall", done: false },
    { name: "Photography", place: "Tornedalen Konsthall", done: true },
    { name: "Baroque", place: "Tornedalen Konsthall", done: false },
    { name: "Dali", place: "Tornedalen Konsthall", done: true },
    { name: "Ancient Art", place: "Tornedalen Konsthall", done: false },
    { name: "Digital Art", place: "Tornedalen Konsthall", done: false },
    { name: "Dutch Masters", place: "Tornedalen Konsthall", done: true },
    { name: "Art Nouveau", place: "Tornedalen Konsthall", done: false },
    { name: "Antique Sculptures", place: "Tornedalen Konsthall", done: true },
    { name: "Modern Photography", place: "Tornedalen Konsthall", done: false },
    { name: "Cubism", place: "Tornedalen Konsthall", done: true },
    { name: "Expressionism", place: "Tornedalen Konsthall", done: false },
    { name: "Surrealism", place: "Tornedalen Konsthall", done: false },
  ];
  

  filteredEvent: { name: string; place: string; done: boolean }[] = this.eventList;

  currentPage = 1;
  itemsPerPage = 12;
  totalPages = Math.ceil(this.filteredEvent.length / this.itemsPerPage);
  paginatedEvents = this.filteredEvent.slice(0, this.itemsPerPage);

  applyFilter(filter: 1 | 2 | 3) {
    this.filter = filter;

    if (filter === 1) {
      this.filteredEvent = this.eventList.filter(event => event.done);
    } else if (filter === 2) {
      this.filteredEvent = this.eventList.filter(event => !event.done);
    } else {
      this.filteredEvent = this.eventList;
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
}
