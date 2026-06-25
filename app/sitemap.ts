// app/sitemap.ts
// Sitemap generado automáticamente. Next lo sirve en /sitemap.xml.

import type { MetadataRoute } from 'next'
import { SITE } from '@/config/affiliates'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`
  const lastModified = new Date()

  return [
    { url: base, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    {
      url: `${base}/metodologia`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/sobre-nosotros`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${base}/privacidad`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
