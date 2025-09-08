import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { ThemeService } from '../../services/theme.service';
import { CVData } from '../../models/cv-data.interface';
import { cvDataEn } from '../../data/cv-data.en';
import { cvDataEs } from '../../data/cv-data.es';

@Component({
  selector: 'app-cv-display',
  imports: [CommonModule],
  templateUrl: './cv-display.component.html',
  styleUrl: './cv-display.component.css'
})
export class CvDisplayComponent {
  languageService = inject(LanguageService);
  private themeService = inject(ThemeService);

  cvData = computed<CVData>(() => {
    return this.languageService.isEnglish() ? cvDataEn : cvDataEs;
  });

  getSkillLevel(level: number): string {
    return '★'.repeat(level) + '☆'.repeat(5 - level);
  }

  getSkillLevelClass(level: number): string {
    if (level >= 4) return 'text-green-500';
    if (level >= 3) return 'text-yellow-500';
    return 'text-orange-500';
  }
}
