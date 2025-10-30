import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private languageService = inject(LanguageService);
  
  // Mobile menu state
  isMobileMenuOpen = false;

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  get isEnglish(): boolean {
    return this.languageService.isEnglish();
  }

  getCVUrl(): string {
    return this.languageService.isEnglish()
      ? 'assets/cv/CV-2026-EN-LT-BA-BYRON-GONZALEZ.pdf'
      : 'assets/cv/CV-2026-ES-LT-BA-BYRON-GONZALEZ.pdf';
  }
}
