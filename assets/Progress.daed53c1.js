import {
    r as t,
    c as s,
    b as u,
    j as n
} from "./index.bf235723.js";

function b(a) {
    const [r, i] = t.exports.useState(0), [e, c] = t.exports.useState("0%"), o = d => {
        if (a.data.maxBuy) {
            const l = Math.floor(d / a.data.maxBuy * 100);
            c(`${l}%`)
        }
    };
    return t.exports.useEffect(() => {
        i(a.data.contribution), o(a.data.contribution)
    }, [a.data.contribution]), s(u, {
        children: [s("h6", {
            className: "launchpadList_box_title",
            children: ["Progress (", e, ")"]
        }), n("div", {
            className: "launchpadList_bar",
            children: n("div", {
                className: "launchpadList_bar_line",
                style: {
                    width: e
                }
            })
        }), s("div", {
            className: "launchpadList_bar_legend",
            children: [s("span", {
                children: [r, "BNB"]
            }), s("span", {
                children: [a.data.maxBuy, "BNB"]
            })]
        })]
    })
}
export {
    b as P
};