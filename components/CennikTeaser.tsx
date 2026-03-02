'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'

export default function CennikTeaser() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="cennik" ref={sectionRef} className="section-padding bg-surface-dark bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-light mb-3 sm:mb-4">
            Cennik usług
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
            Mycie detailingowe, korekta lakieru, powłoki ceramiczne Gyeon, pranie tapicerki, PDR, oklejanie PPF i inne – ceny zależne od rodzaju pojazdu. Pełna lista z cenami brutto na osobnej stronie.
          </p>
          <Link href="/cennik" className="btn-primary inline-flex">
            Zobacz pełny cennik
          </Link>
        </div>
      </div>
    </section>
  )
}
