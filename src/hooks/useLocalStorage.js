"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalStorage = useLocalStorage;
var react_1 = require("react");
function useLocalStorage(key, initial) {
    var _a = (0, react_1.useState)(function () {
        var raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : initial;
    }), value = _a[0], setValue = _a[1];
    (0, react_1.useEffect)(function () {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    var update = (0, react_1.useCallback)(function (v) {
        setValue(function (prev) { return (typeof v === 'function' ? v(prev) : v); });
    }, []);
    return [value, update];
}
