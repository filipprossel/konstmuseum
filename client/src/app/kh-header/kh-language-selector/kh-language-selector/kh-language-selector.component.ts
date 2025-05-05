import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { languages } from './language.config';

@Component({
  selector: 'app-kh-language-selector',
  imports: [RouterModule, CommonModule],
  templateUrl: './kh-language-selector.component.html',
  styleUrl: './kh-language-selector.component.scss'
})
export class KhLanguageSelectorComponent implements OnInit{
  language: String | null = "swe";

  languages = languages;


  ngOnInit(): void {
    if(!localStorage.getItem("language")) {
      localStorage.setItem("language", "swe");
    }
    this.language = localStorage.getItem("language") ?? "swe";
  }

  constructor() {
  }

  changeLang(newLang: string): void {
    localStorage.setItem("language", newLang);
    window.dispatchEvent(new CustomEvent('localLanguageChange', {
      detail: { newLang }
    }));
  }
}
