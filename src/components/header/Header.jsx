export default function Header() {
  return (
    <>
      <header>
        <div className="header__brand">E.T. 20 D.E. 20 "Carolina Muzilli"</div>
        <nav className="nav" aria-label="Navegación principal">
          <ul className="nav__list">
            <li><a className="nav__link" href="#top">Inicio</a></li>
            <li><a className="nav__link" href="#especialidades">Especialidades</a></li>
            <li><a className="nav__link" href="#comunicados">Comunicados</a></li>
            <li><a className="nav__link" href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className="header-spacer" aria-hidden="true"></div>
    </>
  )
}
