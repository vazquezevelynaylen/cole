import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Página no encontrada</h1>
      <p>La ruta solicitada no existe.</p>
      <p><Link to="/">Volver al inicio</Link></p>
    </main>
  )
}
