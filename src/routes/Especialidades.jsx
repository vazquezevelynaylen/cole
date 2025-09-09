import React from 'react';
import '../components/especialidades/especialidades.css';

export default function Especialidades(){
  return (
    <div className="es-wrap">
      <div className="es-grid">
        <article className="es-card">
          <img src="./../../public/img/colegio1.jpg" alt="Laboratorio de tci" loading="lazy" />
          <div className="es-overlay" />
          <div className="es-content">
            <h3>TIC</h3>
            <p>Programación, redes y sistemas. Proyectos integradores y prácticas en laboratorio.</p>
            <div className="es-actions">
              <a className="btn btn-primary" href="/docs/planes-tic.pdf" download>Ver planes</a>
            </div>
          </div>
        </article>

        <article className="es-card">
          <img src="/img/multi1.jpg" alt="Área Multimedia" loading="lazy" />
          <div className="es-overlay" />
          <div className="es-content">
            <h3>Multimedia</h3>
            <p>Diseño, animación y edición. Producciones audiovisuales y comunicación digital.</p>
            <div className="es-actions">
              <a className="btn btn-primary" href="/docs/planes-multimedia.pdf" download>Ver planes</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
