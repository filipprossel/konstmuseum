import { Component, OnInit } from '@angular/core';
import { KhArtphotoService } from './kh-artphoto-service/kh-artphoto.service';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtWork } from './kh-artphoto-service/artwork.model';
import { CommonModule } from '@angular/common';
import { get } from 'http';

@Component({
  selector: 'app-kh-artphoto-recension',
  imports: [CommonModule],
  templateUrl: './kh-artphoto-recension.component.html',
  styleUrl: './kh-artphoto-recension.component.scss'
})
export class KhArtphotoRecensionComponent {
  rating: number = 0;
  khArtphotoService!: KhArtphotoService;
  authService!: AuthService;
  user: any;
  star1: any;
  star2: any = document.getElementById("s2");
  star3: any = document.getElementById("s3");
  star4: any = document.getElementById("s4");
  star5: any = document.getElementById("s5");
  reviewBox: any;
  stars: HTMLElement[] = [];
  artwork!: ArtWork;
  debounce: boolean = false;


  constructor(khArtphotoService: KhArtphotoService, authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.khArtphotoService = khArtphotoService;
    this.authService = authService; 
    
  }
  ngOnInit(){
    this.user = this.authService.getUser();
    console.log(this.user.id);
    this.star1 = document.getElementById("s1");
    this.star2 = document.getElementById("s2");
    this.star3 = document.getElementById("s3");
    this.star4 = document.getElementById("s4");
    this.star5 = document.getElementById("s5");
    this.stars.push(this.star5);
    this.stars.push(this.star4);
    this.stars.push(this.star3);
    this.stars.push(this.star2);
    this.stars.push(this.star1);
    this.reviewBox = document.getElementById("review")
   
    
    
    const artId = Number(this.route.snapshot.paramMap.get('artId'));
    const exhibitionId = Number(this.route.snapshot.paramMap.get('exhibitionId'));
    console.log(artId);
    this.khArtphotoService.getArtworkById(artId).subscribe((data: ArtWork) => {
      this.artwork = data;
      console.log(this.artwork);
      if (!this.artwork) {
        this.router.navigate(['/']);
      }
      if ( this.artwork.exhibition_id !== exhibitionId) {
        console.log(this.artwork.exhibition_id);
        console.log(exhibitionId);
        this.router.navigate(['/exhibition/' + this.artwork.exhibition_id]);
      }
    });    
  }

  setRating(value: number): void {
    if (this.rating === value) {
      this.rating = 0;
    } else {
      this.rating = value;
    }
  }

  sendReview(){
    if (this.debounce) {
      return;
    }
    this.debounce = true;
    this.khArtphotoService.createReview(this.user.id, this.route.snapshot.paramMap.get('artId')!.toString(), this.rating.toString(), this.reviewBox.value).subscribe((data) => {
     console.log(data);
    });
    
    setTimeout(() => {
      this.debounce = false;
      this.router.navigate(['/exhibition', this.artwork.exhibition_id]);
    }, 2000);
  }
  
  clearReview() {}
}
