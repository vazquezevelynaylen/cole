import React from 'react'
import { Link } from 'react-router-dom'
import './Especialidades.css'

const ICONS = {
  tic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 7l-5 5 5 5" />
      <path d="M15 7l5 5-5 5" />
      <path d="M13 5l-2 14" />
    </svg>
  ),
  multimedia: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8a2 2 0 0 1 2-2h2.2l1.4-2h6.8l1.4 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" />
      <circle cx="12" cy="12.5" r="3.4" />
    </svg>
  ),
  360: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3.2 3 3.2 15 0 18M12 3c-3.2 3-3.2 15 0 18" />
    </svg>
  ),
}

const CARDS = [
  {
    key: 'tic',
    title: 'TIC',
    color: '#273287',
    icon: ICONS.tic,
    text: 'Tecnologías de la Información y la Comunicación: programación, redes, infraestructura y desarrollo tecnológico aplicado.',
    to: '/especialidades/tic',
  },
  {
    key: 'multimedia',
    title: 'Multimedia',
    color: '#E4070F',
    icon: ICONS.multimedia,
    text: 'Producción audiovisual, diseño, fotografía, edición y comunicación con creatividad y tecnología.',
    to: '/especialidades/multimedia',
  },
  {
    key: '360',
    title: 'Recorrido 360°',
    color: '#0F4A42',
    icon: ICONS['360'],
    text: 'Experiencias inmersivas, recorridos virtuales y tecnología 360° para explorar los espacios de la escuela.',
  },
]

export const Especialidades = () => {
  return (
    <section className="especialidades-section" id="especialidades">
      <div className="especialidades-container">
        <h2 className="especialidades-title">Especialidades</h2>
        <p className="especialidades-subtitle">
          Tres propuestas formativas que combinan técnica, creatividad y tecnología
          para acompañar tu desarrollo profesional en la ET20.
        </p>

        <div className="especialidades-grid">
          {CARDS.map((card) => {
            const inner = (
              <>
                <span
                  className="esp-card__bar"
                  style={{ background: 'rgba(255,255,255,.55)' }}
                  aria-hidden="true"
                />
                <span
                  className="esp-card__icon"
                  style={{ background: 'rgba(255,255,255,.20)', color: '#ffffff' }}
                >
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </>
            )

            return card.to ? (
              <Link key={card.key} to={card.to} className="esp-card" style={{ background: card.color }}>
                {inner}
              </Link>
            ) : (
              <article key={card.key} className="esp-card" style={{ background: card.color }}>
                {inner}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Especialidades
