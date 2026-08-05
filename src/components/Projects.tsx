import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import { getProjects } from '../lib/projects';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const projects = getProjects(t).filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader title={t('projects.title')} subtitle={t('projects.allPage.subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <button className="btn-outline">
              {t('projects.all')} <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
