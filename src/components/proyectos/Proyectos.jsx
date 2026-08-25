import { useState, useEffect } from 'react'
import './Proyectos.css'

const SLIDES = [
  { left: '/img/tic1.jpg', right: '/img/multi1.jpg' },
  { left: '/img/multi1.jpg', right: '/img/colegio1.jpg' },
  { left: '/img/colegio1.jpg', right: '/img/tic1.jpg' },
]

export default function Proyectos() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const slide = SLIDES[index]

  return (
    <section className="proyectos" id="proyectos" aria-labelledby="ttl-proy">
      <div className="proyectos__grid">
        <div className="proyectos__media">
          <img key={`l-${index}`} src={slide.left} alt="Proyecto" className="proyectos__img" />
        </div>

        <div className="proyectos__center">
          <h2 className="proyectos__title" id="ttl-proy">Proyecto</h2>
        </div>

        <div className="proyectos__media">
          <img key={`r-${index}`} src={slide.right} alt="Proyecto" className="proyectos__img" />
        </div>
      </div>
    </section>
  )
}
