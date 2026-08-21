import React from 'react'
import { Link } from 'react-router-dom'
import './Especialidades.css'

export const Especialidades = () => {
  return (
    <section className="especialidades-section" id="especialidades">
      <div className="especialidades-container">
        <header className="sec-header">
          <span className="sec-eyebrow">• FORMACIÓN TÉCNICA</span>
          <h2 className="sec-title">Nuestras Especialidades</h2>
          <p className="sec-subtitle">
            Especializaciones diseñadas para responder a los desafíos del mundo tecnológico.
          </p>
        </header>

        <div className="especialidades-grid">
          <article className="esp-card">
            <div className="esp-image-container">
              <img src="/img/tic1.jpg" alt="Especialidad en TIC" className="esp-image" />
              <span className="esp-tag">Tecnología</span>
            </div>
            <div className="esp-body">
              <h3>Información y Comunicación (TIC)</h3>
              <p>
                Formación integral en sistemas informáticos, infraestructura de redes, mantenimiento de equipos y soporte técnico especializado.
              </p>
              <Link to="/especialidades/tic" className="esp-btn" aria-label="Ver detalles de TIC">
                Explorar TIC <span className="arrow">→</span>
              </Link>
            </div>
          </article>

          <article className="esp-card">
            <div className="esp-image-container">
              <img src="/img/multi1.jpg" alt="Especialidad Multimedia" className="esp-image" />
              <span className="esp-tag">Diseño & Digital</span>
            </div>
            <div className="esp-body">
              <h3>Desarrollo Multimedia</h3>
              <p>
                Creación de proyectos digitales interactivos, diseño UI/UX, producción audiovisual y desarrollo web moderno.
              </p>
              <Link to="/especialidades/multimedia" className="esp-btn" aria-label="Ver detalles de Multimedia">
                Explorar Multimedia <span className="arrow">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Especialidades