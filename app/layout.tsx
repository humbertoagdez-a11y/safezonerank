// app/layout.tsx
// Root layout: metadata SEO completa + tipografías via next/font (sin <link> externo).

import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { SITE } from '@/config/affiliates'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const SITE_URL = `https://${SITE.domain}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Mejores VPN 2026 | ${SITE.brand} · Top 3 Probadas en LATAM y España`,
  description:
    'Ranking de las 3 mejores VPN de 2026 para desbloquear contenido y proteger tu privacidad. Probadas en LATAM y España. Precios y reseñas verificadas.',
  keywords: [
    'mejor vpn 2026',
    'vpn latam',
    'vpn españa',
    'nordvpn',
    'expressvpn',
    'surfshark',
    'desbloquear netflix',
    'vpn argentina',
    'vpn méxico',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Las 3 Mejores VPN de 2026 (Probadas y Rankeadas)',
    description:
      'Tu proveedor de internet ve todo lo que hacés online. Estas son las VPN que realmente lo impiden.',
    url: SITE_URL,
    siteName: SITE.brand,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las 3 Mejores VPN de 2026 (Probadas y Rankeadas)',
    description:
      'Ranking de las 3 mejores VPN para proteger tu privacidad y desbloquear contenido.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="bg-surface-base font-sans text-accent-primary antialiased">
        {children}
      </body>
    </html>
  )
}
