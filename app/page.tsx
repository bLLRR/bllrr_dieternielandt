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

interface TechnologyProps {
  technology: Technology;
}

function renderTechStack() {
  return techStack.map((technology: Technology, index) => (
    <Pill key={index} technology={technology} />
  ));
}

function renderProjects() {
  return projects.map((project: Project, index) => (
    <Card key={index} project={project} />
  ));
}

export function Pill({ technology }: TechnologyProps) {
  return (
    <span className="flex gap-1 rounded-2xl border border-gray-200 bg-gray-100 px-2 py-1 text-xs">
      <TechIcon icon={technology.icon} height={15} width={15} />
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
      <p className="flex items-center gap-1">
        {project.technologies?.map((technology, index) => (
          <span
            key={index}
            className="flex gap-1 rounded-2xl border border-gray-200 bg-gray-100 px-2 py-1 text-xs"
          >
            <TechIcon icon={technology.icon} height={15} width={15} />
            {technology.name}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <nav className="px-4 py-2.5">
        <div className="flex items-center justify-start">
          <Link href="/" className="mr-4 flex items-center justify-between">
            <Image alt={'logo'} src={'/logo.png'} width={65} height={55} />
          </Link>
        </div>
      </nav>

      <main className="mx-auto h-auto max-w-5xl p-4">
        {/* Tech stack */}
        <h3 className="text-2xl text-gray-500">Tech Stack</h3>
        <div className="flex flex-wrap gap-1 py-4">{renderTechStack()}</div>
        <div className=""></div>
        {/* Projects */}
        <div className="grid grid-cols-3 gap-4">{renderProjects()}</div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
        </div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
        </div>
      </main>
    </div>
  );
}
