import Image from 'next/image'
import Link from 'next/link'
import TechIcon from './components/ui/TechIcon'

interface Project {
  name: string
  description: string
  icon?: string
  technologies?: Technology[]
}

interface Technology {
  icon: string
  name?: string
}

interface ProjectProps {
  project: Project
}

function renderProjects() {
  const projects: Project[] = [
    {
      name: 'dieternielandt.be',
      description: 'porfolio website',
      technologies: [
        { icon: 'nextjs2', name: 'NextJS' },
        { icon: 'tailwindcss', name: 'Tailwindcss' },
      ],
    },
    {
      name: 'c-supply.be',
      description: 'webshop gekoppeld met ERP (fg-software/Optedo)',
      icon: 'bi bi-bag',
      technologies: [
        { icon: 'laravel', name: 'Laravel' },
        { icon: 'mysql', name: 'MySQL' },
      ],
    },
  ]

  return projects.map((project: Project, index) => (
    <Card key={index} project={project} />
  ))
}

export function Card({ project }: ProjectProps) {
  return (
    <div className="rounded-lg border border-gray-300 p-2">
      <h3 className="text-lg">
        <span className="">
          {project.icon && (
            <i className={`${project?.icon} mr-2 text-red-500`} />
          )}
          {project.name}
        </span>
      </h3>
      <p className="text-gray-600">{project.description}</p>
      <p className="flex items-center gap-1">
        {project.technologies?.map((technology, index) => (
          <span
            key={index}
            className="flex gap-1 rounded-2xl border border-gray-200 bg-gray-100 px-2 py-1 text-xs"
          >
            <TechIcon icon={technology.icon} height={15} width={15} />
            {technology.name}
          </span>
        ))}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <nav className="px-4 py-2.5">
        <div className="flex items-center justify-start">
          <Link href="/" className="mr-4 flex items-center justify-between">
            <Image alt={'logo'} src={'/logo.png'} width={65} height={55} />
          </Link>
        </div>
      </nav>

      <main className="mx-auto h-auto max-w-5xl p-4">
        {/* Tech stack */}
        <div className=""></div>
        {/* Projects */}
        <div className="grid grid-cols-1 gap-4">{renderProjects()}</div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
        </div>
        <div className="mb-4 h-96 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
          <div className="h-48 rounded-lg border-2 border-dashed border-gray-300 md:h-72 dark:border-gray-600"></div>
        </div>
      </main>
    </div>
  )
}
