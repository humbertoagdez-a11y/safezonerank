// components/Header.tsx
// Header minimalista: solo el logo del sitio. Sin navegación = cero fugas de tráfico
// (regla CRO: un único objetivo por página). Server Component.

import SiteLogo from './SiteLogo'

export default function Header() {
  return (
    <header className="border-b border-zinc-800/50 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center">
        <SiteLogo className="h-8" />
      </div>
    </header>
  )
}
