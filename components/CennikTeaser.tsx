'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Link from 'next/link'

export default function CennikTeaser() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="cennik" ref={sectionRef} className="section-padding bg-surface-dark bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto animate-on-scroll px-1 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-brand-light mb-2 sm:mb-3 md:mb-4">
            Cennik usług
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-5 sm:mb-6 md:mb-8">
            Mycie detailingowe, korekta lakieru, powłoki ceramiczne Gyeon, pranie tapicerki, PDR, oklejanie PPF i inne – ceny zależne od rodzaju pojazdu. Pełna lista z cenami brutto na osobnej stronie.
          </p>
          <Link href="/cennik" className="btn-primary inline-flex text-sm sm:text-base w-full sm:w-auto justify-center touch-manipulation">
            Zobacz pełny cennik
          </Link>
        </div>
      </div>
    </section>
  )
}
