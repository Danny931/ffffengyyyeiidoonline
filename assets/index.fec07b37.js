import {
    r as t,
    D as fe,
    E as m,
    G as x,
    H as He,
    s as V,
    J as ke,
    K as Le,
    L as qe,
    l as L,
    q as ne,
    M as Ae,
    N as ve,
    O as lt,
    P as ct,
    C as Je,
    Q as Ie,
    R as We,
    S as ut
} from "./index.bf235723.js";
var vt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                }
            }]
        },
        name: "left",
        theme: "outlined"
    },
    ft = vt,
    Qe = function(e, o) {
        return t.exports.createElement(fe, m(m({}, e), {}, {
            ref: o,
            icon: ft
        }))
    };
Qe.displayName = "LeftOutlined";
var pt = t.exports.forwardRef(Qe),
    dt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                }
            }]
        },
        name: "right",
        theme: "outlined"
    },
    mt = dt,
    et = function(e, o) {
        return t.exports.createElement(fe, m(m({}, e), {}, {
            ref: o,
            icon: mt
        }))
    };
et.displayName = "RightOutlined";
var gt = t.exports.forwardRef(et);

function wt() {
    var n = document.documentElement.clientWidth,
        e = window.innerHeight || document.documentElement.clientHeight;
    return {
        width: n,
        height: e
    }
}

function Ct(n) {
    var e = n.getBoundingClientRect(),
        o = document.documentElement;
    return {
        left: e.left + (window.pageXOffset || o.scrollLeft) - (o.clientLeft || document.body.clientLeft || 0),
        top: e.top + (window.pageYOffset || o.scrollTop) - (o.clientTop || document.body.clientTop || 0)
    }
}

function xt(n) {
    var e = t.exports.useRef(null),
        o = t.exports.useState(n),
        r = x(o, 2),
        i = r[0],
        u = r[1],
        l = t.exports.useRef([]),
        c = function(f) {
            e.current === null && (l.current = [], e.current = He(function() {
                u(function(p) {
                    var h = p;
                    return l.current.forEach(function(S) {
                        h = m(m({}, h), S)
                    }), e.current = null, h
                })
            })), l.current.push(f)
        };
    return t.exports.useEffect(function() {
        return function() {
            return e.current && He.cancel(e.current)
        }
    }, []), [i, c]
}

function Ye(n, e, o, r) {
    var i = e + o,
        u = (o - r) / 2;
    if (o > r) {
        if (e > 0) return V({}, n, u);
        if (e < 0 && i < r) return V({}, n, -u)
    } else if (e < 0 || i > r) return V({}, n, e < 0 ? u : -u);
    return {}
}

function ht(n, e, o, r) {
    var i = wt(),
        u = i.width,
        l = i.height,
        c = null;
    return n <= u && e <= l ? c = {
        x: 0,
        y: 0
    } : (n > u || e > l) && (c = m(m({}, Ye("x", o, n, u)), Ye("y", r, e, l))), c
}
var Pt = ["visible", "onVisibleChange", "getContainer", "current", "countRender"],
    Ge = t.exports.createContext({
        previewUrls: new Map,
        setPreviewUrls: function() {
            return null
        },
        current: null,
        setCurrent: function() {
            return null
        },
        setShowPreview: function() {
            return null
        },
        setMousePosition: function() {
            return null
        },
        registerImage: function() {
            return function() {
                return null
            }
        },
        rootClassName: ""
    }),
    St = Ge.Provider,
    yt = function(e) {
        var o = e.previewPrefixCls,
            r = o === void 0 ? "rc-image-preview" : o,
            i = e.children,
            u = e.icons,
            l = u === void 0 ? {} : u,
            c = e.preview,
            w = ke(c) === "object" ? c : {},
            f = w.visible,
            p = f === void 0 ? void 0 : f,
            h = w.onVisibleChange,
            S = h === void 0 ? void 0 : h,
            G = w.getContainer,
            E = G === void 0 ? void 0 : G,
            I = w.current,
            W = I === void 0 ? 0 : I,
            Z = w.countRender,
            ae = Z === void 0 ? void 0 : Z,
            pe = Le(w, Pt),
            de = t.exports.useState(new Map),
            U = x(de, 2),
            O = U[0],
            k = U[1],
            me = t.exports.useState(),
            Y = x(me, 2),
            F = Y[0],
            $ = Y[1],
            ge = qe(!!p, {
                value: p,
                onChange: S
            }),
            X = x(ge, 2),
            C = X[0],
            g = X[1],
            _ = t.exports.useState(null),
            R = x(_, 2),
            B = R[0],
            j = R[1],
            D = p !== void 0,
            K = Array.from(O.keys()),
            N = K[W],
            T = new Map(Array.from(O).filter(function(y) {
                var v = x(y, 2),
                    P = v[1].canPreview;
                return !!P
            }).map(function(y) {
                var v = x(y, 2),
                    P = v[0],
                    d = v[1].url;
                return [P, d]
            })),
            ie = function(v, P) {
                var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
                    le = function() {
                        k(function(q) {
                            var J = new Map(q),
                                Q = J.delete(v);
                            return Q ? J : q
                        })
                    };
                return k(function(M) {
                    return new Map(M).set(v, {
                        url: P,
                        canPreview: d
                    })
                }), le
            },
            se = function(v) {
                v.stopPropagation(), g(!1), j(null)
            };
        return t.exports.useEffect(function() {
            $(N)
        }, [N]), t.exports.useEffect(function() {
            !C && D && $(N)
        }, [N, D, C]), t.exports.createElement(St, {
            value: {
                isPreviewGroup: !0,
                previewUrls: T,
                setPreviewUrls: k,
                current: F,
                setCurrent: $,
                setShowPreview: g,
                setMousePosition: j,
                registerImage: ie
            }
        }, i, t.exports.createElement(tt, L({
            "aria-hidden": !C,
            visible: C,
            prefixCls: r,
            onClose: se,
            mousePosition: B,
            src: T.get(F),
            icons: l,
            getContainer: E,
            countRender: ae
        }, pe)))
    },
    Ot = ["prefixCls", "src", "alt", "onClose", "afterClose", "visible", "icons", "rootClassName", "countRender"],
    Me = t.exports.useState,
    Fe = t.exports.useEffect,
    Rt = t.exports.useCallback,
    Xe = t.exports.useRef,
    bt = t.exports.useContext,
    oe = {
        x: 0,
        y: 0
    },
    tt = function(e) {
        var o, r = e.prefixCls,
            i = e.src,
            u = e.alt,
            l = e.onClose;
        e.afterClose;
        var c = e.visible,
            w = e.icons,
            f = w === void 0 ? {} : w,
            p = e.rootClassName,
            h = e.countRender,
            S = Le(e, Ot),
            G = f.rotateLeft,
            E = f.rotateRight,
            I = f.zoomIn,
            W = f.zoomOut,
            Z = f.close,
            ae = f.left,
            pe = f.right,
            de = Me(1),
            U = x(de, 2),
            O = U[0],
            k = U[1],
            me = Me(0),
            Y = x(me, 2),
            F = Y[0],
            $ = Y[1],
            ge = xt(oe),
            X = x(ge, 2),
            C = X[0],
            g = X[1],
            _ = Xe(),
            R = Xe({
                originX: 0,
                originY: 0,
                deltaX: 0,
                deltaY: 0
            }),
            B = Me(!1),
            j = x(B, 2),
            D = j[0],
            K = j[1],
            N = bt(Ge),
            T = N.previewUrls,
            ie = N.current,
            se = N.isPreviewGroup,
            y = N.setCurrent,
            v = T.size,
            P = Array.from(T.keys()),
            d = P.indexOf(ie),
            le = se ? T.get(ie) : i,
            M = se && v > 1,
            q = Me({
                wheelDirection: 0
            }),
            J = x(q, 2),
            Q = J[0],
            we = J[1],
            ce = function() {
                k(1), $(0), g(oe)
            },
            Re = function() {
                k(function(a) {
                    return a + 1
                }), g(oe)
            },
            Ce = function() {
                O > 1 && k(function(a) {
                    return a - 1
                }), g(oe)
            },
            ze = function() {
                $(function(a) {
                    return a + 90
                })
            },
            be = function() {
                $(function(a) {
                    return a - 90
                })
            },
            ee = function(a) {
                a.preventDefault(), a.stopPropagation(), d > 0 && y(P[d - 1])
            },
            te = function(a) {
                a.preventDefault(), a.stopPropagation(), d < v - 1 && y(P[d + 1])
            },
            xe = ne(V({}, "".concat(r, "-moving"), D)),
            $e = "".concat(r, "-operations-operation"),
            De = "".concat(r, "-operations-icon"),
            Te = [{
                icon: Z,
                onClick: l,
                type: "close"
            }, {
                icon: I,
                onClick: Re,
                type: "zoomIn"
            }, {
                icon: W,
                onClick: Ce,
                type: "zoomOut",
                disabled: O === 1
            }, {
                icon: E,
                onClick: ze,
                type: "rotateRight"
            }, {
                icon: G,
                onClick: be,
                type: "rotateLeft"
            }],
            he = function() {
                if (c && D) {
                    var a = _.current.offsetWidth * O,
                        z = _.current.offsetHeight * O,
                        A = _.current.getBoundingClientRect(),
                        re = A.left,
                        ye = A.top,
                        Oe = F % 180 !== 0;
                    K(!1);
                    var Ne = ht(Oe ? z : a, Oe ? a : z, re, ye);
                    Ne && g(m({}, Ne))
                }
            },
            Ve = function(a) {
                a.button === 0 && (a.preventDefault(), a.stopPropagation(), R.current.deltaX = a.pageX - C.x, R.current.deltaY = a.pageY - C.y, R.current.originX = C.x, R.current.originY = C.y, K(!0))
            },
            Ee = function(a) {
                c && D && g({
                    x: a.pageX - R.current.deltaX,
                    y: a.pageY - R.current.deltaY
                })
            },
            Pe = function(a) {
                if (!!c) {
                    a.preventDefault();
                    var z = a.deltaY;
                    we({
                        wheelDirection: z
                    })
                }
            },
            H = Rt(function(s) {
                !c || !M || (s.preventDefault(), s.keyCode === Ae.LEFT ? d > 0 && y(P[d - 1]) : s.keyCode === Ae.RIGHT && d < v - 1 && y(P[d + 1]))
            }, [d, v, P, y, M, c]),
            Se = function() {
                c && (O !== 1 && k(1), (C.x !== oe.x || C.y !== oe.y) && g(oe))
            };
        return Fe(function() {
            var s = Q.wheelDirection;
            s > 0 ? Ce() : s < 0 && Re()
        }, [Q]), Fe(function() {
            var s, a, z = ve(window, "mouseup", he, !1),
                A = ve(window, "mousemove", Ee, !1),
                re = ve(window, "wheel", Pe, {
                    passive: !1
                }),
                ye = ve(window, "keydown", H, !1);
            try {
                window.top !== window.self && (s = ve(window.top, "mouseup", he, !1), a = ve(window.top, "mousemove", Ee, !1))
            } catch {}
            return function() {
                z.remove(), A.remove(), re.remove(), ye.remove(), s && s.remove(), a && a.remove()
            }
        }, [c, D, H]), t.exports.createElement(lt, L({
            transitionName: "zoom",
            maskTransitionName: "fade",
            closable: !1,
            keyboard: !0,
            prefixCls: r,
            onClose: l,
            afterClose: ce,
            visible: c,
            wrapClassName: xe,
            rootClassName: p
        }, S), t.exports.createElement("ul", {
            className: "".concat(r, "-operations")
        }, M && t.exports.createElement("li", {
            className: "".concat(r, "-operations-progress")
        }, (o = h == null ? void 0 : h(d + 1, v)) !== null && o !== void 0 ? o : "".concat(d + 1, " / ").concat(v)), Te.map(function(s) {
            var a = s.icon,
                z = s.onClick,
                A = s.type,
                re = s.disabled;
            return t.exports.createElement("li", {
                className: ne($e, V({}, "".concat(r, "-operations-operation-disabled"), !!re)),
                onClick: z,
                key: A
            }, t.exports.isValidElement(a) ? t.exports.cloneElement(a, {
                className: De
            }) : a)
        })), t.exports.createElement("div", {
            className: "".concat(r, "-img-wrapper"),
            style: {
                transform: "translate3d(".concat(C.x, "px, ").concat(C.y, "px, 0)")
            }
        }, t.exports.createElement("img", {
            onMouseDown: Ve,
            onDoubleClick: Se,
            ref: _,
            className: "".concat(r, "-img"),
            src: le,
            alt: u,
            style: {
                transform: "scale3d(".concat(O, ", ").concat(O, ", 1) rotate(").concat(F, "deg)")
            }
        })), M && t.exports.createElement("div", {
            className: ne("".concat(r, "-switch-left"), V({}, "".concat(r, "-switch-left-disabled"), d === 0)),
            onClick: ee
        }, ae), M && t.exports.createElement("div", {
            className: ne("".concat(r, "-switch-right"), V({}, "".concat(r, "-switch-right-disabled"), d === v - 1)),
            onClick: te
        }, pe))
    },
    Et = ["src", "alt", "onPreviewClose", "prefixCls", "previewPrefixCls", "placeholder", "fallback", "width", "height", "style", "preview", "className", "onClick", "onError", "wrapperClassName", "wrapperStyle", "rootClassName", "crossOrigin", "decoding", "loading", "referrerPolicy", "sizes", "srcSet", "useMap"],
    Nt = ["src", "visible", "onVisibleChange", "getContainer", "mask", "maskClassName", "icons"],
    Be = 0,
    _e = function(e) {
        var o = e.src,
            r = e.alt,
            i = e.onPreviewClose,
            u = e.prefixCls,
            l = u === void 0 ? "rc-image" : u,
            c = e.previewPrefixCls,
            w = c === void 0 ? "".concat(l, "-preview") : c,
            f = e.placeholder,
            p = e.fallback,
            h = e.width,
            S = e.height,
            G = e.style,
            E = e.preview,
            I = E === void 0 ? !0 : E,
            W = e.className,
            Z = e.onClick,
            ae = e.onError,
            pe = e.wrapperClassName,
            de = e.wrapperStyle,
            U = e.rootClassName,
            O = e.crossOrigin,
            k = e.decoding,
            me = e.loading,
            Y = e.referrerPolicy,
            F = e.sizes,
            $ = e.srcSet,
            ge = e.useMap,
            X = Le(e, Et),
            C = f && f !== !0,
            g = ke(I) === "object" ? I : {},
            _ = g.src,
            R = g.visible,
            B = R === void 0 ? void 0 : R,
            j = g.onVisibleChange,
            D = j === void 0 ? i : j,
            K = g.getContainer,
            N = K === void 0 ? void 0 : K,
            T = g.mask,
            ie = g.maskClassName,
            se = g.icons,
            y = Le(g, Nt),
            v = _ != null ? _ : o,
            P = B !== void 0,
            d = qe(!!B, {
                value: B,
                onChange: D
            }),
            le = x(d, 2),
            M = le[0],
            q = le[1],
            J = t.exports.useState(C ? "loading" : "normal"),
            Q = x(J, 2),
            we = Q[0],
            ce = Q[1],
            Re = t.exports.useState(null),
            Ce = x(Re, 2),
            ze = Ce[0],
            be = Ce[1],
            ee = we === "error",
            te = t.exports.useContext(Ge),
            xe = te.isPreviewGroup,
            $e = te.setCurrent,
            De = te.setShowPreview,
            Te = te.setMousePosition,
            he = te.registerImage,
            Ve = t.exports.useState(function() {
                return Be += 1, Be
            }),
            Ee = x(Ve, 1),
            Pe = Ee[0],
            H = I && !ee,
            Se = t.exports.useRef(!1),
            s = function() {
                ce("normal")
            },
            a = function(b) {
                ae && ae(b), ce("error")
            },
            z = function(b) {
                if (!P) {
                    var Ze = Ct(b.target),
                        Ue = Ze.left,
                        je = Ze.top;
                    xe ? ($e(Pe), Te({
                        x: Ue,
                        y: je
                    })) : be({
                        x: Ue,
                        y: je
                    })
                }
                xe ? De(!0) : q(!0), Z && Z(b)
            },
            A = function(b) {
                b.stopPropagation(), q(!1), P || be(null)
            },
            re = function(b) {
                Se.current = !1, we === "loading" && (b == null ? void 0 : b.complete) && (b.naturalWidth || b.naturalHeight) && (Se.current = !0, s())
            };
        t.exports.useEffect(function() {
            var ue = he(Pe, v);
            return ue
        }, []), t.exports.useEffect(function() {
            he(Pe, v, H)
        }, [v, H]), t.exports.useEffect(function() {
            ee && ce("normal"), C && !Se.current && ce("loading")
        }, [o]);
        var ye = ne(l, pe, U, V({}, "".concat(l, "-error"), ee)),
            Oe = ee && p ? p : v,
            Ne = {
                crossOrigin: O,
                decoding: k,
                loading: me,
                referrerPolicy: Y,
                sizes: F,
                srcSet: $,
                useMap: ge,
                alt: r,
                className: ne("".concat(l, "-img"), V({}, "".concat(l, "-img-placeholder"), f === !0), W),
                style: m({
                    height: S
                }, G)
            };
        return t.exports.createElement(t.exports.Fragment, null, t.exports.createElement("div", L({}, X, {
            className: ye,
            onClick: H ? z : Z,
            style: m({
                width: h,
                height: S
            }, de)
        }), t.exports.createElement("img", L({}, Ne, {
            ref: re
        }, ee && p ? {
            src: p
        } : {
            onLoad: s,
            onError: a,
            src: o
        })), we === "loading" && t.exports.createElement("div", {
            "aria-hidden": "true",
            className: "".concat(l, "-placeholder")
        }, f), T && H && t.exports.createElement("div", {
            className: ne("".concat(l, "-mask"), ie)
        }, T)), !xe && H && t.exports.createElement(tt, L({
            "aria-hidden": !M,
            visible: M,
            prefixCls: w,
            onClose: A,
            mousePosition: ze,
            src: Oe,
            alt: r,
            getContainer: N,
            icons: se,
            rootClassName: U
        }, y)))
    };
_e.PreviewGroup = yt;
_e.displayName = "Image";
var Mt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "defs",
                attrs: {},
                children: [{
                    tag: "style",
                    attrs: {}
                }]
            }, {
                tag: "path",
                attrs: {
                    d: "M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"
                }
            }]
        },
        name: "rotate-left",
        theme: "outlined"
    },
    Lt = Mt,
    rt = function(e, o) {
        return t.exports.createElement(fe, m(m({}, e), {}, {
            ref: o,
            icon: Lt
        }))
    };
rt.displayName = "RotateLeftOutlined";
var It = t.exports.forwardRef(rt),
    kt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "defs",
                attrs: {},
                children: [{
                    tag: "style",
                    attrs: {}
                }]
            }, {
                tag: "path",
                attrs: {
                    d: "M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"
                }
            }, {
                tag: "path",
                attrs: {
                    d: "M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"
                }
            }]
        },
        name: "rotate-right",
        theme: "outlined"
    },
    _t = kt,
    ot = function(e, o) {
        return t.exports.createElement(fe, m(m({}, e), {}, {
            ref: o,
            icon: _t
        }))
    };
ot.displayName = "RotateRightOutlined";
var zt = t.exports.forwardRef(ot),
    $t = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"
                }
            }]
        },
        name: "zoom-in",
        theme: "outlined"
    },
    Dt = $t,
    nt = function(e, o) {
        return t.exports.createElement(fe, m(m({}, e), {}, {
            ref: o,
            icon: Dt
        }))
    };
nt.displayName = "ZoomInOutlined";
var Tt = t.exports.forwardRef(nt),
    Vt = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"
                }
            }]
        },
        name: "zoom-out",
        theme: "outlined"
    },
    Gt = Vt,
    at = function(e, o) {
        return t.exports.createElement(fe, m(m({}, e), {}, {
            ref: o,
            icon: Gt
        }))
    };
at.displayName = "ZoomOutOutlined";
var Zt = t.exports.forwardRef(at),
    Ut = globalThis && globalThis.__rest || function(n, e) {
        var o = {};
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (o[r] = n[r]);
        if (n != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (o[r[i]] = n[r[i]]);
        return o
    },
    it = {
        rotateLeft: t.exports.createElement(It, null),
        rotateRight: t.exports.createElement(zt, null),
        zoomIn: t.exports.createElement(Tt, null),
        zoomOut: t.exports.createElement(Zt, null),
        close: t.exports.createElement(ct, null),
        left: t.exports.createElement(pt, null),
        right: t.exports.createElement(gt, null)
    },
    jt = function(e) {
        var o = e.previewPrefixCls,
            r = e.preview,
            i = Ut(e, ["previewPrefixCls", "preview"]),
            u = t.exports.useContext(Je),
            l = u.getPrefixCls,
            c = l("image-preview", o),
            w = l(),
            f = t.exports.useMemo(function() {
                if (r === !1) return r;
                var p = ke(r) === "object" ? r : {};
                return L(L({}, p), {
                    transitionName: Ie(w, "zoom", p.transitionName),
                    maskTransitionName: Ie(w, "fade", p.maskTransitionName)
                })
            }, [r]);
        return t.exports.createElement(_e.PreviewGroup, L({
            preview: f,
            previewPrefixCls: c,
            icons: it
        }, i))
    },
    Ht = jt,
    Ke = globalThis && globalThis.__rest || function(n, e) {
        var o = {};
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (o[r] = n[r]);
        if (n != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++) e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (o[r[i]] = n[r[i]]);
        return o
    },
    st = function(e) {
        var o = e.prefixCls,
            r = e.preview,
            i = Ke(e, ["prefixCls", "preview"]),
            u = t.exports.useContext(Je),
            l = u.getPrefixCls,
            c = u.locale,
            w = c === void 0 ? We : c,
            f = u.getPopupContainer,
            p = l("image", o),
            h = l(),
            S = w.Image || We.Image,
            G = t.exports.useMemo(function() {
                if (r === !1) return r;
                var E = ke(r) === "object" ? r : {},
                    I = E.getContainer,
                    W = Ke(E, ["getContainer"]);
                return L(L({
                    mask: t.exports.createElement("div", {
                        className: "".concat(p, "-mask-info")
                    }, t.exports.createElement(ut, null), S == null ? void 0 : S.preview),
                    icons: it
                }, W), {
                    getContainer: I || f,
                    transitionName: Ie(h, "zoom", E.transitionName),
                    maskTransitionName: Ie(h, "fade", E.maskTransitionName)
                })
            }, [r, S]);
        return t.exports.createElement(_e, L({
            prefixCls: p,
            preview: G
        }, i))
    };
st.PreviewGroup = Ht;
var Wt = st;
export {
    Wt as I, pt as L, gt as R
};