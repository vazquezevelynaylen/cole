"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = useModal;
var react_1 = require("react");
function useModal(initial) {
    if (initial === void 0) { initial = false; }
    var _a = (0, react_1.useState)(initial), open = _a[0], setOpen = _a[1];
    var show = (0, react_1.useCallback)(function () { return setOpen(true); }, []);
    var hide = (0, react_1.useCallback)(function () { return setOpen(false); }, []);
    return { open: open, show: show, hide: hide };
}
