import { cn } from '@/lib/utils'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'accent'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs leading-none tracking-tight transition-colors',
        variant === 'default' &&
          'border-border bg-muted/40 text-muted-foreground',
        variant === 'accent' &&
          'border-accent/30 bg-accent/10 text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}
