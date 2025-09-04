import { useEffect, useRef } from 'react';
import './header.css';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current!;
    const hero = document.querySelector('.hero');
    if (!header || !hero) return;

    const io = new IntersectionObserver(([e]) => {
      header.classList.toggle('is-solid', !e.isIntersecting);
    }, { threshold: 0.02 });

    io.observe(hero);
    return () => io.disconnect();
  }, []);

  // Drawer simple en móvil
  useEffect(() => {
    const body = document.body;
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('primary-menu');
    const backdrop = document.querySelector('.nav-backdrop');

    if (!toggle || !nav || !backdrop) return;

    const setOpen = (open: boolean) => {
      body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      (backdrop as HTMLElement).hidden = !open;
      if (open) {
        const first = nav.querySelector<HTMLElement>('a,button');
        first?.focus();
      } else {
        (toggle as HTMLElement).focus();
      }
    };

    const onToggle = () => setOpen(!body.classList.contains('nav-open'));
    const onClose = () => setOpen(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };

    toggle.addEventListener('click', onToggle);
    backdrop.addEventListener('click', onClose);
    document.addEventListener('keydown', onKey);
    return () => {
      toggle.removeEventListener('click', onToggle);
      backdrop.removeEventListener('click', onClose);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Submenús “pin”
  useEffect(() => {
    const items = document.querySelectorAll<HTMLLIElement>('.menu > .has-submenu');
    const onDocEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.menu > .has-submenu.open').forEach(li => {
          li.classList.remove('open');
          li.querySelector('button[aria-haspopup="true"]')?.setAttribute('aria-expanded', 'false');
        });
      }
    };
    items.forEach(li => {
      const btn = li.querySelector<HTMLButtonElement>('button[aria-haspopup="true"]');
      const submenu = li.querySelector<HTMLUListElement>('.submenu');
      if (!btn || !submenu) return;
      const onClick = (e: MouseEvent) => {
        e.preventDefault();
        const open = li.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
      };
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          li.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          btn.focus();
        }
      };
      btn.addEventListener('click', onClick);
      li.addEventListener('keydown', onKey);
    });
    document.addEventListener('keydown', onDocEsc);
    return () => document.removeEventListener('keydown', onDocEsc);
  }, []);

  return (
    <>
      <div className="nav-backdrop" hidden></div>
      <header ref={headerRef}>
        <h1>E.T. 20 D.E. 20 "Carolina Muzilli"</h1>

        <button id="nav-toggle" className="nav-toggle" aria-controls="primary-menu" aria-expanded="false" aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>

        <nav aria-label="Navegación principal" id="primary-menu">
          <ul className="menu">
            <li><a href="#top" id="link-inicio">Inicio</a></li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded={false}>Institucional</button>
              <ul className="submenu" role="menu">
                <li><a href="#institucional">Presentación</a></li>
                <li><a href="#institucional">Autoridades</a></li>
                <li><a href="#institucional">Ubicación &amp; 360°</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded={false}>Especialidades</button>
              <ul className="submenu" role="menu">
                <li><a href="#especialidades">TICs</a></li>
                <li><a href="#especialidades">Multimedia</a></li>
                <li><a href="#academico">Calendario</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded={false}>Académico</button>
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
  );
}
