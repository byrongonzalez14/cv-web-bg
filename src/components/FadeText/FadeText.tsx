import { ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface FadeTextProps {
  children: ReactNode;
  className?: string;
}

export const FadeText = ({ children, className = '' }: FadeTextProps) => {
  const { isTransitioning } = useLanguage();

  return (
    <div
      className={`transition-all duration-200 ease-in-out ${
        isTransitioning ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};
