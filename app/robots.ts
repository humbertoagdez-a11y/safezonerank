// app/robots.ts
// robots.txt generado automáticamente. Next lo sirve en /robots.txt.

import type { MetadataRoute } from 'next'
import { SITE } from '@/config/affiliates'

export default function robots(): MetadataRoute.Robots {
  const base = `https://${SITE.domain}`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
