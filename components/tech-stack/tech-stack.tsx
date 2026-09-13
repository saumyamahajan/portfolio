import { Section, SectionHeading } from '@/components/layout/section'
import { Badge } from '@/components/ui/badge'
import { skillGroups, learningNow } from '@/lib/data'

export function TechStack() {
  return (
    <Section id="stack">
      <SectionHeading
        index="03"
        title="Tech Stack"
        description="The tools I reach for, grouped by where they sit in the stack."
      />

      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-card p-6 md:p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8">
        <h3 className="font-mono text-xs uppercase tracking-widest text-accent-foreground/80">
          Currently Learning
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {learningNow.map((item) => (
            <li key={item}>
              <Badge variant="accent">{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
