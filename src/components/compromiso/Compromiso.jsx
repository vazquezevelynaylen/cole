import './compromiso.css'

export default function Compromiso() {
  return (
    <section className="compromiso" aria-labelledby="ttl-compromiso">
      <div className="compromiso__wrap">
        {/* Columna izquierda: logo */}
        <div className="compromiso__logo">
          <img
            src="/img/logo-colegio.png"   // ⚠️ poné tu logo en public/img/
            alt="Logo ET20"
            width="240"
            height="240"
          />
        </div>

        {/* Columna derecha: texto */}
        <div className="compromiso__text">
          <h2 id="ttl-compromiso">Compromiso</h2>
          <p>
            Nuestro compromiso en la educación técnica se basa en el profesionalismo, 
            la formación en valores y la búsqueda constante de la excelencia. 
            Promovemos una educación de calidad en tecnologías que prepare a los estudiantes 
            para los desafíos del futuro, con responsabilidad, ética y visión innovadora.
          </p>
        </div>
      </div>
    </section>
  )
}
