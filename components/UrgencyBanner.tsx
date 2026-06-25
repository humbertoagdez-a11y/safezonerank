// components/UrgencyBanner.tsx
// Urgencia HONESTA: motivos reales y permanentes para proteger la conexión hoy.
// Sin relojes, sin cupos, sin "solo por hoy". CTA al #1. Server Component.

import type { AffiliateProduct, IconName } from '@/types'
import Icon from './Icon'
import CTAButton from './CTAButton'

interface Reason {
  icon: IconName
  title: string
  text: string
}

// Razones verificables y siempre vigentes (no son urgencia falsa).
const REASONS: Reason[] = [
  {
    icon: 'Eye',
    title: 'Tu ISP registra tu actividad',
    text: 'Tu proveedor de internet puede ver y guardar cada sitio que visitás, y en muchos países está obligado a conservar esos registros.',
  },
  {
    icon: 'Wifi',
    title: 'Las redes WiFi públicas exponen tus datos',
    text: 'En cafés, aeropuertos y hoteles, cualquiera en la misma red puede interceptar lo que enviás si tu conexión no está cifrada.',
  },
  {
    icon: 'MapPin',
    title: 'El geobloqueo te limita',
    text: 'Tu ubicación real bloquea catálogos de streaming, precios y servicios que sí están disponibles en otros países.',
  },
]

interface UrgencyBannerProps {
  topPick: AffiliateProduct
}

export default function UrgencyBanner({ topPick }: UrgencyBannerProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-zinc-800/50 bg-zinc-900/40 p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-accent-primary md:text-3xl">
            ¿Por qué proteger tu conexión hoy?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-accent-muted">
            No es por una oferta que vence: es por cómo funciona internet todos
            los días.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {REASONS.map((reason) => (
            <div key={reason.title} className="text-center md:text-left">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/10">
                <Icon name={reason.icon} className="h-5 w-5 text-brand" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-accent-primary">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-accent-muted">
                {reason.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton
            label={`Protegerme con ${topPick.name}`}
            href={topPick.affiliateUrl}
            size="lg"
            external
          />
        </div>
      </div>
    </section>
  )
}
