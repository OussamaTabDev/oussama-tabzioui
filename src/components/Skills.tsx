import SectionHeader from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C', 'Rust', 'PHP'],
    },
    {
      title: t('skills.frameworks'),
      skills: ['Django', 'Flask', 'React', 'Node.js', 'Electron', 'Tauri', 'Tailwind CSS', 'PWA'],
    },
    {
      title: t('skills.ai'),
      skills: ['Scikit-learn', 'TensorFlow', 'NumPy', 'pandas'],
    },
    {
      title: t('skills.databases'),
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'IndexedDB'],
    },
    {
      title: t('skills.tools'),
      skills: ['Git', 'Docker', 'Linux', 'Postman', 'REST APIs', 'CI/CD', 'XAMPP'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title={t('skills.title')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6 card-hover">
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
