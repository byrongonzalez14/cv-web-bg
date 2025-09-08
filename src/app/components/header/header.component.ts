import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  get isEnglish(): boolean {
    return this.languageService.isEnglish();
  }

  get isDarkMode(): boolean {
    return this.themeService.getDarkMode();
  }
}
