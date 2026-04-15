import { useState } from 'react'
import Header from '../components/header/Header.jsx'
import Subnav from '../components/nav/Subnav.jsx'
import Hero from '../components/hero/Hero.jsx'
import HeroShowcase from '../components/hero/HeroShowcase.jsx'
import Compromiso from '../components/compromiso/Compromiso.jsx'
import StatsSection from '../components/stats/StatsSection.jsx'
import AutoridadesSection from '../components/autoridades/AutoridadesSection.jsx'
import Especialidades from '../components/especialidades/Especialidades.jsx'
import GaleriaProyectos from '../components/proyectos/GaleriaProyectos.jsx'
import CalendarioSection from '../components/calendario/CalendarioSection.jsx'
import TestimoniosSection from '../components/testimonios/TestimoniosSection.jsx'
import UbicacionSection from '../components/ubicacion/UbicacionSection.jsx'
import ComunicadosTable from '../components/comunicados/ComunicadosTable.jsx'
import Filtros from '../components/comunicados/Filtros.jsx'
import Footer from '../components/footer/Footer.jsx'
import A11yControls from '../components/a11y/A11yControls.jsx'

export default function Home() {
  const [tag, setTag] = useState('all')

  return (
    <>
      <Header />
      <Subnav />
      <main id="contenido" tabIndex={-1}>

        {/* 1 — Hero principal */}
        <Hero />

        {/* 2 — Panels animados (TIC / Multimedia / 360°) + ticker + stats bar */}
        <HeroShowcase />

        {/* 3 — Compromiso institucional rediseñado */}
        <Compromiso />

        {/* 4 — Números que hablan (contador animado) */}
        <StatsSection />

        {/* 5 — Autoridades */}
        <AutoridadesSection />

        {/* 6 — Especialidades (ya existía) */}
        <Especialidades />

        {/* 7 — Galería de proyectos masonry */}
        <GaleriaProyectos />

        {/* 8 — Calendario académico */}
        <CalendarioSection />

        {/* 9 — Testimonios de egresados */}
        <TestimoniosSection />

        {/* 10 — Comunicados (ya existía) */}
        <section id="comunicados" aria-labelledby="ttl-comunicados" style={{ padding: '100px 24px', background: '#111' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <header className="section-eyebrow-header">
              <span className="eyebrow">Novedades oficiales</span>
              <h2 id="ttl-comunicados">Comunicados</h2>
              <p>Información importante de la institución.</p>
            </header>
            <div className="comunicados-wrap" aria-label="Listado de comunicados">
              <div className="com-head">
                <h3 className="com-subtitle">Todos los comunicados</h3>
                <Filtros value={tag} onChange={setTag} />
              </div>
              <ComunicadosTable filter={tag} />
            </div>
          </div>
        </section>

        {/* 11 — Ubicación y mapa */}
        <UbicacionSection />

      </main>
      <Footer />
      <A11yControls />
    </>
  )
}
