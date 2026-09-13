import { Badge } from '@/components/ui/badge'

const primaryStack = [
  'Java',
  'Spring Boot',
  'Python',
  'REST APIs',
  'SQL',
  'AWS',
]

export function TechBadges() {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Primary technologies">
      {primaryStack.map((tech) => (
        <li key={tech}>
          <Badge>{tech}</Badge>
        </li>
      ))}
    </ul>
  )
}
