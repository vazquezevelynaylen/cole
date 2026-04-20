import { useEffect, useRef } from 'react'
import './HeroShowcase_v2.css'
 
const PANELS = [
  {
    id: 'tic',
    tag: 'TIC',
    title: 'Tecnologías de la Información',
    sub: 'Programación · Redes · Sistemas',
    img: '/img/aulacompu1.jpg',
    href: '#especialidades',
    accent: '#ffd60a',
  },
  {
    id: 'multimedia',
    tag: 'Multimedia',
    title: 'Producción Multimedial',
    sub: 'Diseño · Animación · Audiovisual',
    img: '/img/multi1.jpg',
    href: '#especialidades',
    accent: '#ff6b35',
  },
  {
    id: 'recorrido',
    tag: '360°',
    title: 'Recorrido Virtual',
    sub: 'Conocé nuestras instalaciones',
    img: '/img/colegio1.jpg',
    href: '#ubicacion',
    accent: '#38bdf8',
  },
]
 
export default function HeroShowcase() {
  const panelsRef = useRef([])
 
  /* Reveal de panels */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('hs-panel--in')
      }),
      { threshold: 0.12 }
    )
    panelsRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])
 
  /* Parallax suave en hover */
  useEffect(() => {
    const move = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - .5
      const y = (e.clientY - rect.top)  / rect.height - .5
      const bg = e.currentTarget.querySelector('.hs-panel__bg')
      if (bg) bg.style.transform = `scale(1.1) translate(${x*14}px,${y*10}px)`
    }
    const reset = (e) => {
      const bg = e.currentTarget.querySelector('.hs-panel__bg')
      if (bg) bg.style.transform = 'scale(1.07) translate(0,0)'
    }
    panelsRef.current.forEach((el) => {
      if (!el) return
      el.addEventListener('mousemove', move)
      el.addEventListener('mouseleave', reset)
    })
    return () => panelsRef.current.forEach((el) => {
      if (!el) return
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', reset)
    })
  }, [])
 
  return (
    <div className="hs-wrap">
      {/* Ticker dorado */}
      <div className="hs-ticker" aria-hidden="true">
        <div className="hs-ticker__track">
          {[...Array(4)].map((_, r) => (
            <span key={r} className="hs-ticker__row">
              {['TIC','MULTIMEDIA','TÉCNICA','INNOVACIÓN','FUTURO','ET 20','MATADEROS','EDUCACIÓN'].map((w, i) => (
                <span key={i} className="hs-ticker__item">✦ {w}</span>
              ))}
            </span>
          ))}
        </div>
      </div>
 
      {/* Panels */}
      <section className="hs-panels" aria-label="Accesos a especialidades">
        {PANELS.map((p, i) => (
          <a
            key={p.id}
            href={p.href}
            className="hs-panel"
            ref={(el) => (panelsRef.current[i] = el)}
            style={{ '--accent': p.accent, '--delay': `${i * 0.1}s` }}
            aria-label={p.title}
          >
            <div className="hs-panel__bg" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="hs-panel__tint" />
            <div className="hs-panel__body">
              <span className="hs-panel__tag">{p.tag}</span>
              <h3 className="hs-panel__title">{p.title}</h3>
              <p className="hs-panel__sub">{p.sub}</p>
              <span className="hs-panel__cta">Ver más →</span>
            </div>
            {/* Línea inferior de color */}
            <div className="hs-panel__line" aria-hidden="true" />
          </a>
        ))}
      </section>
    </div>
  )
}