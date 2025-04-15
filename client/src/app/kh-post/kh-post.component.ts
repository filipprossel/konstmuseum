import { Component, ViewEncapsulation } from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { Dialog } from 'primeng/dialog';

interface Post {
  icon: string;
  message: string;
  link?: string;
  date?: string;
  author?: string;
}

@Component({
  selector: 'app-kh-posts',
  standalone: true,
  imports: [CommonModule, Carousel, ButtonModule, RouterModule, Dialog],
  templateUrl: './kh-post.component.html',
  styleUrls: ['./kh-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KhPostsComponent {
  posts: Post[] = [];
  visible: boolean = false;
  selectedPost: Post | null = null;
  carouselHeight = '480px';

  ngOnInit(): void {
    // Responsiv höjd för carousel
    if (window.innerWidth < 600) {
      this.carouselHeight = '80vh'; // eller 60vh – responsivt men inte auto

    }

    // Inläggsdata
    this.posts = [
      {
        icon: 'pi pi-user',
        message: 'Utställningen var underbar och de lokala konstnärerna briljerade med sina verk.',
        date: '2025-04-15',
        author: 'Anna Svensson'
      },
      {
        icon: 'pi pi-user',
        message: 'Fantastisk atmosfär och otroligt välorganiserat event!',
        date: '2025-04-14',
        author: 'Erik Johansson'
      },
      {
        icon: 'pi pi-user',
        message: 'Jag blev väldigt inspirerad av färgkombinationerna i landskapsmålningarna.',
        date: '2025-04-13',
        author: 'Karin Nilsson'
      },
      {
        icon: 'pi pi-user',
        message: 'Bra initiativ att involvera skolklasser i skapandet!',
        date: '2025-04-12',
        author: 'Jonas Bergström'
      },
      {
        icon: 'pi pi-user',
        message: 'Jag fick många nya idéer till mitt eget skapande tack vare detta evenemang.',
        date: '2025-04-11',
        author: 'Lisa Berg'
      },
      {
        icon: 'pi pi-user',
        message: 'Trevligt med fika och musik i samband med konstvisningen.',
        date: '2025-04-10',
        author: 'Oskar Lind'
      },
      {
        icon: 'pi pi-user',
        message: 'Mycket barnvänligt och kul att se att unga också var delaktiga.',
        date: '2025-04-09',
        author: 'Eva Karlsson'
      },
      {
        icon: 'pi pi-user',
        message: 'En av de bästa konstupplevelserna jag varit med om i Norrbotten!',
        date: '2025-04-08',
        author: 'Fredrik Dahl'
      },
      {
        icon: 'pi pi-user',
        message: 'Otroligt att så mycket talang finns samlat lokalt.',
        date: '2025-04-07',
        author: 'Maria Holm'
      },
      {
        icon: 'pi pi-user',
        message: 'Skulle gärna se en liknande utställning varje år.',
        date: '2025-04-06',
        author: 'Niklas Björk'
      },
      {
        icon: 'pi pi-user',
        message: 'Kul att få träffa konstnärerna och höra deras berättelser bakom verken.',
        date: '2025-04-05',
        author: 'Sofie Åström'
      }
    ];
  }

  openPost(post: Post): void {
    this.selectedPost = post;
    this.visible = true;
  }
}
