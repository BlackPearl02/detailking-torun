'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { serviceSections, type ServiceItem } from '@/lib/content'

function ServiceCard({ item, delay }: { item: ServiceItem; delay: number }) {
  return (
    <div
      className="animate-on-scroll h-full flex flex-col rounded-xl sm:rounded-2xl border border-panel-border bg-panel/80 p-4 sm:p-5 md:p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-soft group"
      data-delay={delay}
    >
      <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">
        <span className="shrink-0 w-1 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" aria-hidden />
        <div className="min-w-0 flex-1 flex flex-col">
          <h3 className="text-sm sm:text-base md:text-lg font-heading font-semibold text-brand-light mb-1.5 sm:mb-2 shrink-0">
            {item.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-auto">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const sectionRef = useScrollAnimation<HTMLElement>()

  return (
    <section id="uslugi" ref={sectionRef} className="section-padding bg-panel bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 animate-on-scroll">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-brand-light mb-2 sm:mb-3 md:mb-4">
            Oferta
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            Kompleksowe usługi auto detailingu w studiu w Toruniu – od mycia i powłok ceramicznych po naprawy karoserii i oklejanie folią PPF.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
          {serviceSections.map((block, blockIndex) => (
            <div key={blockIndex} className="animate-on-scroll" data-delay={Math.min(blockIndex, 2)}>
              <h3 className="text-accent font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 md:mb-6 px-1">
                {block.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {block.items.map((item, itemIndex) => (
                  <ServiceCard
                    key={itemIndex}
                    item={item}
                    delay={Math.min(blockIndex * 2 + itemIndex, 5)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
