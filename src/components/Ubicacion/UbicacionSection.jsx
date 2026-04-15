import './UbicacionSection.css'

export default function UbicacionSection() {
  return (
    <section className="ubicacion" id="ubicacion" aria-labelledby="ttl-ubic">
      <div className="ubicacion__inner">
        {/* Mapa */}
        <div className="ubicacion__mapa">
          <iframe
            title="Ubicación ET20 en el mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2!2d-58.5004!3d-34.6618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Directorio+6462%2C+Mataderos%2C+CABA!5e0!3m2!1ses!2sar!4v1691000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="ubicacion__mapa-overlay" aria-hidden="true" />
        </div>

        {/* Info */}
        <div className="ubicacion__info">
          <span className="eyebrow">Encontranos</span>
          <h2 id="ttl-ubic">Dónde estamos</h2>

          <ul className="ubicacion__datos">
            <li>
              <span className="ubic-dato__icon">📍</span>
              <div>
                <strong>Dirección</strong>
                <span>Av. Directorio 6462, Mataderos, CABA</span>
              </div>
            </li>
            <li>
              <span className="ubic-dato__icon">📞</span>
              <div>
                <strong>Teléfono</strong>
                <a href="tel:+541112345678">(011) 1234-5678</a>
              </div>
            </li>
            <li>
              <span className="ubic-dato__icon">✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:contacto@et20.edu.ar">contacto@et20.edu.ar</a>
              </div>
            </li>
            <li>
              <span className="ubic-dato__icon">🕐</span>
              <div>
                <strong>Horarios de secretaría</strong>
                <span>Lun–Vie: 8:00–16:00 hs</span>
              </div>
            </li>
          </ul>

          <a
            className="ubic-cta"
            href="https://virtualitour.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Recorrido virtual 360°</span>
            <span className="ubic-cta__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
