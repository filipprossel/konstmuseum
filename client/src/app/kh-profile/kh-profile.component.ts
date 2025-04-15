import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { AuthService } from '../auth.service';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-kh-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule, PanelModule, DialogModule],
  templateUrl: './kh-profile.component.html',
  styleUrl: './kh-profile.component.scss',
  providers: [HttpClient]
})
export class KhProfileComponent {
  user: any;
  userName: any;
  authService!: AuthService
  visible: boolean= false;
  constructor(authService: AuthService) {
    this.authService = authService; 
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
  showDialog(){
    this.visible = true;
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
