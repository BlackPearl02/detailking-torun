'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { about } from '@/lib/content'

const brands = ['Gyeon', '4 nano', 'CarbonQ', 'Rupes', 'Flexishield', '3M']

export default function About() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section ref={sectionRef} className="section-padding bg-surface bg-texture-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-3 animate-on-scroll px-1 sm:px-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand-light mb-3 sm:mb-4 md:mb-6">
              {about.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              {about.body}
            </p>
          </div>
          <div className="lg:col-span-2 animate-on-scroll" data-delay={1}>
            <h3 className="text-xs sm:text-sm font-heading font-semibold text-accent uppercase tracking-wider mb-2 sm:mb-3">Marki i sprzęt</h3>
            <ul className="flex flex-wrap gap-2 sm:gap-2.5">
              {brands.map((b) => (
                <li key={b} className="px-2.5 sm:px-3 py-1.5 rounded-lg sm:rounded-xl bg-panel border border-panel-border text-gray-400 text-xs sm:text-sm">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
