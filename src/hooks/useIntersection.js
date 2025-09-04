"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersection = useIntersection;
var react_1 = require("react");
function useIntersection(opts) {
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(true), isIntersecting = _a[0], setIntersecting = _a[1];
    (0, react_1.useEffect)(function () {
        var el = ref.current;
        if (!el)
            return;
        var io = new IntersectionObserver(function (_a) {
            var e = _a[0];
            return setIntersecting(e.isIntersecting);
        }, opts);
        io.observe(el);
        return function () { return io.disconnect(); };
    }, [opts]);
    return [ref, isIntersecting];
}
