import React form 'react';

export function fmtFecha(iso) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function Badge({ tag, text }) {
  if (tag === 'urgente') return `<span class="badge badge-warn">${texto || 'Importante'}</span>`
  if (tag === 'importante') return `<span class="badge badge-ok">${texto || 'Vigente'}</span>`
  return `<span class="badge badge-info">${texto || 'Nuevo'}</span>`
}
