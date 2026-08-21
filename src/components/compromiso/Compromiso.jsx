import React from 'react'

export default function Compromiso() {
  return (
    <div className="compromiso-container">
      <div className="compromiso-grid">
        <div className="compromiso-content">
          <span className="badge-eyebrow">Nuestra Identidad</span>
          <h2 className="compromiso-title">Compromiso Educativo e Innovación Técnica</h2>
          <p className="compromiso-description">
            En la Escuela Técnica N.º 20 D.E. 20 “Carolina Muzzilli”, formamos profesionales técnicos 
            preparados para afrontar los desafíos tecnológicos del siglo XXI. Nuestra propuesta integra 
            solidez académica, práctica en laboratorios equipados y un fuerte compromiso con la comunidad.
          </p>
          
          <div className="compromiso-features">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <div>
                <h4>Formación Técnica en TIC</h4>
                <p>Redes, mantenimiento de sistemas, gestión de proyectos y desarrollo web moderno.</p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <div>
                <h4>Diseño y Multimedia</h4>
                <p>Creación de contenido audiovisual, diseño UX/UI y herramientas digitales de vanguardia.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="compromiso-media">
          <div className="image-wrapper">
            <img 
              src="/img/logocompromiso.png" 
              alt="Compromiso Institucional Carolina Muzzilli" 
              className="compromiso-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/img/colegio1.jpg';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}