import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function NotFound() {
  const err = useRouteError();
  const msg = isRouteErrorResponse(err) ? `${err.status} ${err.statusText}` : 'Página no encontrada';
  return (
    <main style={{ padding: 24 }}>
      <h1>{msg}</h1>
      <p>Volver al <Link to="/">inicio</Link>.</p>
    </main>
  );
}
