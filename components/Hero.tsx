'use client'

import Link from 'next/link'
import { hero, site } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 bg-gradient-to-b from-surface-dark via-black to-surface">
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase text-brand-light/80 animate-fade-in-up">
            Studio auto detailingu w Toruniu
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-light mb-5 sm:mb-6 animate-fade-in-up leading-tight">
            {hero.headline}
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-9 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            {hero.subheadline}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
          >
            <Link
              href="/"
              className="btn-primary w-full sm:w-auto sm:min-w-[180px]"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('kontakt')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              {hero.ctaPrimary}
            </Link>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="btn-outline w-full sm:w-auto sm:min-w-[180px] text-center"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p
            className="mt-6 text-xs sm:text-sm text-gray-500 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            Studio przy{' '}
            <span className="text-brand-light font-medium">{site.address}</span>. Powłoki ceramiczne,
            PDR, smart repair i kompleksowy auto detailing w jednym miejscu.
          </p>
        </div>
      </div>
    </section>
  )
}
