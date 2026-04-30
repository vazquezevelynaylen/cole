import './comunicados.css'

const DATA = [
  { fecha:'2025-08-29', titulo:'Acto por Aniversario', detalle:'Acto institucional en el SUM. Turnos mañana y tarde.', link:'#', tag:'importante', estado:'Vigente' },
  { fecha:'2025-08-27', titulo:'Inscripción a mesas', detalle:'Abren inscripciones para mesas de septiembre.', link:'#', tag:'info', estado:'Nuevo' },
  { fecha:'2025-08-21', titulo:'Corte de luz', detalle:'Reprogramación de actividades por mantenimiento eléctrico.', link:'#', tag:'urgente', estado:'Importante' }
]

const fmtFecha = (iso) => {
  const [y,m,d] = iso.split('-')
  return `${d}/${m}/${y}`
}

const badge = (tag, texto) => {
  if (tag==='urgente') return <span className="badge badge-warn">{texto||'Importante'}</span>
  if (tag==='importante') return <span className="badge badge-ok">{texto||'Vigente'}</span>
  return <span className="badge badge-info">{texto||'Nuevo'}</span>
}

export default function ComunicadosTable({ filter='all' }) {
  const sorted = [...DATA].sort((a,b)=> b.fecha.localeCompare(a.fecha))
  const view = filter==='all' ? sorted : sorted.filter(x => x.tag === filter)

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
        {view.map((it) => (
          <tr key={it.titulo} data-tag={it.tag}>
            <td data-label="Fecha">{fmtFecha(it.fecha)}</td>
            <td data-label="Título">{it.titulo}</td>
            <td data-label="Detalle">{it.detalle}</td>
            <td data-label="Enlace/Archivo"><a href={it.link} target="_blank" rel="noopener">Abrir</a></td>
            <td data-label="Estado">{badge(it.tag, it.estado)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
