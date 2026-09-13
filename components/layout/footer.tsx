import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'
import { siteConfig } from '@/lib/site'

const socials = [
  { label: 'GitHub', href: siteConfig.social.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: 'Email', href: `mailto:${siteConfig.email}`, Icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-8">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js
          &amp; Tailwind CSS.
        </p>
        <ul className="flex items-center gap-1">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                aria-label={label}
                className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
