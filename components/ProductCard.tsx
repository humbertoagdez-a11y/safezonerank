// components/ProductCard.tsx
// Tarjeta de producto. Estructura a→h del brief. Sin datos hardcodeados.
// El #1 (isTopPick) domina: ring con su brandColor (inline), gradiente sutil,
// badge flotante "TOP PICK" y escala ligeramente mayor. Server Component.

import type { AffiliateProduct } from '@/types'
import Icon from './Icon'
import VpnLogo from './VpnLogo'
import CTAButton from './CTAButton'

interface ProductCardProps {
  product: AffiliateProduct
}

// 5 estrellas con relleno proporcional al score (0–5).
function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="Star"
          className={`h-4 w-4 ${
            i < Math.round(score)
              ? 'fill-brand text-brand'
              : 'fill-zinc-700 text-zinc-700'
          }`}
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    rank,
    brandColor,
    badge,
    name,
    tagline,
    price,
    priceLabel,
    score,
    reviewCount,
    savings,
    savingsVerified,
    benefits,
    ctaLabel,
    affiliateUrl,
    isTopPick,
  } = product

  // Acentos del #1: ring + gradiente sutil con el hex de marca (inline, no Tailwind).
  const featuredStyle = isTopPick
    ? {
        boxShadow: `0 0 0 2px ${brandColor}, 0 25px 50px -12px ${brandColor}33`,
        backgroundImage: `linear-gradient(180deg, ${brandColor}14, transparent 40%)`,
      }
    : undefined

  return (
    <article
      style={featuredStyle}
      className={`product-card animate-fade-in-up relative flex flex-col rounded-2xl bg-surface-raised p-8 ${
        isTopPick ? 'lg:scale-[1.03]' : 'ring-1 ring-zinc-800'
      }`}
    >
      {/* Badge flotante TOP PICK (solo #1) */}
      {isTopPick && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white"
          style={{ backgroundColor: brandColor }}
        >
          Top Pick
        </span>
      )}

      {/* a) Logo + badge de autoridad + ranking */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <VpnLogo name={id} className="h-6" />
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-surface-overlay px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-accent-muted">
            {badge}
          </span>
          <span className="font-mono text-sm font-semibold text-accent-muted">
            #{rank}
          </span>
        </div>
      </div>

      {/* b) Score con estrellas + reseñas */}
      <div className="mb-5 flex items-center gap-3">
        <StarRating score={score} />
        <span className="font-mono text-sm text-accent-primary">
          {score.toFixed(1)}
        </span>
        <span className="font-mono text-sm text-accent-muted">
          ({reviewCount.toLocaleString('es-AR')} reseñas)
        </span>
      </div>

      {/* Nombre + tagline */}
      <h3 className="text-xl font-bold text-accent-primary">{name}</h3>
      <p className="mt-1 text-sm italic leading-relaxed text-zinc-400">
        {tagline}
      </p>

      {/* c) Precio */}
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-4xl font-black text-white">{price}</span>
        <span className="text-xs text-zinc-500">{priceLabel}</span>
      </div>

      {/* d) Pill de ahorro — SOLO si la cifra está verificada (conversión honesta). */}
      {savingsVerified && (
        <div className="mt-4">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            {savings}
          </span>
        </div>
      )}

      {/* e) Divisor */}
      <hr className="my-6 border-zinc-800" />

      {/* f) Beneficios con ícono en círculo */}
      <ul className="flex flex-1 flex-col gap-4">
        {benefits.map((benefit) => (
          <li key={benefit.text} className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
              <Icon name={benefit.icon} className="h-4 w-4 text-brand" />
            </span>
            <span className="text-sm leading-relaxed text-accent-muted">
              {benefit.text}
            </span>
          </li>
        ))}
      </ul>

      {/* g) CTA ancho completo (siempre bg-white text-black) */}
      <div className="mt-8">
        <CTAButton label={ctaLabel} href={affiliateUrl} fullWidth external />

        {/* h) Micro-garantías en línea */}
        <p className="mt-3 text-center text-xs text-zinc-500">
          ✓ 30 días garantía · ✓ Sin contrato · ✓ Cancela cuando quieras
        </p>
      </div>
    </article>
  )
}
