import { useRef, useEffect } from 'react'
import './CalendarioSection.css'

const EVENTOS = [
  { fecha: { dia: '15', mes: 'ABR' }, titulo: 'Inicio de clases', tipo: 'institucional', desc: 'Comienzo del ciclo lectivo 2025. Turno mañana y tarde.' },
  { fecha: { dia: '22', mes: 'ABR' }, titulo: 'Inscripción a mesas de examen', tipo: 'academico', desc: 'Apertura del sistema de inscripción. Cierre: 25/04.' },
  { fecha: { dia: '02', mes: 'MAY' }, titulo: 'Mesa de exámenes — 1° turno', tipo: 'examen', desc: 'Materias de todas las especialidades. Aulas asignadas por secretaría.' },
  { fecha: { dia: '29', mes: 'MAY' }, titulo: 'Acto por el Día de la Patria', tipo: 'institucional', desc: 'Acto oficial en el SUM. Asistencia obligatoria.' },
  { fecha: { dia: '10', mes: 'JUN' }, titulo: 'Entrega de proyectos integradores', tipo: 'academico', desc: 'Presentación de trabajos finales de TIC y Multimedia.' },
  { fecha: { dia: '20', mes: 'JUN' }, titulo: 'Vacaciones de invierno', tipo: 'vacaciones', desc: 'Receso invernal. Regreso el 07/07.' },
]

const TIPO_STYLES = {
  institucional: { color: '#ffd60a', label: 'Institucional' },
  academico:     { color: '#38bdf8', label: 'Académico' },
  examen:        { color: '#fb7185', label: 'Examen' },
  vacaciones:    { color: '#34d399', label: 'Vacaciones' },
}

export default function CalendarioSection() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('ev-item--visible'), i * 70)
          }
        })
      },
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.ev-item').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="calendario" id="academico" aria-labelledby="ttl-cal" ref={ref}>
      <div className="calendario__inner">
        {/* Header inline — sin depender de clases globales que podrían no existir */}
        <header className="cal-header">
          <span className="cal-eyebrow">Organízate</span>
          <h2 id="ttl-cal">Calendario académico</h2>
          <p>Fechas importantes del ciclo lectivo 2025.</p>
        </header>

        <div className="cal-grid">
          <div className="cal-items">
            {EVENTOS.map((ev, i) => {
              const t = TIPO_STYLES[ev.tipo] || TIPO_STYLES.academico
              return (
                <article
                  className="ev-item"
                  key={i}
                  style={{ '--ev-color': t.color }}
                >
                  <div className="ev-item__fecha">
                    <span className="ev-item__dia">{ev.fecha.dia}</span>
                    <span className="ev-item__mes">{ev.fecha.mes}</span>
                  </div>
                  <div className="ev-item__dot" aria-hidden="true" />
                  <div className="ev-item__body">
                    <div className="ev-item__tipo">{t.label}</div>
                    <h3 className="ev-item__titulo">{ev.titulo}</h3>
                    <p className="ev-item__desc">{ev.desc}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}