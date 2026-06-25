// components/AffiliateFooter.tsx
// Footer con divulgación de afiliación (obligatoria) leída desde SITE. Server Component.

import type { SiteConfig } from '@/types'

interface AffiliateFooterProps {
  config: SiteConfig
}

export default function AffiliateFooter({ config }: AffiliateFooterProps) {
  const { brand, copyrightYear, affiliateDisclosure } = config

  return (
    <footer className="border-t border-zinc-900 px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
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
