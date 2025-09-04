import { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header'
import Subnav from './components/Subnav'
import Hero from './components/Hero'
import Compromiso from './components/Compromiso'
import Especialidades from './components/Especialidades'
import Comunicados from './components/comunicados/Comunicados'
import Footer from './components/Footer'
import A11yControls from './components/A11yControls'
import ModalAviso from './components/ModalAviso'
import { useIntersection } from './hooks/useIntersection'
import { registerSW } from './sw-registration'

export default function App() {
  const heroRef = useRef<HTMLElement | null>(null)
  const isHeroVisible = useIntersection(heroRef, { threshold: 0.02 })
  const isSolid = useMemo(() => !isHeroVisible, [isHeroVisible])

  // Registrar Service Worker
  useEffect(() => { registerSW() }, [])

  return (
    <>
      <Header isSolid={isSolid} />
      <Subnav hidden={!isSolid} />
      <Hero ref={heroRef} />
      <main id="contenido" tabIndex={-1}>
        <h1 className="visually-hidden">E.T. 20 D.E. 20 “Carolina Muzilli”</h1>
        <Compromiso />
        <Especialidades />
        <Comunicados />
        <section id="novedades" style={{ minHeight: 300, padding: '40px 16px' }}>
          <h2>Novedades</h2>
          <p>Próximamente…</p>
        </section>
      </main>
      <Footer />
      <A11yControls />
      <ModalAviso />
    </>
  )
}
