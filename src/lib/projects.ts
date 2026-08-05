import libraryImage from '../assets/library-project.jpg';
import ecommerceImage from '../assets/ecommerce-project.jpg';
import trackerImage from '../assets/focusai-project.jpg';

export type ProjectStatus = 'commercial' | 'opensource' | 'prototype' | 'completed' | 'inprogress';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image?: string;
  gradient?: string;
  demo?: string;
  github?: string;
  status: ProjectStatus;
  featured?: boolean;
}

export const getProjects = (t: (key: string) => string): Project[] => [
  {
    id: 'clinic',
    title: t('projects.clinic.title'),
    description: t('projects.clinic.description'),
    longDescription: t('projects.clinic.long'),
    tech: ['Electron', 'React', 'Node.js', 'Self-Hosted'],
    gradient: 'from-cyan-500/25 to-teal-500/25',
    status: 'inprogress',
    featured: true,
  },
  {
    id: 'maktabaty',
    title: t('projects.maktabaty.title'),
    description: t('projects.maktabaty.description'),
    longDescription: t('projects.maktabaty.long'),
    tech: ['Electron', 'React', 'JavaScript', 'IndexedDB'],
    gradient: 'from-sky-500/25 to-blue-600/25',
    demo: 'https://oussamatabdev.github.io/maktabatypro/',
    status: 'commercial',
    featured: true,
  },
  {
    id: 'nourhuda',
    title: t('projects.nourhuda.title'),
    description: t('projects.nourhuda.description'),
    longDescription: t('projects.nourhuda.long'),
    tech: ['React', 'PWA', 'Mobile', 'Arabic'],
    gradient: 'from-emerald-500/25 to-green-600/25',
    github: 'https://github.com/OussamaTabDev/azan-simple-page',
    status: 'opensource',
    featured: true,
  },
  {
    id: 'templateflow',
    title: t('projects.templateflow.title'),
    description: t('projects.templateflow.description'),
    longDescription: t('projects.templateflow.long'),
    tech: ['Electron', 'React', 'PDF', 'TypeScript'],
    gradient: 'from-indigo-500/25 to-violet-500/25',
    status: 'prototype',
    featured: true,
  },
  {
    id: 'library',
    title: t('projects.library.title'),
    description: t('projects.library.description'),
    longDescription: t('projects.library.long'),
    image: libraryImage,
    tech: ['Django', 'React', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/OussamaTabDev/library-manager',
    status: 'completed',
    featured: true,
  },
  {
    id: 'tracker',
    title: t('projects.tracker.title'),
    description: t('projects.tracker.description'),
    longDescription: t('projects.tracker.long'),
    image: trackerImage,
    tech: ['Django', 'React', 'Tauri', 'scikit-learn'],
    github: 'https://github.com/OussamaTabDev/focusai-tracker',
    status: 'opensource',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: t('projects.ecommerce.title'),
    description: t('projects.ecommerce.description'),
    longDescription: t('projects.ecommerce.long'),
    image: ecommerceImage,
    tech: ['PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/OussamaTabDev/ecommerce-platform',
    status: 'completed',
  },
];
