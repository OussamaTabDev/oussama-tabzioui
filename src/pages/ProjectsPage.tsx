import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getProjects, type ProjectStatus } from '@/lib/projects';

const filters: Array<'all' | ProjectStatus> = [
  'all',
  'commercial',
  'opensource',
  'prototype',
  'completed',
  'inprogress',
];

const ProjectsPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<'all' | ProjectStatus>('all');

  const projects = getProjects(t);
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl"></div>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative animate-fade-in">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <button className="flex items-center gap-2 px-4 py-2 text-text-secondary hover:text-accent-primary transition-colors font-mono">
                <ArrowLeft className="w-4 h-4" />
                {t('projects.back')}
              </button>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 text-gradient">
              {t('projects.allPage.title')}
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {t('projects.allPage.subtitle')}
            </p>
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
                  filter === f
                    ? 'bg-accent-primary text-surface'
                    : 'glass-card hover:border-accent-primary text-text-secondary'
                }`}
              >
                {f === 'all' ? t('projects.filter.all') : t(`projects.filter.${f}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 relative animate-slide-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
