import { useEffect, useMemo, useState } from 'react'
import DATA from '../data/comunicados.js'
import { fmtFecha, badge } from '../utils/format.js'

export default function Comunicados(){
  const sorted = useMemo(() => [...DATA].sort((a,b)=> b.fecha.localeCompare(a.fecha)), [])
  const [filtro, setFiltro] = useState('all')
  const view = useMemo(() => (filtro==='all'? sorted : sorted.filter(x=>x.tag===filtro)), [sorted, filtro])

  useEffect(() => {
    const live = document.getElementById('com-aria')
    if(live) live.textContent = `Se muestran ${view.length} comunicados.`
  }, [view.length])

  return (
    <section id="comunicados" aria-labelledby="ttl-comunicados">
      <h2 id="ttl-comunicados">Comunicados</h2>

      <div className="comunicados-wrap" aria-label="Listado completo de comunicados">
        <div className="com-head">
          <h3 className="com-subtitle">Todos los comunicados</h3>
          <div className="com-filtros" role="group" aria-label="Filtrar comunicados" onClick={(e)=>{
            const btn = e.target.closest('button[data-filter]')
            if(!btn) return
            setFiltro(btn.dataset.filter)
            e.currentTarget.querySelectorAll('button').forEach(b=> b.classList.toggle('is-active', b===btn))
          }}>
            <button data-filter="all" className="is-active">Todos</button>
            <button data-filter="urgente">Urgentes</button>
            <button data-filter="importante">Importantes</button>
            <button data-filter="info">Informativos</button>
          </div>
        </div>

        <div aria-live="polite" className="visually-hidden" id="com-aria"></div>

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
            {view.map(it=>(
              <tr key={it.titulo+it.fecha} data-tag={it.tag}>
                <td data-label="Fecha">{fmtFecha(it.fecha)}</td>
                <td data-label="Título">{it.titulo}</td>
                <td data-label="Detalle">{it.detalle}</td>
                <td data-label="Enlace/Archivo"><a href={it.link} target="_blank" rel="noopener">Abrir</a></td>
                <td data-label="Estado" dangerouslySetInnerHTML={{__html: badge(it.tag, it.estado)}}/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
