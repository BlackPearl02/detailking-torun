'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { realizacje } from '@/lib/realizacje'
import Image from 'next/image'

export default function Gallery() {
  const sectionRef = useScrollAnimation<HTMLElement>()
  const preview = realizacje.slice(0, 6)

  return (
    <section id="realizacje" ref={sectionRef} className="section-padding bg-panel bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-18 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-3 sm:mb-4">
            Nasze ostatnie realizacje
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            Przykładowe prace ze studia: auto detailing, powłoki ceramiczne, PDR, oklejanie foliami.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {preview.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card animate-on-scroll group min-h-[180px] sm:min-h-0"
              data-delay={Math.min(index, 5)}
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 font-heading font-semibold text-brand-light text-xs sm:text-sm line-clamp-2 drop-shadow-sm">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
