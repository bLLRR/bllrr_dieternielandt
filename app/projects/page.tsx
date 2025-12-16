import { Project } from '@/types/Project';
import projects from '@/data/projects.json';

import ProjectCard from '../components/project/ProjectCard';

export default async function ProjectPage() {
  function renderProjects() {
    return projects.map((project, index) => (
      <ProjectCard key={index} project={project as Project} />
    ));
  }
  return (
    <div>
      <h3 className="text-2xl text-slate-500 dark:text-slate-400">
        Tech Stack
      </h3>
      <div className="grid grid-cols-1 gap-4 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {renderProjects()}
      </div>
    </div>
  );
}
