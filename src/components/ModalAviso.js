"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ModalAviso;
var react_1 = require("react");
function ModalAviso() {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    if (!isOpen)
        return null;
    return (<div className="modal-backdrop" onClick={function () { return setIsOpen(false); }}>
      <div className="modal" onClick={function (e) { return e.stopPropagation(); }}>
        <h2>Aviso Importante</h2>
        <p>Contenido del modal de aviso.</p>
        <button onClick={function () { return setIsOpen(false); }}>Cerrar</button>
      </div>
    </div>);
}
