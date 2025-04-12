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
    { name: "Art Show", place: "Tornedalen Konsthall", done: false },
    { name: "Concert", place: "Tornedalen Konsthall", done: true },
    { name: "Workshop", place: "Tornedalen Konsthall", done: false },
    { name: "Fair", place: "Tornedalen Konsthall", done: false },
    { name: "Run", place: "Tornedalen Konsthall", done: true },
    { name: "Tech Talk", place: "Tornedalen Konsthall", done: false },
    { name: "Film", place: "Tornedalen Konsthall", done: false },
    { name: "Show", place: "Tornedalen Konsthall", done: true },
    { name: "Photo Walk", place: "Tornedalen Konsthall", done: false },
    { name: "Talk", place: "Tornedalen Konsthall", done: true },
    { name: "Food Fest", place: "Tornedalen Konsthall", done: false },
    { name: "Pitch", place: "Tornedalen Konsthall", done: false },
    { name: "Auction", place: "Tornedalen Konsthall", done: true },
    { name: "Yoga", place: "Tornedalen Konsthall", done: false },
    { name: "Tournament", place: "Tornedalen Konsthall", done: true },
    { name: "Tasting", place: "Tornedalen Konsthall", done: false },
    { name: "Meetup", place: "Tornedalen Konsthall", done: true },
    { name: "Dance", place: "Tornedalen Konsthall", done: false },
    { name: "Festival", place: "Tornedalen Konsthall", done: false },
    { name: "Expo", place: "Tornedalen Konsthall", done: true },
    { name: "Adventure", place: "Tornedalen Konsthall", done: false },
    { name: "Comedy", place: "Tornedalen Konsthall", done: false },
    { name: "Competition", place: "Tornedalen Konsthall", done: true },
    { name: "Craft", place: "Tornedalen Konsthall", done: false },
  ]  

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
