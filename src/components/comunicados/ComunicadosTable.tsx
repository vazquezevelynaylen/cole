import { useMemo } from 'react'
import { DATA } from '@features/comunicados/data'
import { fmtFecha, badgeHTML } from '@features/comunicados/utils'
import type { Tag } from '@features/comunicados/types'

type Props = {
  filterTag?: Tag
}

const ComunicadosTable = ({ filterTag = 'all' }: Props) => {
  const sorted = useMemo(
    () => [...DATA].sort((a, b) => b.fecha.localeCompare(a.fecha)),
    []
  )

  const view = useMemo(
    () => (filterTag === 'all' ? sorted : sorted.filter(x => x.tag === filterTag)),
    [sorted, filterTag]
  )

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
        {view.map(it => (
          <tr key={it.titulo + it.fecha} data-tag={it.tag}>
            <td data-label="Fecha">{fmtFecha(it.fecha)}</td>
            <td data-label="Título">{it.titulo}</td>
            <td data-label="Detalle">{it.detalle}</td>
            <td data-label="Enlace/Archivo">
              <a href={it.link} target="_blank" rel="noopener">
                Abrir
              </a>
            </td>
            <td
              data-label="Estado"
              // es HTML seguro que generamos nosotros (no viene de usuario)
              dangerouslySetInnerHTML={{ __html: badgeHTML(it.tag, it.estado) }}
            />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ComunicadosTable
