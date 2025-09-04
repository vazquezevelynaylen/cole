import { useEffect } from 'react'

export default function Header(){
  useEffect(() => {
    // Drawer móvil + focus básico
    const body = document.body
    const toggle = document.getElementById('nav-toggle')
    const nav = document.getElementById('primary-menu')
    const backdrop = document.querySelector('.nav-backdrop')
    if(!toggle || !nav || !backdrop) return

    const setOpen = (open) => {
      body.classList.toggle('nav-open', open)
      toggle.setAttribute('aria-expanded', String(open))
      backdrop.hidden = !open
      if(open){
        const first = nav.querySelector('a,button')
        first && first.focus()
      }else{
        toggle.focus()
      }
    }
    const onEsc = (e) => { if(e.key==='Escape') setOpen(false) }

    toggle.addEventListener('click', () => setOpen(!body.classList.contains('nav-open')))
    backdrop.addEventListener('click', () => setOpen(false))
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  useEffect(() => {
    // Submenús "pin"
    const items = document.querySelectorAll('.menu > .has-submenu')
    items.forEach(li => {
      const btn = li.querySelector('button[aria-haspopup="true"]')
      const submenu = li.querySelector('.submenu')
      if(!btn || !submenu) return

      const onClick = (e) => {
        e.preventDefault()
        const open = li.classList.toggle('open')
        btn.setAttribute('aria-expanded', String(open))
      }
      const onKey = (e) => {
        if(e.key === 'Escape'){
          li.classList.remove('open')
          btn.setAttribute('aria-expanded','false')
          btn.focus()
        }
      }
      btn.addEventListener('click', onClick)
      li.addEventListener('keydown', onKey)

      // Limpieza
      return () => {
        btn.removeEventListener('click', onClick)
        li.removeEventListener('keydown', onKey)
      }
    })

    // ESC global cierra todos
    const onEscAll = (e) => {
      if(e.key === 'Escape'){
        document.querySelectorAll('.menu > .has-submenu.open').forEach(li=>{
          li.classList.remove('open')
          li.querySelector('button[aria-haspopup="true"]')?.setAttribute('aria-expanded','false')
        })
      }
    }
    document.addEventListener('keydown', onEscAll)
    return () => document.removeEventListener('keydown', onEscAll)
  }, [])

  return (
    <>
      <div className="nav-backdrop" hidden></div>
      <header>
        <h1>E.T. 20 D.E. 20 "Carolina Muzilli"</h1>

        <button id="nav-toggle" className="nav-toggle"
          aria-controls="primary-menu" aria-expanded="false" aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>

        <nav aria-label="Navegación principal" id="primary-menu">
          <ul className="menu">
            <li><a href="#top" id="link-inicio">Inicio</a></li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Institucional</button>
              <ul className="submenu" role="menu">
                <li><a href="#institucional">Presentación</a></li>
                <li><a href="#institucional">Autoridades</a></li>
                <li><a href="#institucional">Ubicación &amp; 360°</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Especialidades</button>
              <ul className="submenu" role="menu">
                <li><a href="#especialidades">TICs</a></li>
                <li><a href="#especialidades">Multimedia</a></li>
                <li><a href="#academico">Calendario</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Académico</button>
              <ul className="submenu" role="menu">
                <li><a href="#comunicados">Avisos</a></li>
                <li><a href="#comunicados">Exámenes</a></li>
                <li><a href="#comunicados">Boletines</a></li>
              </ul>
            </li>

            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
