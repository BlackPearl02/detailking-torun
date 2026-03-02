'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { about } from '@/lib/content'

export default function About() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section ref={sectionRef} className="section-padding bg-surface-dark bg-texture-romby">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll px-1 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-4 sm:mb-6">
            {about.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            {about.body}
          </p>
        </div>
      </div>
    </section>
  )
}
