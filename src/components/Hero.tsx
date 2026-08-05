import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Download, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import avatarImage from '../assets/avatar.png';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const { t } = useLanguage();

  const fullText = t('hero.description');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.035]" />
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[24rem] h-[24rem] bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left: intro */}
          <div className="animate-slide-up">
            <span className="tag inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              {t('hero.available')}
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1]">
              {t('hero.greeting')}{' '}
              <span className="text-gradient">{t('hero.name')}</span>
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl font-medium text-text-secondary">
              {t('hero.subtitle')}
            </h2>

            <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-xl min-h-[3.5rem]">
              <span className={isTyping ? 'typing-text' : ''}>{typedText}</span>
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={scrollToProjects} className="btn-primary">
                {t('hero.projects')} <ArrowRight size={18} />
              </button>
              <Link to="/cv" className="btn-outline">
                <Download size={18} /> {t('hero.cv')}
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/OussamaTabDev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !p-2.5"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/OussamaTabDev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !p-2.5"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="ml-2 text-sm text-text-muted hidden sm:inline">
                {t('hero.scroll')} ↓
              </span>
            </div>
          </div>

          {/* Right: photo */}
          <div className="relative animate-fade-in max-w-md mx-auto w-full lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden border border-card-border bg-card-bg shadow-[var(--shadow-hover)]">
              <img
                src={avatarImage}
                alt="Oussama Tabzioui"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-6 right-6 sm:left-8 sm:right-auto card px-5 py-3.5 flex items-center gap-3">
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-text-muted">{t('contact.location')}</p>
                <p className="text-sm font-semibold text-foreground">Casablanca, Morocco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
