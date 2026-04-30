export default function ComunicadosFeed({ filter = 'all' }) {
  const sorted = [...DATA].sort((a,b)=> b.fecha.localeCompare(a.fecha))
  const view = filter === 'all' ? sorted : sorted.filter(x => x.tag === filter)

  return (
    <div className="com-grid">

      {view.map((it) => (
        <div key={it.titulo} className="com-card" data-tag={it.tag}>

          <div className="com-card-top">
            <span className="com-badge">{it.tag.toUpperCase()}</span>
            <span className="com-date">{fmtFecha(it.fecha)}</span>
          </div>

          <h3 className="com-card-title">{it.titulo}</h3>

          <p className="com-card-desc">{it.detalle}</p>

          <div className="com-card-bottom">
            <a href={it.link} target="_blank" rel="noopener" className="com-link">
              Abrir →
            </a>

            {badge(it.tag, it.estado)}
          </div>

        </div>
      ))}

    </div>
  )
}