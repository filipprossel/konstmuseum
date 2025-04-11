import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-kh-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './kh-profile.component.html',
  styleUrl: './kh-profile.component.scss',
  providers: [HttpClient]
})
export class KhProfileComponent {

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
      buttonA.style.borderBottom = "solid"
    }
    else if(nextDocument === "profil"){
      profileContent.style.display = "flex";
      omContent.style.display = "none";
      aktivitetContent.style.display = "none";
    }
    else{
      profileContent.style.display = "none";
      omContent.style.display = "flex";
      aktivitetContent.style.display = "none";
    }
  }

  aktivitetButton(): void{
    this.disable("aktivitet")
  }
  omButton(): void{
    this.disable("om")
  }
  porfileButton(): void{
    this.disable("profil")
  }

  
}
