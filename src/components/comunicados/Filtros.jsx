export default function Filtros({ value, onChange }) {
  const onClick = (v) => (e) => {
    e.preventDefault()
    onChange(v)
  }

  const Btn = ({ v, children }) => (
    <button
      data-filter={v}
      className={`filter-btn ${value === v ? 'is-active' : ''}`}
      onClick={onClick(v)}
    >
      {children}
    </button>
  )

  return (
    <div className="com-filtros" role="group" aria-label="Filtrar comunicados" style={{display: 'flex', gap: '8px', marginBottom: '16px'}}>
      <Btn v="all">Todos</Btn>
      <Btn v="urgente">Urgentes</Btn>
      <Btn v="importante">Importantes</Btn>
      <Btn v="info">Informativos</Btn>
    </div>
  )
}
