'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { about } from '@/lib/content'

const brands = ['Gyeon', '4 nano', 'CarbonQ', 'Rupes', 'Flexishield', '3M']

export default function About() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section ref={sectionRef} className="section-padding bg-surface bg-texture-subtle">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3 animate-on-scroll px-1 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-4 sm:mb-6">
              {about.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              {about.body}
            </p>
          </div>
          <div className="lg:col-span-2 animate-on-scroll" data-delay={1}>
            <h3 className="text-sm font-heading font-semibold text-accent uppercase tracking-wider mb-3">Marki i sprzęt</h3>
            <ul className="flex flex-wrap gap-2">
              {brands.map((b) => (
                <li key={b} className="px-3 py-1.5 rounded-xl bg-panel border border-panel-border text-gray-400 text-sm">
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
