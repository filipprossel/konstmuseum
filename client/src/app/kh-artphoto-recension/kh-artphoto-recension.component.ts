import { Component, OnInit } from '@angular/core';
import { KhArtphotoService } from './kh-artphoto-service/kh-artphoto.service';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtWork } from './kh-artphoto-service/artwork.model';

@Component({
  selector: 'app-kh-artphoto-recension',
  imports: [],
  templateUrl: './kh-artphoto-recension.component.html',
  styleUrl: './kh-artphoto-recension.component.scss'
})
export class KhArtphotoRecensionComponent {
  rating: number = -1;
  khArtphotoService!: KhArtphotoService;
  authService!: AuthService;
  user: any; 
  star1: any;
  star2: any = document.getElementById("s2");
  star3: any = document.getElementById("s3");
  star4: any = document.getElementById("s4");
  star5: any = document.getElementById("s5");
  stars: HTMLElement[] = [];
  artwork!: ArtWork;

  //
  constructor(khArtphotoService: KhArtphotoService, authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.khArtphotoService = khArtphotoService;
    this.authService = authService; 
    
  }
  ngOnInit(){
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
        this.router.navigate(['/']);
      }
    });    


    console.log(this.rating);
  }
  setRating(rating: number){
    if(this.rating === rating){
      this.rating = -1;
      
     for(let star of this.stars){
      star.style.color="black";
    }
    }
    else{
      if(this.rating > rating){
        for(let star of this.stars){
          star.style.color="black";
        }
      }
      for(let i = 0; i < rating; i++){
          this.stars[i].style.color = "blue";
      }
      this.rating = rating;
    }
  }
  sendReview(){
    this.khArtphotoService.createReview("1", "54", this.rating.toString(), "Reviewtext").subscribe((data) => {
      console.log(data);
    });
  }

}
