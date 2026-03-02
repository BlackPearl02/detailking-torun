'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { testimonials } from '@/lib/content'

export default function Testimonials() {
  const sectionRef = useScrollAnimation<HTMLElement>()
  const shown = testimonials.slice(0, 6)

  return (
    <section ref={sectionRef} className="section-padding bg-surface bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 animate-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand-light mb-2 sm:mb-3 md:mb-4">
            Co mówią o nas klienci
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            Opinie z Google i Facebook – DetailKing Toruń.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {shown.map((t, index) => (
            <div
              key={index}
              className="card animate-on-scroll flex flex-col h-full"
              data-delay={index}
            >
              <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 md:mb-4 flex-1">&ldquo;{t.text}&rdquo;</p>
              <p className="text-[11px] sm:text-xs md:text-sm font-medium text-brand-light">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
