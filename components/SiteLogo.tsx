// components/SiteLogo.tsx
// Logo del sitio dibujado a mano: escudo con checkmark + wordmark "SafeZoneRank".
// SVG inline (cero requests, cero CLS). Server Component.

import { SITE } from '@/config/affiliates'

interface SiteLogoProps {
  className?: string
}

export default function SiteLogo({ className = 'h-8' }: SiteLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {/* Escudo con check. currentColor permite recolorearlo desde el padre. */}
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={`${SITE.brand} logo`}
        className="h-full w-auto text-brand"
        fill="none"
      >
        <path
          d="M12 2 4 5v6c0 4.4 3.2 8.3 8 9.5 4.8-1.2 8-5.1 8-9.5V5l-8-3Z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="m8.5 12 2.4 2.4L15.8 9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg font-bold tracking-tight text-white">
        {SITE.brand}
      </span>
    </span>
  )
}
