import { Section, SectionHeading } from '@/components/layout/section'
import { projects } from '@/lib/data'
import { ProjectCard } from './project-card'

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading
        index="02"
        title="Featured Projects"
        description="Selected work that reflects how I approach real engineering problems — from data integrity to AI systems."
      />
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  )
}
