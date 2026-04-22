import './especialidades.css'

export default function Multimedia() {
  return (
    <section className="especialidades" id="multimedia" aria-labelledby="ttl-multimedia" style={{ padding: '80px 20px' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <span style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#ff6b35' }}>
            Especialidad
          </span>
          <h2 id="ttl-multimedia" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, color: '#fff', marginTop: '8px' }}>
            Producción Multimedial
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', marginTop: '12px', maxWidth: '60ch', lineHeight: 1.7 }}>
            Diseño, animación y edición. Producciones audiovisuales y comunicación digital con herramientas profesionales.
          </p>
        </header>

        <article className="especialidad">
          <img src="/img/multi1.jpg" alt="Producciones de Multimedia" width="1200" height="800" loading="lazy" />
          <h3>Multimedia</h3>
          <p>Diseño, animación y edición. Producciones audiovisuales y comunicación digital.</p>
          <div className="plan">
            <a className="btn btn-primary" href="/planes/plan-multimedia.pdf" download>Ver plan de estudios</a>
          </div>
        </article>
      </div>
    </section>
  )
}