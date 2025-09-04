"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
var react_1 = require("react");
require("./header/header.css");
function Header(_a) {
    var _b = _a.isSolid, isSolid = _b === void 0 ? false : _b;
    (0, react_1.useEffect)(function () {
        // Drawer móvil + focus básico
        var body = document.body;
        var toggle = document.getElementById('nav-toggle');
        var nav = document.getElementById('primary-menu');
        var backdrop = document.querySelector('.nav-backdrop');
        if (!toggle || !nav || !backdrop)
            return;
        var setOpen = function (open) {
            body.classList.toggle('nav-open', open);
            toggle.setAttribute('aria-expanded', String(open));
            backdrop.hidden = !open;
            if (open) {
                var first = nav.querySelector('a,button');
                first && first.focus();
            }
            else {
                toggle.focus();
            }
        };
        var onEsc = function (e) { if (e.key === 'Escape')
            setOpen(false); };
        toggle.addEventListener('click', function () { return setOpen(!body.classList.contains('nav-open')); });
        backdrop.addEventListener('click', function () { return setOpen(false); });
        document.addEventListener('keydown', onEsc);
        return function () {
            document.removeEventListener('keydown', onEsc);
        };
    }, []);
    (0, react_1.useEffect)(function () {
        // Submenús "pin"
        var items = document.querySelectorAll('.menu > .has-submenu');
        items.forEach(function (li) {
            var btn = li.querySelector('button[aria-haspopup="true"]');
            var submenu = li.querySelector('.submenu');
            if (!btn || !submenu)
                return;
            var onClick = function (e) {
                e.preventDefault();
                var open = li.classList.toggle('open');
                btn.setAttribute('aria-expanded', String(open));
            };
            var onKey = function (e) {
                if (e.key === 'Escape') {
                    li.classList.remove('open');
                    btn.setAttribute('aria-expanded', 'false');
                    btn.focus();
                }
            };
            btn.addEventListener('click', onClick);
            li.addEventListener('keydown', onKey);
            // Limpieza
            return function () {
                btn.removeEventListener('click', onClick);
                li.removeEventListener('keydown', onKey);
            };
        });
        // ESC global cierra todos
        var onEscAll = function (e) {
            if (e.key === 'Escape') {
                document.querySelectorAll('.menu > .has-submenu.open').forEach(function (li) {
                    var _a;
                    li.classList.remove('open');
                    (_a = li.querySelector('button[aria-haspopup="true"]')) === null || _a === void 0 ? void 0 : _a.setAttribute('aria-expanded', 'false');
                });
            }
        };
        document.addEventListener('keydown', onEscAll);
        return function () { return document.removeEventListener('keydown', onEscAll); };
    }, []);
    return (<>
      <div className="nav-backdrop" hidden></div>
      <header className={isSolid ? 'solid' : ''}>
        <h1>E.T. 20 D.E. 20 "Carolina Muzilli"</h1>

        <button id="nav-toggle" className="nav-toggle" aria-controls="primary-menu" aria-expanded="false" aria-label="Abrir menú">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>

        <nav aria-label="Navegación principal" id="primary-menu">
          <ul className="menu">
            <li><a href="#top" id="link-inicio">Inicio</a></li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Institucional</button>
              <ul className="submenu" role="menu">
                <li><a href="#institucional">Presentación</a></li>
                <li><a href="#institucional">Autoridades</a></li>
                <li><a href="#institucional">Ubicación & 360°</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Especialidades</button>
              <ul className="submenu" role="menu">
                <li><a href="#especialidades">TICs</a></li>
                <li><a href="#especialidades">Multimedia</a></li>
                <li><a href="#academico">Calendario</a></li>
              </ul>
            </li>

            <li className="has-submenu">
              <button aria-haspopup="true" aria-expanded="false">Académico</button>
              <ul className="submenu" role="menu">
                <li><a href="#comunicados">Avisos</a></li>
                <li><a href="#comunicados">Exámenes</a></li>
                <li><a href="#comunicados">Boletines</a></li>
              </ul>
            </li>

            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </>);
}
