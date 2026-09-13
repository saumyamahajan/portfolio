import { Section, SectionHeading } from '@/components/layout/section'

const facts = [
  { label: 'Focus', value: 'Backend & AI systems' },
  { label: 'Core', value: 'Java · Spring Boot · Python' },
  { label: 'Data', value: 'PostgreSQL · MySQL' },
  { label: 'Approach', value: 'Reliability over flash' },
]

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="05" title="About" />
      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a software engineer who cares about the parts of software
            that users never see but always feel — correctness, latency, and
            systems that keep working under pressure. Most of my work lives in
            the backend: designing APIs, modeling data, and making services
            resilient.
          </p>
          <p>
            My primary toolkit is Java and Spring Boot for services, Python for
            tooling and AI work, and PostgreSQL as the source of truth. Lately
            I&apos;ve been going deep on LLM applications, retrieval-augmented
            generation, and the distributed-systems patterns behind them.
          </p>
          <p>
            I care about engineering quality as much as shipping: readable code,
            clear boundaries, and systems the next engineer can reason about. I
            like solving real problems and I&apos;m always learning something
            one layer deeper.
          </p>
        </div>

        <dl className="space-y-4">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-4"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
                {fact.label}
              </dt>
              <dd className="text-right text-sm text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
