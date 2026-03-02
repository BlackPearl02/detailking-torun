'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { setScrollToSection } from '@/components/ScrollToHash'
import { site } from '@/lib/content'

const navLinks = [
  { href: '/', sectionId: 'uslugi', label: 'Oferta' },
  { href: '/', sectionId: 'cennik', label: 'Cennik' },
  { href: '/', sectionId: 'realizacje', label: 'Realizacje' },
  { href: '/', sectionId: 'proces', label: 'Proces' },
  { href: '/', sectionId: 'kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleSectionClick = (sectionId: string | null, e: React.MouseEvent) => {
    setOpen(false)
    if (!sectionId) return
    if (pathname === '/') {
      e.preventDefault()
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setScrollToSection(sectionId)
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-soft border-b border-panel-border' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link
            href="/"
            className="flex flex-col items-start shrink-0 text-accent hover:text-accent-light transition-colors min-h-[44px] justify-center md:min-h-0"
            aria-label={`${site.name} – strona główna`}
          >
            <span className="font-heading font-bold text-lg sm:text-xl md:text-2xl leading-tight tracking-tight">
              {site.name}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 -mt-0.5">
              {site.tagline}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="text-sm font-medium text-brand-light hover:text-accent transition-colors"
            >
              {site.phone}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden min-w-[44px] min-h-[44px] p-2 rounded-lg text-brand-light hover:bg-panel transition-colors flex items-center justify-center"
            aria-expanded={open}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div
            className={`absolute top-full left-0 right-0 md:static bg-surface border-t border-panel-border md:border-0 md:bg-transparent shadow-soft-lg md:shadow-none max-h-[calc(100vh-4rem)] overflow-y-auto ${
              open ? 'block' : 'hidden md:flex md:items-center md:gap-6 lg:gap-8'
            }`}
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-0 md:gap-6 lg:gap-8 py-2 sm:py-4 md:py-0 px-2 sm:px-4 md:px-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSectionClick(link.sectionId, e)}
                    className="flex items-center py-3 sm:py-3.5 px-3 md:py-0 md:px-0 text-gray-300 hover:text-accent transition-colors min-h-[44px] md:min-h-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1 pb-2 sm:pt-2 sm:pb-0 md:pt-0 md:pb-0 md:ml-2 lg:ml-4 px-2 sm:px-0">
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="btn-primary text-sm w-full sm:w-auto text-center py-3 px-6 inline-flex"
                >
                  Zadzwoń
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
