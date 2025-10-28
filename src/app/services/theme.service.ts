import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Always set dark mode
    document.documentElement.classList.add('dark');
  }

  getDarkMode(): boolean {
    // Always return true for dark mode
    return true;
  }
}
