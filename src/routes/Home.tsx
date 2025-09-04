import Header from '@components/header/Header'
import Subnav from '@components/nav/Subnav'
import Hero from '@components/hero/Hero'
import Especialidades from '@components/especialidades/Especialidades'
import ComunicadosTable from '@components/comunicados/ComunicadosTable'
import Filtros from '@components/comunicados/Filtros'
import A11yControls from '@components/a11y/A11yControls'
import Footer from '@components/footer/Footer'
import '@components/header/header.css'
import '@components/nav/subnav.css'
import '@components/hero/hero.css'
import '@components/especialidades/especialidades.css'
import '@components/comunicados/comunicados.css'
import '@components/a11y/a11y.css'
import '@components/modal/modal.css'
import '@components/footer/footer.css'

export default function Home() {
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
              <Filtros />
            </div>
            <ComunicadosTable />
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
