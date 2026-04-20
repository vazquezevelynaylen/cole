import { useEffect, useRef, useState } from 'react'
import './header_v2.css'
 
const NAV_ITEMS = [
  { label: 'Inicio', href: '#top' },
  {
    label: 'Institucional',
    sub: [
      { label: 'Presentación', href: '#institucional' },
      { label: 'Autoridades', href: '#institucional' },
      { label: 'Compromisos', href: '#compromiso' },
    ],
  },
  {
    label: 'Especialidades',
    sub: [
      { label: 'TIC', href: '#especialidades' },
      { label: 'Multimedia', href: '#especialidades' },
    ],
  },
  {
    label: 'Académico',
    sub: [
      { label: 'Calendario', href: '#academico' },
      { label: 'Comunicados', href: '#comunicados' },
      { label: 'Exámenes', href: '#comunicados' },
    ],
  },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Egresados', href: '#testimonios' },
]
 
export default function Header() {
  const ref = useRef(null)
  const [solid, setSolid] = useState(false)
 
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
 
  return (
    <header
      ref={ref}
      className={`site-header ${solid ? 'site-header--solid' : 'site-header--transparent'}`}
    >
      {/* Brand */}
      <a href="#top" className="site-header__brand">
        E.T. 20 D.E. 20
        <span>Carolina Muzzilli</span>
      </a>
 
      {/* Nav */}
      <nav aria-label="Navegación principal">
        <ul className="site-nav">
          {NAV_ITEMS.map((item) =>
            item.sub ? (
              <li key={item.label} className="site-nav__item">
                <button className="site-nav__btn" aria-haspopup="true">
                  {item.label}
                  <span className="site-nav__chevron" aria-hidden="true">▾</span>
                </button>
                <ul className="site-nav__sub" role="menu">
                  {item.sub.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} role="menuitem">{s.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.label} className="site-nav__item">
                <a href={item.href} className="site-nav__link">{item.label}</a>
              </li>
            )
          )}
 
          {/* CTA */}
          <li>
            <a href="#ubicacion" className="site-nav__cta">Contacto</a>
          </li>
        </ul>
      </nav>
 
      {/* Hamburger mobile */}
      <button className="site-header__hamburger" aria-label="Abrir menú">
        <span /><span /><span />
      </button>
    </header>
  )
}
 