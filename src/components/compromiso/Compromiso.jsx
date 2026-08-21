import React from 'react'

export default function Compromiso() {
  return (
    <section className="text-image-block text-image-block--burgundy">
      {/* Columna Texto (Alineado a la izquierda) */}
      <div className="col-text">
        <p className="block-subtitle">Sobre Nosotros</p>
        <h2 className="block-title">
          Brindar una educación técnica integral es la clave para potenciar el futuro.
        </h2>
        <p className="block-description">
          Desde su primer día en los talleres hasta el último año en la especialidad, los estudiantes 
          de la E.T. 20 Carolina Muzzilli cuentan con oportunidades de aprendizaje práctico en redes, 
          mantenimiento de sistemas, desarrollo web y proyectos tecnológicos.
        </p>
        <a href="#especialidades" className="btn-wg-outline">
          Conocé Nuestras Especialidades
        </a>
      </div>

      {/* Columna Imagen Full Cover (Lado derecho de borde a borde) */}
      <div className="col-image">
        <img 
          src="/img/colegio1.jpg" 
          alt="Instalaciones Escuela Técnica 20" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/img/logocompromiso.png';
          }}
        />
      </div>
    </section>
  )
}