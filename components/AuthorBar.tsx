// components/AuthorBar.tsx
// Franja de autoría/credibilidad. Avatar "SR" + revisión editorial + metodología.
// Datos desde SiteConfig. Server Component.

import type { SiteConfig } from '@/types'
import Icon from './Icon'

interface AuthorBarProps {
  config: SiteConfig
}

export default function AuthorBar({ config }: AuthorBarProps) {
  const { brand, lastUpdated, methodology } = config

  // Iniciales del sitio para el avatar (ej. "SafeZoneRank" → "SR").
  const initials = brand.replace(/[^A-Z]/g, '').slice(0, 2) || brand.slice(0, 2)

  return (
    <section className="px-6 py-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-accent-primary"
            aria-hidden="true"
          >
            {initials}
          </span>
          <p className="text-sm text-accent-muted">
            Revisado por el equipo editorial de {brand} · {lastUpdated}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-accent-muted">
          <Icon name="ShieldCheck" className="h-4 w-4 text-brand" />
          {methodology}
        </div>
      </div>
    </section>
  )
}
