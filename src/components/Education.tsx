import SectionHeader from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.university.degree'),
      school: t('education.university.school'),
      period: t('education.university.period'),
    },
    {
      degree: t('education.highschool.degree'),
      school: t('education.highschool.school'),
      period: t('education.highschool.period'),
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title={t('education.title')} />

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <div key={index} className="card p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-accent-primary/10 text-accent-primary">
                      <GraduationCap size={24} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>

                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-3">{edu.school}</p>

                    <span className="tag !bg-success/10 !border-success/40 !text-success">
                      {t('education.status.completed')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
