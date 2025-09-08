import './hero.css';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="hero" id="top" aria-label="Portada">
      <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:.6, ease:'easeOut'}}
      >
        <div className="hero-headline">
          <h1>Formación técnica para el futuro</h1>
        </div>
        <p>Especialidades en TICs y Multimedia con proyectos reales y vínculos con la comunidad.</p>
        <div className="hero-cta">
          <a className="btn" href="#especialidades">Conocer especialidades</a>
          <a className="btn ghost" href="#institucional">Visita 360°</a>
        </div>
      </motion.div>

      <div className="hero-chip" aria-label="accesos rápidos">
        <a href="#novedades">Novedades</a>
        <a href="#comunicados">Comunicados</a>
      </div>
    </section>
  );
}