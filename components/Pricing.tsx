'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { pricingIntro, pricingSections, type PricingRow } from '@/lib/content'
import { setScrollToSection } from '@/components/ScrollToHash'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function PriceCell({ row }: { row: PricingRow }) {
  const cellClass = "py-3 px-3 sm:px-4 text-accent font-medium text-sm text-right whitespace-nowrap align-top"
  if (row.onePrice) {
    return (
      <>
        <td className={cellClass}>{row.onePrice}</td>
        <td className={cellClass}>{row.onePrice}</td>
        <td className={cellClass}>{row.onePrice}</td>
      </>
    )
  }
  return (
    <>
      <td className={cellClass}>{row.small ?? '—'}</td>
      <td className={cellClass}>{row.van ?? '—'}</td>
      <td className={cellClass}>{row.bus ?? '—'}</td>
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
        <div className="text-center mb-6 sm:mb-8 md:mb-10 animate-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-brand-light mb-2 sm:mb-3">
            Cennik
          </h2>
          <p className="text-sm sm:text-base text-gray-400 px-1">
            {pricingIntro}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {pricingSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="animate-on-scroll" data-delay={Math.min(sectionIndex, 2)}>
              <h3 className="text-base sm:text-lg md:text-xl font-heading font-semibold text-brand-light mb-3 sm:mb-4 px-1">
                {section.title}
              </h3>
              <div className="bg-panel rounded-xl sm:rounded-2xl shadow-soft overflow-hidden border border-panel-border mx-2 sm:mx-0 overflow-x-auto">
                <table className="w-full min-w-[560px]">
                  <thead>
                    <tr className="border-b border-panel-border bg-panel-light/50">
                      <th className="text-left py-3 px-3 sm:px-4 text-sm font-semibold text-brand-light sticky left-0 z-10 bg-panel-light/50 shadow-[2px_0_6px_-2px_rgba(0,0,0,0.2)]">Usługa</th>
                      <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-brand-light whitespace-nowrap bg-panel-light/50">Osobowe małe / średnie</th>
                      <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-brand-light whitespace-nowrap bg-panel-light/50">Duże SUV / VAN</th>
                      <th className="text-right py-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold text-brand-light whitespace-nowrap bg-panel-light/50">BUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map((row, rowIndex) => (
                      <tr key={rowIndex} className="border-b border-panel-border/80 last:border-0 hover:bg-panel-light/20 transition-colors">
                        <td className="py-3 px-3 sm:px-4 sticky left-0 z-10 bg-panel shadow-[2px_0_6px_-2px_rgba(0,0,0,0.2)]">
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

        <p className="text-xs text-gray-500 mt-4 sm:mt-6 px-1 text-center">
          * Ceny brutto.
        </p>
        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <Link href="/" className="btn-primary w-full sm:w-auto inline-flex text-sm sm:text-base" onClick={handleWycenęClick}>
            Zapytaj o wycenę
          </Link>
        </div>
      </div>
    </section>
  )
}
