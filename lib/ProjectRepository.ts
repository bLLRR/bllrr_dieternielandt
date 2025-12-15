import { projects } from '@/data/projects';
import { Project } from '@/types/Project';

export default class ProjectRepository {
  static all(): Project[] {
    return projects;
  }

  static findById(id: Project['id']): Project | undefined {
    return projects.find((project) => project.id === id);
  }
}
