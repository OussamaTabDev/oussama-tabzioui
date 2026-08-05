import SectionHeader from './SectionHeader';
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
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title={t('about.title')} />

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12 card-hover">
            <p className="text-lg leading-relaxed text-text-secondary">{t('about.content')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, index) => (
              <div key={index} className="card p-6 text-center card-hover">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
