'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { processSteps } from '@/lib/content'

export default function Process() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="proces" ref={sectionRef} className="section-padding bg-surface-dark bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-18 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-3 sm:mb-4">
            Jak działamy
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            Prosty proces. Profesjonalny efekt.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 bg-panel-border" style={{ left: '12.5%', right: '12.5%' }} aria-hidden />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="text-center animate-on-scroll group relative"
                data-delay={item.step - 1}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent text-surface-dark flex items-center justify-center text-lg sm:text-xl font-heading font-bold mx-auto mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-brand-light mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
