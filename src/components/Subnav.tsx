interface SubnavProps {
  hidden?: boolean
}

export default function Subnav({ hidden = false }: SubnavProps) {
  if (hidden) return null

  return (
    <nav className="subnav" aria-label="Navegación secundaria">
      <div className="container">
        <ul>
          <li><a href="#comunicados">Comunicados</a></li>
          <li><a href="#especialidades">Especialidades</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}