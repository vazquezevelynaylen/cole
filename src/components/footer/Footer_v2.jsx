import './Footer_v2.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="contacto">
      <div className="site-footer__main">

        {/* Col 1 — Brand */}
        <div className="sf-col sf-col--brand">
          <p className="sf-brand">E.T. 20 D.E. 20</p>
          <p className="sf-brand-sub">"Carolina Muzzilli"</p>
          <p className="sf-tagline">
            Formando técnicos con excelencia, valores y visión de futuro.
          </p>

          <div className="sf-social">
            {/* ✅ CORREGIDO: agregados aria-label descriptivos y texto accesible */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sf-social__link"
              aria-label="Instagram de ET20"
            >
              IG
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sf-social__link"
              aria-label="Facebook de ET20"
            >
              FB
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="sf-social__link"
              aria-label="YouTube de ET20"
            >
              YT
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div className="sf-col">
          <h4 className="sf-heading">Institución</h4>
          <ul className="sf-links">
            <li><a href="#institucional">Presentación</a></li>
            <li><a href="#institucional">Autoridades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#testimonios">Egresados</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="sf-col">
          <h4 className="sf-heading">Especialidades</h4>
          <ul className="sf-links">
            <li><a href="#especialidades">TIC</a></li>
            <li><a href="#especialidades">Multimedia</a></li>
            <li><a href="#academico">Calendario académico</a></li>
            <li><a href="#comunicados">Comunicados</a></li>
          </ul>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="site-footer__bottom">
        <span>
          © {year} E.T. 20 D.E. 20 "Carolina Muzzilli" — Todos los derechos reservados
        </span>

        <nav className="sf-legal" aria-label="Legal">
          <a href="/privacidad">Privacidad</a>
          <a href="/accesibilidad">Accesibilidad</a>
        </nav>
      </div>
    </footer>
  )
}