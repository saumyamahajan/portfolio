import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { GithubIcon } from '@/components/ui/brand-icons'
import type { Project } from '@/lib/data'

function DetailRow({ label, children }: { label: string; children: string }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] gap-3">
      <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </dd>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>

      <dl className="mt-6 space-y-4">
        <DetailRow label="Problem">{project.problem}</DetailRow>
        <DetailRow label="Solution">{project.solution}</DetailRow>
      </dl>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-4 border-t border-border/60 pt-5">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" aria-hidden="true" />
          Code
        </a>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Live Demo
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
