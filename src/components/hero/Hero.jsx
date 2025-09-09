import './hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Portada">
      {/* Fondo con imagen importada */}
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(/img/colegio1.jpg)` }}
        aria-hidden="true"
      />

      {/* Contenido */}
      <div className="hero__inner">
        <h2>Formación técnica para el futuro</h2>
        <p>
          Especialidades en TICs y Multimedia con proyectos reales y vínculos con la comunidad.
        </p>
        <div className="cta">
          <a className="btn btn-primary" href="#especialidades">Conocer especialidades</a>
          <a className="btn" href="#institucional">Visita 360°</a>
        </div>
      </div>
    </section>
  )
}
