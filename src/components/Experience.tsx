import SectionHeader from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.self.title'),
      company: t('experience.self.type'),
      period: t('experience.self.period'),
      description: t('experience.self.description'),
    },
    {
      title: t('experience.intern.title'),
      company: 'GenerationNT — Meknès',
      period: t('experience.intern.period'),
      description: t('experience.intern.description'),
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title={t('experience.title')} />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-5 top-2 bottom-2 w-0.5 bg-card-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-10 last:mb-0 pl-12 md:pl-16">
                <div className="absolute left-1.5 md:left-2.5 top-7 w-5 h-5 bg-card-bg border-2 border-accent-primary rounded-full" />

                <div className="card p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-text-secondary">
                        <Briefcase size={16} className="text-accent-primary" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
