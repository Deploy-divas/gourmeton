import Header from './components/Header'
import Hero from './components/Hero'
import Presentation from './components/Presentation'
import Features from './components/Features'

import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gourmet-cream">
      <Header />

      <main>
        <Hero />
        <Presentation />
        <Features />

        {/* Adiconar as pŕoximas seções :) */}
        <div id="depoimentos" />
        <div id="contato" />
        <Footer />
      </main>
    </div>
  )
}
