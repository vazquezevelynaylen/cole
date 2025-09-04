export default function Hero({ innerRef }){
  return (
    <section className="hero" id="top" aria-label="Portada" ref={innerRef}>
      <div className="hero-inner">
        <h2>Formación técnica para el futuro</h2>
        <p>Especialidades en TICs y Multimedia con proyectos reales y vínculos con la comunidad.</p>
        <div className="cta">
          <a className="btn btn-primary" href="#especialidades">Conocer especialidades</a>
          <a className="btn" href="#institucional">Visita 360°</a>
        </div>
      </div>
    </section>
  )
}
