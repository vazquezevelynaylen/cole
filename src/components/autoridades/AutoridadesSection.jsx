import { useRef, useEffect } from 'react'
import './autoridades.css'

export default function AutoridadesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add('autoridades--visible') },
      { threshold: 0.2 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const autoridades = [
    { nombre: 'Director General', cargo: 'Gestión Educativa' },
    { nombre: 'Vicedirectora Académica', cargo: 'Currículo y Docencia' },
    { nombre: 'Jefe de Taller', cargo: 'Formación Técnica' }
  ]

  return (
    <section className="autoridades-section" aria-labelledby="ttl-autoridades" ref={ref}>
      <div className="autoridades-wrap">
        <h2 id="ttl-autoridades" className="autoridades-title">Autoridades</h2>
        
        <div className="autoridades-grid">
          {autoridades.map((persona, idx) => (
            <div key={idx} className="autoridad-card">

              {/* 👇 ACA VA LA IMAGEN */}
              <img
                src="/img/director1.jpeg"
                alt={persona.nombre}
                className="autoridad-img"
              />

              <h3>{persona.nombre}</h3>
              <p>{persona.cargo}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}