import { Component } from '@angular/core';
import {TranslocoService} from '@jsverse/transloco';
import {NgForOf} from '@angular/common';


@Component({
  selector: 'app-language-switcher',
  imports: [
    NgForOf
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  currentLang: string;
  languages: string[];

  constructor(private translocoService: TranslocoService) {
    this.currentLang = this.translocoService.getDefaultLang();

    const availableLangs = this.translocoService.getAvailableLangs();
    if (Array.isArray(availableLangs) && typeof availableLangs[0] === 'string') {
      this.languages = availableLangs as string[];
    } else {
      this.languages = (availableLangs as { id: string; label: string }[]).map(lang => lang.id);
    }
  }

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const langCode = target.value;

    this.translocoService.setActiveLang(langCode);
    this.currentLang = langCode;
  }

}
