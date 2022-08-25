import {
    aX as X,
    r as Z,
    e as K
} from "./index.bf235723.js";
var q = {
    exports: {}
};
(function(b, v) {
    (function(d, $) {
        b.exports = $()
    })(X, function() {
        var d = 1e3,
            $ = 6e4,
            S = 36e5,
            _ = "millisecond",
            y = "second",
            D = "minute",
            w = "hour",
            g = "day",
            Y = "week",
            M = "month",
            I = "quarter",
            p = "year",
            O = "date",
            V = "Invalid Date",
            B = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            G = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            P = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            },
            U = function(a, n, t) {
                var r = String(a);
                return !r || r.length >= n ? a : "" + Array(n + 1 - r.length).join(t) + a
            },
            Q = {
                s: U,
                z: function(a) {
                    var n = -a.utcOffset(),
                        t = Math.abs(n),
                        r = Math.floor(t / 60),
                        e = t % 60;
                    return (n <= 0 ? "+" : "-") + U(r, 2, "0") + ":" + U(e, 2, "0")
                },
                m: function a(n, t) {
                    if (n.date() < t.date()) return -a(t, n);
                    var r = 12 * (t.year() - n.year()) + (t.month() - n.month()),
                        e = n.clone().add(r, M),
                        s = t - e < 0,
                        i = n.clone().add(r + (s ? -1 : 1), M);
                    return +(-(r + (t - e) / (s ? e - i : i - e)) || 0)
                },
                a: function(a) {
                    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
                },
                p: function(a) {
                    return {
                        M,
                        y: p,
                        w: Y,
                        d: g,
                        D: O,
                        h: w,
                        m: D,
                        s: y,
                        ms: _,
                        Q: I
                    }[a] || String(a || "").toLowerCase().replace(/s$/, "")
                },
                u: function(a) {
                    return a === void 0
                }
            },
            W = "en",
            H = {};
        H[W] = P;
        var F = function(a) {
                return a instanceof E
            },
            k = function a(n, t, r) {
                var e;
                if (!n) return W;
                if (typeof n == "string") {
                    var s = n.toLowerCase();
                    H[s] && (e = s), t && (H[s] = t, e = s);
                    var i = n.split("-");
                    if (!e && i.length > 1) return a(i[0])
                } else {
                    var u = n.name;
                    H[u] = n, e = u
                }
                return !r && e && (W = e), e || !r && W
            },
            h = function(a, n) {
                if (F(a)) return a.clone();
                var t = typeof n == "object" ? n : {};
                return t.date = a, t.args = arguments, new E(t)
            },
            o = Q;
        o.l = k, o.i = F, o.w = function(a, n) {
            return h(a, {
                locale: n.$L,
                utc: n.$u,
                x: n.$x,
                $offset: n.$offset
            })
        };
        var E = function() {
                function a(t) {
                    this.$L = k(t.locale, null, !0), this.parse(t)
                }
                var n = a.prototype;
                return n.parse = function(t) {
                    this.$d = function(r) {
                        var e = r.date,
                            s = r.utc;
                        if (e === null) return new Date(NaN);
                        if (o.u(e)) return new Date;
                        if (e instanceof Date) return new Date(e);
                        if (typeof e == "string" && !/Z$/i.test(e)) {
                            var i = e.match(B);
                            if (i) {
                                var u = i[2] - 1 || 0,
                                    c = (i[7] || "0").substring(0, 3);
                                return s ? new Date(Date.UTC(i[1], u, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, c)) : new Date(i[1], u, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, c)
                            }
                        }
                        return new Date(e)
                    }(t), this.$x = t.x || {}, this.init()
                }, n.init = function() {
                    var t = this.$d;
                    this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                }, n.$utils = function() {
                    return o
                }, n.isValid = function() {
                    return this.$d.toString() !== V
                }, n.isSame = function(t, r) {
                    var e = h(t);
                    return this.startOf(r) <= e && e <= this.endOf(r)
                }, n.isAfter = function(t, r) {
                    return h(t) < this.startOf(r)
                }, n.isBefore = function(t, r) {
                    return this.endOf(r) < h(t)
                }, n.$g = function(t, r, e) {
                    return o.u(t) ? this[r] : this.set(e, t)
                }, n.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, n.valueOf = function() {
                    return this.$d.getTime()
                }, n.startOf = function(t, r) {
                    var e = this,
                        s = !!o.u(r) || r,
                        i = o.p(t),
                        u = function(C, m) {
                            var L = o.w(e.$u ? Date.UTC(e.$y, m, C) : new Date(e.$y, m, C), e);
                            return s ? L : L.endOf(g)
                        },
                        c = function(C, m) {
                            return o.w(e.toDate()[C].apply(e.toDate("s"), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(m)), e)
                        },
                        f = this.$W,
                        l = this.$M,
                        x = this.$D,
                        T = "set" + (this.$u ? "UTC" : "");
                    switch (i) {
                        case p:
                            return s ? u(1, 0) : u(31, 11);
                        case M:
                            return s ? u(1, l) : u(0, l + 1);
                        case Y:
                            var A = this.$locale().weekStart || 0,
                                j = (f < A ? f + 7 : f) - A;
                            return u(s ? x - j : x + (6 - j), l);
                        case g:
                        case O:
                            return c(T + "Hours", 0);
                        case w:
                            return c(T + "Minutes", 1);
                        case D:
                            return c(T + "Seconds", 2);
                        case y:
                            return c(T + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, n.endOf = function(t) {
                    return this.startOf(t, !1)
                }, n.$set = function(t, r) {
                    var e, s = o.p(t),
                        i = "set" + (this.$u ? "UTC" : ""),
                        u = (e = {}, e[g] = i + "Date", e[O] = i + "Date", e[M] = i + "Month", e[p] = i + "FullYear", e[w] = i + "Hours", e[D] = i + "Minutes", e[y] = i + "Seconds", e[_] = i + "Milliseconds", e)[s],
                        c = s === g ? this.$D + (r - this.$W) : r;
                    if (s === M || s === p) {
                        var f = this.clone().set(O, 1);
                        f.$d[u](c), f.init(), this.$d = f.set(O, Math.min(this.$D, f.daysInMonth())).$d
                    } else u && this.$d[u](c);
                    return this.init(), this
                }, n.set = function(t, r) {
                    return this.clone().$set(t, r)
                }, n.get = function(t) {
                    return this[o.p(t)]()
                }, n.add = function(t, r) {
                    var e, s = this;
                    t = Number(t);
                    var i = o.p(r),
                        u = function(l) {
                            var x = h(s);
                            return o.w(x.date(x.date() + Math.round(l * t)), s)
                        };
                    if (i === M) return this.set(M, this.$M + t);
                    if (i === p) return this.set(p, this.$y + t);
                    if (i === g) return u(1);
                    if (i === Y) return u(7);
                    var c = (e = {}, e[D] = $, e[w] = S, e[y] = d, e)[i] || 1,
                        f = this.$d.getTime() + t * c;
                    return o.w(f, this)
                }, n.subtract = function(t, r) {
                    return this.add(-1 * t, r)
                }, n.format = function(t) {
                    var r = this,
                        e = this.$locale();
                    if (!this.isValid()) return e.invalidDate || V;
                    var s = t || "YYYY-MM-DDTHH:mm:ssZ",
                        i = o.z(this),
                        u = this.$H,
                        c = this.$m,
                        f = this.$M,
                        l = e.weekdays,
                        x = e.months,
                        T = function(m, L, J, N) {
                            return m && (m[L] || m(r, s)) || J[L].slice(0, N)
                        },
                        A = function(m) {
                            return o.s(u % 12 || 12, m, "0")
                        },
                        j = e.meridiem || function(m, L, J) {
                            var N = m < 12 ? "AM" : "PM";
                            return J ? N.toLowerCase() : N
                        },
                        C = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: f + 1,
                            MM: o.s(f + 1, 2, "0"),
                            MMM: T(e.monthsShort, f, x, 3),
                            MMMM: T(x, f),
                            D: this.$D,
                            DD: o.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: T(e.weekdaysMin, this.$W, l, 2),
                            ddd: T(e.weekdaysShort, this.$W, l, 3),
                            dddd: l[this.$W],
                            H: String(u),
                            HH: o.s(u, 2, "0"),
                            h: A(1),
                            hh: A(2),
                            a: j(u, c, !0),
                            A: j(u, c, !1),
                            m: String(c),
                            mm: o.s(c, 2, "0"),
                            s: String(this.$s),
                            ss: o.s(this.$s, 2, "0"),
                            SSS: o.s(this.$ms, 3, "0"),
                            Z: i
                        };
                    return s.replace(G, function(m, L) {
                        return L || C[m] || i.replace(":", "")
                    })
                }, n.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, n.diff = function(t, r, e) {
                    var s, i = o.p(r),
                        u = h(t),
                        c = (u.utcOffset() - this.utcOffset()) * $,
                        f = this - u,
                        l = o.m(this, u);
                    return l = (s = {}, s[p] = l / 12, s[M] = l, s[I] = l / 3, s[Y] = (f - c) / 6048e5, s[g] = (f - c) / 864e5, s[w] = f / S, s[D] = f / $, s[y] = f / d, s)[i] || f, e ? l : o.a(l)
                }, n.daysInMonth = function() {
                    return this.endOf(M).$D
                }, n.$locale = function() {
                    return H[this.$L]
                }, n.locale = function(t, r) {
                    if (!t) return this.$L;
                    var e = this.clone(),
                        s = k(t, r, !0);
                    return s && (e.$L = s), e
                }, n.clone = function() {
                    return o.w(this.$d, this)
                }, n.toDate = function() {
                    return new Date(this.valueOf())
                }, n.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, n.toISOString = function() {
                    return this.$d.toISOString()
                }, n.toString = function() {
                    return this.$d.toUTCString()
                }, a
            }(),
            R = E.prototype;
        return h.prototype = R, [
            ["$ms", _],
            ["$s", y],
            ["$m", D],
            ["$H", w],
            ["$W", g],
            ["$M", M],
            ["$y", p],
            ["$D", O]
        ].forEach(function(a) {
            R[a[1]] = function(n) {
                return this.$g(n, a[0], a[1])
            }
        }), h.extend = function(a, n) {
            return a.$i || (a(n, E, h), a.$i = !0), h
        }, h.locale = k, h.isDayjs = F, h.unix = function(a) {
            return h(1e3 * a)
        }, h.en = H[W], h.Ls = H, h.p = {}, h
    })
})(q);
var tt = q.exports,
    et = globalThis && globalThis.__read || function(b, v) {
        var d = typeof Symbol == "function" && b[Symbol.iterator];
        if (!d) return b;
        var $ = d.call(b),
            S, _ = [],
            y;
        try {
            for (;
                (v === void 0 || v-- > 0) && !(S = $.next()).done;) _.push(S.value)
        } catch (D) {
            y = {
                error: D
            }
        } finally {
            try {
                S && !S.done && (d = $.return) && d.call($)
            } finally {
                if (y) throw y.error
            }
        }
        return _
    },
    z = function(v) {
        if (!v) return 0;
        var d = tt(v).valueOf() - new Date().getTime();
        return d < 0 ? 0 : d
    },
    nt = function(v) {
        return {
            days: Math.floor(v / 864e5),
            hours: Math.floor(v / 36e5) % 24,
            minutes: Math.floor(v / 6e4) % 60,
            seconds: Math.floor(v / 1e3) % 60,
            milliseconds: Math.floor(v) % 1e3
        }
    },
    rt = function(v) {
        var d = v || {},
            $ = d.targetDate,
            S = d.interval,
            _ = S === void 0 ? 1e3 : S,
            y = d.onEnd,
            D = et(Z.exports.useState(function() {
                return z($)
            }), 2),
            w = D[0],
            g = D[1],
            Y = K(y);
        Z.exports.useEffect(function() {
            if (!$) {
                g(0);
                return
            }
            g(z($));
            var I = setInterval(function() {
                var p, O = z($);
                g(O), O === 0 && (clearInterval(I), (p = Y.current) === null || p === void 0 || p.call(Y))
            }, _);
            return function() {
                return clearInterval(I)
            }
        }, [$, _]);
        var M = Z.exports.useMemo(function() {
            return nt(w)
        }, [w]);
        return [w, M]
    },
    st = rt;
export {
    st as u
};