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

  getSkillLevelText(level: number): string {
    const isEnglish = this.languageService.isEnglish();
    switch (level) {
      case 5: return isEnglish ? 'Expert' : 'Experto';
      case 4: return isEnglish ? 'Advanced' : 'Avanzado';
      case 3: return isEnglish ? 'Intermediate' : 'Intermedio';
      case 2: return isEnglish ? 'Basic' : 'Básico';
      case 1: return isEnglish ? 'Beginner' : 'Principiante';
      default: return isEnglish ? 'Unknown' : 'Desconocido';
    }
  }

  getLanguageProgress(level: string): number {
    if (level.toLowerCase().includes('native') || level.toLowerCase().includes('nativo')) return 100;
    if (level.toLowerCase().includes('c2')) return 95;
    if (level.toLowerCase().includes('c1') || level.toLowerCase().includes('avanzado') || level.toLowerCase().includes('advance')) return 85;
    if (level.toLowerCase().includes('b2')) return 75;
    if (level.toLowerCase().includes('b1')) return 65;
    if (level.toLowerCase().includes('a2')) return 45;
    if (level.toLowerCase().includes('a1')) return 25;
    return 50; // Default for unknown levels
  }

  getCleanPhoneNumber(phone: string): string {
    return phone.replace(/[^0-9]/g, '');
  }

  getWhatsAppLink(phone: string): string {
    const cleanPhone = this.getCleanPhoneNumber(phone);
    const isEnglish = this.languageService.isEnglish();
    const message = isEnglish 
      ? "Hi Byron, I'd like to contact you."
      : "Hola Byron, me gustaría contactarte.";
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  }

  getEmailAriaLabel(): string {
    return this.languageService.isEnglish() 
      ? 'Send email to Byron'
      : 'Enviar correo a Byron';
  }

  getLocationAriaLabel(location: string): string {
    return `Location: ${location}`;
  }

  getCVUrl(): string {
    return this.languageService.isEnglish()
      ? 'assets/cv/CV-2026-EN-BYRON-GONZALEZ.pdf'
      : 'assets/cv/CV-2026-ES-BYRON-GONZALEZ.pdf';
  }

  formatDescription(description: string): string {
    // Convert bullet points (•) to HTML list items and line breaks to <br>
    return description
      .replace(/\n/g, '<br>')
      .replace(/• /g, '<span class="inline-block w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>');
  }
}
