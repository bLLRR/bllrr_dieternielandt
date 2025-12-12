import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    name: 'dieternielandt.be',
    description: 'porfolio website',
    projectIcon: {
      name: 'bi bi-browser-chrome',
    },
    technologies: [
      { icon: 'nextjs2', name: 'NextJS' },
      { icon: 'tailwindcss', name: 'Tailwindcss' },
      { icon: 'typescript', name: 'Typescript' },
    ],
  },
  {
    name: 'Fleet management',
    description:
      'Platform voor wagenparkbeheer met modules, automatische herinneringen en integraties',
    projectIcon: {
      name: 'bi bi-box',
    },
    technologies: [
      { icon: 'php', name: 'PHP' },
      { icon: 'laravel', name: 'Laravel' },
      { icon: 'livewire', name: 'Livewire' },
      { icon: 'stripe', name: 'Stripe' },
      { icon: 'ploiio', name: 'Ploi.io' },
      { icon: 'mysql', name: 'MySQL' },
    ],
  },
  {
    name: 'ERP V2',
    description: 'CRM/ERP projectmanagement',
    projectIcon: {
      name: 'bi bi-box',
    },
    technologies: [
      { icon: 'js', name: 'Javascript' },
      { icon: 'nodejs', name: 'Node.js' },
      { icon: 'expressjs', name: 'Express.js' },
      { icon: 'postgresql', name: 'PostgreSQL' },
      { icon: 'sendgrid', name: 'Sendgrid' },
      { icon: 'react', name: 'React' },
      { icon: 'redux', name: 'Redux' },
      { icon: 'tailwindcss', name: 'TailwindCSS' },
      { icon: 'headlessui', name: 'HeadlessUI' },
      { icon: 'vitejs', name: 'ViteJS' },
      { icon: 'apexcharts', name: 'Apexcharts' },
    ],
  },
  {
    name: 'ERP API-Gateway/mapper',
    description: 'Servicemappinglaag voor API-communicatie',
    projectIcon: {
      name: 'bi bi-box',
    },
    technologies: [
      { icon: 'js', name: 'Javascript' },
      { icon: 'nodejs', name: 'Node.js' },
      { icon: 'expressjs', name: 'Express.js' },
    ],
  },
  {
    name: 'ERP Mobile',
    description:
      'App voor inventaris, orderpicking, leveringen en tijdsregistratie',
    projectIcon: {
      name: 'bi bi-phone',
    },
    technologies: [
      { icon: 'js', name: 'Javascript' },
      { icon: 'react', name: 'React' },
      { icon: 'redux', name: 'Redux' },
      { icon: 'android', name: 'Android' },
    ],
  },
  {
    name: 'c-supply.be',
    description: 'webshop gekoppeld met ERP (fg-software/Optedo)',
    projectIcon: { name: 'bi bi-bag', color: 'red' },
    technologies: [
      { icon: 'laravel', name: 'Laravel' },
      { icon: 'mysql', name: 'MySQL' },
    ],
  },
];
