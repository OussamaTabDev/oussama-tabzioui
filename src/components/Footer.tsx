import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-card-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Oussama Tabzioui. {t('footer.text')}
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-accent-primary hover:text-accent-secondary transition-colors text-sm font-medium"
          >
            ↑ {t('footer.back')}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
