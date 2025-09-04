"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var node_url_1 = require("node:url");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            '@components': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/components', import.meta.url)),
            '@routes': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/routes', import.meta.url)),
            '@styles': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/styles', import.meta.url)),
            '@features': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/features', import.meta.url)),
            '@hooks': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/hooks', import.meta.url)),
            '@lib': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/lib', import.meta.url)),
            '@config': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/config', import.meta.url)),
            '@api': (0, node_url_1.fileURLToPath)(new node_url_1.URL('./src/api', import.meta.url))
        }
    }
});
