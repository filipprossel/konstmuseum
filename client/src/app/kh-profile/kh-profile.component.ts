import { Component} from '@angular/core';
import { UserServiceService } from './kh-userService/user-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-kh-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kh-profile.component.html',
  styleUrl: './kh-profile.component.scss',
  providers: [HttpClient]
})
export class KhProfileComponent {

  user: any;
  currentUser: any;

  constructor(private userService: UserServiceService){}
  ngOnInit(): void {
    this.userService.getData().subscribe((data) => {this.user = data;})
  }
  /*
  findUser(): void {
    this.currentUser = this.user[1]
    for (let x in this.user){
      if(this.currentUser === this.user[1].first_name){
        console.log(this.user[1].first_name)
      }
    }*/

}
