import { useMemo, useState } from 'react';
import { DATA } from '@features/comunicados/data';
import { fmtFecha, badge } from '@features/comunicados/utils';
import Filtros from './Filtros';
import './comunicados.css';

type Tag = 'urgente' | 'importante' | 'info' | 'all';

export default function ComunicadosTable() {
  const [filter, setFilter] = useState<Tag>('all');

  const sorted = useMemo(
    () => [...DATA].sort((a, b) => b.fecha.localeCompare(a.fecha)),
    []
  );

  const view = useMemo(
    () => (filter === 'all' ? sorted : sorted.filter(x => x.tag === filter)),
    [filter, sorted]
  );

  return (
    <div className="comunicados-wrap" aria-label="Listado completo de comunicados">
      <div className="com-head">
        <h3 className="com-subtitle">Todos los comunicados</h3>
        <Filtros value={filter} onChange={setFilter} />
      </div>

      <div aria-live="polite" className="visually-hidden" id="com-aria">
        Se muestran {view.length} comunicados.
      </div>

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
          {view.map(it => (
            <tr key={`${it.fecha}-${it.titulo}`} data-tag={it.tag}>
              <td data-label="Fecha">{fmtFecha(it.fecha)}</td>
              <td data-label="Título">{it.titulo}</td>
              <td data-label="Detalle">{it.detalle}</td>
              <td data-label="Enlace/Archivo">
                <a href={it.link} target="_blank" rel="noopener noreferrer">Abrir</a>
              </td>
              <td data-label="Estado" dangerouslySetInnerHTML={{ __html: badge(it.tag, it.estado) }} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
