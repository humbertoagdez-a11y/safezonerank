// components/OfferBanner.tsx
// Franja superior de oferta. CONVERSIÓN HONESTA: solo se muestra si existe una
// promo REAL y verificada (savingsVerified === true) en el top pick. Si no hay
// promo verificada, el componente no renderiza nada (no inventamos urgencia).

import type { AffiliateProduct } from '@/types'
import Icon from './Icon'

interface OfferBannerProps {
  products: AffiliateProduct[]
}

export default function OfferBanner({ products }: OfferBannerProps) {
  // Buscamos el #1; solo promocionamos su oferta si está verificada.
  const topPick = products.find((p) => p.isTopPick)

  if (!topPick || !topPick.savingsVerified) return null

  return (
    <div
      className="px-6 py-2.5 text-center"
      style={{ backgroundColor: topPick.brandColor }}
    >
      <p className="flex items-center justify-center gap-2 text-sm font-semibold text-white">
        <Icon name="Zap" className="h-4 w-4" />
        {topPick.name}: {topPick.savings} · {topPick.guarantee}
      </p>
    </div>
  )
}
