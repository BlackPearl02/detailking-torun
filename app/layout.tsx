import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToHash from '@/components/ScrollToHash'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DetailKing Toruń | Auto detailing – powłoki ceramiczne, PDR, smart repair',
  description: 'Studio auto detailingu w Toruniu. Auto detailing, powłoki kwarcowe i ceramiczne, usuwanie wgnieceń PDR, smart repair, przyciemnianie szyb, renowacja tapicerek. Kałamarskiego 8/10.',
  keywords: 'auto detailing Toruń, detailing Toruń, powłoka ceramiczna, PDR, smart repair, DetailKing',
  openGraph: {
    title: 'DetailKing Toruń | Auto detailing',
    description: 'Profesjonalny auto detailing w Toruniu. Powłoki ceramiczne, PDR, smart repair.',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased bg-surface text-gray-300">
        <ScrollToHash />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
