// app/sobre-nosotros/page.tsx
// Página sobre la misión editorial de SafeZoneRank. Server Component estático.

import type { Metadata } from 'next'
import { SITE } from '@/config/affiliates'
import Header from '@/components/Header'
import AffiliateFooter from '@/components/AffiliateFooter'

export const metadata: Metadata = {
  title: `Sobre ${SITE.brand} | Equipo editorial independiente`,
  description:
    'SafeZoneRank ayuda a usuarios de LATAM y España a tomar decisiones informadas sobre privacidad digital. Independientes, con testing real y actualización constante.',
  alternates: { canonical: '/sobre-nosotros' },
}

export default function SobreNosotrosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-base px-6 py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Sobre {SITE.brand}
          </h1>

          <h2 className="mt-12 text-2xl font-bold text-white">Nuestra misión</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Ayudar a usuarios de LATAM y España a tomar decisiones informadas
            sobre privacidad digital. La mayoría de las comparativas de VPNs están
            escritas para vender, no para informar. Nosotros hacemos lo contrario:
            probamos las herramientas, explicamos el porqué de cada conclusión y
            te dejamos elegir con información real.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">Quiénes somos</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Somos un equipo editorial independiente de analistas enfocados en
            privacidad y seguridad en internet. No representamos a ningún
            proveedor de VPN ni dependemos de uno solo: nuestro trabajo es
            evaluar el mercado con criterio propio y mantener el ranking al día
            para la región hispanohablante.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">
            Qué nos diferencia
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-zinc-300">
            <li>
              <strong className="text-white">Independencia.</strong> El ranking
              no se vende. Las comisiones de afiliación no alteran el orden.
            </li>
            <li>
              <strong className="text-white">Testing real.</strong> Probamos
              velocidad, desbloqueo y seguridad desde ubicaciones de LATAM y
              España, no solo desde Estados Unidos o Europa.
            </li>
            <li>
              <strong className="text-white">Actualización constante.</strong>{' '}
              Revisamos todo cada 3 meses y ante cualquier cambio de precio o
              auditoría relevante. Podés ver cómo evaluamos en nuestra{' '}
              <a
                href="/metodologia"
                className="font-semibold text-brand transition-colors hover:text-white"
              >
                metodología
              </a>
              .
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold text-white">Contacto</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            ¿Una corrección, un dato nuevo o una consulta? Escribinos a{' '}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-semibold text-brand transition-colors hover:text-white"
            >
              {SITE.contactEmail}
            </a>
            .
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
