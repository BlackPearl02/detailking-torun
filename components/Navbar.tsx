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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-x-hidden ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-soft border-b border-panel-border' : 'bg-transparent'
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="container-custom overflow-x-hidden">
        <nav className="flex items-center justify-between h-14 sm:h-16 min-[870px]:h-20">
          <Link
            href="/"
            className="flex items-center shrink-0 text-brand-light hover:text-accent transition-colors min-h-[44px] justify-center md:min-h-0"
            aria-label={`${site.name} – strona główna`}
          >
            <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-tight">
              {site.name}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="min-[870px]:hidden min-w-[44px] min-h-[44px] p-2 rounded-xl text-brand-light hover:bg-panel transition-colors flex items-center justify-center"
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
            className={`absolute top-full left-0 right-0 min-[870px]:static bg-surface border-t border-panel-border min-[870px]:border-0 min-[870px]:bg-transparent shadow-soft-lg min-[870px]:shadow-none max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden ${
              open ? 'block' : 'hidden min-[870px]:block'
            }`}
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <ul className="flex flex-col min-[870px]:flex-row min-[870px]:items-center gap-0 min-[870px]:gap-6 lg:gap-8 py-2 sm:py-4 min-[870px]:py-0 px-2 sm:px-4 min-[870px]:px-0 divide-y divide-panel-border/60 min-[870px]:divide-y-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSectionClick(link.sectionId, e)}
                    className="flex items-center justify-center text-center w-full py-3 sm:py-3.5 px-3 min-[870px]:w-auto min-[870px]:justify-start min-[870px]:text-left min-[870px]:py-0 min-[870px]:px-0 text-gray-300 hover:text-accent transition-colors min-h-[44px] min-[870px]:min-h-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1 pb-2 sm:pt-2 sm:pb-0 min-[870px]:pt-0 min-[870px]:pb-0 min-[870px]:ml-2 lg:ml-4 px-2 sm:px-0">
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="btn-primary text-sm w-full min-[870px]:w-auto text-center py-3 px-6 inline-flex justify-center"
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
