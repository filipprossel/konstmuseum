import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KhEventShowcaseComponent } from './kh-event-showcase/kh-event-showcase.component';
import { AuthService } from '../auth.service';
import { FloatLabelModule } from "primeng/floatlabel"
import { FormsModule, NgForm } from '@angular/forms';
import { UploadPanelComponent } from "./upload-panel/upload-panel.component";

@Component({
  selector: 'app-kh-event',
  imports: [CommonModule, KhEventShowcaseComponent, FloatLabelModule, FormsModule, UploadPanelComponent],
  templateUrl: './kh-event.component.html',
  styleUrls: ['./kh-event.component.scss']
})
export class KhEventComponent implements OnInit {

  role: number | null = null;

  authService!: AuthService; 

  constructor(authService: AuthService) {
    this.authService = authService; 
  }

  ngOnInit(): void {
    const user = this.authService.getUser(); 
    if (user) {
      this.role = user.role_id;
    }
  }

  filter: 1 | 2 | 3 = 3;

  eventList = [
    { name: "Picasso", place: "Tornedalen Konsthall", done: false, img: "https://images.unsplash.com/photo-1609607847926-da4702f01fef?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Norrbotten", place: "Tornedalen Konsthall", done: false, img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Luleå", place: "Tornedalen Konsthall", done: false, img: "https://images.unsplash.com/photo-1743267217085-9985d1f12462?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Warhol", place: "Tornedalen Konsthall", done: true, img: "https://images.unsplash.com/photo-1584448098255-234156529929?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Lokala", place: "Tornedalen Konsthall", done: true, img: "https://images.unsplash.com/photo-1596661893368-66e7d2510fa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
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

  showPanel: boolean = false;

  panelShow() {
    this.showPanel = !this.showPanel;
  }

  exhibitionName: string = '';
}
