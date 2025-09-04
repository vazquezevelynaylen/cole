"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Especialidades;
require("./especialidades.css");
function Especialidades() {
    return (<section className="especialidades" id="especialidades" aria-labelledby="ttl-especialidades">
      <div className="wrap">
        <h2 id="ttl-especialidades" className="visually-hidden">Especialidades</h2>

        <article className="especialidad">
          <figure>
            <img src="/img/aulacompu1.jpg" alt="Laboratorio de TICs" className="especialidad-img" width={1200} height={800} loading="lazy"/>
            <figcaption className="visually-hidden">Laboratorio TICs</figcaption>
          </figure>
          <h2>TIC</h2>
          <p>Programación, redes y sistemas. Proyectos integradores y prácticas en laboratorio.</p>
        </article>

        <article className="especialidad">
          <figure>
            <img src="/img/multi1.jpg" alt="Producciones de Multimedia" className="especialidad-img" width={1200} height={800} loading="lazy"/>
            <figcaption className="visually-hidden">Área Multimedia</figcaption>
          </figure>
          <h2>Multimedia</h2>
          <p>Diseño, animación y edición. Producciones audiovisuales y comunicación digital.</p>
        </article>
      </div>
    </section>);
}
