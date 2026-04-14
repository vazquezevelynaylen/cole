import { useEffect, useRef } from 'react'
import './HeroShowcase.css'

const PANELS = [
  {
    id: 'tic',
    label: 'TIC',
    title: 'Tecnologías de la Información',
    sub: 'Programación · Redes · Sistemas',
    img: '/img/aulacompu1.jpg',
    href: '#especialidades',
    accent: '#ffd60a',
  },
  {
    id: 'multimedia',
    label: 'MULTIMEDIA',
    title: 'Producción Multimedial',
    sub: 'Diseño · Animación · Audiovisual',
    img: '/img/multi1.jpg',
    href: '#especialidades',
    accent: '#ff6b35',
  },
  {
    id: 'institucional',
    label: '360°',
    title: 'Recorrido Virtual',
    sub: 'Conocé nuestras instalaciones',
    img: '/img/colegio1.jpg',
    href: '#institucional',
    accent: '#38bdf8',
  },
]

const STATS = [
  { num: '50+', label: 'Años formando técnicos' },
  { num: '2', label: 'Especialidades técnicas' },
  { num: '800+', label: 'Estudiantes activos' },
  { num: '100%', label: 'Título oficial' },
]

export default function HeroShowcase() {
  const panelsRef = useRef([])
  const statsRef = useRef(null)
  const tickerRef = useRef(null)

  // Intersection Observer para animar entrada de paneles
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('panel--visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    panelsRef.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  // Stats counter animation
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.stat__num').forEach((el) => {
            el.classList.add('stat--pop')
          })
          io.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (statsRef.current) io.observe(statsRef.current)
    return () => io.disconnect()
  }, [])

  // Parallax on mouse move for panels
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY, currentTarget } = e
      const rect = currentTarget.getBoundingClientRect()
      const x = (clientX - rect.left) / rect.width - 0.5
      const y = (clientY - rect.top) / rect.height - 0.5
      const bg = currentTarget.querySelector('.panel__bg')
      if (bg) {
        bg.style.transform = `scale(1.12) translate(${x * 18}px, ${y * 12}px)`
      }
    }
    const handleLeave = (e) => {
      const bg = e.currentTarget.querySelector('.panel__bg')
      if (bg) bg.style.transform = 'scale(1.08) translate(0,0)'
    }

    const els = panelsRef.current
    els.forEach((el) => {
      if (el) {
        el.addEventListener('mousemove', handleMove)
        el.addEventListener('mouseleave', handleLeave)
      }
    })
    return () => {
      els.forEach((el) => {
        if (el) {
          el.removeEventListener('mousemove', handleMove)
          el.removeEventListener('mouseleave', handleLeave)
        }
      })
    }
  }, [])

  return (
    <div className="hero-showcase">
      {/* ── Ticker tape ── */}
      <div className="ticker" aria-hidden="true" ref={tickerRef}>
        <div className="ticker__track">
          {[...Array(3)].map((_, rep) => (
            <span key={rep} className="ticker__inner">
              {['TIC', 'MULTIMEDIA', 'TÉCNICA', 'INNOVACIÓN', 'FUTURO', 'ET 20', 'MATADEROS', 'EDUCACIÓN'].map((w, i) => (
                <span key={i} className="ticker__item">
                  <span className="ticker__dot">✦</span> {w}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Panels ── */}
      <section className="panels" aria-label="Accesos rápidos">
        {PANELS.map((p, i) => (
          <a
            key={p.id}
            href={p.href}
            className="panel"
            ref={(el) => (panelsRef.current[i] = el)}
            style={{ '--accent': p.accent, '--delay': `${i * 0.12}s` }}
            aria-label={p.title}
          >
            <div
              className="panel__bg"
              style={{ backgroundImage: `url(${p.img})` }}
            />
            <div className="panel__tint" />
            <div className="panel__content">
              <span className="panel__tag">{p.label}</span>
              <h3 className="panel__title">{p.title}</h3>
              <p className="panel__sub">{p.sub}</p>
              <span className="panel__arrow">→</span>
            </div>
          </a>
        ))}
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar" ref={statsRef}>
        {STATS.map((s, i) => (
          <div key={i} className="stat" style={{ '--i': i }}>
            <span className="stat__num">{s.num}</span>
            <span className="stat__label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}