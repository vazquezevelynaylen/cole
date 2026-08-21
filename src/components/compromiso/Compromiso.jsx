import React from 'react'
import './Compromiso.css'

export const Compromiso = () => {
  return (
    <section className="compromiso-section" id="compromiso">
      <div className="compromiso-container">
        {/* Tarjeta del logo con borde neon sutil */}
        <div className="compromiso-card">
          <img 
            src="/img/logocompromiso.png" 
            alt="Logo Compromiso E.T. 20" 
            className="compromiso-logo" 
          />
        </div>

        {/* Bloque de texto alineado a la estética industrial */}
        <div className="compromiso-content">
          <span className="compromiso-badge">+ NUESTRO COMPROMISO</span>
          <h2 className="compromiso-title">
            EDUCACIÓN TÉCNICA PARA EL <span className="highlight-yellow">DESARROLLO HUMANO</span>
          </h2>
          <p className="compromiso-text">
            Nuestra escuela técnica se compromete a brindar una formación pública de excelencia, donde la tecnología se transforma en una herramienta de inclusión, conocimiento y trabajo en equipo para construir un futuro sólido junto a nuestra comunidad.
          </p>

          <div className="compromiso-tags">
            <span className="tag">+ SOLIDARIDAD</span>
            <span className="tag">+ CONOCIMIENTO</span>
            <span className="tag">+ TECNOLOGÍA</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Compromiso