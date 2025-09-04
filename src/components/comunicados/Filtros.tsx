type Tag = 'urgente' | 'importante' | 'info' | 'all';

export default function Filtros({
  value,
  onChange
}: {
  value: Tag;
  onChange: (v: Tag) => void;
}) {
  const items: {label: string; val: Tag}[] = [
    { label: 'Todos', val: 'all' },
    { label: 'Urgentes', val: 'urgente' },
    { label: 'Importantes', val: 'importante' },
    { label: 'Informativos', val: 'info' }
  ];
  return (
    <div className="com-filtros" role="group" aria-label="Filtrar comunicados">
      {items.map(it => (
        <button
          key={it.val}
          data-filter={it.val}
          className={value === it.val ? 'is-active' : ''}
          onClick={() => onChange(it.val)}
          type="button"
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
