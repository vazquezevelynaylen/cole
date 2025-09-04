"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
var node_path_1 = require("node:path");
exports.default = (0, vite_1.defineConfig)({
    plugins: [(0, plugin_react_1.default)()],
    resolve: {
        alias: {
            '@components': node_path_1.default.resolve(__dirname, 'src/components'),
            '@routes': node_path_1.default.resolve(__dirname, 'src/routes'),
            '@styles': node_path_1.default.resolve(__dirname, 'src/styles'),
            '@features': node_path_1.default.resolve(__dirname, 'src/features'),
            '@hooks': node_path_1.default.resolve(__dirname, 'src/hooks'),
            '@lib': node_path_1.default.resolve(__dirname, 'src/lib'),
            '@config': node_path_1.default.resolve(__dirname, 'src/config'),
            '@api': node_path_1.default.resolve(__dirname, 'src/api'),
        },
    },
});
