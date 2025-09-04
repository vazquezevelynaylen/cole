"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
// src/App.tsx
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("@routes/Home");
var NotFound_1 = require("@routes/NotFound");
var Header_1 = require("@components/header/Header");
var Subnav_1 = require("@components/nav/Subnav");
var Footer_1 = require("@components/footer/Footer");
var A11yControls_1 = require("@components/a11y/A11yControls");
require("@styles/utilities.css");
function App() {
    return (<>
      <Header_1.default />
      <Subnav_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="*" element={<NotFound_1.default />}/>
      </react_router_dom_1.Routes>
      <Footer_1.default />
      <A11yControls_1.default />
    </>);
}
