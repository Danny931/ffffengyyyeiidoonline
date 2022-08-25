import {
    E as ue,
    a5 as Fn,
    a6 as $n,
    a7 as ke,
    r as o,
    K as at,
    a8 as Vn,
    l as Fe,
    q as Ee,
    s as Z,
    a9 as Hn,
    Y as jn,
    G as de,
    aa as ft,
    M as A,
    ab as Kn,
    ac as zn,
    L as St,
    ad as dt,
    J as ln,
    ae as Wn,
    a1 as Un,
    $ as Bn,
    H as qe,
    af as Yn,
    ag as Gn,
    v as un,
    C as mt,
    ah as Xn,
    y as qn,
    D as Jn,
    ai as Qn,
    aj as Zn,
    ak as er,
    P as tr,
    al as nr,
    am as rr,
    an as or,
    ao as ar,
    Q as ir,
    ap as lr,
    aq as ur,
    ar as zt
} from "./index.bf235723.js";
import {
    F as cr
} from "./Overflow.16dde49b.js";
import {
    D as sr
} from "./DownOutlined.89a98153.js";

function Wt(e, t) {
    var r = e.key,
        n;
    return "value" in e && (n = e.value), r != null ? r : n !== void 0 ? n : "rc-index-key-".concat(t)
}

function cn(e, t) {
    var r = e || {},
        n = r.label,
        a = r.value,
        i = r.options;
    return {
        label: n || (t ? "children" : "label"),
        value: a || "value",
        options: i || "options"
    }
}

function fr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = t.fieldNames,
        n = t.childrenAsData,
        a = [],
        i = cn(r, !1),
        c = i.label,
        l = i.value,
        u = i.options;

    function f(d, s) {
        d.forEach(function(p) {
            var v = p[c];
            if (s || !(u in p)) {
                var m = p[l];
                a.push({
                    key: Wt(p, a.length),
                    groupOption: s,
                    data: p,
                    label: v,
                    value: m
                })
            } else {
                var h = v;
                h === void 0 && n && (h = p.label), a.push({
                    key: Wt(p, a.length),
                    group: !0,
                    data: p,
                    label: h
                }), f(p[u], !0)
            }
        })
    }
    return f(e, !1), a
}

function wt(e) {
    var t = ue({}, e);
    return "props" in t || Object.defineProperty(t, "props", {
        get: function() {
            return Fn(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t
        }
    }), t
}

function dr(e, t) {
    if (!t || !t.length) return null;
    var r = !1;

    function n(i, c) {
        var l = $n(c),
            u = l[0],
            f = l.slice(1);
        if (!u) return [i];
        var d = i.split(u);
        return r = r || d.length > 1, d.reduce(function(s, p) {
            return [].concat(ke(s), ke(n(p, f)))
        }, []).filter(function(s) {
            return s
        })
    }
    var a = n(e, t);
    return r ? a : null
}
var vr = ["prefixCls", "disabled", "visible", "children", "popupElement", "containerWidth", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"],
    pr = function(t) {
        var r = t === !0 ? 0 : 1;
        return {
            bottomLeft: {
                points: ["tl", "bl"],
                offset: [0, 4],
                overflow: {
                    adjustX: r,
                    adjustY: 1
                }
            },
            bottomRight: {
                points: ["tr", "br"],
                offset: [0, 4],
                overflow: {
                    adjustX: r,
                    adjustY: 1
                }
            },
            topLeft: {
                points: ["bl", "tl"],
                offset: [0, -4],
                overflow: {
                    adjustX: r,
                    adjustY: 1
                }
            },
            topRight: {
                points: ["br", "tr"],
                offset: [0, -4],
                overflow: {
                    adjustX: r,
                    adjustY: 1
                }
            }
        }
    },
    mr = function(t, r) {
        var n = t.prefixCls;
        t.disabled;
        var a = t.visible,
            i = t.children,
            c = t.popupElement,
            l = t.containerWidth,
            u = t.animation,
            f = t.transitionName,
            d = t.dropdownStyle,
            s = t.dropdownClassName,
            p = t.direction,
            v = p === void 0 ? "ltr" : p,
            m = t.placement,
            h = t.dropdownMatchSelectWidth,
            S = t.dropdownRender,
            I = t.dropdownAlign,
            x = t.getPopupContainer,
            R = t.empty,
            k = t.getTriggerDOMNode,
            $ = t.onPopupVisibleChange,
            ee = t.onPopupMouseEnter,
            B = at(t, vr),
            P = "".concat(n, "-dropdown"),
            V = c;
        S && (V = S(c));
        var Y = o.exports.useMemo(function() {
                return pr(h)
            }, [h]),
            J = u ? "".concat(P, "-").concat(u) : f,
            G = o.exports.useRef(null);
        o.exports.useImperativeHandle(r, function() {
            return {
                getPopupElement: function() {
                    return G.current
                }
            }
        });
        var y = ue({
            minWidth: l
        }, d);
        return typeof h == "number" ? y.width = h : h && (y.width = l), o.exports.createElement(Vn, Fe({}, B, {
            showAction: $ ? ["click"] : [],
            hideAction: $ ? ["click"] : [],
            popupPlacement: m || (v === "rtl" ? "bottomRight" : "bottomLeft"),
            builtinPlacements: Y,
            prefixCls: P,
            popupTransitionName: J,
            popup: o.exports.createElement("div", {
                ref: G,
                onMouseEnter: ee
            }, V),
            popupAlign: I,
            popupVisible: a,
            getPopupContainer: x,
            popupClassName: Ee(s, Z({}, "".concat(P, "-empty"), R)),
            popupStyle: y,
            getTriggerDOMNode: k,
            onPopupVisibleChange: $
        }), i)
    },
    sn = o.exports.forwardRef(mr);
sn.displayName = "SelectTrigger";
var vt = function(t) {
        var r = t.className,
            n = t.customizeIcon,
            a = t.customizeIconProps,
            i = t.onMouseDown,
            c = t.onClick,
            l = t.children,
            u;
        return typeof n == "function" ? u = n(a) : u = n, o.exports.createElement("span", {
            className: r,
            onMouseDown: function(d) {
                d.preventDefault(), i && i(d)
            },
            style: {
                userSelect: "none",
                WebkitUserSelect: "none"
            },
            unselectable: "on",
            onClick: c,
            "aria-hidden": !0
        }, u !== void 0 ? u : o.exports.createElement("span", {
            className: Ee(r.split(/\s+/).map(function(f) {
                return "".concat(f, "-icon")
            }))
        }, l))
    },
    hr = function(t, r) {
        var n, a, i = t.prefixCls,
            c = t.id,
            l = t.inputElement,
            u = t.disabled,
            f = t.tabIndex,
            d = t.autoFocus,
            s = t.autoComplete,
            p = t.editable,
            v = t.activeDescendantId,
            m = t.value,
            h = t.maxLength,
            S = t.onKeyDown,
            I = t.onMouseDown,
            x = t.onChange,
            R = t.onPaste,
            k = t.onCompositionStart,
            $ = t.onCompositionEnd,
            ee = t.open,
            B = t.attrs,
            P = l || o.exports.createElement("input", null),
            V = P,
            Y = V.ref,
            J = V.props,
            G = J.onKeyDown,
            y = J.onChange,
            L = J.onMouseDown,
            b = J.onCompositionStart,
            C = J.onCompositionEnd,
            H = J.style;
        return Hn(!("maxLength" in P.props)), P = o.exports.cloneElement(P, ue(ue(ue({
            type: "search"
        }, J), {}, {
            id: c,
            ref: jn(r, Y),
            disabled: u,
            tabIndex: f,
            autoComplete: s || "off",
            autoFocus: d,
            className: Ee("".concat(i, "-selection-search-input"), (n = P) === null || n === void 0 || (a = n.props) === null || a === void 0 ? void 0 : a.className),
            role: "combobox",
            "aria-expanded": ee,
            "aria-haspopup": "listbox",
            "aria-owns": "".concat(c, "_list"),
            "aria-autocomplete": "list",
            "aria-controls": "".concat(c, "_list"),
            "aria-activedescendant": v
        }, B), {}, {
            value: p ? m : "",
            maxLength: h,
            readOnly: !p,
            unselectable: p ? null : "on",
            style: ue(ue({}, H), {}, {
                opacity: p ? null : 0
            }),
            onKeyDown: function(X) {
                S(X), G && G(X)
            },
            onMouseDown: function(X) {
                I(X), L && L(X)
            },
            onChange: function(X) {
                x(X), y && y(X)
            },
            onCompositionStart: function(X) {
                k(X), b && b(X)
            },
            onCompositionEnd: function(X) {
                $(X), C && C(X)
            },
            onPaste: R
        })), P
    },
    Dt = o.exports.forwardRef(hr);
Dt.displayName = "Input";

function fn(e) {
    return Array.isArray(e) ? e : e !== void 0 ? [e] : []
}
var gr = typeof window != "undefined" && window.document && window.document.documentElement,
    br = gr;

function xr(e, t) {
    br ? o.exports.useLayoutEffect(e, t) : o.exports.useEffect(e, t)
}

function yr(e) {
    var t;
    return (t = e.key) !== null && t !== void 0 ? t : e.value
}
var Ut = function(t) {
        t.preventDefault(), t.stopPropagation()
    },
    Sr = function(t) {
        var r = t.id,
            n = t.prefixCls,
            a = t.values,
            i = t.open,
            c = t.searchValue,
            l = t.inputRef,
            u = t.placeholder,
            f = t.disabled,
            d = t.mode,
            s = t.showSearch,
            p = t.autoFocus,
            v = t.autoComplete,
            m = t.activeDescendantId,
            h = t.tabIndex,
            S = t.removeIcon,
            I = t.maxTagCount,
            x = t.maxTagTextLength,
            R = t.maxTagPlaceholder,
            k = R === void 0 ? function(K) {
                return "+ ".concat(K.length, " ...")
            } : R,
            $ = t.tagRender,
            ee = t.onToggleOpen,
            B = t.onRemove,
            P = t.onInputChange,
            V = t.onInputPaste,
            Y = t.onInputKeyDown,
            J = t.onInputMouseDown,
            G = t.onInputCompositionStart,
            y = t.onInputCompositionEnd,
            L = o.exports.useRef(null),
            b = o.exports.useState(0),
            C = de(b, 2),
            H = C[0],
            z = C[1],
            X = o.exports.useState(!1),
            re = de(X, 2),
            se = re[0],
            Me = re[1],
            q = "".concat(n, "-selection"),
            _ = i || d === "tags" ? c : "",
            g = d === "tags" || s && (i || se);
        xr(function() {
            z(L.current.scrollWidth)
        }, [_]);

        function N(K, ne, oe, ae, he) {
            return o.exports.createElement("span", {
                className: Ee("".concat(q, "-item"), Z({}, "".concat(q, "-item-disabled"), oe)),
                title: typeof K == "string" || typeof K == "number" ? K.toString() : void 0
            }, o.exports.createElement("span", {
                className: "".concat(q, "-item-content")
            }, ne), ae && o.exports.createElement(vt, {
                className: "".concat(q, "-item-remove"),
                onMouseDown: Ut,
                onClick: he,
                customizeIcon: S
            }, "\xD7"))
        }

        function U(K, ne, oe, ae, he) {
            var fe = function(xe) {
                Ut(xe), ee(!i)
            };
            return o.exports.createElement("span", {
                onMouseDown: fe
            }, $({
                label: ne,
                value: K,
                disabled: oe,
                closable: ae,
                onClose: he
            }))
        }

        function j(K) {
            var ne = K.disabled,
                oe = K.label,
                ae = K.value,
                he = !f && !ne,
                fe = oe;
            if (typeof x == "number" && (typeof oe == "string" || typeof oe == "number")) {
                var pe = String(fe);
                pe.length > x && (fe = "".concat(pe.slice(0, x), "..."))
            }
            var xe = function(ye) {
                ye && ye.stopPropagation(), B(K)
            };
            return typeof $ == "function" ? U(ae, fe, ne, he, xe) : N(oe, fe, ne, he, xe)
        }

        function W(K) {
            var ne = typeof k == "function" ? k(K) : k;
            return N(ne, ne, !1)
        }
        var te = o.exports.createElement("div", {
                className: "".concat(q, "-search"),
                style: {
                    width: H
                },
                onFocus: function() {
                    Me(!0)
                },
                onBlur: function() {
                    Me(!1)
                }
            }, o.exports.createElement(Dt, {
                ref: l,
                open: i,
                prefixCls: n,
                id: r,
                inputElement: null,
                disabled: f,
                autoFocus: p,
                autoComplete: v,
                editable: g,
                activeDescendantId: m,
                value: _,
                onKeyDown: Y,
                onMouseDown: J,
                onChange: P,
                onPaste: V,
                onCompositionStart: G,
                onCompositionEnd: y,
                tabIndex: h,
                attrs: ft(t, !0)
            }), o.exports.createElement("span", {
                ref: L,
                className: "".concat(q, "-search-mirror"),
                "aria-hidden": !0
            }, _, "\xA0")),
            ve = o.exports.createElement(cr, {
                prefixCls: "".concat(q, "-overflow"),
                data: a,
                renderItem: j,
                renderRest: W,
                suffix: te,
                itemKey: yr,
                maxCount: I
            });
        return o.exports.createElement(o.exports.Fragment, null, ve, !a.length && !_ && o.exports.createElement("span", {
            className: "".concat(q, "-placeholder")
        }, u))
    },
    wr = function(t) {
        var r = t.inputElement,
            n = t.prefixCls,
            a = t.id,
            i = t.inputRef,
            c = t.disabled,
            l = t.autoFocus,
            u = t.autoComplete,
            f = t.activeDescendantId,
            d = t.mode,
            s = t.open,
            p = t.values,
            v = t.placeholder,
            m = t.tabIndex,
            h = t.showSearch,
            S = t.searchValue,
            I = t.activeValue,
            x = t.maxLength,
            R = t.onInputKeyDown,
            k = t.onInputMouseDown,
            $ = t.onInputChange,
            ee = t.onInputPaste,
            B = t.onInputCompositionStart,
            P = t.onInputCompositionEnd,
            V = o.exports.useState(!1),
            Y = de(V, 2),
            J = Y[0],
            G = Y[1],
            y = d === "combobox",
            L = y || h,
            b = p[0],
            C = S || "";
        y && I && !J && (C = I), o.exports.useEffect(function() {
            y && G(!1)
        }, [y, I]);
        var H = d !== "combobox" && !s && !h ? !1 : !!C,
            z = b && (typeof b.label == "string" || typeof b.label == "number") ? b.label.toString() : void 0,
            X = function() {
                if (b) return null;
                var se = H ? {
                    visibility: "hidden"
                } : void 0;
                return o.exports.createElement("span", {
                    className: "".concat(n, "-selection-placeholder"),
                    style: se
                }, v)
            };
        return o.exports.createElement(o.exports.Fragment, null, o.exports.createElement("span", {
            className: "".concat(n, "-selection-search")
        }, o.exports.createElement(Dt, {
            ref: i,
            prefixCls: n,
            id: a,
            open: s,
            inputElement: r,
            disabled: c,
            autoFocus: l,
            autoComplete: u,
            editable: L,
            activeDescendantId: f,
            value: C,
            onKeyDown: R,
            onMouseDown: k,
            onChange: function(se) {
                G(!0), $(se)
            },
            onPaste: ee,
            onCompositionStart: B,
            onCompositionEnd: P,
            tabIndex: m,
            attrs: ft(t, !0),
            maxLength: y ? x : void 0
        })), !y && b && !H && o.exports.createElement("span", {
            className: "".concat(n, "-selection-item"),
            title: z
        }, b.label), X())
    };

function dn() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
        t = o.exports.useRef(null),
        r = o.exports.useRef(null);
    o.exports.useEffect(function() {
        return function() {
            window.clearTimeout(r.current)
        }
    }, []);

    function n(a) {
        (a || t.current === null) && (t.current = a), window.clearTimeout(r.current), r.current = window.setTimeout(function() {
            t.current = null
        }, e)
    }
    return [function() {
        return t.current
    }, n]
}

function Cr(e) {
    return ![A.ESC, A.SHIFT, A.BACKSPACE, A.TAB, A.WIN_KEY, A.ALT, A.META, A.WIN_KEY_RIGHT, A.CTRL, A.SEMICOLON, A.EQUALS, A.CAPS_LOCK, A.CONTEXT_MENU, A.F1, A.F2, A.F3, A.F4, A.F5, A.F6, A.F7, A.F8, A.F9, A.F10, A.F11, A.F12].includes(e)
}
var Er = function(t, r) {
        var n = o.exports.useRef(null),
            a = o.exports.useRef(!1),
            i = t.prefixCls,
            c = t.open,
            l = t.mode,
            u = t.showSearch,
            f = t.tokenWithEnter,
            d = t.onSearch,
            s = t.onSearchSubmit,
            p = t.onToggleOpen,
            v = t.onInputKeyDown,
            m = t.domRef;
        o.exports.useImperativeHandle(r, function() {
            return {
                focus: function() {
                    n.current.focus()
                },
                blur: function() {
                    n.current.blur()
                }
            }
        });
        var h = dn(0),
            S = de(h, 2),
            I = S[0],
            x = S[1],
            R = function(C) {
                var H = C.which;
                (H === A.UP || H === A.DOWN) && C.preventDefault(), v && v(C), H === A.ENTER && l === "tags" && !a.current && !c && (s == null || s(C.target.value)), Cr(H) && p(!0)
            },
            k = function() {
                x(!0)
            },
            $ = o.exports.useRef(null),
            ee = function(C) {
                d(C, !0, a.current) !== !1 && p(!0)
            },
            B = function() {
                a.current = !0
            },
            P = function(C) {
                a.current = !1, l !== "combobox" && ee(C.target.value)
            },
            V = function(C) {
                var H = C.target.value;
                if (f && $.current && /[\r\n]/.test($.current)) {
                    var z = $.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
                    H = H.replace(z, $.current)
                }
                $.current = null, ee(H)
            },
            Y = function(C) {
                var H = C.clipboardData,
                    z = H.getData("text");
                $.current = z
            },
            J = function(C) {
                var H = C.target;
                if (H !== n.current) {
                    var z = document.body.style.msTouchAction !== void 0;
                    z ? setTimeout(function() {
                        n.current.focus()
                    }) : n.current.focus()
                }
            },
            G = function(C) {
                var H = I();
                C.target !== n.current && !H && C.preventDefault(), (l !== "combobox" && (!u || !H) || !c) && (c && d("", !0, !1), p())
            },
            y = {
                inputRef: n,
                onInputKeyDown: R,
                onInputMouseDown: k,
                onInputChange: V,
                onInputPaste: Y,
                onInputCompositionStart: B,
                onInputCompositionEnd: P
            },
            L = l === "multiple" || l === "tags" ? o.exports.createElement(Sr, Fe({}, t, y)) : o.exports.createElement(wr, Fe({}, t, y));
        return o.exports.createElement("div", {
            ref: m,
            className: "".concat(i, "-selector"),
            onClick: J,
            onMouseDown: G
        }, L)
    },
    vn = o.exports.forwardRef(Er);
vn.displayName = "Selector";

function Ir(e, t, r, n) {
    var a = o.exports.useRef(null);
    a.current = {
        open: t,
        triggerOpen: r,
        customizedTrigger: n
    }, o.exports.useEffect(function() {
        function i(c) {
            var l;
            if (!(!((l = a.current) === null || l === void 0) && l.customizedTrigger)) {
                var u = c.target;
                u.shadowRoot && c.composed && (u = c.composedPath()[0] || u), a.current.open && e().filter(function(f) {
                    return f
                }).every(function(f) {
                    return !f.contains(u) && f !== u
                }) && a.current.triggerOpen(!1)
            }
        }
        return window.addEventListener("mousedown", i),
            function() {
                return window.removeEventListener("mousedown", i)
            }
    }, [])
}

function Rr() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
        t = o.exports.useState(!1),
        r = de(t, 2),
        n = r[0],
        a = r[1],
        i = o.exports.useRef(null),
        c = function() {
            window.clearTimeout(i.current)
        };
    o.exports.useEffect(function() {
        return c
    }, []);
    var l = function(f, d) {
        c(), i.current = window.setTimeout(function() {
            a(f), d && d()
        }, e)
    };
    return [n, l, c]
}
var pn = o.exports.createContext(null);

function Or() {
    return o.exports.useContext(pn)
}
var Mr = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "showArrow", "inputIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"],
    Dr = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"];

function Ct(e) {
    return e === "tags" || e === "multiple"
}
var Pr = o.exports.forwardRef(function(e, t) {
        var r, n, a = e.id,
            i = e.prefixCls,
            c = e.className,
            l = e.showSearch,
            u = e.tagRender,
            f = e.direction,
            d = e.omitDomProps,
            s = e.displayValues,
            p = e.onDisplayValuesChange,
            v = e.emptyOptions,
            m = e.notFoundContent,
            h = m === void 0 ? "Not Found" : m,
            S = e.onClear,
            I = e.mode,
            x = e.disabled,
            R = e.loading,
            k = e.getInputElement,
            $ = e.getRawInputElement,
            ee = e.open,
            B = e.defaultOpen,
            P = e.onDropdownVisibleChange,
            V = e.activeValue,
            Y = e.onActiveValueChange,
            J = e.activeDescendantId,
            G = e.searchValue,
            y = e.onSearch,
            L = e.onSearchSplit,
            b = e.tokenSeparators,
            C = e.allowClear,
            H = e.showArrow,
            z = e.inputIcon,
            X = e.clearIcon,
            re = e.OptionList,
            se = e.animation,
            Me = e.transitionName,
            q = e.dropdownStyle,
            _ = e.dropdownClassName,
            g = e.dropdownMatchSelectWidth,
            N = e.dropdownRender,
            U = e.dropdownAlign,
            j = e.placement,
            W = e.getPopupContainer,
            te = e.showAction,
            ve = te === void 0 ? [] : te,
            K = e.onFocus,
            ne = e.onBlur,
            oe = e.onKeyUp,
            ae = e.onKeyDown,
            he = e.onMouseDown,
            fe = at(e, Mr),
            pe = Ct(I),
            xe = (l !== void 0 ? l : pe) || I === "combobox",
            ie = ue({}, fe);
        Dr.forEach(function(T) {
            delete ie[T]
        }), d == null || d.forEach(function(T) {
            delete ie[T]
        });
        var ye = o.exports.useState(!1),
            De = de(ye, 2),
            je = De[0],
            Ne = De[1];
        o.exports.useEffect(function() {
            Ne(Kn())
        }, []);
        var Be = o.exports.useRef(null),
            Ce = o.exports.useRef(null),
            Ie = o.exports.useRef(null),
            Te = o.exports.useRef(null),
            Ae = o.exports.useRef(null),
            Ye = Rr(),
            Ke = de(Ye, 3),
            M = Ke[0],
            Q = Ke[1],
            ge = Ke[2];
        o.exports.useImperativeHandle(t, function() {
            var T, D;
            return {
                focus: (T = Te.current) === null || T === void 0 ? void 0 : T.focus,
                blur: (D = Te.current) === null || D === void 0 ? void 0 : D.blur,
                scrollTo: function(Oe) {
                    var me;
                    return (me = Ae.current) === null || me === void 0 ? void 0 : me.scrollTo(Oe)
                }
            }
        });
        var Se = o.exports.useMemo(function() {
                var T;
                if (I !== "combobox") return G;
                var D = (T = s[0]) === null || T === void 0 ? void 0 : T.value;
                return typeof D == "string" || typeof D == "number" ? String(D) : ""
            }, [G, I, s]),
            Pe = I === "combobox" && typeof k == "function" && k() || null,
            Le = typeof $ == "function" && $(),
            Ge = zn(Ce, Le == null || (r = Le.props) === null || r === void 0 ? void 0 : r.ref),
            rt = St(void 0, {
                defaultValue: B,
                value: ee
            }),
            nt = de(rt, 2),
            ze = nt[0],
            We = nt[1],
            be = ze,
            st = !h && v;
        (x || st && be && I === "combobox") && (be = !1);
        var Je = st ? !1 : be,
            $e = o.exports.useCallback(function(T) {
                var D = T !== void 0 ? T : !be;
                be !== D && !x && (We(D), P == null || P(D))
            }, [x, be, We, P]),
            O = o.exports.useMemo(function() {
                return (b || []).some(function(T) {
                    return [`
`, `\r
`].includes(T)
                })
            }, [b]),
            E = function(D, we, Oe) {
                var me = !0,
                    _e = D;
                Y == null || Y(null);
                var He = Oe ? null : dr(D, b);
                return I !== "combobox" && He && (_e = "", L == null || L(He), $e(!1), me = !1), y && Se !== _e && y(_e, {
                    source: we ? "typing" : "effect"
                }), me
            },
            w = function(D) {
                !D || !D.trim() || y(D, {
                    source: "submit"
                })
            };
        o.exports.useEffect(function() {
            !be && !pe && I !== "combobox" && E("", !1, !1)
        }, [be]), o.exports.useEffect(function() {
            ze && x && We(!1), x && Q(!1)
        }, [x]);
        var F = dn(),
            le = de(F, 2),
            ce = le[0],
            Qe = le[1],
            Ve = function(D) {
                var we = ce(),
                    Oe = D.which;
                if (Oe === A.ENTER && (I !== "combobox" && D.preventDefault(), be || $e(!0)), Qe(!!Se), Oe === A.BACKSPACE && !we && pe && !Se && s.length) {
                    for (var me = ke(s), _e = null, He = me.length - 1; He >= 0; He -= 1) {
                        var lt = me[He];
                        if (!lt.disabled) {
                            me.splice(He, 1), _e = lt;
                            break
                        }
                    }
                    _e && p(me, {
                        type: "remove",
                        values: [_e]
                    })
                }
                for (var et = arguments.length, ot = new Array(et > 1 ? et - 1 : 0), tt = 1; tt < et; tt++) ot[tt - 1] = arguments[tt];
                if (be && Ae.current) {
                    var Kt;
                    (Kt = Ae.current).onKeyDown.apply(Kt, [D].concat(ot))
                }
                ae == null || ae.apply(void 0, [D].concat(ot))
            },
            Re = function(D) {
                for (var we = arguments.length, Oe = new Array(we > 1 ? we - 1 : 0), me = 1; me < we; me++) Oe[me - 1] = arguments[me];
                if (be && Ae.current) {
                    var _e;
                    (_e = Ae.current).onKeyUp.apply(_e, [D].concat(Oe))
                }
                oe == null || oe.apply(void 0, [D].concat(Oe))
            },
            Ze = function(D) {
                var we = s.filter(function(Oe) {
                    return Oe !== D
                });
                p(we, {
                    type: "remove",
                    values: [D]
                })
            },
            it = o.exports.useRef(!1),
            gt = function() {
                Q(!0), x || (K && !it.current && K.apply(void 0, arguments), ve.includes("focus") && $e(!0)), it.current = !0
            },
            At = function() {
                Q(!1, function() {
                    it.current = !1, $e(!1)
                }), !x && (Se && (I === "tags" ? y(Se, {
                    source: "submit"
                }) : I === "multiple" && y("", {
                    source: "blur"
                })), ne && ne.apply(void 0, arguments))
            },
            Ue = [];
        o.exports.useEffect(function() {
            return function() {
                Ue.forEach(function(T) {
                    return clearTimeout(T)
                }), Ue.splice(0, Ue.length)
            }
        }, []);
        var Xe = function(D) {
                var we, Oe = D.target,
                    me = (we = Ie.current) === null || we === void 0 ? void 0 : we.getPopupElement();
                if (me && me.contains(Oe)) {
                    var _e = setTimeout(function() {
                        var ot = Ue.indexOf(_e);
                        if (ot !== -1 && Ue.splice(ot, 1), ge(), !je && !me.contains(document.activeElement)) {
                            var tt;
                            (tt = Te.current) === null || tt === void 0 || tt.focus()
                        }
                    });
                    Ue.push(_e)
                }
                for (var He = arguments.length, lt = new Array(He > 1 ? He - 1 : 0), et = 1; et < He; et++) lt[et - 1] = arguments[et];
                he == null || he.apply(void 0, [D].concat(lt))
            },
            On = o.exports.useState(null),
            Lt = de(On, 2),
            kt = Lt[0],
            Mn = Lt[1],
            Dn = o.exports.useState({}),
            Pn = de(Dn, 2),
            _n = Pn[1];

        function Nn() {
            _n({})
        }
        dt(function() {
            if (Je) {
                var T, D = Math.ceil((T = Be.current) === null || T === void 0 ? void 0 : T.offsetWidth);
                kt !== D && !Number.isNaN(D) && Mn(D)
            }
        }, [Je]);
        var Ft;
        Le && (Ft = function(D) {
            $e(D)
        }), Ir(function() {
            var T;
            return [Be.current, (T = Ie.current) === null || T === void 0 ? void 0 : T.getPopupElement()]
        }, Je, $e, !!Le);
        var Tn = o.exports.useMemo(function() {
                return ue(ue({}, e), {}, {
                    notFoundContent: h,
                    open: be,
                    triggerOpen: Je,
                    id: a,
                    showSearch: xe,
                    multiple: pe,
                    toggleOpen: $e
                })
            }, [e, h, Je, be, a, xe, pe, $e]),
            $t = H !== void 0 ? H : R || !pe && I !== "combobox",
            Vt;
        $t && (Vt = o.exports.createElement(vt, {
            className: Ee("".concat(i, "-arrow"), Z({}, "".concat(i, "-arrow-loading"), R)),
            customizeIcon: z,
            customizeIconProps: {
                loading: R,
                searchValue: Se,
                open: be,
                focused: M,
                showSearch: xe
            }
        }));
        var Ht, An = function() {
            S == null || S(), p([], {
                type: "clear",
                values: s
            }), E("", !1, !1)
        };
        !x && C && (s.length || Se) && (Ht = o.exports.createElement(vt, {
            className: "".concat(i, "-clear"),
            onMouseDown: An,
            customizeIcon: X
        }, "\xD7"));
        var Ln = o.exports.createElement(re, {
                ref: Ae
            }),
            kn = Ee(i, c, (n = {}, Z(n, "".concat(i, "-focused"), M), Z(n, "".concat(i, "-multiple"), pe), Z(n, "".concat(i, "-single"), !pe), Z(n, "".concat(i, "-allow-clear"), C), Z(n, "".concat(i, "-show-arrow"), $t), Z(n, "".concat(i, "-disabled"), x), Z(n, "".concat(i, "-loading"), R), Z(n, "".concat(i, "-open"), be), Z(n, "".concat(i, "-customize-input"), Pe), Z(n, "".concat(i, "-show-search"), xe), n)),
            jt = o.exports.createElement(sn, {
                ref: Ie,
                disabled: x,
                prefixCls: i,
                visible: Je,
                popupElement: Ln,
                containerWidth: kt,
                animation: se,
                transitionName: Me,
                dropdownStyle: q,
                dropdownClassName: _,
                direction: f,
                dropdownMatchSelectWidth: g,
                dropdownRender: N,
                dropdownAlign: U,
                placement: j,
                getPopupContainer: W,
                empty: v,
                getTriggerDOMNode: function() {
                    return Ce.current
                },
                onPopupVisibleChange: Ft,
                onPopupMouseEnter: Nn
            }, Le ? o.exports.cloneElement(Le, {
                ref: Ge
            }) : o.exports.createElement(vn, Fe({}, e, {
                domRef: Ce,
                prefixCls: i,
                inputElement: Pe,
                ref: Te,
                id: a,
                showSearch: xe,
                mode: I,
                activeDescendantId: J,
                tagRender: u,
                values: s,
                open: be,
                onToggleOpen: $e,
                activeValue: V,
                searchValue: Se,
                onSearch: E,
                onSearchSubmit: w,
                onRemove: Ze,
                tokenWithEnter: O
            }))),
            bt;
        return Le ? bt = jt : bt = o.exports.createElement("div", Fe({
            className: kn
        }, ie, {
            ref: Be,
            onMouseDown: Xe,
            onKeyDown: Ve,
            onKeyUp: Re,
            onFocus: gt,
            onBlur: At
        }), M && !be && o.exports.createElement("span", {
            style: {
                width: 0,
                height: 0,
                display: "flex",
                overflow: "hidden",
                opacity: 0
            },
            "aria-live": "polite"
        }, "".concat(s.map(function(T) {
            var D = T.label,
                we = T.value;
            return ["number", "string"].includes(ln(D)) ? D : we
        }).join(", "))), jt, Vt, Ht), o.exports.createElement(pn.Provider, {
            value: Tn
        }, bt)
    }),
    _r = function(e, t) {
        var r = o.exports.useRef({
                values: new Map,
                options: new Map
            }),
            n = o.exports.useMemo(function() {
                var i = r.current,
                    c = i.values,
                    l = i.options,
                    u = e.map(function(s) {
                        if (s.label === void 0) {
                            var p;
                            return ue(ue({}, s), {}, {
                                label: (p = c.get(s.value)) === null || p === void 0 ? void 0 : p.label
                            })
                        }
                        return s
                    }),
                    f = new Map,
                    d = new Map;
                return u.forEach(function(s) {
                    f.set(s.value, s), d.set(s.value, t.get(s.value) || l.get(s.value))
                }), r.current.values = f, r.current.options = d, u
            }, [e, t]),
            a = o.exports.useCallback(function(i) {
                return t.get(i) || r.current.options.get(i)
            }, [t]);
        return [n, a]
    };

function xt(e, t) {
    return fn(e).join("").toUpperCase().includes(t)
}
var Nr = function(e, t, r, n, a) {
        return o.exports.useMemo(function() {
            if (!r || n === !1) return e;
            var i = t.options,
                c = t.label,
                l = t.value,
                u = [],
                f = typeof n == "function",
                d = r.toUpperCase(),
                s = f ? n : function(v, m) {
                    return a ? xt(m[a], d) : m[i] ? xt(m[c !== "children" ? c : "label"], d) : xt(m[l], d)
                },
                p = f ? function(v) {
                    return wt(v)
                } : function(v) {
                    return v
                };
            return e.forEach(function(v) {
                if (v[i]) {
                    var m = s(r, p(v));
                    if (m) u.push(v);
                    else {
                        var h = v[i].filter(function(S) {
                            return s(r, p(S))
                        });
                        h.length && u.push(ue(ue({}, v), {}, Z({}, i, h)))
                    }
                    return
                }
                s(r, p(v)) && u.push(v)
            }), u
        }, [e, n, a, r, t])
    },
    Bt = 0,
    Tr = Wn();

function Ar() {
    var e;
    return Tr ? (e = Bt, Bt += 1) : e = "TEST_OR_SSR", e
}

function Lr(e) {
    var t = o.exports.useState(),
        r = de(t, 2),
        n = r[0],
        a = r[1];
    return o.exports.useEffect(function() {
        a("rc_select_".concat(Ar()))
    }, []), e || n
}
var kr = ["children", "value"],
    Fr = ["children"];

function $r(e) {
    var t = e.key,
        r = e.props,
        n = r.children,
        a = r.value,
        i = at(r, kr);
    return ue({
        key: t,
        value: a !== void 0 ? a : t,
        children: n
    }, i)
}

function mn(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return Un(e).map(function(r, n) {
        if (!o.exports.isValidElement(r) || !r.type) return null;
        var a = r.type.isSelectOptGroup,
            i = r.key,
            c = r.props,
            l = c.children,
            u = at(c, Fr);
        return t || !a ? $r(r) : ue(ue({
            key: "__RC_SELECT_GRP__".concat(i === null ? n : i, "__"),
            label: i
        }, u), {}, {
            options: mn(l)
        })
    }).filter(function(r) {
        return r
    })
}

function Vr(e, t, r, n, a) {
    return o.exports.useMemo(function() {
        var i = e,
            c = !e;
        c && (i = mn(t));
        var l = new Map,
            u = new Map,
            f = function(p, v, m) {
                m && typeof m == "string" && p.set(v[m], v)
            };

        function d(s) {
            for (var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, v = 0; v < s.length; v += 1) {
                var m = s[v];
                !m[r.options] || p ? (l.set(m[r.value], m), f(u, m, r.label), f(u, m, n), f(u, m, a)) : d(m[r.options], !0)
            }
        }
        return d(i), {
            options: i,
            valueOptions: l,
            labelOptions: u
        }
    }, [e, t, r, n, a])
}

function Yt(e) {
    var t = o.exports.useRef();
    t.current = e;
    var r = o.exports.useCallback(function() {
        return t.current.apply(t, arguments)
    }, []);
    return r
}
var Pt = function() {
    return null
};
Pt.isSelectOptGroup = !0;
var _t = function() {
    return null
};
_t.isSelectOption = !0;

function Gt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function Xt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Gt(Object(r), !0).forEach(function(n) {
            hn(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gt(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function hn(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}
var gn = o.exports.forwardRef(function(e, t) {
    var r = e.height,
        n = e.offset,
        a = e.children,
        i = e.prefixCls,
        c = e.onInnerResize,
        l = {},
        u = {
            display: "flex",
            flexDirection: "column"
        };
    return n !== void 0 && (l = {
        height: r,
        position: "relative",
        overflow: "hidden"
    }, u = Xt(Xt({}, u), {}, {
        transform: "translateY(".concat(n, "px)"),
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
    })), o.exports.createElement("div", {
        style: l
    }, o.exports.createElement(Bn, {
        onResize: function(d) {
            var s = d.offsetHeight;
            s && c && c()
        }
    }, o.exports.createElement("div", {
        style: u,
        className: Ee(hn({}, "".concat(i, "-holder-inner"), i)),
        ref: t
    }, a)))
});
gn.displayName = "Filler";

function Et(e) {
    return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Et(e)
}

function qt(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function Hr(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Jt(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function jr(e, t, r) {
    return t && Jt(e.prototype, t), r && Jt(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function Kr(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), t && It(e, t)
}

function It(e, t) {
    return It = Object.setPrototypeOf || function(n, a) {
        return n.__proto__ = a, n
    }, It(e, t)
}

function zr(e) {
    var t = Br();
    return function() {
        var n = pt(e),
            a;
        if (t) {
            var i = pt(this).constructor;
            a = Reflect.construct(n, arguments, i)
        } else a = n.apply(this, arguments);
        return Wr(this, a)
    }
}

function Wr(e, t) {
    if (t && (Et(t) === "object" || typeof t == "function")) return t;
    if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return Ur(e)
}

function Ur(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Br() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch {
        return !1
    }
}

function pt(e) {
    return pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }, pt(e)
}
var Yr = 20;

function Qt(e) {
    return "touches" in e ? e.touches[0].pageY : e.pageY
}
var Gr = function(e) {
    Kr(r, e);
    var t = zr(r);

    function r() {
        var n;
        Hr(this, r);
        for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
        return n = t.call.apply(t, [this].concat(i)), n.moveRaf = null, n.scrollbarRef = o.exports.createRef(), n.thumbRef = o.exports.createRef(), n.visibleTimeout = null, n.state = {
            dragging: !1,
            pageY: null,
            startTop: null,
            visible: !1
        }, n.delayHidden = function() {
            clearTimeout(n.visibleTimeout), n.setState({
                visible: !0
            }), n.visibleTimeout = setTimeout(function() {
                n.setState({
                    visible: !1
                })
            }, 2e3)
        }, n.onScrollbarTouchStart = function(l) {
            l.preventDefault()
        }, n.onContainerMouseDown = function(l) {
            l.stopPropagation(), l.preventDefault()
        }, n.patchEvents = function() {
            window.addEventListener("mousemove", n.onMouseMove), window.addEventListener("mouseup", n.onMouseUp), n.thumbRef.current.addEventListener("touchmove", n.onMouseMove), n.thumbRef.current.addEventListener("touchend", n.onMouseUp)
        }, n.removeEvents = function() {
            var l;
            window.removeEventListener("mousemove", n.onMouseMove), window.removeEventListener("mouseup", n.onMouseUp), (l = n.scrollbarRef.current) === null || l === void 0 || l.removeEventListener("touchstart", n.onScrollbarTouchStart), n.thumbRef.current && (n.thumbRef.current.removeEventListener("touchstart", n.onMouseDown), n.thumbRef.current.removeEventListener("touchmove", n.onMouseMove), n.thumbRef.current.removeEventListener("touchend", n.onMouseUp)), qe.cancel(n.moveRaf)
        }, n.onMouseDown = function(l) {
            var u = n.props.onStartMove;
            n.setState({
                dragging: !0,
                pageY: Qt(l),
                startTop: n.getTop()
            }), u(), n.patchEvents(), l.stopPropagation(), l.preventDefault()
        }, n.onMouseMove = function(l) {
            var u = n.state,
                f = u.dragging,
                d = u.pageY,
                s = u.startTop,
                p = n.props.onScroll;
            if (qe.cancel(n.moveRaf), f) {
                var v = Qt(l) - d,
                    m = s + v,
                    h = n.getEnableScrollRange(),
                    S = n.getEnableHeightRange(),
                    I = S ? m / S : 0,
                    x = Math.ceil(I * h);
                n.moveRaf = qe(function() {
                    p(x)
                })
            }
        }, n.onMouseUp = function() {
            var l = n.props.onStopMove;
            n.setState({
                dragging: !1
            }), l(), n.removeEvents()
        }, n.getSpinHeight = function() {
            var l = n.props,
                u = l.height,
                f = l.count,
                d = u / f * 10;
            return d = Math.max(d, Yr), d = Math.min(d, u / 2), Math.floor(d)
        }, n.getEnableScrollRange = function() {
            var l = n.props,
                u = l.scrollHeight,
                f = l.height;
            return u - f || 0
        }, n.getEnableHeightRange = function() {
            var l = n.props.height,
                u = n.getSpinHeight();
            return l - u || 0
        }, n.getTop = function() {
            var l = n.props.scrollTop,
                u = n.getEnableScrollRange(),
                f = n.getEnableHeightRange();
            if (l === 0 || u === 0) return 0;
            var d = l / u;
            return d * f
        }, n.showScroll = function() {
            var l = n.props,
                u = l.height,
                f = l.scrollHeight;
            return f > u
        }, n
    }
    return jr(r, [{
        key: "componentDidMount",
        value: function() {
            this.scrollbarRef.current.addEventListener("touchstart", this.onScrollbarTouchStart), this.thumbRef.current.addEventListener("touchstart", this.onMouseDown)
        }
    }, {
        key: "componentDidUpdate",
        value: function(a) {
            a.scrollTop !== this.props.scrollTop && this.delayHidden()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.removeEvents(), clearTimeout(this.visibleTimeout)
        }
    }, {
        key: "render",
        value: function() {
            var a = this.state,
                i = a.dragging,
                c = a.visible,
                l = this.props.prefixCls,
                u = this.getSpinHeight(),
                f = this.getTop(),
                d = this.showScroll(),
                s = d && c;
            return o.exports.createElement("div", {
                ref: this.scrollbarRef,
                className: Ee("".concat(l, "-scrollbar"), qt({}, "".concat(l, "-scrollbar-show"), d)),
                style: {
                    width: 8,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: s ? null : "none"
                },
                onMouseDown: this.onContainerMouseDown,
                onMouseMove: this.delayHidden
            }, o.exports.createElement("div", {
                ref: this.thumbRef,
                className: Ee("".concat(l, "-scrollbar-thumb"), qt({}, "".concat(l, "-scrollbar-thumb-moving"), i)),
                style: {
                    width: "100%",
                    height: u,
                    top: f,
                    left: 0,
                    position: "absolute",
                    background: "rgba(0, 0, 0, 0.5)",
                    borderRadius: 99,
                    cursor: "pointer",
                    userSelect: "none"
                },
                onMouseDown: this.onMouseDown
            }))
        }
    }]), r
}(o.exports.Component);

function Xr(e) {
    var t = e.children,
        r = e.setRef,
        n = o.exports.useCallback(function(a) {
            r(a)
        }, []);
    return o.exports.cloneElement(t, {
        ref: n
    })
}

function qr(e, t, r, n, a, i) {
    var c = i.getKey;
    return e.slice(t, r + 1).map(function(l, u) {
        var f = t + u,
            d = a(l, f, {}),
            s = c(l);
        return o.exports.createElement(Xr, {
            key: s,
            setRef: function(v) {
                return n(l, v)
            }
        }, d)
    })
}

function Jr(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Zt(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
}

function Qr(e, t, r) {
    return t && Zt(e.prototype, t), r && Zt(e, r), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}
var Zr = function() {
    function e() {
        Jr(this, e), this.maps = void 0, this.maps = Object.create(null)
    }
    return Qr(e, [{
        key: "set",
        value: function(r, n) {
            this.maps[r] = n
        }
    }, {
        key: "get",
        value: function(r) {
            return this.maps[r]
        }
    }]), e
}();

function eo(e, t) {
    return oo(e) || ro(e, t) || no(e, t) || to()
}

function to() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function no(e, t) {
    if (!!e) {
        if (typeof e == "string") return en(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return en(e, t)
    }
}

function en(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function ro(e, t) {
    var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n = [],
            a = !0,
            i = !1,
            c, l;
        try {
            for (r = r.call(e); !(a = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); a = !0);
        } catch (u) {
            i = !0, l = u
        } finally {
            try {
                !a && r.return != null && r.return()
            } finally {
                if (i) throw l
            }
        }
        return n
    }
}

function oo(e) {
    if (Array.isArray(e)) return e
}

function ao(e, t, r) {
    var n = o.exports.useState(0),
        a = eo(n, 2),
        i = a[0],
        c = a[1],
        l = o.exports.useRef(new Map),
        u = o.exports.useRef(new Zr),
        f = o.exports.useRef();

    function d() {
        qe.cancel(f.current)
    }

    function s() {
        d(), f.current = qe(function() {
            l.current.forEach(function(v, m) {
                if (v && v.offsetParent) {
                    var h = Yn(v),
                        S = h.offsetHeight;
                    u.current.get(m) !== S && u.current.set(m, h.offsetHeight)
                }
            }), c(function(v) {
                return v + 1
            })
        })
    }

    function p(v, m) {
        var h = e(v),
            S = l.current.get(h);
        m ? (l.current.set(h, m), s()) : l.current.delete(h), !S != !m && (m ? t == null || t(v) : r == null || r(v))
    }
    return o.exports.useEffect(function() {
        return d
    }, []), [p, s, u.current, i]
}

function Rt(e) {
    return Rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Rt(e)
}

function io(e, t, r, n, a, i, c, l) {
    var u = o.exports.useRef();
    return function(f) {
        if (f == null) {
            l();
            return
        }
        if (qe.cancel(u.current), typeof f == "number") c(f);
        else if (f && Rt(f) === "object") {
            var d, s = f.align;
            "index" in f ? d = f.index : d = t.findIndex(function(h) {
                return a(h) === f.key
            });
            var p = f.offset,
                v = p === void 0 ? 0 : p,
                m = function h(S, I) {
                    if (!(S < 0 || !e.current)) {
                        var x = e.current.clientHeight,
                            R = !1,
                            k = I;
                        if (x) {
                            for (var $ = I || s, ee = 0, B = 0, P = 0, V = Math.min(t.length, d), Y = 0; Y <= V; Y += 1) {
                                var J = a(t[Y]);
                                B = ee;
                                var G = r.get(J);
                                P = B + (G === void 0 ? n : G), ee = P, Y === d && G === void 0 && (R = !0)
                            }
                            var y = null;
                            switch ($) {
                                case "top":
                                    y = B - v;
                                    break;
                                case "bottom":
                                    y = P - x + v;
                                    break;
                                default:
                                    {
                                        var L = e.current.scrollTop,
                                            b = L + x;B < L ? k = "top" : P > b && (k = "bottom")
                                    }
                            }
                            y !== null && y !== e.current.scrollTop && c(y)
                        }
                        u.current = qe(function() {
                            R && i(), h(S - 1, k)
                        })
                    }
                };
            m(3)
        }
    }
}

function lo(e, t, r) {
    var n = e.length,
        a = t.length,
        i, c;
    if (n === 0 && a === 0) return null;
    n < a ? (i = e, c = t) : (i = t, c = e);
    var l = {
        __EMPTY_ITEM__: !0
    };

    function u(m) {
        return m !== void 0 ? r(m) : l
    }
    for (var f = null, d = Math.abs(n - a) !== 1, s = 0; s < c.length; s += 1) {
        var p = u(i[s]),
            v = u(c[s]);
        if (p !== v) {
            f = s, d = d || p !== u(c[s + 1]);
            break
        }
    }
    return f === null ? null : {
        index: f,
        multiple: d
    }
}

function tn(e, t) {
    return fo(e) || so(e, t) || co(e, t) || uo()
}

function uo() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function co(e, t) {
    if (!!e) {
        if (typeof e == "string") return nn(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return nn(e, t)
    }
}

function nn(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function so(e, t) {
    var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n = [],
            a = !0,
            i = !1,
            c, l;
        try {
            for (r = r.call(e); !(a = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); a = !0);
        } catch (u) {
            i = !0, l = u
        } finally {
            try {
                !a && r.return != null && r.return()
            } finally {
                if (i) throw l
            }
        }
        return n
    }
}

function fo(e) {
    if (Array.isArray(e)) return e
}

function vo(e, t, r) {
    var n = o.exports.useState(e),
        a = tn(n, 2),
        i = a[0],
        c = a[1],
        l = o.exports.useState(null),
        u = tn(l, 2),
        f = u[0],
        d = u[1];
    return o.exports.useEffect(function() {
        var s = lo(i || [], e || [], t);
        (s == null ? void 0 : s.index) !== void 0 && (r == null || r(s.index), d(e[s.index])), c(e)
    }, [e]), [f]
}

function Ot(e) {
    return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Ot(e)
}
var po = (typeof navigator == "undefined" ? "undefined" : Ot(navigator)) === "object" && /Firefox/i.test(navigator.userAgent),
    bn = function(e, t) {
        var r = o.exports.useRef(!1),
            n = o.exports.useRef(null);

        function a() {
            clearTimeout(n.current), r.current = !0, n.current = setTimeout(function() {
                r.current = !1
            }, 50)
        }
        var i = o.exports.useRef({
            top: e,
            bottom: t
        });
        return i.current.top = e, i.current.bottom = t,
            function(c) {
                var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                    u = c < 0 && i.current.top || c > 0 && i.current.bottom;
                return l && u ? (clearTimeout(n.current), r.current = !1) : (!u || r.current) && a(), !r.current && u
            }
    };

function mo(e, t, r, n) {
    var a = o.exports.useRef(0),
        i = o.exports.useRef(null),
        c = o.exports.useRef(null),
        l = o.exports.useRef(!1),
        u = bn(t, r);

    function f(s) {
        if (!!e) {
            qe.cancel(i.current);
            var p = s.deltaY;
            a.current += p, c.current = p, !u(p) && (po || s.preventDefault(), i.current = qe(function() {
                var v = l.current ? 10 : 1;
                n(a.current * v), a.current = 0
            }))
        }
    }

    function d(s) {
        !e || (l.current = s.detail === c.current)
    }
    return [f, d]
}
var ho = 14 / 15;

function go(e, t, r) {
    var n = o.exports.useRef(!1),
        a = o.exports.useRef(0),
        i = o.exports.useRef(null),
        c = o.exports.useRef(null),
        l, u = function(p) {
            if (n.current) {
                var v = Math.ceil(p.touches[0].pageY),
                    m = a.current - v;
                a.current = v, r(m) && p.preventDefault(), clearInterval(c.current), c.current = setInterval(function() {
                    m *= ho, (!r(m, !0) || Math.abs(m) <= .1) && clearInterval(c.current)
                }, 16)
            }
        },
        f = function() {
            n.current = !1, l()
        },
        d = function(p) {
            l(), p.touches.length === 1 && !n.current && (n.current = !0, a.current = Math.ceil(p.touches[0].pageY), i.current = p.target, i.current.addEventListener("touchmove", u), i.current.addEventListener("touchend", f))
        };
    l = function() {
        i.current && (i.current.removeEventListener("touchmove", u), i.current.removeEventListener("touchend", f))
    }, dt(function() {
        return e && t.current.addEventListener("touchstart", d),
            function() {
                var s;
                (s = t.current) === null || s === void 0 || s.removeEventListener("touchstart", d), l(), clearInterval(c.current)
            }
    }, [e])
}
var bo = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "component", "onScroll", "onVisibleChange"];

function Mt() {
    return Mt = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }, Mt.apply(this, arguments)
}

function rn(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function yt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? rn(Object(r), !0).forEach(function(n) {
            xn(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rn(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}

function xn(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e
}

function ut(e, t) {
    return wo(e) || So(e, t) || yo(e, t) || xo()
}

function xo() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function yo(e, t) {
    if (!!e) {
        if (typeof e == "string") return on(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return on(e, t)
    }
}

function on(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function So(e, t) {
    var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n = [],
            a = !0,
            i = !1,
            c, l;
        try {
            for (r = r.call(e); !(a = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); a = !0);
        } catch (u) {
            i = !0, l = u
        } finally {
            try {
                !a && r.return != null && r.return()
            } finally {
                if (i) throw l
            }
        }
        return n
    }
}

function wo(e) {
    if (Array.isArray(e)) return e
}

function Co(e, t) {
    if (e == null) return {};
    var r = Eo(e, t),
        n, a;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
    }
    return r
}

function Eo(e, t) {
    if (e == null) return {};
    var r = {},
        n = Object.keys(e),
        a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
    return r
}
var Io = [],
    Ro = {
        overflowY: "auto",
        overflowAnchor: "none"
    };

function Oo(e, t) {
    var r = e.prefixCls,
        n = r === void 0 ? "rc-virtual-list" : r,
        a = e.className,
        i = e.height,
        c = e.itemHeight,
        l = e.fullHeight,
        u = l === void 0 ? !0 : l,
        f = e.style,
        d = e.data,
        s = e.children,
        p = e.itemKey,
        v = e.virtual,
        m = e.component,
        h = m === void 0 ? "div" : m,
        S = e.onScroll,
        I = e.onVisibleChange,
        x = Co(e, bo),
        R = !!(v !== !1 && i && c),
        k = R && d && c * d.length > i,
        $ = o.exports.useState(0),
        ee = ut($, 2),
        B = ee[0],
        P = ee[1],
        V = o.exports.useState(!1),
        Y = ut(V, 2),
        J = Y[0],
        G = Y[1],
        y = Ee(n, a),
        L = d || Io,
        b = o.exports.useRef(),
        C = o.exports.useRef(),
        H = o.exports.useRef(),
        z = o.exports.useCallback(function(M) {
            return typeof p == "function" ? p(M) : M == null ? void 0 : M[p]
        }, [p]),
        X = {
            getKey: z
        };

    function re(M) {
        P(function(Q) {
            var ge;
            typeof M == "function" ? ge = M(Q) : ge = M;
            var Se = xe(ge);
            return b.current.scrollTop = Se, Se
        })
    }
    var se = o.exports.useRef({
            start: 0,
            end: L.length
        }),
        Me = o.exports.useRef(),
        q = vo(L, z),
        _ = ut(q, 1),
        g = _[0];
    Me.current = g;
    var N = ao(z, null, null),
        U = ut(N, 4),
        j = U[0],
        W = U[1],
        te = U[2],
        ve = U[3],
        K = o.exports.useMemo(function() {
            if (!R) return {
                scrollHeight: void 0,
                start: 0,
                end: L.length - 1,
                offset: void 0
            };
            if (!k) {
                var M;
                return {
                    scrollHeight: ((M = C.current) === null || M === void 0 ? void 0 : M.offsetHeight) || 0,
                    start: 0,
                    end: L.length - 1,
                    offset: void 0
                }
            }
            for (var Q = 0, ge, Se, Pe, Le = L.length, Ge = 0; Ge < Le; Ge += 1) {
                var rt = L[Ge],
                    nt = z(rt),
                    ze = te.get(nt),
                    We = Q + (ze === void 0 ? c : ze);
                We >= B && ge === void 0 && (ge = Ge, Se = Q), We > B + i && Pe === void 0 && (Pe = Ge), Q = We
            }
            return ge === void 0 && (ge = 0, Se = 0), Pe === void 0 && (Pe = L.length - 1), Pe = Math.min(Pe + 1, L.length), {
                scrollHeight: Q,
                start: ge,
                end: Pe,
                offset: Se
            }
        }, [k, R, B, L, ve, i]),
        ne = K.scrollHeight,
        oe = K.start,
        ae = K.end,
        he = K.offset;
    se.current.start = oe, se.current.end = ae;
    var fe = ne - i,
        pe = o.exports.useRef(fe);
    pe.current = fe;

    function xe(M) {
        var Q = M;
        return Number.isNaN(pe.current) || (Q = Math.min(Q, pe.current)), Q = Math.max(Q, 0), Q
    }
    var ie = B <= 0,
        ye = B >= fe,
        De = bn(ie, ye);

    function je(M) {
        var Q = M;
        re(Q)
    }

    function Ne(M) {
        var Q = M.currentTarget.scrollTop;
        Q !== B && re(Q), S == null || S(M)
    }
    var Be = mo(R, ie, ye, function(M) {
            re(function(Q) {
                var ge = Q + M;
                return ge
            })
        }),
        Ce = ut(Be, 2),
        Ie = Ce[0],
        Te = Ce[1];
    go(R, b, function(M, Q) {
        return De(M, Q) ? !1 : (Ie({
            preventDefault: function() {},
            deltaY: M
        }), !0)
    }), dt(function() {
        function M(Q) {
            R && Q.preventDefault()
        }
        return b.current.addEventListener("wheel", Ie), b.current.addEventListener("DOMMouseScroll", Te), b.current.addEventListener("MozMousePixelScroll", M),
            function() {
                b.current && (b.current.removeEventListener("wheel", Ie), b.current.removeEventListener("DOMMouseScroll", Te), b.current.removeEventListener("MozMousePixelScroll", M))
            }
    }, [R]);
    var Ae = io(b, L, te, c, z, W, re, function() {
        var M;
        (M = H.current) === null || M === void 0 || M.delayHidden()
    });
    o.exports.useImperativeHandle(t, function() {
        return {
            scrollTo: Ae
        }
    }), dt(function() {
        if (I) {
            var M = L.slice(oe, ae + 1);
            I(M, L)
        }
    }, [oe, ae, L]);
    var Ye = qr(L, oe, ae, j, s, X),
        Ke = null;
    return i && (Ke = yt(xn({}, u ? "height" : "maxHeight", i), Ro), R && (Ke.overflowY = "hidden", J && (Ke.pointerEvents = "none"))), o.exports.createElement("div", Mt({
        style: yt(yt({}, f), {}, {
            position: "relative"
        }),
        className: y
    }, x), o.exports.createElement(h, {
        className: "".concat(n, "-holder"),
        style: Ke,
        ref: b,
        onScroll: Ne
    }, o.exports.createElement(gn, {
        prefixCls: n,
        height: ne,
        offset: he,
        onInnerResize: W,
        ref: C
    }, Ye)), R && o.exports.createElement(Gr, {
        ref: H,
        prefixCls: n,
        scrollTop: B,
        height: i,
        scrollHeight: ne,
        count: L.length,
        onScroll: je,
        onStartMove: function() {
            G(!0)
        },
        onStopMove: function() {
            G(!1)
        }
    }))
}
var yn = o.exports.forwardRef(Oo);
yn.displayName = "List";

function Mo() {
    return /(mac\sos|macintosh)/i.test(navigator.appVersion)
}
var Sn = o.exports.createContext(null),
    Do = ["disabled", "title", "children", "style", "className"];

function an(e) {
    return typeof e == "string" || typeof e == "number"
}
var Po = function(t, r) {
        var n = Or(),
            a = n.prefixCls,
            i = n.id,
            c = n.open,
            l = n.multiple,
            u = n.mode,
            f = n.searchValue,
            d = n.toggleOpen,
            s = n.notFoundContent,
            p = n.onPopupScroll,
            v = o.exports.useContext(Sn),
            m = v.flattenOptions,
            h = v.onActiveValue,
            S = v.defaultActiveFirstOption,
            I = v.onSelect,
            x = v.menuItemSelectedIcon,
            R = v.rawValues,
            k = v.fieldNames,
            $ = v.virtual,
            ee = v.listHeight,
            B = v.listItemHeight,
            P = "".concat(a, "-item"),
            V = Gn(function() {
                return m
            }, [c, m], function(_, g) {
                return g[0] && _[1] !== g[1]
            }),
            Y = o.exports.useRef(null),
            J = function(g) {
                g.preventDefault()
            },
            G = function(g) {
                Y.current && Y.current.scrollTo(typeof g == "number" ? {
                    index: g
                } : g)
            },
            y = function(g) {
                for (var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, U = V.length, j = 0; j < U; j += 1) {
                    var W = (g + j * N + U) % U,
                        te = V[W],
                        ve = te.group,
                        K = te.data;
                    if (!ve && !K.disabled) return W
                }
                return -1
            },
            L = o.exports.useState(function() {
                return y(0)
            }),
            b = de(L, 2),
            C = b[0],
            H = b[1],
            z = function(g) {
                var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                H(g);
                var U = {
                        source: N ? "keyboard" : "mouse"
                    },
                    j = V[g];
                if (!j) {
                    h(null, -1, U);
                    return
                }
                h(j.value, g, U)
            };
        o.exports.useEffect(function() {
            z(S !== !1 ? y(0) : -1)
        }, [V.length, f]);
        var X = o.exports.useCallback(function(_) {
            return R.has(_) && u !== "combobox"
        }, [u, ke(R).toString()]);
        o.exports.useEffect(function() {
            var _ = setTimeout(function() {
                if (!l && c && R.size === 1) {
                    var N = Array.from(R)[0],
                        U = V.findIndex(function(j) {
                            var W = j.data;
                            return W.value === N
                        });
                    U !== -1 && (z(U), G(U))
                }
            });
            if (c) {
                var g;
                (g = Y.current) === null || g === void 0 || g.scrollTo(void 0)
            }
            return function() {
                return clearTimeout(_)
            }
        }, [c, f]);
        var re = function(g) {
            g !== void 0 && I(g, {
                selected: !R.has(g)
            }), l || d(!1)
        };
        if (o.exports.useImperativeHandle(r, function() {
                return {
                    onKeyDown: function(g) {
                        var N = g.which,
                            U = g.ctrlKey;
                        switch (N) {
                            case A.N:
                            case A.P:
                            case A.UP:
                            case A.DOWN:
                                {
                                    var j = 0;
                                    if (N === A.UP ? j = -1 : N === A.DOWN ? j = 1 : Mo() && U && (N === A.N ? j = 1 : N === A.P && (j = -1)), j !== 0) {
                                        var W = y(C + j, j);
                                        G(W), z(W, !0)
                                    }
                                    break
                                }
                            case A.ENTER:
                                {
                                    var te = V[C];te && !te.data.disabled ? re(te.value) : re(void 0),
                                    c && g.preventDefault();
                                    break
                                }
                            case A.ESC:
                                d(!1), c && g.stopPropagation()
                        }
                    },
                    onKeyUp: function() {},
                    scrollTo: function(g) {
                        G(g)
                    }
                }
            }), V.length === 0) return o.exports.createElement("div", {
            role: "listbox",
            id: "".concat(i, "_list"),
            className: "".concat(P, "-empty"),
            onMouseDown: J
        }, s);
        var se = Object.keys(k).map(function(_) {
                return k[_]
            }),
            Me = function(g) {
                return g.label
            },
            q = function(g) {
                var N = V[g];
                if (!N) return null;
                var U = N.data || {},
                    j = U.value,
                    W = N.group,
                    te = ft(U, !0),
                    ve = Me(N);
                return N ? o.exports.createElement("div", Fe({
                    "aria-label": typeof ve == "string" && !W ? ve : null
                }, te, {
                    key: g,
                    role: W ? "presentation" : "option",
                    id: "".concat(i, "_list_").concat(g),
                    "aria-selected": X(j)
                }), j) : null
            };
        return o.exports.createElement(o.exports.Fragment, null, o.exports.createElement("div", {
            role: "listbox",
            id: "".concat(i, "_list"),
            style: {
                height: 0,
                width: 0,
                overflow: "hidden"
            }
        }, q(C - 1), q(C), q(C + 1)), o.exports.createElement(yn, {
            itemKey: "key",
            ref: Y,
            data: V,
            height: ee,
            itemHeight: B,
            fullHeight: !1,
            onMouseDown: J,
            onScroll: p,
            virtual: $
        }, function(_, g) {
            var N, U = _.group,
                j = _.groupOption,
                W = _.data,
                te = _.label,
                ve = _.value,
                K = W.key;
            if (U) {
                var ne, oe = (ne = W.title) !== null && ne !== void 0 ? ne : an(te) ? te.toString() : void 0;
                return o.exports.createElement("div", {
                    className: Ee(P, "".concat(P, "-group")),
                    title: oe
                }, te !== void 0 ? te : K)
            }
            var ae = W.disabled,
                he = W.title;
            W.children;
            var fe = W.style,
                pe = W.className,
                xe = at(W, Do),
                ie = un(xe, se),
                ye = X(ve),
                De = "".concat(P, "-option"),
                je = Ee(P, De, pe, (N = {}, Z(N, "".concat(De, "-grouped"), j), Z(N, "".concat(De, "-active"), C === g && !ae), Z(N, "".concat(De, "-disabled"), ae), Z(N, "".concat(De, "-selected"), ye), N)),
                Ne = Me(_),
                Be = !x || typeof x == "function" || ye,
                Ce = typeof Ne == "number" ? Ne : Ne || ve,
                Ie = an(Ce) ? Ce.toString() : void 0;
            return he !== void 0 && (Ie = he), o.exports.createElement("div", Fe({}, ft(ie), {
                "aria-selected": ye,
                className: je,
                title: Ie,
                onMouseMove: function() {
                    C === g || ae || z(g)
                },
                onClick: function() {
                    ae || re(ve)
                },
                style: fe
            }), o.exports.createElement("div", {
                className: "".concat(De, "-content")
            }, Ce), o.exports.isValidElement(x) || ye, Be && o.exports.createElement(vt, {
                className: "".concat(P, "-option-state"),
                customizeIcon: x,
                customizeIconProps: {
                    isSelected: ye
                }
            }, ye ? "\u2713" : null))
        }))
    },
    wn = o.exports.forwardRef(Po);
wn.displayName = "OptionList";
var _o = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "listHeight", "listItemHeight", "value", "defaultValue", "labelInValue", "onChange"],
    No = ["inputValue"];

function To(e) {
    return !e || ln(e) !== "object"
}
var Ao = o.exports.forwardRef(function(e, t) {
        var r = e.id,
            n = e.mode,
            a = e.prefixCls,
            i = a === void 0 ? "rc-select" : a,
            c = e.backfill,
            l = e.fieldNames,
            u = e.inputValue,
            f = e.searchValue,
            d = e.onSearch,
            s = e.autoClearSearchValue,
            p = s === void 0 ? !0 : s,
            v = e.onSelect,
            m = e.onDeselect,
            h = e.dropdownMatchSelectWidth,
            S = h === void 0 ? !0 : h,
            I = e.filterOption,
            x = e.filterSort,
            R = e.optionFilterProp,
            k = e.optionLabelProp,
            $ = e.options,
            ee = e.children,
            B = e.defaultActiveFirstOption,
            P = e.menuItemSelectedIcon,
            V = e.virtual,
            Y = e.listHeight,
            J = Y === void 0 ? 200 : Y,
            G = e.listItemHeight,
            y = G === void 0 ? 20 : G,
            L = e.value,
            b = e.defaultValue,
            C = e.labelInValue,
            H = e.onChange,
            z = at(e, _o),
            X = Lr(r),
            re = Ct(n),
            se = !!(!$ && ee),
            Me = o.exports.useMemo(function() {
                return I === void 0 && n === "combobox" ? !1 : I
            }, [I, n]),
            q = o.exports.useMemo(function() {
                return cn(l, se)
            }, [JSON.stringify(l), se]),
            _ = St("", {
                value: f !== void 0 ? f : u,
                postState: function(E) {
                    return E || ""
                }
            }),
            g = de(_, 2),
            N = g[0],
            U = g[1],
            j = Vr($, ee, q, R, k),
            W = j.valueOptions,
            te = j.labelOptions,
            ve = j.options,
            K = o.exports.useCallback(function(O) {
                var E = fn(O);
                return E.map(function(w) {
                    var F, le, ce, Qe;
                    if (To(w)) F = w;
                    else {
                        var Ve;
                        ce = w.key, le = w.label, F = (Ve = w.value) !== null && Ve !== void 0 ? Ve : ce
                    }
                    var Re = W.get(F);
                    if (Re) {
                        var Ze;
                        le === void 0 && (le = Re == null ? void 0 : Re[k || q.label]), ce === void 0 && (ce = (Ze = Re == null ? void 0 : Re.key) !== null && Ze !== void 0 ? Ze : F), Qe = Re == null ? void 0 : Re.disabled
                    }
                    return {
                        label: le,
                        value: F,
                        key: ce,
                        disabled: Qe
                    }
                })
            }, [q, k, W]),
            ne = St(b, {
                value: L
            }),
            oe = de(ne, 2),
            ae = oe[0],
            he = oe[1],
            fe = o.exports.useMemo(function() {
                var O, E = K(ae);
                return n === "combobox" && !(!((O = E[0]) === null || O === void 0) && O.value) ? [] : E
            }, [ae, K, n]),
            pe = _r(fe, W),
            xe = de(pe, 2),
            ie = xe[0],
            ye = xe[1],
            De = o.exports.useMemo(function() {
                if (!n && ie.length === 1) {
                    var O = ie[0];
                    if (O.value === null && (O.label === null || O.label === void 0)) return []
                }
                return ie.map(function(E) {
                    var w;
                    return ue(ue({}, E), {}, {
                        label: (w = E.label) !== null && w !== void 0 ? w : E.value
                    })
                })
            }, [n, ie]),
            je = o.exports.useMemo(function() {
                return new Set(ie.map(function(O) {
                    return O.value
                }))
            }, [ie]);
        o.exports.useEffect(function() {
            if (n === "combobox") {
                var O, E = (O = ie[0]) === null || O === void 0 ? void 0 : O.value;
                E != null && U(String(E))
            }
        }, [ie]);
        var Ne = Yt(function(O, E) {
                var w, F = E != null ? E : O;
                return w = {}, Z(w, q.value, O), Z(w, q.label, F), w
            }),
            Be = o.exports.useMemo(function() {
                if (n !== "tags") return ve;
                var O = ke(ve),
                    E = function(F) {
                        return W.has(F)
                    };
                return ke(ie).sort(function(w, F) {
                    return w.value < F.value ? -1 : 1
                }).forEach(function(w) {
                    var F = w.value;
                    E(F) || O.push(Ne(F, w.label))
                }), O
            }, [Ne, ve, W, ie, n]),
            Ce = Nr(Be, q, N, Me, R),
            Ie = o.exports.useMemo(function() {
                return n !== "tags" || !N || Ce.some(function(O) {
                    return O[R || "value"] === N
                }) ? Ce : [Ne(N)].concat(ke(Ce))
            }, [Ne, R, n, Ce, N]),
            Te = o.exports.useMemo(function() {
                return x ? ke(Ie).sort(function(O, E) {
                    return x(O, E)
                }) : Ie
            }, [Ie, x]),
            Ae = o.exports.useMemo(function() {
                return fr(Te, {
                    fieldNames: q,
                    childrenAsData: se
                })
            }, [Te, q, se]),
            Ye = function(E) {
                var w = K(E);
                if (he(w), H && (w.length !== ie.length || w.some(function(ce, Qe) {
                        var Ve;
                        return ((Ve = ie[Qe]) === null || Ve === void 0 ? void 0 : Ve.value) !== (ce == null ? void 0 : ce.value)
                    }))) {
                    var F = C ? w : w.map(function(ce) {
                            return ce.value
                        }),
                        le = w.map(function(ce) {
                            return wt(ye(ce.value))
                        });
                    H(re ? F : F[0], re ? le : le[0])
                }
            },
            Ke = o.exports.useState(null),
            M = de(Ke, 2),
            Q = M[0],
            ge = M[1],
            Se = o.exports.useState(0),
            Pe = de(Se, 2),
            Le = Pe[0],
            Ge = Pe[1],
            rt = B !== void 0 ? B : n !== "combobox",
            nt = o.exports.useCallback(function(O, E) {
                var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    F = w.source,
                    le = F === void 0 ? "keyboard" : F;
                Ge(E), c && n === "combobox" && O !== null && le === "keyboard" && ge(String(O))
            }, [c, n]),
            ze = function(E, w) {
                var F = function() {
                    var Ue, Xe = ye(E);
                    return [C ? {
                        label: Xe == null ? void 0 : Xe[q.label],
                        value: E,
                        key: (Ue = Xe == null ? void 0 : Xe.key) !== null && Ue !== void 0 ? Ue : E
                    } : E, wt(Xe)]
                };
                if (w && v) {
                    var le = F(),
                        ce = de(le, 2),
                        Qe = ce[0],
                        Ve = ce[1];
                    v(Qe, Ve)
                } else if (!w && m) {
                    var Re = F(),
                        Ze = de(Re, 2),
                        it = Ze[0],
                        gt = Ze[1];
                    m(it, gt)
                }
            },
            We = Yt(function(O, E) {
                var w, F = re ? E.selected : !0;
                F ? w = re ? [].concat(ke(ie), [O]) : [O] : w = ie.filter(function(le) {
                    return le.value !== O
                }), Ye(w), ze(O, F), n === "combobox" ? ge("") : (!Ct || p) && (U(""), ge(""))
            }),
            be = function(E, w) {
                Ye(E), (w.type === "remove" || w.type === "clear") && w.values.forEach(function(F) {
                    ze(F.value, !1)
                })
            },
            st = function(E, w) {
                if (U(E), ge(null), w.source === "submit") {
                    var F = (E || "").trim();
                    if (F) {
                        var le = Array.from(new Set([].concat(ke(je), [F])));
                        Ye(le), ze(F, !0), U("")
                    }
                    return
                }
                w.source !== "blur" && (n === "combobox" && Ye(E), d == null || d(E))
            },
            Je = function(E) {
                var w = E;
                n !== "tags" && (w = E.map(function(le) {
                    var ce = te.get(le);
                    return ce == null ? void 0 : ce.value
                }).filter(function(le) {
                    return le !== void 0
                }));
                var F = Array.from(new Set([].concat(ke(je), ke(w))));
                Ye(F), F.forEach(function(le) {
                    ze(le, !0)
                })
            },
            $e = o.exports.useMemo(function() {
                var O = V !== !1 && S !== !1;
                return ue(ue({}, j), {}, {
                    flattenOptions: Ae,
                    onActiveValue: nt,
                    defaultActiveFirstOption: rt,
                    onSelect: We,
                    menuItemSelectedIcon: P,
                    rawValues: je,
                    fieldNames: q,
                    virtual: O,
                    listHeight: J,
                    listItemHeight: y,
                    childrenAsData: se
                })
            }, [j, Ae, nt, rt, We, P, je, q, V, S, J, y, se]);
        return o.exports.createElement(Sn.Provider, {
            value: $e
        }, o.exports.createElement(Pr, Fe({}, z, {
            id: X,
            prefixCls: i,
            ref: t,
            omitDomProps: No,
            mode: n,
            displayValues: De,
            onDisplayValuesChange: be,
            searchValue: N,
            onSearch: st,
            onSearchSplit: Je,
            dropdownMatchSelectWidth: S,
            OptionList: wn,
            emptyOptions: !Ae.length,
            activeValue: Q,
            activeDescendantId: "".concat(X, "_list_").concat(Le)
        })))
    }),
    Nt = Ao;
Nt.Option = _t;
Nt.OptGroup = Pt;
var Lo = function() {
        var t = o.exports.useContext(mt),
            r = t.getPrefixCls,
            n = r("empty-img-default");
        return o.exports.createElement("svg", {
            className: n,
            width: "184",
            height: "152",
            viewBox: "0 0 184 152",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.exports.createElement("g", {
            fill: "none",
            fillRule: "evenodd"
        }, o.exports.createElement("g", {
            transform: "translate(24 31.67)"
        }, o.exports.createElement("ellipse", {
            className: "".concat(n, "-ellipse"),
            cx: "67.797",
            cy: "106.89",
            rx: "67.797",
            ry: "12.668"
        }), o.exports.createElement("path", {
            className: "".concat(n, "-path-1"),
            d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
        }), o.exports.createElement("path", {
            className: "".concat(n, "-path-2"),
            d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
            transform: "translate(13.56)"
        }), o.exports.createElement("path", {
            className: "".concat(n, "-path-3"),
            d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
        }), o.exports.createElement("path", {
            className: "".concat(n, "-path-4"),
            d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
        })), o.exports.createElement("path", {
            className: "".concat(n, "-path-5"),
            d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        }), o.exports.createElement("g", {
            className: "".concat(n, "-g"),
            transform: "translate(149.65 15.383)"
        }, o.exports.createElement("ellipse", {
            cx: "20.654",
            cy: "3.167",
            rx: "2.849",
            ry: "2.815"
        }), o.exports.createElement("path", {
            d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
        }))))
    },
    ko = Lo,
    Fo = function() {
        var t = o.exports.useContext(mt),
            r = t.getPrefixCls,
            n = r("empty-img-simple");
        return o.exports.createElement("svg", {
            className: n,
            width: "64",
            height: "41",
            viewBox: "0 0 64 41",
            xmlns: "http://www.w3.org/2000/svg"
        }, o.exports.createElement("g", {
            transform: "translate(0 1)",
            fill: "none",
            fillRule: "evenodd"
        }, o.exports.createElement("ellipse", {
            className: "".concat(n, "-ellipse"),
            cx: "32",
            cy: "33",
            rx: "32",
            ry: "7"
        }), o.exports.createElement("g", {
            className: "".concat(n, "-g"),
            fillRule: "nonzero"
        }, o.exports.createElement("path", {
            d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
        }), o.exports.createElement("path", {
            d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
            className: "".concat(n, "-path")
        }))))
    },
    $o = Fo,
    Vo = globalThis && globalThis.__rest || function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
        return r
    },
    Cn = o.exports.createElement(ko, null),
    En = o.exports.createElement($o, null),
    Tt = function(t) {
        var r = t.className,
            n = t.prefixCls,
            a = t.image,
            i = a === void 0 ? Cn : a,
            c = t.description,
            l = t.children,
            u = t.imageStyle,
            f = Vo(t, ["className", "prefixCls", "image", "description", "children", "imageStyle"]),
            d = o.exports.useContext(mt),
            s = d.getPrefixCls,
            p = d.direction;
        return o.exports.createElement(Xn, {
            componentName: "Empty"
        }, function(v) {
            var m, h = s("empty", n),
                S = typeof c != "undefined" ? c : v.description,
                I = typeof S == "string" ? S : "empty",
                x = null;
            return typeof i == "string" ? x = o.exports.createElement("img", {
                alt: I,
                src: i
            }) : x = i, o.exports.createElement("div", Fe({
                className: Ee(h, (m = {}, Z(m, "".concat(h, "-normal"), i === En), Z(m, "".concat(h, "-rtl"), p === "rtl"), m), r)
            }, f), o.exports.createElement("div", {
                className: "".concat(h, "-image"),
                style: u
            }, x), S && o.exports.createElement("div", {
                className: "".concat(h, "-description")
            }, S), l && o.exports.createElement("div", {
                className: "".concat(h, "-footer")
            }, l))
        })
    };
Tt.PRESENTED_IMAGE_DEFAULT = Cn;
Tt.PRESENTED_IMAGE_SIMPLE = En;
var ct = Tt,
    Ho = function(t) {
        return o.exports.createElement(qn, null, function(r) {
            var n = r.getPrefixCls,
                a = n("empty");
            switch (t) {
                case "Table":
                case "List":
                    return o.exports.createElement(ct, {
                        image: ct.PRESENTED_IMAGE_SIMPLE
                    });
                case "Select":
                case "TreeSelect":
                case "Cascader":
                case "Transfer":
                case "Mentions":
                    return o.exports.createElement(ct, {
                        image: ct.PRESENTED_IMAGE_SIMPLE,
                        className: "".concat(a, "-small")
                    });
                default:
                    return o.exports.createElement(ct, null)
            }
        })
    },
    jo = Ho,
    Ko = {
        icon: {
            tag: "svg",
            attrs: {
                viewBox: "64 64 896 896",
                focusable: "false"
            },
            children: [{
                tag: "path",
                attrs: {
                    d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                }
            }]
        },
        name: "check",
        theme: "outlined"
    },
    zo = Ko,
    In = function(t, r) {
        return o.exports.createElement(Jn, ue(ue({}, t), {}, {
            ref: r,
            icon: zo
        }))
    };
In.displayName = "CheckOutlined";
var Wo = o.exports.forwardRef(In);

function Uo(e) {
    var t = e.suffixIcon,
        r = e.clearIcon,
        n = e.menuItemSelectedIcon,
        a = e.removeIcon,
        i = e.loading,
        c = e.multiple,
        l = e.hasFeedback,
        u = e.prefixCls,
        f = e.showArrow,
        d = e.feedbackIcon,
        s = r;
    r || (s = o.exports.createElement(Qn, null));
    var p = function(x) {
            return o.exports.createElement(o.exports.Fragment, null, f !== !1 && x, l && d)
        },
        v = null;
    if (t !== void 0) v = p(t);
    else if (i) v = p(o.exports.createElement(Zn, {
        spin: !0
    }));
    else {
        var m = "".concat(u, "-suffix");
        v = function(x) {
            var R = x.open,
                k = x.showSearch;
            return p(R && k ? o.exports.createElement(er, {
                className: m
            }) : o.exports.createElement(sr, {
                className: m
            }))
        }
    }
    var h = null;
    n !== void 0 ? h = n : c ? h = o.exports.createElement(Wo, null) : h = null;
    var S = null;
    return a !== void 0 ? S = a : S = o.exports.createElement(tr, null), {
        clearIcon: s,
        suffixIcon: v,
        itemIcon: h,
        removeIcon: S
    }
}
var Bo = globalThis && globalThis.__rest || function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
        return r
    },
    Rn = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
    Yo = function(t, r) {
        var n, a = t.prefixCls,
            i = t.bordered,
            c = i === void 0 ? !0 : i,
            l = t.className,
            u = t.getPopupContainer,
            f = t.dropdownClassName,
            d = t.listHeight,
            s = d === void 0 ? 256 : d,
            p = t.placement,
            v = t.listItemHeight,
            m = v === void 0 ? 24 : v,
            h = t.size,
            S = t.disabled,
            I = t.notFoundContent,
            x = t.status,
            R = t.showArrow,
            k = Bo(t, ["prefixCls", "bordered", "className", "getPopupContainer", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "showArrow"]),
            $ = o.exports.useContext(mt),
            ee = $.getPopupContainer,
            B = $.getPrefixCls,
            P = $.renderEmpty,
            V = $.direction,
            Y = $.virtual,
            J = $.dropdownMatchSelectWidth,
            G = o.exports.useContext(nr),
            y = B("select", a),
            L = B(),
            b = o.exports.useMemo(function() {
                var fe = k.mode;
                if (fe !== "combobox") return fe === Rn ? "combobox" : fe
            }, [k.mode]),
            C = b === "multiple" || b === "tags",
            H = R !== void 0 ? R : k.loading || !(C || b === "combobox"),
            z = o.exports.useContext(rr),
            X = z.status,
            re = z.hasFeedback,
            se = z.isFormItemInput,
            Me = z.feedbackIcon,
            q = ur(X, x),
            _;
        I !== void 0 ? _ = I : b === "combobox" ? _ = null : _ = (P || jo)("Select");
        var g = Uo(Fe(Fe({}, k), {
                multiple: C,
                hasFeedback: re,
                feedbackIcon: Me,
                showArrow: H,
                prefixCls: y
            })),
            N = g.suffixIcon,
            U = g.itemIcon,
            j = g.removeIcon,
            W = g.clearIcon,
            te = un(k, ["suffixIcon", "itemIcon"]),
            ve = Ee(f, Z({}, "".concat(y, "-dropdown-").concat(V), V === "rtl")),
            K = h || G,
            ne = o.exports.useContext(or),
            oe = S || ne,
            ae = Ee((n = {}, Z(n, "".concat(y, "-lg"), K === "large"), Z(n, "".concat(y, "-sm"), K === "small"), Z(n, "".concat(y, "-rtl"), V === "rtl"), Z(n, "".concat(y, "-borderless"), !c), Z(n, "".concat(y, "-in-form-item"), se), n), ar(y, q, re), l),
            he = function() {
                return p !== void 0 ? p : V === "rtl" ? "bottomRight" : "bottomLeft"
            };
        return o.exports.createElement(Nt, Fe({
            ref: r,
            virtual: Y,
            dropdownMatchSelectWidth: J
        }, te, {
            transitionName: ir(L, lr(p), k.transitionName),
            listHeight: s,
            listItemHeight: m,
            mode: b,
            prefixCls: y,
            placement: he(),
            direction: V,
            inputIcon: N,
            menuItemSelectedIcon: U,
            removeIcon: j,
            clearIcon: W,
            notFoundContent: _,
            className: ae,
            getPopupContainer: u || ee,
            dropdownClassName: ve,
            showArrow: re || R,
            disabled: oe
        }))
    },
    ht = o.exports.forwardRef(Yo);
ht.SECRET_COMBOBOX_MODE_DO_NOT_USE = Rn;
ht.Option = _t;
ht.OptGroup = Pt;
var Qo = ht;

function Go() {
    var e = o.exports.useReducer(function(n) {
            return n + 1
        }, 0),
        t = de(e, 2),
        r = t[1];
    return r
}

function Zo() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
        t = o.exports.useRef({}),
        r = Go();
    return o.exports.useEffect(function() {
        var n = zt.subscribe(function(a) {
            t.current = a, e && r()
        });
        return function() {
            return zt.unsubscribe(n)
        }
    }, []), t.current
}
export {
    Qo as S, Zo as u
};