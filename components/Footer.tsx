'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { setScrollToSection } from '@/components/ScrollToHash'
import { site } from '@/lib/content'

export default function Footer() {
  const pathname = usePathname()
  const year = new Date().getFullYear()

  const handleSectionClick = (sectionId: string | null, e: React.MouseEvent) => {
    if (!sectionId) return
    if (pathname === '/') {
      e.preventDefault()
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setScrollToSection(sectionId)
    }
  }

  return (
    <footer className="bg-surface-dark bg-texture-subtle border-t border-panel-border text-gray-500 py-6 sm:py-8 md:py-10" style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}>
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 md:gap-6 lg:gap-8">
          <p className="text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1 max-w-[90vw] sm:max-w-none">
            &copy; {year} {site.name}. Profesjonalny auto detailing Toruń.
          </p>
          <nav className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 lg:gap-8 text-xs sm:text-sm order-1 sm:order-2">
            <Link href="/" onClick={(e) => handleSectionClick('uslugi', e)} className="hover:text-accent transition-colors py-2.5 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0 touch-manipulation">Oferta</Link>
            <Link href="/" onClick={(e) => handleSectionClick('realizacje', e)} className="hover:text-accent transition-colors py-2.5 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0 touch-manipulation">Realizacje</Link>
            <Link href="/cennik" className="hover:text-accent transition-colors py-2.5 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0 touch-manipulation">Cennik</Link>
            <Link href="/" onClick={(e) => handleSectionClick('kontakt', e)} className="hover:text-accent transition-colors py-2.5 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0 touch-manipulation">Kontakt</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
