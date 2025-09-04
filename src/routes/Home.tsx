import Hero from '@components/hero/Hero';
import Especialidades from '@components/especialidades/Especialidades';
import ComunicadosTable from '@components/comunicados/ComunicadosTable';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Compromiso / valores: bloque simple */}
      <section className="compromiso" aria-labelledby="ttl-compromiso">
        <div className="compromiso-content">
          <img src="/img/colegio1.jpg" alt="Logo ET20" className="compromiso-logo" width={300} height={300} loading="lazy" />
          <div className="compromiso-text">
            <h2 id="ttl-compromiso" className="visually-hidden">Compromiso y valores</h2>
            <p><strong>Nuestro compromiso en la educación técnica se basa en el profesionalismo, la formación en valores y la búsqueda constante de la excelencia. Promovemos una educación de calidad en tecnologías que prepare a los estudiantes para los desafíos del futuro, con responsabilidad, ética y visión innovadora.</strong></p>
          </div>
        </div>
      </section>

      <Especialidades />

      <section id="comunicados" aria-labelledby="ttl-comunicados">
        <h2 id="ttl-comunicados">Comunicados</h2>
        <ComunicadosTable />
      </section>

      {/* Placeholder Novedades */}
      <section id="novedades" style={{ minHeight: 300, padding: '40px 16px' }}>
        <h2>Novedades</h2>
        <p>Próximamente…</p>
      </section>
    </>
  );
}
