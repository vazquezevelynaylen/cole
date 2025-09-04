"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = useTheme;
var react_1 = require("react");
var THEME_KEY = 'theme';
var HC_KEY = 'hc-enabled';
function useTheme() {
    // Boot (solo una vez)
    (0, react_1.useEffect)(function () {
        var saved = localStorage.getItem(THEME_KEY);
        var prefersDark = matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
        var applyHC = function (on) { return document.documentElement.classList.toggle('high-contrast', on); };
        applyHC(localStorage.getItem(HC_KEY) === '1');
        // fuente base
        var base = parseInt(localStorage.getItem('fs') || '100', 10);
        document.documentElement.style.fontSize = "".concat(base, "%");
    }, []);
    var toggleContrast = function () {
        var on = !(localStorage.getItem(HC_KEY) === '1');
        localStorage.setItem(HC_KEY, on ? '1' : '0');
        document.documentElement.classList.toggle('high-contrast', on);
    };
    return { toggleContrast: toggleContrast };
}
