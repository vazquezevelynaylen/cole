import { useState } from 'react'
import './comunicados_v2.css'

const DATA = [
  {
    id: 1,
    fecha: '2025-08-29',
    titulo: 'Acto por Aniversario de la Institución',
    detalle: 'Acto institucional en el SUM. Presencia obligatoria para ambos turnos. Se solicita ropa formal. El acto dará inicio a las 10:00 hs con la presencia de las autoridades.',
    link: '#',
    tag: 'importante',
    estado: 'Vigente',
  },
  {
    id: 2,
    fecha: '2025-08-27',
    titulo: 'Apertura de Inscripción a Mesas de Examen',
    detalle: 'Se abre el sistema de inscripción para las mesas de septiembre. El período de inscripción corre del 27/08 al 01/09. Ingresar con usuario y contraseña del portal académico.',
    link: '#',
    tag: 'info',
    estado: 'Nuevo',
  },
  {
    id: 3,
    fecha: '2025-08-21',
    titulo: 'Reprogramación por Corte de Luz',
    detalle: 'Debido a tareas de mantenimiento eléctrico programado por EDESUR, las actividades del turno tarde del miércoles 21/08 quedan reprogramadas. Se informará nuevo horario por este medio.',
    link: '#',
    tag: 'urgente',
    estado: 'Importante',
  },
  {
    id: 4,
    fecha: '2025-08-15',
    titulo: 'Entrega de Libretas de Calificaciones',
    detalle: 'Las libretas del primer cuatrimestre estarán disponibles para retiro en secretaría a partir del 15/08. Horario de atención: 8:00 a 16:00 hs. Presentar DNI.',
    link: '#',
    tag: 'info',
    estado: 'Vigente',
  },
  {
    id: 5,
    fecha: '2025-08-10',
    titulo: 'Convocatoria: Feria de Ciencias 2025',
    detalle: 'Se invita a todos los cursos a participar de la Feria de Ciencias institucional. Inscripción de proyectos hasta el 30/08. Bases y condiciones disponibles en secretaría.',
    link: '#',
    tag: 'importante',
    estado: 'Nuevo',
  },
]

const TAG_CONFIG = {
  urgente:    { label: 'Urgente',    color: '#ef4444', bg: 'rgba(239,68,68,.12)' },
  importante: { label: 'Importante', color: '#ffd60a', bg: 'rgba(255,214,10,.1)' },
  info:       { label: 'Info',       color: '#38bdf8', bg: 'rgba(56,189,248,.1)' },
}

function fmtFecha(iso) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function Modal({ item, onClose }) {
  if (!item) return null
  const t = TAG_CONFIG[item.tag] || TAG_CONFIG.info

  return (
    <div className="com-modal-root" role="dialog" aria-modal="true" aria-labelledby="com-modal-title">
      <div className="com-modal-backdrop" onClick={onClose} />
      <div className="com-modal">
        <div className="com-modal__header">
          <span className="com-modal__tag" style={{ color: t.color, background: t.bg }}>
            {t.label}
          </span>
          <button className="com-modal__close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <h3 className="com-modal__title" id="com-modal-title">{item.titulo}</h3>
        <time className="com-modal__fecha">{fmtFecha(item.fecha)}</time>

        <p className="com-modal__body">{item.detalle}</p>

        <div className="com-modal__footer">
          {item.link && item.link !== '#' && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="com-btn com-btn--primary">
              Ver documento →
            </a>
          )}
          <button className="com-btn com-btn--ghost" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default function ComunicadosSection() {
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = DATA.filter(d => filter === 'all' || d.tag === filter)
    .sort((a, b) => b.fecha.localeCompare(a.fecha))

  return (
    <section id="comunicados" className="com-section" aria-labelledby="ttl-comunicados">
      <div className="com-inner">

        {/* Header */}
        <header className="com-header">
          <span className="com-eyebrow">Novedades oficiales</span>
          <h2 id="ttl-comunicados" className="com-title">Comunicados</h2>
          <p className="com-subtitle">Información importante de la institución.</p>
        </header>

        {/* Filtros */}
        <div className="com-filtros" role="group" aria-label="Filtrar comunicados">
          {[
            { v: 'all',        label: 'Todos' },
            { v: 'urgente',    label: 'Urgentes' },
            { v: 'importante', label: 'Importantes' },
            { v: 'info',       label: 'Informativos' },
          ].map(({ v, label }) => (
            <button
              key={v}
              className={`com-filtro-btn${filter === v ? ' is-active' : ''}`}
              onClick={() => setFilter(v)}
              data-tag={v}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="com-grid">
          {filtered.map((item) => {
            const t = TAG_CONFIG[item.tag] || TAG_CONFIG.info
            return (
              <article
                key={item.id}
                className="com-card"
                style={{ '--tag-color': t.color, '--tag-bg': t.bg }}
                onClick={() => setSelected(item)}
                tabIndex={0}
                role="button"
                aria-label={`Ver comunicado: ${item.titulo}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
              >
                <div className="com-card__top">
                  <span className="com-card__tag">{t.label}</span>
                  <time className="com-card__fecha">{fmtFecha(item.fecha)}</time>
                </div>
                <h3 className="com-card__titulo">{item.titulo}</h3>
                <p className="com-card__preview">{item.detalle.slice(0, 90)}…</p>
                <span className="com-card__cta">Leer más →</span>
                <div className="com-card__bar" />
              </article>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="com-empty">No hay comunicados en esta categoría.</p>
        )}
      </div>

      {/* Modal */}
      <Modal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}