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
      titulo: 'Proyecto Web',
      categoria: 'Desarrollo institucional moderno',
      img: 'https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    },
    {
      id: 2,
      titulo: 'Sistema Técnico',
      categoria: 'Aplicación de gestión interna',
      img: 'https://images.pexels.com/photos/6804069/pexels-photo-6804069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    },
    {
      id: 3,
      titulo: 'Innovación Digital',
      categoria: 'Propuesta tecnológica educativa',
      img: 'https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
    }
  ]

  return (
    <section className="galeria-section" id="proyectos" aria-labelledby="ttl-proyectos" ref={ref}>
      <div className="galeria-wrap">
        <h2 className="galeria-title" id="ttl-proyectos">Galería de Proyectos</h2>

        <div className="galeria-scroll">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="galeria-card">

              <div className="galeria-card-inner">

                {/* FRONT */}
                <div
                  className="galeria-front"
                  style={{ backgroundImage: `url(${proyecto.img})` }}
                >
                  <h3>{proyecto.titulo}</h3>
                </div>

                {/* BACK */}
                <div className="galeria-back">
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.categoria}</p>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}