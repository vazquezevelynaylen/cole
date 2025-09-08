import React, { useEffect, useState } from 'react';

import Header from '../components/header/Header';
import Subnav from '../components/nav/Subnav';
import Hero from '../components/hero/Hero';
import Especialidades from '../components/especialidades/Especialidades';
import ComunicadosTable from '../components/comunicados/ComunicadosTable';
import SectionHeader from '../components/common/SectionHeader';
import A11yControls from '../components/a11y/A11yControls';
import Footer from '../components/footer/Footer';

import '../components/comunicados/comunicados.css';
import '../components/common/section-header.css';

export default function Home(){
  const [tag, setTag] = useState('all');

  // Activar las animaciones reveal (IntersectionObserver)
  useEffect(()=>{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e => e.target.classList.toggle('is-in', e.isIntersecting));
    }, { threshold:.12 });
    document.querySelectorAll('.reveal').forEach(el=> io.observe(el));
    return ()=> io.disconnect();
  },[]);

  return (
    <>
      <Header />
      <Subnav />

      <main id="contenido" tabIndex={-1}>
        <Hero />

{/* ESPECIALIDADES */}
<section
  className="section section-pad screen section-bg"
  id="especialidades"
  style={{"--bg-img": `url('/img/aulacompu1.jpg')`}}
>
  <div className="container stack">
    <h2>Especialidades</h2>
    <Especialidades />
  </div>
</section>

{/* COMUNICADOS */}
<section
  className="section section-pad screen com-section section-bg"
  id="comunicados"
  aria-labelledby="ttl-comunicados"
  style={{"--bg-img": `url('/img/colegio1.jpg')`}}
>
  <div className="container stack">
    <h2 id="ttl-comunicados">Comunicados</h2>
    {/* ...contenido... */}
        {/* Tarjetas info */}
            <div className="grid-3 reveal" style={{marginTop: 18}}>
              <div className="info-card">
                <div className="info-card__icon" aria-hidden>📅</div>
                <h4>Próximos eventos</h4>
                <p>Acto de aniversario y mesas de septiembre.</p>
                <a className="link" href="#calendario">Ver calendario</a>
              </div>

              <div className="info-card">
                <div className="info-card__icon" aria-hidden>📄</div>
                <h4>Plan de estudios</h4>
                <p>Descargá los planes de TIC y Multimedia.</p>
                <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                  <a className="link" href="/docs/planes-tic.pdf" download>Plan TIC</a>
                  <span aria-hidden>·</span>
                  <a className="link" href="/docs/planes-multimedia.pdf" download>Plan Multimedia</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-card__icon" aria-hidden>🔔</div>
                <h4>Notificaciones</h4>
                <p>Suscribite para enterarte de urgentes.</p>
                <button className="btn" type="button">Suscribirme</button>
              </div>
            </div>
  </div>
</section>

{/* NOVEDADES */}
<section
  className="section section-pad screen section-bg"
  id="novedades"
  style={{"--bg-img": `url('../public/img/multi1.jpg')`}}
>
          <div className="container stack">
    <h2>Novedades</h2>
    <p>Próximamente…</p>
  </div>
        </section>
      </main>

      <Footer />
      <A11yControls />
    </>
  );
}
