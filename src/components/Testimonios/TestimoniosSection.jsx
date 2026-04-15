import { useState, useEffect, useRef } from 'react'
import './TestimoniosSection.css'

const TESTIMONIOS = [
  {
    nombre: 'Lucía Fernández',
    cargo: 'Desarrolladora Frontend — Mercado Libre',
    anio: 'Egresada 2019',
    texto: 'La ET20 me dio las bases técnicas y la mentalidad para crecer. Hoy trabajo en una de las empresas más grandes de Latinoamérica y todo empezó aquí.',
    iniciales: 'LF',
    color: '#ffd60a',
  },
  {
    nombre: 'Matías Gómez',
    cargo: 'Director de Arte — Agencia Ogilvy',
    anio: 'Egresado 2017',
    texto: 'La especialidad en Multimedia me abrió puertas que ni imaginaba. Aprendí a pensar visualmente y a comunicar ideas complejas de forma simple.',
    iniciales: 'MG',
    color: '#38bdf8',
  },
  {
    nombre: 'Valentina Cruz',
    cargo: 'Ingeniera de Redes — Telecom',
    anio: 'Egresada 2020',
    texto: 'El laboratorio de redes fue mi primera experiencia real con infraestructura. Salí de la escuela lista para trabajar, sin necesidad de adaptarme.',
    iniciales: 'VC',
    color: '#a78bfa',
  },
  {
    nombre: 'Diego Muñoz',
    cargo: 'Animador 3D — Cartoon Network',
    anio: 'Egresado 2018',
    texto: 'Nunca pensé que desde Mataderos llegaría a trabajar en animación profesional. El ET20 me enseñó que la creatividad y la técnica van de la mano.',
    iniciales: 'DM',
    color: '#34d399',
  },
]

export default function TestimoniosSection() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (idx) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 280)
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIOS.length)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const t = TESTIMONIOS[current]

  return (
    <section className="testimonios" aria-labelledby="ttl-test">
      <div className="testimonios__inner">
        <header className="section-eyebrow-header">
          <span className="eyebrow">Nuestros egresados</span>
          <h2 id="ttl-test">Voces que inspiran</h2>
          <p>Quienes pasaron por estas aulas ahora construyen el futuro.</p>
        </header>

        <div className={`test-card${animating ? ' test-card--out' : ' test-card--in'}`}>
          {/* Comilla decorativa */}
          <div className="test-card__quote" aria-hidden="true">"</div>

          <blockquote className="test-card__texto">"{t.texto}"</blockquote>

          <footer className="test-card__footer">
            <div className="test-card__avatar" style={{ '--test-color': t.color }}>
              {t.iniciales}
            </div>
            <div>
              <strong className="test-card__nombre">{t.nombre}</strong>
              <span className="test-card__cargo">{t.cargo}</span>
              <span className="test-card__anio">{t.anio}</span>
            </div>
          </footer>
        </div>

        {/* Dots de navegación */}
        <nav className="test-dots" aria-label="Testimonios">
          {TESTIMONIOS.map((_, i) => (
            <button
              key={i}
              className={`test-dot${i === current ? ' test-dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ver testimonio ${i + 1}`}
              style={{ '--dot-color': TESTIMONIOS[i].color }}
            />
          ))}
        </nav>
      </div>
    </section>
  )
}
