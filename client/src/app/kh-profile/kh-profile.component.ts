import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { AuthService } from '../auth.service';
import { DialogModule } from 'primeng/dialog';
import { KhProfileServiceService } from './kh-profile-service/kh-profile-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kh-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule, PanelModule, DialogModule],
  templateUrl: './kh-profile.component.html',
  styleUrl: './kh-profile.component.scss',
  providers: [HttpClient]
})
export class KhProfileComponent {
  eventsVisited: any = 0;
  user: any;
  userName: any;
  authService!: AuthService;
  router!: Router;
  profileService!: KhProfileServiceService;
  visible1: boolean= false;
  visible2: boolean= false;
  visible3: boolean= false;
  visible4: boolean= false;
  buttonT = document.getElementById("buttonA")!;
  constructor(authService: AuthService, profileService: KhProfileServiceService, router: Router) {
    this.authService = authService; 
    this.profileService = profileService;
    this.router = router;
  }
  //När sidan initiliseras, hämtas användaren via authService samt så hämtas alla events och sätts i en........ 
  ngOnInit(): void {
    
    this.user = this.authService.getUser();
    this.profileService.getEventsVisited(this.user.id).subscribe((data) => {
      this.eventsVisited = data;
      console.log(data);
    })
   
  }
  //Funktion för att navigera till utställlningen som användaren har varit på.
  navigateToExhbition(exhibition_id: number){
    this.router.navigate(['/exhibition', exhibition_id]);
  }

  //Sätter visibleX till true, för att en dialog för att redigera användarinformation ska synas på skrämen.
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

  //Beroende på vad variabeln edit är, ändras uppgiften genom en POST till databasen via profileService, användaren returneras sedan tillbaka till frontend-delen för att uppdatera användaren i localstorage.
  sendEdit(edit: String){
    let lastname = document.getElementById("last_name") as HTMLInputElement;
    let firstname = document.getElementById("first_name") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let userDescription = document.getElementById("user_description") as HTMLInputElement;
    let oldEmail= this.user.email;
    let password = this.user.password;
    console.log(this.user);
    if(edit === 'first_name'){
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
      console.log('Test:', oldEmail, password, userDescription.value);
      this.profileService.editUser('', '', oldEmail, password, userDescription.value).subscribe((data) => {
        this.user = data;
        localStorage.setItem("user", JSON.stringify(this.user));
      });
    }
  }
//För att ändra utseendet på knapparna i den lokala menyn beroende på vilken knapp som just nu är tryckt. 
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
