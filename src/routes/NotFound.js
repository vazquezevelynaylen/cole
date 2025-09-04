"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFound;
var react_router_dom_1 = require("react-router-dom");
function NotFound() {
    return (<main style={{ padding: 24 }}>
      <h1>Página no encontrada</h1>
      <p>La ruta solicitada no existe.</p>
      <p><react_router_dom_1.Link to="/">Volver al inicio</react_router_dom_1.Link></p>
    </main>);
}
