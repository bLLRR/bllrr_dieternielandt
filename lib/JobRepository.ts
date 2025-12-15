import { jobs } from '@/data/jobs';
import ProjectRepository from './ProjectRepository';
import { Job } from '@/types/Job';
import { Project } from '@/types/Project';

export type JobWithProjects = Job & { projects: Project[] };

export default class JobRepository {
  static all(): Job[] {
    return jobs;
  }

  static allWithProjects(): JobWithProjects[] {
    return jobs.map((job) => {
      const projects =
        job.projectIds?.map((id) => ProjectRepository.findById(id)) ?? [];

      return {
        ...job,
        projects: projects.filter(Boolean) as Project[],
      };
    });
  }
}
