export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Portada">
      <div className="hero__inner">
        <h2 className="hero__title">Formación técnica para el futuro</h2>
        <p className="hero__subtitle">
          Especialidades en TICs y Multimedia con proyectos reales y vínculos con la comunidad.
        </p>
        <div className="hero__cta">
          <a className="btn btn--primary" href="#especialidades">Conocer especialidades</a>
          <a className="btn btn--ghost" href="#institucional">Visita 360°</a>
        </div>
      </div>
    </section>
  )
}
