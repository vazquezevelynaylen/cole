"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Filtros;
function Filtros(_a) {
    var value = _a.value, onChange = _a.onChange;
    var items = [
        { label: 'Todos', val: 'all' },
        { label: 'Urgentes', val: 'urgente' },
        { label: 'Importantes', val: 'importante' },
        { label: 'Informativos', val: 'info' }
    ];
    return (<div className="com-filtros" role="group" aria-label="Filtrar comunicados">
      {items.map(function (it) { return (<button key={it.val} data-filter={it.val} className={value === it.val ? 'is-active' : ''} onClick={function () { return onChange(it.val); }} type="button">
          {it.label}
        </button>); })}
    </div>);
}
