'use client'

import { useEffect, useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, siteConfig } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((item) => item.href.replace('#', ''))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-3 px-4 sm:px-6 md:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
            SM
          </span>
          <span className="hidden text-foreground sm:inline">
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = active === id
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            size="sm"
            variant="outline"
            render={
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <FileText data-icon="inline-start" aria-hidden="true" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            }
          />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
