import { Job } from '@/types/Job';
import Timeline from '../components/ui/Timeline';
import JobRepository from '@/lib/JobRepository';

export default async function ResumePage() {
  const jobsWithProjects = await JobRepository.allWithProjects();

  console.log('jobs: ', jobsWithProjects);

  function renderJobs() {
    return jobsWithProjects.map((job, index) => (
      <Timeline.Item
        key={index}
        title={job.title}
        subtitle={job.company}
        time={job.time}
        text={job.text ?? ''}
      />
    ));
  }
  return <Timeline>{renderJobs()}</Timeline>;
}
