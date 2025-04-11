import {Component, ViewEncapsulation} from '@angular/core';
import { Carousel } from 'primeng/carousel';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';


interface Post {
  icon: string;
  message: string;
  link: string;
}

@Component({
  selector: 'app-kh-posts',
  standalone: true,
  imports: [CommonModule, Carousel, ButtonModule, RouterModule],
  templateUrl: './kh-post.component.html',
  styleUrls: ['./kh-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class KhPostsComponent {
  posts: Post[] = [];

  ngOnInit(): void {
    this.posts = [
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/1' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/2' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/3' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' },
      { icon: 'pi pi-user', message: 'Utställningen var underbar och de ...', link: '/post/4' }

    ];
  }
}
