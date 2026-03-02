'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { pricingIntro, pricingSections, type PricingRow } from '@/lib/content'
import { setScrollToSection } from '@/components/ScrollToHash'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function PriceCell({ row }: { row: PricingRow }) {
  if (row.onePrice) {
    return (
      <>
        <td className="py-3 px-3 sm:px-4 text-accent font-medium text-sm text-right whitespace-nowrap align-top">{row.onePrice}</td>
        <td className="py-3 px-3 sm:px-4 text-accent font-medium text-sm text-right whitespace-nowrap align-top">{row.onePrice}</td>
        <td className="py-3 px-3 sm:px-4 text-accent font-medium text-sm text-right whitespace-nowrap align-top">{row.onePrice}</td>
      </>
    )
  }
  return (
    <>
      <td className="py-3 px-3 sm:px-4 text-accent font-medium text-sm text-right whitespace-nowrap align-top">{row.small ?? '—'}</td>
      <td className="py-3 px-3 sm:px-4 text-accent font-medium text-sm text-right whitespace-nowrap align-top">{row.van ?? '—'}</td>
      <td className="py-3 px-3 sm:px-4 text-accent font-medium text-sm text-right whitespace-nowrap align-top">{row.bus ?? '—'}</td>
    </>
  )
}

export default function Pricing() {
  const sectionRef = useScrollAnimation<HTMLElement>()
  const pathname = usePathname()

  const handleWycenęClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setScrollToSection('kontakt')
    }
  }

  return (
    <section id="cennik" ref={sectionRef} className="section-padding bg-surface-dark bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-light mb-2 sm:mb-3">
            Cennik
          </h2>
          <p className="text-base text-gray-400">
            {pricingIntro}
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {pricingSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-on-scroll" data-delay={Math.min(sectionIndex, 2)}>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-brand-light mb-4 px-1">
                {section.title}
              </h3>
              <div className="bg-panel rounded-2xl shadow-soft overflow-hidden border border-panel-border overflow-x-auto">
                <table className="w-full min-w-[560px]">
                  <thead>
                    <tr className="border-b border-panel-border bg-panel-light/50">
                      <th className="text-left py-3 px-3 sm:px-4 text-sm font-semibold text-brand-light">Usługa</th>
                      <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-brand-light whitespace-nowrap">Osobowe małe / średnie</th>
                      <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-brand-light whitespace-nowrap">Duże SUV / VAN</th>
                      <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-brand-light whitespace-nowrap">BUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-panel-border/80 last:border-0 hover:bg-panel-light/20 transition-colors">
                        <td className="py-3 px-3 sm:px-4">
                          <span className="text-brand-light text-sm sm:text-base block">{row.name}</span>
                          {row.note && (
                            <span className="text-gray-500 text-xs mt-0.5 block">{row.note}</span>
                          )}
                        </td>
                        <PriceCell row={row} />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-6 px-1 text-center">
          * Ceny brutto.
        </p>
        <div className="mt-6 sm:mt-8 text-center">
          <Link href="/" className="btn-primary w-full sm:w-auto inline-flex" onClick={handleWycenęClick}>
            Zapytaj o wycenę
          </Link>
        </div>
      </div>
    </section>
  )
}
