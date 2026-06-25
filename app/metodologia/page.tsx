// app/metodologia/page.tsx
// Página editorial que explica cómo rankeamos las VPNs. Crítica para la aprobación
// de afiliados: demuestra independencia editorial. Server Component estático.

import type { Metadata } from 'next'
import { SITE } from '@/config/affiliates'
import Header from '@/components/Header'
import AffiliateFooter from '@/components/AffiliateFooter'
import Icon from '@/components/Icon'
import type { IconName } from '@/types'

export const metadata: Metadata = {
  title: `Cómo Evaluamos las VPNs | ${SITE.brand}`,
  description:
    'Nuestra metodología independiente para rankear VPNs: velocidad (30%), privacidad (30%), desbloqueo (25%) y precio (15%). El ranking no se vende.',
  alternates: { canonical: '/metodologia' },
}

interface Criterion {
  icon: IconName
  title: string
  weight: string
  text: string
}

// Criterios de evaluación con su peso. Suman 100%.
const CRITERIA: Criterion[] = [
  {
    icon: 'Zap',
    title: 'Velocidad y rendimiento',
    weight: '30%',
    text: 'Medimos velocidad de descarga y subida, latencia y estabilidad sobre distintos protocolos (WireGuard/NordLynx, Lightway, OpenVPN). Cruzamos nuestros resultados con tests independientes publicados para evitar sesgos de un solo servidor o momento del día.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Privacidad y seguridad',
    weight: '30%',
    text: 'Evaluamos la política de logs y, sobre todo, si fue auditada por un tercero independiente. Revisamos el cifrado, la jurisdicción del proveedor, protección contra fugas DNS/IPv6 y funciones como kill switch. Pesa tanto como la velocidad: una VPN rápida que registra tu actividad no sirve.',
  },
  {
    icon: 'Unlock',
    title: 'Capacidad de desbloqueo',
    weight: '25%',
    text: 'Probamos acceso real a Netflix, Disney+, Prime Video y plataformas regionales desde ubicaciones de LATAM y España. Una VPN puede ser segura y rápida, pero si no abre el catálogo que buscás, baja en el ranking.',
  },
  {
    icon: 'Wallet',
    title: 'Precio y valor',
    weight: '15%',
    text: 'Miramos el costo real del plan óptimo (no el precio gancho del primer mes), la cantidad de dispositivos, la garantía de devolución y qué incluye cada plan. Buen precio sin las tres patas anteriores no alcanza para el top.',
  },
]

export default function MetodologiaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-base px-6 py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Cómo Evaluamos las VPNs en {SITE.brand}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-300">
            Nuestro ranking es <strong className="text-white">independiente</strong>.
            Ningún proveedor paga por su posición ni puede modificarla. Evaluamos
            cada VPN con la misma vara y cuatro criterios ponderados, basados en
            pruebas propias y en evidencia pública verificable. Así llegamos al
            orden que ves en la home.
          </p>

          {/* Criterios con su peso */}
          <h2 className="mt-14 text-2xl font-bold text-white">
            Los 4 criterios de evaluación
          </h2>
          <div className="mt-6 flex flex-col gap-5">
            {CRITERIA.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-zinc-800/50 bg-surface-raised p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Icon name={c.icon} className="h-5 w-5 text-brand" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <span className="ml-auto font-mono text-sm font-bold text-brand">
                    {c.weight}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-zinc-300">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          {/* Transparencia */}
          <h2 className="mt-14 text-2xl font-bold text-white">Transparencia</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            {SITE.brand} se financia con programas de afiliados: si comprás a
            través de nuestros enlaces, podemos recibir una comisión sin costo
            adicional para vos. Esto es importante y lo decimos sin vueltas:{' '}
            <strong className="text-white">
              esa comisión nunca afecta el orden del ranking ni el precio que
              pagás
            </strong>
            . Si una VPN deja de cumplir, baja, pague lo que pague.
          </p>

          {/* Actualización */}
          <h2 className="mt-14 text-2xl font-bold text-white">
            Cómo y cuándo actualizamos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Revisamos el ranking completo <strong className="text-white">cada
            3 meses</strong> y, además, cada vez que hay un cambio relevante de
            precio, una nueva auditoría de seguridad o una caída sostenida de
            rendimiento. La fecha de última actualización siempre está visible en
            la home. Última revisión: {SITE.lastUpdated}.
          </p>

          <div className="mt-14 border-t border-zinc-800/50 pt-8">
            <a
              href="/#ranking"
              className="text-sm font-semibold text-brand transition-colors hover:text-white"
            >
              ← Volver al ranking
            </a>
          </div>
        </article>
      </main>
      <AffiliateFooter config={SITE} />
    </>
  )
}
