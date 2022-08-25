import {
    r as h,
    i as J,
    d as K,
    e as Q
} from "./index.bf235723.js";
import {
    u as M,
    a as L,
    d as q
} from "./index.12cf2eb3.js";

function P(n) {
    var r = h.exports.useRef(n);
    r.current = h.exports.useMemo(function() {
        return n
    }, [n]);
    var e = h.exports.useRef();
    return e.current || (e.current = function() {
        for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
        return r.current.apply(this, t)
    }), e.current
}
var Y = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    U = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(Y(arguments[r]));
        return n
    },
    V = function(r, e) {
        var t = e.manual,
            a = e.ready,
            i = a === void 0 ? !0 : a,
            u = e.defaultParams,
            s = u === void 0 ? [] : u,
            f = e.refreshDeps,
            o = f === void 0 ? [] : f,
            l = e.refreshDepsAction,
            c = h.exports.useRef(!1);
        return c.current = !1, M(function() {
            !t && i && (c.current = !0, r.run.apply(r, U(s)))
        }, [i]), M(function() {
            c.current || t || (c.current = !0, l ? l() : r.refresh())
        }, U(o)), {
            onBefore: function() {
                if (!i) return {
                    stopNow: !0
                }
            }
        }
    };
V.onInit = function(n) {
    var r = n.ready,
        e = r === void 0 ? !0 : r,
        t = n.manual;
    return {
        loading: !t && e
    }
};
var Z = V;

function k(n, r) {
    if (n === r) return !0;
    for (var e = 0; e < n.length; e++)
        if (!Object.is(n[e], r[e])) return !1;
    return !0
}

function X(n, r) {
    var e = h.exports.useRef({
        deps: r,
        obj: void 0,
        initialized: !1
    }).current;
    return (e.initialized === !1 || !k(e.deps, r)) && (e.deps = r, e.obj = n(), e.initialized = !0), e.obj
}
var F = globalThis && globalThis.__assign || function() {
        return F = Object.assign || function(n) {
            for (var r, e = 1, t = arguments.length; e < t; e++) {
                r = arguments[e];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
            }
            return n
        }, F.apply(this, arguments)
    },
    j = new Map,
    I = function(r, e, t) {
        var a = j.get(r);
        a != null && a.timer && clearTimeout(a.timer);
        var i = void 0;
        e > -1 && (i = setTimeout(function() {
            j.delete(r)
        }, e)), j.set(r, F(F({}, t), {
            timer: i
        }))
    },
    rr = function(r) {
        return j.get(r)
    },
    E = new Map,
    er = function(r) {
        return E.get(r)
    },
    nr = function(r, e) {
        E.set(r, e), e.then(function(t) {
            return E.delete(r), t
        }).catch(function() {
            E.delete(r)
        })
    },
    T = {},
    tr = function(r, e) {
        T[r] && T[r].forEach(function(t) {
            return t(e)
        })
    },
    B = function(r, e) {
        return T[r] || (T[r] = []), T[r].push(e),
            function() {
                var a = T[r].indexOf(e);
                T[r].splice(a, 1)
            }
    },
    ar = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    ir = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(ar(arguments[r]));
        return n
    },
    or = function(r, e) {
        var t = e.cacheKey,
            a = e.cacheTime,
            i = a === void 0 ? 5 * 60 * 1e3 : a,
            u = e.staleTime,
            s = u === void 0 ? 0 : u,
            f = e.setCache,
            o = e.getCache,
            l = h.exports.useRef(),
            c = h.exports.useRef(),
            g = function(m, d) {
                f ? f(d) : I(m, i, d), tr(m, d.data)
            },
            p = function(m, d) {
                return d === void 0 && (d = []), o ? o(d) : rr(m)
            };
        return X(function() {
            if (!!t) {
                var v = p(t);
                v && Object.hasOwnProperty.call(v, "data") && (r.state.data = v.data, r.state.params = v.params, (s === -1 || new Date().getTime() - v.time <= s) && (r.state.loading = !1)), l.current = B(t, function(m) {
                    r.setState({
                        data: m
                    })
                })
            }
        }, []), L(function() {
            var v;
            (v = l.current) === null || v === void 0 || v.call(l)
        }), t ? {
            onBefore: function(m) {
                var d = p(t, m);
                return !d || !Object.hasOwnProperty.call(d, "data") ? {} : s === -1 || new Date().getTime() - d.time <= s ? {
                    loading: !1,
                    data: d == null ? void 0 : d.data,
                    returnNow: !0
                } : {
                    data: d == null ? void 0 : d.data
                }
            },
            onRequest: function(m, d) {
                var b = er(t);
                return b && b !== c.current ? {
                    servicePromise: b
                } : (b = m.apply(void 0, ir(d)), c.current = b, nr(t, b), {
                    servicePromise: b
                })
            },
            onSuccess: function(m, d) {
                var b;
                t && ((b = l.current) === null || b === void 0 || b.call(l), g(t, {
                    data: m,
                    params: d,
                    time: new Date().getTime()
                }), l.current = B(t, function(C) {
                    r.setState({
                        data: C
                    })
                }))
            },
            onMutate: function(m) {
                var d;
                t && ((d = l.current) === null || d === void 0 || d.call(l), g(t, {
                    data: m,
                    params: r.state.params,
                    time: new Date().getTime()
                }), l.current = B(t, function(b) {
                    r.setState({
                        data: b
                    })
                }))
            }
        } : {}
    },
    ur = or,
    lr = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    sr = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(lr(arguments[r]));
        return n
    },
    cr = function(r, e) {
        var t = e.debounceWait,
            a = e.debounceLeading,
            i = e.debounceTrailing,
            u = e.debounceMaxWait,
            s = h.exports.useRef(),
            f = h.exports.useMemo(function() {
                var o = {};
                return a !== void 0 && (o.leading = a), i !== void 0 && (o.trailing = i), u !== void 0 && (o.maxWait = u), o
            }, [a, i, u]);
        return h.exports.useEffect(function() {
            if (t) {
                var o = r.runAsync.bind(r);
                return s.current = q(function(l) {
                        l()
                    }, t, f), r.runAsync = function() {
                        for (var l = [], c = 0; c < arguments.length; c++) l[c] = arguments[c];
                        return new Promise(function(g, p) {
                            var v;
                            (v = s.current) === null || v === void 0 || v.call(s, function() {
                                o.apply(void 0, sr(l)).then(g).catch(p)
                            })
                        })
                    },
                    function() {
                        var l;
                        (l = s.current) === null || l === void 0 || l.cancel(), r.runAsync = o
                    }
            }
        }, [t, f]), t ? {
            onCancel: function() {
                var l;
                (l = s.current) === null || l === void 0 || l.cancel()
            }
        } : {}
    },
    fr = cr,
    dr = function(r, e) {
        var t = e.loadingDelay,
            a = h.exports.useRef();
        if (!t) return {};
        var i = function() {
            a.current && clearTimeout(a.current)
        };
        return {
            onBefore: function() {
                return i(), a.current = setTimeout(function() {
                    r.setState({
                        loading: !0
                    })
                }, t), {
                    loading: !1
                }
            },
            onFinally: function() {
                i()
            },
            onCancel: function() {
                i()
            }
        }
    },
    vr = dr;

function A() {
    return !!(typeof window != "undefined" && window.document && window.document.createElement)
}

function H() {
    return A() ? document.visibilityState !== "hidden" : !0
}
var O = [];

function hr(n) {
    return O.push(n),
        function() {
            var e = O.indexOf(n);
            O.splice(e, 1)
        }
}
if (A()) {
    var gr = function() {
        if (!!H())
            for (var r = 0; r < O.length; r++) {
                var e = O[r];
                e()
            }
    };
    window.addEventListener("visibilitychange", gr, !1)
}
var pr = function(r, e) {
        var t = e.pollingInterval,
            a = e.pollingWhenHidden,
            i = a === void 0 ? !0 : a,
            u = e.pollingErrorRetryCount,
            s = u === void 0 ? -1 : u,
            f = h.exports.useRef(),
            o = h.exports.useRef(),
            l = h.exports.useRef(0),
            c = function() {
                var p;
                f.current && clearTimeout(f.current), (p = o.current) === null || p === void 0 || p.call(o)
            };
        return M(function() {
            t || c()
        }, [t]), t ? {
            onBefore: function() {
                c()
            },
            onError: function() {
                l.current += 1
            },
            onSuccess: function() {
                l.current = 0
            },
            onFinally: function() {
                if (s === -1 || s !== -1 && l.current <= s) {
                    if (!i && !H()) {
                        o.current = hr(function() {
                            r.refresh()
                        });
                        return
                    }
                    f.current = setTimeout(function() {
                        r.refresh()
                    }, t)
                } else l.current = 0
            },
            onCancel: function() {
                c()
            }
        } : {}
    },
    mr = pr,
    br = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    yr = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(br(arguments[r]));
        return n
    };

function _r(n, r) {
    var e = !1;
    return function() {
        for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
        e || (e = !0, n.apply(void 0, yr(t)), setTimeout(function() {
            e = !1
        }, r))
    }
}

function wr() {
    return A() && typeof navigator.onLine != "undefined" ? navigator.onLine : !0
}
var S = [];

function Tr(n) {
    return S.push(n),
        function() {
            var e = S.indexOf(n);
            S.splice(e, 1)
        }
}
if (A()) {
    var z = function() {
        if (!(!H() || !wr()))
            for (var r = 0; r < S.length; r++) {
                var e = S[r];
                e()
            }
    };
    window.addEventListener("visibilitychange", z, !1), window.addEventListener("focus", z, !1)
}
var Pr = function(r, e) {
        var t = e.refreshOnWindowFocus,
            a = e.focusTimespan,
            i = a === void 0 ? 5e3 : a,
            u = h.exports.useRef(),
            s = function() {
                var o;
                (o = u.current) === null || o === void 0 || o.call(u)
            };
        return h.exports.useEffect(function() {
            if (t) {
                var f = _r(r.refresh.bind(r), i);
                u.current = Tr(function() {
                    f()
                })
            }
            return function() {
                s()
            }
        }, [t, i]), L(function() {
            s()
        }), {}
    },
    xr = Pr,
    Rr = function(r, e) {
        var t = e.retryInterval,
            a = e.retryCount,
            i = h.exports.useRef(),
            u = h.exports.useRef(0),
            s = h.exports.useRef(!1);
        return a ? {
            onBefore: function() {
                s.current || (u.current = 0), s.current = !1, i.current && clearTimeout(i.current)
            },
            onSuccess: function() {
                u.current = 0
            },
            onError: function() {
                if (u.current += 1, a === -1 || u.current <= a) {
                    var o = t != null ? t : Math.min(1e3 * Math.pow(2, u.current), 3e4);
                    i.current = setTimeout(function() {
                        s.current = !0, r.refresh()
                    }, o)
                } else u.current = 0
            },
            onCancel: function() {
                u.current = 0, i.current && clearTimeout(i.current)
            }
        } : {}
    },
    Or = Rr,
    Sr = q,
    Cr = J,
    $r = "Expected a function";

function jr(n, r, e) {
    var t = !0,
        a = !0;
    if (typeof n != "function") throw new TypeError($r);
    return Cr(e) && (t = "leading" in e ? !!e.leading : t, a = "trailing" in e ? !!e.trailing : a), Sr(n, r, {
        leading: t,
        maxWait: r,
        trailing: a
    })
}
var Er = jr,
    Fr = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    Ar = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(Fr(arguments[r]));
        return n
    },
    Dr = function(r, e) {
        var t = e.throttleWait,
            a = e.throttleLeading,
            i = e.throttleTrailing,
            u = h.exports.useRef(),
            s = {};
        return a !== void 0 && (s.leading = a), i !== void 0 && (s.trailing = i), h.exports.useEffect(function() {
            if (t) {
                var f = r.runAsync.bind(r);
                return u.current = Er(function(o) {
                        o()
                    }, t, s), r.runAsync = function() {
                        for (var o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l];
                        return new Promise(function(c, g) {
                            var p;
                            (p = u.current) === null || p === void 0 || p.call(u, function() {
                                f.apply(void 0, Ar(o)).then(c).catch(g)
                            })
                        })
                    },
                    function() {
                        var o;
                        r.runAsync = f, (o = u.current) === null || o === void 0 || o.cancel()
                    }
            }
        }, [t, a, i]), t ? {
            onCancel: function() {
                var o;
                (o = u.current) === null || o === void 0 || o.cancel()
            }
        } : {}
    },
    Br = Dr,
    Mr = function(r) {
        h.exports.useEffect(function() {
            r == null || r()
        }, [])
    },
    Wr = Mr,
    Lr = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    Hr = function() {
        var r = Lr(h.exports.useState({}), 2),
            e = r[1];
        return h.exports.useCallback(function() {
            return e({})
        }, [])
    },
    Nr = Hr,
    y = globalThis && globalThis.__assign || function() {
        return y = Object.assign || function(n) {
            for (var r, e = 1, t = arguments.length; e < t; e++) {
                r = arguments[e];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
            }
            return n
        }, y.apply(this, arguments)
    },
    Ur = globalThis && globalThis.__awaiter || function(n, r, e, t) {
        function a(i) {
            return i instanceof e ? i : new e(function(u) {
                u(i)
            })
        }
        return new(e || (e = Promise))(function(i, u) {
            function s(l) {
                try {
                    o(t.next(l))
                } catch (c) {
                    u(c)
                }
            }

            function f(l) {
                try {
                    o(t.throw(l))
                } catch (c) {
                    u(c)
                }
            }

            function o(l) {
                l.done ? i(l.value) : a(l.value).then(s, f)
            }
            o((t = t.apply(n, r || [])).next())
        })
    },
    zr = globalThis && globalThis.__generator || function(n, r) {
        var e = {
                label: 0,
                sent: function() {
                    if (i[0] & 1) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            t, a, i, u;
        return u = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
            return this
        }), u;

        function s(o) {
            return function(l) {
                return f([o, l])
            }
        }

        function f(o) {
            if (t) throw new TypeError("Generator is already executing.");
            for (; e;) try {
                if (t = 1, a && (i = o[0] & 2 ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i;
                switch (a = 0, i && (o = [o[0] & 2, i.value]), o[0]) {
                    case 0:
                    case 1:
                        i = o;
                        break;
                    case 4:
                        return e.label++, {
                            value: o[1],
                            done: !1
                        };
                    case 5:
                        e.label++, a = o[1], o = [0];
                        continue;
                    case 7:
                        o = e.ops.pop(), e.trys.pop();
                        continue;
                    default:
                        if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                            e = 0;
                            continue
                        }
                        if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
                            e.label = o[1];
                            break
                        }
                        if (o[0] === 6 && e.label < i[1]) {
                            e.label = i[1], i = o;
                            break
                        }
                        if (i && e.label < i[2]) {
                            e.label = i[2], e.ops.push(o);
                            break
                        }
                        i[2] && e.ops.pop(), e.trys.pop();
                        continue
                }
                o = r.call(n, e)
            } catch (l) {
                o = [6, l], a = 0
            } finally {
                t = i = 0
            }
            if (o[0] & 5) throw o[1];
            return {
                value: o[0] ? o[1] : void 0,
                done: !0
            }
        }
    },
    Gr = globalThis && globalThis.__rest || function(n, r) {
        var e = {};
        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && r.indexOf(t) < 0 && (e[t] = n[t]);
        if (n != null && typeof Object.getOwnPropertySymbols == "function")
            for (var a = 0, t = Object.getOwnPropertySymbols(n); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[a]) && (e[t[a]] = n[t[a]]);
        return e
    },
    qr = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    x = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(qr(arguments[r]));
        return n
    },
    Vr = function() {
        function n(r, e, t, a) {
            a === void 0 && (a = {}), this.serviceRef = r, this.options = e, this.subscribe = t, this.initState = a, this.count = 0, this.state = {
                loading: !1,
                params: void 0,
                data: void 0,
                error: void 0
            }, this.state = y(y(y({}, this.state), {
                loading: !e.manual
            }), a)
        }
        return n.prototype.setState = function(r) {
            r === void 0 && (r = {}), this.state = y(y({}, this.state), r), this.subscribe()
        }, n.prototype.runPluginHandler = function(r) {
            for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
            var a = this.pluginImpls.map(function(i) {
                var u;
                return (u = i[r]) === null || u === void 0 ? void 0 : u.call.apply(u, x([i], e))
            }).filter(Boolean);
            return Object.assign.apply(Object, x([{}], a))
        }, n.prototype.runAsync = function() {
            for (var r, e, t, a, i, u, s, f, o, l, c = [], g = 0; g < arguments.length; g++) c[g] = arguments[g];
            return Ur(this, void 0, void 0, function() {
                var p, v, m, d, b, C, D, $, _, w, N;
                return zr(this, function(R) {
                    switch (R.label) {
                        case 0:
                            if (this.count += 1, p = this.count, v = this.runPluginHandler("onBefore", c), m = v.stopNow, d = m === void 0 ? !1 : m, b = v.returnNow, C = b === void 0 ? !1 : b, D = Gr(v, ["stopNow", "returnNow"]), d) return [2, new Promise(function() {})];
                            if (this.setState(y({
                                    loading: !0,
                                    params: c
                                }, D)), C) return [2, Promise.resolve(D.data)];
                            (e = (r = this.options).onBefore) === null || e === void 0 || e.call(r, c), R.label = 1;
                        case 1:
                            return R.trys.push([1, 3, , 4]), $ = this.runPluginHandler("onRequest", this.serviceRef.current, c).servicePromise, $ || ($ = (N = this.serviceRef).current.apply(N, x(c))), [4, $];
                        case 2:
                            return _ = R.sent(), p !== this.count ? [2, new Promise(function() {})] : (this.setState({
                                data: _,
                                error: void 0,
                                loading: !1
                            }), (a = (t = this.options).onSuccess) === null || a === void 0 || a.call(t, _, c), this.runPluginHandler("onSuccess", _, c), (u = (i = this.options).onFinally) === null || u === void 0 || u.call(i, c, _, void 0), p === this.count && this.runPluginHandler("onFinally", c, _, void 0), [2, _]);
                        case 3:
                            if (w = R.sent(), p !== this.count) return [2, new Promise(function() {})];
                            throw this.setState({
                                error: w,
                                loading: !1
                            }), (f = (s = this.options).onError) === null || f === void 0 || f.call(s, w, c), this.runPluginHandler("onError", w, c), (l = (o = this.options).onFinally) === null || l === void 0 || l.call(o, c, void 0, w), p === this.count && this.runPluginHandler("onFinally", c, void 0, w), w;
                        case 4:
                            return [2]
                    }
                })
            })
        }, n.prototype.run = function() {
            for (var r = this, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.runAsync.apply(this, x(e)).catch(function(a) {
                r.options.onError || console.error(a)
            })
        }, n.prototype.cancel = function() {
            this.count += 1, this.setState({
                loading: !1
            }), this.runPluginHandler("onCancel")
        }, n.prototype.refresh = function() {
            this.run.apply(this, x(this.state.params || []))
        }, n.prototype.refreshAsync = function() {
            return this.runAsync.apply(this, x(this.state.params || []))
        }, n.prototype.mutate = function(r) {
            var e;
            K(r) ? e = r(this.state.data) : e = r, this.runPluginHandler("onMutate", e), this.setState({
                data: e
            })
        }, n
    }(),
    Xr = Vr,
    W = globalThis && globalThis.__assign || function() {
        return W = Object.assign || function(n) {
            for (var r, e = 1, t = arguments.length; e < t; e++) {
                r = arguments[e];
                for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
            }
            return n
        }, W.apply(this, arguments)
    },
    Jr = globalThis && globalThis.__rest || function(n, r) {
        var e = {};
        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && r.indexOf(t) < 0 && (e[t] = n[t]);
        if (n != null && typeof Object.getOwnPropertySymbols == "function")
            for (var a = 0, t = Object.getOwnPropertySymbols(n); a < t.length; a++) r.indexOf(t[a]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[a]) && (e[t[a]] = n[t[a]]);
        return e
    },
    Kr = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    G = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(Kr(arguments[r]));
        return n
    };

function Qr(n, r, e) {
    r === void 0 && (r = {}), e === void 0 && (e = []);
    var t = r.manual,
        a = t === void 0 ? !1 : t,
        i = Jr(r, ["manual"]),
        u = W({
            manual: a
        }, i),
        s = Q(n),
        f = Nr(),
        o = X(function() {
            var l = e.map(function(c) {
                var g;
                return (g = c == null ? void 0 : c.onInit) === null || g === void 0 ? void 0 : g.call(c, u)
            }).filter(Boolean);
            return new Xr(s, u, f, Object.assign.apply(Object, G([{}], l)))
        }, []);
    return o.options = u, o.pluginImpls = e.map(function(l) {
        return l(o, u)
    }), Wr(function() {
        if (!a) {
            var l = o.state.params || r.defaultParams || [];
            o.run.apply(o, G(l))
        }
    }), L(function() {
        o.cancel()
    }), {
        loading: o.state.loading,
        data: o.state.data,
        error: o.state.error,
        params: o.state.params || [],
        cancel: P(o.cancel.bind(o)),
        refresh: P(o.refresh.bind(o)),
        refreshAsync: P(o.refreshAsync.bind(o)),
        run: P(o.run.bind(o)),
        runAsync: P(o.runAsync.bind(o)),
        mutate: P(o.mutate.bind(o))
    }
}
var Yr = globalThis && globalThis.__read || function(n, r) {
        var e = typeof Symbol == "function" && n[Symbol.iterator];
        if (!e) return n;
        var t = e.call(n),
            a, i = [],
            u;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(a = t.next()).done;) i.push(a.value)
        } catch (s) {
            u = {
                error: s
            }
        } finally {
            try {
                a && !a.done && (e = t.return) && e.call(t)
            } finally {
                if (u) throw u.error
            }
        }
        return i
    },
    Zr = globalThis && globalThis.__spread || function() {
        for (var n = [], r = 0; r < arguments.length; r++) n = n.concat(Yr(arguments[r]));
        return n
    };

function re(n, r, e) {
    return Qr(n, r, Zr(e || [], [fr, vr, mr, xr, Br, Z, ur, Or]))
}
export {
    re as a, P as u
};