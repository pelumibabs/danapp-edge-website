import { ThemeProvider } from './contexts/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Process from './components/Process'
import Values from './components/Values'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface">
        <Navigation />
        <main>
          <Hero />
          <WhyChooseUs />
          <AboutUs />
          <Services />
          <Process />
          <Values />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
