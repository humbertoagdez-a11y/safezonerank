// app/privacidad/page.tsx
// Política de privacidad mínima real. Server Component estático.

import type { Metadata } from 'next'
import { SITE } from '@/config/affiliates'
import Header from '@/components/Header'
import AffiliateFooter from '@/components/AffiliateFooter'

export const metadata: Metadata = {
  title: `Política de Privacidad | ${SITE.brand}`,
  description:
    'Cómo trata SafeZoneRank tus datos: no almacenamos datos personales. Información sobre cookies de terceros, enlaces de afiliado y ley aplicable (España/UE).',
  alternates: { canonical: '/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-surface-base px-6 py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            Política de Privacidad
          </h1>
          <p className="mt-6 text-sm text-zinc-500">
            Última actualización: {SITE.lastUpdated}
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">
            Qué datos recogemos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            {SITE.brand} no solicita ni almacena datos personales propios. No
            tenemos formularios de registro, no pedimos tu nombre ni tu correo
            para navegar el sitio, y no construimos perfiles de usuario. Tu
            navegación por nuestras páginas es anónima de nuestro lado.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">
            Cookies de terceros
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Aunque nosotros no instalamos cookies de seguimiento propias, los
            servicios de terceros que enlazamos (los proveedores de VPN y sus
            programas de afiliados) pueden colocar cookies en tu navegador cuando
            hacés clic en sus enlaces, para atribuir la visita. Esas cookies se
            rigen por las políticas de privacidad de cada proveedor. Podés
            bloquearlas o eliminarlas desde la configuración de tu navegador.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">
            Enlaces de afiliado
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Este sitio contiene enlaces de afiliado. Si comprás a través de
            ellos, podemos recibir una comisión sin costo adicional para vos.
            Esto no afecta nuestro ranking ni el precio que pagás. Lo explicamos
            en detalle en nuestra{' '}
            <a
              href="/metodologia"
              className="font-semibold text-brand transition-colors hover:text-white"
            >
              metodología
            </a>
            .
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">
            Ausencia de datos personales almacenados
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            No almacenamos información personal identificable en nuestros
            servidores. Si en el futuro incorporamos analítica agregada y
            anónima, lo reflejaremos en esta página antes de activarla.
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">Contacto</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Por cualquier consulta sobre esta política, escribinos a{' '}
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="font-semibold text-brand transition-colors hover:text-white"
            >
              {SITE.contactEmail}
            </a>
            .
          </p>

          <h2 className="mt-12 text-2xl font-bold text-white">Ley aplicable</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-300">
            Esta política se rige por la normativa de protección de datos de
            España y la Unión Europea (RGPD), cuyo estándar de transparencia
            aplicamos también para nuestros visitantes de Latinoamérica.
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
