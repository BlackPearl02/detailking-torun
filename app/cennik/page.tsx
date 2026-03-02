import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'

export const metadata: Metadata = {
  title: 'Cennik | DetailKing Toruń',
  description: 'Cennik usług auto detailingu – mycie premium, korekta lakieru, powłoki ceramiczne Gyeon, PDR, oklejanie PPF. Ceny brutto.',
}

export default function CennikPage() {
  return (
    <>
      <Navbar />
      <main>
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
