import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { getProjects } from '../lib/projects';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projects = getProjects(t).filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative animate-slide-up">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4 text-gradient">
            {t('projects.title')}
          </h2>
          <p className="text-text-secondary text-lg mb-8">{t('projects.allPage.subtitle')}</p>
          <Link to="/projects">
            <button className="btn-neon flex items-center gap-2 mx-auto">
              {t('projects.all')} <ArrowRight size={16} />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
