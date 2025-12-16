import projects from '@/data/projects.json';
import { Project } from '@/types/Project';

export default class ProjectRepository {
  static all(): Project[] {
    return projects as Project[];
  }

  static findById(id: number): Project | undefined {
    const projects = this.all().filter((project: Project) => project.id === id);
    // return the project or undefined if not found
    // return the first element of the array or undefined
    return projects[0];
  }
}
