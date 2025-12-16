import prisma from '@/lib/prisma';
import Timeline from '../components/ui/Timeline';
import JobRepository from '@/lib/JobRepository';

export default async function ResumePage() {
  const jobs = await prisma.job.findMany({
    include: {
      projects: true,
    },
  });

  function renderJobs() {
    return jobs.map((job, index) => (
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
