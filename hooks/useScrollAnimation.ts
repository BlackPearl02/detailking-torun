'use client'

import { useEffect, useRef, RefObject } from 'react'

const observerOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.1,
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(): RefObject<T> {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const children = el.querySelectorAll('.animate-on-scroll')
    children.forEach((child) => observer.observe(child))
    if (el.classList.contains('animate-on-scroll')) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
