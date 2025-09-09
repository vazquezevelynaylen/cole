import { useState } from 'react'
import Header from '../components/header/Header.jsx'
import Subnav from '../components/nav/Subnav.jsx'
import Hero from '../components/hero/Hero.jsx'
import Especialidades from '../components/especialidades/Especialidades.jsx'
import ComunicadosTable from '../components/comunicados/ComunicadosTable.jsx'
import Filtros from '../components/comunicados/Filtros.jsx'
import A11yControls from '../components/a11y/A11yControls.jsx'
import Footer from '../components/footer/Footer.jsx'
import BackToTop from '../components/misc/BackToTop.jsx'
import PlanCard from '@components/planes/PlanCard';
import useReveal from "../hooks/useReveal.jsx"
export default function Home() {
  // Estado para filtros (evita el crash de props faltantes)
  const [tag, setTag] = useState('all')

  return (
    <>
      <Header />
      <Subnav />
      <main id="contenido" tabIndex={-1}>
        <Hero />

        <Especialidades />

        <section id="comunicados" aria-labelledby="ttl-comunicados" style={{ padding: '40px 16px' }}>
          <h2 id="ttl-comunicados">Comunicados</h2>
          <div className="comunicados-wrap" aria-label="Listado completo de comunicados">
            <div className="com-head">
              <h3 className="com-subtitle">Todos los comunicados</h3>
              <Filtros value={tag} onChange={setTag} />
            </div>

            {/* La tabla lee el estado `tag` */}
            <ComunicadosTable filter={tag} />
          </div>
        </section>

        <section id="novedades" style={{ minHeight: 300, padding: '40px 16px' }}>
          <h2>Novedades</h2>
          <p>Próximamente…</p>
        </section>
      </main>
      <Footer />
      <A11yControls />
    </>
  )
}
