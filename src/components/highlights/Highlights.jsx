import React from 'react';

export default function Highlights(){
  const items = [
    {
      icn:'📝', title:'Inscripción',
      txt:'Fechas, requisitos y pasos para nuevos ingresos.',
      href:'#inscripcion'
    },
    {
      icn:'📅', title:'Calendario académico',
      txt:'Actos, mesas de examen y cronograma anual.',
      href:'#calendario'
    },
    {
      icn:'📍', title:'Ubicación y 360°',
      txt:'Av. Directorio 6462, Mataderos. Recorrido virtual.',
      href:'#institucional'
    },
    {
      icn:'✉️', title:'Contacto rápido',
      txt:'Teléfono, correo y horarios de secretaría.',
      href:'#contacto'
    },
  ];
  return(
    <div className="grid-4 grid-2" style={{display:'grid', gridTemplateColumns:'repeat(4,minmax(0,1fr))', gap:'16px'}}>
      {items.map((it,i)=>(
        <a key={i} className="info-card" href={it.href}>
          <div className="icn" aria-hidden>{it.icn}</div>
          <div>
            <h3>{it.title}</h3>
            <p>{it.txt}</p>
          </div>
        </a>
      ))}
    </div>
  );
}