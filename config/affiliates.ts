// config/affiliates.ts
// ─────────────────────────────────────────────────────────────────────────────
// ÚNICA FUENTE DE VERDAD. Todo dato de producto, precio, reseña, beneficio,
// comparación, FAQ y enlace de afiliado vive acá. Ningún componente hardcodea
// estos valores.
//
// PARA PRODUCCIÓN (ver resumen al final del build):
//   1. Reemplazá cada `affiliateUrl: '#'` por tu link real de afiliado.
//   2. Verificá precios y, si querés mostrar las pills de ahorro, poné el %
//      real de HOY en `savings` y cambiá `savingsVerified` a true.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  AffiliateProduct,
  ComparisonRow,
  Faq,
  SiteConfig,
} from '@/types'

export const SITE: SiteConfig = {
  brand: 'SafeZoneRank',
  domain: 'safezonerank.com',
  headline:
    'Las 3 VPNs que Usan los que Saben en 2026 (Probadas y Rankeadas)',
  subheadline:
    'Tu proveedor de internet ve todo lo que hacés online. Estos son los únicos servicios que realmente lo impiden.',
  lastUpdated: 'Junio 2026',
  copyrightYear: 2026,
  methodology: 'Metodología independiente',
  affiliateDisclosure:
    'SafeZoneRank participa en programas de afiliados. Cuando hacés clic en los enlaces y realizás una compra, podemos recibir una comisión sin costo adicional para vos. Esto nunca afecta nuestro ranking ni el precio que pagás.',
  // Prueba social mostrada en el hero.
  heroStats: [
    { value: '+14 millones de usuarios protegidos' },
    { value: '137 países disponibles' },
    { value: 'Desde $1.99/mes' },
  ],
  trustBadges: [
    { icon: 'ShieldCheck', label: 'Probadas en LATAM y España' },
    { icon: 'CalendarCheck', label: 'Actualizado Junio 2026' },
    { icon: 'BadgeCheck', label: 'Sin comisiones ocultas' },
  ],
}

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: 'nordvpn',
    rank: 1,
    brandColor: '#4687FF',
    badge: 'Mejor VPN 2026',
    name: 'NordVPN',
    tagline: 'El estándar de oro en privacidad y velocidad',
    price: 'Desde $3.09',
    priceLabel: '/mes · plan 2 años',
    score: 4.9,
    reviewCount: 18420,
    // TODO: VERIFICAR el % real de descuento de hoy antes de poner en true.
    savings: 'Ahorrás 69% vs precio mensual',
    savingsVerified: false,
    guarantee: 'Garantía 30 días',
    benefits: [
      {
        icon: 'Unlock',
        text: 'Desbloqueá Netflix, Disney+ y Prime Video desde cualquier país — 137 países disponibles',
      },
      {
        icon: 'ShieldCheck',
        text: 'Política zero-logs auditada de forma independiente + cifrado post-cuántico 2026',
      },
      {
        icon: 'Zap',
        text: 'Protocolo NordLynx: el más rápido del mercado según pruebas independientes',
      },
    ],
    ctaLabel: 'Obtener NordVPN',
    affiliateUrl: '#', // ← REEMPLAZAR por tu enlace de afiliado de NordVPN
    isTopPick: true,
  },
  {
    id: 'expressvpn',
    rank: 2,
    brandColor: '#DA3940',
    badge: 'Más Rápido',
    name: 'ExpressVPN',
    tagline: 'La más rápida. Auditada. Sin registros.',
    price: 'Desde $2.49',
    priceLabel: '/mes · 2 años + 4 meses gratis',
    score: 4.7,
    reviewCount: 11280,
    // TODO: VERIFICAR el % real de descuento de hoy antes de poner en true.
    savings: 'Ahorrás 78% + 4 meses gratis',
    savingsVerified: false,
    guarantee: 'Garantía 30 días',
    benefits: [
      {
        icon: 'Gauge',
        text: 'Protocolo Lightway propio: reconexión instantánea al cambiar entre WiFi y datos móviles',
      },
      {
        icon: 'Globe',
        text: '105 países · servidores TrustedServer en RAM — nada se guarda al reiniciar',
      },
      {
        icon: 'Laptop',
        text: 'Hasta 14 dispositivos simultáneos en el plan Advanced con 4 meses gratis incluidos',
      },
    ],
    ctaLabel: 'Obtener ExpressVPN',
    affiliateUrl: '#', // ← REEMPLAZAR por tu enlace de afiliado de ExpressVPN
    isTopPick: false,
  },
  {
    id: 'surfshark',
    rank: 3,
    brandColor: '#16C784',
    badge: 'Mejor Precio',
    name: 'Surfshark',
    tagline: 'Dispositivos ilimitados al precio más bajo',
    price: 'Desde $1.99',
    priceLabel: '/mes · 2 años + 3 meses gratis',
    score: 4.6,
    reviewCount: 9640,
    // TODO: VERIFICAR el % real de descuento de hoy antes de poner en true.
    savings: 'Ahorrás 87% + 3 meses gratis',
    savingsVerified: false,
    guarantee: 'Garantía 30 días',
    benefits: [
      {
        icon: 'Infinity',
        text: 'Dispositivos ilimitados con una sola cuenta — cubrís toda la familia sin costo extra',
      },
      {
        icon: 'Wallet',
        text: '$1.99/mes con 3 meses gratis — el precio más bajo del ranking premium',
      },
      {
        icon: 'EyeOff',
        text: 'Bloqueo de anuncios, malware y rastreadores incluido en todos los planes',
      },
    ],
    ctaLabel: 'Obtener Surfshark',
    affiliateUrl: '#', // ← REEMPLAZAR por tu enlace de afiliado de Surfshark
    isTopPick: false,
  },
]

// Filas de la tabla comparativa. El orden de `values` sigue al de AFFILIATE_PRODUCTS:
// [NordVPN, ExpressVPN, Surfshark]. La columna de NordVPN se resalta en el componente.
export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: '', type: 'logo', values: [] },
  {
    label: 'Precio mínimo mensual',
    type: 'text',
    values: ['$3.09', '$2.49', '$1.99'],
  },
  {
    label: 'Dispositivos simultáneos',
    type: 'text',
    values: ['10', '8–14 (Advanced)', 'Ilimitados'],
  },
  {
    label: 'Países disponibles',
    type: 'text',
    values: ['137', '105', '100'],
  },
  {
    label: 'Streaming Netflix + Disney+',
    type: 'check',
    values: [true, true, true],
  },
  {
    label: 'No-logs auditado',
    type: 'check',
    values: [true, true, true],
  },
  {
    label: 'Garantía de devolución',
    type: 'text',
    values: ['30 días', '30 días', '30 días'],
  },
]

export const FAQS: Faq[] = [
  {
    question: '¿Qué es una VPN y por qué necesito una?',
    answer:
      'Una VPN (red privada virtual) cifra tu conexión a internet y oculta tu dirección IP real. Sin ella, tu proveedor de internet puede ver y registrar cada sitio que visitás, y cualquiera en una red pública puede interceptar tus datos. Con una VPN, tu tráfico viaja por un túnel cifrado que ni tu ISP ni terceros pueden leer.',
  },
  {
    question: '¿Cuál es la mejor VPN para ver Netflix desde LATAM?',
    answer:
      'NordVPN es la que mejor desbloquea catálogos en nuestras pruebas: abre Netflix, Disney+ y Prime Video de Estados Unidos y otros países desde Argentina, México o España de forma estable. ExpressVPN y Surfshark también funcionan, pero NordVPN combina velocidad y consistencia para streaming en 4K sin cortes.',
  },
  {
    question: '¿Es legal usar una VPN en Argentina, México o España?',
    answer:
      'Sí, usar una VPN es completamente legal en Argentina, México y España, y en la gran mayoría de los países. Las VPN son herramientas estándar de privacidad y seguridad. Eso sí: usar una VPN no vuelve legal una actividad que de por sí no lo es; lo ilegal sigue siendo ilegal con o sin VPN.',
  },
  {
    question: '¿Conviene pagar mensual o anual?',
    answer:
      'El plan mensual cuesta bastante más por mes y solo conviene si querés probar el servicio por poco tiempo. Los planes de 2 años bajan el precio mensual de forma drástica y suelen incluir meses gratis. Como las tres VPN ofrecen garantía de 30 días, podés tomar el plan largo y pedir reembolso si no te convence.',
  },
  {
    question: '¿Funciona en celular Android e iPhone (iOS)?',
    answer:
      'Sí. Las tres tienen apps nativas para Android e iOS que se instalan en menos de 2 minutos desde la tienda oficial. Una vez instaladas, te conectás con un solo toque y la protección queda activa en segundo plano, también en datos móviles y redes WiFi públicas.',
  },
]
