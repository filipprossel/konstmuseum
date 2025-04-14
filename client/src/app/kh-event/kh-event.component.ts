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
    { name: "Fotografier", place: "Tornedalen Konsthall", done: false, img: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Abstract", place: "Tornedalen Konsthall", done: false, img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Kubism", place: "Tornedalen Konsthall", done: false, img: "https://images.unsplash.com/photo-1743267217085-9985d1f12462?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Art Deco", place: "Tornedalen Konsthall", done: true, img: "https://images.unsplash.com/photo-1584448098255-234156529929?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Realism", place: "Tornedalen Konsthall", done: true, img: "https://images.unsplash.com/photo-1596661893368-66e7d2510fa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ]
  
  

  filteredEvent: { name: string; place: string; done: boolean,img: string }[] = this.eventList;

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
