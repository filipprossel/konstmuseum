import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { AuthService } from '../auth.service';
import { DialogModule } from 'primeng/dialog';
import { KhProfileServiceService } from './kh-profile-service/kh-profile-service.service';
@Component({
  selector: 'app-kh-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule, PanelModule, DialogModule],
  templateUrl: './kh-profile.component.html',
  styleUrl: './kh-profile.component.scss',
  providers: [HttpClient]
})
export class KhProfileComponent {
  eventsVisited: any;
  user: any;
  userName: any;
  authService!: AuthService
  profileService!: KhProfileServiceService
  visible1: boolean= false;
  visible2: boolean= false;
  visible3: boolean= false;
  visible4: boolean= false;
  buttonT = document.getElementById("buttonA")!;
  constructor(authService: AuthService, profileService: KhProfileServiceService) {
    this.authService = authService; 
    this.profileService = profileService;
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.eventsVisited = this.profileService.getEventsVisited;
  }
  showDialog(number: any){
    if(number === 1){
      this.visible1 = true;
    }
    if(number === 2){
      this.visible2 = true;
    }
    if(number === 3){
      this.visible3 = true;
    }
    if(number === 4){
      this.visible4 = true;
    }
    
  }
  sendEdit(edit: String){
    let lastname = document.getElementById("last_name") as HTMLInputElement;
    let firstname = document.getElementById("first_name") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let userDescription = document.getElementById("user_description") as HTMLInputElement;
    let oldEmail= this.user.email;
    let password = this.user.password;
    console.log(this.user);
    if(edit === 'first_name'){
      console.log('log')
      this.profileService.editUser(firstname.value, '', oldEmail, password, '').subscribe((data) => {
        this.user = data;
        localStorage.setItem("user", JSON.stringify(this.user));
      });
    }
    if(edit === 'last_name'){
      this.profileService.editUser('', lastname.value, oldEmail, password, '').subscribe((data) => {
        this.user = data;
        localStorage.setItem("user", JSON.stringify(this.user));
      });
    }
    if(edit === 'email_name'){
      this.profileService.editUser('', '', email.value, password, '').subscribe((data) => {
        this.user = data;
        localStorage.setItem("user", JSON.stringify(this.user));
      });
    }
    if(edit === 'user_description'){
      console.log('Terqwewqe')
      console.log('Test:', oldEmail, password, userDescription.value);
      this.profileService.editUser('', '', oldEmail, password, userDescription.value).subscribe((data) => {
        this.user = data;
        localStorage.setItem("user", JSON.stringify(this.user));
      });
    }
  }

  disable(nextDocument: any): void{ 
      let aktivitetContent = document.getElementById("aktivitetsContainer")!;
      let profileContent: HTMLElement = document.getElementById("profileActivityContainer")!;
      let omContent = document.getElementById("omContent")!;

      let buttonA = document.getElementById("buttonA")!;
      let buttonP = document.getElementById("buttonP")!;
      let buttonO = document.getElementById("buttonO")!;


      if(nextDocument === "aktivitet"){
      profileContent.style.display = "none";
      omContent.style.display = "none";
      aktivitetContent.style.display = "flex";
      buttonP.style.backgroundColor = "transparent";
      buttonA.style.backgroundColor = "#cccccc40";
      buttonO.style.backgroundColor = "transparent"
      buttonO.style.borderColor = "transparent";
      buttonA.style.borderColor = "#cccccc75";
      buttonP.style.borderColor = "transparent";
    }
    else if(nextDocument === "profil"){
      profileContent.style.display = "flex";
      omContent.style.display = "none";
      aktivitetContent.style.display = "none";
      buttonP.style.backgroundColor = "#cccccc40";
      buttonA.style.backgroundColor = "transparent";
      buttonO.style.backgroundColor = "transparent"
      buttonO.style.borderColor = "transparent";
      buttonA.style.borderColor = "transparent";
      buttonP.style.borderColor = "#cccccc75";
    }
    else{
      profileContent.style.display = "none";
      omContent.style.display = "flex";
      aktivitetContent.style.display = "none";
      buttonO.style.backgroundColor = "#cccccc40";
      buttonA.style.backgroundColor = "transparent";
      buttonP.style.backgroundColor = "transparent";
      buttonO.style.borderColor = "#cccccc75";
      buttonA.style.borderColor = "transparent";
      buttonP.style.borderColor = "transparent";
    }
  }

  aktivitetButton(): void{
    this.disable("aktivitet")
  }
  omButton(): void{
    this.disable("om")
  }
  profileButton(): void{
    this.disable("profil")
  }

  
}
