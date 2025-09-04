"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = A11yControls;
var useTheme_1 = require("@hooks/useTheme");
require("./a11y.css");
function A11yControls() {
    var toggleContrast = (0, useTheme_1.useTheme)().toggleContrast;
    var applyFont = function (base) {
        document.documentElement.style.fontSize = "".concat(base, "%");
        localStorage.setItem('fs', String(base));
    };
    var onPlus = function () {
        var base = Math.min(140, parseInt(localStorage.getItem('fs') || '100', 10) + 5);
        applyFont(base);
    };
    var onMinus = function () {
        var base = Math.max(85, parseInt(localStorage.getItem('fs') || '100', 10) - 5);
        applyFont(base);
    };
    var onReset = function () { return applyFont(100); };
    return (<div className="a11y-controls">
      <button onClick={toggleContrast} type="button" aria-pressed={document.documentElement.classList.contains('high-contrast')}>
        Alto contraste
      </button>
      <button onClick={onMinus} type="button">A-</button>
      <button onClick={onReset} type="button">A</button>
      <button onClick={onPlus} type="button">A+</button>
    </div>);
}
