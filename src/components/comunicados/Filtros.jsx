import { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'

const tags = ['all','urgente','importante','info']

export default function Filtros(){
  const [value, setValue] = useState('all')

  return (
    <div className="com-filtros" role="group" aria-label="Filtrar comunicados" style={{ position:'relative' }}>
      {tags.map(t => (
        <button
          key={t} type="button" data-filter={t}
          onClick={()=>setValue(t)}
          className={value===t ? 'is-active' : ''}
          style={{ position:'relative', padding:'.5rem .9rem', borderRadius:999, border:'1px solid var(--line)', background:'transparent', color:'inherit', fontWeight:800 }}
        >
          {t==='all' ? 'Todos' : t[0].toUpperCase()+t.slice(1)}
          {value===t && (
            <motion.span
              layoutId="pill"
              style={{ position:'absolute', inset:-2, borderRadius:999, zIndex:-1, background:'color-mix(in oklab, var(--accent) 22%, transparent)', border:'1px solid color-mix(in oklab, var(--accent) 50%, transparent)' }}
              transition={{ type:'spring', stiffness: 500, damping: 42 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
