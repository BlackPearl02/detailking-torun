'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { pricingIntro, pricingItems } from '@/lib/content'
import Link from 'next/link'

export default function Pricing() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="cennik" ref={sectionRef} className="section-padding bg-surface-dark bg-texture-romby">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-18 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-3 sm:mb-4">
            Cennik
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            {pricingIntro}
          </p>
        </div>
        <div className="max-w-2xl mx-auto animate-on-scroll" data-delay={1}>
          <div className="bg-panel rounded-2xl shadow-soft overflow-hidden border border-panel-border">
            <ul className="divide-y divide-panel-border">
              {pricingItems.map((item, index) => (
                <li key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 py-3 sm:py-4 px-4 sm:px-6">
                  <span className="text-brand-light font-medium text-sm sm:text-base">{item.name}</span>
                  <span className="text-gray-400 text-sm sm:text-base sm:text-right">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link href="/" className="btn-primary w-full sm:w-auto inline-flex" onClick={(e) => { e.preventDefault(); document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              Zapytaj o wycenę
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
