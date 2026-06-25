// components/ComparisonTable.tsx
// Tabla comparativa de las 3 VPN. La columna del #1 (NordVPN) se resalta con su
// brandColor (inline, hex arbitrario). Datos desde COMPARISON_ROWS. Server Component.

import type { AffiliateProduct, ComparisonRow } from '@/types'
import Icon from './Icon'
import VpnLogo from './VpnLogo'

interface ComparisonTableProps {
  products: AffiliateProduct[]
  rows: ComparisonRow[]
}

// Renderiza el valor de una celda según el tipo de fila.
function Cell({
  row,
  index,
  product,
}: {
  row: ComparisonRow
  index: number
  product: AffiliateProduct
}) {
  if (row.type === 'logo') {
    return <VpnLogo name={product.id} className="h-6" />
  }

  if (row.type === 'check') {
    const yes = row.values[index] === true
    return yes ? (
      <Icon
        name="Check"
        className="mx-auto h-5 w-5 text-emerald-400"
        aria-label="Sí"
      />
    ) : (
      <Icon
        name="X"
        className="mx-auto h-5 w-5 text-zinc-600"
        aria-label="No"
      />
    )
  }

  return (
    <span className="text-sm font-medium text-accent-primary">
      {String(row.values[index])}
    </span>
  )
}

export default function ComparisonTable({
  products,
  rows,
}: ComparisonTableProps) {
  // Índice de la columna a resaltar (el top pick).
  const featuredIndex = products.findIndex((p) => p.isTopPick)
  const featured = featuredIndex >= 0 ? products[featuredIndex] : undefined

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-accent-primary md:text-3xl">
            Comparación lado a lado
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-accent-muted">
            Lo que de verdad importa, en una sola vista.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center">
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr
                  key={row.label || `logos-${rowIdx}`}
                  className="border-b border-zinc-800/50"
                >
                  {/* Etiqueta de la fila (alineada a la izquierda) */}
                  <th
                    scope="row"
                    className="py-4 pr-4 text-left text-sm font-normal text-accent-muted"
                  >
                    {row.label}
                  </th>

                  {products.map((product, colIdx) => {
                    const isFeatured = colIdx === featuredIndex
                    return (
                      <td
                        key={product.id}
                        className={`px-4 py-4 ${
                          isFeatured ? 'bg-brand/5' : ''
                        }`}
                        // Resalte sutil de la columna del #1 con su color de marca.
                        style={
                          isFeatured
                            ? {
                                boxShadow: `inset 2px 0 0 ${product.brandColor}, inset -2px 0 0 ${product.brandColor}`,
                              }
                            : undefined
                        }
                      >
                        <Cell row={row} index={colIdx} product={product} />
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {featured && (
          <p className="mt-6 text-center text-xs text-zinc-500">
            Columna resaltada: {featured.name}, nuestra elección #1 para 2026.
          </p>
        )}
      </div>
    </section>
  )
}
