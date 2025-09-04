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
var react_1 = require("react");
var data_1 = require("@features/comunicados/data");
var utils_1 = require("@features/comunicados/utils");
var ComunicadosTable = function (_a) {
    var _b = _a.filterTag, filterTag = _b === void 0 ? 'all' : _b;
    var sorted = (0, react_1.useMemo)(function () { return __spreadArray([], data_1.DATA, true).sort(function (a, b) { return b.fecha.localeCompare(a.fecha); }); }, []);
    var view = (0, react_1.useMemo)(function () { return (filterTag === 'all' ? sorted : sorted.filter(function (x) { return x.tag === filterTag; })); }, [sorted, filterTag]);
    return (<table className="comunicados-table" aria-describedby="ttl-comunicados">
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
            <td data-label="Fecha">{(0, utils_1.fmtFecha)(it.fecha)}</td>
            <td data-label="Título">{it.titulo}</td>
            <td data-label="Detalle">{it.detalle}</td>
            <td data-label="Enlace/Archivo">
              <a href={it.link} target="_blank" rel="noopener">
                Abrir
              </a>
            </td>
            <td data-label="Estado" 
        // es HTML seguro que generamos nosotros (no viene de usuario)
        dangerouslySetInnerHTML={{ __html: (0, utils_1.badgeHTML)(it.tag, it.estado) }}/>
          </tr>); })}
      </tbody>
    </table>);
};
exports.default = ComunicadosTable;
