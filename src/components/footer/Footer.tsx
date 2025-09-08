import './footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="legal">
        <nav aria-label="Enlaces legales">
          <a href="/privacidad">Política de privacidad</a>
          <a href="/accesibilidad">Accesibilidad</a>
          <a href="/proteccion-datos">Protección de datos de estudiantes</a>
        </nav>
      </div>
      <address>
        Av. Directorio 6462, Mataderos, CABA — Tel: (011) 1234-5678 —{' '}
        <a href="mailto:contacto@colegio.edu.ar">contacto@colegio.edu.ar</a>
      </address>
      <small>&copy; 2025 E.T. 20 D.E. 20 "Carolina Muzilli"</small>
    </footer>
  );
}
