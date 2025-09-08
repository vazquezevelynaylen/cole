import React from 'react';

export function fmtFecha(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export function Badge({ tag, text }) {
  if (tag === 'urgente') return <span className="badge badge-warn">{text || 'Importante'}</span>
  if (tag === 'importante') return <span className="badge badge-ok">{text || 'Vigente'}</span>
  return <span className="badge badge-info">{text || 'Nuevo'}</span>
}
