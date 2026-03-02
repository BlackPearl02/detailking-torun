'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { testimonials } from '@/lib/content'

export default function Testimonials() {
  const sectionRef = useScrollAnimation<HTMLElement>()
  const shown = testimonials.slice(0, 6)

  return (
    <section ref={sectionRef} className="section-padding bg-surface bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-18 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-3 sm:mb-4">
            Co mówią o nas klienci
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            Opinie z Google i Facebook – DetailKing Toruń.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {shown.map((t, index) => (
            <div
              key={index}
              className="card animate-on-scroll flex flex-col h-full"
              data-delay={index}
            >
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 flex-1">&ldquo;{t.text}&rdquo;</p>
              <p className="text-xs sm:text-sm font-medium text-brand-light">{t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
