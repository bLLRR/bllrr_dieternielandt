import { Project } from '@/types/Project';

import { projects } from '@/data/projects';

import ProjectCard from '../components/project/ProjectCard';

export default function ProjectPage() {
  function renderProjects() {
    return projects.map((project: Project, index) => (
      <ProjectCard key={index} project={project} />
    ));
  }
  return (
    <div>
      <h3 className="text-2xl text-gray-500 dark:text-gray-300">Tech Stack</h3>
      <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderProjects()}
      </div>
    </div>
  );
}
