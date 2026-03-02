'use client'

import Link from 'next/link'
import { hero, site } from '@/lib/content'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[80svh] sm:min-h-[85svh] md:min-h-[88vh] lg:min-h-[90vh] flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-28">
      <div className="absolute inset-0 bg-surface-dark" aria-hidden />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1920&q=80')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-surface/60" aria-hidden />
      <div className="relative z-10 container-custom grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
        <div className="px-0 sm:px-2 md:px-4 lg:px-0 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-brand-light mb-3 sm:mb-4 md:mb-6 animate-fade-in-up max-w-xl leading-tight">
            {hero.headline}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-lg animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <Link href="/" className="btn-primary w-full sm:w-auto flex-1 sm:flex-none text-center text-sm sm:text-base" onClick={(e) => { e.preventDefault(); document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              {hero.ctaPrimary}
            </Link>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-outline w-full sm:w-auto flex-1 sm:flex-none text-center text-sm sm:text-base">
              {hero.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="relative aspect-[16/10] sm:aspect-[4/3] md:aspect-[21/9] lg:aspect-auto lg:min-h-[360px] xl:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-soft-lg ring-1 ring-accent/30 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.15s', animationFillMode: 'both' }}>
          <Image
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
            alt="Auto detailing – studio DetailKing Toruń"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
