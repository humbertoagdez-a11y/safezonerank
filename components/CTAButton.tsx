// components/CTAButton.tsx
// Botón CTA reutilizable. Sin estado: es un <a> tipado. Server Component.
// Regla de diseño: el CTA SIEMPRE es bg-white text-black (nunca color de marca).

import Icon from './Icon'

interface CTAButtonProps {
  label: string
  href: string
  // 'lg' = CTA principal del hero (py-5 px-10 text-lg).
  size?: 'md' | 'lg'
  // Para enlaces de afiliado externos abrimos en nueva pestaña con rel seguro.
  external?: boolean
  fullWidth?: boolean
  className?: string
}

export default function CTAButton({
  label,
  href,
  size = 'md',
  external = false,
  fullWidth = false,
  className = '',
}: CTAButtonProps) {
  const base =
    'group inline-flex items-center justify-center rounded-xl font-bold text-black bg-white transition-all duration-200 hover:bg-zinc-100 hover:scale-[1.02] shadow-lg shadow-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

  const sizes: Record<NonNullable<CTAButtonProps['size']>, string> = {
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }

  const width = fullWidth ? 'w-full' : ''

  // rel="sponsored" es lo correcto para enlaces de afiliado de cara a Google.
  const externalProps = external
    ? { target: '_blank', rel: 'sponsored noopener noreferrer' }
    : {}

  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${width} ${className}`}
      {...externalProps}
    >
      {label}
      <Icon
        name="ArrowRight"
        className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      />
    </a>
  )
}
