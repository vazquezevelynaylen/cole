import type { Tag } from './types'

export function fmtFecha(iso: string) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function badgeHTML(tag: Exclude<Tag, 'all'>, texto?: string) {
  if (tag === 'urgente') return `<span class="badge badge-warn">${texto || 'Importante'}</span>`
  if (tag === 'importante') return `<span class="badge badge-ok">${texto || 'Vigente'}</span>`
  return `<span class="badge badge-info">${texto || 'Nuevo'}</span>`
}
