import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
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

        {/* Najpierw oferta – jak na oryginalnej stronie */}
        <Services />

        {/* Sekcja o nas + proces wcześniej, żeby podkreślić studio i zaufanie */}
        <About />
        <Process />

        {/* Realizacje przed cennikiem – jak na oryginale (zachęta wizualna przed rozmową o cenie) */}
        <Gallery />

        {/* Cennik jako orientacja – po pokazaniu wartości */}
        <Pricing />

        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
