import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '2+', label: t('about.stat.years') },
    { value: '6', label: t('about.stat.apps') },
    { value: '10+', label: t('about.stat.tech') },
    { value: '3', label: t('about.stat.langs') },
  ];

  return (
    <section id="about" className="py-20 relative animate-slide-up">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8 text-center text-gradient">
            {t('about.title')}
          </h2>

          <div className="glass-card p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300">
            <p className="text-lg leading-relaxed text-text-primary">{t('about.content')}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-mono font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-text-secondary font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
