export type Tag = 'all' | 'urgente' | 'importante' | 'info'

export type Comunicado = {
  fecha: string // ISO YYYY-MM-DD
  titulo: string
  detalle: string
  link: string
  tag: Exclude<Tag, 'all'>
  estado: string
}
