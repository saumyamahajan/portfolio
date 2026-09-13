import { Section, SectionHeading } from '@/components/layout/section'
import { experiences } from '@/lib/data'
import { TimelineItem } from './timeline-item'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="01"
        title="Experience"
        description="A track record of designing, shipping, and operating backend systems in production."
      />
      <ol className="space-y-12">
        {experiences.map((experience) => (
          <TimelineItem key={experience.company} experience={experience} />
        ))}
      </ol>
    </Section>
  )
}
