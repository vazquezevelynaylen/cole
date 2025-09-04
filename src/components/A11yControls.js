"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = A11yControls;
var react_1 = require("react");
function A11yControls() {
    var _a = (0, react_1.useState)(false), highContrast = _a[0], setHighContrast = _a[1];
    var _b = (0, react_1.useState)('light'), theme = _b[0], setTheme = _b[1];
    (0, react_1.useEffect)(function () {
        var hcEnabled = localStorage.getItem('hc-enabled') === '1';
        var savedTheme = localStorage.getItem('theme') || 'light';
        setHighContrast(hcEnabled);
        setTheme(savedTheme);
        document.documentElement.classList.toggle('high-contrast', hcEnabled);
        document.documentElement.dataset.theme = savedTheme;
    }, []);
    var toggleHighContrast = function () {
        var newValue = !highContrast;
        setHighContrast(newValue);
        localStorage.setItem('hc-enabled', newValue ? '1' : '0');
        document.documentElement.classList.toggle('high-contrast', newValue);
    };
    var toggleTheme = function () {
        var newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.dataset.theme = newTheme;
    };
    return (<div className="a11y-controls">
      <button onClick={toggleHighContrast} aria-pressed={highContrast}>
        {highContrast ? 'Desactivar' : 'Activar'} Alto Contraste
      </button>
      <button onClick={toggleTheme}>
        Cambiar a tema {theme === 'light' ? 'oscuro' : 'claro'}
      </button>
    </div>);
}
