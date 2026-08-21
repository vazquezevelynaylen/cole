import React from 'react';

// Importamos TU Header / Nav original sin tocarlo
import Header from '../components/header/Header'; 
// O si usás Nav directamente: import Nav from '../components/nav/Nav';

import Hero from '../components/hero/Hero';
import Compromiso from '../components/compromiso/Compromiso';
import Especialidades from '../components/especialidades/Especialidades';
import Proyectos from '../components/proyectos/Proyectos';
import Autoridades from '../components/autoridades/Autoridades';
import Testimonios from '../components/Testimonios/Testimonios';
import Ubicacion from '../components/Ubicacion/Ubicacion';
import Footer from '../components/footer/Footer';

export default function HomeDefinitivo() {
  return (
    <div className="home-container">
      {/* Tu Header / Nav intacto */}
      <Header />

      <main>
        {/* 1. Hero Principal */}
        <Hero imageSrc="/img/colegio1.jpg" />

        {/* 2. Compromiso (Sobre nosotros) */}
        <section id="compromiso" className="text-image-block">
          <Compromiso logo="/img/logocompromiso.png" />
        </section>

        {/* 3. Especialidades */}
        <section id="especialidades" className="bg-light">
          <Especialidades imageTic="/img/tic1.jpg" imageMulti="/img/multi1.jpg" />
        </section>

        {/* 4. Proyectos */}
        <section id="proyectos">
          <Proyectos />
        </section>

        {/* 5. Autoridades */}
        <section id="autoridades" className="text-image-block reverse">
          <Autoridades directorImg="/img/director1.jpeg" />
        </section>

        {/* 6. Testimonios */}
        <section id="testimonios" className="bg-light">
          <Testimonios />
        </section>

        {/* 7. Ubicación */}
        <section id="ubicacion">
          <Ubicacion />
        </section>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}