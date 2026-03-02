 'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { services } from '@/lib/content'

export default function Services() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="uslugi" ref={sectionRef} className="section-padding bg-panel bg-texture-romby">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-18 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-3 sm:mb-4">
            Oferta
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            Pełen zakres usług auto detailingu w studiu DetailKing Toruń.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((item, index) => (
            <div key={index} className="card animate-on-scroll h-full flex flex-col" data-delay={Math.min(index, 5)}>
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-brand-light mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
