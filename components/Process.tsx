'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { processSteps } from '@/lib/content'

export default function Process() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="proces" ref={sectionRef} className="section-padding bg-surface-dark bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 animate-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand-light mb-2 sm:mb-3 md:mb-4">
            Jak działamy
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            Prosty proces. Profesjonalny efekt.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 bg-panel-border" style={{ left: '12.5%', right: '12.5%' }} aria-hidden />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8 lg:gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="text-center animate-on-scroll group relative"
                data-delay={item.step - 1}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-accent text-surface-dark flex items-center justify-center text-base sm:text-lg md:text-xl font-heading font-bold mx-auto mb-2.5 sm:mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-heading font-semibold text-brand-light mb-1 sm:mb-1.5 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-[16rem] sm:max-w-xs mx-auto">
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
