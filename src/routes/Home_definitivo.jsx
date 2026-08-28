/* Layout */
import Header          from '../components/header/Header_v2.jsx'
import Footer          from '../components/footer/Footer_v2.jsx'
import A11yControls    from '../components/a11y/A11yControls.jsx'
/* Secciones en orden (wireframe) */
import Hero            from '../components/hero/Hero_v2.jsx'
import Compromiso      from '../components/compromiso/Compromiso.jsx'
import Destacado       from '../components/destacado/Destacado.jsx'
import Especialidades  from '../components/especialidades/Especialidades.jsx'
import CalendarioAcademico from '../components/Calendario/CalendarioAcademico.jsx'
import GaleriaProyectos from '../components/proyectos/GaleriaProyectos.jsx'
import Cooperadora     from '../components/cooperadora/Cooperadora.jsx'
import AutoridadesSection from '../components/autoridades/AutoridadesSection.jsx'
import TestimoniosSection from '../components/Testimonios/TestimoniosSection.jsx'
import UbicacionSection from '../components/Ubicacion/UbicacionSection.jsx'

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido" tabIndex={-1}>
        {/* 1. HERO (sin modificar) */}
        <Hero />
        {/* 2. COMPROMISO */}
        <Compromiso />
        {/* 3. SECCIÓN DESTACADO (bloque reservado) */}
        <Destacado />
        {/* 4. ESPECIALIDADES */}
        <Especialidades />
        {/* 5. CALENDARIO ACADÉMICO */}
        <CalendarioAcademico />
        {/* 6. PROYECTOS DE LA ESCUELA */}
        <GaleriaProyectos />
        {/* 7. COOPERADORA ET20 */}
        <Cooperadora />
        {/* 8. AUTORIDADES */}
        <AutoridadesSection />
        {/* 9. TESTIMONIOS */}
        <TestimoniosSection />
        {/* 10. UBICACIÓN */}
        <UbicacionSection />
      </main>
      <Footer />
      <A11yControls />
    </>
  )
}
