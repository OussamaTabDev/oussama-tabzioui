import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'C', 'Rust', 'PHP'],
      icon: '💻'
    },
    {
      title: t('skills.frameworks'),
      skills: ['Django', 'Flask', 'React', 'Node.js', 'Electron', 'Tauri', 'Tailwind CSS', 'PWA'],
      icon: '🚀'
    },
    {
      title: t('skills.ai'),
      skills: ['Scikit-learn', 'TensorFlow', 'NumPy', 'pandas'],
      icon: '🤖'
    },
    {
      title: t('skills.databases'),
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'IndexedDB'],
      icon: '🗄️'
    },
    {
      title: t('skills.tools'),
      skills: ['Git', 'Docker', 'Linux', 'Postman', 'REST APIs', 'CI/CD', 'XAMPP'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-20 relative animate-slide-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-center mb-16 text-gradient">
          {t('skills.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card p-6 h-full flex flex-col hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-mono font-semibold text-accent-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="skill-tag transition-all hover:scale-105 hover:bg-accent-primary hover:text-surface"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;