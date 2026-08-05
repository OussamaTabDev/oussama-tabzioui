import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Project, ProjectStatus } from '../lib/projects';

const statusColors: Record<ProjectStatus, string> = {
  commercial: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
  opensource: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
  prototype: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
  completed: 'bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/30',
  inprogress: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
};

const statusDot: Record<ProjectStatus, string> = {
  commercial: 'bg-amber-500',
  opensource: 'bg-emerald-500',
  prototype: 'bg-indigo-500',
  completed: 'bg-green-500',
  inprogress: 'bg-blue-500',
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
        className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${heightClass}`}
      />
    ) : (
      <div
        className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient} ${heightClass}`}
      >
        <span className="text-5xl font-bold text-gradient">{getInitials(project.title)}</span>
      </div>
    );

  const statusBadge = (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`} />
      {t(`projects.badge.${project.status}`)}
    </span>
  );

  return (
    <>
      <div
        className="project-card cursor-pointer group"
        onClick={openModal}
      >
        <div className="relative h-44 overflow-hidden rounded-t-lg">
          {header('h-44')}
          <div className="absolute inset-0 bg-gradient-to-t from-card-bg/60 to-transparent" />
          <span className="absolute top-4 right-4">{statusBadge}</span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>

          <p className="text-text-secondary mb-4 line-clamp-2">{project.description}</p>

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
                className="flex items-center gap-1.5 text-accent-primary text-sm font-medium hover:text-accent-secondary transition-colors"
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
                className="flex items-center gap-1.5 text-accent-primary text-sm font-medium hover:text-accent-secondary transition-colors"
              >
                <Github size={14} />
                {t('projects.github')}
              </a>
            )}
            <button
              onClick={openModal}
              className="text-accent-primary text-sm font-medium hover:text-accent-secondary transition-colors"
            >
              {t('projects.view')} →
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={closeModal} />

          <div className="relative card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-card-hover rounded-full transition-colors z-10 text-text-primary"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 overflow-hidden rounded-t-lg">
              {header('h-64')}
              <div className="absolute inset-0 bg-gradient-to-t from-card-bg/60 to-transparent" />
              <span className="absolute top-4 right-4">{statusBadge}</span>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gradient">{project.title}</h3>

              <p className="text-text-secondary mb-6 leading-relaxed">{project.longDescription}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-foreground">{t('projects.tech')}</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <Github size={18} />
                    {t('projects.code')}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    <ExternalLink size={18} />
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
