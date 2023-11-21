(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["farming~31ecd969"], {
        "0c89": function (e, t, a) {
            "use strict";
            a.d(t, "d", (function () {
                return o
            })), a.d(t, "c", (function () {
                return l
            })), a.d(t, "a", (function () {
                return r
            })), a.d(t, "b", (function () {
                return d
            })), a.d(t, "e", (function () {
                return i
            })), a.d(t, "f", (function () {
                return s
            })), a.d(t, "g", (function () {
                return u
            }));
            a("13d5");
            var c = a("e36d"),
                n = a("f44d");
            async function o() {
                const e = {
                        query: "{\n      rulers\n    }"
                    },
                    t = await Object(n["a"])(e),
                    a = t.data.rulers;
                return a
            }
            async function l() {
                var e;
                const t = {
                        query: "{\n      getProposalIdInfo {\n        proposalId\n        proposer\n        blockNumber\n      }\n    }"
                    },
                    a = await Object(n["a"])(t),
                    c = ((null === (e = a.data) || void 0 === e ? void 0 : e.getProposalIdInfo) || []).map(e => ({
                        id: e.proposalId,
                        ...e
                    })),
                    o = _.uniqBy(c, e => e.id);
                return o
            }
            async function r() {
                const e = {
                        query: "{\n      getRuler\n    }"
                    },
                    t = await Object(n["a"])(e),
                    a = t.data.getRuler;
                return a
            }
            async function d() {
                var e;
                const t = {
                        query: "{\n      getProposalChangedInfo {\n        proposalId\n        lastChangedBlockNumber\n      }\n    }"
                    },
                    a = await Object(n["a"])(t),
                    c = ((null === (e = a.data) || void 0 === e ? void 0 : e.getProposalChangedInfo) || []).map(e => ({
                        blockNumber: e.lastChangedBlockNumber,
                        ...e
                    }));
                return c
            }
            async function i(e) {
                var t;
                const a = {
                        query: `{\n      getVoteInfoByAccount(account: "${e}") {\n        proposalId\n        user\n        direction\n        voteShare\n      }\n    }`
                    },
                    c = await Object(n["a"])(a),
                    o = ((null === (t = c.data) || void 0 === t ? void 0 : t.getVoteInfoByAccount) || []).map(e => ({
                        ...e
                    }));
                return o
            }
            async function s(e) {
                const t = await i(e),
                    a = {};
                for (const o of t) {
                    const e = o.proposalId;
                    a[e] = a[e] ? a[e] + 1 : 1
                }
                const c = Object.values(a),
                    n = c.reduce((e, t) => e + t, 0);
                return n
            }
            async function u(e) {
                var t;
                const a = {
                        query: `{\n      getVoteInfoByProposalId(proposalId: "${e}") {\n        user\n        direction\n        voteShare\n        blockNumber\n      }\n    }`
                    },
                    o = await Object(n["a"])(a),
                    l = ((null === (t = o.data) || void 0 === t ? void 0 : t.getVoteInfoByProposalId) || []).map(t => ({
                        proposalId: e,
                        account: t.user,
                        share: t.voteShare,
                        share_big: c["a"].from(t.voteShare),
                        ...t
                    }));
                return l
            }
        },
        "115d": function (e, t, a) {
            "use strict";
            a("b0d1")
        },
        "12de": function (e, t, a) {},
        "13d5": function (e, t, a) {
            "use strict";
            var c = a("23e7"),
                n = a("d58f").left,
                o = a("a640"),
                l = a("2d00"),
                r = a("605d"),
                d = !r && l > 79 && l < 83,
                i = d || !o("reduce");
            c({
                target: "Array",
                proto: !0,
                forced: i
            }, {
                reduce: function (e) {
                    var t = arguments.length;
                    return n(this, e, t, t > 1 ? arguments[1] : void 0)
                }
            })
        },
        1556: function (e, t, a) {},
        "1f31": function (e, t, a) {
            "use strict";
            a("1556")
        },
        2841: function (e, t, a) {},
        3247: function (e, t, a) {},
        "33c2": function (e, t, a) {},
        "33c3": function (e, t, a) {},
        "441f": function (e, t, a) {},
        4812: function (e, t, a) {
            "use strict";
            a("8afa")
        },
        "4d89": function (e, t, a) {
            "use strict";
            a("33c3")
        },
        "605d": function (e, t, a) {
            (function (t) {
                var c = a("c6b6");
                e.exports = "undefined" != typeof t && "process" == c(t)
            }).call(this, a("4362"))
        },
        "634c": function (e, t, a) {
            "use strict";
            a("3247")
        },
        6998: function (e, t, a) {
            "use strict";
            a("abd8")
        },
        "6ad1": function (e, t, a) {
            "use strict";
            a("12de")
        },
        "71df": function (e, t, a) {
            "use strict";
            a("2841")
        },
        "7aa4": function (e, t, a) {
            "use strict";
            a("8db1")
        },
        "832e": function (e, t, a) {},
        "850c": function (e, t, a) {
            "use strict";
            a("db3d")
        },
        8612: function (e, t, a) {},
        "8afa": function (e, t, a) {},
        "8db1": function (e, t, a) {},
        "9d88": function (e, t, a) {},
        a388: function (e, t, a) {
            "use strict";
            a("832e")
        },
        a640: function (e, t, a) {
            "use strict";
            var c = a("d039");
            e.exports = function (e, t) {
                var a = [][e];
                return !!a && c((function () {
                    a.call(null, t || function () {
                        return 1
                    }, 1)
                }))
            }
        },
        abd8: function (e, t, a) {},
        adf4: function (e, t, a) {
            "use strict";
            a.r(t);
            a("14d9");
            var c = a("7a23"),
                n = a("a9a0"),
                o = a("da92"),
                l = a("70cb");
            const r = e => (Object(c["pushScopeId"])("data-v-2f13e979"), e = e(), Object(c["popScopeId"])(), e),
                d = {
                    class: "countdown"
                },
                i = {
                    key: 0
                },
                s = {
                    key: 0
                },
                u = {
                    key: 0
                },
                b = r(() => Object(c["createElementVNode"])("th", null, "Hours", -1)),
                p = r(() => Object(c["createElementVNode"])("th", null, "Minutes", -1)),
                O = r(() => Object(c["createElementVNode"])("th", null, "Seconds", -1)),
                j = r(() => Object(c["createElementVNode"])("br", null, null, -1));
            var f = Object(c["defineComponent"])({
                    __name: "TradingCountdown",
                    props: {
                        startTime: {
                            type: Number,
                            default: 0
                        },
                        endTime: {
                            type: Number,
                            default: 0
                        },
                        loading: {
                            type: Boolean,
                            default: () => !1
                        }
                    },
                    emits: ["onStop"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = e,
                            n = Object(c["reactive"])({
                                hours: 0,
                                minutes: 0,
                                seconds: 0,
                                duration: ["00", "00", "00", "00"]
                            });
                        let o = null;

                        function r() {
                            if (a.startTime && a.endTime) {
                                const e = a.endTime - a.startTime;
                                e >= 0 ? (m(e), f(e)) : t("onStop")
                            }
                        }

                        function f(e) {
                            clearInterval(o), o = setInterval(() => {
                                m(e), e <= 0 ? (t("onStop"), clearInterval(o)) : e -= 1e3
                            }, 1e3)
                        }

                        function m(e) {
                            const t = l["a"].duration(e);
                            n.duration = t.format("DD:HH:mm:ss").split(":"), n.days = n.duration[0]
                        }
                        return r(), Object(c["watch"])(() => a.endTime, () => {
                            r()
                        }), Object(c["onBeforeUnmount"])(() => {
                            o && clearInterval(o)
                        }), (t, a) => {
                            const o = Object(c["resolveComponent"])("shorterSkeletonItem"),
                                l = Object(c["resolveComponent"])("shorterSkeleton");
                            return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", d, [e.loading ? (Object(c["openBlock"])(), Object(c["createBlock"])(l, {
                                key: 1,
                                animated: "",
                                style: {
                                    height: "60px"
                                }
                            }, {
                                template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                    style: {
                                        width: "160px",
                                        height: "16px"
                                    }
                                }), j, Object(c["createVNode"])(o, {
                                    style: {
                                        width: "160px",
                                        height: "32px",
                                        "margin-top": "5px"
                                    }
                                })]),
                                _: 1
                            })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("table", i, [Object(c["createElementVNode"])("tr", null, [n.days >= 1 ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("td", s, Object(c["toDisplayString"])(n.duration[0]), 1)) : Object(c["createCommentVNode"])("", !0), Object(c["createElementVNode"])("td", null, Object(c["toDisplayString"])(n.duration[1]), 1), Object(c["createElementVNode"])("td", null, Object(c["toDisplayString"])(n.duration[2]), 1), Object(c["createElementVNode"])("td", null, Object(c["toDisplayString"])(n.duration[3]), 1)]), Object(c["createElementVNode"])("tr", null, [n.days >= 1 ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("th", u, "Days")) : Object(c["createCommentVNode"])("", !0), b, p, O])]))])
                        }
                    }
                }),
                m = (a("634c"), a("6b0d")),
                v = a.n(m);
            const k = v()(f, [
                ["__scopeId", "data-v-2f13e979"]
            ]);
            var h = k,
                y = a("f44d");
            async function w(e) {
                var t;
                const a = {
                        query: `{\n        getTradingRewardByTrader(trader:"${e}") {\n            cureentRoundRewardPool\n            userLastRound\n            accruedIpistrAmount\n          }\n        }\n    `
                    },
                    c = await Object(y["a"])(a);
                return null === c || void 0 === c || null === (t = c.data) || void 0 === t ? void 0 : t.getTradingRewardByTrader
            }
            var g = a("aeba"),
                N = a("619a");
            const V = e => (Object(c["pushScopeId"])("data-v-25762ac2"), e = e(), Object(c["popScopeId"])(), e),
                E = {
                    class: "panel-container info-group"
                },
                B = V(() => Object(c["createElementVNode"])("header", {
                    class: "panel-header"
                }, [Object(c["createElementVNode"])("h4", {
                    class: "panel-title"
                }, "Trading Reward")], -1)),
                S = {
                    class: "panel"
                },
                C = {
                    class: "infos countdown"
                },
                T = V(() => Object(c["createElementVNode"])("div", {
                    class: "infos-title"
                }, "Countdown", -1)),
                x = {
                    class: "current-round"
                },
                R = V(() => Object(c["createElementVNode"])("div", {
                    class: "infos-title"
                }, "Current Round", -1)),
                I = {
                    key: 1
                },
                P = V(() => Object(c["createElementVNode"])("p", null, "Reward Pool", -1)),
                D = {
                    class: "infos current-round"
                },
                A = V(() => Object(c["createElementVNode"])("div", {
                    class: "infos-title"
                }, "My Rewards", -1)),
                L = {
                    key: 0
                },
                z = {
                    key: 1
                },
                q = V(() => Object(c["createElementVNode"])("p", null, "Last Round", -1)),
                F = {
                    key: 1
                },
                U = V(() => Object(c["createElementVNode"])("p", null, "% of Curr. Round", -1)),
                M = {
                    key: 1
                },
                W = V(() => Object(c["createElementVNode"])("p", null, "Accrued", -1)),
                G = {
                    key: 1
                },
                H = V(() => Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, "--"), Object(c["createElementVNode"])("p", null, "Last Round")], -1)),
                Y = V(() => Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, "--"), Object(c["createElementVNode"])("p", null, "% of Curr. Round")], -1)),
                X = V(() => Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, "--"), Object(c["createElementVNode"])("p", null, "Accrued")], -1)),
                $ = [H, Y, X];
            var J = Object(c["defineComponent"])({
                __name: "TradingReward",
                setup(e) {
                    const t = null,
                        a = Object(c["reactive"])({
                            lastRound: 0,
                            accrued: 0,
                            rewardPool: 0,
                            endOfCurRoundTime: i(),
                            percent: 0,
                            loading: {
                                fetchReward: !1
                            }
                        }),
                        n = Object(c["inject"])("refreshTaskFunc");
                    async function r(e = !1) {
                        try {
                            if (g["k"].isConnected && g["a"].value) {
                                a.loading.fetchReward = e;
                                const t = await w(g["a"].value);
                                a.rewardPool = t.cureentRoundRewardPool, a.lastRound = t.userLastRound, a.accrued = t.accruedIpistrAmount, a.percent = o["a"].divide(t.userLastRound, t.cureentRoundRewardPool) || 0
                            } else d()
                        } catch (t) {
                            d()
                        } finally {
                            a.loading.fetchReward = !1
                        }
                    }

                    function d() {
                        a.lastRound = 0, a.percent = 0, a.accrued = 0, a.rewardPool = 0
                    }

                    function i() {
                        const e = Object(l["a"])().endOf("week");
                        return new Date(e).getTime()
                    }
                    return n.push((() => () => {
                        g["k"].isConnected && g["a"].value && r()
                    })()), r(!0), Object(c["watch"])(() => [g["k"].isConnected, g["a"].value, g["b"].id], () => {
                        r(!0)
                    }), Object(c["onBeforeMount"])(() => {
                        clearInterval(t)
                    }), (e, t) => {
                        const n = Object(c["resolveComponent"])("shorterSkeletonItem"),
                            o = Object(c["resolveComponent"])("shorterSkeleton");
                        return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", E, [B, Object(c["createElementVNode"])("div", S, [Object(c["createElementVNode"])("div", C, [T, Object(c["createElementVNode"])("ul", null, [Object(c["createElementVNode"])("li", null, [Object(c["createVNode"])(h, {
                            "start-time": (new Date).getTime(),
                            "end-time": a.endOfCurRoundTime
                        }, null, 8, ["start-time", "end-time"])]), Object(c["createElementVNode"])("li", x, [R, Object(c["createElementVNode"])("h3", null, [a.loading.fetchReward ? (Object(c["openBlock"])(), Object(c["createBlock"])(o, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "30%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [(Object(c["openBlock"])(), Object(c["createBlock"])(n, {
                                key: 1,
                                style: {
                                    height: "26px"
                                }
                            }))]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", I, Object(c["toDisplayString"])(Object(c["unref"])(N["i"])(a.rewardPool || 0)), 1))]), P])])]), Object(c["createElementVNode"])("div", D, [A, Object(c["unref"])(g["k"]).isConnected ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("ul", L, [Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [a.loading.fetchReward ? (Object(c["openBlock"])(), Object(c["createBlock"])(o, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "30%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [(Object(c["openBlock"])(), Object(c["createBlock"])(n, {
                                key: 2,
                                style: {
                                    height: "26px"
                                }
                            }))]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", z, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(a.lastRound || 0, 2, !0)), 1))]), q]), Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [a.loading.fetchReward ? (Object(c["openBlock"])(), Object(c["createBlock"])(o, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [(Object(c["openBlock"])(), Object(c["createBlock"])(n, {
                                key: 3,
                                style: {
                                    height: "26px"
                                }
                            }))]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", F, Object(c["toDisplayString"])(Object(c["unref"])(N["k"])(100 * a.percent) + "%"), 1))]), U]), Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [a.loading.fetchReward ? (Object(c["openBlock"])(), Object(c["createBlock"])(o, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [(Object(c["openBlock"])(), Object(c["createBlock"])(n, {
                                key: 4,
                                style: {
                                    height: "26px"
                                }
                            }))]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", M, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(a.accrued || 0)), 1))]), W])])) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("ul", G, $))])])])
                    }
                }
            });
            a("71df");
            const K = v()(J, [
                ["__scopeId", "data-v-25762ac2"]
            ]);
            var Q = K,
                Z = a("3a88"),
                ee = a("6bbd"),
                te = a("bc10"),
                ae = a("af1a"),
                ce = a("9566");
            const ne = e => (Object(c["pushScopeId"])("data-v-76cd05f8"), e = e(), Object(c["popScopeId"])(), e),
                oe = {
                    class: "panel-container bounty-faucet"
                },
                le = ne(() => Object(c["createElementVNode"])("header", {
                    class: "panel-header"
                }, [Object(c["createElementVNode"])("h4", {
                    class: "panel-title"
                }, "IPIJWL Bounty Faucet")], -1)),
                re = {
                    class: "panel"
                },
                de = {
                    class: "bounty-wrap"
                },
                ie = {
                    class: "total-bounty"
                },
                se = {
                    key: 1
                },
                ue = {
                    class: "new-bounty"
                },
                be = {
                    key: 1
                },
                pe = {
                    class: "gas-limit"
                },
                Oe = {
                    class: "estimate-gas"
                },
                je = ne(() => Object(c["createElementVNode"])("svg", {
                    class: "shorter-icon",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-gas_station"
                })], -1)),
                fe = {
                    class: "limit-text"
                },
                me = Object(c["createStaticVNode"])('<div class="notice" data-v-76cd05f8><p data-v-76cd05f8> This bounty is given away as rewards for the contributors maintaining the states across the entire protocol. </p><div class="colon" data-v-76cd05f8><i class="rect" data-v-76cd05f8></i><i class="arc" data-v-76cd05f8></i></div><div class="colon" data-v-76cd05f8><i class="rect" data-v-76cd05f8></i><i class="arc" data-v-76cd05f8></i></div></div>', 1);
            var ve = Object(c["defineComponent"])({
                __name: "BountyFaucet",
                setup(e) {
                    const {
                        addBlockSpeedInterval: t
                    } = Object(ae["a"])(), a = Object(c["reactive"])({
                        faucetReward: 0,
                        estimateGasLimit: 0,
                        argsConfig: {
                            data: null,
                            signature: null
                        },
                        loading: {
                            grab: !1,
                            fetchBountyFaucet: !1
                        }
                    }), n = Object(c["computed"])(() => a.faucetReward && ee["a"].price ? o["a"].times(a.faucetReward, ee["a"].price) : 0);

                    function l() {
                        r(!0), t(r)
                    }
                    async function r(e = !1) {
                        try {
                            a.loading.fetchBountyFaucet = e;
                            const t = await Z["b"](),
                                c = await Z["a"]();
                            a.estimateGasLimit = t.estimateGasLimit, a.faucetReward = t.estimateGasLimit <= c ? 0 : Number(t.reward), a.argsConfig = {
                                data: t.data,
                                signature: t.signature
                            }
                        } catch (t) {} finally {
                            a.loading.fetchBountyFaucet = !1
                        }
                    }
                    async function d() {
                        if (g["a"].value) {
                            if (!a.argsConfig) throw "Missing parameter";
                            try {
                                a.loading.grab = !0, await Z["c"](a.argsConfig), a.faucetReward = 0, Object(ee["b"])()
                            } catch (e) {
                                Object(ce["a"])(e)
                            } finally {
                                a.loading.grab = !1
                            }
                        } else te["a"].warning("Connect your wallet to continue")
                    }
                    return Object(c["onBeforeMount"])(() => {
                        l()
                    }), Object(c["watch"])(() => g["b"].id, () => {
                        l()
                    }), Object(c["watch"])(() => g["a"].value, () => {
                        a.loading.grab = !1
                    }), (e, t) => {
                        const o = Object(c["resolveComponent"])("shorterSkeletonItem"),
                            l = Object(c["resolveComponent"])("shorterSkeleton"),
                            r = Object(c["resolveComponent"])("shorterButton");
                        return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", oe, [le, Object(c["createElementVNode"])("div", re, [Object(c["createElementVNode"])("div", de, [Object(c["createElementVNode"])("div", ie, [a.loading.fetchBountyFaucet ? (Object(c["openBlock"])(), Object(c["createBlock"])(l, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                style: {
                                    width: "130px",
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", se, Object(c["toDisplayString"])(Object(c["unref"])(N["i"])(a.faucetReward) || 0), 1))]), Object(c["createElementVNode"])("div", ue, [a.loading.fetchBountyFaucet || !Object(c["unref"])(ee["a"]).price ? (Object(c["openBlock"])(), Object(c["createBlock"])(l, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "90px",
                                height: "19px"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                style: {
                                    height: "19px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", be, "~ " + Object(c["toDisplayString"])(Object(c["unref"])(N["i"])(Object(c["unref"])(n))) + " USD", 1))])]), Object(c["createElementVNode"])("div", pe, [Object(c["createVNode"])(l, {
                            loading: a.loading.fetchBountyFaucet,
                            style: {
                                width: "18%",
                                height: "20px"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                style: {
                                    height: "19px"
                                }
                            })]),
                            default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("div", Oe, [je, Object(c["createElementVNode"])("span", fe, Object(c["toDisplayString"])(Object(c["unref"])(N["i"])(a.estimateGasLimit, !1)), 1)])]),
                            _: 1
                        }, 8, ["loading"])]), Object(c["unref"])(g["k"]).isConnected ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 0,
                            class: "full big",
                            style: {
                                "margin-top": "14px"
                            },
                            type: "primary",
                            loading: a.loading.grab,
                            disabled: 1 * a.faucetReward === 0,
                            plain: "",
                            onClick: d
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Grab ! ")]),
                            _: 1
                        }, 8, ["loading", "disabled"])) : (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 1,
                            class: "btn",
                            type: "primary",
                            plain: "",
                            onClick: t[0] || (t[0] = e => Object(c["unref"])(g["k"]).visible = !0)
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Unlock wallet ")]),
                            _: 1
                        })), me])])
                    }
                }
            });
            a("d072");
            const ke = v()(ve, [
                ["__scopeId", "data-v-76cd05f8"]
            ]);
            var he = ke,
                ye = a("53b7");
            const we = e => (Object(c["pushScopeId"])("data-v-62fc2048"), e = e(), Object(c["popScopeId"])(), e),
                ge = {
                    key: 0,
                    class: "panel-container info-group"
                },
                Ne = we(() => Object(c["createElementVNode"])("header", {
                    class: "panel-header"
                }, [Object(c["createElementVNode"])("h4", {
                    class: "panel-title"
                }, "Pool Activities")], -1)),
                Ve = {
                    class: "panel"
                },
                Ee = {
                    class: "infos"
                },
                Be = we(() => Object(c["createElementVNode"])("div", {
                    class: "infos-title"
                }, "Pool Creator Dividen", -1)),
                Se = {
                    key: 1
                },
                Ce = we(() => Object(c["createElementVNode"])("p", null, "Rewards", -1)),
                Te = {
                    key: 1
                },
                xe = we(() => Object(c["createElementVNode"])("p", null, "# Pools", -1)),
                Re = {
                    class: "infos"
                },
                Ie = we(() => Object(c["createElementVNode"])("div", {
                    class: "infos-title"
                }, "Liquidity Providing", -1)),
                _e = {
                    key: 1
                },
                Pe = we(() => Object(c["createElementVNode"])("p", null, "Rewards", -1)),
                De = {
                    key: 1
                },
                Ae = we(() => Object(c["createElementVNode"])("p", null, "# Pools", -1)),
                Le = {
                    key: 1,
                    class: "panel-container info-group"
                },
                ze = Object(c["createStaticVNode"])('<header class="panel-header" data-v-62fc2048><h4 class="panel-title" data-v-62fc2048>Pool Activities</h4></header><div class="panel" data-v-62fc2048><div class="infos" data-v-62fc2048><div class="infos-title" data-v-62fc2048>Pool Creator Dividen</div><ul data-v-62fc2048><li data-v-62fc2048><h3 data-v-62fc2048>--</h3><p data-v-62fc2048>Rewards</p></li><li data-v-62fc2048><h3 data-v-62fc2048>--</h3><p data-v-62fc2048># Pools</p></li></ul></div><div class="infos" data-v-62fc2048><div class="infos-title" data-v-62fc2048>Liquidity Providing</div><ul data-v-62fc2048><li data-v-62fc2048><h3 data-v-62fc2048>--</h3><p data-v-62fc2048>Rewards</p></li><li data-v-62fc2048><h3 data-v-62fc2048>--</h3><p data-v-62fc2048># Pools</p></li></ul></div></div>', 2),
                qe = [ze];
            var Fe = Object(c["defineComponent"])({
                __name: "PoolActivities",
                props: {
                    data: {
                        type: Object,
                        default: () => {}
                    },
                    loading: {
                        type: Boolean,
                        default: () => !1
                    }
                },
                setup(e) {
                    const t = e,
                        a = Object(c["reactive"])({
                            createdPoolsNum: 0,
                            stakedRewardPoolsNum: Object(c["computed"])(() => _.isArray(t.data.stakedRewardPools) ? t.data.stakedRewardPools.length : 0),
                            loading: {
                                fetchPoolsNum: !1
                            }
                        });
                    async function n(e) {
                        try {
                            a.loading.fetchPoolsNum = !0;
                            const t = await ye["j"](e) || [];
                            _.isArray(t) && (a.createdPoolsNum = t.length)
                        } finally {
                            a.loading.fetchPoolsNum = !1
                        }
                    }
                    return Object(c["watchEffect"])(() => {
                        g["a"].value && n(g["a"].value)
                    }), (t, n) => {
                        var o, l;
                        const r = Object(c["resolveComponent"])("shorterSkeletonItem"),
                            d = Object(c["resolveComponent"])("shorterSkeleton");
                        return Object(c["unref"])(g["k"]).isConnected ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", ge, [Ne, Object(c["createElementVNode"])("div", Ve, [Object(c["createElementVNode"])("div", Ee, [Be, Object(c["createElementVNode"])("ul", null, [Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [e.loading ? (Object(c["openBlock"])(), Object(c["createBlock"])(d, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(r, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Se, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(e.data.creatorRewards, 2, !0)), 1))]), Ce]), Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [a.loading.fetchPoolsNum ? (Object(c["openBlock"])(), Object(c["createBlock"])(d, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(r, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Te, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(a.createdPoolsNum, 2, !0)), 1))]), xe])])]), Object(c["createElementVNode"])("div", Re, [Ie, Object(c["createElementVNode"])("ul", null, [Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [e.loading ? (Object(c["openBlock"])(), Object(c["createBlock"])(d, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(r, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", _e, Object(c["toDisplayString"])(null !== (o = Object(c["unref"])(N["l"])(e.data.stakedRewards, Object(c["unref"])(ee["a"]).price)) && void 0 !== o ? o : 0), 1))]), Pe]), Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [e.loading ? (Object(c["openBlock"])(), Object(c["createBlock"])(d, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(r, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", De, Object(c["toDisplayString"])(null !== (l = Object(c["unref"])(N["d"])(a.stakedRewardPoolsNum, 2, !0)) && void 0 !== l ? l : 0), 1))]), Ae])])])])])) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Le, qe))
                    }
                }
            });
            a("850c");
            const Ue = v()(Fe, [
                ["__scopeId", "data-v-62fc2048"]
            ]);
            var Me = Ue,
                We = a("8446"),
                Ge = a("5529"),
                He = a("0c89");
            const Ye = e => (Object(c["pushScopeId"])("data-v-50ed238d"), e = e(), Object(c["popScopeId"])(), e),
                Xe = {
                    key: 0,
                    class: "panel-container info-group"
                },
                $e = Ye(() => Object(c["createElementVNode"])("header", {
                    class: "panel-header"
                }, [Object(c["createElementVNode"])("h4", {
                    class: "panel-title"
                }, "Governance Activities")], -1)),
                Je = {
                    class: "panel"
                },
                Ke = {
                    class: "infos"
                },
                Qe = Ye(() => Object(c["createElementVNode"])("div", {
                    class: "infos-title"
                }, "Voting Incentives", -1)),
                Ze = {
                    key: 1
                },
                et = Ye(() => Object(c["createElementVNode"])("p", null, "Rewards", -1)),
                tt = {
                    key: 1
                },
                at = Ye(() => Object(c["createElementVNode"])("p", null, "Voted Proposals", -1)),
                ct = {
                    class: "infos"
                },
                nt = Ye(() => Object(c["createElementVNode"])("div", {
                    class: "infos-title"
                }, "Committee Dividen", -1)),
                ot = {
                    key: 1
                },
                lt = Ye(() => Object(c["createElementVNode"])("p", null, "Rewards", -1)),
                rt = {
                    key: 1
                },
                dt = Ye(() => Object(c["createElementVNode"])("p", null, "Your Weight", -1)),
                it = {
                    key: 1,
                    class: "panel-container info-group"
                },
                st = Object(c["createStaticVNode"])('<header class="panel-header" data-v-50ed238d><h4 class="panel-title" data-v-50ed238d>Governance Activities</h4></header><div class="panel" data-v-50ed238d><div class="infos" data-v-50ed238d><div class="infos-title" data-v-50ed238d>Voting Incentives</div><ul data-v-50ed238d><li data-v-50ed238d><h3 data-v-50ed238d>--</h3><p data-v-50ed238d>Rewards</p></li><li data-v-50ed238d><h3 data-v-50ed238d>--</h3><p data-v-50ed238d>Voted Proposals</p></li></ul></div><div class="infos" data-v-50ed238d><div class="infos-title" data-v-50ed238d>Committee Dividen</div><ul data-v-50ed238d><li data-v-50ed238d><h3 data-v-50ed238d>--</h3><p data-v-50ed238d>Rewards</p></li><li data-v-50ed238d><h3 data-v-50ed238d>--</h3><p data-v-50ed238d>Your Weight</p></li></ul></div></div>', 2),
                ut = [st];
            var bt = Object(c["defineComponent"])({
                __name: "GovernanceActivities",
                props: {
                    data: {
                        type: Object,
                        default: () => {}
                    },
                    loading: {
                        type: Boolean,
                        default: () => !1
                    }
                },
                setup(e) {
                    const t = e,
                        a = Object(c["reactive"])({
                            loading: {
                                fetchRewards: !1,
                                fetchCommitteeInfo: !1,
                                fetchVotedProposalsAmount: !1
                            },
                            votedProposalsAmount: 0,
                            committeeRewards: 0,
                            votedWeight: 0
                        }),
                        n = Object(c["computed"])(() => o["a"].plus(t.data.voteRewards, t.data.voteAgainstRewards));
                    g["k"].isConnected && g["a"].value && r(g["a"].value);
                    const l = Object(c["inject"])("refreshTaskFunc");

                    function r(e, t = !0) {
                        d(e, t), i(e, t), s(e, t)
                    }
                    async function d(e, t = !0) {
                        try {
                            a.loading.fetchRewards = t;
                            const c = await Ge["a"](e);
                            a.committeeRewards = c
                        } catch (c) {} finally {
                            a.loading.fetchRewards = !1
                        }
                    }
                    async function i(e, t = !0) {
                        try {
                            a.loading.fetchCommitteeInfo = t;
                            const [c, n] = await Promise.all([We["i"](e), We["h"]()]), {
                                totalShare: l
                            } = c || {};
                            a.votedWeight = Number(Object(N["k"])(100 * (o["a"].divide(l, 1 * n) || 0)))
                        } catch (c) {} finally {
                            a.loading.fetchCommitteeInfo = !1
                        }
                    }
                    async function s(e, t = !0) {
                        try {
                            a.loading.fetchVotedProposalsAmount = t;
                            const c = await Object(He["f"])(e);
                            a.votedProposalsAmount = c
                        } catch (c) {} finally {
                            a.loading.fetchVotedProposalsAmount = !1
                        }
                    }
                    return l.push((() => () => {
                        g["k"].isConnected && g["a"].value && (a.loading.fetchRewards || a.loading.fetchCommitteeInfo || a.loading.fetchVotedProposalsAmount || r(g["a"].value))
                    })()), Object(c["watch"])(() => [g["k"].isConnected, g["a"].value, g["b"].id], ([e, t]) => {
                        e && t ? r(t) : (a.committeeRewards = 0, a.votedProposalsAmount = 0, a.votedWeight = 0)
                    }), (t, o) => {
                        const l = Object(c["resolveComponent"])("shorterSkeletonItem"),
                            r = Object(c["resolveComponent"])("shorterSkeleton");
                        return Object(c["unref"])(g["k"]).isConnected ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Xe, [$e, Object(c["createElementVNode"])("div", Je, [Object(c["createElementVNode"])("div", Ke, [Qe, Object(c["createElementVNode"])("ul", null, [Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [e.loading ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(l, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Ze, Object(c["toDisplayString"])(Object(c["unref"])(n) ? Object(c["unref"])(N["d"])(Object(c["unref"])(n), 2, !0) : 0), 1))]), et]), Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [a.loading.fetchVotedProposalsAmount ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(l, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", tt, Object(c["toDisplayString"])(a.votedProposalsAmount), 1))]), at])])]), Object(c["createElementVNode"])("div", ct, [nt, Object(c["createElementVNode"])("ul", null, [Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [a.loading.fetchRewards ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(l, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", ot, Object(c["toDisplayString"])(a.committeeRewards ? Object(c["unref"])(N["d"])(a.committeeRewards, 2, !0) : 0), 1))]), lt]), Object(c["createElementVNode"])("li", null, [Object(c["createElementVNode"])("h3", null, [a.loading.fetchCommitteeInfo ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(l, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", rt, Object(c["toDisplayString"])(a.votedWeight) + "%", 1))]), dt])])])])])) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", it, ut))
                    }
                }
            });
            a("1f31");
            const pt = v()(bt, [
                ["__scopeId", "data-v-50ed238d"]
            ]);
            var Ot = pt,
                jt = a("f908"),
                ft = a("f0af"),
                mt = a("110c");
            const vt = e => (Object(c["pushScopeId"])("data-v-2c9e3701"), e = e(), Object(c["popScopeId"])(), e),
                kt = {
                    class: "panel-container total-rewards"
                },
                ht = {
                    class: "panel-header"
                },
                yt = {
                    class: "panel-title flex",
                    style: {
                        height: "24px"
                    }
                },
                wt = {
                    class: "panel"
                },
                gt = {
                    class: "rewards-content"
                },
                Nt = {
                    key: 0
                },
                Vt = {
                    key: 1
                },
                Et = {
                    key: 1
                },
                Bt = vt(() => Object(c["createElementVNode"])("h4", null, "Claimable", -1)),
                St = {
                    class: "btn-group"
                },
                Ct = vt(() => Object(c["createElementVNode"])("svg", {
                    class: "shorter-icon",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-share"
                })], -1));
            var Tt = Object(c["defineComponent"])({
                __name: "TotalRewards",
                props: {
                    data: {
                        type: Object,
                        default: () => {}
                    },
                    loading: {
                        type: Boolean,
                        default: () => !1
                    }
                },
                setup(e) {
                    const t = e,
                        a = Object(c["inject"])("executeAllRefreshTask"),
                        l = Object(c["reactive"])({
                            claimableValue: Object(c["computed"])(() => {
                                const e = ["creatorRewards", "stakedRewards", "farmingRewards", "govRewards", "tradingRewards", "voteAgainstRewards", "voteRewards"];
                                let a = 0;
                                return e.forEach(e => {
                                    const c = t.data[e];
                                    _.isNumber(c) && (a = o["a"].plus(a, c))
                                }), a
                            }),
                            loading: {
                                fetchClaimableValue: !0,
                                harvest: !1
                            }
                        });
                    async function r() {
                        try {
                            l.loading.harvest = !0;
                            const e = {
                                govRewards: Object(ft["d"])(t.data.govRewards),
                                farmingRewards: Object(ft["d"])(t.data.farmingRewards),
                                voteAgainstRewards: Object(ft["d"])(t.data.voteAgainstRewards),
                                tradingRewardPools: t.data.tradingRewardPools,
                                stakedRewardPools: t.data.stakedRewardPools,
                                createRewardPools: t.data.createRewardPools,
                                voteRewardPools: t.data.voteRewardPools
                            };
                            await Object(n["f"])(e), Object(ee["b"])(), a()
                        } finally {
                            l.loading.harvest = !1
                        }
                    }

                    function d() {
                        Object(mt["d"])("https://docs.shorter.finance/governance/tokenomics/revenue-model.html", "learn more")
                    }
                    return (t, a) => {
                        const n = Object(c["resolveComponent"])("shorterSkeletonItem"),
                            o = Object(c["resolveComponent"])("shorterSkeleton"),
                            i = Object(c["resolveComponent"])("shorterButton");
                        return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", kt, [Object(c["createElementVNode"])("header", ht, [Object(c["createElementVNode"])("h4", yt, [Object(c["createTextVNode"])(" Total Rewards "), Object(c["createVNode"])(jt["a"], {
                            text: "<div>Instantly collect all kinds of rewards to your wallet.</div>",
                            style: {
                                "margin-left": "8px",
                                transform: "translateY(1px)"
                            },
                            size: {
                                width: "24px",
                                height: "24px"
                            }
                        })])]), Object(c["createElementVNode"])("div", wt, [Object(c["createElementVNode"])("div", gt, [Object(c["unref"])(g["k"]).isConnected ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("h3", Nt, [e.loading ? (Object(c["openBlock"])(), Object(c["createBlock"])(o, {
                            key: 0,
                            animated: "",
                            style: {
                                width: "50%"
                            }
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(n, {
                                style: {
                                    height: "26px"
                                }
                            })]),
                            _: 1
                        })) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", Vt, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(l.claimableValue)), 1))])) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("h3", Et, "--")), Bt]), Object(c["createElementVNode"])("div", St, [Object(c["unref"])(g["k"]).isConnected ? (Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                            key: 0,
                            class: "full big",
                            type: "primary",
                            disabled: !(l.claimableValue > 0),
                            loading: l.loading.harvest,
                            onClick: r
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Harvest all ")]),
                            _: 1
                        }, 8, ["disabled", "loading"])) : (Object(c["openBlock"])(), Object(c["createBlock"])(i, {
                            key: 1,
                            class: "full big",
                            type: "primary",
                            plain: "",
                            onClick: a[0] || (a[0] = e => Object(c["unref"])(g["k"]).visible = !0)
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Unlock wallet ")]),
                            _: 1
                        }))])])])
                    }
                }
            });
            a("4812");
            const xt = v()(Tt, [
                ["__scopeId", "data-v-2c9e3701"]
            ]);
            var Rt = xt,
                It = a("05ac"),
                _t = a("534e"),
                Pt = a("b5fc"),
                Dt = a("4a48"),
                At = a("0c61");
            const Lt = e => (Object(c["pushScopeId"])("data-v-a2ead422"), e = e(), Object(c["popScopeId"])(), e),
                zt = {
                    class: "panel-header"
                },
                qt = Lt(() => Object(c["createElementVNode"])("h4", {
                    class: "panel-title title"
                }, [Object(c["createTextVNode"])(" Provide Liquidity for IPIJWL "), Object(c["createElementVNode"])("a", {
                    class: "link"
                }, "See instruction and perks")], -1)),
                Ft = {
                    class: "mode"
                },
                Ut = {
                    class: "unlock"
                },
                Mt = Lt(() => Object(c["createElementVNode"])("svg", {
                    class: "icon shorter-icon",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-unlock"
                })], -1)),
                Wt = {
                    class: "yield"
                },
                Gt = Lt(() => Object(c["createElementVNode"])("svg", {
                    class: "icon shorter-icon",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-farming"
                })], -1));
            var Ht = Object(c["defineComponent"])({
                __name: "PlPanelHeader",
                props: {
                    firstTokenLocked: {
                        type: Number,
                        default: 0
                    }
                },
                setup(e) {
                    return (t, a) => (Object(c["openBlock"])(), Object(c["createElementBlock"])("header", zt, [qt, Object(c["createElementVNode"])("p", Ft, [Object(c["withDirectives"])(Object(c["createElementVNode"])("span", Ut, [Mt, Object(c["createTextVNode"])(" Unlock Mode ")], 512), [
                        [c["vShow"], e.firstTokenLocked > 0]
                    ]), Object(c["withDirectives"])(Object(c["createElementVNode"])("span", Wt, [Gt, Object(c["createTextVNode"])(" Yield Mode ")], 512), [
                        [c["vShow"], e.firstTokenLocked <= 0]
                    ])])]))
                }
            });
            a("a388");
            const Yt = v()(Ht, [
                ["__scopeId", "data-v-a2ead422"]
            ]);
            var Xt = Yt;

            function $t() {
                function e(e, t) {
                    var a;
                    return null === (a = e[t]) || void 0 === a ? void 0 : a.logoURI
                }
                return {
                    getTokenLogo: e
                }
            }
            const Jt = {
                    class: "tokens"
                },
                Kt = {
                    class: "token-pair"
                },
                Qt = {
                    class: "coins"
                },
                Zt = {
                    class: "coin-describe"
                },
                ea = {
                    class: "title"
                };
            var ta = Object(c["defineComponent"])({
                __name: "TokenPairTitle",
                props: {
                    tokenInfo: {
                        type: Object,
                        default: () => ({})
                    },
                    firstToken: {
                        type: String,
                        default: "IPIJWL"
                    },
                    secondToken: {
                        type: String,
                        default: "USDT"
                    }
                },
                setup(e) {
                    const t = e,
                        {
                            getTokenLogo: a
                        } = $t(),
                        n = Object(c["computed"])(() => a(t.tokenInfo, t.firstToken)),
                        o = Object(c["computed"])(() => a(t.tokenInfo, t.secondToken));
                    console.log("o, ", o);
                    
                    return (t, a) => {
                        const l = Object(c["resolveComponent"])("Image"),
                            r = Object(c["resolveComponent"])("Tag");
                        console.log(Object(c["unref"])(n));
                        return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Jt, [Object(c["createElementVNode"])("div", Kt, [Object(c["createElementVNode"])("div", Qt, [Object(c["createVNode"])(l, {
                            src: Object(c["unref"])(o),
                            class: "token0"
                        }, null, 8, ["src"]), Object(c["createVNode"])(l, {
                            src: Object(c["unref"])(n).includes("IPISTR")? "/logo.png" : Object(c["unref"])(n),
                            class: "token1"
                        }, null, 8, ["src"])]), Object(c["createElementVNode"])("div", Zt, [Object(c["createElementVNode"])("p", ea, (Object(c["toDisplayString"])(e.firstToken).includes("IPISTR")?"IPIJWL":Object(c["toDisplayString"])(e.firstToken)) + " - " + Object(c["toDisplayString"])(e.secondToken), 1), Object(c["createVNode"])(r, {
                            class: "tag"
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])("40X")]),
                            _: 1
                        })])])])
                    }
                }
            });
            a("c4e6"), a("b331");
            const aa = v()(ta, [
                ["__scopeId", "data-v-c88da7ce"]
            ]);
            var ca = aa;
            const na = e => (Object(c["pushScopeId"])("data-v-9e495130"), e = e(), Object(c["popScopeId"])(), e),
                oa = {
                    class: "rewards-wrap"
                },
                la = {
                    class: "reward"
                },
                ra = {
                    class: "reward-number"
                },
                da = {
                    key: 0
                },
                ia = na(() => Object(c["createElementVNode"])("span", {
                    class: "plus"
                }, "+", -1)),
                sa = {
                    class: "reward"
                },
                ua = {
                    class: "reward-number"
                },
                ba = {
                    key: 0
                },
                pa = {
                    key: 1
                };
            var Oa = Object(c["defineComponent"])({
                __name: "PlReward",
                props: {
                    walletConnect: {
                        type: Boolean
                    },
                    loading: {
                        type: Boolean
                    },
                    tokenInfo: {
                        type: Object,
                        default: () => ({})
                    },
                    firstToken: {
                        type: String,
                        default: "IPIJWL"
                    },
                    secondToken: {
                        type: String,
                        default: "USDT"
                    },
                    firstReward: {
                        type: Number,
                        required: !0
                    },
                    firstStakeReward: {
                        type: [Number, String],
                        required: !0
                    },
                    secondReward: {
                        type: [Number, String],
                        required: !0
                    },
                    formatHelper: {
                        type: Function,
                        default: e => e
                    }
                },
                setup(e) {
                    const t = e,
                        {
                            getTokenLogo: a
                        } = $t(),
                        n = Object(c["computed"])(() => a(t.tokenInfo, t.firstToken)),
                        o = Object(c["computed"])(() => a(t.tokenInfo, t.secondToken));
                    return (t, a) => {
                        const l = Object(c["resolveComponent"])("Image"),
                            r = Object(c["resolveComponent"])("shorterSkeletonItem"),
                            d = Object(c["resolveComponent"])("shorterSkeleton");
                        return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", oa, [Object(c["createElementVNode"])("div", la, [Object(c["createVNode"])(l, {
                            src: Object(c["unref"])(n).includes("IPISTR")?"/logo.png":Object(c["unref"])(n),
                            class: "reward-coin"
                        }, null, 8, ["src"]), Object(c["createVNode"])(d, {
                            animated: "",
                            style: {
                                height: "48px"
                            },
                            loading: e.walletConnect && e.loading
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(r, {
                                style: {
                                    height: "48px",
                                    width: "160px"
                                }
                            })]),
                            default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("p", ra, [e.walletConnect ? (Object(c["openBlock"])(), Object(c["createElementBlock"])(c["Fragment"], {
                                key: 1
                            }, [Object(c["createElementVNode"])("span", null, Object(c["toDisplayString"])(e.formatHelper(e.firstReward)), 1), ia, Object(c["createElementVNode"])("span", null, Object(c["toDisplayString"])(e.formatHelper(e.firstStakeReward)), 1)], 64)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", da, "--"))])]),
                            _: 1
                        }, 8, ["loading"])]), Object(c["createElementVNode"])("div", sa, [Object(c["createVNode"])(l, {
                            src: Object(c["unref"])(o),
                            class: "reward-coin"
                        }, null, 8, ["src"]), Object(c["createVNode"])(d, {
                            animated: "",
                            style: {
                                height: "48px"
                            },
                            loading: e.walletConnect && e.loading
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(r, {
                                style: {
                                    height: "48px",
                                    width: "160px"
                                }
                            })]),
                            default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("p", ua, [e.walletConnect ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", pa, Object(c["toDisplayString"])(e.formatHelper(e.secondReward)), 1)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", ba, "--"))])]),
                            _: 1
                        }, 8, ["loading"])])])
                    }
                }
            });
            a("115d");
            const ja = v()(Oa, [
                ["__scopeId", "data-v-9e495130"]
            ]);
            var fa = ja,
                ma = Object(c["defineComponent"])({
                    __name: "StakeLPFormBtn",
                    props: {
                        walletConnect: Boolean,
                        approveLoading: Boolean,
                        stakeLoading: Boolean,
                        firstTokenApprove: Boolean,
                        secondTokenApprove: Boolean,
                        btnDisabled: Boolean,
                        firstToken: {
                            type: String,
                            default: "IPIJWL"
                        },
                        secondToken: {
                            type: String,
                            default: "USDT"
                        },
                        btnText: {
                            type: String,
                            default: "Stake"
                        }
                    },
                    emits: ["connectWallet", "approve", "stake"],
                    setup(e, {
                        emit: t
                    }) {
                        const a = () => {
                                t("connectWallet")
                            },
                            n = e => {
                                t("approve", e)
                            },
                            o = () => {
                                t("stake")
                            };
                        return (t, l) => {
                            const r = Object(c["resolveComponent"])("shorterButton");
                            return e.walletConnect ? e.firstTokenApprove ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                                key: 1,
                                class: "btn-submit big",
                                type: "primary",
                                loading: e.approveLoading,
                                onClick: l[0] || (l[0] = t => n(e.firstToken))
                            }, {
                                default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Approve " + Object(c["toDisplayString"])(e.firstToken), 1)]),
                                _: 1
                            }, 8, ["loading"])) : e.secondTokenApprove && !e.firstTokenApprove ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                                key: 2,
                                class: "btn-submit big",
                                type: "primary",
                                loading: e.approveLoading,
                                onClick: l[1] || (l[1] = t => n(e.secondToken))
                            }, {
                                default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Approve " + Object(c["toDisplayString"])(e.secondToken), 1)]),
                                _: 1
                            }, 8, ["loading"])) : (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                                key: 3,
                                class: "btn-submit big",
                                type: "primary",
                                loading: e.stakeLoading,
                                disabled: e.btnDisabled,
                                onClick: o
                            }, {
                                default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.btnText), 1)]),
                                _: 1
                            }, 8, ["loading", "disabled"])) : (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                                key: 0,
                                class: "btn-submit big",
                                type: "primary",
                                plain: "",
                                onClick: a
                            }, {
                                default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Unlock wallet ")]),
                                _: 1
                            }))
                        }
                    }
                });
            const va = ma;
            var ka = va;
            const ha = e => (Object(c["pushScopeId"])("data-v-c597f168"), e = e(), Object(c["popScopeId"])(), e),
                ya = {
                    class: "dialog-stake-LP"
                },
                wa = {
                    class: "title"
                },
                ga = {
                    class: "form-group"
                },
                Na = ha(() => Object(c["createElementVNode"])("label", null, "Amount", -1)),
                Va = {
                    class: "trading-pair"
                },
                Ea = {
                    class: "pics"
                },
                Ba = {
                    class: "addition"
                },
                Sa = {
                    class: "form-group"
                },
                Ca = ha(() => Object(c["createElementVNode"])("label", null, "Amount", -1)),
                Ta = {
                    class: "trading-pair"
                },
                xa = {
                    class: "pics"
                },
                Ra = {
                    class: "addition"
                };
            var Ia = Object(c["defineComponent"])({
                __name: "DialogStakeLP",
                props: {
                    dialogType: {
                        type: String,
                        default: "Stake"
                    },
                    tokenInfo: {
                        type: Object,
                        default: () => {}
                    },
                    firstToken: {
                        type: String,
                        default: "IPIJWL"
                    },
                    secondToken: {
                        type: String,
                        default: "USDT"
                    },
                    tokenId: {
                        type: String,
                        default: ""
                    },
                    staking: {
                        type: Object,
                        default: () => ({})
                    },
                    lpDecimals: {
                        type: Number,
                        default: 12
                    },
                    token0IsFirstToken: {
                        type: Boolean,
                        default: !0
                    },
                    myStakedBig: {
                        type: Number,
                        default: 0
                    },
                    liquidity: {
                        type: Object,
                        default: () => ({})
                    }
                },
                emits: ["close", "success"],
                setup(e, {
                    emit: t
                }) {
                    const a = e,
                        l = Object(c["computed"])(() => "Stake" === a.dialogType),
                        r = Object(c["computed"])(() => a.tokenInfo[a.firstToken]),
                        d = Object(c["computed"])(() => a.tokenInfo[a.secondToken]),
                        i = Object(c["computed"])(() => {
                            const e = r.value.decimals,
                                t = ft["b"](a.staking[a.firstToken], e);
                            return t
                        }),
                        s = Object(c["computed"])(() => {
                            const e = d.value.decimals,
                                t = ft["b"](a.staking[a.secondToken], e);
                            return t
                        }),
                        u = Object(c["ref"])(!1),
                        b = Object(c["ref"])(a.dialogType),
                        p = Object(c["reactive"])(j()),
                        O = Object(c["reactive"])({
                            lp: "0",
                            loading: {
                                stakeLoading: !1,
                                approveLoading: !1
                            }
                        });

                    function j() {
                        const e = a.firstToken,
                            t = a.secondToken;
                        return {
                            [e]: {
                                stakeSize: null,
                                lpAllowanceOf: 0,
                                showApprove: !1,
                                approveText: "Approve " + e,
                                numberFocused: !1
                            },
                            [t]: {
                                stakeSize: null,
                                lpAllowanceOf: 0,
                                showApprove: !1,
                                approveText: "Approve " + t,
                                numberFocused: !1
                            }
                        }
                    }

                    function f(e) {
                        m(e)
                    }

                    function m(e) {
                        const t = r.value.decimals,
                            c = d.value.decimals,
                            n = a.token0IsFirstToken ? a.liquidity.amount0 : a.liquidity.amount1,
                            l = a.token0IsFirstToken ? a.liquidity.amount1 : a.liquidity.amount0,
                            i = ft["b"](n, t),
                            s = ft["b"](l, c);
                        if (e === a.firstToken) {
                            const t = o["a"].divide(i, s);
                            O.lp = Object(N["b"])(o["a"].divide(p[e].stakeSize, i), a.lpDecimals), p[a.secondToken].stakeSize = t ? Object(N["b"])(o["a"].divide(p[e].stakeSize, t), c) : String(0)
                        }
                        if (e === a.secondToken) {
                            const c = o["a"].divide(s, i);
                            O.lp = Object(N["b"])(o["a"].divide(p[e].stakeSize, s), a.lpDecimals), p[a.firstToken].stakeSize = c ? Object(N["b"])(o["a"].divide(p[e].stakeSize, c), t) : 0
                        }
                    }

                    function v() {
                        p[a.firstToken].stakeSize = i.value, f(a.firstToken)
                    }

                    function k() {
                        p[a.secondToken].stakeSize = s.value, f(a.secondToken)
                    }

                    function h(e) {
                        if (!l.value) return;
                        const t = 1 * p[e].lpAllowanceOf,
                            a = Number(p[e].stakeSize) > t || 0 === t;
                        p[e].showApprove = a
                    }
                    async function y(e, t) {
                        try {
                            const a = await Dt["a"](e, g["a"].value);
                            p[t].lpAllowanceOf = a, h(t)
                        } catch (a) {}
                    }
                    async function w(e) {
                        if (g["a"].value) try {
                            O.loading.approveLoading = !0;
                            const t = a.tokenInfo[e].address;
                            await Dt["b"](t, g["a"].value, p[e].lpAllowanceOf), await y(t, e), E(), B()
                        } catch (t) {
                            Object(ce["a"])(t)
                        } finally {
                            O.loading.approveLoading = !1
                        }
                    }

                    function V() {
                        Object(c["nextTick"])(() => {
                            E(), B()
                        })
                    }

                    function E() {
                        const e = 1 * p[a.firstToken].stakeSize,
                            t = 1 * p[a.firstToken].lpAllowanceOf;
                        e > t || (0 === e ? (b.value = a.dialogType, u.value = !0) : e > Number(i.value) ? (b.value = "Insufficient " + a.firstToken, u.value = !0) : (b.value = a.dialogType, u.value = !1))
                    }

                    function B() {
                        const e = 1 * p[a.secondToken].stakeSize,
                            t = 1 * p[a.secondToken].lpAllowanceOf;
                        e > t || ("" === p[a.secondToken].stakeSize ? (b.value = a.dialogType, u.value = !1) : 0 === e ? (b.value = a.dialogType, u.value = !0) : e > Number(s.value) ? (b.value = "Insufficient " + a.secondToken, u.value = !0) : (b.value = a.dialogType, u.value = !1))
                    }
                    async function S() {
                        if (Number(p[a.firstToken].stakeSize) && Number(p[a.secondToken].stakeSize)) try {
                            O.loading.stakeLoading = !0, await C(), p[a.firstToken].stakeSize = "", p[a.secondToken].stakeSize = "", t("success"), setTimeout(() => {
                                t("close")
                            }, 1e3)
                        } catch (e) {
                            Object(ce["a"])(e.error)
                        } finally {
                            O.loading.stakeLoading = !1
                        } else te["a"].warning("Please enter a valid value")
                    }
                    async function C() {
                        const e = .9,
                            t = l.value ? String(o["a"].times(O.lp, e)) : O.lp,
                            c = a.lpDecimals,
                            r = ft["d"](Number(t).toFixed(c), c);
                        let d, i;
                        const s = a.liquidity[0];
                        for (const n of [a.firstToken, a.secondToken]) {
                            const t = a.tokenInfo[n].decimals,
                                c = p[n].stakeSize,
                                r = Object(N["b"])(l.value ? c : o["a"].times(c, e), t);
                            a.tokenInfo[n].address === s ? d = ft["d"](r, t) : i = ft["d"](r, t)
                        }
                        l.value ? await n["h"](a.tokenId, d, i, r) : await n["i"](a.tokenId, r, d, i)
                    }
                    return Object(c["watch"])(() => g["a"].value, () => {
                        y(r.value.address, a.firstToken), y(d.value.address, a.secondToken)
                    }), Object(c["watch"])(() => p[a.firstToken].stakeSize, () => {
                        V(), h(a.firstToken)
                    }), Object(c["watch"])(() => p[a.secondToken].stakeSize, () => {
                        V(), h(a.secondToken)
                    }), Object(c["onMounted"])(() => {
                        y(r.value.address, a.firstToken), y(d.value.address, a.secondToken)
                    }), (t, a) => {
                        const n = Object(c["resolveComponent"])("Image"),
                            o = Object(c["resolveDirective"])("number-only");
                        return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", ya, [Object(c["createElementVNode"])("h4", wa, [Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.dialogType) + " ", 1), Object(c["withDirectives"])(Object(c["createElementVNode"])("span", null, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(O.lp, 2, !0)), 513), [
                            [c["vShow"], Number(O.lp) > 0]
                        ]), Object(c["createTextVNode"])(" LP ")]), Object(c["createElementVNode"])("form", {
                            class: "form",
                            onSubmit: a[10] || (a[10] = Object(c["withModifiers"])(() => {}, ["prevent"]))
                        }, [Object(c["createElementVNode"])("div", ga, [Na, Object(c["createElementVNode"])("div", {
                            class: Object(c["normalizeClass"])(["form-control", [{
                                active: p[e.firstToken].numberFocused
                            }]])
                        }, [Object(c["createElementVNode"])("div", Va, [Object(c["createElementVNode"])("div", Ea, [Object(c["createVNode"])(n, {
                            class: "front",
                            style: {
                                width: "32px",
                                height: "32px"
                            },
                            src: Object(c["unref"])(r).logoURI
                        }, null, 8, ["src"])]), Object(c["createElementVNode"])("span", null, Object(c["toDisplayString"])(Object(c["unref"])(r).symbol), 1)]), Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                            "onUpdate:modelValue": a[0] || (a[0] = t => p[e.firstToken].stakeSize = t),
                            type: "text",
                            placeholder: "0",
                            onFocus: a[1] || (a[1] = t => p[e.firstToken].numberFocused = !0),
                            onBlur: a[2] || (a[2] = t => p[e.firstToken].numberFocused = !1),
                            onInput: a[3] || (a[3] = t => f(e.firstToken))
                        }, null, 544), [
                            [c["vModelText"], p[e.firstToken].stakeSize],
                            [o]
                        ]), Object(c["createElementVNode"])("span", {
                            class: "suffix",
                            onClick: v
                        }, "MAX")], 2), Object(c["createElementVNode"])("div", Ba, [Object(c["createElementVNode"])("small", null, Object(c["toDisplayString"])(Object(c["unref"])(l) ? "Wallet Balance" : "Current Staking"), 1), Object(c["createElementVNode"])("span", null, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(Object(c["unref"])(i), 4, !0) || 0) + " " + Object(c["toDisplayString"])(Object(c["unref"])(r).symbol), 1)])]), Object(c["createElementVNode"])("div", Sa, [Ca, Object(c["createElementVNode"])("div", {
                            class: Object(c["normalizeClass"])(["form-control", [{
                                active: p[e.secondToken].numberFocused
                            }]])
                        }, [Object(c["createElementVNode"])("div", Ta, [Object(c["createElementVNode"])("div", xa, [Object(c["createVNode"])(n, {
                            class: "front",
                            style: {
                                width: "32px",
                                height: "32px"
                            },
                            src: Object(c["unref"])(d).logoURI
                        }, null, 8, ["src"])]), Object(c["createElementVNode"])("span", null, Object(c["toDisplayString"])(Object(c["unref"])(d).symbol), 1)]), Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                            "onUpdate:modelValue": a[4] || (a[4] = t => p[e.secondToken].stakeSize = t),
                            type: "text",
                            placeholder: "0",
                            onFocus: a[5] || (a[5] = t => p[e.secondToken].numberFocused = !0),
                            onBlur: a[6] || (a[6] = t => p[e.secondToken].numberFocused = !1),
                            onInput: a[7] || (a[7] = t => f(e.secondToken))
                        }, null, 544), [
                            [c["vModelText"], p[e.secondToken].stakeSize],
                            [o]
                        ]), Object(c["createElementVNode"])("span", {
                            class: "suffix",
                            onClick: k
                        }, "MAX")], 2), Object(c["createElementVNode"])("div", Ra, [Object(c["createElementVNode"])("small", null, Object(c["toDisplayString"])(Object(c["unref"])(l) ? "Wallet Balance" : "Current Staking"), 1), Object(c["createElementVNode"])("span", null, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(Object(c["unref"])(s), 4, !0) || 0) + " " + Object(c["toDisplayString"])(Object(c["unref"])(d).symbol), 1)])]), Object(c["createVNode"])(ka, {
                            "wallet-connect": Object(c["unref"])(g["k"]).isConnected,
                            "approve-loading": O.loading.approveLoading,
                            "stake-loading": O.loading.stakeLoading,
                            "first-token-approve": p[e.firstToken].showApprove,
                            "second-token-approve": p[e.secondToken].showApprove,
                            "first-token": e.firstToken,
                            "second-token": e.secondToken,
                            "btn-disabled": u.value,
                            "btn-text": b.value,
                            onConnectWallet: a[8] || (a[8] = e => !0 === Object(c["unref"])(g["k"]).visible),
                            onApprove: a[9] || (a[9] = e => w(e)),
                            onStake: S
                        }, null, 8, ["wallet-connect", "approve-loading", "stake-loading", "first-token-approve", "second-token-approve", "first-token", "second-token", "btn-disabled", "btn-text"])], 32)])
                    }
                }
            });
            a("4d89");
            const _a = v()(Ia, [
                ["__scopeId", "data-v-c597f168"]
            ]);
            var Pa = _a;
            const Da = e => (Object(c["pushScopeId"])("data-v-cd2898a0"), e = e(), Object(c["popScopeId"])(), e),
                Aa = {
                    class: "info-group panel-container"
                },
                La = {
                    class: "panel"
                },
                za = {
                    class: "left-wrap"
                },
                qa = {
                    class: "op-wrap"
                },
                Fa = {
                    class: "block stake-wrap"
                },
                Ua = Da(() => Object(c["createElementVNode"])("p", {
                    class: "top-describe"
                }, null, -1)),
                Ma = {
                    class: "number"
                },
                Wa = {
                    key: 0,
                    class: "my-staked-wrap"
                },
                Ga = {
                    key: 1,
                    class: "my-staked-wrap"
                },
                Ha = {
                    class: "stake-btn-group"
                },
                Ya = Da(() => Object(c["createElementVNode"])("span", {
                    class: ""
                }, [Object(c["createElementVNode"])("svg", {
                    class: "icon shorter-icon operator default",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-plus"
                })]), Object(c["createElementVNode"])("svg", {
                    class: "icon shorter-icon operator active",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-plus-active"
                })])], -1)),
                Xa = Da(() => Object(c["createElementVNode"])("span", null, [Object(c["createElementVNode"])("svg", {
                    class: "icon shorter-icon operator default",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-mins"
                })]), Object(c["createElementVNode"])("svg", {
                    class: "icon shorter-icon operator active",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-mins-active"
                })])], -1)),
                $a = Da(() => Object(c["createElementVNode"])("p", {
                    class: "label"
                }, "My Staked", -1)),
                Ja = {
                    class: "block speed-wrap"
                },
                Ka = Da(() => Object(c["createElementVNode"])("p", {
                    class: "top-describe"
                }, [Object(c["createTextVNode"])(" Per Block "), Object(c["createElementVNode"])("span", null, [Object(c["createElementVNode"])("svg", {
                    class: "icon shorter-icon",
                    "aria-hidden": "true"
                }, [Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-block"
                })])])], -1)),
                Qa = {
                    class: "number"
                },
                Za = {
                    class: "label"
                },
                ec = {
                    class: "block locked-wrap"
                },
                tc = Da(() => Object(c["createElementVNode"])("p", {
                    class: "top-describe"
                }, null, -1)),
                ac = {
                    class: "number"
                },
                cc = {
                    key: 0
                },
                nc = {
                    key: 1
                },
                oc = {
                    key: 0,
                    class: "label"
                },
                lc = {
                    key: 1,
                    class: "label"
                },
                rc = Da(() => Object(c["createElementVNode"])("div", {
                    class: "rewards-line"
                }, [Object(c["createElementVNode"])("span", {
                    class: "split-text"
                }, "Rewards"), Object(c["createElementVNode"])("div", {
                    class: "split-line"
                })], -1)),
                dc = {
                    class: "right-wrap"
                },
                ic = {
                    class: "apr-wrap"
                },
                sc = {
                    class: "apr-num"
                };
            var uc = Object(c["defineComponent"])({
                __name: "ProvideLiquidity",
                setup(e) {
                    const t = Object(c["computed"])(() => g["k"].isConnected),
                        a = Object(c["reactive"])({
                            harvest: !1,
                            info: !1
                        }),
                        l = Object(c["ref"])({}),
                        r = Object(c["ref"])("IPIJWL"),
                        d = Object(c["computed"])(() => Object(It["a"])().usdToken),
                        i = Object(c["computed"])(() => l.value[r.value] || {}),
                        s = Object(c["computed"])(() => l.value[d.value] || {}),
                        u = Object(c["computed"])(() => "56" === g["b"].id || "97" === g["b"].id),
                        b = Object(c["ref"])(null),
                        p = Object(c["ref"])(null),
                        O = Object(c["computed"])(() => ft["b"](p.value, j.value)),
                        j = Object(c["computed"])(() => {
                            const e = i.value.decimals,
                                t = s.value.decimals;
                            return (e + t) / 2
                        }),
                        f = Object(c["ref"])(""),
                        m = Object(c["computed"])(() => ({
                            [r.value]: ft["e"](0),
                            [d.value]: ft["e"](0)
                        })),
                        v = Object(c["ref"])({
                            amount0: null,
                            amount1: null,
                            lpAmount: null,
                            token0: null
                        }),
                        k = Object(c["ref"])(!0),
                        h = Object(c["ref"])(0),
                        y = Object(c["ref"])({
                            unlockedReward: 0,
                            reward: 0
                        }),
                        w = Object(c["ref"])(0),
                        V = Object(c["reactive"])({
                            token0Rewards: 0,
                            token1Rewards: 0
                        }),
                        E = Object(c["computed"])(() => {
                            const e = o["a"].minus(w.value, y.value.unlockedReward);
                            return e < 0 ? 0 : e
                        }),
                        B = Object(c["computed"])(() => o["a"].plus(y.value.reward, y.value.unlockedReward)),
                        S = Object(c["computed"])(() => k.value ? V.token0Rewards : V.token1Rewards),
                        C = Object(c["computed"])(() => k.value ? V.token1Rewards : V.token0Rewards),
                        T = Object(c["ref"])(0);
                    Object(c["watchEffect"])(() => {
                        const e = i.value.decimals,
                            t = s.value.decimals,
                            a = ft["b"](m.value[r.value], e),
                            c = ft["b"](m.value[d.value], t),
                            n = o["a"].plus(c, o["a"].times(a, ee["a"].price));
                        if (g["a"].value && 0 == n) return void K();
                        const l = Object(It["a"])().blockSpeed,
                            u = o["a"].times(ee["a"].price, h.value),
                            b = o["a"].divide(31536e3, l),
                            p = o["a"].times(u, b);
                        if (0 == p) return 0;
                        T.value = o["a"].divide(p, n)
                    });
                    const x = Object(c["computed"])(() => ({
                            [r.value]: ee["a"].amountBig,
                            [d.value]: b.value
                        })),
                        R = Object(c["reactive"])({
                            stakeLP: !1,
                            unstakeLP: !1
                        });

                    function I() {
                        R.stakeLP = !0
                    }

                    function _() {
                        R.unstakeLP = !0
                    }

                    function P() {
                        f.value = "", p.value = ft["e"](0), y.value = {
                            unlockedReward: 0,
                            reward: 0
                        }, h.value = 0, w.value = 0;
                        const e = {
                            token0Rewards: 0,
                            token1Rewards: 0
                        };
                        for (const t in e) V[t] = e[t]
                    }
                    async function D() {
                        var e;
                        await A(), null !== (e = Object.keys(l.value)) && void 0 !== e && e.length || setTimeout(() => {
                            D()
                        }, 500)
                    }
                    async function A() {
                        const e = await Object(At["f"])(),
                            t = {};
                        e.map(e => {
                            t[e.symbol] || (t[e.symbol] = e)
                        }), l.value = t
                    }
                    async function L() {
                        Object(ee["b"])(), await M(), await W(), z(), U(), F(), q(), G()
                    }
                    async function z() {
                        try {
                            b.value = await Dt["f"](s.value.address, g["a"].value)
                        } catch (e) {}
                    }
                    async function q() {
                        try {
                            const e = await Pt["d"](g["a"].value);
                            w.value = e
                        } catch (e) {}
                    }
                    async function F() {
                        try {
                            const e = await Object(_t["e"])(g["a"].value);
                            y.value = e
                        } catch (e) {}
                    }
                    async function U() {
                        try {
                            const e = await Object(_t["c"])(g["a"].value);
                            h.value = ft["b"](e, i.value.decimals)
                        } catch (e) {
                            h.value = 0
                        }
                    }
                    async function M() {
                        try {
                            f.value = await n["b"]()
                        } catch (e) {}
                    }
                    async function W() {
                        const e = ft["d"](1, 12);
                        try {
                            const t = await n["a"](f.value, e);
                            v.value = t
                        } catch (t) {}
                    }
                    async function G() {
                        const e = i.value.decimal,
                            t = s.value.decimals,
                            a = await n["e"](g["a"].value, f.value);
                        p.value = a.stakedAmount;
                        const c = ft["d"](1, j.value),
                            o = 0 == a.stakedAmount.toString() ? c : a.stakedAmount;
                        await X(o);
                        const l = a.token0Rewards,
                            r = a.token1Rewards;
                        V.token0Rewards = ft["b"](k.value ? l : r, e), V.token1Rewards = ft["b"](k.value ? r : l, t)
                    }
                    async function H() {
                        await Object(ee["b"])(), await M(), await Y()
                    }
                    async function Y() {
                        try {
                            const e = i.value.decimal,
                                {
                                    liquidity: t
                                } = await n["d"](f.value);
                            await X(t);
                            const a = ft["d"](1, j.value),
                                {
                                    midPrice: c
                                } = await n["c"](f.value),
                                {
                                    speed: o,
                                    supply: l
                                } = await $(),
                                r = t.mul(c).mul(o).div(a).div(l);
                            h.value = ft["b"](r, e)
                        } catch (e) {}
                    }
                    async function X(e) {
                        const t = await n["a"](f.value, e),
                            a = t.amount0,
                            c = t.amount1;
                        return k.value = t.token0 === i.value.address, m.value[r.value] = k.value ? a : c, m.value[d.value] = k.value ? c : a, t
                    }
                    async function $() {
                        const [e, t] = await Promise.all([Object(_t["b"])(), Object(_t["a"])()]);
                        return {
                            speed: e,
                            supply: t
                        }
                    }
                    async function J() {
                        a.harvest = !0;
                        try {
                            await Object(_t["d"])(g["a"].value), L()
                        } catch (e) {} finally {
                            a.harvest = !1
                        }
                    }
                    async function K() {
                        if (!f.value) return;
                        const e = i.value.decimals,
                            t = s.value.decimals,
                            {
                                liquidity: a
                            } = await n["d"](f.value),
                            c = await n["a"](f.value, a),
                            l = c.amount0,
                            r = c.amount1;
                        k.value = c.token0 === i.value.address;
                        const d = k.value ? l : r,
                            u = k.value ? r : l,
                            b = ft["d"](1, j.value),
                            {
                                midPrice: p
                            } = await n["c"](f.value),
                            {
                                speed: O,
                                supply: m
                            } = await $(),
                            v = a.mul(p).mul(O).div(b).div(m),
                            h = ft["b"](v, e),
                            y = ft["b"](d, e),
                            w = ft["b"](u, t),
                            g = o["a"].plus(w, o["a"].times(y, ee["a"].price)),
                            N = Object(It["a"])().blockSpeed,
                            V = o["a"].times(ee["a"].price, h),
                            E = o["a"].divide(31536e3, N),
                            B = o["a"].times(V, E);
                        if (0 == B || 0 == g) return 0;
                        T.value = o["a"].divide(B, g)
                    }
                    return Object(c["watchEffect"])(async () => {
                        if (g["a"].value) try {
                            a.info = !0, await L()
                        } catch (e) {} finally {
                            a.info = !1
                        } else await H()
                    }), Object(c["watch"])(() => g["b"].id, async () => {
                        try {
                            a.info = !0, P(), A(), g["a"].value ? await L() : await H(), a.info = !1
                        } catch (e) {}
                    }), D(), (e, n) => {
                        const o = Object(c["resolveComponent"])("shorterSkeletonItem"),
                            r = Object(c["resolveComponent"])("shorterButton"),
                            s = Object(c["resolveComponent"])("shorterSkeleton"),
                            b = Object(c["resolveComponent"])("Tag"),
                            y = Object(c["resolveComponent"])("Dialog");
                        return Object(c["openBlock"])(), Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createElementVNode"])("div", Aa, [Object(c["createVNode"])(Xt, {
                            "first-token-locked": Object(c["unref"])(E)
                        }, null, 8, ["first-token-locked"]), Object(c["createElementVNode"])("div", La, [Object(c["createElementVNode"])("div", za, [Object(c["createVNode"])(ca, {
                            "token-info": l.value,
                            "second-token": Object(c["unref"])(d)
                        }, null, 8, ["token-info", "second-token"]), Object(c["createElementVNode"])("div", qa, [Object(c["createElementVNode"])("div", Fa, [Ua, Object(c["createElementVNode"])("div", Ma, [Object(c["createVNode"])(s, {
                            animated: "",
                            style: {
                                height: "48px"
                            },
                            loading: Object(c["unref"])(t) && a.info
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                style: {
                                    height: "48px",
                                    width: "150px"
                                }
                            })]),
                            default: Object(c["withCtx"])(() => [Object(c["unref"])(t) ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Ga, [Object(c["withDirectives"])(Object(c["createElementVNode"])("span", {
                                class: "staked-count"
                            }, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(Object(c["unref"])(O), 2, !0)), 513), [
                                [c["vShow"], 0 != Object(c["unref"])(O)]
                            ]), Object(c["withDirectives"])(Object(c["createVNode"])(r, {
                                plain: "",
                                type: "primary",
                                class: "stake-btn",
                                disabled: Object(c["unref"])(u),
                                onClick: I
                            }, {
                                default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Stake ")]),
                                _: 1
                            }, 8, ["disabled"]), [
                                [c["vShow"], 0 == Object(c["unref"])(O)]
                            ]), Object(c["createElementVNode"])("div", Ha, [Object(c["withDirectives"])(Object(c["createVNode"])(r, {
                                plain: "",
                                type: "primary",
                                disabled: Object(c["unref"])(u),
                                class: "stake-btn-square operator-wrap",
                                onClick: I
                            }, {
                                default: Object(c["withCtx"])(() => [Ya]),
                                _: 1
                            }, 8, ["disabled"]), [
                                [c["vShow"], 0 != Object(c["unref"])(O)]
                            ]), Object(c["withDirectives"])(Object(c["createVNode"])(r, {
                                plain: "",
                                type: "primary",
                                class: "stake-btn-square operator-wrap",
                                onClick: _
                            }, {
                                default: Object(c["withCtx"])(() => [Xa]),
                                _: 1
                            }, 512), [
                                [c["vShow"], 0 != Object(c["unref"])(O)]
                            ])])])) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", Wa, [Object(c["createVNode"])(r, {
                                type: "primary",
                                class: "stake-btn",
                                plain: "",
                                onClick: n[0] || (n[0] = e => Object(c["unref"])(g["k"]).visible = !0)
                            }, {
                                default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Unlock wallet ")]),
                                _: 1
                            })]))]),
                            _: 1
                        }, 8, ["loading"])]), $a]), Object(c["createElementVNode"])("div", Ja, [Ka, Object(c["createVNode"])(s, {
                            animated: "",
                            style: {
                                height: "48px"
                            },
                            loading: Object(c["unref"])(t) && a.info
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                style: {
                                    height: "48px",
                                    width: "150px"
                                }
                            })]),
                            default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("div", Qa, "+" + Object(c["toDisplayString"])(Object(c["unref"])(N["e"])(h.value)), 1)]),
                            _: 1
                        }, 8, ["loading"]), Object(c["createElementVNode"])("p", Za, [Object(c["withDirectives"])(Object(c["createElementVNode"])("span", null, "Unlock", 512), [
                            [c["vShow"], Object(c["unref"])(E) > 0]
                        ]), Object(c["withDirectives"])(Object(c["createElementVNode"])("span", null, "Yield", 512), [
                            [c["vShow"], Object(c["unref"])(E) <= 0]
                        ]), Object(c["createTextVNode"])(" Speed ")])]), Object(c["createElementVNode"])("div", ec, [tc, Object(c["createVNode"])(s, {
                            animated: "",
                            style: {
                                height: "48px"
                            },
                            loading: Object(c["unref"])(t) && a.info
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                style: {
                                    height: "48px",
                                    width: "150px"
                                }
                            })]),
                            default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("div", ac, [Object(c["unref"])(t) ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", nc, Object(c["toDisplayString"])(Object(c["unref"])(N["d"])(Object(c["unref"])(E), 2, !0)), 1)) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("span", cc, "0")), Object(c["createVNode"])(b, {
                                class: "tag-ipistr"
                            }, {
                                default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(Object(c["toDisplayString"])(Object(c["unref"])(i).symbol), 1)]),
                                _: 1
                            })])]),
                            _: 1
                        }, 8, ["loading"]), Object(c["unref"])(t) ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("p", oc, "My Locked")) : (Object(c["openBlock"])(), Object(c["createElementBlock"])("p", lc, "Total Locked"))])]), Object(c["withDirectives"])(Object(c["createElementVNode"])("div", null, [rc, Object(c["createVNode"])(fa, {
                            "token-info": l.value,
                            "first-reward": Object(c["unref"])(B),
                            "first-stake-reward": Object(c["unref"])(S),
                            "second-token": Object(c["unref"])(d),
                            "second-reward": Object(c["unref"])(C),
                            "wallet-connect": Object(c["unref"])(t),
                            loading: a.info,
                            "format-helper": Object(c["unref"])(N["e"])
                        }, null, 8, ["token-info", "first-reward", "first-stake-reward", "second-token", "second-reward", "wallet-connect", "loading", "format-helper"])], 512), [
                            [c["vShow"], Object(c["unref"])(t)]
                        ])]), Object(c["createElementVNode"])("div", dc, [Object(c["createElementVNode"])("p", ic, [Object(c["createVNode"])(b, {
                            class: "apr-tag"
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])("APR")]),
                            _: 1
                        }), Object(c["createVNode"])(s, {
                            animated: "",
                            style: {
                                height: "24px"
                            },
                            loading: Object(c["unref"])(t) && a.info
                        }, {
                            template: Object(c["withCtx"])(() => [Object(c["createVNode"])(o, {
                                style: {
                                    height: "24px",
                                    width: "40px"
                                }
                            })]),
                            default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("span", sc, Object(c["toDisplayString"])(Object(c["unref"])(N["e"])(100 * T.value)) + "%", 1)]),
                            _: 1
                        }, 8, ["loading"])]), Object(c["unref"])(t) ? (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 0,
                            class: "harvest-btn",
                            type: "primary",
                            loading: a.harvest,
                            onClick: J
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Harvest ")]),
                            _: 1
                        }, 8, ["loading"])) : (Object(c["openBlock"])(), Object(c["createBlock"])(r, {
                            key: 1,
                            class: "harvest-btn",
                            type: "primary",
                            plain: "",
                            onClick: n[1] || (n[1] = e => Object(c["unref"])(g["k"]).visible = !0)
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(" Unlock wallet ")]),
                            _: 1
                        }))])])]), Object(c["createVNode"])(y, {
                            modelValue: R.stakeLP,
                            "onUpdate:modelValue": n[3] || (n[3] = e => R.stakeLP = e),
                            width: "560px"
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createVNode"])(Pa, {
                                "dialog-type": "Stake",
                                "token-info": l.value,
                                "second-token": Object(c["unref"])(d),
                                "token-id": f.value,
                                staking: Object(c["unref"])(x),
                                "lp-decimals": Object(c["unref"])(j),
                                "token0-is-first-token": k.value,
                                liquidity: v.value,
                                onSuccess: L,
                                onClose: n[2] || (n[2] = e => R.stakeLP = !1)
                            }, null, 8, ["token-info", "second-token", "token-id", "staking", "lp-decimals", "token0-is-first-token", "liquidity"])]),
                            _: 1
                        }, 8, ["modelValue"]), Object(c["createVNode"])(y, {
                            modelValue: R.unstakeLP,
                            "onUpdate:modelValue": n[5] || (n[5] = e => R.unstakeLP = e),
                            width: "560px"
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createVNode"])(Pa, {
                                "dialog-type": "Unstake",
                                "token-info": l.value,
                                "second-token": Object(c["unref"])(d),
                                "token-id": f.value,
                                staking: Object(c["unref"])(m),
                                "my-staked-big": p.value,
                                "lp-decimals": Object(c["unref"])(j),
                                "token0-is-first-token": k.value,
                                liquidity: v.value,
                                onSuccess: L,
                                onClose: n[4] || (n[4] = e => R.unstakeLP = !1)
                            }, null, 8, ["token-info", "second-token", "token-id", "staking", "my-staked-big", "lp-decimals", "token0-is-first-token", "liquidity"])]),
                            _: 1
                        }, 8, ["modelValue"])], 64)
                    }
                }
            });
            a("af62"), a("6ad1");
            const bc = v()(uc, [
                ["__scopeId", "data-v-cd2898a0"]
            ]);
            var pc = bc;
            const Oc = {
                    class: "panel-group"
                },
                jc = {
                    class: "panel-group part-2"
                };
            var fc = Object(c["defineComponent"])({
                __name: "index",
                setup(e) {
                    const t = Object(c["reactive"])({
                            allRewards: {
                                creatorRewards: 0,
                                stakedRewards: 0,
                                farmingRewards: 0,
                                govRewards: 0,
                                tradingRewards: 0,
                                voteAgainstRewards: 0,
                                voteRewards: 0,
                                stakedRewardPools: [],
                                voteRewardPools: [],
                                tradingRewardPools: [],
                                createRewardPools: []
                            },
                            loading: {
                                fetchAllRewards: !1
                            }
                        }),
                        a = [];

                    function o() {
                        a.forEach(e => {
                            "function" === typeof e && e()
                        })
                    }
                    async function l(e, a = !1) {
                        try {
                            t.loading.fetchAllRewards = a;
                            const c = await n["g"](e);
                            t.allRewards = {
                                ...t.allRewards,
                                ...c
                            }
                        } catch (c) {} finally {
                            t.loading.fetchAllRewards = !1
                        }
                    }
                    return a.push((() => () => {
                        g["k"].isConnected && g["a"].value && l(g["a"].value)
                    })()), Object(c["provide"])("refreshTaskFunc", a), Object(c["provide"])("executeAllRefreshTask", o), g["k"].isConnected && g["a"].value && l(g["a"].value, !0), Object(c["watch"])(() => [g["k"].isConnected, g["a"].value, g["b"].id], ([e, a]) => {
                        e && a ? l(a, !0) : t.allRewards = {
                            creatorRewards: 0,
                            stakedRewards: 0,
                            farmingRewards: 0,
                            govRewards: 0,
                            tradingRewards: 0,
                            voteAgainstRewards: 0,
                            voteRewards: 0,
                            stakedRewardPools: [],
                            voteRewardPools: [],
                            tradingRewardPools: [],
                            createRewardPools: []
                        }
                    }), (e, a) => {
                        const n = Object(c["resolveComponent"])("Layout");
                        return Object(c["openBlock"])(), Object(c["createBlock"])(n, {
                            title: "Farming"
                        }, {
                            default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("div", Oc, [Object(c["createVNode"])(Q), Object(c["createVNode"])(he)]), Object(c["createElementVNode"])("div", jc, [Object(c["createVNode"])(Me, {
                                data: t.allRewards,
                                loading: t.loading.fetchAllRewards
                            }, null, 8, ["data", "loading"]), Object(c["createVNode"])(Ot, {
                                data: t.allRewards,
                                loading: t.loading.fetchAllRewards
                            }, null, 8, ["data", "loading"]), Object(c["createVNode"])(Rt, {
                                data: t.allRewards,
                                loading: t.loading.fetchAllRewards
                            }, null, 8, ["data", "loading"])]), Object(c["createVNode"])(pc)]),
                            _: 1
                        })
                    }
                }
            });
            a("6998");
            const mc = v()(fc, [
                ["__scopeId", "data-v-060e6a68"]
            ]);
            t["default"] = mc
        },
        af62: function (e, t, a) {
            "use strict";
            a("8612")
        },
        b0d1: function (e, t, a) {},
        b331: function (e, t, a) {
            "use strict";
            a("441f")
        },
        c4e6: function (e, t, a) {
            "use strict";
            a("33c2")
        },
        d072: function (e, t, a) {
            "use strict";
            a("9d88")
        },
        d58f: function (e, t, a) {
            var c = a("59ed"),
                n = a("7b0b"),
                o = a("44ad"),
                l = a("07fa"),
                r = TypeError,
                d = function (e) {
                    return function (t, a, d, i) {
                        c(a);
                        var s = n(t),
                            u = o(s),
                            b = l(s),
                            p = e ? b - 1 : 0,
                            O = e ? -1 : 1;
                        if (d < 2)
                            while (1) {
                                if (p in u) {
                                    i = u[p], p += O;
                                    break
                                }
                                if (p += O, e ? p < 0 : b <= p) throw r("Reduce of empty array with no initial value")
                            }
                        for (; e ? p >= 0 : b > p; p += O) p in u && (i = a(i, u[p], p, s));
                        return i
                    }
                };
            e.exports = {
                left: d(!1),
                right: d(!0)
            }
        },
        db3d: function (e, t, a) {},
        f44d: function (e, t, a) {
            "use strict";
            a.d(t, "a", (function () {
                return o
            }));
            var c = a("fae1"),
                n = a("05ac");

            function o(e) {
                return c["a"].post(Object(n["a"])().graphqlUrl, e)
            }
        },
        f908: function (e, t, a) {
            "use strict";
            var c = a("7a23");
            const n = e => (Object(c["pushScopeId"])("data-v-5f41cf6e"), e = e(), Object(c["popScopeId"])(), e),
                o = {
                    class: "guide-content"
                },
                l = {
                    class: "icon-container"
                },
                r = n(() => Object(c["createElementVNode"])("use", {
                    "xlink:href": "#icon-help"
                }, null, -1)),
                d = [r],
                i = {
                    name: "Guide"
                };
            var s = Object(c["defineComponent"])({
                    ...i,
                    props: {
                        text: {
                            type: String,
                            default: ""
                        },
                        size: {
                            type: Object,
                            default: () => {}
                        }
                    },
                    setup(e) {
                        return (t, a) => {
                            const n = Object(c["resolveDirective"])("tooltip");
                            return Object(c["withDirectives"])((Object(c["openBlock"])(), Object(c["createElementBlock"])("div", o, [Object(c["createElementVNode"])("div", l, [(Object(c["openBlock"])(), Object(c["createElementBlock"])("svg", {
                                class: "shorter-icon",
                                style: Object(c["normalizeStyle"])(e.size),
                                "aria-hidden": "true"
                            }, d, 4))])])), [
                                [n, "" + e.text, void 0, {
                                    top: !0
                                }]
                            ])
                        }
                    }
                }),
                u = (a("7aa4"), a("6b0d")),
                b = a.n(u);
            const p = b()(s, [
                ["__scopeId", "data-v-5f41cf6e"]
            ]);
            t["a"] = p
        }
    }
]);