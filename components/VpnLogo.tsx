// components/VpnLogo.tsx
// ─────────────────────────────────────────────────────────────────────────────
// WORDMARK TIPOGRÁFICO (uso nominativo defendible). NO reproduce el logotipo de
// marca registrada de ninguna VPN: solo escribe el nombre del producto en su
// color de marca con tipografía bold genérica, como <text> dentro de un SVG.
// ─────────────────────────────────────────────────────────────────────────────

import type { VpnName } from '@/types'

interface WordmarkSpec {
  // El nombre se parte en dos para acentuar la sílaba de marca en su color.
  lead: string
  tail: string
  color: string
}

const WORDMARKS: Record<VpnName, WordmarkSpec> = {
  nordvpn: { lead: 'Nord', tail: 'VPN', color: '#4687FF' },
  expressvpn: { lead: 'Express', tail: 'VPN', color: '#DA3940' },
  surfshark: { lead: 'Surf', tail: 'shark', color: '#16C784' },
}

interface VpnLogoProps {
  name: VpnName
  className?: string
}

export default function VpnLogo({ name, className }: VpnLogoProps) {
  const { lead, tail, color } = WORDMARKS[name]
  const label = `${lead}${tail}`

  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 160 28"
      className={className}
      // Alto controlado por className (ej. h-6); el ancho se ajusta solo.
      preserveAspectRatio="xMinYMid meet"
    >
      <text
        x="0"
        y="21"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        {/* Sílaba líder en color de marca; resto en blanco para legibilidad. */}
        <tspan fill={color}>{lead}</tspan>
        <tspan fill="#f4f4f5">{tail}</tspan>
      </text>
    </svg>
  )
}
