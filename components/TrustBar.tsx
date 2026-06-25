// components/TrustBar.tsx
// Franja de 3 insignias de confianza. Datos desde SITE.trustBadges. Server Component.

import type { TrustBadge } from '@/types'
import Icon from './Icon'

interface TrustBarProps {
  badges: TrustBadge[]
}

export default function TrustBar({ badges }: TrustBarProps) {
  return (
    <section className="border-y border-zinc-800/50 bg-zinc-900/30 px-6 py-5">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent-muted"
          >
            <Icon name={badge.icon} className="h-4 w-4 text-brand" />
            {badge.label}
          </div>
        ))}
      </div>
    </section>
  )
}
