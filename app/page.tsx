// app/page.tsx
// Orquestación de la bridge page. Server Component puro: arma las secciones en el
// orden CRO exacto. Toda la data sale de config/affiliates.ts.

import { SITE, AFFILIATE_PRODUCTS, COMPARISON_ROWS, FAQS } from '@/config/affiliates'
import OfferBanner from '@/components/OfferBanner'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import AuthorBar from '@/components/AuthorBar'
import ProductGrid from '@/components/ProductGrid'
import UrgencyBanner from '@/components/UrgencyBanner'
import ComparisonTable from '@/components/ComparisonTable'
import FaqSection from '@/components/FaqSection'
import AffiliateFooter from '@/components/AffiliateFooter'

export default function Home() {
  // El #1 alimenta la UrgencyBanner (CTA al top pick). Garantizado por config.
  const topPick = AFFILIATE_PRODUCTS.find((p) => p.isTopPick) ?? AFFILIATE_PRODUCTS[0]

  return (
    <>
      {/* 1. Oferta superior (se auto-omite si no hay promo verificada) */}
      <OfferBanner products={AFFILIATE_PRODUCTS} />

      <main className="min-h-screen bg-surface-base">
        {/* 2. Header con logo, sin navegación */}
        <Header />
        {/* 3. Hero */}
        <HeroSection config={SITE} />
        {/* 4. Trust badges */}
        <TrustBar badges={SITE.trustBadges} />
        {/* 5. Autoría editorial */}
        <AuthorBar config={SITE} />
        {/* 6. Ranking de productos */}
        <ProductGrid products={AFFILIATE_PRODUCTS} />
        {/* 7. Urgencia honesta */}
        <UrgencyBanner topPick={topPick} />
        {/* 8. Tabla comparativa */}
        <ComparisonTable products={AFFILIATE_PRODUCTS} rows={COMPARISON_ROWS} />
        {/* 9. FAQs */}
        <FaqSection faqs={FAQS} />
        {/* 10. Footer con divulgación */}
        <AffiliateFooter config={SITE} />
      </main>
    </>
  )
}
