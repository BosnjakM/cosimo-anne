import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import OpeningHours from '@/components/OpeningHours'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <OpeningHours />
      <Location />
      <Contact />
      <Footer />
    </main>
  )
}
