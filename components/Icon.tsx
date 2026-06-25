// components/Icon.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Registry tipado de íconos. Este es el ÚNICO archivo que importa de lucide-react.
// El resto del proyecto usa <Icon name="..." /> con autocompletado y tipado fuerte.
// Para agregar un ícono: importalo y sumalo a ICON_REGISTRY. `IconName` se infiere solo.
// ─────────────────────────────────────────────────────────────────────────────

import {
  ShieldCheck,
  CalendarCheck,
  BadgeCheck,
  Star,
  Unlock,
  Zap,
  Gauge,
  Globe,
  Laptop,
  Infinity,
  Wallet,
  EyeOff,
  Eye,
  Wifi,
  MapPin,
  Lock,
  Check,
  X,
  ArrowRight,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react'

const ICON_REGISTRY = {
  ShieldCheck,
  CalendarCheck,
  BadgeCheck,
  Star,
  Unlock,
  Zap,
  Gauge,
  Globe,
  Laptop,
  Infinity,
  Wallet,
  EyeOff,
  Eye,
  Wifi,
  MapPin,
  Lock,
  Check,
  X,
  ArrowRight,
  ChevronDown,
} satisfies Record<string, LucideIcon>

// Nombre válido de ícono: se deriva del registry, sin listas duplicadas.
export type IconName = keyof typeof ICON_REGISTRY

interface IconProps {
  name: IconName
  className?: string
  // Por defecto los íconos son decorativos; quien transmita significado pasa aria-label.
  'aria-label'?: string
}

export default function Icon({
  name,
  className,
  'aria-label': ariaLabel,
}: IconProps) {
  const Glyph = ICON_REGISTRY[name]
  return (
    <Glyph
      className={className}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
    />
  )
}
