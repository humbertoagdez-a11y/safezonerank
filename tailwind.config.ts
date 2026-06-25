import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          base: '#09090b', // zinc-950 — fondo raíz
          raised: '#18181b', // zinc-900 — tarjetas
          overlay: '#27272a', // zinc-800 — elementos elevados
        },
        accent: {
          primary: '#f4f4f5', // zinc-100 — texto principal
          muted: '#a1a1aa', // zinc-400 — texto secundario
          cta: '#ffffff', // blanco puro — texto en botones
        },
        brand: {
          // Acento de marca. Default elegido para VPN: emerald (seguridad/confianza).
          // Cambiá estos dos valores y toda la página se reacentúa.
          DEFAULT: '#10b981', // emerald-500
          hover: '#059669', // emerald-600
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
