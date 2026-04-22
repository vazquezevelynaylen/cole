import './especialidades.css'

export default function Tic() {
  return (
    <section className="especialidades" id="tic" aria-labelledby="ttl-tic" style={{ padding: '80px 20px' }}>
      <div className="wrap" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <span style={{ fontSize: '.75rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#ffd60a' }}>
            Especialidad
          </span>
          <h2 id="ttl-tic" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 900, color: '#fff', marginTop: '8px' }}>
            Tecnologías de la Información y la Comunicación
          </h2>
          <p style={{ color: 'rgba(255,255,255,.6)', marginTop: '12px', maxWidth: '60ch', lineHeight: 1.7 }}>
            Programación, redes y sistemas. Proyectos integradores y prácticas en laboratorio con tecnologías actuales.
          </p>
        </header>

        <article className="especialidad">
          <img src="/img/tic1.jpg" alt="Laboratorio de TICs" width="1200" height="800" loading="lazy" />
          <h3>TIC</h3>
          <p>Programación, redes y sistemas. Proyectos integradores y prácticas en laboratorio.</p>
          <div className="plan">
            <a className="btn btn-primary" href="/planes/plan-tic.pdf" download>Ver plan de estudios</a>
          </div>
        </article>
      </div>
    </section>
  )
}