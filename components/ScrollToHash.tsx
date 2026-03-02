'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SCROLL_TO_KEY = 'scrollToSection'

export function setScrollToSection(sectionId: string) {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(SCROLL_TO_KEY, sectionId)
  }
}

export default function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/') return
    const sectionId = typeof window !== 'undefined' ? window.sessionStorage.getItem(SCROLL_TO_KEY) : null
    if (!sectionId) return
    window.sessionStorage.removeItem(SCROLL_TO_KEY)
    const scrollToEl = () => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const t = setTimeout(scrollToEl, 150)
    return () => clearTimeout(t)
  }, [pathname])

  return null
}
