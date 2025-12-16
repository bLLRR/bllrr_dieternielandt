import { PrismaClient } from '@prisma/client';

import { jobs } from '../data/jobs.ts';
import { projects } from '../data/projects.ts';
import { techStack } from '../data/tech-stack.ts';

const prisma = new PrismaClient();

type SeedTechnology = {
  name: string;
  icon?: string;
  level?: number;
};

function techKey(name?: string, icon?: string) {
  return (name ?? icon ?? '').trim().toLowerCase();
}

async function seedTechnologies() {
  const techMap = new Map<string, SeedTechnology>();

  const upsertTech = (name?: string, icon?: string, level?: number) => {
    const key = techKey(name, icon);
    if (!key) return;

    const existing = techMap.get(key);
    techMap.set(key, {
      name: name ?? existing?.name ?? icon ?? key,
      icon: icon ?? existing?.icon,
      level: level ?? existing?.level,
    });
  };

  techStack.forEach((tech) => upsertTech(tech.name, tech.icon, tech.level));

  projects.forEach((project) =>
    project.technologies?.forEach((tech) => upsertTech(tech.name, tech.icon)),
  );

  const technologies = Array.from(techMap.values());
  await prisma.technology.createMany({ data: technologies });

  const techRecords = await prisma.technology.findMany();
  const keyed = new Map<string, number>();
  techRecords.forEach((tech) =>
    keyed.set(techKey(tech.name ?? undefined, tech.icon ?? undefined), tech.id),
  );

  return keyed;
}

async function seedProjects(techIdsByKey: Map<string, number>) {
  for (const project of projects) {
    const techConnections =
      project.technologies
        ?.map((tech) => techIdsByKey.get(techKey(tech.name, tech.icon)))
        .filter(Boolean)
        .map((id) => ({ id })) ?? [];

    await prisma.project.create({
      data: {
        id: project.id,
        name: project.name,
        type: project.type,
        tagline: project.tagline,
        description: project.description,
        link: project.link,
        repository: project.repository,
        iconName: project.projectIcon?.name,
        iconColor: project.projectIcon?.color,
        technologies: techConnections.length
          ? { connect: techConnections }
          : undefined,
      },
    });
  }
}

async function seedJobs() {
  for (const job of jobs) {
    await prisma.job.create({
      data: {
        id: job.id,
        title: job.title,
        company: job.company,
        time: job.time,
        text: job.text ?? '',
        projects: job.projectIds?.length
          ? { connect: job.projectIds.map((id) => ({ id })) }
          : undefined,
      },
    });
  }
}

async function main() {
  await prisma.job.deleteMany();
  await prisma.project.deleteMany();
  await prisma.technology.deleteMany();

  const techIdsByKey = await seedTechnologies();
  await seedProjects(techIdsByKey);
  await seedJobs();
}

main()
  .catch((e) => {
    console.error('Seeding failed', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
