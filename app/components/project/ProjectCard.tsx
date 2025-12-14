import { Project } from '@/types/Project';

import clsx from 'clsx';

import Card from '../ui/Card';
import TechPill from '../ui/TechPill';
import Link from 'next/link';
import Badge from '../ui/Badge';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({
  project,
  className = '',
}: ProjectCardProps) {
  const colorClass = clsx(
    `text-${project.projectIcon?.color}-500 dark:text-${project.projectIcon?.color}-700`,
  );
  return (
    <Link
      href={`/projects/${project.id}`}
      className={clsx('block h-full', className)}
    >
      <Card className="flex h-full flex-col">
        <div className="mb-4 items-center">
          <div className="flex justify-between">
            <div className="flex flex-wrap items-center">
              <span className="mt-0.5 rounded-sm border border-gray-300 bg-gray-100 px-1 dark:border-gray-600 dark:bg-gray-700">
                {project.projectIcon && (
                  <i
                    className={clsx(
                      project?.projectIcon.name,
                      project?.projectIcon?.color && className,
                    )}
                  />
                )}
              </span>
              <h3 className={clsx(`${project.projectIcon && 'ml-2'}`)}>
                {project.name}
              </h3>
            </div>
            <Badge
              className="ml-1"
              color={project.type === 'private' ? 'lime' : 'orange'}
              // color={'green'}
              text={project.type}
            />
          </div>
        </div>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {project.tagline}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-1">
          {project.technologies?.map((technology, index) => (
            <TechPill
              key={index}
              icon={technology.icon}
              text={technology.name}
            />
          ))}
        </div>
      </Card>
    </Link>
  );
}
