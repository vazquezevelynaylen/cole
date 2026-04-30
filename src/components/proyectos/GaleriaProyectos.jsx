import { useRef, useEffect } from 'react'
import './galeria.css'

export default function GaleriaProyectos() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          ref.current?.classList.add('galeria--visible')
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const proyectos = [
    {
      id: 1,
      titulo: 'Proyecto 1',
      categoria: 'Tecnología',
      img: 'https://via.placeholder.com/400x300'
    },
    {
      id: 2,
      titulo: 'Proyecto 2',
      categoria: 'Innovación',
      img: 'https://via.placeholder.com/400x300'
    },
    {
      id: 3,
      titulo: 'Proyecto 3',
      categoria: 'Técnica',
      img: 'https://via.placeholder.com/400x300'
    }
  ]

  return (
    <section className="galeria-section" ref={ref}>
      <div className="galeria-wrap">
        <h2 className="galeria-title">Galería de Proyectos</h2>

        <div className="galeria-scroll">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="galeria-card">

              <div
                className="galeria-img"
                style={{ backgroundImage: `url(${proyecto.img})` }}
              />

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