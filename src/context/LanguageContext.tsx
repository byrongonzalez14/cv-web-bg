import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CVData } from '../models/cv-data.interface';
import { cvDataEn } from '../data/cv-data.en';
import { cvDataEs } from '../data/cv-data.es';

type LanguageType = 'en' | 'es';

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  data: CVData;
  toggleLanguage: () => void;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('en');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const data = language === 'en' ? cvDataEn : cvDataEs;

  const toggleLanguage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage(prev => prev === 'en' ? 'es' : 'en');
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 200);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, data, toggleLanguage, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
