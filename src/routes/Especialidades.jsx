import React from 'react';
import '../components/especialidades/especialidades.css';

export default function Especialidades() {
  return (
    <section className="especialidades" id="especialidades">
      {/* BLOQUE INSTITUCIONAL */}
      <div className="es-about">
        <div className="es-about-image">
          <img
            src="/img/colegio1.jpg"
            alt="Escuela Técnica N.º 20"
            loading="lazy"
          />
        </div>

        <div className="es-about-content">
          <span className="es-about-label">ESCUELA TÉCNICA N.º 20</span>

          <h2>
            Mucho más
            <br />
            que una <span>escuela.</span>
          </h2>

          <p>
            Una comunidad que aprende, crea y construye oportunidades.
            Con más de 60 años de trayectoria, impulsamos una educación
            técnica actual, innovadora y humana.
          </p>

          <a href="#historia" className="es-about-button">
            Conocé nuestra historia
            <span>→</span>
          </a>
        </div>
      </div>

      {/* ESTADÍSTICAS */}
      <div className="es-stats">
        <div className="es-stat">
          <strong>+60</strong>
          <span>AÑOS<br />de trayectoria</span>
        </div>

        <div className="es-stat">
          <strong>+500</strong>
          <span>ESTUDIANTES<br />formando el futuro</span>
        </div>

        <div className="es-stat">
          <strong>2</strong>
          <span>ESPECIALIDADES<br />técnicas</span>
        </div>

        <div className="es-stat">
          <strong>∞</strong>
          <span>PROYECTOS<br />por crear</span>
        </div>
      </div>

      {/* ESPECIALIDADES */}
      <div className="es-section-heading">
        <div>
          <span>FORMACIÓN TÉCNICA</span>
          <h2>Especialidades técnicas</h2>
        </div>

        <a href="#especialidades">
          Ver todas <span>→</span>
        </a>
      </div>

      <div className="es-specialties">
        <article className="es-specialty es-tic">
          <div className="es-specialty-icon">&lt;/&gt;</div>
          <h3>TIC</h3>
          <p>Programación, redes y tecnologías de la información.</p>
          <a href="/tic" className="es-specialty-link" aria-label="Ver TIC">
            →
          </a>
        </article>

        <article className="es-specialty es-multimedia">
          <div className="es-specialty-icon">◇</div>
          <h3>Multimedia</h3>
          <p>Comunicación visual y producción digital.</p>
          <a href="/multimedia" className="es-specialty-link" aria-label="Ver Multimedia">
            →
          </a>
        </article>
      </div>

      {/* CTA */}
      <div className="es-cta">
        <div>
          <h2>¿Querés ser parte de la ET20?</h2>
          <p>Sumate a una comunidad que impulsa tu futuro.</p>
        </div>

        <a href="#contacto">
          Contactanos <span>→</span>
        </a>
      </div>
    </section>
  );
}
