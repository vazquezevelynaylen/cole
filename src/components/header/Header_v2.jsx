import { useEffect, useRef, useState } from 'react'
import './Header_v2.css'

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
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Cerrar el menú mobile al hacer clic en un link */
  const handleNavClick = () => setMobileOpen(false)

  /* Bloquear scroll del body cuando el menú está abierto */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      ref={ref}
      className={`site-header ${solid || mobileOpen ? 'site-header--solid' : 'site-header--transparent'}`}
    >
      {/* Brand */}
      <a href="#top" className="site-header__brand" onClick={handleNavClick}>
        E.T. 20 D.E. 20
        <span>Carolina Muzzilli</span>
      </a>

      {/* Nav desktop */}
      <nav aria-label="Navegación principal">
        <ul className="site-nav">
          {NAV_ITEMS.map((item) =>
            item.sub ? (
              <li key={item.label} className="site-nav__item">
                <button className="site-nav__btn" aria-haspopup="true">
                  {item.label}
                  <span className="site-nav__chevron">▾</span>
                </button>
                <ul className="site-nav__sub">
                  {item.sub.map((s) => (
                    <li key={s.label}>
                      <a href={s.href}>{s.label}</a>
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
          <li>
            <a href="#ubicacion" className="site-nav__cta">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <button
        className={`site-header__hamburger${mobileOpen ? ' is-open' : ''}`}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Menú mobile */}
      {mobileOpen && (
        <nav className="site-nav-mobile" aria-label="Navegación mobile">
          <ul>
            {NAV_ITEMS.map((item) =>
              item.sub ? (
                <li key={item.label} className="site-nav-mobile__group">
                  <span className="site-nav-mobile__label">{item.label}</span>
                  <ul className="site-nav-mobile__sub">
                    {item.sub.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} onClick={handleNavClick}>{s.label}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <a href={item.href} className="site-nav-mobile__link" onClick={handleNavClick}>
                    {item.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a href="#ubicacion" className="site-nav-mobile__cta" onClick={handleNavClick}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}