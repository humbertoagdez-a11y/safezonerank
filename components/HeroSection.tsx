// components/HeroSection.tsx
// Above-the-fold. Headline con degradado, prueba social (heroStats) y CTA grande.
// Padding compacto (pt-28 pb-20) para que las cards asomen sin scroll en 1080p.
// Server Component.

import type { SiteConfig } from '@/types'
import CTAButton from './CTAButton'

interface HeroSectionProps {
  config: SiteConfig
}

export default function HeroSection({ config }: HeroSectionProps) {
  const { headline, subheadline, heroStats } = config

  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20">
      {/* Glow decorativo sutil de fondo, sin imágenes (cero CLS). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Degradado sutil blanco→zinc-300 vía bg-clip-text. */}
        <h1 className="animate-fade-in-up bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-4xl font-black tracking-tighter text-transparent md:text-6xl">
          {headline}
        </h1>

        <p className="animate-fade-in-up delay-100 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent-muted md:text-xl">
          {subheadline}
        </p>

        {/* Prueba social: 3 stats con divisores. */}
        <div className="animate-fade-in-up delay-200 mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-accent-muted">
          {heroStats.map((stat, i) => (
            <span key={stat.value} className="flex items-center gap-x-6">
              {i > 0 && (
                <span aria-hidden="true" className="h-4 w-px bg-zinc-700" />
              )}
              {stat.value}
            </span>
          ))}
        </div>

        {/* CTA grande: scroll suave al ranking. */}
        <div className="animate-fade-in-up delay-300 mt-12 flex justify-center">
          <CTAButton label="Ver las 3 VPNs Rankeadas" href="#ranking" size="lg" />
        </div>
      </div>
    </section>
  )
}
