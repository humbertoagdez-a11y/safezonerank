// types/index.ts
// Única fuente de tipado de la bridge page. Cero `any`: todo se tipa desde acá.

import type { IconName } from '@/components/Icon'

// Re-exportado para que el resto del proyecto tipe íconos desde '@/types'.
export type { IconName }

// Nombres de marca soportados por el wordmark tipográfico (VpnLogo).
export type VpnName = 'nordvpn' | 'expressvpn' | 'surfshark'

// Insignia de confianza del TrustBar. `icon` es un nombre válido del registry.
export interface TrustBadge {
  icon: IconName
  label: string
}

// Estadística de prueba social mostrada en el hero (ej. "+14 millones…").
export interface HeroStat {
  value: string
}

// Beneficio orientado a resultado, con su propio ícono del registry.
export interface Benefit {
  icon: IconName
  text: string
}

export interface AffiliateProduct {
  id: VpnName
  rank: 1 | 2 | 3
  // Hex arbitrario de la marca (se inyecta inline, no es clase Tailwind).
  brandColor: string
  badge: string
  name: string
  tagline: string
  // Precio y su etiqueta van separados para respetar la jerarquía del card.
  price: string // ej. "Desde $3.09"
  priceLabel: string // ej. "/mes · plan 2 años"
  score: number // 0–5
  reviewCount: number
  // Pill de ahorro. Solo se renderiza si `savingsVerified` es true.
  savings: string
  savingsVerified: boolean
  guarantee: string
  // Exactamente 3 beneficios, cada uno con su ícono.
  benefits: [Benefit, Benefit, Benefit]
  ctaLabel: string
  // ÚNICO lugar donde vive el enlace de afiliado.
  affiliateUrl: string
  isTopPick: boolean
}

// Tipos de celda de la tabla comparativa.
// 'logo' renderiza el VpnLogo de cada producto; 'check' un tilde/cruz; 'text' texto.
export type ComparisonValueType = 'logo' | 'text' | 'check'

export interface ComparisonRow {
  label: string
  type: ComparisonValueType
  // Una entrada por producto, en el mismo orden que AFFILIATE_PRODUCTS.
  // - 'logo'  → ignora `values` (usa el id del producto)
  // - 'text'  → string a mostrar
  // - 'check' → true (sí) | false (no)
  values: Array<string | boolean>
}

export interface Faq {
  question: string
  answer: string
}

// Identidad y copy global del sitio. Leída por header, hero, footer, etc.
export interface SiteConfig {
  brand: string
  domain: string
  headline: string
  subheadline: string
  lastUpdated: string
  copyrightYear: number
  methodology: string
  contactEmail: string
  affiliateDisclosure: string
  heroStats: [HeroStat, HeroStat, HeroStat]
  trustBadges: [TrustBadge, TrustBadge, TrustBadge]
}
