"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Modal;
var react_1 = require("react");
require("./modal.css");
function Modal(_a) {
    var open = _a.open, onClose = _a.onClose, title = _a.title, children = _a.children;
    (0, react_1.useEffect)(function () {
        var onKey = function (e) { if (e.key === 'Escape' && open)
            onClose(); };
        document.addEventListener('keydown', onKey);
        return function () { return document.removeEventListener('keydown', onKey); };
    }, [open, onClose]);
    if (!open)
        return null;
    return (<div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-backdrop" onClick={onClose}/>
      <div className="modal">
        <h3 id="modal-title">{title}</h3>
        <div>{children}</div>
        <div className="modal-actions">
          <button type="button" onClick={onClose}>Cerrar</button>
          <button type="button" autoFocus onClick={onClose}>Entendido</button>
        </div>
      </div>
    </div>);
}
