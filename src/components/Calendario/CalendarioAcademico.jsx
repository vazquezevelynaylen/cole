import { Link } from 'react-router-dom'
import './CalendarioAcademico.css'

export default function CalendarioAcademico() {
  return (
    <section className="cal-teaser" id="calendario-academico">
      <div className="cal-teaser__inner">
        <h2 className="cal-teaser__title">Calendario Académico</h2>
        <Link to="/calendario" className="cal-teaser__btn">Ver más</Link>
      </div>
    </section>
  )
}
