import {
    _ as N,
    g as W,
    i as S,
    h as M,
    r as p,
    e as R
} from "./index.bf235723.js";
var A = N,
    C = W,
    B = "[object Symbol]";

function F(e) {
    return typeof e == "symbol" || C(e) && A(e) == B
}
var G = F,
    D = /\s/;

function H(e) {
    for (var n = e.length; n-- && D.test(e.charAt(n)););
    return n
}
var P = H,
    X = P,
    q = /^\s+/;

function w(e) {
    return e && e.slice(0, X(e) + 1).replace(q, "")
}
var z = w,
    J = z,
    h = S,
    K = G,
    $ = 0 / 0,
    Q = /^[-+]0x[0-9a-f]+$/i,
    V = /^0b[01]+$/i,
    Y = /^0o[0-7]+$/i,
    Z = parseInt;

function ee(e) {
    if (typeof e == "number") return e;
    if (K(e)) return $;
    if (h(e)) {
        var n = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = h(n) ? n + "" : n
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = J(e);
    var t = V.test(e);
    return t || Y.test(e) ? Z(e.slice(2), t ? 2 : 8) : Q.test(e) ? $ : +e
}
var ne = ee,
    re = M,
    te = function() {
        return re.Date.now()
    },
    ie = te,
    ae = S,
    x = ie,
    O = ne,
    ue = "Expected a function",
    fe = Math.max,
    se = Math.min;

function ce(e, n, t) {
    var u, a, v, c, i, s, o = 0,
        y = !1,
        d = !1,
        l = !0;
    if (typeof e != "function") throw new TypeError(ue);
    n = O(n) || 0, ae(t) && (y = !!t.leading, d = "maxWait" in t, v = d ? fe(O(t.maxWait) || 0, n) : v, l = "trailing" in t ? !!t.trailing : l);

    function g(r) {
        var f = u,
            m = a;
        return u = a = void 0, o = r, c = e.apply(m, f), c
    }

    function k(r) {
        return o = r, i = setTimeout(b, n), y ? g(r) : c
    }

    function L(r) {
        var f = r - s,
            m = r - o,
            _ = n - f;
        return d ? se(_, v - m) : _
    }

    function E(r) {
        var f = r - s,
            m = r - o;
        return s === void 0 || f >= n || f < 0 || d && m >= v
    }

    function b() {
        var r = x();
        if (E(r)) return I(r);
        i = setTimeout(b, L(r))
    }

    function I(r) {
        return i = void 0, l && u ? g(r) : (u = a = void 0, c)
    }

    function U() {
        i !== void 0 && clearTimeout(i), o = 0, u = s = a = i = void 0
    }

    function j() {
        return i === void 0 ? c : I(x())
    }

    function T() {
        var r = x(),
            f = E(r);
        if (u = arguments, a = this, s = r, f) {
            if (i === void 0) return k(s);
            if (d) return clearTimeout(i), i = setTimeout(b, n), g(s)
        }
        return i === void 0 && (i = setTimeout(b, n)), c
    }
    return T.cancel = U, T.flush = j, T
}
var ve = ce,
    oe = function(n) {
        return function(t, u) {
            var a = p.exports.useRef(!1);
            n(function() {
                return function() {
                    a.current = !1
                }
            }, []), n(function() {
                if (!a.current) a.current = !0;
                else return t()
            }, u)
        }
    },
    be = oe(p.exports.useEffect),
    de = function(n) {
        var t = R(n);
        p.exports.useEffect(function() {
            return function() {
                t.current()
            }
        }, [])
    },
    le = de;
export {
    le as a, ve as d, be as u
};