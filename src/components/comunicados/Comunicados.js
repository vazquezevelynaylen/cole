"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Comunicados;
var react_1 = require("react");
var data_1 = require("../../data");
var format_1 = require("../../utils/format");
function Comunicados() {
    var sorted = (0, react_1.useMemo)(function () { return __spreadArray([], data_1.default, true).sort(function (a, b) { return b.fecha.localeCompare(a.fecha); }); }, []);
    var _a = (0, react_1.useState)('all'), filtro = _a[0], setFiltro = _a[1];
    var view = (0, react_1.useMemo)(function () { return (filtro === 'all' ? sorted : sorted.filter(function (x) { return x.tag === filtro; })); }, [sorted, filtro]);
    (0, react_1.useEffect)(function () {
        var live = document.getElementById('com-aria');
        if (live)
            live.textContent = "Se muestran ".concat(view.length, " comunicados.");
    }, [view.length]);
    return (<section id="comunicados" aria-labelledby="ttl-comunicados">
      <h2 id="ttl-comunicados">Comunicados</h2>

      <div className="comunicados-wrap" aria-label="Listado completo de comunicados">
        <div className="com-head">
          <h3 className="com-subtitle">Todos los comunicados</h3>
          <div className="com-filtros" role="group" aria-label="Filtrar comunicados" onClick={function (e) {
            var btn = e.target.closest('button[data-filter]');
            if (!btn)
                return;
            setFiltro(btn.dataset.filter || 'all');
            e.currentTarget.querySelectorAll('button').forEach(function (b) { return b.classList.toggle('is-active', b === btn); });
        }}>
            <button data-filter="all" className="is-active">Todos</button>
            <button data-filter="urgente">Urgentes</button>
            <button data-filter="importante">Importantes</button>
            <button data-filter="info">Informativos</button>
          </div>
        </div>

        <div aria-live="polite" className="visually-hidden" id="com-aria"></div>

        <table className="comunicados-table" aria-describedby="ttl-comunicados">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Título</th>
              <th scope="col">Detalle</th>
              <th scope="col">Enlace/Archivo</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {view.map(function (it) { return (<tr key={it.titulo + it.fecha} data-tag={it.tag}>
                <td data-label="Fecha">{(0, format_1.fmtFecha)(it.fecha)}</td>
                <td data-label="Título">{it.titulo}</td>
                <td data-label="Detalle">{it.detalle}</td>
                <td data-label="Enlace/Archivo"><a href={it.link} target="_blank" rel="noopener">Abrir</a></td>
                <td data-label="Estado" dangerouslySetInnerHTML={{ __html: (0, format_1.badge)(it.tag, it.estado) }}/>
              </tr>); })}
          </tbody>
        </table>
      </div>
    </section>);
}
