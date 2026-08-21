import React from 'react'
import './Compromiso.css'

export const Compromiso = () => {
  return (
    <section className="compromiso-section" id="compromiso">
      <div className="compromiso-container">
        <div className="compromiso-card">
          <div className="compromiso-glow"></div>
          <img 
            src="/img/logocompromiso.png" 
            alt="Logo Compromiso Institucional" 
            className="compromiso-logo" 
          />
        </div>

        <div className="compromiso-content">
          <span className="compromiso-badge">• NUESTRO COMPROMISO</span>
          <h2 className="compromiso-title">
            Educación técnica orientada a la innovación y al desarrollo humano
          </h2>
          <p className="compromiso-text">
            Nuestra escuela técnica se compromete a brindar una formación pública de excelencia, donde la tecnología se transforma en una herramienta de inclusión, conocimiento y trabajo en equipo para construir un futuro sólido junto a nuestra comunidad.
          </p>

          <div className="compromiso-tags">
            <span className="tag tag-solidaridad">Solidaridad</span>
            <span className="tag tag-conocimiento">Conocimiento</span>
            <span className="tag tag-tecnologia">Tecnología</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compromiso