// components/ProductGrid.tsx
// Grid de los 3 productos con fade-in escalonado. Ancla #ranking para el scroll
// desde el hero. Server Component.

import type { AffiliateProduct } from '@/types'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: AffiliateProduct[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section id="ranking" className="scroll-mt-8 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-bold text-accent-primary md:text-3xl">
            El Ranking Definitivo
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-accent-muted">
            Comparadas por velocidad, capacidad de desbloqueo y privacidad real.
            Estas son las que recomendamos hoy.
          </p>
        </div>

        {/* items-stretch iguala alturas pese a la escala del top pick. */}
        <div className="grid grid-cols-1 items-stretch gap-8 pt-4 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
