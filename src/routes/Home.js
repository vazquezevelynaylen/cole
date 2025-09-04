"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var Header_1 = require("@components/header/Header");
var Subnav_1 = require("@components/nav/Subnav");
var Hero_1 = require("@components/hero/Hero");
var Especialidades_1 = require("@components/especialidades/Especialidades");
var ComunicadosTable_1 = require("@components/comunicados/ComunicadosTable");
var Filtros_1 = require("@components/comunicados/Filtros");
var A11yControls_1 = require("@components/a11y/A11yControls");
var Footer_1 = require("@components/footer/Footer");
require("@components/header/header.css");
require("@components/nav/subnav.css");
require("@components/hero/hero.css");
require("@components/especialidades/especialidades.css");
require("@components/comunicados/comunicados.css");
require("@components/a11y/a11y.css");
require("@components/modal/modal.css");
require("@components/footer/footer.css");
function Home() {
    return (<>
      <Header_1.default />
      <Subnav_1.default />
      <main id="contenido" tabIndex={-1}>
        <Hero_1.default />
        <Especialidades_1.default />
        <section id="comunicados" aria-labelledby="ttl-comunicados">
          <h2 id="ttl-comunicados">Comunicados</h2>
          <div className="comunicados-wrap" aria-label="Listado completo de comunicados">
            <div className="com-head">
              <h3 className="com-subtitle">Todos los comunicados</h3>
              <Filtros_1.default />
            </div>
            <ComunicadosTable_1.default />
          </div>
        </section>

        <section id="novedades" style={{ minHeight: 300, padding: '40px 16px' }}>
          <h2>Novedades</h2>
          <p>Próximamente…</p>
        </section>
      </main>
      <Footer_1.default />
      <A11yControls_1.default />
    </>);
}
