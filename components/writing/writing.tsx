import { Section, SectionHeading } from '@/components/layout/section'
import { articles } from '@/lib/data'
import { ArticleCard } from './article-card'

export function Writing() {
  return (
    <Section id="writing">
      <SectionHeading
        index="04"
        title="Writing"
        description="Technical notes, observations, and things I've found worth writing down."
      />
      <div className="grid gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
    </Section>
  )
}
