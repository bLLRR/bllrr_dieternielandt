import Navbar from './components/layout/navbar';

import { Project } from '@/types/Project';
import { Technology } from '@/types/Technology';

import clsx from 'clsx';

import TechIcon from './components/ui/TechIcon';
import techStack from '@/data/tech-stack.json';
import { projects } from '@/data/projects';

interface ProjectProps {
  project: Project;
}

interface TechPillProps {
  technology: Technology;
  width?: number;
  height?: number;
}

function renderTechStack() {
  return techStack.map((technology: Technology, index) => (
    <TechPill key={index} technology={technology} />
  ));
}

function renderProjects() {
  return projects.map((project: Project, index) => (
    <Card key={index} project={project} />
  ));
}

export function TechPill({
  technology,
  height = 15,
  width = 15,
}: TechPillProps) {
  return (
    <span className="flex gap-2 rounded-2xl border border-gray-200 bg-gray-100 px-2 py-1 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
      <TechIcon icon={technology.icon} height={height} width={width} />
      {technology.name}
    </span>
  );
}

export function Card({ project }: ProjectProps) {
  return (
    <div className="rounded-lg border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
      <h3 className="text-lg">
        <span className="">
          {project.projectIcon && (
            <i
              className={clsx(
                project?.projectIcon.name,
                'mr-2',
                project?.projectIcon?.color &&
                  `text-${project.projectIcon.color}-500`,
              )}
            />
          )}
          {project.name}
        </span>
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
      <div className="mt-2 flex flex-wrap items-center gap-1">
        {project.technologies?.map((technology, index) => (
          <TechPill key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="">
      <Navbar />

      <main className="mx-auto h-auto max-w-5xl p-4">
        {/* About */}
        <h3 className="text-2xl dark:text-gray-200">
          Hey, Ik ben <span className="text-amber-600">Dieter Nielandt</span>
        </h3>
        <div className="py-2 dark:text-gray-300">
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
        {/* Tech stack */}
        <h3 className="text-2xl text-gray-500 dark:text-gray-300">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-1 py-4">{renderTechStack()}</div>
        <h3 className="text-2xl text-gray-500 dark:text-gray-300">Projecten</h3>
        {/* Projects */}
        <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {renderProjects()}
        </div>
      </main>
    </div>
  );
}
