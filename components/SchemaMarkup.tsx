// components/SchemaMarkup.tsx
// JSON-LD (WebSite + Organization) para SEO y verificación de bots de afiliados.
// Server Component: inyecta un <script type="application/ld+json"> en el documento.

import type { SiteConfig } from '@/types'

interface SchemaMarkupProps {
  config: SiteConfig
  contactEmail: string
}

export default function SchemaMarkup({ config, contactEmail }: SchemaMarkupProps) {
  const siteUrl = `https://${config.domain}`

  // @graph agrupa varias entidades en un único bloque JSON-LD.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: config.brand,
        url: siteUrl,
        description:
          'Reviews y ranking independiente de VPNs para LATAM y España.',
        inLanguage: 'es',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: config.brand,
        url: siteUrl,
        description:
          'Equipo editorial independiente especializado en privacidad digital y análisis de VPNs.',
        contactPoint: {
          '@type': 'ContactPoint',
          email: contactEmail,
          contactType: 'editorial',
          availableLanguage: ['es'],
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // El contenido es estático y generado por nosotros: no hay riesgo de inyección.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
