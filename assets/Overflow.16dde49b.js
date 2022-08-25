import {
    r,
    K,
    l as g,
    q as ie,
    E as z,
    $ as Ce,
    az as Be,
    G as y,
    H as Ne,
    ad as Ye
} from "./index.bf235723.js";
var Je = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"],
    b = void 0;

function Qe(e, u) {
    var v = e.prefixCls,
        i = e.invalidate,
        l = e.item,
        n = e.renderItem,
        f = e.responsive,
        p = e.responsiveDisabled,
        o = e.registerSize,
        R = e.itemKey,
        _ = e.className,
        h = e.style,
        q = e.children,
        B = e.display,
        c = e.order,
        A = e.component,
        P = A === void 0 ? "div" : A,
        U = K(e, Je),
        m = f && !B;

    function F(E) {
        o(R, E)
    }
    r.exports.useEffect(function() {
        return function() {
            F(null)
        }
    }, []);
    var Y = n && l !== b ? n(l) : q,
        I;
    i || (I = {
        opacity: m ? 0 : 1,
        height: m ? 0 : b,
        overflowY: m ? "hidden" : b,
        order: f ? c : b,
        pointerEvents: m ? "none" : b,
        position: m ? "absolute" : b
    });
    var M = {};
    m && (M["aria-hidden"] = !0);
    var x = r.exports.createElement(P, g({
        className: ie(!i && v, _),
        style: z(z({}, I), h)
    }, M, U, {
        ref: u
    }), Y);
    return f && (x = r.exports.createElement(Ce, {
        onResize: function(J) {
            var O = J.offsetWidth;
            F(O)
        },
        disabled: p
    }, x)), x
}
var k = r.exports.forwardRef(Qe);
k.displayName = "Item";

function Ze() {
    var e = Be({}),
        u = y(e, 2),
        v = u[1],
        i = r.exports.useRef([]),
        l = 0,
        n = 0;

    function f(p) {
        var o = l;
        l += 1, i.current.length < o + 1 && (i.current[o] = p);
        var R = i.current[o];

        function _(h) {
            i.current[o] = typeof h == "function" ? h(i.current[o]) : h, Ne.cancel(n), n = Ne(function() {
                v({}, !0)
            })
        }
        return [R, _]
    }
    return f
}
var et = ["component"],
    tt = ["className"],
    rt = ["className"],
    at = function(u, v) {
        var i = r.exports.useContext(H);
        if (!i) {
            var l = u.component,
                n = l === void 0 ? "div" : l,
                f = K(u, et);
            return r.exports.createElement(n, g({}, f, {
                ref: v
            }))
        }
        var p = i.className,
            o = K(i, tt),
            R = u.className,
            _ = K(u, rt);
        return r.exports.createElement(H.Provider, {
            value: null
        }, r.exports.createElement(k, g({
            ref: v,
            className: ie(p, R)
        }, o, _)))
    },
    ge = r.exports.forwardRef(at);
ge.displayName = "RawItem";
var nt = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"],
    H = r.exports.createContext(null),
    Ie = "responsive",
    Ee = "invalidate";

function st(e) {
    return "+ ".concat(e.length, " ...")
}

function it(e, u) {
    var v = e.prefixCls,
        i = v === void 0 ? "rc-overflow" : v,
        l = e.data,
        n = l === void 0 ? [] : l,
        f = e.renderItem,
        p = e.renderRawItem,
        o = e.itemKey,
        R = e.itemWidth,
        _ = R === void 0 ? 10 : R,
        h = e.ssr,
        q = e.style,
        B = e.className,
        c = e.maxCount,
        A = e.renderRest,
        P = e.renderRawRest,
        U = e.suffix,
        m = e.component,
        F = m === void 0 ? "div" : m,
        Y = e.itemComponent,
        I = e.onVisibleChange,
        M = K(e, nt),
        x = Ze(),
        E = h === "full",
        J = x(null),
        O = y(J, 2),
        V = O[0],
        we = O[1],
        N = V || 0,
        be = x(new Map),
        oe = y(be, 2),
        le = oe[0],
        ze = oe[1],
        Pe = x(0),
        ue = y(Pe, 2),
        Ue = ue[0],
        We = ue[1],
        De = x(0),
        fe = y(De, 2),
        $ = fe[0],
        Ke = fe[1],
        ke = x(0),
        de = y(ke, 2),
        T = de[0],
        Ae = de[1],
        Fe = r.exports.useState(null),
        ve = y(Fe, 2),
        ce = ve[0],
        G = ve[1],
        Me = r.exports.useState(null),
        me = y(Me, 2),
        Q = me[0],
        Oe = me[1],
        w = r.exports.useMemo(function() {
            return Q === null && E ? Number.MAX_SAFE_INTEGER : Q || 0
        }, [Q, V]),
        Ve = r.exports.useState(!1),
        xe = y(Ve, 2),
        $e = xe[0],
        Te = xe[1],
        Z = "".concat(i, "-item"),
        Se = Math.max(Ue, $),
        ee = c === Ie,
        S = n.length && ee,
        ye = c === Ee,
        Ge = S || typeof c == "number" && n.length > c,
        C = r.exports.useMemo(function() {
            var t = n;
            return S ? V === null && E ? t = n : t = n.slice(0, Math.min(n.length, N / _)) : typeof c == "number" && (t = n.slice(0, c)), t
        }, [n, _, V, c, S]),
        te = r.exports.useMemo(function() {
            return S ? n.slice(w + 1) : n.slice(C.length)
        }, [n, C, S, w]),
        L = r.exports.useCallback(function(t, a) {
            var s;
            return typeof o == "function" ? o(t) : (s = o && (t == null ? void 0 : t[o])) !== null && s !== void 0 ? s : a
        }, [o]),
        Le = r.exports.useCallback(f || function(t) {
            return t
        }, [f]);

    function j(t, a) {
        Oe(t), a || (Te(t < n.length - 1), I == null || I(t))
    }

    function je(t, a) {
        we(a.clientWidth)
    }

    function pe(t, a) {
        ze(function(s) {
            var d = new Map(s);
            return a === null ? d.delete(t) : d.set(t, a), d
        })
    }

    function He(t, a) {
        Ke(a), We($)
    }

    function Xe(t, a) {
        Ae(a)
    }

    function re(t) {
        return le.get(L(C[t], t))
    }
    Ye(function() {
        if (N && Se && C) {
            var t = T,
                a = C.length,
                s = a - 1;
            if (!a) {
                j(0), G(null);
                return
            }
            for (var d = 0; d < a; d += 1) {
                var D = re(d);
                if (E && (D = D || 0), D === void 0) {
                    j(d - 1, !0);
                    break
                }
                if (t += D, s === 0 && t <= N || d === s - 1 && t + re(s) <= N) {
                    j(s), G(null);
                    break
                } else if (t + Se > N) {
                    j(d - 1), G(t - D - T + $);
                    break
                }
            }
            U && re(0) + T > N && G(null)
        }
    }, [N, le, $, T, L, C]);
    var Re = $e && !!te.length,
        _e = {};
    ce !== null && S && (_e = {
        position: "absolute",
        left: ce,
        top: 0
    });
    var W = {
            prefixCls: Z,
            responsive: S,
            component: Y,
            invalidate: ye
        },
        qe = p ? function(t, a) {
            var s = L(t, a);
            return r.exports.createElement(H.Provider, {
                key: s,
                value: z(z({}, W), {}, {
                    order: a,
                    item: t,
                    itemKey: s,
                    registerSize: pe,
                    display: a <= w
                })
            }, p(t, a))
        } : function(t, a) {
            var s = L(t, a);
            return r.exports.createElement(k, g({}, W, {
                order: a,
                key: s,
                item: t,
                renderItem: Le,
                itemKey: s,
                registerSize: pe,
                display: a <= w
            }))
        },
        ae, he = {
            order: Re ? w : Number.MAX_SAFE_INTEGER,
            className: "".concat(Z, "-rest"),
            registerSize: He,
            display: Re
        };
    if (P) P && (ae = r.exports.createElement(H.Provider, {
        value: z(z({}, W), he)
    }, P(te)));
    else {
        var ne = A || st;
        ae = r.exports.createElement(k, g({}, W, he), typeof ne == "function" ? ne(te) : ne)
    }
    var se = r.exports.createElement(F, g({
        className: ie(!ye && i, B),
        style: q,
        ref: u
    }, M), C.map(qe), Ge ? ae : null, U && r.exports.createElement(k, g({}, W, {
        responsive: ee,
        responsiveDisabled: !S,
        order: w,
        className: "".concat(Z, "-suffix"),
        registerSize: Xe,
        display: !0,
        style: _e
    }), U));
    return ee && (se = r.exports.createElement(Ce, {
        onResize: je,
        disabled: !S
    }, se)), se
}
var X = r.exports.forwardRef(it);
X.displayName = "Overflow";
X.Item = ge;
X.RESPONSIVE = Ie;
X.INVALIDATE = Ee;
export {
    X as F
};