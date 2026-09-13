import { ArrowUpRight, Mail } from 'lucide-react'
import { Section } from '@/components/layout/section'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

const links = [
  { label: 'Email', href: `mailto:${siteConfig.email}` },
  { label: 'Resume', href: siteConfig.resumeUrl  },
  { label: 'GitHub', href: siteConfig.social.github },
  { label: 'LinkedIn', href: siteConfig.social.linkedin },
]

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent-foreground/70">
            <span className="text-accent">06</span> / CONTACT
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s build something reliable.
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            I&apos;m open to SDE-2 backend and AI engineering roles, as well as
            interesting collaborations. The fastest way to reach me is email.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              render={
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail data-icon="inline-start" aria-hidden="true" />
                  Get in touch
                </a>
              }
            />
          </div>
        </div>

        <ul className="flex flex-col justify-center gap-px overflow-hidden rounded-xl border border-border bg-border">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-4 bg-card px-5 py-4 transition-colors hover:bg-muted/40"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground/70">
                    {link.label}
                  </span>
                </div>
                <ArrowUpRight
                  className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
