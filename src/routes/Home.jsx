import Header from '@components/header/Header'
import Subnav from '@components/nav/Subnav'
import Hero from '@components/hero/Hero'
import Especialidades from '@components/especialidades/Especialidades'
import ComunicadosTable from '@components/comunicados/ComunicadosTable'
import Filtros from '@components/comunicados/Filtros'
import A11yControls from '@components/a11y/A11yControls'
import Footer from '@components/footer/Footer'
import { useState } from 'react'
import type { Tag } from '@features/comunicados/types'

const Home = () => {
  const [tag, setTag] = useState<Tag>('all')

  return (
    <>
      <Header />
      <Subnav />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Especialidades />

        <section id="comunicados" aria-labelledby="ttl-comunicados">
          <h2 id="ttl-comunicados">Comunicados</h2>

          <div className="comunicados-wrap" aria-label="Listado completo de comunicados">
            <div className="com-head">
              <h3 className="com-subtitle">Todos los comunicados</h3>
              <Filtros value={tag} onChange={setTag} />
            </div>

            <ComunicadosTable filterTag={tag} />
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

export default Home
