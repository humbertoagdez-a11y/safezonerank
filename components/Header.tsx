// components/Header.tsx
// Header con navegación mínima que no rompe el CRO: logo + 2 links editoriales
// (ocultos en mobile) + botón "Ver ranking". Server Component.

import SiteLogo from './SiteLogo'

export default function Header() {
  return (
    <header className="border-b border-zinc-800/50 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="/" aria-label="SafeZoneRank — inicio">
          <SiteLogo className="h-8" />
        </a>

        <nav className="flex items-center gap-6">
          {/* Links editoriales: ocultos en mobile para no robar foco al CTA */}
          <a
            href="/metodologia"
            className="hidden text-sm text-zinc-400 transition-colors hover:text-white md:inline"
          >
            Metodología
          </a>
          <a
            href="/sobre-nosotros"
            className="hidden text-sm text-zinc-400 transition-colors hover:text-white md:inline"
          >
            Sobre nosotros
          </a>
          <a
            href="/#ranking"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-zinc-100"
          >
            Ver ranking →
          </a>
        </nav>
      </div>
    </header>
  )
}
