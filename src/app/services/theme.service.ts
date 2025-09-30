import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = signal<boolean>(false);

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      // Default to dark mode regardless of system preference
      this.isDarkMode.set(true);
    }
    
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
  }

  private applyTheme(): void {
    const htmlElement = document.documentElement;
    if (this.isDarkMode()) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  getDarkMode(): boolean {
    return this.isDarkMode();
  }
}
