import { useState } from 'react'

/* Layout */
import Header          from '../components/header/Header_v2.jsx'
import Footer          from '../components/footer/Footer_v2.jsx'
import A11yControls    from '../components/a11y/A11yControls.jsx'

/* Secciones principales en orden estilo Woodhouse */
import Hero                from '../components/hero/Hero_v2.jsx'
import HeroShowcase        from '../components/hero/HeroShowcase_v2.jsx'
import CompromisoSection   from '../components/compromiso/Compromiso.jsx' // Ajustar extensión/nombre exacto si difiere
import Especialidades      from '../components/especialidades/Especialidades.jsx'
import GaleriaProyectos    from '../components/proyectos/GaleriaProyectos.jsx'
import AutoridadesSection  from '../components/autoridades/AutoridadesSection.jsx'
import TestimoniosSection  from '../components/Testimonios/TestimoniosSection.jsx'

/* Secciones de apoyo y novedades */
import StatsSection        from '../components/stats/StatsSection.jsx'
import CalendarioSection   from '../components/Calendario/CalendarioSection.jsx'
import UbicacionSection    from '../components/Ubicacion/UbicacionSection.jsx'

/* Comunicados */
import ComunicadosTable    from '../components/comunicados/ComunicadosTable.jsx'
import Filtros             from '../components/comunicados/Filtros.jsx'
import '../components/comunicados/comunicados.css'

export default function HomeDefinitivo() {
  const [tag, setTag] = useState('all')

  return (
    <>
      <Header />

      <main id="contenido" tabIndex={-1}>
        {/* ─── 1. HERO & SHOWCASE ──────────────────── */}
        <Hero />
        <HeroShowcase />

        {/* ─── 2. COMPROMISO (Sobre Nosotros) ────── */}
        <section id="compromiso" className="section-spacious">
          <CompromisoSection />
        </section>

        {/* ─── 3. ESPECIALIDADES ───────────────────── */}
        <section id="especialidades" className="section-spacious bg-alt">
          <Especialidades />
        </section>

        {/* ─── 4. PROYECTOS ────────────────────────── */}
        <section id="proyectos" className="section-spacious">
          <GaleriaProyectos />
        </section>

        {/* ─── 5. AUTORIDADES ──────────────────────── */}
        <section id="autoridades" className="section-spacious bg-alt">
          <AutoridadesSection />
        </section>

        {/* ─── 6. TESTIMONIOS ──────────────────────── */}
        <section id="testimonios" className="section-spacious">
          <TestimoniosSection />
        </section>

        {/* ─── 7. ESTADÍSTICAS Y CALENDARIO ────────── */}
        <StatsSection />
        <CalendarioSection />

        {/* ─── 8. COMUNICADOS ──────────────────────── */}
        <section
          id="comunicados"
          aria-labelledby="ttl-comunicados"
          style={{ background: '#111', padding: '100px 40px' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <header className="sec-header">
              <span className="sec-eyebrow">Novedades oficiales</span>
              <h2 className="sec-title" id="ttl-comunicados">
                Comunicados
              </h2>
              <p className="sec-subtitle">
                Información importante de la institución.
              </p>
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

        {/* ─── 9. UBICACIÓN ────────────────────────── */}
        <section id="ubicacion">
          <UbicacionSection />
        </section>
      </main>

      <Footer />
      <A11yControls />
    </>
  )
}