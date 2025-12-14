import { Project } from '@/types/Project';

export const projects: Project[] = [
  {
    id: 1,
    name: 'dieternielandt.be',
    tagline: 'Portfolio website',
    description:
      'Dit is een persoonlijke portfolio van Dieter Nielandt, gebouwd met Next.js en TypeScript. De homepagina introduceert de developer, biedt een mail-link, laat de tech stack zien via kleine pills en toont een grid met projecten. Er is ook een projectoverzichtspagina met kaarten die iconen, namen, korte beschrijvingen en gebruikte technologieën tonen. Elke kaart linkt door naar een detailpagina waar de naam van het gekozen project verschijnt; bij een onbekende ID kom je op een 404. Alle data komt uit één bronbestand (data/projects.ts) met id, naam, beschrijving, icon-info, technologieën en optioneel een link.',
    projectIcon: {
      name: 'bi bi-browser-chrome',
    },
    technologies: [
      { icon: 'nextjs2', name: 'NextJS' },
      { icon: 'tailwindcss', name: 'Tailwindcss' },
      { icon: 'typescript', name: 'Typescript' },
      { icon: 'vercel', name: 'Vercel' },
    ],
    link: 'https://dieternielandt.be',
    repository: 'https://github.com/bLLRR/bllrr_dieternielandt',
  },
  {
    id: 2,
    tagline: 'Fleet management',
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
    id: 3,
    name: 'CRM/ERP',
    tagline: 'CRM/ERP projectmanagemnt',
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
    id: 4,
    name: 'ERP API-Gateway',
    tagline: 'Servicemappinglaag voor API-communicatie',
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
    id: 5,
    name: 'ERP Mobile',
    tagline: 'Mobiele app voor inventaris, leveringen en tijdsregistratie',
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
    id: 6,
    name: 'c-supply.be',
    tagline: 'webshop gekoppeld aan ERP',
    description: 'webshop gekoppeld met ERP (fg-software/Optedo)',
    projectIcon: {
      name: 'bi bi-bag',
      color: 'red',
    },
    technologies: [
      { icon: 'php', name: 'PHP' },
      { icon: 'laravel', name: 'Laravel' },
      { icon: 'livewire', name: 'Livewire' },
      { icon: 'mysql', name: 'MySQL' },
      { icon: 'sendgrid', name: 'Sendgrid' },
    ],
  },
  {
    id: 7,
    name: 'Fleet bestelapplicatie',
    tagline: 'app voor interne bestellingen bestelwagens',
    description:
      'Bestellen van bestelwagens door verschillende afdelingen binnen de groep. Verwerking door fleetmanager via tool en mail.',
    projectIcon: {
      name: 'bi bi-box',
      color: 'red',
    },
    technologies: [
      { icon: 'php', name: 'PHP' },
      { icon: 'laravel', name: 'Laravel' },
      { icon: 'livewire', name: 'Livewire' },
      { icon: 'mysql', name: 'MySQL' },
      { icon: 'sendgrid', name: 'Sendgrid' },
      { icon: 'deployer', name: 'Deployer' },
    ],
  },
  {
    id: 8,
    name: 'Interne webshop',
    tagline: 'Interne webshop voor werfbestellingen',
    description:
      'Tool voor werfbestellingen met ERP-integratie (FG-Software/Optedo)',
    projectIcon: {
      name: 'bi bi-box',
    },
    technologies: [
      { icon: 'php', name: 'PHP' },
      { icon: 'laravel', name: 'Laravel' },
      { icon: 'livewire', name: 'Livewire' },
      { icon: 'mysql', name: 'MySQL' },
      { icon: 'sendgrid', name: 'Sendgrid' },
      { icon: 'deployer', name: 'Deployer' },
    ],
  },
  {
    id: 9,
    name: 'webshop: verhuur',
    tagline: 'webshop voor verhuuraanvragen',
    description: 'Tool voor verhuuraanvragen met ERP-integratie (Insphire)',
    projectIcon: {
      name: 'bi bi-box',
      color: 'red',
    },
    technologies: [
      { icon: 'php', name: 'PHP' },
      { icon: 'laravel', name: 'Laravel' },
      { icon: 'mysql', name: 'MySQL' },
      { icon: 'sendgrid', name: 'Sendgrid' },
    ],
  },
];
