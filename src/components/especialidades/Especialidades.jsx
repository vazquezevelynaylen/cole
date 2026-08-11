import React from 'react'
import '../components/especialidades/especialidades.css'

export default function Especialidades() {
  return (
    <section className="especialidades" id="especialidades">

      {/* INTRODUCCIÓN */}
      <div className="especialidades-intro">

        <div className="intro-image">
          <img
            src="/img/escuela-interior.jpg"
            alt="Interior de la Escuela Técnica 20"
          />
        </div>

        <div className="intro-text">
          <span className="intro-small">ESCUELA TÉCNICA N.º 20</span>

          <h2>
            Mucho más<br />
            que una <span>escuela.</span>
          </h2>

          <p>
            Una comunidad que aprende, crea y construye oportunidades.
            Con más de 60 años de trayectoria, impulsamos una educación
            técnica actual, innovadora y humana.
          </p>

          <a href="#historia" className="intro-button">
            Conocé nuestra historia →
          </a>
        </div>

      </div>


      {/* ESTADÍSTICAS */}
      <div className="estadisticas">

        <div className="estadistica">
          <strong>+60</strong>
          <span>Años<br />de trayectoria</span>
        </div>

        <div className="estadistica">
          <strong>+500</strong>
          <span>Estudiantes<br />formando el futuro</span>
        </div>

        <div className="estadistica">
          <strong>3</strong>
          <span>Especialidades<br />técnicas</span>
        </div>

        <div className="estadistica">
          <strong>∞</strong>
          <span>Proyectos<br />por crear</span>
        </div>

      </div>


      {/* ESPECIALIDADES */}
      <div className="especialidades-header">
        <div>
          <span>FORMACIÓN TÉCNICA</span>
          <h2>Especialidades técnicas</h2>
        </div>

        <a href="#especialidades">
          Ver todas →
        </a>
      </div>


      <div className="especialidades-grid">

        <article className="especialidad-card tic">
          <div className="especialidad-icon">⌘</div>

          <h3>TIC</h3>

          <p>
            Programación, redes y tecnologías de la información.
          </p>

          <a href="/tic">Ver especialidad →</a>
        </article>


        <article className="especialidad-card electronica">
          <div className="especialidad-icon">◉</div>

          <h3>Electrónica</h3>

          <p>
            Diseño y automatización de sistemas electrónicos.
          </p>

          <a href="/electronica">Ver especialidad →</a>
        </article>


        <article className="especialidad-card multimedia">
          <div className="especialidad-icon">✦</div>

          <h3>Multimedia</h3>

          <p>
            Comunicación visual y producción digital.
          </p>

          <a href="/multimedia">Ver especialidad →</a>
        </article>

      </div>


      {/* PROYECTOS */}
      <div className="proyectos-header">
        <div>
          <span>APRENDER HACIENDO</span>
          <h2>Proyectos que cobran vida</h2>
        </div>

        <a href="#proyectos">
          Ver proyectos →
        </a>
      </div>


      <div className="proyectos-grid">

        <article className="proyecto">
          <img src="/img/proyecto-robot.jpg" alt="Proyecto de robótica" />
        </article>

        <article className="proyecto">
          <img src="/img/proyecto-programacion.jpg" alt="Proyecto de programación" />
        </article>

        <article className="proyecto">
          <img src="/img/proyecto-multimedia.jpg" alt="Proyecto multimedia" />
        </article>

        <article className="proyecto">
          <img src="/img/proyecto-electronica.jpg" alt="Proyecto de electrónica" />
        </article>

      </div>


      {/* CTA */}
      <div className="especialidades-cta">

        <div>
          <h2>¿Querés ser parte de la ET20?</h2>
          <p>
            Sumate a una comunidad que impulsa tu futuro.
          </p>
        </div>

        <a href="#contacto">
          Contactanos →
        </a>

      </div>

    </section>
  )
}