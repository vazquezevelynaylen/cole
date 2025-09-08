import './novedades.css';
import { motion } from 'framer-motion';

const data = [
  {id:1, titulo:'Acto por Aniversario', fecha:'29/08/2025', href:'#'},
  {id:2, titulo:'Inscripción a mesas', fecha:'27/08/2025', href:'#'},
  {id:3, titulo:'Corte de luz', fecha:'21/08/2025', href:'#'},
];

export default function Novedades(){
  return (
    <section id="novedades" className="section" aria-labelledby="ttl-nov">
      <div className="section-inner">
        <h2 id="ttl-nov">Novedades</h2>
        <motion.ul className="nov-grid"
          initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.4}}
        >
          {data.map(n=>(
            <li key={n.id} className="nov-card">
              <time dateTime="2025-08-29">{n.fecha}</time>
              <a href={n.href}>{n.titulo}</a>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
