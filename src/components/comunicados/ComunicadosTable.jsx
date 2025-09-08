import React from 'react';
import { DATA } from '../../features/comunicados/data';
import { fmtFecha, Badge } from '../../features/comunicados/utils.jsx';

export default function ComunicadosTable({ filter='all' }){
  const sorted = React.useMemo(() => [...DATA].sort((a,b)=> b.fecha.localeCompare(a.fecha)), []);
  const view = filter === 'all' ? sorted : sorted.filter(x => x.tag === filter);

  return (
    <table className="comunicados-table" aria-describedby="ttl-comunicados">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Título</th>
          <th scope="col">Detalle</th>
          <th scope="col">Enlace/Archivo</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {view.map((it, i) => (
          <tr key={i} data-tag={it.tag}>
            <td data-label="Fecha">{fmtFecha(it.fecha)}</td>
            <td data-label="Título">{it.titulo}</td>
            <td data-label="Detalle">{it.detalle}</td>
            <td data-label="Enlace/Archivo"><a href={it.link || '#'} target="_blank" rel="noopener">Abrir</a></td>
            <td data-label="Estado"><Badge tag={it.tag} text={it.estado} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
