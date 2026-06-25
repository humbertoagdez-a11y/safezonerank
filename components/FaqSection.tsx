'use client'

// components/FaqSection.tsx
// Acordeón de preguntas frecuentes. ÚNICO Client Component del proyecto: necesita
// estado para abrir/cerrar. Datos desde FAQS (config). Accesible con <button>.

import { useState } from 'react'
import type { Faq } from '@/types'
import Icon from './Icon'

interface FaqSectionProps {
  faqs: Faq[]
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  // Índice de la pregunta abierta (-1 = todas cerradas). Primera abierta por defecto.
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-accent-primary md:text-3xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="divide-y divide-zinc-800/50 border-y border-zinc-800/50">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-white"
                  >
                    <span className="text-base font-semibold text-accent-primary">
                      {faq.question}
                    </span>
                    <Icon
                      name="ChevronDown"
                      className={`h-5 w-5 flex-shrink-0 text-accent-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5"
                >
                  <p className="text-sm leading-relaxed text-accent-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
