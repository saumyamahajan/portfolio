import { ArrowRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'
import { siteConfig } from '@/lib/site'
import { TechBadges } from './tech-badges'

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="mx-auto w-full max-w-5xl px-6 md:px-8">
        <div className="flex items-center gap-2.5">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            {siteConfig.targetRoles.toUpperCase()}
          </span>
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Building scalable backends and AI-powered software.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {"I'm "}
          <span className="text-foreground">{siteConfig.name}</span>, a{' '}
          {siteConfig.role.toLowerCase()} focused on distributed systems,
          developer tools, and modern AI. My core expertise is Java, Spring
          Boot, Python, REST APIs, and SQL — and I enjoy turning
          real-world engineering problems into reliable systems.
        </p>

        <div className="mt-8">
          <TechBadges />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            size="lg"
            render={
              <a href="#work">
                View Work
                <ArrowRight data-icon="inline-end" aria-hidden="true" />
              </a>
            }
          />
          <Button
            size="lg"
            variant="outline"
            render={
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileText data-icon="inline-start" aria-hidden="true" />
                Resume
              </a>
            }
          />
          <Button
            size="lg"
            variant="ghost"
            render={
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
              >
                <GithubIcon data-icon="inline-start" aria-hidden="true" />
                GitHub
              </a>
            }
          />
          <Button
            size="lg"
            variant="ghost"
            render={
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon data-icon="inline-start" aria-hidden="true" />
                LinkedIn
              </a>
            }
          />
        </div>
      </div>
    </section>
  )
}
