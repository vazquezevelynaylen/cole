import React from 'react'
import './Compromiso.css'

export const Compromiso = () => {
  const valores = [
    { label: 'Respeto', color: '#E4070F' },
    { label: 'Compañerismo', color: '#FFAE00' },
    { label: 'Responsabilidad', color: '#0F4A42' },
    { label: 'Compromiso', color: '#273287' },
  ]

  return (
    <section className="compromiso-section" id="compromiso">
      <div className="compromiso-container">
        {/* Imagen (temporal: logocompromiso; luego CarolinaAnimada1) */}
        <div className="compromiso-media">
          <img
            src="/img/logocompromiso.png"
            alt="Escuela Técnica N.º 20 D.E. 20 — Carolina Muzzilli"
            className="compromiso-img"
          />
        </div>

        {/* Contenido */}
        <div className="compromiso-content">
          <span className="compromiso-eyebrow">CONOCÉ NUESTRA ESCUELA</span>

          <h2 className="compromiso-title">
            Conocé más sobre nuestra escuela
          </h2>

          <p className="compromiso-text">
            Somos una institución pública que construye comunidad a través del
            respeto, la amistad y el compañerismo. Promovemos la responsabilidad,
            el compromiso y la inclusión como bases de una educación técnica que
            acompaña el crecimiento conjunto de estudiantes, docentes y familias.
          </p>

          <ul className="compromiso-values">
            {valores.map((v) => (
              <li key={v.label}>
                <span
                  className="compromiso-dot"
                  style={{ background: v.color }}
                  aria-hidden="true"
                />
                {v.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Compromiso
