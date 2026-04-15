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
    { id: 1, titulo: 'Proyecto 1', categoria: 'Tecnología' },
    { id: 2, titulo: 'Proyecto 2', categoria: 'Innovación' },
    { id: 3, titulo: 'Proyecto 3', categoria: 'Técnica' },
    { id: 4, titulo: 'Proyecto 4', categoria: 'Desarrollo' },
    { id: 5, titulo: 'Proyecto 5', categoria: 'Diseño' },
    { id: 6, titulo: 'Proyecto 6', categoria: 'Investigación' }
  ]

  return (
    <section className="galeria-section" aria-labelledby="ttl-galeria" ref={ref}>
      <div className="galeria-wrap">
        <h2 id="ttl-galeria" className="galeria-title">Galería de Proyectos</h2>
        <div className="galeria-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="galeria-item">
              <div className="galeria-img-wrap">
                <div className="galeria-img-placeholder"></div>
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
