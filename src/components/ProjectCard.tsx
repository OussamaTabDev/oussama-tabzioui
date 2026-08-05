import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Project, ProjectStatus } from '../lib/projects';

const statusColors: Record<ProjectStatus, string> = {
  commercial: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
  opensource: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
  prototype: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
  completed: 'bg-green-500/20 text-green-300 border border-green-500/30',
  inprogress: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
};

const getInitials = (title: string) =>
  title
    .split(' ')
    .map(word => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const header = (heightClass: string) =>
    project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className={`w-full h-full object-cover transition-transform duration-300 hover:scale-110 ${heightClass}`}
      />
    ) : (
      <div
        className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient} ${heightClass}`}
      >
        <span className="text-5xl font-mono font-bold text-gradient">{getInitials(project.title)}</span>
      </div>
    );

  return (
    <>
      <div
        className="project-card cursor-pointer hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-accent-primary/20"
        onClick={openModal}
      >
        <div className="relative h-44 overflow-hidden rounded-t-lg">
          {header('h-44')}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />
          <span
            className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-mono ${statusColors[project.status]}`}
          >
            {t(`projects.badge.${project.status}`)}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-mono font-semibold mb-3 text-accent-primary">{project.title}</h3>

          <p className="text-text-primary mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span key={index} className="skill-tag text-xs">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-1.5 text-accent-primary font-mono text-sm hover:text-accent-secondary transition-colors"
              >
                <ExternalLink size={14} />
                {t('projects.demo')}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-1.5 text-accent-primary font-mono text-sm hover:text-accent-secondary transition-colors"
              >
                <Github size={14} />
                {t('projects.github')}
              </a>
            )}
            <button
              onClick={openModal}
              className="text-accent-primary font-mono text-sm hover:text-accent-secondary transition-colors"
            >
              {t('projects.view')} →
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" onClick={closeModal} />

          <div className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-card-hover rounded-full transition-colors z-10 text-text-primary"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 overflow-hidden rounded-t-lg">
              {header('h-64')}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
              <span
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono ${statusColors[project.status]}`}
              >
                {t(`projects.badge.${project.status}`)}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-mono font-bold mb-4 text-gradient">{project.title}</h3>

              <p className="text-text-primary mb-6 leading-relaxed">{project.longDescription}</p>

              <div className="mb-6">
                <h4 className="font-mono font-semibold mb-3 text-accent-primary">{t('projects.tech')}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 btn-neon"
                  >
                    <Github size={20} />
                    {t('projects.code')}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 glass-card px-4 py-2 hover:border-accent-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                    {t('projects.live')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
