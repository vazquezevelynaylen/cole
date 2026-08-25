import './Proyectos.css'

const SLIDES = [
  { left: '/img/tic1.jpg', right: '/img/multi1.jpg' },
]

export default function Proyectos() {
  const slide = SLIDES[0]

  return (
    <section className="proyectos" id="proyectos" aria-labelledby="ttl-proy">
      <div className="proyectos__grid">
        <div className="proyectos__media">
          <img src={slide.left} alt="Proyecto TIC" className="proyectos__img" />
        </div>

        <div className="proyectos__center">
          <h2 className="proyectos__title" id="ttl-proy">Proyecto</h2>
        </div>

        <div className="proyectos__media">
          <img src={slide.right} alt="Proyecto Multimedia" className="proyectos__img" />
        </div>
      </div>
    </section>
  )
}
