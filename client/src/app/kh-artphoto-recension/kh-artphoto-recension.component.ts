import { Component } from '@angular/core';
import { KhArtphotoService } from './kh-artphoto-service/kh-artphoto.service';
import { AuthService } from '../auth.service';

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
  //stars: HTMLElement[] = [this.star1, this.star2, this.star3, this.star4, this.star5];
  constructor(khArtphotoService: KhArtphotoService, authService: AuthService){
    this.khArtphotoService = khArtphotoService;
    this.authService = authService; 
  }
  ngOnInit(){
    this.star1 = document.getElementById("s1");

    console.log(this.rating);
  }
  setRating(rating: number){
    if(this.rating === rating){
      this.rating = -1;
      
     // for(let star of this.stars){
      //  star.style.color="none"
     // }
    }
    else{
      this.rating = rating;
    }
  }
  sendReview(){
    this.khArtphotoService.createReview("1", "54", this.rating.toString(), "Reviewtext").subscribe((data) => {
      console.log(data);
    });
  }

}
