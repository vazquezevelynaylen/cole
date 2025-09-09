import './header.css'

export default function Header(){
  return (
    <>
      <div className="nav-backdrop" hidden></div>
      <header>
        <h1>E.T. 20 D.E. 20 "Carolina Muzilli"</h1>

        <nav aria-label="Navegación principal" id="primary-menu">
          <ul className="menu">
            <li><a href="#top" id="link-inicio">Inicio</a></li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Institucional</button>
              <ul className="submenu" role="menu">
                <li><a href="#institucional">Presentación</a></li>
                <li><a href="#institucional">Autoridades</a></li>
                <li><a href="#institucional">Ubicación &amp; 360°</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Especialidades</button>
              <ul className="submenu" role="menu">
                <li><a href="#especialidades">TICs</a></li>
                <li><a href="#especialidades">Multimedia</a></li>
                <li><a href="#academico">Calendario</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Académico</button>
              <ul className="submenu" role="menu">
                <li><a href="#comunicados">Avisos</a></li>
                <li><a href="#comunicados">Exámenes</a></li>
                <li><a href="#comunicados">Boletines</a></li>
              </ul>
            </li>

            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
