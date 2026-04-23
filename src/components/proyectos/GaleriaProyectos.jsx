import { useRef, useEffect } from 'react'
import './galeria.css'

export default function GaleriaProyectos() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add('galeria--visible') },
      { threshold: 0.1 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const proyectos = [
    { id: 1, titulo: 'App de Gestión Escolar', categoria: 'TIC · Desarrollo Web', img: '/img/tic1.jpg' },
    { id: 2, titulo: 'Cortometraje Animado', categoria: 'Multimedia · Animación', img: '/img/multi1.jpg' },
    { id: 3, titulo: 'Red LAN Institucional', categoria: 'TIC · Redes', img: '/img/aulacompu1.jpg' },
    { id: 4, titulo: 'Campaña Visual ET20', categoria: 'Multimedia · Diseño', img: '/img/colegio1.jpg' },
    { id: 5, titulo: 'Sistema de Alertas', categoria: 'TIC · Programación', img: '/img/tic1.jpg' },
    { id: 6, titulo: 'Documental Barrial', categoria: 'Multimedia · Video', img: '/img/multi1.jpg' },
  ]

  return (
    <section className="galeria-section" id="proyectos" aria-labelledby="ttl-galeria" ref={ref}>
      <div className="galeria-wrap">
        <header className="section-eyebrow-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontSize: '.68rem', fontWeight: 800, letterSpacing: '.2em',
            textTransform: 'uppercase', color: '#ffd60a', marginBottom: '14px'
          }}>
            Trabajos destacados
          </span>
          <h2 id="ttl-galeria" className="galeria-title">Galería de Proyectos</h2>
          <p style={{ color: 'rgba(255,255,255,.45)', fontSize: '1rem', maxWidth: '52ch', margin: '0 auto' }}>
            Lo que nuestros estudiantes crean, comunica su potencial.
          </p>
        </header>

        <div className="galeria-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="galeria-item">
              <div className="galeria-img-wrap">
                <img
                  src={proyecto.img}
                  alt={proyecto.titulo}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
                <div className="galeria-img-overlay" />
              </div>
              <div className="galeria-info">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.categoria}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}