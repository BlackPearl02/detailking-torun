'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { contact, site } from '@/lib/content'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const sectionRef = useScrollAnimation<HTMLElement>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Formularz w wersji demo. W produkcji podłącz backend lub mailto.')
  }

  const mapUrl = 'https://www.google.com/maps/place/Paw%C5%82a+Ka%C5%82amarskiego+8,+87-100+Toru%C5%84'

  return (
    <section id="kontakt" ref={sectionRef} className="section-padding bg-panel bg-texture-subtle">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-18 animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-light mb-3 sm:mb-4">
            {contact.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-1 sm:px-0">
            {contact.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="animate-on-scroll order-2 lg:order-1 space-y-6" data-delay={0}>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-semibold text-brand-light mb-3 sm:mb-4">Adres studia</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-2">{site.address}</p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors text-sm font-medium">
                Wyznacz trasę →
              </a>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-semibold text-brand-light mb-2">Telefon</h3>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="text-brand-light font-medium hover:text-accent transition-colors">
                {site.phone} {site.phoneLabel && `(${site.phoneLabel})`}
              </a>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-heading font-semibold text-brand-light mb-2">Email</h3>
              <a href={`mailto:${site.email}`} className="text-brand-light font-medium hover:text-accent transition-colors">
                {site.email}
              </a>
            </div>
          </div>
          <div className="animate-on-scroll" data-delay={1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-light mb-1">
                  {contact.formName} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-light mb-1">
                  {contact.formPhone} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-light mb-1">
                  {contact.formEmail} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-light mb-1">
                  {contact.formMessage} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full min-h-[48px] sm:min-h-[44px]">
                {contact.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
