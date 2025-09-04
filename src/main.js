"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.tsx
var react_1 = require("react");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
require("@styles/globals.css");
var el = document.getElementById('root');
(0, client_1.createRoot)(el).render(<react_1.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <App_1.default />
    </react_router_dom_1.BrowserRouter>
  </react_1.StrictMode>);
