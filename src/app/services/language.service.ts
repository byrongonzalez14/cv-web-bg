import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('en');

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('language') as Language;
    
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      this.currentLanguage.set(savedLanguage);
    } else {
      // Default to English regardless of browser language
      this.currentLanguage.set('en');
    }
  }

  toggleLanguage(): void {
    const newLanguage = this.currentLanguage() === 'en' ? 'es' : 'en';
    this.currentLanguage.set(newLanguage);
    localStorage.setItem('language', newLanguage);
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    localStorage.setItem('language', language);
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage();
  }

  isEnglish(): boolean {
    return this.currentLanguage() === 'en';
  }

  isSpanish(): boolean {
    return this.currentLanguage() === 'es';
  }
}
