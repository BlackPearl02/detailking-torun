'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { setScrollToSection } from '@/components/ScrollToHash'
import { site } from '@/lib/content'

const navLinks = [
  { href: '/', sectionId: 'uslugi', label: 'Oferta' },
  { href: '/cennik', sectionId: null, label: 'Cennik' },
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
        <nav className="flex items-center justify-between h-14 sm:h-16 md:h-[4.25rem] lg:h-20">
          <Link
            href="/"
            className="flex items-center shrink-0 text-brand-light hover:text-accent transition-colors min-h-[44px] min-w-[44px] justify-center sm:min-w-0 md:min-h-0"
            aria-label={`${site.name} – strona główna`}
          >
            <span className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
              {site.name}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden min-w-[44px] min-h-[44px] p-2 rounded-xl text-brand-light hover:bg-panel transition-colors flex items-center justify-center touch-manipulation"
            aria-expanded={open}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div
            className={`absolute top-full left-0 right-0 z-50 lg:static lg:z-auto bg-surface border-t border-panel-border lg:border-0 lg:bg-transparent shadow-soft-lg lg:shadow-none max-h-[calc(100svh-4rem)] overflow-y-auto lg:max-h-none ${
              open ? 'block' : 'hidden lg:block'
            }`}
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-6 xl:gap-8 py-2 sm:py-3 md:py-4 lg:py-0 px-3 sm:px-4 lg:px-0 divide-y divide-panel-border/60 lg:divide-y-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSectionClick(link.sectionId, e)}
                    className="flex items-center justify-center text-center w-full py-3.5 sm:py-4 md:py-4 lg:py-0 lg:w-auto lg:justify-start lg:text-left lg:px-0 text-gray-300 hover:text-accent transition-colors min-h-[48px] sm:min-h-[44px] lg:min-h-0 text-sm sm:text-base touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 pb-3 sm:pt-3 sm:pb-0 lg:pt-0 lg:pb-0 lg:ml-2 xl:ml-4 px-2 sm:px-0">
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="btn-primary text-sm sm:text-base w-full lg:w-auto text-center py-3.5 px-6 inline-flex justify-center touch-manipulation"
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
