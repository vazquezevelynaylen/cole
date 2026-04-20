import './hero_v2.css'
 
export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Portada">
      <div
        className="hero__bg"
        style={{ backgroundImage: 'url(/img/colegio1.jpg)' }}
        aria-hidden="true"
      />
 
      <div className="hero__inner">
        <p className="hero__eyebrow">Mataderos · CABA · Desde 1975</p>
 
        <h1 className="hero__title">
          Formación<br />
          técnica para<br />
          el <em>futuro</em>
        </h1>
 
        <p className="hero__sub">
          Especialidades en TIC y Producción Multimedial. Título oficial
          con proyectos reales y vínculos con la industria.
        </p>
 
        <div className="hero__ctas">
          <a className="hero__btn-primary" href="#especialidades">
            Conocer especialidades →
          </a>
          <a className="hero__btn-ghost" href="#ubicacion">
            Recorrido 360°
          </a>
        </div>
      </div>
 
      {/* Scroll indicator lateral */}
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
 