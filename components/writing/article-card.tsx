import { ArrowUpRight } from 'lucide-react'
import type { Article } from '@/lib/data'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.href}
      className="group flex flex-col justify-between gap-4 rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40 md:flex-row md:items-center md:gap-8 md:p-7"
    >
      <div className="min-w-0">
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="text-accent">{article.tag}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </div>
        <h3 className="mt-3 text-pretty text-lg font-medium tracking-tight transition-colors group-hover:text-accent-foreground">
          {article.title}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="hidden size-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent/40 group-hover:text-foreground md:grid"
      >
        <ArrowUpRight className="size-4" />
      </span>
    </a>
  )
}
