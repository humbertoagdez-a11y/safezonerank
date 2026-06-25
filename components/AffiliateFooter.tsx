// components/AffiliateFooter.tsx
// Footer: links legales + divulgación de afiliación (obligatoria) + copyright.
// Toda la identidad sale de SITE. Server Component.

import type { SiteConfig } from '@/types'

interface AffiliateFooterProps {
  config: SiteConfig
}

// Links del footer (rutas internas reales).
const FOOTER_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: '/metodologia', label: 'Metodología' },
  { href: '/sobre-nosotros', label: 'Sobre nosotros' },
  { href: '/privacidad', label: 'Política de privacidad' },
]

export default function AffiliateFooter({ config }: AffiliateFooterProps) {
  const { brand, copyrightYear, affiliateDisclosure } = config

  return (
    <footer className="border-t border-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        {/* Fila de links legales */}
        <nav className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs leading-relaxed text-zinc-500">
          {affiliateDisclosure}
        </p>
        <p className="mt-6 text-xs text-zinc-600">
          © {copyrightYear} {brand} · Todos los precios y valoraciones pueden
          variar. Verificá la oferta vigente en el sitio del proveedor.
        </p>
      </div>
    </footer>
  )
}
