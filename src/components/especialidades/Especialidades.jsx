export default function Especialidades() {
  return (
    <section className="especialidades" id="especialidades" aria-labelledby="ttl-especialidades">
      <div className="wrap">
        <h2 id="ttl-especialidades" className="visually-hidden">Especialidades</h2>

        <article className="especialidad">
          <img src="/img/aulacompu1.jpg" alt="Laboratorio de TICs" width="1200" height="800" loading="lazy" />
          <h3>TIC</h3>
          <p>Programación, redes y sistemas. Proyectos integradores y prácticas en laboratorio.</p>
          <div className="plan">
            <a className="btn btn--primary" href="/planes/plan-tic.pdf" download>Ver plan</a>
          </div>
        </article>

        <article className="especialidad">
          <img src="/img/multi1.jpg" alt="Producciones de Multimedia" width="1200" height="800" loading="lazy" />
          <h3>Multimedia</h3>
          <p>Diseño, animación y edición. Producciones audiovisuales y comunicación digital.</p>
          <div className="plan">
            <a className="btn btn--primary" href="/planes/plan-multimedia.pdf" download>Ver plan</a>
          </div>
        </article>
      </div>
    </section>
  )
}
