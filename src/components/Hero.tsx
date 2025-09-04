import { forwardRef } from 'react'

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="hero">
      <div className="container">
        <div className="hero-content">
          <h2>E.T. 20 D.E. 20 "Carolina Muzilli"</h2>
          <p>Formando profesionales en Tecnologías de la Información y Comunicación</p>
          <div className="hero-actions">
            <a href="#especialidades" className="btn btn-primary">
              Conocé nuestras especialidades
            </a>
            <a href="#comunicados" className="btn btn-secondary">
              Ver comunicados
            </a>
          </div>
        </div>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'

export default Hero