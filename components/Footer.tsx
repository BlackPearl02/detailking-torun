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
    <footer className="bg-surface-dark bg-texture-subtle border-t border-panel-border text-gray-500 py-8 sm:py-10" style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom))' }}>
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
          <p className="text-xs sm:text-sm text-center sm:text-left order-2 sm:order-1">
            &copy; {year} {site.name}. Profesjonalny auto detailing Toruń.
          </p>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm order-1 sm:order-2">
            <Link href="/" onClick={(e) => handleSectionClick('uslugi', e)} className="hover:text-accent transition-colors py-2 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0">Oferta</Link>
            <Link href="/" onClick={(e) => handleSectionClick('realizacje', e)} className="hover:text-accent transition-colors py-2 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0">Realizacje</Link>
            <Link href="/cennik" className="hover:text-accent transition-colors py-2 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0">Cennik</Link>
            <Link href="/" onClick={(e) => handleSectionClick('kontakt', e)} className="hover:text-accent transition-colors py-2 min-h-[44px] flex items-center justify-center sm:min-h-0 sm:py-0">Kontakt</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
