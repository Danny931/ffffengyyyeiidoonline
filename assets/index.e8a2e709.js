import {
    e as c,
    r as f
} from "./index.bf235723.js";
import {
    d as i,
    a as s,
    u as v
} from "./index.12cf2eb3.js";
var d = globalThis && globalThis.__read || function(e, r) {
        var a = typeof Symbol == "function" && e[Symbol.iterator];
        if (!a) return e;
        var n = a.call(e),
            t, u = [],
            l;
        try {
            for (;
                (r === void 0 || r-- > 0) && !(t = n.next()).done;) u.push(t.value)
        } catch (o) {
            l = {
                error: o
            }
        } finally {
            try {
                t && !t.done && (a = n.return) && a.call(n)
            } finally {
                if (l) throw l.error
            }
        }
        return u
    },
    h = globalThis && globalThis.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(d(arguments[r]));
        return e
    };

function m(e, r) {
    var a, n = c(e),
        t = (a = r == null ? void 0 : r.wait) !== null && a !== void 0 ? a : 1e3,
        u = f.exports.useMemo(function() {
            return i(function() {
                for (var l = [], o = 0; o < arguments.length; o++) l[o] = arguments[o];
                return n.current.apply(n, h(l))
            }, t, r)
        }, []);
    return s(function() {
        u.cancel()
    }), {
        run: u,
        cancel: u.cancel,
        flush: u.flush
    }
}
var g = globalThis && globalThis.__read || function(e, r) {
    var a = typeof Symbol == "function" && e[Symbol.iterator];
    if (!a) return e;
    var n = a.call(e),
        t, u = [],
        l;
    try {
        for (;
            (r === void 0 || r-- > 0) && !(t = n.next()).done;) u.push(t.value)
    } catch (o) {
        l = {
            error: o
        }
    } finally {
        try {
            t && !t.done && (a = n.return) && a.call(n)
        } finally {
            if (l) throw l.error
        }
    }
    return u
};

function p(e, r, a) {
    var n = g(f.exports.useState({}), 2),
        t = n[0],
        u = n[1],
        l = m(function() {
            u({})
        }, a).run;
    f.exports.useEffect(function() {
        return l()
    }, r), v(e, [t])
}
export {
    p as u
};