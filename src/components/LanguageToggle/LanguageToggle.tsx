import { useLanguage } from '../../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage, isTransitioning } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      disabled={isTransitioning}
      className={`relative flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group ${
        isTransitioning ? 'opacity-50 cursor-wait' : 'opacity-100 cursor-pointer'
      }`}
      aria-label="Toggle language"
    >
      {/* Globe Icon */}
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>

      {/* Language Indicator */}
      <div className="flex items-center gap-1">
        <span
          className={`text-sm font-semibold transition-all duration-300 ${
            language === 'en' ? 'text-[#d9ff6c]' : 'text-white/60'
          }`}
        >
          EN
        </span>
        <span className="text-white/40">|</span>
        <span
          className={`text-sm font-semibold transition-all duration-300 ${
            language === 'es' ? 'text-[#d9ff6c]' : 'text-white/60'
          }`}
        >
          ES
        </span>
      </div>

      {/* Animated Underline */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-[#d9ff6c] transition-all duration-300 group-hover:w-full w-0"></div>
    </button>
  );
};
