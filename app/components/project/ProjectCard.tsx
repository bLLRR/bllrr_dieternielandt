import { Project } from '@/types/Project';

import clsx from 'clsx';

import Card from '../ui/Card';
import TechPill from '../ui/TechPill';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="mb-4 flex flex-wrap items-center">
        <span className="rounded-sm border border-gray-300 bg-gray-100 px-1">
          {project.projectIcon && (
            <i
              className={clsx(
                project?.projectIcon.name,
                project?.projectIcon?.color &&
                  `text-${project.projectIcon.color}-500`,
              )}
            />
          )}
        </span>

        <h3 className={clsx(`${project.projectIcon && 'ml-2'}`)}>
          {project.name}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
      <div className="mt-2 flex flex-wrap items-center gap-1">
        {project.technologies?.map((technology, index) => (
          <TechPill key={index} technology={technology} />
        ))}
      </div>
    </Card>
  );
}
