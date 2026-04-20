import { useRef, useEffect } from 'react'
import './compromiso_new.css'

export default function Compromiso() {
  const ref = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add('compromiso--visible') },
      { threshold: 0.2 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className="compromiso" aria-labelledby="ttl-compromiso" ref={ref}>
      {/* Línea decorativa superior */}
      <div className="compromiso__line" aria-hidden="true" />

      <div className="compromiso__wrap">
        {/* Columna texto */}
        <div className="compromiso__text">
          <span className="compromiso__eyebrow">Nuestra misión</span>
          <h2 id="ttl-compromiso">Compromiso con la <em>excelencia técnica</em></h2>
          <p>
            Formamos profesionales con sólidos conocimientos técnicos, valores éticos
            y visión innovadora. Cada proyecto, cada práctica y cada desafío es una
            oportunidad para que nuestros estudiantes construyan el futuro.
          </p>

          <ul className="compromiso__pilares">
            <li>
              <span className="pilares__icon">◆</span>
              <div>
                <strong>Profesionalismo</strong>
                <span>Formación rigurosa alineada con el mundo laboral.</span>
              </div>
            </li>
            <li>
              <span className="pilares__icon">◆</span>
              <div>
                <strong>Innovación</strong>
                <span>Tecnologías actuales y metodologías de vanguardia.</span>
              </div>
            </li>
            <li>
              <span className="pilares__icon">◆</span>
              <div>
                <strong>Comunidad</strong>
                <span>Vínculos reales con el sector productivo y social.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Columna imagen con decoración */}
        <div className="compromiso__media">
          <div className="compromiso__img-wrap">
            <img
              src="/img/logocompromiso.png"
              alt="Logo ET20 — Compromiso institucional"
              width="420"
              height="420"
              loading="lazy"
            />
            {/* Badge flotante */}
            <div className="compromiso__badge">
              <span className="badge__num">50+</span>
              <span className="badge__txt">años<br/>formando</span>
            </div>
          </div>
          {/* Decoración geométrica */}
          <div className="compromiso__geo" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
