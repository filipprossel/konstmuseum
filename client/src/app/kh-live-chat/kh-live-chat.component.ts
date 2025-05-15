import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExhibitionService } from '../kh-event/service/exhibtion.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-kh-live-chat',
  imports: [CommonModule, FormsModule],
  templateUrl: './kh-live-chat.component.html',
  styleUrl: './kh-live-chat.component.scss',
  standalone: true,
})
export class KhLiveChatComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService
  ) {}
  public text: string = "";

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); // Prevent newline
      // this.sendMessage();     // Call your send function
    }
  }

  exhibitionId!: string;

  messages: string[] = new Array();


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.exhibitionId = params.get('exhibitionId')!;
    });
  }
}
