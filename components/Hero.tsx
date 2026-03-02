'use client'

import Link from 'next/link'
import { hero, site } from '@/lib/content'

export default function Hero() {
  return (
    <section className="relative min-h-[85svh] sm:min-h-[88vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/85 via-surface/92 to-surface" aria-hidden />
      <div className="relative z-10 container-custom text-center px-2 sm:px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-brand-light mb-4 sm:mb-6 animate-fade-in-up max-w-4xl mx-auto leading-tight">
          {hero.headline}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center animate-fade-in-up max-w-md sm:max-w-none mx-auto" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <Link href="/" className="btn-primary w-full sm:w-auto flex-1 sm:flex-none" onClick={(e) => { e.preventDefault(); document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
            {hero.ctaPrimary}
          </Link>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline w-full sm:w-auto flex-1 sm:flex-none text-center">
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
