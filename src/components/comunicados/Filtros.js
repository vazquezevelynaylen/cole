"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Filtros = function (_a) {
    var value = _a.value, onChange = _a.onChange;
    var btn = function (t, label) { return (<button data-filter={t} className={value === t ? 'is-active' : ''} onClick={function () { return onChange(t); }} type="button">
      {label}
    </button>); };
    return (<div className="com-filtros" role="group" aria-label="Filtrar comunicados">
      {btn('all', 'Todos')}
      {btn('urgente', 'Urgentes')}
      {btn('importante', 'Importantes')}
      {btn('info', 'Informativos')}
    </div>);
};
exports.default = Filtros;
