import { Job } from '@/types/Job';
import { Project } from '@/types/Project';
import jobs from '@/data/jobs.json';

export default class JobRepository {
  static async getAllJobs(): Promise<Job[]> {
    // get all jobs from the jobs.json file
    // attach related projects to each job
    const jobsWithProjects: Job[] = jobs.map((job) => {
      const relatedProjects = job.id
        ? require('@/data/projects.json').filter(
            (project: Project) => project.jobId === job.id,
          )
        : [];
      return {
        ...job,
        projects: relatedProjects,
      };
    });
    return jobsWithProjects;
  }
}
