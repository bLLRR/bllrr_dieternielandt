import { Project } from '@/types/Project';
import { Technology } from '@/types/Technology';

import techStack from '@/data/tech-stack.json';
import projects from '@/data/projects.json';

import ProjectCard from './components/project/ProjectCard';
import TechPill from './components/ui/TechPill';
import Link from './components/ui/Link';

function renderTechStack() {
  return techStack.map((technology: Technology, index) => (
    <TechPill key={index} icon={technology.icon} text={technology.name} />
  ));
}

function renderProjects() {
  return projects.map((project, index) => (
    <ProjectCard key={index} project={project as Project} />
  ));
}

export default function Home() {
  return (
    <div className="space-y-6">
      {/* About */}
      <div className="">
        <h3 className="text-2xl dark:text-gray-200">
          Hey, Ik ben <span className="text-amber-600">Dieter Nielandt</span>
        </h3>
        <div className="mb-2 py-2">
          <p>
            Gedreven Full Stack Developer met een brede technische achtergrond
            en een passie voor het bouwen van performante, gebruiksvriendelijke
            webapplicaties. Ervaren met Laravel, Node.js, React, Livewire,
            PostgreSQL en MySQL, en vertrouwd met API-integraties en mobiele
            toepassingen. Naast de code hecht ik veel waarde aan duidelijke
            communicatie, teamwork en een gezonde dosis humor op de werkvloer.
            Ik haal energie uit het blijven bijleren en het opleveren van iets
            waar gebruikers écht blij van worden.
          </p>
        </div>
        <Link
          icon="bi bi-envelope"
          href="mailto:dieter.nielandt@gmail.com"
          className="mb-2 dark:text-gray-300"
        >
          Mail mij
        </Link>
      </div>

      {/* Tech stack */}
      <div className="">
        <h3 className="mt-2 text-2xl text-slate-500 dark:text-slate-400">
          Tech Stack
        </h3>
        <div className="mb-2 flex flex-wrap gap-1 py-4">
          {renderTechStack()}
        </div>
      </div>
      <div className="">
        <h3 className="text-2xl text-slate-500 dark:text-slate-400">
          Projecten
        </h3>
        {/* Projects */}
        <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
}
