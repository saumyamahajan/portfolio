import { Badge } from '@/components/ui/badge'
import type { Experience } from '@/lib/data'

export function TimelineItem({ experience }: { experience: Experience }) {
  return (
    <li className="relative pl-8 md:pl-10">
      {/* vertical line */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 h-full w-px bg-border md:left-1"
      />

      {/* company node */}
      <span
        aria-hidden="true"
        className="absolute left-[-3.5px] top-2 size-2 rounded-full bg-accent ring-4 ring-background md:left-[-1.5px]"
      />

      {/* Company */}
      <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-lg font-medium tracking-tight">
          {experience.company}
        </h3>

        <span className="font-mono text-xs text-muted-foreground">
          {experience.period}
        </span>
      </div>

      {experience.location && (
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {experience.location}
        </p>
      )}

      {/* Roles */}
      <div className="mt-6 space-y-8">
        {experience.roles.map((role) => (
          <div key={`${role.role}-${role.period}`}>
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h4 className="font-medium tracking-tight">
                {role.role}
              </h4>

              <span className="font-mono text-xs text-muted-foreground">
                {role.period}
              </span>
            </div>

            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {role.summary}
            </p>

            <ul className="mt-4 space-y-2">
              {role.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-accent/70"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {role.stack.map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </li>
  )
}