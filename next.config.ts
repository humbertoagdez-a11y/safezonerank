import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    // Formatos modernos para cualquier imagen futura servida via next/image
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Inlinea el CSS crítico. Requiere el paquete `critters` (incluido en devDependencies)
    // para que `next build` funcione. No afecta a `next dev`.
    optimizeCss: true,
  },
}

export default config
