import React from 'react'
import './especialidades.css'

export default function Especialidades() {
  return (
    <section className="especialidades" id="especialidades">

      {/* BLOQUE INTRODUCTORIO */}
      <div className="es-intro">

        <div className="es-intro-image">
          <img
            src="/img/multi1.jpg"
            alt="Escuela Técnica N.º 20"
          />
        </div>

        <div className="es-intro-content">
          <span className="es-label">ESCUELA TÉCNICA N.º 20</span>

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

          <a href="#historia" className="es-button">
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


      {/* TÍTULO ESPECIALIDADES */}
      <div className="es-section-heading">
        <div>
          <span>FORMACIÓN TÉCNICA</span>
          <h2>Especialidades técnicas</h2>
        </div>

        <a href="#especialidades">
          Ver todas <span>→</span>
        </a>
      </div>


      {/* TARJETAS DE ESPECIALIDADES */}
      <div className="es-specialties">

        {/* TIC */}
        <article className="es-specialty es-tic">

          <div className="es-specialty-icon">
            &lt;/&gt;
          </div>

          <h3>TIC</h3>

          <p>
            Programación, redes y tecnologías de la información.
          </p>

          <a href="/tic" className="es-specialty-link">
            <span>→</span>
          </a>

        </article>


        {/* MULTIMEDIA */}
        <article className="es-specialty es-multimedia">

          <div className="es-specialty-icon">
            ◇
          </div>

          <h3>Multimedia</h3>

          <p>
            Comunicación visual y producción digital.
          </p>

          <a href="/multimedia" className="es-specialty-link">
            <span>→</span>
          </a>

        </article>

      </div>


      {/* PROYECTOS */}
      <div className="es-section-heading es-project-heading">
        <div>
          <span>APRENDER HACIENDO</span>
          <h2>Proyectos que cobran vida</h2>
        </div>

        <a href="#proyectos">
          Ver proyectos <span>→</span>
        </a>
      </div>


      <div className="es-projects">

        <div className="es-project">
          <img
            src="/img/proyecto1.jpg"
            alt="Proyecto de la escuela"
          />
        </div>

        <div className="es-project">
          <img
            src="/img/proyecto2.jpg"
            alt="Proyecto de programación"
          />
        </div>

        <div className="es-project">
          <img
            src="/img/proyecto3.jpg"
            alt="Proyecto multimedia"
          />
        </div>

        <div className="es-project">
          <img
            src="/img/proyecto4.jpg"
            alt="Proyecto tecnológico"
          />
        </div>

      </div>


      {/* CTA FINAL */}
      <div className="es-cta">

        <div>
          <h2>¿Querés ser parte de la ET20?</h2>
          <p>
            Sumate a una comunidad que impulsa tu futuro.
          </p>
        </div>

        <a href="#contacto">
          Contactanos
          <span>→</span>
        </a>

      </div>

    </section>
  )
}