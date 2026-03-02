import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CennikTeaser from '@/components/CennikTeaser'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CennikTeaser />
        <About />
        <Gallery />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
