import { Tag } from '@features/comunicados/types'

type Props = {
  value: Tag
  onChange: (v: Tag) => void
}

const Filtros = ({ value, onChange }: Props) => {
  const btn = (t: Tag, label: string) => (
    <button
      data-filter={t}
      className={value === t ? 'is-active' : ''}
      onClick={() => onChange(t)}
      type="button"
    >
      {label}
    </button>
  )

  return (
    <div className="com-filtros" role="group" aria-label="Filtrar comunicados">
      {btn('all', 'Todos')}
      {btn('urgente', 'Urgentes')}
      {btn('importante', 'Importantes')}
      {btn('info', 'Informativos')}
    </div>
  )
}

export default Filtros
