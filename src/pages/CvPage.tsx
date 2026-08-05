import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CvPage = () => {
  const { t } = useLanguage();
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const downloadPdf = () => {
    iframeRef.current?.contentWindow?.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <Navigation />

      <section className="pt-28 pb-16 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link to="/">
              <button className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-accent-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                {t('projects.back')}
              </button>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex rounded-lg border border-card-border overflow-hidden">
                {(['en', 'fr'] as const).map(l => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-2 text-sm font-semibold uppercase transition-colors ${
                      lang === l
                        ? 'bg-accent-primary text-white'
                        : 'text-text-secondary hover:text-accent-primary'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button onClick={downloadPdf} className="btn-primary">
                <Download size={18} />
                {t('cv.download')}
              </button>
            </div>
          </div>

          <div className="card overflow-hidden">
            <iframe
              ref={iframeRef}
              src={lang === 'en' ? './cv/index.html' : './cv-fr/index.html'}
              className="w-full bg-white"
              style={{ height: '82vh' }}
              title="Resume"
            />
          </div>

          <p className="mt-4 text-center text-sm text-text-muted">{t('cv.hint')}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CvPage;
