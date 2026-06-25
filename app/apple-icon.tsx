// app/apple-icon.tsx
// Icono para iOS (180x180) generado con ImageResponse (next/og) — sin dependencias
// nativas ni assets binarios. Escudo con checkmark sobre fondo zinc-950.

import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32">
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
      </div>
    ),
    size,
  )
}
