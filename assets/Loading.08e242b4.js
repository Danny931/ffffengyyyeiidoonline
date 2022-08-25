import {
    t as z,
    r as i,
    C as I,
    l as d,
    m as F,
    o as L,
    p as M,
    q as u,
    s as p,
    v as T,
    x as W,
    y as $,
    z as h,
    A as E,
    j as q
} from "./index.bf235723.js";
import {
    d as A
} from "./index.12cf2eb3.js";
var B = globalThis && globalThis.__rest || function(t, s) {
    var a = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && s.indexOf(n) < 0 && (a[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var e = 0, n = Object.getOwnPropertySymbols(t); e < n.length; e++) s.indexOf(n[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[e]) && (a[n[e]] = t[n[e]]);
    return a
};
z("small", "default", "large");
var v = null;

function R(t, s) {
    var a = s.indicator,
        n = "".concat(t, "-dot");
    return a === null ? null : h(a) ? E(a, {
        className: u(a.props.className, n)
    }) : h(v) ? E(v, {
        className: u(v.props.className, n)
    }) : i.exports.createElement("span", {
        className: u(n, "".concat(t, "-dot-spin"))
    }, i.exports.createElement("i", {
        className: "".concat(t, "-dot-item")
    }), i.exports.createElement("i", {
        className: "".concat(t, "-dot-item")
    }), i.exports.createElement("i", {
        className: "".concat(t, "-dot-item")
    }), i.exports.createElement("i", {
        className: "".concat(t, "-dot-item")
    }))
}

function V(t, s) {
    return !!t && !!s && !isNaN(Number(s))
}
var P = function(t) {
    F(a, t);
    var s = L(a);

    function a(n) {
        var e;
        M(this, a), e = s.call(this, n), e.debouncifyUpdateSpinning = function(c) {
            var r = c || e.props,
                f = r.delay;
            f && (e.cancelExistingSpin(), e.updateSpinning = A(e.originalUpdateSpinning, f))
        }, e.updateSpinning = function() {
            var c = e.props.spinning,
                r = e.state.spinning;
            r !== c && e.setState({
                spinning: c
            })
        }, e.renderSpin = function(c) {
            var r, f = c.direction,
                l = e.props,
                o = l.spinPrefixCls,
                k = l.className,
                N = l.size,
                y = l.tip,
                O = l.wrapperClassName,
                U = l.style,
                w = B(l, ["spinPrefixCls", "className", "size", "tip", "wrapperClassName", "style"]),
                g = e.state.spinning,
                D = u(o, (r = {}, p(r, "".concat(o, "-sm"), N === "small"), p(r, "".concat(o, "-lg"), N === "large"), p(r, "".concat(o, "-spinning"), g), p(r, "".concat(o, "-show-text"), !!y), p(r, "".concat(o, "-rtl"), f === "rtl"), r), k),
                S = T(w, ["spinning", "delay", "indicator", "prefixCls"]),
                C = i.exports.createElement("div", d({}, S, {
                    style: U,
                    className: D,
                    "aria-live": "polite",
                    "aria-busy": g
                }), R(o, e.props), y ? i.exports.createElement("div", {
                    className: "".concat(o, "-text")
                }, y) : null);
            if (e.isNestedPattern()) {
                var j = u("".concat(o, "-container"), p({}, "".concat(o, "-blur"), g));
                return i.exports.createElement("div", d({}, S, {
                    className: u("".concat(o, "-nested-loading"), O)
                }), g && i.exports.createElement("div", {
                    key: "loading"
                }, C), i.exports.createElement("div", {
                    className: j,
                    key: "container"
                }, e.props.children))
            }
            return C
        };
        var m = n.spinning,
            x = n.delay,
            b = V(m, x);
        return e.state = {
            spinning: m && !b
        }, e.originalUpdateSpinning = e.updateSpinning, e.debouncifyUpdateSpinning(n), e
    }
    return W(a, [{
        key: "componentDidMount",
        value: function() {
            this.updateSpinning()
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.debouncifyUpdateSpinning(), this.updateSpinning()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.cancelExistingSpin()
        }
    }, {
        key: "cancelExistingSpin",
        value: function() {
            var e = this.updateSpinning;
            e && e.cancel && e.cancel()
        }
    }, {
        key: "isNestedPattern",
        value: function() {
            return !!(this.props && typeof this.props.children != "undefined")
        }
    }, {
        key: "render",
        value: function() {
            return i.exports.createElement($, null, this.renderSpin)
        }
    }]), a
}(i.exports.Component);
P.defaultProps = {
    spinning: !0,
    size: "default",
    wrapperClassName: ""
};
var _ = function(s) {
    var a = s.prefixCls,
        n = i.exports.useContext(I),
        e = n.getPrefixCls,
        m = e("spin", a),
        x = d(d({}, s), {
            spinPrefixCls: m
        });
    return i.exports.createElement(P, d({}, x))
};
_.setDefaultIndicator = function(t) {
    v = t
};
var G = _;
const K = () => q(G, {});
export {
    K as L, G as S
};