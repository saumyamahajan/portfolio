import { cn } from '@/lib/utils'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id?: string
}

export function Section({ id, className, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 border-t border-border/60', className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-8 md:py-28">
        {children}
      </div>
    </section>
  )
}

type SectionHeadingProps = {
  index: string
  title: string
  description?: string
}

export function SectionHeading({
  index,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <span className="font-mono text-xs tracking-widest text-accent-foreground/70">
        <span className="text-accent">{index}</span> / {title.toUpperCase()}
      </span>
      <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  )
}
