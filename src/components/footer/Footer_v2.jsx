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
          {/* Redes sociales */}
          <div className="sf-social">
            <a href="#" aria-label="Instagram" className="sf-social__link">IG</a>
            <a href="#" aria-label="Facebook"  className="sf-social__link">FB</a>
            <a href="#" aria-label="YouTube"   className="sf-social__link">YT</a>
          </div>
        </div>

        {/* Col 2 — Navegación */}
        <div className="sf-col">
          <h4 className="sf-heading">Institución</h4>
          <ul className="sf-links">
            <li><a href="#institucional">Presentación</a></li>
            <li><a href="#institucional">Autoridades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#testimonios">Egresados</a></li>
          </ul>
        </div>

        {/* Col 3 — Especialidades */}
        <div className="sf-col">
          <h4 className="sf-heading">Especialidades</h4>
          <ul className="sf-links">
            <li><a href="#especialidades">TIC</a></li>
            <li><a href="#especialidades">Multimedia</a></li>
            <li><a href="#academico">Calendario académico</a></li>
            <li><a href="#comunicados">Comunicados</a></li>
          </ul>
        </div>

        {/* Col 4 — Contacto + mini mapa */}
        <div className="sf-col sf-col--contact">
          <h4 className="sf-heading">Contacto</h4>
          <ul className="sf-contact-list">
            <li>
              <span className="sf-contact-list__icon">📍</span>
              <span>Av. Directorio 6462, Mataderos, CABA</span>
            </li>
            <li>
              <span className="sf-contact-list__icon">📞</span>
              <a href="tel:+541112345678">(011) 1234-5678</a>
            </li>
            <li>
              <span className="sf-contact-list__icon">✉</span>
              <a href="mailto:contacto@et20.edu.ar">contacto@et20.edu.ar</a>
            </li>
            <li>
              <span className="sf-contact-list__icon">🕐</span>
              <span>Lun–Vie · 8:00–16:00 hs</span>
            </li>
          </ul>

    </footer>
  )
}