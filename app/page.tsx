import Image from 'next/image';
import Link from 'next/link';
import TechIcon from './components/ui/TechIcon';
import clsx from 'clsx';
import techStack from '@/data/tech-stack.json';
import projects from '@/data/projects.json';

interface Project {
  name: string;
  description: string;
  projectIcon?: ProjectIcon;
  technologies?: Technology[];
}

interface ProjectIcon {
  name: string;
  color?: string;
}

interface Technology {
  icon: string;
  name?: string;
}

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
    <span className="flex gap-2 rounded-2xl border border-gray-200 bg-gray-100 px-2 py-1 text-sm">
      <TechIcon icon={technology.icon} height={height} width={width} />
      {technology.name}
    </span>
  );
}

export function Card({ project }: ProjectProps) {
  return (
    <div className="rounded-lg border border-gray-300 p-2">
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
      <p className="text-gray-600">{project.description}</p>
      <div className="flex flex-wrap items-center gap-1">
        {project.technologies?.map((technology, index) => (
          <TechPill key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      <nav className="px-4 py-2.5">
        <div className="flex items-center justify-start">
          <Link href="/" className="mr-4 flex items-center justify-between">
            <Image alt={'logo'} src={'/logo.png'} width={65} height={55} />
          </Link>
        </div>
      </nav>

      <main className="mx-auto h-auto max-w-5xl p-4">
        {/* About */}
        <h3 className="text-2xl">
          Hey, Ik ben <span className="text-amber-600">Dieter Nielandt</span>
        </h3>
        <div className="py-2">
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
        <h3 className="text-2xl text-gray-500">Tech Stack</h3>
        <div className="flex flex-wrap gap-1 py-4">{renderTechStack()}</div>
        <h3 className="text-2xl text-gray-500">Projecten</h3>
        {/* Projects */}
        <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
          {renderProjects()}
        </div>
      </main>
    </div>
  );
}
