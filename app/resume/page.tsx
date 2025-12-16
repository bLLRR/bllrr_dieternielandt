import Image from 'next/image';
import JobRepository from '@/lib/JobRepository';

import { Job } from '@/types/Job';
import { Project } from '@/types/Project';

import TechPill from '../components/ui/TechPill';
import Timeline from '../components/ui/Timeline';
import { Technology } from '@/types/Technology';

const skills = [
  { name: 'JavaScript', icon: 'js' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Express', icon: 'expressjs' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'Php', icon: 'php' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Git', icon: 'git' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MySQL', icon: 'mysql' },
];

export default async function ResumePage() {
  const jobs = await JobRepository.getAllJobs();

  function renderJobText(job: Job) {
    return (
      <div>
        {job.projects?.map((project: Project) => (
          <div key={`project-${project.id}`}>
            <h4 className="text-heading text-md my-1 font-medium">
              {project.name}
            </h4>
            <div className="">{project.description}</div>
            <div className="flex flex-wrap gap-1 py-2">
              {project.technologies?.map((tech, index) => (
                <TechPill key={index} icon={tech.icon} text={tech.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderSkills() {
    return (
      <>
        {skills.map((skill, index) => (
          <TechPill
            key={index}
            icon={skill.icon}
            text={skill.name}
            className="m-1"
          />
        ))}
      </>
    );
  }

  function renderJobs() {
    return jobs.map((job, index) => (
      <Timeline.Item
        key={index}
        title={job.title}
        subtitle={job.company}
        time={job.time}
        text={renderJobText(job)}
      />
    ));
  }
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1 space-y-6">
        {/* Image */}
        <div className="">
          <h1 className="">Dieter Nielandt</h1>
          <Image
            src="/image_cv.jpg"
            alt="Dieter Nielandt"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        {/* Personalia */}
        <div className="">
          <h3 className="">Full-Stack Developer</h3>
          <p className="">
            <i className="bi bi-envelope" />
            <a
              href="mailto:dieter.nielandt@gmail.com"
              className="ml-2 underline hover:text-slate-900 dark:hover:text-slate-100"
            >
              dieter.nielandt@gmail.com
            </a>
          </p>
          <p className="">
            <i className="bi bi-phone" />
            <a
              href="tel:+32476426387"
              className="ml-2 underline hover:text-slate-900 dark:hover:text-slate-100"
            >
              +32 47 82 48 42
            </a>
          </p>
          <p className="">
            <i className="bi bi-geo-alt" />
            <span className="ml-1">Temse, Belgie</span>
          </p>
        </div>
        {/* Opleidingen */}
        <div className="space-y-2">
          <h3 className="">Opleidingen</h3>
          <div className="flex flex-col">
            <span>Java Enterprise Developer</span>
            <span className="">Cevora - 2014</span>
          </div>
          <div className="flex flex-col">
            <span className="">Toegepaste informatica</span>
            <span className="">Karel de Grote Hogeschool - 2011-2013</span>
          </div>
          <div className="flex flex-col">
            <span>TSO</span>
            <span>Technisch Instituut Sint-Isidorus - 2008-2011</span>
          </div>
        </div>

        {/* Vaardigheden */}
        <div className="space-y-2">
          <h3 className="">Vaardigheden</h3>
          <div className="mt-auto flex flex-col gap-2">{renderSkills()}</div>
        </div>
      </div>
      <div className="col-span-2 space-y-6">
        <h3 className="">Werkervaring</h3>
        <Timeline>{renderJobs()}</Timeline>
      </div>
    </div>
  );
}
