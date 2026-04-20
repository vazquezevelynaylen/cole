
Copy

import { useState } from 'react'
 
/* Layout */
import Header          from '../components/header/Header.jsx'
import Footer          from '../components/footer/Footer.jsx'
import A11yControls    from '../components/a11y/A11yControls.jsx'
 
/* Secciones en orden */
import Hero             from '../components/hero/Hero.jsx'
import HeroShowcase     from '../components/hero/HeroShowcase.jsx'
import Compromiso       from '../components/compromiso/Compromiso.jsx'
import StatsSection     from '../components/stats/StatsSection.jsx'
import Especialidades   from '../components/especialidades/Especialidades.jsx'
import AutoridadesSection   from '../components/autoridades/AutoridadesSection.jsx'
import GaleriaProyectos     from '../components/proyectos/GaleriaProyectos.jsx'
import CalendarioSection    from '../components/calendario/CalendarioSection.jsx'
import TestimoniosSection   from '../components/testimonios/TestimoniosSection.jsx'
import UbicacionSection     from '../components/ubicacion/UbicacionSection.jsx'
 
/* Comunicados */
import ComunicadosTable from '../components/comunicados/ComunicadosTable.jsx'
import Filtros          from '../components/comunicados/Filtros.jsx'
 
/* Estilos compartidos del comunicados-wrap */
import '../components/comunicados/comunicados.css'
 
export default function Home() {
  const [tag, setTag] = useState('all')
 
  return (
    <>
      <Header />
 
      <main id="contenido" tabIndex={-1}>
 
        {/* ─── 1. HERO ──────────────────────────────── */}
        <Hero />
 
        {/* ─── 2. PANELS (TIC / Multimedia / 360°) + ticker ── */}
        <HeroShowcase />
 
        {/* ─── 3. COMPROMISO ──────────────────────── */}
        <Compromiso />
 
        {/* ─── 4. STATS ────────────────────────────── */}
        <StatsSection />
 
        {/* ─── 5. ESPECIALIDADES ───────────────────── */}
        <Especialidades />
 
        {/* ─── 6. AUTORIDADES ──────────────────────── */}
        <AutoridadesSection />
 
        {/* ─── 7. PROYECTOS (galería masonry) ─────── */}
        <GaleriaProyectos />
 
        {/* ─── 8. CALENDARIO ───────────────────────── */}
        <CalendarioSection />
 
        {/* ─── 9. TESTIMONIOS ──────────────────────── */}
        <TestimoniosSection />
 
        {/* ─── 10. COMUNICADOS ─────────────────────── */}
        <section
          id="comunicados"
          aria-labelledby="ttl-comunicados"
          style={{ background: '#111', padding: '100px 40px' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <header className="sec-header">
              <span className="sec-eyebrow">Novedades oficiales</span>
              <h2 className="sec-title" id="ttl-comunicados">Comunicados</h2>
              <p className="sec-subtitle">Información importante de la institución.</p>
            </header>
 
            <div className="comunicados-wrap">
              <div className="com-head">
                <h3 className="com-subtitle">Todos los comunicados</h3>
                <Filtros value={tag} onChange={setTag} />
              </div>
              <ComunicadosTable filter={tag} />
            </div>
          </div>
        </section>
 
        {/* ─── 11. UBICACIÓN ───────────────────────── */}
        <UbicacionSection />
 
      </main>
 
      <Footer />
      <A11yControls />
    </>
  )
}