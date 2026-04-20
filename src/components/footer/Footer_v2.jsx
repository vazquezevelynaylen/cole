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

          {/* Mini mapa */}
          <div className="sf-minimap">
            <iframe
              title="Mapa ET20"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2!2d-58.5004!3d-34.6618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Directorio+6462%2C+Mataderos%2C+CABA!5e0!3m2!1ses!2sar!4v1691000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="site-footer__bottom">
        <span>© {year} E.T. 20 D.E. 20 "Carolina Muzzilli" — Todos los derechos reservados</span>
        <nav className="sf-legal" aria-label="Legal">
          <a href="/privacidad">Privacidad</a>
          <a href="/accesibilidad">Accesibilidad</a>
        </nav>
      </div>
    </footer>
  )
}