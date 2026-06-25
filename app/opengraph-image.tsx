// app/opengraph-image.tsx
// Imagen Open Graph (1200x630) generada con ImageResponse (next/og). Se muestra al
// compartir el link en WhatsApp/FB/Telegram. Logo + subheadline sobre fondo zinc-950.

import { ImageResponse } from 'next/og'
import { SITE } from '@/config/affiliates'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${SITE.brand} — ranking independiente de VPNs`

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          padding: '80px',
        }}
      >
        {/* Escudo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <svg width="96" height="96" viewBox="0 0 32 32">
            <path
              d="M16 3 5 7v8c0 5.9 4.3 11 11 12.7C22.7 26 27 20.9 27 15V7L16 3Z"
              fill="#4687FF"
              fillOpacity="0.18"
              stroke="#4687FF"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="m11 16 3.2 3.2L21 12"
              fill="none"
              stroke="#4687FF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: 72, fontWeight: 800, color: '#ffffff' }}>
            {SITE.brand}
          </span>
        </div>

        {/* Subheadline */}
        <p
          style={{
            marginTop: 40,
            maxWidth: 880,
            textAlign: 'center',
            fontSize: 32,
            lineHeight: 1.4,
            color: '#a1a1aa',
          }}
        >
          {SITE.subheadline}
        </p>
      </div>
    ),
    size,
  )
}
