import { useState } from 'react'

/* Layout */
import Header          from '../components/header/Header_v2.jsx'
import Footer          from '../components/footer/Footer_v2.jsx'
import A11yControls    from '../components/a11y/A11yControls.jsx'

/* Secciones en orden */
import Hero             from '../components/hero/Hero_v2.jsx'
import HeroShowcase     from '../components/hero/HeroShowcase_v2.jsx'
import Compromiso       from '../components/compromiso/Compromiso.jsx'
import StatsSection     from '../components/stats/StatsSection.jsx'
import AutoridadesSection   from '../components/autoridades/AutoridadesSection.jsx'
import GaleriaProyectos     from '../components/proyectos/GaleriaProyectos.jsx'
import CalendarioSection    from '../components/Calendario/CalendarioSection.jsx'
import TestimoniosSection   from '../components/Testimonios/TestimoniosSection.jsx'
import UbicacionSection     from '../components/Ubicacion/UbicacionSection.jsx'

/* Comunicados — nuevo componente unificado */
import ComunicadosSection from '../components/comunicados/ComunicadosSection.jsx'

export default function Home() {
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

        {/* ─── 4. ESTADÍSTICAS ────────────────────── */}
        <StatsSection />

        {/* ─── 5. AUTORIDADES ──────────────────────── */}
        <AutoridadesSection />

        {/* ─── 6. PROYECTOS (galería) ─────────────── */}
        <GaleriaProyectos />

        {/* ─── 7. CALENDARIO ───────────────────────── */}
        <CalendarioSection />

        {/* ─── 8. TESTIMONIOS ──────────────────────── */}
        <TestimoniosSection />

        {/* ─── 9. COMUNICADOS ─────────────────────── */}
        <ComunicadosSection />

        {/* ─── 10. UBICACIÓN ───────────────────────── */}
        <UbicacionSection />

      </main>

      <Footer />
      <A11yControls />
    </>
  )
}