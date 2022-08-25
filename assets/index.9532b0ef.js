import {
    w as s,
    aY as r,
    aZ as c,
    a_ as g,
    a$ as u,
    aP as h,
    b0 as m,
    aJ as p,
    aK as d,
    aI as f,
    aG as C,
    aF as W,
    aL as b,
    aM as y,
    aU as F,
    b1 as B,
    aV as I,
    b2 as T,
    b3 as v,
    aH as N,
    b4 as O,
    aN as S,
    W as U,
    b5 as A,
    n as k,
    b6 as D,
    b7 as E,
    b8 as P,
    U as _,
    V as M
} from "./index.bf235723.js";
const z = async n => {
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "cancel",
            options: {
                from: t
            },
            args: []
        })
    },
    R = async n => {
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "finalize",
            options: {
                from: t
            },
            args: []
        })
    },
    K = async n => {
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "withdraw",
            options: {
                from: t
            },
            args: []
        })
    },
    V = async n => {
        const {
            account: t,
            presaleContract: o,
            isBurn: a
        } = n, e = new s.eth.Contract(r, o);
        return await c({
            contract: e,
            method: "withdrawToken",
            options: {
                from: t
            },
            args: [a]
        })
    },
    j = async n => {
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "withdrawCancel",
            options: {
                from: t
            },
            args: []
        })
    },
    x = async n => {
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "setUseWhitelisting",
            options: {
                from: t
            },
            args: [!0]
        })
    },
    L = async n => {
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "setUseWhitelisting",
            options: {
                from: t
            },
            args: [!1]
        })
    };
async function G(n) {
    const t = await g();
    if (!t.length) return !0;
    const {
        account: o,
        presaleContract: a
    } = n, e = new s.eth.Contract(r, a), i = await c({
        contract: e,
        method: "addMultiWhitelistedUsers",
        options: {
            from: o
        },
        args: [t]
    });
    return console.log("addWhitelist result", i), !0
}
async function H(n) {
    const t = await g({
        type: "remove"
    });
    if (!t.length) return !0;
    const {
        account: o,
        presaleContract: a
    } = n, e = new s.eth.Contract(r, a), i = await c({
        contract: e,
        method: "removeMultiWhitelistedUsers",
        options: {
            from: o
        },
        args: [t]
    });
    return console.log("removeWhitelist result", i), !0
}
const J = async n => {
        const {
            account: t,
            presaleContract: o,
            FomoRate: a,
            amount: e
        } = n, i = new s.eth.Contract(r, o);
        return await c({
            contract: i,
            method: "setFomo",
            options: {
                from: t,
                value: u(e)
            },
            args: [!0, a]
        })
    },
    Y = async n => {
        const {
            account: t,
            presaleContract: o,
            lockAddress: a
        } = n, e = new s.eth.Contract(r, o);
        return await c({
            contract: e,
            method: "unlock",
            options: {
                from: t
            },
            args: [a]
        })
    },
    Z = async n => {
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "renounceOwnership",
            options: {
                from: t
            },
            args: []
        })
    },
    $ = async n => {
        const {
            account: t,
            amount: o,
            myBalance: a,
            presaleContract: e,
            recommendAddress: i
        } = n;
        if (new h(o).gt(new h(a))) throw new Error("Insufficient balance");
        const l = new s.eth.Contract(r, e),
            w = await c({
                contract: l,
                method: "contribute",
                options: {
                    from: t,
                    value: u(o)
                },
                args: [i || "0x0000000000000000000000000000000000000000"]
            });
        return console.log("DO BuyWithBNB!"), w
    },
    q = async n => {
        console.log("DO Claim!");
        const {
            account: t,
            presaleContract: o
        } = n, a = new s.eth.Contract(r, o);
        return await c({
            contract: a,
            method: "claim",
            options: {
                from: t
            },
            args: []
        })
    },
    Q = async n => {
        console.log("Withdraw Contribution!");
        const {
            account: t,
            amount: o,
            myBalance: a,
            presaleContract: e
        } = n, i = new s.eth.Contract(r, e);
        return await c({
            contract: i,
            method: "contributionerWithdraw",
            options: {
                from: t
            },
            args: [u(o)]
        })
    };
var tt = Object.freeze(Object.defineProperty({
    __proto__: null,
    CancelPool: z,
    Finalize: R,
    WithdrawFUNDS: K,
    WithdrawTOKENS: V,
    WithdrawCancel: j,
    EnableWhitelist: x,
    DisableWhitelist: L,
    addWhitelist: G,
    removeWhitelist: H,
    OpenFomo: J,
    unlock: Y,
    renounceOwnership: Z,
    BuywithBNB: $,
    Claim: q,
    WithdrawContribution: Q,
    getPresaleState: m,
    getTotalContribution: p,
    useWhitelisting: d,
    contributionAmount: f,
    contributionIsClaim: C,
    getIsWithdraw: W,
    getIsWithdrawToken: b,
    getIsBurnToken: y,
    getUseFomo: F,
    getFomoRate: B,
    getFomoAmount: I,
    getWhitelist: T,
    getWhitelistCount: v,
    getContributorCount: N,
    pool: O,
    getWhitelistedUsers: S,
    approve721: U,
    totalSupply: A,
    nftOwnership: k,
    buyNFT: D,
    consignment: E,
    withdrawNFT: P,
    isAllowance: _,
    approve: M
}, Symbol.toStringTag, {
    value: "Module"
}));
export {
    tt as w
};