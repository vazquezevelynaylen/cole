import { useRef, useEffect, useState } from 'react'
import './stats.css'

export default function StatsSection() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const stats = [
    { num: '50+', label: 'Años de trayectoria' },
    { num: '2500+', label: 'Egresados anualmente' },
    { num: '15', label: 'Especialidades' },
    { num: '98%', label: 'Empleabilidad' }
  ]

  return (
    <section className="stats-section" aria-labelledby="ttl-stats" ref={ref}>
      <div className="stats-wrap">
        <h2 id="ttl-stats" className="stats-title">Números que hablan</h2>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className={`stat-card ${isVisible ? 'stat-card--visible' : ''}`}>
              <div className="stat-number">{stat.num}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
