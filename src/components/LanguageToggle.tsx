import { useState } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';

const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-10 min-w-10 px-2.5 rounded-lg border border-card-border bg-card-bg text-text-secondary text-sm font-semibold uppercase hover:text-accent-primary hover:border-accent-primary transition-colors"
        title="Change language"
      >
        {language}
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full right-0 mt-2 w-40 card z-50 overflow-hidden">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors hover:bg-card-hover ${
                  language === lang.code
                    ? 'text-accent-primary font-semibold'
                    : 'text-text-secondary'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageToggle;
