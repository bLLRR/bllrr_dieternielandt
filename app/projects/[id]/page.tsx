import { Technology } from '@/types/Technology';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import TechPill from '../../components/ui/TechPill';
import ProjectRepository from '@/lib/ProjectRepository';

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = ProjectRepository.findById(Number(id));

  if (!project) return notFound();

  function renderTechStack() {
    return project?.technologies?.map((technology: Technology, index) => (
      <TechPill key={index} icon={technology.icon} text={technology.name} />
    ));
  }

  const DescriptionComponent = project?.descriptionComponent
    ? dynamic(
        () =>
          import(
            `../../components/project/descriptions/${project.descriptionComponent}`
          ),
      )
    : null;

  return (
    <div className="">
      <h2 className="text-2xl dark:text-gray-200">{project.name}</h2>
      <div className="mb-2 py-2 dark:text-gray-300">
        {DescriptionComponent ? <DescriptionComponent /> : project.description}
      </div>
      <h3 className="mt-2 text-2xl text-gray-500 dark:text-gray-300">
        Tech Stack
      </h3>
      <div className="mb-2 flex flex-wrap gap-1 py-4">{renderTechStack()}</div>
      {project.link ||
        (project.repository && (
          <h3 className="mt-2 text-2xl text-gray-500 dark:text-gray-300">
            Code
          </h3>
        ))}
      <div className="mb-2 flex flex-wrap gap-1 py-4">
        {project.link && (
          <Link href={project.link} target="_blank">
            <TechPill icon="chrome" text="website" />
          </Link>
        )}
        {project.repository && (
          <Link href={project.repository} target="_blank">
            <TechPill icon="github" text="Github" />
          </Link>
        )}
      </div>
    </div>
  );
}
