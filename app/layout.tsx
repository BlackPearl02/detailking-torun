import type { Metadata, Viewport } from 'next'
import { Outfit, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ScrollToHash from '@/components/ScrollToHash'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

const outfit = Outfit({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DetailKing Toruń | Profesjonalny auto detailing',
  description: 'Detailing Toruń. Studio auto detailingu – powłoki kwarcowe i ceramiczne, Smart Repair, PDR, oklejanie foliami. Gyeon, Rupes, CarbonQ. Pawła Kałamarskiego 8/10.',
  keywords: 'detailing Toruń, auto detailing, powłoka ceramiczna, Smart Repair, PDR, DetailKing',
  openGraph: {
    title: 'DetailKing Toruń | Profesjonalny auto detailing',
    description: 'Zadbane auto to Twój wizerunek. Zapraszamy do studia detailingu w Toruniu.',
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
    <html lang="pl" className={`${outfit.variable} ${sora.variable} dark`}>
      <body className="font-sans antialiased bg-surface text-gray-300">
        <ScrollToHash />
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
