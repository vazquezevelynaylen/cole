import './header.css';
import { useEffect, useRef, useState } from 'react';

export default function Header(){
  const ref = useRef(null);
  const [solid,setSolid] = useState(false);
  useEffect(()=>{
    const io = new IntersectionObserver(([e])=> setSolid(!e.isIntersecting), {threshold:.02});
    const hero = document.querySelector('.hero');
    if(hero){ io.observe(hero); return ()=>io.disconnect(); }
  },[]);
  return (
    <>
      <header ref={ref} className={`site-header ${solid?'solid':''}`}>
        <div className="brand">E.T. 20 D.E. 20 “Carolina Muzilli”</div>
        <nav aria-label="principal">
          <ul className="menu">
            <li><a href="#top">Inicio</a></li>
            <li><a href="#especialidades">Especialidades</a></li>
            <li><a href="#comunicados">Comunicados</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <div className="spacer" aria-hidden="true"/>
    </>
  );
}
