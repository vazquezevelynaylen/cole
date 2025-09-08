import React from 'react';
import './newsrail.css';

export default function NewsRail({ items=[] }){
  return (
    <div className="rail">
      {items.map((n,i)=>(
        <article key={i} className="rail-card">
          <time className="muted">{n.fecha}</time>
          <h3>{n.titulo}</h3>
          <p>{n.detalle}</p>
          <a href={n.href||'#'}>Ver más</a>
        </article>
      ))}
    </div>
  );
}