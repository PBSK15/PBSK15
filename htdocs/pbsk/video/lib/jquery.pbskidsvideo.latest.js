/**
 * Class: Player
 * Class: PlayerEvent
 * Class: VideoEvent
 * Class: VideoErrorEvent
 *
 * Class: Playlist
 * Class: PlaylistEvent
 *
 * Package: org.pbskids.video
 * Version: 1.6
 *
 * Author: Renzo Olguin
 * Email: rmolguin@pbs.org
 ******************************************/
! function() {
    var a, b;
    "undefined" != typeof PBS && PBS.KIDS && PBS.KIDS.require && PBS.KIDS.define ? (a = PBS.KIDS.require, b = PBS.KIDS.define) : (a = window.require, b = window.define);
    var g, c = "PBS KIDS - Video Plugin",
        d = "1.6",
        e = window.location.hostname.match(/^((?!www(\-tc)?\.).+)pbskids\.org$/) ? !0 : !1,
        f = function(a, b, f, g) {
            if (e === !0 || g === !0)
                if ("string" == typeof a || b ? a = c + " ver. " + d + " | " + a : (b = a, a = c + " ver. " + d + " | "), "undefined" != typeof console) {
                    if ("error" == f) {
                        if (console.error) return console.error(a, b), void 0;
                        if (window.Error) throw new Error(a)
                    }
                    if ("info" == f && console.info) return console.info(a, b), void 0;
                    if ("warn" == f && console.warn) return console.warn(a, b), void 0;
                    console.log && console.log(a, b)
                } else window.debug && window.debug.log.apply(a, b)
        },
        h = !1,
        i = [/^http:\/\/(www|dipsy)?(-tc)?\.?pbs\.org/, /^http:\/\/(www|soup|ernie)?(-tc)?\.?pbskids\.org/, /^http:\/\/(dev|qa|demo)?(-tc)?\.?pbskids\.org/, /^http:\/\/jsfiddle\.net/, /^http:\/\/docs\.pbskids\.org/, /^http:\/\/(www)?(-tc)?\.pbskids\.wested\.org/];
    if (window.top != window) {
        g = document.referrer;
        for (var l in i)
            if (null !== g.match(i[l])) {
                h = !0, null !== g.match(/\.org\/producerplayer/) && (g = window.top.location.href);
                break
            } if (!h) return f("This site does not have permission to frame this PBS KIDS video player", null, "error", !0), void 0
    } else g = window.location.href;
    var o, p, q, r, s, t, u, m = window.location.hostname.match(/^((?!www(\-tc)?\.).+)pbskids\.org$/) ? "/" : "http://www-tc.pbskids.org/",
        n = m.replace("www-tc.", "") + "pbsk/video/api/",
        v = !1,
        w = function(a) {
            var b, c = "undefined" != typeof exports ? exports : window;
            if ("string" == typeof a) {
                b = a.split(".");
                for (var d in b) c[b[d]] || (c[b[d]] = {}), c = c[b[d]]
            }
            return c
        };
    ! function(a, b, c, d, e, f, g) {
        a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
            (a[e].q = a[e].q || []).push(arguments)
        }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
    }(window, document, "script", "//www.google-analytics.com/analytics.js", "__KIDS_Video_Tracking");
    var x = "network",
        y = "UA-4005067-1",
        z = "national",
        A = "UA-4005001-1",
        B = "operations",
        C = "UA-4699355-13",
        D = function(a, b, c, d, g) {
            a = "Video - " + o + " - " + a, d = void 0 === d || null === d || isNaN(d) ? void 0 : Math.round(d);
            for (var h = 0; h < g.length; h++) {
                var i = __KIDS_Video_Tracking.getByName(g[h]);
                i ? (e && f("_trackEvent()", {
                    accountName: g[h],
                    accountID: i.get("trackingId"),
                    category: a,
                    action: b,
                    label: c,
                    value: d
                }), __KIDS_Video_Tracking(g[h] + ".send", "event", a, b, c, d)) : f("No tracker for, '" + g[h] + "' ", null, "warn")
            }
        },
        E = function(a, b, c) {
            D(a, b, c || "", null, [B])
        },
        F = function(a, b) {
            D("Controls", a, b, null, [z])
        };
    w("org.pbskids"), org.pbskids.swfobject2_2 = org.pbskids.swfobject2_2 || function() {
            function A() {
                if (!t) {
                    try {
                        var a = i.getElementsByTagName("body")[0].appendChild(Q("span"));
                        a.parentNode.removeChild(a)
                    } catch (b) {
                        return
                    }
                    t = !0;
                    for (var c = l.length, d = 0; c > d; d++) l[d]()
                }
            }

            function B(a) {
                t ? a() : l[l.length] = a
            }

            function C(b) {
                if (typeof h.addEventListener != a) h.addEventListener("load", b, !1);
                else if (typeof i.addEventListener != a) i.addEventListener("load", b, !1);
                else if (typeof h.attachEvent != a) R(h, "onload", b);
                else if ("function" == typeof h.onload) {
                    var c = h.onload;
                    h.onload = function() {
                        c(), b()
                    }
                } else h.onload = b
            }

            function D() {
                k ? E() : F()
            }

            function E() {
                var c = i.getElementsByTagName("body")[0],
                    d = Q(b);
                d.setAttribute("type", e);
                var f = c.appendChild(d);
                if (f) {
                    var g = 0;
                    ! function() {
                        if (typeof f.GetVariable != a) {
                            var b = f.GetVariable("$version");
                            b && (b = b.split(" ")[1].split(","), y.pv = [parseInt(b[0], 10), parseInt(b[1], 10), parseInt(b[2], 10)])
                        } else if (10 > g) return g++, setTimeout(arguments.callee, 10), void 0;
                        c.removeChild(d), f = null, F()
                    }()
                } else F()
            }

            function F() {
                var b = m.length;
                if (b > 0)
                    for (var c = 0; b > c; c++) {
                        var d = m[c].id,
                            e = m[c].callbackFn,
                            f = {
                                success: !1,
                                id: d
                            };
                        if (y.pv[0] > 0) {
                            var g = P(d);
                            if (g)
                                if (!S(m[c].swfVersion) || y.wk && y.wk < 312)
                                    if (m[c].expressInstall && H()) {
                                        var h = {};
                                        h.data = m[c].expressInstall, h.width = g.getAttribute("width") || "0", h.height = g.getAttribute("height") || "0", g.getAttribute("class") && (h.styleclass = g.getAttribute("class")), g.getAttribute("align") && (h.align = g.getAttribute("align"));
                                        for (var i = {}, j = g.getElementsByTagName("param"), k = j.length, l = 0; k > l; l++) "movie" != j[l].getAttribute("name").toLowerCase() && (i[j[l].getAttribute("name")] = j[l].getAttribute("value"));
                                        I(h, i, d, e)
                                    } else J(g), e && e(f);
                            else U(d, !0), e && (f.success = !0, f.ref = G(d), e(f))
                        } else if (U(d, !0), e) {
                            var n = G(d);
                            n && typeof n.SetVariable != a && (f.success = !0, f.ref = n), e(f)
                        }
                    }
            }

            function G(c) {
                var d = null,
                    e = P(c);
                if (e && "OBJECT" == e.nodeName)
                    if (typeof e.SetVariable != a) d = e;
                    else {
                        var f = e.getElementsByTagName(b)[0];
                        f && (d = f)
                    } return d
            }

            function H() {
                return !u && S("6.0.65") && (y.win || y.mac) && !(y.wk && y.wk < 312)
            }

            function I(b, c, d, e) {
                u = !0, r = e || null, s = {
                    success: !1,
                    id: d
                };
                var g = P(d);
                if (g) {
                    "OBJECT" == g.nodeName ? (p = K(g), q = null) : (p = g, q = d), b.id = f, (typeof b.width == a || !/%$/.test(b.width) && parseInt(b.width, 10) < 310) && (b.width = "310"), (typeof b.height == a || !/%$/.test(b.height) && parseInt(b.height, 10) < 137) && (b.height = "137"), i.title = i.title.slice(0, 47) + " - Flash Player Installation";
                    var j = y.ie && y.win ? "ActiveX" : "PlugIn",
                        k = "MMredirectURL=" + h.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + j + "&MMdoctitle=" + i.title;
                    if (typeof c.flashvars != a ? c.flashvars += "&" + k : c.flashvars = k, y.ie && y.win && 4 != g.readyState) {
                        var l = Q("div");
                        d += "SWFObjectNew", l.setAttribute("id", d), g.parentNode.insertBefore(l, g), g.style.display = "none",
                            function() {
                                4 == g.readyState ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10)
                            }()
                    }
                    L(b, c, d)
                }
            }

            function J(a) {
                if (y.ie && y.win && 4 != a.readyState) {
                    var b = Q("div");
                    a.parentNode.insertBefore(b, a), b.parentNode.replaceChild(K(a), b), a.style.display = "none",
                        function() {
                            4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
                        }()
                } else a.parentNode.replaceChild(K(a), a)
            }

            function K(a) {
                var c = Q("div");
                if (y.win && y.ie) c.innerHTML = a.innerHTML;
                else {
                    var d = a.getElementsByTagName(b)[0];
                    if (d) {
                        var e = d.childNodes;
                        if (e)
                            for (var f = e.length, g = 0; f > g; g++) 1 == e[g].nodeType && "PARAM" == e[g].nodeName || 8 == e[g].nodeType || c.appendChild(e[g].cloneNode(!0))
                    }
                }
                return c
            }

            function L(c, d, f) {
                var g, h = P(f);
                if (y.wk && y.wk < 312) return g;
                if (h)
                    if (typeof c.id == a && (c.id = f), y.ie && y.win) {
                        var i = "";
                        for (var j in c) c[j] != Object.prototype[j] && ("data" == j.toLowerCase() ? d.movie = c[j] : "styleclass" == j.toLowerCase() ? i += ' class="' + c[j] + '"' : "classid" != j.toLowerCase() && (i += " " + j + '="' + c[j] + '"'));
                        var k = "";
                        for (var l in d) d[l] != Object.prototype[l] && (k += '<param name="' + l + '" value="' + d[l] + '" />');
                        h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + k + "</object>", n[n.length] = c.id, g = P(c.id)
                    } else {
                        var m = Q(b);
                        m.setAttribute("type", e);
                        for (var o in c) c[o] != Object.prototype[o] && ("styleclass" == o.toLowerCase() ? m.setAttribute("class", c[o]) : "classid" != o.toLowerCase() && m.setAttribute(o, c[o]));
                        for (var p in d) d[p] != Object.prototype[p] && "movie" != p.toLowerCase() && M(m, p, d[p]);
                        h.parentNode.replaceChild(m, h), g = m
                    } return g
            }

            function M(a, b, c) {
                var d = Q("param");
                d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
            }

            function N(a) {
                var b = P(a);
                b && "OBJECT" == b.nodeName && (y.ie && y.win ? (b.style.display = "none", function() {
                    4 == b.readyState ? O(a) : setTimeout(arguments.callee, 10)
                }()) : b.parentNode.removeChild(b))
            }

            function O(a) {
                var b = P(a);
                if (b) {
                    for (var c in b) "function" == typeof b[c] && (b[c] = null);
                    b.parentNode.removeChild(b)
                }
            }

            function P(a) {
                var b = null;
                try {
                    b = i.getElementById(a)
                } catch (c) {}
                return b
            }

            function Q(a) {
                return i.createElement(a)
            }

            function R(a, b, c) {
                a.attachEvent(b, c), o[o.length] = [a, b, c]
            }

            function S(a) {
                var b = y.pv,
                    c = a.split(".");
                return c[0] = parseInt(c[0], 10), c[1] = parseInt(c[1], 10) || 0, c[2] = parseInt(c[2], 10) || 0, b[0] > c[0] || b[0] == c[0] && b[1] > c[1] || b[0] == c[0] && b[1] == c[1] && b[2] >= c[2] ? !0 : !1
            }

            function T(c, d, e, f) {
                if (!y.ie || !y.mac) {
                    var g = i.getElementsByTagName("head")[0];
                    if (g) {
                        var h = e && "string" == typeof e ? e : "screen";
                        if (f && (v = null, w = null), !v || w != h) {
                            var j = Q("style");
                            j.setAttribute("type", "text/css"), j.setAttribute("media", h), v = g.appendChild(j), y.ie && y.win && typeof i.styleSheets != a && i.styleSheets.length > 0 && (v = i.styleSheets[i.styleSheets.length - 1]), w = h
                        }
                        y.ie && y.win ? v && typeof v.addRule == b && v.addRule(c, d) : v && typeof i.createTextNode != a && v.appendChild(i.createTextNode(c + " {" + d + "}"))
                    }
                }
            }

            function U(a, b) {
                if (x) {
                    var c = b ? "visible" : "hidden";
                    t && P(a) ? P(a).style.visibility = c : T("#" + a, "visibility:" + c)
                }
            }

            function V(b) {
                var c = /[\\\"<>\.;]/,
                    d = null != c.exec(b);
                return d && typeof encodeURIComponent != a ? encodeURIComponent(b) : b
            }
            var p, q, r, s, v, w, a = "undefined",
                b = "object",
                c = "Shockwave Flash",
                d = "ShockwaveFlash.ShockwaveFlash",
                e = "application/x-shockwave-flash",
                f = "SWFObjectExprInst",
                g = "onreadystatechange",
                h = window,
                i = document,
                j = navigator,
                k = !1,
                l = [D],
                m = [],
                n = [],
                o = [],
                t = !1,
                u = !1,
                x = !0,
                y = function() {
                    var f = typeof i.getElementById != a && typeof i.getElementsByTagName != a && typeof i.createElement != a,
                        g = j.userAgent.toLowerCase(),
                        l = j.platform.toLowerCase(),
                        m = l ? /win/.test(l) : /win/.test(g),
                        n = l ? /mac/.test(l) : /mac/.test(g),
                        o = /webkit/.test(g) ? parseFloat(g.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                        p = !1,
                        q = [0, 0, 0],
                        r = null;
                    if (typeof j.plugins != a && typeof j.plugins[c] == b) r = j.plugins[c].description, !r || typeof j.mimeTypes != a && j.mimeTypes[e] && !j.mimeTypes[e].enabledPlugin || (k = !0, p = !1, r = r.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), q[0] = parseInt(r.replace(/^(.*)\..*$/, "$1"), 10), q[1] = parseInt(r.replace(/^.*\.(.*)\s.*$/, "$1"), 10), q[2] = /[a-zA-Z]/.test(r) ? parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                    else if (typeof h.ActiveXObject != a) try {
                        var s = new ActiveXObject(d);
                        s && (r = s.GetVariable("$version"), r && (p = !0, r = r.split(" ")[1].split(","), q = [parseInt(r[0], 10), parseInt(r[1], 10), parseInt(r[2], 10)]))
                    } catch (t) {}
                    return {
                        w3: f,
                        pv: q,
                        wk: o,
                        ie: p,
                        win: m,
                        mac: n
                    }
                }();
            return function() {
                    y.w3 && ((typeof i.readyState != a && "complete" == i.readyState || typeof i.readyState == a && (i.getElementsByTagName("body")[0] || i.body)) && A(), t || (typeof i.addEventListener != a && i.addEventListener("DOMContentLoaded", A, !1), y.ie && y.win && (i.attachEvent(g, function() {
                        "complete" == i.readyState && (i.detachEvent(g, arguments.callee), A())
                    }), h == top && function() {
                        if (!t) {
                            try {
                                i.documentElement.doScroll("left")
                            } catch (a) {
                                return setTimeout(arguments.callee, 0), void 0
                            }
                            A()
                        }
                    }()), y.wk && function() {
                        return t ? void 0 : /loaded|complete/.test(i.readyState) ? (A(), void 0) : (setTimeout(arguments.callee, 0), void 0)
                    }(), C(A)))
                }(),
                function() {
                    y.ie && y.win && window.attachEvent("onunload", function() {
                        for (var a = o.length, b = 0; a > b; b++) o[b][0].detachEvent(o[b][1], o[b][2]);
                        for (var c = n.length, d = 0; c > d; d++) N(n[d]);
                        for (var e in y) y[e] = null;
                        y = null;
                        for (var f in org.pbskids.swfobject2_2) org.pbskids.swfobject2_2[f] = null;
                        org.pbskids.swfobject2_2 = null
                    })
                }(), {
                    registerObject: function(a, b, c, d) {
                        if (y.w3 && a && b) {
                            var e = {};
                            e.id = a, e.swfVersion = b, e.expressInstall = c, e.callbackFn = d, m[m.length] = e, U(a, !1)
                        } else d && d({
                            success: !1,
                            id: a
                        })
                    },
                    getObjectById: function(a) {
                        return y.w3 ? G(a) : void 0
                    },
                    embedSWF: function(c, d, e, f, g, h, i, j, k, l) {
                        var m = {
                            success: !1,
                            id: d
                        };
                        y.w3 && !(y.wk && y.wk < 312) && c && d && e && f && g ? (U(d, !1), B(function() {
                            e += "", f += "";
                            var n = {};
                            if (k && typeof k === b)
                                for (var o in k) n[o] = k[o];
                            n.data = c, n.width = e, n.height = f;
                            var p = {};
                            if (j && typeof j === b)
                                for (var q in j) p[q] = j[q];
                            if (i && typeof i === b)
                                for (var r in i) typeof p.flashvars != a ? p.flashvars += "&" + r + "=" + i[r] : p.flashvars = r + "=" + i[r];
                            if (S(g)) {
                                var s = L(n, p, d);
                                n.id == d && U(d, !0), m.success = !0, m.ref = s
                            } else {
                                if (h && H()) return n.data = h, I(n, p, d, l), void 0;
                                U(d, !0)
                            }
                            l && l(m)
                        })) : l && l(m)
                    },
                    switchOffAutoHideShow: function() {
                        x = !1
                    },
                    ua: y,
                    getFlashPlayerVersion: function() {
                        return {
                            major: y.pv[0],
                            minor: y.pv[1],
                            release: y.pv[2]
                        }
                    },
                    hasFlashPlayerVersion: S,
                    createSWF: function(a, b, c) {
                        return y.w3 ? L(a, b, c) : void 0
                    },
                    showExpressInstall: function(a, b, c, d) {
                        y.w3 && H() && I(a, b, c, d)
                    },
                    removeSWF: function(a) {
                        y.w3 && N(a)
                    },
                    createCSS: function(a, b, c, d) {
                        y.w3 && T(a, b, c, d)
                    },
                    addDomLoadEvent: B,
                    addLoadEvent: C,
                    getQueryParamValue: function(a) {
                        var b = i.location.search || i.location.hash;
                        if (b) {
                            if (/\?/.test(b) && (b = b.split("?")[1]), null == a) return V(b);
                            for (var c = b.split("&"), d = 0; d < c.length; d++)
                                if (c[d].substring(0, c[d].indexOf("=")) == a) return V(c[d].substring(c[d].indexOf("=") + 1))
                        }
                        return ""
                    },
                    expressInstallCallback: function() {
                        if (u) {
                            var a = P(f);
                            a && p && (a.parentNode.replaceChild(p, a), q && (U(q, !0), y.ie && y.win && (p.style.display = "block")), r && r(s)), u = !1
                        }
                    }
                }
        }(),
        function(c) {
            "function" == typeof b && b.amd && "function" == typeof a && a.specified && (a.specified("jquery-video/iscroll") || a.specified("jquery-video")) ? b("jquery-video/iscroll", [], function() {
                return org.pbskids.iScrollMOD = c(), org.pbskids.iScrollMOD
            }) : org.pbskids.iScrollMOD = c()
        }(function() {
            function E(a) {
                return "" === d ? a : (a = a.charAt(0).toUpperCase() + a.substr(1), d + a)
            }
            var a = Math,
                b = document,
                c = b.createElement("div").style,
                d = function() {
                    for (var b, a = "t,webkitT,MozT,msT,OT".split(","), d = 0, e = a.length; e > d; d++)
                        if (b = a[d] + "ransform", b in c) return a[d].substr(0, a[d].length - 1);
                    return !1
                }(),
                e = d ? "-" + d.toLowerCase() + "-" : "",
                f = E("transform"),
                g = E("transitionProperty"),
                h = E("transitionDuration"),
                i = E("transformOrigin"),
                j = E("transitionTimingFunction"),
                k = E("transitionDelay"),
                l = /android/gi.test(navigator.appVersion),
                m = /iphone|ipad/gi.test(navigator.appVersion),
                n = /hp-tablet/gi.test(navigator.appVersion),
                o = E("perspective") in c,
                p = Boolean(window.PointerEvent || window.MSPointerEvent),
                q = "ontouchstart" in window && !n,
                r = !!d,
                s = E("transition") in c,
                t = "onorientationchange" in window ? "orientationchange" : "resize",
                u = window.PointerEvent ? "pointerdown" : window.MSPointerEvent ? "MSPointerDown" : q ? "touchstart" : "mousedown",
                v = window.PointerEvent ? "pointermove" : window.MSPointerEvent ? "MSPointerMove" : q ? "touchmove" : "mousemove",
                w = window.PointerEvent ? "pointerup" : window.MSPointerEvent ? "MSPointerUp" : q ? "touchend" : "mouseup",
                x = window.PointerEvent ? "pointerout" : window.MSPointerEvent ? "MSPointerOut" : q ? "touchcancel" : b.attachEvent ? "mouseleave" : "mouseout",
                y = "onmousewheel" in window ? "mousewheel" : "onwheel" in window ? "wheel" : "DOMMouseScroll",
                z = function() {
                    if (d === !1) return !1;
                    var a = {
                        "": "transitionend",
                        webkit: "webkitTransitionEnd",
                        Moz: "transitionend",
                        O: "oTransitionEnd",
                        ms: "MSTransitionEnd"
                    };
                    return a[d]
                }(),
                A = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                        return setTimeout(a, 1)
                    }
                }(),
                B = function() {
                    return window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
                }(),
                C = o ? " translateZ(0)" : "",
                D = function(a, c) {
                    var k, d = this;
                    d.wrapper = "object" == typeof a ? a : b.getElementById(a), d.wrapper.style.overflow = "hidden", d.wrapper.style.position = "relative", d.scroller = d.wrapper.children[0], d.options = {
                        hScroll: !0,
                        vScroll: !0,
                        x: 0,
                        y: 0,
                        bounce: !0,
                        bounceLock: !1,
                        momentum: !0,
                        lockDirection: !0,
                        useTransform: !0,
                        useTransition: !1,
                        topOffset: 0,
                        checkDOMChanges: !1,
                        handleClick: !0,
                        dragScrollerWithMouse: !0,
                        scrollBarsOnTouchDevice: !0,
                        dragScrollBars: !1,
                        minBarWidth: 8,
                        minBarHeight: 8,
                        hScrollbar: !0,
                        vScrollbar: !0,
                        fixedScrollbar: l,
                        hideScrollbar: m,
                        fadeScrollbar: m && o,
                        scrollbarClass: "",
                        zoom: !1,
                        zoomMin: 1,
                        zoomMax: 4,
                        doubleTapZoom: 2,
                        wheelAction: "scroll",
                        snap: !1,
                        snapThreshold: 1,
                        onRefresh: null,
                        onBeforeScrollStart: function(a) {
                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                        },
                        onScrollStart: null,
                        onBeforeScrollMove: null,
                        onScrollMove: null,
                        onBeforeScrollEnd: null,
                        onScrollEnd: null,
                        onTouchEnd: null,
                        onDestroy: null,
                        onZoomStart: null,
                        onZoom: null,
                        onZoomEnd: null,
                        onAnimationEnd: null
                    };
                    for (k in c) d.options[k] = c[k];
                    d.x = d.options.x, d.y = d.options.y, d.options.useTransform = r && d.options.useTransform, d.options.hScrollbar = d.options.hScroll && d.options.hScrollbar, d.options.vScrollbar = d.options.vScroll && d.options.vScrollbar, d.options.zoom = d.options.useTransform && d.options.zoom, d.options.useTransition = s && d.options.useTransition, d.options.zoom && l && (C = ""), d.scroller.style[g] = d.options.useTransform ? e + "transform" : "top left", d.scroller.style[h] = "0", d.scroller.style[i] = "0 0", d.options.useTransition && (d.scroller.style[j] = "cubic-bezier(0.33,0.66,0.66,1)"), d.options.useTransform ? d.scroller.style[f] = "translate(" + d.x + "px," + d.y + "px)" + C : (d.scroller.style.position = "relative", d.scroller.style.top = d.y + "px", d.scroller.style.left = d.x + "px"), d.options.useTransition && (d.options.fixedScrollbar = !0), d.refresh(), d._bind(t, window), d._bind(u), q && !p || "none" == d.options.wheelAction || d._bind(y), d.options.checkDOMChanges && (d.checkDOMTime = setInterval(function() {
                        d._checkDOMChanges()
                    }, 500)), Date.now || (Date.now = function() {
                        return (new Date).valueOf()
                    })
                };
            return D.prototype = {
                enabled: !0,
                x: 0,
                y: 0,
                steps: [],
                scale: 1,
                currPageX: 0,
                currPageY: 0,
                pagesX: [],
                pagesY: [],
                aniTime: null,
                wheelZoomCount: 0,
                handleEvent: function(a) {
                    var b = this;
                    switch (a.target = a.srcElement || a.target, a.type) {
                        case u:
                            if (b.draggingScrollbar === !0) return;
                            switch (a.target) {
                                case b.vScrollbarIndicator:
                                case b.hScrollbarIndicator:
                                case b.vScrollbarWrapper:
                                case b.hScrollbarWrapper:
                                    b._dragBarStart(a);
                                    break;
                                default:
                                    if (!q && 0 !== a.button) return;
                                    b._start(a)
                            }
                            break;
                        case v:
                            b.draggingScrollbar === !0 ? b._dragBar(a) : b._move(a);
                            break;
                        case x:
                            if (p) break;
                        case w:
                            b.draggingScrollbar === !0 ? b._dragBarEnd(a) : b._end(a);
                            break;
                        case t:
                            b._resize();
                            break;
                        case y:
                            b._wheel(a);
                            break;
                        case z:
                            b._transitionEnd(a)
                    }
                },
                events: {},
                _checkDOMChanges: function() {
                    this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
                },
                _scrollbar: function(c) {
                    var g, d = this;
                    return d.draggingScrollbar && (d._unbind(v, document), d._unbind(w, document), d.scrollingDirection = null, d.draggingScrollbar = !1), d[c + "Scrollbar"] && d.options.dragScrollBars || d.dragScrollBars && (d._unbind(u, d[c + "ScrollbarIndicator"]), d._unbind(u, d[c + "ScrollbarWrapper"])), d.dragScrollBars = d.options.dragScrollBars, d[c + "Scrollbar"] ? (d[c + "ScrollbarWrapper"] || (g = b.createElement("div"), d.options.scrollbarClass ? g.className = d.options.scrollbarClass + c.toUpperCase() : (g.style.position = "relative", g.style.zIndex = "100", "h" == c ? (g.style.height = "7px", g.style.bottom = "1px", g.style.left = "2px", g.style.right = (d.vScrollbar ? "7" : "2") + "px") : (g.style.width = "7px", g.style.bottom = (d.hScrollbar ? "7" : "2") + "px", g.style.top = "2px", g.style.right = "1px")), g.style.overflow = "hidden", d._addCSSText(g, "opacity:" + (d.options.hideScrollbar ? "0" : "1")), d._addCSSText(g, e + "transition-property:opacity"), d._addCSSText(g, e + "transition-duration:" + (d.options.fadeScrollbar ? "350ms" : "0")), d.options.dragScrollBars === !1 && d._addCSSText(g, "pointer-events:none"), d.wrapper.appendChild(g), d[c + "ScrollbarWrapper"] = g, g = b.createElement("div"), d.options.scrollbarClass || (g.style.zIndex = "100", d._addCSSText(g, "background:rgba(0,0,0,0.5)"), d._addCSSText(g, "border:1px solid rgba(255,255,255,0.9)"), d._addCSSText(g, e + "background-clip:padding-box"), d._addCSSText(g, e + "box-sizing:border-box"), d._addCSSText(g, "h" == c ? "height:100%" : "width:100%"), d._addCSSText(g, e + "border-radius:3px"), d._addCSSText(g, "border-radius:3px")), d.options.dragScrollBars === !1 && d._addCSSText(g, "pointer-events:none"), g.style.position = "relative", d._addCSSText(g, e + "transition-property:" + e + "transform"), d._addCSSText(g, e + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), d._addCSSText(g, e + "transition-duration:0"), d._addCSSText(g, e + "transform: translate(0,0)" + C), d.options.useTransition && d._addCSSText(g, e + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), d[c + "ScrollbarWrapper"].appendChild(g), d[c + "ScrollbarIndicator"] = g), "h" == c ? (d.hScrollbarSize = d.hScrollbarWrapper.clientWidth, d.hScrollbarIndicatorSize = a.max(a.round(d.hScrollbarSize * d.hScrollbarSize / d.scrollerW), d.options.minBarWidth || 8), d.hScrollbarIndicator.style.width = d.hScrollbarIndicatorSize + "px", d.hScrollbarMaxScroll = d.hScrollbarSize - d.hScrollbarIndicator.offsetWidth, d.hScrollbarProp = d.hScrollbarMaxScroll / d.maxScrollX, d.hScrollbarOffset = null) : (d.vScrollbarSize = d.vScrollbarWrapper.clientHeight, d.vScrollbarIndicatorSize = a.max(a.round(d.vScrollbarSize * d.vScrollbarSize / d.scrollerH), d.options.minBarHeight || 8), d.vScrollbarIndicator.style.height = d.vScrollbarIndicatorSize + "px", d.vScrollbarMaxScroll = d.vScrollbarSize - d.vScrollbarIndicator.offsetHeight, d.vScrollbarProp = d.vScrollbarMaxScroll / d.maxScrollY, d.vScrollbarOffset = null), d.options.dragScrollBars && (d._bind(u, d[c + "ScrollbarIndicator"]), d._bind(u, d[c + "ScrollbarWrapper"])), d._scrollbarPos(c, !0), void 0) : (d[c + "ScrollbarWrapper"] && (r && (d[c + "ScrollbarIndicator"].style[f] = ""), d[c + "ScrollbarWrapper"].parentNode.removeChild(d[c + "ScrollbarWrapper"]), d[c + "ScrollbarWrapper"] = null, d[c + "ScrollbarIndicator"] = null), void 0)
                },
                _resize: function() {
                    var a = this;
                    setTimeout(function() {
                        a.refresh()
                    }, l ? 200 : 0)
                },
                _dragBarStart: function(a) {
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.cancelBubble = !0, a.stopPropagation && a.stopPropagation();
                    var c = this,
                        d = c.hScrollbarIndicator == a.target || c.hScrollbarWrapper == a.target ? "h" : "v";
                    c[d + "ScrollbarOffset"] || (c[d + "ScrollbarOffset"] = c._offset(c[d + "ScrollbarWrapper"])["h" == d ? "left" : "top"]), c.scrollingDirection = d, c._bind(v, b), c._bind(w, b), c.draggingScrollbar = !0, c._dragBar(a)
                },
                _dragBar: function(c) {
                    var d = this,
                        e = "h" == d.scrollingDirection ? ["h", "X", "Width"] : ["v", "Y", "Height"],
                        f = b.body,
                        g = b.documentElement,
                        h = {
                            X: d.x,
                            Y: d.y
                        };
                    h[e[1]] = a.max(0, a.min(d[e[0] + "ScrollbarMaxScroll"], (c["page" + e[1]] || c["client" + e[1]] + f.scrollTop + g.scrollTop) + d[e[0] + "ScrollbarOffset"] - d[e[0] + "ScrollbarIndicator"]["offset" + e[2]] / 2)) / d[e[0] + "ScrollbarProp"], d._pos(h.X, h.Y)
                },
                _dragBarEnd: function() {
                    var c = this;
                    c.draggingScrollbar = !1, c.scrollingDirection = null, c._unbind(v, b), c._unbind(w, b), c.options.onScrollEnd && c.options.onScrollEnd.call(c)
                },
                _pos: function(b, c) {
                    this.zoomed || (b = this.hScroll ? b ? b : 0 : 0, c = this.vScroll ? c ? c : 0 : 0, this.options.useTransform ? this.scroller.style[f] = "translate(" + b + "px," + c + "px) scale(" + this.scale + ")" + C : (b = a.round(b), c = a.round(c), this.scroller.style.left = b + "px", this.scroller.style.top = c + "px"), this.x = b, this.y = c, this._scrollbarPos("h"), this._scrollbarPos("v"))
                },
                _scrollbarPos: function(b, c) {
                    var g, d = this,
                        e = "h" == b ? d.x : d.y;
                    d[b + "Scrollbar"] && (e = d[b + "ScrollbarProp"] * e, 0 > e ? (d.options.fixedScrollbar || (g = d[b + "ScrollbarIndicatorSize"] + a.round(3 * e), 8 > g && (g = 8), d[b + "ScrollbarIndicator"].style["h" == b ? "width" : "height"] = g + "px"), e = 0) : e > d[b + "ScrollbarMaxScroll"] && (d.options.fixedScrollbar ? e = d[b + "ScrollbarMaxScroll"] : (g = d[b + "ScrollbarIndicatorSize"] - a.round(3 * (e - d[b + "ScrollbarMaxScroll"])), 8 > g && (g = 8), d[b + "ScrollbarIndicator"].style["h" == b ? "width" : "height"] = g + "px", e = d[b + "ScrollbarMaxScroll"] + (d[b + "ScrollbarIndicatorSize"] - g))), d[b + "ScrollbarWrapper"].style[k] = "0", d[b + "ScrollbarWrapper"].style.opacity = c && d.options.hideScrollbar ? "0" : "1", d.options.useTransform ? d[b + "ScrollbarIndicator"].style[f] = "translate(" + ("h" == b ? e + "px,0)" : "0," + e + "px)") + C : d[b + "ScrollbarIndicator"].style["h" == b ? "left" : "top"] = e + "px")
                },
                _start: function(b) {
                    var e, g, h, i, j, c = this,
                        d = q ? b.touches[0] : b;
                    c.enabled && (c.options.dragScrollerWithMouse || q || p) && (c.options.onBeforeScrollStart && c.options.onBeforeScrollStart.call(c, b), (c.options.useTransition || c.options.zoom) && c._transitionTime(0), c.moved = !1, c.animating = !1, c.zoomed = !1, c.distX = 0, c.distY = 0, c.absDistX = 0, c.absDistY = 0, c.dirX = 0, c.dirY = 0, c.options.zoom && q && b.touches.length > 1 && (i = a.abs(b.touches[0].pageX - b.touches[1].pageX), j = a.abs(b.touches[0].pageY - b.touches[1].pageY), c.touchesDistStart = a.sqrt(i * i + j * j), c.originX = a.abs(b.touches[0].pageX + b.touches[1].pageX - 2 * c.wrapperOffsetLeft) / 2 - c.x, c.originY = a.abs(b.touches[0].pageY + b.touches[1].pageY - 2 * c.wrapperOffsetTop) / 2 - c.y, c.options.onZoomStart && c.options.onZoomStart.call(c, b)), c.options.momentum && (c.options.useTransform ? (e = getComputedStyle(c.scroller, null)[f].replace(/[^0-9\-.,]/g, "").split(","), g = 1 * e[4], h = 1 * e[5]) : (g = 1 * getComputedStyle(c.scroller, null).left.replace(/[^0-9-]/g, ""), h = 1 * getComputedStyle(c.scroller, null).top.replace(/[^0-9-]/g, "")), (g != c.x || h != c.y) && (c.options.useTransition ? c._unbind(z) : B(c.aniTime), c.steps = [], c._pos(g, h))), c.absStartX = c.x, c.absStartY = c.y, c.startX = c.x, c.startY = c.y, c.pointX = d.pageX, c.pointY = d.pageY, c.startTime = b.timeStamp || Date.now(), c.options.onScrollStart && c.options.onScrollStart.call(c, b), c._bind(v), c._bind(w), c._bind(x))
                },
                _move: function(b) {
                    var j, k, l, c = this,
                        d = q ? b.touches[0] : b,
                        e = d.pageX - c.pointX,
                        g = d.pageY - c.pointY,
                        h = c.x + e,
                        i = c.y + g,
                        m = b.timeStamp || Date.now();
                    return c.options.onBeforeScrollMove && c.options.onBeforeScrollMove.call(c, b), c.options.zoom && q && b.touches.length > 1 ? (j = a.abs(b.touches[0].pageX - b.touches[1].pageX), k = a.abs(b.touches[0].pageY - b.touches[1].pageY), c.touchesDist = a.sqrt(j * j + k * k), c.zoomed = !0, l = 1 / c.touchesDistStart * c.touchesDist * this.scale, l < c.options.zoomMin ? l = .5 * c.options.zoomMin * Math.pow(2, l / c.options.zoomMin) : l > c.options.zoomMax && (l = 2 * c.options.zoomMax * Math.pow(.5, c.options.zoomMax / l)), c.lastScale = l / this.scale, h = this.originX - this.originX * c.lastScale + this.x, i = this.originY - this.originY * c.lastScale + this.y, this.scroller.style[f] = "translate(" + h + "px," + i + "px) scale(" + l + ")" + C, c.options.onZoom && c.options.onZoom.call(c, b), void 0) : (c.pointX = d.pageX, c.pointY = d.pageY, (h > 0 || h < c.maxScrollX) && (h = c.options.bounce ? c.x + e / 2 : h >= 0 || c.maxScrollX >= 0 ? 0 : c.maxScrollX), (i > c.minScrollY || i < c.maxScrollY) && (i = c.options.bounce ? c.y + g / 2 : i >= c.minScrollY || c.maxScrollY >= 0 ? c.minScrollY : c.maxScrollY), c.distX += e, c.distY += g, c.absDistX = a.abs(c.distX), c.absDistY = a.abs(c.distY), c.absDistX < 6 && c.absDistY < 6 || (c.options.lockDirection && (c.absDistX > c.absDistY + 5 ? (i = c.y, g = 0) : c.absDistY > c.absDistX + 5 && (h = c.x, e = 0)), c.moved = !0, c._pos(h, i), c.dirX = e > 0 ? -1 : 0 > e ? 1 : 0, c.dirY = g > 0 ? -1 : 0 > g ? 1 : 0, m - c.startTime > 300 && (c.startTime = m, c.startX = c.x, c.startY = c.y), c.options.onScrollMove && c.options.onScrollMove.call(c, b)), void 0)
                },
                _end: function(c) {
                    if (!q || 0 === c.touches.length) {
                        var g, i, o, p, r, s, t, d = this,
                            e = q ? c.changedTouches[0] : c,
                            j = {
                                dist: 0,
                                time: 0
                            },
                            k = {
                                dist: 0,
                                time: 0
                            },
                            l = (c.timeStamp || Date.now()) - d.startTime,
                            m = d.x,
                            n = d.y;
                        if (d._unbind(v), d._unbind(w), d._unbind(x), d.options.onBeforeScrollEnd && d.options.onBeforeScrollEnd.call(d, c), d.zoomed) return t = d.scale * d.lastScale, t = Math.max(d.options.zoomMin, t), t = Math.min(d.options.zoomMax, t), d.lastScale = t / d.scale, d.scale = t, d.x = d.originX - d.originX * d.lastScale + d.x, d.y = d.originY - d.originY * d.lastScale + d.y, d.scroller.style[h] = "200ms", d.scroller.style[f] = "translate(" + d.x + "px," + d.y + "px) scale(" + d.scale + ")" + C, d.zoomed = !1, d.refresh(), d.options.onZoomEnd && d.options.onZoomEnd.call(d, c), void 0;
                        if (!d.moved) return q && (d.doubleTapTimer && d.options.zoom ? (clearTimeout(d.doubleTapTimer), d.doubleTapTimer = null, d.options.onZoomStart && d.options.onZoomStart.call(d, c), d.zoom(d.pointX, d.pointY, 1 == d.scale ? d.options.doubleTapZoom : 1), d.options.onZoomEnd && setTimeout(function() {
                            d.options.onZoomEnd.call(d, c)
                        }, 200)) : this.options.handleClick && (d.doubleTapTimer = setTimeout(function() {
                            for (d.doubleTapTimer = null, g = e.target; 1 != g.nodeType;) g = g.parentNode;
                            "SELECT" != g.tagName && "INPUT" != g.tagName && "TEXTAREA" != g.tagName && (i = b.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, c.view, 1, e.screenX, e.screenY, e.clientX, e.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, 0, null), i._fake = !0, g.dispatchEvent(i))
                        }, d.options.zoom ? 250 : 0))), d._resetPos(200), d.options.onTouchEnd && d.options.onTouchEnd.call(d, c), void 0;
                        if (300 > l && d.options.momentum && (j = m ? d._momentum(m - d.startX, l, -d.x, d.scrollerW - d.wrapperW + d.x, d.options.bounce ? d.wrapperW : 0) : j, k = n ? d._momentum(n - d.startY, l, -d.y, d.maxScrollY < 0 ? d.scrollerH - d.wrapperH + d.y - d.minScrollY : 0, d.options.bounce ? d.wrapperH : 0) : k, m = d.x + j.dist, n = d.y + k.dist, (d.x > 0 && m > 0 || d.x < d.maxScrollX && m < d.maxScrollX) && (j = {
                                dist: 0,
                                time: 0
                            }), (d.y > d.minScrollY && n > d.minScrollY || d.y < d.maxScrollY && n < d.maxScrollY) && (k = {
                                dist: 0,
                                time: 0
                            })), j.dist || k.dist) return r = a.max(a.max(j.time, k.time), 10), d.options.snap && (o = m - d.absStartX, p = n - d.absStartY, a.abs(o) < d.options.snapThreshold && a.abs(p) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (s = d._snap(m, n), m = s.x, n = s.y, r = a.max(s.time, r))), d.scrollTo(a.round(m), a.round(n), r), d.options.onTouchEnd && d.options.onTouchEnd.call(d, c), void 0;
                        if (d.options.snap) return o = m - d.absStartX, p = n - d.absStartY, a.abs(o) < d.options.snapThreshold && a.abs(p) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (s = d._snap(d.x, d.y), (s.x != d.x || s.y != d.y) && d.scrollTo(s.x, s.y, s.time)), d.options.onTouchEnd && d.options.onTouchEnd.call(d, c), void 0;
                        d._resetPos(200), d.options.onTouchEnd && d.options.onTouchEnd.call(d, c)
                    }
                },
                _resetPos: function(a) {
                    var b = this,
                        c = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX : b.x,
                        e = b.y >= b.minScrollY || b.maxScrollY > 0 ? b.minScrollY : b.y < b.maxScrollY ? b.maxScrollY : b.y;
                    return c == b.x && e == b.y ? (b.moved && (b.moved = !1, b.options.onScrollEnd && b.options.onScrollEnd.call(b)), b.hScrollbar && b.options.hideScrollbar && ("webkit" == d && (b.hScrollbarWrapper.style[k] = "300ms"), b.hScrollbarWrapper.style.opacity = "0"), b.vScrollbar && b.options.hideScrollbar && ("webkit" == d && (b.vScrollbarWrapper.style[k] = "300ms"), b.vScrollbarWrapper.style.opacity = "0"), void 0) : (b.scrollTo(c, e, a || 0), void 0)
                },
                _wheel: function(a) {
                    var c, d, e, f, g, b = this;
                    if (b.enabled && "none" != b.options.wheelAction) {
                        if (a.preventDefault ? a.preventDefault() : a.returnValue = !1, "wheelDeltaX" in a) c = a.wheelDeltaX / 12, d = a.wheelDeltaY / 12;
                        else if ("deltaX" in a) c = a.deltaX / 12, d = a.deltaY / 12;
                        else if ("wheelDelta" in a) c = d = a.wheelDelta / 12;
                        else {
                            if (!("detail" in a)) return;
                            c = d = 3 * -a.detail
                        }
                        if ("zoom" == b.options.wheelAction) return g = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), g < b.options.zoomMin && (g = b.options.zoomMin), g > b.options.zoomMax && (g = b.options.zoomMax), g != b.scale && (!b.wheelZoomCount && b.options.onZoomStart && b.options.onZoomStart.call(b, a), b.wheelZoomCount++, b.zoom(a.pageX, a.pageY, g, 400), setTimeout(function() {
                            b.wheelZoomCount--, !b.wheelZoomCount && b.options.onZoomEnd && b.options.onZoomEnd.call(b, a)
                        }, 400)), void 0;
                        e = b.x + c, f = b.y + d, e > 0 ? e = 0 : e < b.maxScrollX && (e = b.maxScrollX), f > b.minScrollY ? f = b.minScrollY : f < b.maxScrollY && (f = b.maxScrollY), b.maxScrollY < 0 && b.scrollTo(e, f, 0)
                    }
                },
                _transitionEnd: function(a) {
                    var b = this;
                    a.target == b.scroller && (b._unbind(z), b._startAni())
                },
                _startAni: function() {
                    var e, f, g, b = this,
                        c = b.x,
                        d = b.y,
                        h = Date.now();
                    if (!b.animating) {
                        if (!b.steps.length) return b._resetPos(400), void 0;
                        if (e = b.steps.shift(), e.x == c && e.y == d && (e.time = 0), b.animating = !0, b.moved = !0, b.options.useTransition) return b._transitionTime(e.time), b._pos(e.x, e.y), b.animating = !1, e.time ? b._bind(z) : b._resetPos(0), void 0;
                        g = function() {
                            var j, k, i = Date.now();
                            return i >= h + e.time ? (b._pos(e.x, e.y), b.animating = !1, b.options.onAnimationEnd && b.options.onAnimationEnd.call(b), b._startAni(), void 0) : (i = (i - h) / e.time - 1, f = a.sqrt(1 - i * i), j = (e.x - c) * f + c, k = (e.y - d) * f + d, b._pos(j, k), b.animating && (b.aniTime = A(g)), void 0)
                        }, g()
                    }
                },
                _transitionTime: function(a) {
                    a += "ms", this.scroller.style[h] = a, this.hScrollbar && (this.hScrollbarIndicator.style[h] = a), this.vScrollbar && (this.vScrollbarIndicator.style[h] = a)
                },
                _momentum: function(b, c, d, e, f) {
                    var g = 6e-4,
                        h = a.abs(b) / c,
                        i = h * h / (2 * g),
                        j = 0,
                        k = 0;
                    return b > 0 && i > d ? (k = f / (6 / (i / h * g)), d += k, h = h * d / i, i = d) : 0 > b && i > e && (k = f / (6 / (i / h * g)), e += k, h = h * e / i, i = e), i *= 0 > b ? -1 : 1, j = h / g, {
                        dist: i,
                        time: a.round(j)
                    }
                },
                _offset: function(a) {
                    for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
                    return a != this.wrapper && (b *= this.scale, c *= this.scale), {
                        left: b,
                        top: c
                    }
                },
                _snap: function(b, c) {
                    var e, f, g, h, i, j, d = this;
                    for (g = d.pagesX.length - 1, e = 0, f = d.pagesX.length; f > e; e++)
                        if (b >= d.pagesX[e]) {
                            g = e;
                            break
                        } for (g == d.currPageX && g > 0 && d.dirX < 0 && g--, b = d.pagesX[g], i = a.abs(b - d.pagesX[d.currPageX]), i = i ? 500 * (a.abs(d.x - b) / i) : 0, d.currPageX = g, g = d.pagesY.length - 1, e = 0; g > e; e++)
                        if (c >= d.pagesY[e]) {
                            g = e;
                            break
                        } return g == d.currPageY && g > 0 && d.dirY < 0 && g--, c = d.pagesY[g], j = a.abs(c - d.pagesY[d.currPageY]), j = j ? 500 * (a.abs(d.y - c) / j) : 0, d.currPageY = g, h = a.round(a.max(i, j)) || 200, {
                        x: b,
                        y: c,
                        time: h
                    }
                },
                _bind: function(a, b, c, d) {
                    var e = this;
                    (b || this.scroller).addEventListener ? (b || this.scroller).addEventListener(a, d || this, !!c) : (this.events[a] = function(a) {
                        e.handleEvent.call(e, a)
                    }, (b || this.scroller).attachEvent("on" + a, this.events[a]))
                },
                _unbind: function(a, b, c, d) {
                    (b || this.scroller).removeEventListener ? (b || this.scroller).removeEventListener(a, d || this, !!c) : this.events && this.events[a] && (b || this.scroller).detachEvent("on" + a, this.events[a])
                },
                _hasClass: function(a, b) {
                    return new RegExp("(\\s|^)" + b + "(\\s|$)").test(a.className)
                },
                _addClass: function(a, b) {
                    var c = this;
                    c._hasClass(a, b) || (a.className += " " + b)
                },
                _removeClass: function(a, b) {
                    var c = this;
                    c._hasClass(a, b) && (a.className = a.className.replace(new RegExp("(\\s|^)" + b + "(\\s|$)"), " ").replace(/\s+/g, " ").replace(/^\s|\s$/, ""))
                },
                _toggleClass: function(a, b, c) {
                    var d = this;
                    void 0 === c && (c = !d._hasClass(a, b)), Boolean(c) ? d._addClass(a, b) : d._removeClass(a, b)
                },
                _hasCSSText: function(a, b) {
                    return new RegExp("(;|^)" + b + "(;|$)").test(a.style.cssText)
                },
                _addCSSText: function(a, b) {
                    var c = this;
                    c._hasCSSText(a, b) || (a.style.cssText = c._cleanCSSText(a.style.cssText + ";" + b))
                },
                _removeCSSText: function(a, b) {
                    var c = this;
                    c._hasClass(a, b) && (a.style.cssText = c._cleanCSSText(a.style.cssText.replace(new RegExp("(;|^)" + b + "(;|$)"), ";")))
                },
                _toggleCSSText: function(a, b, c) {
                    var d = this;
                    void 0 === c && (c = !d._hasCSSText(a, b)), Boolean(c) ? d._addCSSText(a, b) : d._removeCSSText(a, b)
                },
                _cleanCSSText: function(a) {
                    return a.replace(/\s+/g, " ").replace(/\s;|;\s/g, ";").replace(/;;/g, ";").replace(/^\s|\s$/, "").replace(/^;/, "")
                },
                _set_MS_Touch: function(a) {
                    var b = this,
                        c = window.PointerEvent ? "touch-action" : "-ms-touch-action";
                    b.wrapper.style[c] = a;
                    var d = b.wrapper.childNodes;
                    for (var e in d) d[e].style && (d[e].style[c] = a)
                },
                destroy: function() {
                    var a = this;
                    a.scroller.style[f] = "", p && a._set_MS_Touch("auto"), a.hScrollbar = !1, a.vScrollbar = !1, a._scrollbar("h"), a._scrollbar("v"), a._unbind(t, window), a._unbind(u), a._unbind(v), a._unbind(w), a._unbind(x), (!q || p) && a._unbind(y), a.options.useTransition && a._unbind(z), a.options.checkDOMChanges && clearInterval(a.checkDOMTime), a.options.onDestroy && a.options.onDestroy.call(a)
                },
                refresh: function() {
                    var d, e, f, g, c = this,
                        i = 0,
                        j = 0;
                    if (c.options) {
                        c.scale < c.options.zoomMin && (c.scale = c.options.zoomMin), c.wrapperW = c.wrapper.clientWidth || 1, c.wrapperH = c.wrapper.clientHeight || 1, c.minScrollY = -c.options.topOffset || 0, c.scrollerW = a.round(c.scroller.offsetWidth * c.scale), c.scrollerH = a.round((c.scroller.offsetHeight + c.minScrollY) * c.scale), c.maxScrollX = c.wrapperW - c.scrollerW, c.maxScrollY = c.wrapperH - c.scrollerH + c.minScrollY, c.dirX = 0, c.dirY = 0, c.hScroll = c.options.hScroll && c.maxScrollX < 0, c.vScroll = c.options.vScroll && (!c.options.bounceLock && !c.hScroll || c.scrollerH > c.wrapperH), c.hScrollbar = c.hScroll && c.options.hScrollbar && (c.options.scrollBarsOnTouchDevice || !q), c.vScrollbar = c.vScroll && c.options.vScrollbar && c.scrollerH > c.wrapperH && (c.options.scrollBarsOnTouchDevice || !q), d = c._offset(c.wrapper), c.wrapperOffsetLeft = -d.left, c.wrapperOffsetTop = -d.top;
                        var k = "iscroll_ie7_querySelector_class";
                        if (c.scroller.querySelector || (c.scroller.querySelector = function(a) {
                                var d = b.documentElement.firstChild,
                                    e = b.createElement("STYLE");
                                return d.appendChild(e), b.__qsResult = [], c._addClass(c.scroller, k), e.styleSheet.cssText = "." + k + " " + a + "{x:expression(document.__qsResult.push(this))}", window.scrollBy(0, 0), result = b.__qsResult[0] || null, d.removeChild(e), c._removeClass(c.scroller, k), result
                            }), c.scroller.querySelectorAll || (c.scroller.querySelectorAll = function(a) {
                                var d = b.documentElement.firstChild,
                                    e = b.createElement("STYLE"),
                                    f = [];
                                d.appendChild(e), b.__qsaels = [], c._addClass(c.scroller, k), e.styleSheet.cssText = "." + k + " " + a + "{x:expression(document.__qsaels.push(this))}", window.scrollBy(0, 0);
                                for (var g in b.__qsaels) f.push(b.__qsaels[g]);
                                return d.removeChild(e), c._removeClass(c.scroller, k), f
                            }), "string" == typeof c.options.snap)
                            for (c.pagesX = [], c.pagesY = [], g = c.scroller.querySelectorAll(c.options.snap), e = 0, f = g.length; f > e; e++) i = c._offset(g[e]), i.left += c.wrapperOffsetLeft, i.top += c.wrapperOffsetTop, c.pagesX[e] = i.left < c.maxScrollX ? c.maxScrollX : i.left * c.scale, c.pagesY[e] = i.top < c.maxScrollY ? c.maxScrollY : i.top * c.scale;
                        else if (c.options.snap) {
                            for (c.pagesX = []; i >= c.maxScrollX;) c.pagesX[j] = i, i -= c.wrapperW, j++;
                            for (c.maxScrollX % c.wrapperW && (c.pagesX[c.pagesX.length] = c.maxScrollX - c.pagesX[c.pagesX.length - 1] + c.pagesX[c.pagesX.length - 1]), i = 0, j = 0, c.pagesY = []; i >= c.maxScrollY;) c.pagesY[j] = i, i -= c.wrapperH, j++;
                            c.maxScrollY % c.wrapperH && (c.pagesY[c.pagesY.length] = c.maxScrollY - c.pagesY[c.pagesY.length - 1] + c.pagesY[c.pagesY.length - 1])
                        }
                        c._scrollbar("h"), c._scrollbar("v"), c.zoomed || (c.scroller.style[h] = "0", c._resetPos(200)), c._toggleClass(c.scroller, "noHScrollBar", c.maxScrollX >= 0), c._toggleClass(c.scroller, "noVScrollBar", c.maxScrollY >= 0), c._toggleClass(c.scroller, "noScrollBars", c.maxScrollX >= 0 && c.maxScrollY >= 0), p && c._set_MS_Touch(c.enabled ? "none" : "auto"), c.options.onRefresh && c.options.onRefresh.call(c)
                    }
                },
                scrollTo: function(a, b, c, d) {
                    var g, h, e = this,
                        f = a;
                    for (e.stop(), f.length || (f = [{
                            x: a,
                            y: b,
                            time: c,
                            relative: d
                        }]), g = 0, h = f.length; h > g; g++) f[g].relative && (f[g].x = e.x - f[g].x, f[g].y = e.y - f[g].y), e.steps.push({
                        x: f[g].x,
                        y: f[g].y,
                        time: f[g].time || 0
                    });
                    e._startAni()
                },
                scrollToElement: function(b, c) {
                    var e, d = this;
                    b = b.nodeType ? b : d.scroller.querySelector(b), b && (e = d._offset(b), e.left += d.wrapperOffsetLeft, e.top += d.wrapperOffsetTop, off = d._offset(d.scroller), e.left -= d.wrapperOffsetLeft + off.left, e.top -= d.wrapperOffsetTop + off.top, e.left = e.left > 0 ? 0 : e.left < d.maxScrollX ? d.maxScrollX : e.left, e.top = e.top > d.minScrollY ? d.minScrollY : e.top < d.maxScrollY ? d.maxScrollY : e.top, c = void 0 === c ? a.max(2 * a.abs(e.left), 2 * a.abs(e.top)) : c, d.scrollTo(e.left, e.top, c))
                },
                scrollToPage: function(a, b, c) {
                    var e, f, d = this;
                    c = void 0 === c ? 400 : c, d.options.onScrollStart && d.options.onScrollStart.call(d), d.options.snap ? (a = "next" == a ? d.currPageX + 1 : "prev" == a ? d.currPageX - 1 : a, b = "next" == b ? d.currPageY + 1 : "prev" == b ? d.currPageY - 1 : b, a = 0 > a ? 0 : a > d.pagesX.length - 1 ? d.pagesX.length - 1 : a, b = 0 > b ? 0 : b > d.pagesY.length - 1 ? d.pagesY.length - 1 : b, d.currPageX = a, d.currPageY = b, e = d.pagesX[a], f = d.pagesY[b]) : (e = -d.wrapperW * a, f = -d.wrapperH * b, e < d.maxScrollX && (e = d.maxScrollX), f < d.maxScrollY && (f = d.maxScrollY)), d.scrollTo(e, f, c)
                },
                disable: function() {
                    this.stop(), this._resetPos(0), this.enabled = !1, p && this._set_MS_Touch("auto"), this._unbind(v), this._unbind(w), this._unbind(x), this.draggingScrollbar && (this._unbind(v, document), this._unbind(w, document), this.scrollingDirection = null, this.draggingScrollbar = !1)
                },
                enable: function() {
                    this.enabled = !0, p && this._set_MS_Touch("none")
                },
                stop: function() {
                    this.options.useTransition ? this._unbind(z) : B(this.aniTime), this.steps = [], this.moved = !1, this.animating = !1
                },
                zoom: function(a, b, c, d) {
                    var e = this,
                        g = c / e.scale;
                    e.options.useTransform && (e.zoomed = !0, d = void 0 === d ? 200 : d, a = a - e.wrapperOffsetLeft - e.x, b = b - e.wrapperOffsetTop - e.y, e.x = a - a * g + e.x, e.y = b - b * g + e.y, e.scale = c, e.refresh(), e.x = e.x > 0 ? 0 : e.x < e.maxScrollX ? e.maxScrollX : e.x, e.y = e.y > e.minScrollY ? e.minScrollY : e.y < e.maxScrollY ? e.maxScrollY : e.y, e.scroller.style[h] = d + "ms", e.scroller.style[f] = "translate(" + e.x + "px," + e.y + "px) scale(" + c + ")" + C, e.zoomed = !1)
                },
                isReady: function() {
                    return !this.moved && !this.zoomed && !this.animating
                }
            }, c = null, D
        }),
        function(c) {
            "function" == typeof b && b.amd && "function" == typeof a && a.specified ? a.specified("jquery-video") ? b("jquery-video", ["jquery", "jquery-video/iscroll"], c) : window.jQuery || window.$ ? c(window.jQuery || window.$, null) : (b("jquery-video", ["jquery", "jquery-video/iscroll"], c), a(["jquery-video"])) : c(window.jQuery || window.$, null)
        }(function(a, b) {
            return function(a, b, c) {
                function l() {
                    f = b[g](function() {
                        d.each(function() {
                            var b = a(this),
                                c = b.width(),
                                d = b.height(),
                                e = a.data(this, i);
                            (c !== e.w || d !== e.h) && b.trigger(h, [e.w = c, e.h = d])
                        }), l()
                    }, e[j])
                }
                var f, d = a([]),
                    e = a.resize = a.extend(a.resize, {}),
                    g = "setTimeout",
                    h = "resize",
                    i = h + "-special-event",
                    j = "delay",
                    k = "throttleWindow";
                e[j] = 250, e[k] = !0, a.event.special[h] = {
                    setup: function() {
                        if (!e[k] && this[g]) return !1;
                        var b = a(this);
                        d = d.add(b), a.data(this, i, {
                            w: b.width(),
                            h: b.height()
                        }), 1 === d.length && l()
                    },
                    teardown: function() {
                        if (!e[k] && this[g]) return !1;
                        var b = a(this);
                        d = d.not(b), b.removeData(i), d.length || clearTimeout(f)
                    },
                    add: function(b) {
                        function f(b, e, f) {
                            var g = a(this),
                                h = a.data(this, i);
                            h.w = e !== c ? e : g.width(), h.h = f !== c ? f : g.height(), d.apply(this, arguments)
                        }
                        if (!e[k] && this[g]) return !1;
                        var d;
                        return a.isFunction(b) ? (d = b, f) : (d = b.handler, b.handler = f, void 0)
                    }
                }
            }(a, this), w("org.pbskids.video"), org.pbskids.video.version = d, org.pbskids.video.Player = function(b, c) {
                function Kb() {
                    Ib.debug = Boolean(Ib.debug && e), org.pbskids.video.PlayerEvent.debug = !1, org.pbskids.video.VideoEvent.debug = !1, org.pbskids.video.VideoErrorEvent.debug = !1, __KIDS_Video_Tracking(function() {
                        __KIDS_Video_Tracking("create", y, "auto", {
                            name: x
                        }), __KIDS_Video_Tracking("create", A, "auto", {
                            name: z
                        }), __KIDS_Video_Tracking("create", C, "auto", {
                            name: B
                        }), Hc(Gc, [Fc, [Lb]])
                    })
                }

                function Lb() {
                    f("_construct()"), xb || vb || wb || ub ? Nb() : Mb()
                }

                function Mb() {
                    var c = {
                            allowFullScreen: "true",
                            scale: "default",
                            allowscriptaccess: "always",
                            menu: "false",
                            wmode: "opaque",
                            bgcolor: "#000000"
                        },
                        e = {
                            id: b + "-swf",
                            name: b + "-swf"
                        },
                        f = {
                            isTouchDevice: Cb,
                            onVideoClick: Ib.onVideoClick,
                            onHoverOverlay: "{'url'       : '" + Ib.onHoverOverlay.url + "', " + "'width'     : '" + Ib.onHoverOverlay.width + "', " + "'height'    : '" + Ib.onHoverOverlay.height + "', " + "'fs_url'    : '" + Ib.onHoverOverlay.fs_url + "', " + "'fs_width'  : '" + Ib.onHoverOverlay.fs_width + "', " + "'fs_height' : '" + Ib.onHoverOverlay.fs_height + "', " + "'alignment' : '" + "TR" + "'  " + "}",
                            playButtonOverlay: "{'url'       : '" + Ib.playIconOverlay.url + "', " + "'width'     : '" + Ib.playIconOverlay.width + "', " + "'height'    : '" + Ib.playIconOverlay.height + "', " + "'color'     : '" + Ib.playIconOverlay.color + "', " + "'opacity'   : '" + Ib.playIconOverlay.opacity + "', " + "'alignment' : '" + "MM" + "'  " + "}",
                            loadingOverlay: "{'url'       : '" + Ib.loadingOverlay.url + "', " + "'swf'       : '" + Ib.loadingOverlay.swf + "', " + "'width'     : '" + Ib.loadingOverlay.width + "', " + "'height'    : '" + Ib.loadingOverlay.height + "', " + "'color'     : '" + Ib.loadingOverlay.color + "', " + "'opacity'   : '" + Ib.loadingOverlay.opacity + "', " + "'alignment' : '" + "MM" + "'  " + "}",
                            PlayerEvents: "{ 'PlayerReady'         : 'org.pbskids.video.PlayerEvent.dispatchEvent'}",
                            VideoEvents: "{ 'VideoEnd'            : 'org.pbskids.video.VideoEvent.dispatchEvent',  'MuteChange'          : 'org.pbskids.video.VideoEvent.dispatchEvent',  'VolumeChange'        : 'org.pbskids.video.VideoEvent.dispatchEvent',  'PlayStateChange'     : 'org.pbskids.video.VideoEvent.dispatchEvent',  'DurationChange'      : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CurrentTimeChange'   : 'org.pbskids.video.VideoEvent.dispatchEvent',  'SeekingChange'       : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CaptionsStateChange' : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CanPlayStateChange'  : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CanSeekStateChange'  : 'org.pbskids.video.VideoEvent.dispatchEvent',  'LoadStateChange'     : 'org.pbskids.video.VideoEvent.dispatchEvent'  }",
                            VideoErrorEvents: "{ 'GeoRestricted' : 'org.pbskids.video.VideoErrorEvent.dispatchEvent',  'VideoNotFound' : 'org.pbskids.video.VideoErrorEvent.dispatchEvent',  'VideoExpired'  : 'org.pbskids.video.VideoErrorEvent.dispatchEvent',  'NoResponse'    : 'org.pbskids.video.VideoErrorEvent.dispatchEvent'  }"
                        };
                    a(document).on(org.pbskids.video.PlayerEvent.PLAYER_READY, Pb), a("<div/>").prop("id", "temp-swf-container").append(a("<div/>").prop("id", "replace-with-flash-content")).insertBefore("#" + b), org.pbskids.swfobject2_2.embedSWF(d, "replace-with-flash-content", "100%", "100%", i, h, f, c, e, Ob)
                }

                function Nb() {
                    if (xb || tb || vb || wb || ub) {
                        if (w = a("video#" + b).length > 0 ? a("video#" + b) : a("#" + b + " video").length > 0 ? a("#" + b + " video").first() : a("<video/>").appendTo("#" + b), u = "html5", t = vb || wb || ub ? "flash" : "iphone", a("html").addClass("no-flash-video"), yb || (I = a("<div/>").insertAfter(a("#" + b)).css({
                                position: "relative",
                                "z-index": "200",
                                height: "0",
                                overflow: "hidden"
                            }), Ib.playIconOverlay.url && (L = a("<div/>").appendTo(I).addClass("overlay").append(a("<img/>").prop("src", Ib.playIconOverlay.url).css({
                                "line-height": "normal",
                                "vertical-align": "middle",
                                "max-height": "100%"
                            })).css({
                                width: "100%",
                                height: "100%",
                                "text-align": "center",
                                "line-height": "inherit",
                                position: "absolute",
                                "background-image": "url(" + m + "pbsk/video/img/background_" + Ib.playIconOverlay.color + "_opacity_" + Ib.playIconOverlay.opacity + ".png)",
                                cursor: "pointer"
                            }).hide().click(lc), Ib.playIconOverlay.width && a("img", L).css("width", Ib.playIconOverlay.width), Ib.playIconOverlay.height && a("img", L).css("height", Ib.playIconOverlay.height)), Ib.loadingOverlay.url && (K = a("<div/>").appendTo(I).addClass("overlay").append(a("<img/>").prop("src", Ib.loadingOverlay.url).css({
                                "line-height": "normal",
                                "vertical-align": "middle",
                                "max-height": "100%"
                            })).css({
                                width: "100%",
                                height: "100%",
                                "text-align": "center",
                                "line-height": "inherit",
                                position: "absolute",
                                "background-image": "url(" + m + "pbsk/video/img/background_" + Ib.loadingOverlay.color + "_opacity_" + Ib.loadingOverlay.opacity + ".png)"
                            }).hide(), Ib.loadingOverlay.width && a("img", K).css("width", Ib.loadingOverlay.width), Ib.loadingOverlay.height && a("img", K).css("height", Ib.loadingOverlay.height)), (Ib.onVideoClick || Ib.onHoverOverlay.url) && (M = a("<div/>").prependTo(I).addClass("overlay").css({
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                cursor: "pointer"
                            }), Ib.onVideoClick && M.click(Ac), Ib.onHoverOverlay.url && (a("<img/>").prop("src", Ib.onHoverOverlay.url).css({
                                bottom: "4px",
                                right: "4px",
                                position: "absolute",
                                "max-height": "100%"
                            }).appendTo(M), Ib.onHoverOverlay.width && a("img", M).css("width", Ib.onHoverOverlay.width), Ib.onHoverOverlay.height && a("img", M).css("height", Ib.onHoverOverlay.height), Cb || (a("img", M).hide(), M.hover(function() {
                                a("img", M).show()
                            }, function() {
                                a("img", M).hide()
                            })))), J = a("<div/>").appendTo(I).addClass("overlay").css({
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                "background-image": "url(" + m + "pbsk/video/img/background_black_opacity_80.png)"
                            }).hide()), "undefined" != typeof document.cancelFullScreen) mb = !0, ob = "legacy-webkit";
                        else if (xb || tb && !vb) mb = !0, ob = "webkit";
                        else
                            for (var c = 0; c < pb.length; c++)
                                if (ob = pb[c], "undefined" != typeof document[ob + "CancelFullScreen"]) {
                                    mb = !0;
                                    break
                                } Yb(), Wb(), Qb()
                    } else Rb()
                }

                function Ob(c) {
                    Ib.debug && f(" _onFlashCheck() :: e = ", c), c.success ? (mb = !0, v = !0, u = "flash", t = "flash", w = c.ref, a("#" + b).remove(), a("#temp-swf-container").prop("id", b).css({
                        overflow: "hidden"
                    }), a("html").addClass("flash-video"), R ? Qb(null) : Dc()) : (a("#temp-swf-container").remove(), Nb())
                }

                function Pb(b) {
                    a(document).off(org.pbskids.video.PlayerEvent.PLAYER_READY, Pb), Ib.debug && f(" _onFlashPlayerReady() "), R = !0, v && Qb(b)
                }

                function Qb(d) {
                    Ib.debug && f("_initSuccessful()"), H.registerControl("muteToggleControl", Ib.muteToggleControl || ""), H.registerControl("pauseToggleControl", Ib.pauseToggleControl || ""), H.registerControl("captionsToggleControl", Ib.captionsToggleControl || ""), H.registerControl("timerRemaining", Ib.timerRemaining || ""), H.registerControl("timerCurrent", Ib.timerCurrent || ""), H.registerControl("timerDuration", Ib.timerDuration || ""), H.registerControl("scrubber", Ib.scrubber || ""), H.registerControl("volumeDisplay", Ib.volumeDisplay || ""), H.registerControl("volumeSlider", Ib.volumeSlider || ""), H.registerControl("verticalVolumeSlider", Ib.verticalVolumeSlider || ""), a(window).resize(Cc), a(document).on(org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, qc), a(document).on(org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, uc), a(document).on(org.pbskids.video.VideoEvent.DURATION_CHANGE, vc), a(document).on(org.pbskids.video.VideoEvent.SEEKING_CHANGE, tc), a(document).on(org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, rc), a(document).on(org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, sc), a(document).on(org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, pc), a(document).on(org.pbskids.video.VideoEvent.VIDEO_END, wc), Cb || (a(document).on(org.pbskids.video.VideoEvent.MUTE_CHANGE, xc), a(document).on(org.pbskids.video.VideoEvent.VOLUME_CHANGE, yc), v && a(document).on(org.pbskids.video.VideoEvent.CAPTIONS_STATE_CHANGE, zc)), Ib.debug && f("Added VideoEvent Listeners"), c.disableKeyboard === !0 || Cb && !Bb || a(document).on("keydown", ub ? Jc : Kc), Ib.debug && f("Enabled KeyBoard Navigation");
                    var e = {
                        success: !0,
                        id: a(w).prop("id"),
                        ref: w,
                        player: H,
                        playerName: o,
                        affiliateId: p,
                        playerType: u,
                        videoType: t,
                        isFlashPlayer: v,
                        message: ""
                    };
                    "function" == typeof Ib.onPlayerComplete && Ib.onPlayerComplete.call(this, e), d || (e.eventType = org.pbskids.video.PlayerEvent.PLAYER_READY, org.pbskids.video.PlayerEvent.dispatchEvent(e)), f("_initSuccessful(): call onPlayerComplete() : data = ", e), a("#" + b).resize(Dc), Dc(), Ib.debug && (f("--------------------------------------------------"), f("supportsFullScreen: ", mb, "info"), f("browserPrefix:      ", ob, "info"), f("fullScreenEvent:    ", nb, "info"), f("--------------------------------------------------"), f("isFlashPlayer:      ", v, "info"), f("videoType:          ", t, "info"), f("playerType:         ", u, "info"), f("--------------------------------------------------"), f("IS_SAFARI:          ", tb, "info"), f("--------------------------------------------------"), f("IS_GOOGLE_TV:       ", ub, "info"), f("IS_ANDROID:         ", vb, "info"), f("IS_KINDLE_FIRE:     ", wb, "info"), f("IS_iDEVICE:         ", xb, "info"), f("IS_iPOCKET:         ", yb, "info"), f("IS_iPAD:            ", zb, "info"), f("IS_TOUCH_PAD:       ", Ab, "info"), f("HAS_TOUCH:          ", Cb, "info"), f("HAS_POINTER 10:     ", window.MSPointerEvent, "info"), f("HAS_POINTER 11:     ", window.PointerEvent, "info"), f("--------------------------------------------------"), f("UA-String:          ", navigator.appVersion, "info"), f("Plugin Version:     ", org.pbskids.video.version, "info")), c.muteOnLoad && H.mute()
                }

                function Rb() {
                    var a = {
                        success: !1,
                        id: b,
                        ref: null,
                        player: null,
                        message: 'To watch videos from your favorite PBS KIDS shows, please install <a href="http://get.adobe.com/flashplayer/">Adobe Flash</a>, or watch on an iPad, iPhone, or iPod Touch.'
                    };
                    "function" == typeof Ib.onPlayerComplete && Ib.onPlayerComplete.call(this, a)
                }

                function Sb(b, c, d, e, g) {
                    if (!b) {
                        var h = "Comscore Error: Missing Mandatory Tag: Client ID (c2 tag)";
                        return f(h, null, "warn", !0), void 0
                    }
                    if (!b.toString().match(/^\d{7}$/)) {
                        var h = "Comscore Error: Invalid Mandatory Tag: Client ID (c2 tag) must be a 7-digit unique client ID";
                        return f(h, null, "warn", !0), void 0
                    }
                    if (!c) {
                        var h = "Comscore Error: Missing Mandatory Tag: Video Type (c5 tag)";
                        return f(h, null, "warn", !0), void 0
                    }
                    if (!c.toString().match(/^(0[1-6|9]|1[0-3])$/)) {
                        var h = "Comscore Error: Invalid Mandatory Tag: Video Type (c5 tag) must be a 2-digit content type (video type) identifier {01-06, 09-13}";
                        return f(h, null, "warn", !0), void 0
                    }
                    var i = new Array(("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/p?", "?c1=", 1, "&c2=", escape(b), "&c5=", escape(c), "&c3=", escape(d || ""), "&c4=", escape(e || ""), "&c6=", escape(g || ""), "&c7=", escape(document.location.href), "&c8=", escape(document.title), "&c9=", "", "&c10=", "", "&rn=", Math.random(), "&cv=", "2.0").join("");
                    qb || (qb = a("<img/>").prop("id", "pbskids-comscore-video-beacon").appendTo(a("body"))), qb.prop("src", i)
                }

                function Tb(a, b) {
                    if (b && T) {
                        T = !1, a = Math.max(a || 0, 0);
                        var d, e = 100 * (a / b.duration);
                        isNaN(e) && (e = 0), d = 0 == e ? "0%" : 5 > e ? "0-5%" : 10 > e ? "5-10%" : 20 > e ? "10-20%" : 30 > e ? "20-30%" : 40 > e ? "30-40%" : 50 > e ? "40-50%" : 60 > e ? "50-60%" : 70 > e ? "60-70%" : 80 > e ? "70-80%" : 90 > e ? "80-90%" : 95 > e ? "90-95%" : "95-100%", org.pbskids.video.VideoEvent.dispatchEvent({
                            eventType: org.pbskids.video.VideoEvent.VIDEO_VIEWED,
                            release: b,
                            percentViewed: e
                        }), D("Duration Viewed", Vb(b), d, Math.ceil(a), [x, z, b.series_nola])
                    }
                }

                function Ub(a, b) {
                    if (b) {
                        switch (a.toLowerCase()) {
                            case "mediacomplete":
                                a = "MediaComplete";
                                break;
                            case "mediastart":
                                a = "MediaStart";
                                var g, c = 3005420,
                                    d = 3005420,
                                    e = 7197992,
                                    f = "";
                                switch ((b.series_title && b.series_title.match(/^sesame street$/i) || b.series_nola && b.series_nola.match(/^sesa$/i)) && (f = "sesame"), (b.type || "").toLowerCase()) {
                                    case "episode":
                                        g = "03";
                                        break;
                                    case "clip":
                                        g = "02";
                                        break;
                                    case "ad":
                                        g = "09";
                                        break;
                                    default:
                                        g = "00"
                                }
                                Sb(c, g, d, e, f), org.pbskids.video.VideoEvent.dispatchEvent({
                                    eventType: org.pbskids.video.VideoEvent.VIDEO_START,
                                    release: b
                                });
                                break;
                            default:
                                return
                        }
                        D("Playback", a, Vb(b), null, [x, z, b.series_nola])
                    }
                }

                function Vb(a) {
                    var b = (a.series_title || "No-Series-Title") + " | " + (a.title || "No-Title") + " | " + (a.media_id || "No-Media-ID") + " | " + (a.type || "No-Video-Type");
                    return b
                }

                function Wb() {
                    for (var a in lb) xb && "volumechange" == lb[a] || (w.bind(lb[a], oc), Ib.debug && f('Bound to media event, "' + lb[a] + '"'))
                }

                function Yb() {
                    mb && "legacy-webkit" != ob && (xb ? (a(w).on("webkitbeginfullscreen", Bc), a(w).on("webkitendfullscreen", Bc), nb = "webkitbeginfullscreen && webkitendfullscreen") : (nb = ob + "fullscreenchange", "moz" == ob ? a(document).on(nb, Bc) : a(w).on(nb, Bc)))
                }

                function Zb(b, c, d, e) {
                    b && ("function" == typeof d && b.each(function() {
                        a(this).off(Eb), a(this).on(Eb, d)
                    }), "function" == typeof c && b.each(function() {
                        a(this).off("click"), a(this).on("click", c)
                    }), b.removeClass("disabled-control").addClass("enabled-control").css(e || {}))
                }

                function $b(b, c, d, e) {
                    b && (b.addClass("disabled-control").removeClass("enabled-control").css(e || {}), "function" == typeof d && b.each(function() {
                        a(this).off(Eb, d)
                    }), "function" == typeof c && b.each(function() {
                        a(this).off("click", c)
                    }))
                }

                function _b() {
                    return vb && !mb || wb ? (ac(), void 0) : (hb && (Zb(hb.scrubber, null, fc), Zb(hb.track), Zb(hb.thumb)), void 0)
                }

                function ac() {
                    hb && ($b(hb.scrubber, null, fc), $b(hb.track), $b(hb.thumb, null, null, {
                        left: "0"
                    }), jc(null))
                }

                function bc() {
                    kb && !O && (Zb(kb.scrubber, null, gc), Zb(kb.track), Zb(kb.thumb), O = !0)
                }

                function cc() {
                    ec(kb), yc({
                        volume: 1 == H.muted() ? 0 : H.volume()
                    })
                }

                function dc() {
                    ec(hb), hb.scrubTo(X / Z)
                }

                function ec(a, b) {
                    if (a.bounds = null, a.scrubbing = !1, "function" == typeof b && (a.updateFunction = b), "none" == a.scrubber.css("display").toLowerCase() && a.scrubber.css("display", "block"), a && a.track.width() + a.track.height() > 0) {
                        var c = a.track.offset(),
                            d = -c.top,
                            e = -c.left,
                            f = a.track.width(),
                            g = a.track.height(),
                            h = a.thumb.outerWidth(),
                            i = a.thumb.outerHeight();
                        a.scrubber.css("display", ""), a.bounds = {
                            top: d,
                            left: e,
                            width: f,
                            height: g
                        }, a.scrubTo = function(b) {
                            if (a.vertical === !0) {
                                var c = 0;
                                b = 1 - Math.min(1 - c, Math.max(c, b || c)), scrubPosition = (g - i) * b, a.thumb.css("top", scrubPosition)
                            } else {
                                var c = 0;
                                b = Math.min(1 - c, Math.max(c, b || c)), scrubPosition = (f - h) * b, a.thumb.css("left", scrubPosition)
                            }
                        }
                    }
                }

                function fc(a) {
                    hc(a, hb)
                }

                function gc(a) {
                    hc(a, kb)
                }

                function hc(b, c) {
                    b.preventDefault && b.preventDefault(), b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0, a(document).on(Fb, c, ic), a(document).on(Gb, c, jc), Cb && a(document).on(Hb, c, jc), ic(b, c)
                }

                function ic(a, b) {
                    a.preventDefault && a.preventDefault(), b = b || a.data;
                    var c = 0 / 0,
                        d = Cb ? a.originalEvent.touches[0] || a.originalEvent.changedTouches[0] : Bb ? a.originalEvent : a;
                    d && b && b.bounds && (c = b.vertical === !0 ? Math.min(1, Math.max(0, b.bounds.height - (d.pageY + b.bounds.top)) / b.bounds.height) : Math.min(1, Math.max(0, d.pageX + b.bounds.left) / b.bounds.width), b.scrubTo(c), b.updateFunction(c))
                }

                function jc(b) {
                    a(document).off(Fb, ic), a(document).off(Gb, jc), Cb && a(document).off(Hb, jc), b && b.data & b.data.scrubbing && (b.data.scrubbing = !1)
                }

                function kc() {
                    H.showingCaptions() ? (F("toggleCaptions", "Off"), H.hideCaptions()) : (F("toggleCaptions", "On"), H.showCaptions())
                }

                function lc() {
                    H.paused() ? (F("togglePause", "Unpause"), L && L.hide(), M && M.show(), H.unpause()) : (F("togglePause", "Pause"), H.pause())
                }

                function mc() {
                    H.muted() ? H.unmute() : H.mute()
                }

                function nc() {
                    H.isFullscreen() ? (F("toggleScreen", "Normal"), H.exitFullscreen()) : (F("toggleScreen", "Fullscreen"), H.enterFullscreen())
                }

                function oc(a) {
                    var b = {},
                        c = Ib.debug && "timeupdate" != a.type;
                    switch (c && f("Video Event: ", a), a.type) {
                        case "ended":
                            var d = w.prop("currentTime");
                            if (d > Z + 2) return;
                            b.eventType = org.pbskids.video.VideoEvent.VIDEO_END;
                            break;
                        case "loadstart":
                            S || (b.eventType = org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, b.canPlay = !0, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {});
                        case "waiting":
                            b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "loading";
                            break;
                        case "loadeddata":
                            b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "ready";
                            break;
                        case "playing":
                            var e = w.prop("duration");
                            0 == e || isNaN(e) ? (b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "loading", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}) : e == Z || isNaN(e) || (b.eventType = org.pbskids.video.VideoEvent.DURATION_CHANGE, b.duration = e, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), ib !== H.canSeek() && (b.eventType = org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, b.canSeek = H.canSeek(), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, b.playState = "playing";
                            break;
                        case "pause":
                            var d = w.prop("currentTime");
                            isNaN(d) || d > 0 && Z >= d && (b.eventType = org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, b.time = d, b.percent = Math.min(1, Math.max(0, w.prop("currentTime") / (Z || 1))), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, b.playState = "paused";
                            break;
                        case "timeupdate":
                            P && (P = !1, b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "ready", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, b.time = w.prop("currentTime") || 0, b.percent = Math.min(1, Math.max(0, w.prop("currentTime") / (Z || 1)));
                            break;
                        case "durationchange":
                            P && (b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "ready", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.DURATION_CHANGE, b.duration = w.prop("duration"), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, b.time = 0, b.percent = 0;
                            break;
                        case "seeking":
                            b.eventType = org.pbskids.video.VideoEvent.SEEKING_CHANGE, b.time = w.prop("currentTime") || 0, b.percent = Math.min(1, Math.max(0, w.prop("currentTime") / (H.duration() || 1))), b.seeking = !0;
                            break;
                        case "seeked":
                            b.eventType = org.pbskids.video.VideoEvent.SEEKING_CHANGE, b.time = w.prop("currentTime") || 0, b.percent = Math.min(1, Math.max(0, w.prop("currentTime") / (H.duration() || 1))), b.seeking = !1;
                            break;
                        case "emptied":
                            b.eventType = org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, b.playState = "paused", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, b.canPlay = !1, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, b.canSeek = !1, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "unloading", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "uninitialized";
                            break;
                        case "canplay":
                            ib != H.canSeek() && (b.eventType = org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, b.canSeek = H.canSeek(), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, b.canPlay = !0;
                            break;
                        case "volumechange":
                            b.eventType = org.pbskids.video.VideoEvent.VOLUME_CHANGE, b.volume = w.prop("volume"), org.pbskids.video.VideoEvent.dispatchEvent(b);
                            break;
                        default:
                            return Ib.debug && (f('The video event, "' + a.type + '", does not have a handler', null, "warn"), f("--------")), void 0
                    }
                    org.pbskids.video.VideoEvent.dispatchEvent(b), c && f("--------")
                }

                function pc(a) {
                    (vb || wb) && !mb || xb && !S ? (P = !1, K && K.hide(), L && L.show(), M && M.hide()) : (P = "loading" == a.loadState, K && K.toggle(P), L && L.toggle(H.paused()), M && M.toggle(!H.paused()))
                }

                function qc(a) {
                    var b, c = "playing" == a.playState;
                    c && (S = !0), b = !c && !P && H.canPlay(), bb && bb.toggleClass("playing", c).toggleClass("paused", !c), L && L.toggle(b), M && M.toggle(!b)
                }

                function rc(a) {
                    return Q = a.canPlay, a && Q ? (Zb(bb, lc), Zb(cb, kc), ab && !N && (Zb(ab, mc), N = !0), bc(), a.volume = H.muted() ? 0 : H.volume(), yc(a), void 0) : ($b(bb, lc), $b(cb, kc), L && L.hide(), void 0)
                }

                function sc(a) {
                    ib = a.canSeek, a.canSeek ? _b() : ac()
                }

                function tc(a) {
                    X = a.time, Y = Z - X, fb && fb.html(H.formatTime(X)), eb && eb.html(H.formatTime(Y))
                }

                function uc(a) {
                    !hb.scrubbing && !isNaN(a.time) && a.time >= 0 && a.time < 1 / 0 && ($ += a.time - X, X = a.time, Y = Z - X, !T && X > 0 && (T = !0, Ub("MediaStart", U)), fb && fb.html(H.formatTime(X)), eb && eb.html(H.formatTime(Y)), hb && hb.scrubTo(a.percent))
                }

                function vc(a) {
                    isNaN(a.duration) || a.duration >= 0 && a.duration < 1 / 0 && (Z = a.duration, gb && gb.html(H.formatTime(Z)))
                }

                function wc() {
                    K && K.hide(), L && L.show(), M && M.hide(), Ub("MediaComplete", U), Tb($, U, 1)
                }

                function xc(b) {
                    ab && (ab.toggleClass("muted", b.muted === !0), a("html").toggleClass("video-player-muted", b.muted === !0)), b.volume = b.muted === !0 ? 0 : H.volume(), yc(b)
                }

                function yc(a) {
                    jb && jb.html(Math.round(100 * a.volume) + "%"), kb && kb.scrubTo && !kb.scrubbing && kb.scrubTo(a.volume)
                }

                function zc(a) {
                    cb && cb.toggleClass("captions-on", "showing" == a.captionsState)
                }

                function Ac() {
                    switch (Ib.onVideoClick) {
                        case "toggle-fullscreen":
                            nc();
                            break;
                        case "toggle-pause":
                            lc()
                    }
                }

                function Bc(a) {
                    Ib.debug && f("_onFullScreenChange(): ", a), Cc()
                }

                function Cc() {
                    kb && cc(), hb && dc()
                }

                function Dc() {
                    if (w) {
                        var c, d = a("#" + b);
                        v ? (c = Math.round(d.width() / Ib.aspectRatio) + "px", d.css("height", c)) : c = d.css("height"), I && I.css({
                            "margin-top": "-" + c,
                            height: c,
                            "line-height": c
                        }), V = "originalres_" + (Ib.aspectRatio > 1.55 ? "16x9" : "4x3")
                    }
                }

                function Gc(b, c) {
                    f("_geocheck()"), a.ajax({
                        type: "GET",
                        url: n + "getVideos/",
                        dataType: "jsonp",
                        data: {
                            endindex: 1,
                            status: "available"
                        },
                        success: function(d) {
                            a.ajax({
                                type: "GET",
                                url: d.items[0].videos.ipad.url,
                                dataType: "jsonp",
                                data: {
                                    format: "jsonp"
                                },
                                success: function(a) {
                                    if ("ok" == a.status) return b.apply(this, c || []), void 0;
                                    var d = {
                                        message: a.message
                                    };
                                    switch (a.http_code) {
                                        case 403:
                                            d.eventType = org.pbskids.video.VideoErrorEvent.GEO_RESTRICTED;
                                            break;
                                        case 404:
                                            d.eventType = org.pbskids.video.VideoErrorEvent.VIDEO_NOT_FOUND;
                                            break;
                                        case 410:
                                            d.eventType = org.pbskids.video.VideoErrorEvent.VIDEO_EXPIRED;
                                            break;
                                        default:
                                            return
                                    }
                                    org.pbskids.video.VideoErrorEvent.dispatchEvent(d)
                                }
                            })
                        }
                    })
                }

                function Hc(b, c) {
                    f("_getHostProgram()"), a.ajax({
                        type: "GET",
                        url: n + "getHostProgram/",
                        dataType: "jsonp",
                        data: {
                            program: window.location.href
                        },
                        fail: function() {
                            var a = "Connection error, please try again in a moment";
                            f(a, null, "error", !0)
                        },
                        success: function(d) {
                            if (d && d.playerName) return o = d.playerName, p = d.affiliateId || "", r = d.defaultProgram || "", q = d.destination || "producer", s = "", E("Validated", "Player Location", window.location.href), r ? a.ajax({
                                type: "GET",
                                url: n + "getShows/",
                                dataType: "jsonp",
                                data: {
                                    title: r,
                                    destination: q
                                },
                                fail: function() {
                                    var a = "Connection error, please try again in a moment";
                                    f(a, null, "error", !0)
                                },
                                success: function(a) {
                                    a.matched || (s = r, r = ""), b.apply(this, c || [])
                                }
                            }) : b.apply(this, c || []), void 0;
                            var e = "This is not an authorized instance of a PBS KIDS video player";
                            E("Unauthorized Player", "Player Location", window.location.href), f(e, null, "error", !0)
                        }
                    })
                }

                function Ic(a, b) {
                    var c = window.PointerEvent ? "touch-action" : "-ms-touch-action";
                    a.style[c] = b;
                    var d = a.childNodes;
                    for (var e in d) d[e].style && (d[e].style[c] = b)
                }

                function Jc(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case rb.SPACE:
                        case sb.TOGGLE_PAUSE:
                            H.togglePause();
                            break;
                        case sb.STOP:
                            H.pause();
                            break;
                        case sb.FORWARD:
                            H.seekToTime(H.currentTime() + 10);
                            break;
                        case sb.REWIND:
                            H.seekToTime(H.currentTime() - 5)
                    }
                }

                function Kc(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case rb.ENTER:
                        case rb.SPACE:
                            H.togglePause(), a.preventDefault();
                            break;
                        case rb.RIGHT:
                            a.shiftKey || (H.seekToTime(H.currentTime() + 10), a.preventDefault());
                            break;
                        case rb.LEFT:
                            a.shiftKey || (H.seekToTime(H.currentTime() - 5), a.preventDefault());
                            break;
                        case rb.UP:
                            Cb || H.volume(H.volume() + .1), a.preventDefault();
                            break;
                        case rb.DOWN:
                            Cb || H.volume(H.volume() - .1), a.preventDefault();
                            break;
                        case rb.C:
                            !Cb && a.shiftKey && kc()
                    }
                } - 1 != g.indexOf("renzo.pbskids.org") && (c.muteOnLoad = !0);
                var w, U, V, W, qb, d = m + "pbsk/video/swf/VideoPlayer.swf",
                    h = m + "pbsk/swf/expressInstall.swf",
                    i = "10.1.0",
                    k = "org.pbskids.video.Player",
                    G = {},
                    H = this,
                    I = null,
                    J = null,
                    K = null,
                    L = null,
                    M = null,
                    N = !1,
                    O = !1,
                    P = !1,
                    Q = !1,
                    R = !1,
                    S = !1,
                    T = !1,
                    X = 0,
                    Y = 0,
                    Z = 0,
                    $ = 0,
                    _ = 100,
                    ab = null,
                    bb = null,
                    cb = null,
                    eb = null,
                    fb = null,
                    gb = null,
                    hb = null,
                    ib = !1,
                    jb = null,
                    kb = null,
                    lb = new Array("loadstart", "waiting", "loadeddata", "emptied", "canplay", "playing", "pause", "seeking", "seeked", "ended", "durationchange", "timeupdate", "volumechange"),
                    mb = !1,
                    nb = "",
                    ob = "",
                    pb = "webkit moz o ms khtml".split(" "),
                    rb = {
                        SPACE: 32,
                        ENTER: 13,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        C: 67
                    },
                    sb = {
                        FORWARD: 228,
                        REWIND: 227,
                        STOP: 178,
                        TOGGLE_PAUSE: 179
                    },
                    tb = /safari/gi.test(navigator.appVersion) && /apple/gi.test(navigator.vendor),
                    ub = /googletv/gi.test(navigator.appVersion),
                    vb = /android/gi.test(navigator.appVersion),
                    wb = /silk|kindlefire/gi.test(navigator.appVersion),
                    xb = /iphone|ipad|ipod/gi.test(navigator.appVersion),
                    yb = /iphone|ipod/gi.test(navigator.appVersion),
                    zb = /ipad/gi.test(navigator.appVersion),
                    Ab = /hp-tablet/gi.test(navigator.appVersion),
                    Bb = Boolean(window.PointerEvent || window.MSPointerEvent),
                    Cb = "ontouchstart" in window && !Ab,
                    Eb = window.PointerEvent ? "pointerdown" : window.MSPointerEvent ? "MSPointerDown" : Cb ? "touchstart" : "mousedown",
                    Fb = window.PointerEvent ? "pointermove" : window.MSPointerEvent ? "MSPointerMove" : Cb ? "touchmove" : "mousemove",
                    Gb = window.PointerEvent ? "pointerup" : window.MSPointerEvent ? "MSPointerUp" : Cb ? "touchend" : "mouseup",
                    Hb = window.PointerEvent ? "pointerout" : window.MSPointerEvent ? "MSPointerOut" : Cb ? "touchcancel" : document.attachEvent ? "mouseleave" : "mouseout",
                    Ib = {
                        debug: !1,
                        aspectRatio: 16 / 9,
                        disableKeyboard: !1,
                        muteOnLoad: !1,
                        onPlayerComplete: null,
                        onVideoClick: "",
                        muteToggleControl: "",
                        pauseToggleControl: "",
                        captionsToggleControl: "",
                        scrubber: "",
                        timerRemaining: "",
                        timerCurrent: "",
                        timerDuration: "",
                        volumeDisplay: "",
                        volumeSlider: "",
                        verticalVolumeSlider: "",
                        loadingOverlay: {
                            url: m + "pbsk/video/img/arrowspin.gif",
                            swf: m + "pbsk/video/swf/arrowspin.swf",
                            width: "50px",
                            height: "50px",
                            color: "white",
                            opacity: 90
                        },
                        playIconOverlay: {
                            url: m + "pbsk/video/img/button_overlay_play.png",
                            width: "",
                            height: "",
                            color: "black",
                            opacity: 50
                        },
                        onHoverOverlay: {
                            url: "",
                            width: "",
                            height: "",
                            fs_url: "",
                            fs_width: "",
                            fs_height: ""
                        }
                    };
                if ("string" != typeof b) {
                    var Jb = "org.pbskids.video.Player requires " + (arguments.length > 0 ? "the first" : "one") + " parameter of type String";
                    return f(Jb, null, "error", !0), void 0
                }
                if (b = b.substr(b.indexOf("#") + 1), !document.getElementById(b)) {
                    var Jb = 'An html element with the id, "' + b + '",  could not be found';
                    return f(Jb, null, "error", !0), void 0
                }
                var Fc = function(b, c) {
                    f("_enableProducerTracking()"), a.ajax({
                        type: "GET",
                        url: n + "getShows/",
                        dataType: "jsonp",
                        data: {
                            endindex: 100
                        },
                        success: function(a) {
                            if (a.items)
                                for (var d = 0; d < a.items.length; d++) a.items[d].nola && a.items[d].google_analytics_id && __KIDS_Video_Tracking("create", a.items[d].google_analytics_id, "auto", {
                                    name: a.items[d].nola
                                });
                            f("_enableProducerTracking() :: Enabled"), b.apply(this, c || [])
                        }
                    })
                };
                this.toggleFullscreen = function() {
                    nc()
                }, this.enterFullscreen = function() {
                    w && !v && mb && ("" === ob ? w.get(0).requestFullScreen() : ob.match("webkit") ? ub || w.get(0).webkitEnterFullscreen() : w.get(0)[ob + "RequestFullScreen"](), a("html").addClass("isfullscreen"))
                }, this.exitFullscreen = function() {
                    w && !v && mb && ("" === ob ? document.cancelFullScreen() : ob.match("webkit") ? ub || document.webkitExitFullscreen() : document[ob + "CancelFullScreen"](), a("html").removeClass("isfullscreen"))
                }, this.aspectRatio = function() {
                    return Ib.aspectRatio
                }, this.videoType = function() {
                    return t
                }, this.isFlashPlayer = function() {
                    return v
                }, this.commonName = function() {
                    return o
                }, this.playerName = function() {
                    return o
                }, this.affiliateId = function() {
                    return p
                }, this.paused = function() {
                    return w ? v ? w.paused ? w.paused() : !1 : w.prop("paused") : !1
                }, this.muted = function() {
                    return w ? v ? w.muted ? w.muted() : !1 : w.prop("muted") : !1
                }, this.canSeek = function() {
                    return w ? v ? w.canSeek ? w.canSeek() : !1 : w.prop("seekable") ? !0 : !1 : !1
                }, this.canPlay = function() {
                    return w ? v ? w.canPlay ? w.canPlay() : !1 : Q : !1
                }, this.isFullscreen = function() {
                    if (!w) return !1;
                    if (v) return w.displayingFullscreen ? w.displayingFullscreen() : !1;
                    if (ub) return a("html").hasClass("isfullscreen");
                    if (mb) switch (ob) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[ob + "FullScreen"]
                    }
                }, this.pause = function() {
                    w && (v ? w.pause() : w.get(0).pause())
                }, this.unpause = function() {
                    w && (v ? w.unpause() : w.get(0).play())
                }, this.playVideo = function() {
                    w && (v ? w.playVideo() : w.get(0).play())
                }, this.togglePause = function() {
                    this.paused() ? this.unpause() : this.pause()
                }, this.seekToTime = function(a) {
                    w && !isNaN(a) && (a = Math.max(0, Math.min(a, Z)), v ? w.seekToTime(a) : w.prop("currentTime", a))
                }, this.seekToPercent = function(a) {
                    w && !isNaN(a) && (a = Math.max(0, Math.min(a, 1)), v ? w.seekToPercent(a) : w.prop("currentTime", H.duration() * a))
                }, this.currentTime = function() {
                    return X
                }, this.remainingTime = function() {
                    return Y
                }, this.duration = function() {
                    return Z
                }, this.loadAndPlay = function(b, c) {
                    if (Cb && !S) this.loadAndStop(b, c);
                    else if (w) {
                        if (c = !!c, "object" != typeof b) {
                            if ("string" == typeof b) {
                                var d = {
                                    guid: b,
                                    status: "available",
                                    destination: q,
                                    player: H.videoType(),
                                    flash: H.isFlashPlayer()
                                };
                                r && (d.program = r), s && (d.category = s), a.ajax({
                                    type: "GET",
                                    url: n + "getVideos/",
                                    dataType: "jsonp",
                                    data: d,
                                    success: function(a) {
                                        if (a.matched > 0) b = a.items[0], c && b.series_title && G[b.series_title] && (W = b, b = G[W.series_title].release), H.loadAndPlay(b);
                                        else {
                                            var d = "Could not find a published and available video for this site with the guid: " + b;
                                            f(d, null, "warn", !0)
                                        }
                                    }
                                })
                            } else {
                                var e = "No ReleaseObject or guid was provided. Exiting .loadAndPlay().";
                                f(e, null, "warn", !0)
                            }
                            return
                        }
                        c && b.series_title && G[b.series_title] && (W = b, b = G[W.series_title].release);
                        var g = b.videos[t].url ? b.videos[t].url : b.videos[t],
                            h = b.images[V] ? b.images[V].url || "" : "";
                        Tb($, U, 2), $ = 0, X = 0, isNaN(b.duration) && (b.duration = b.videos[t].length / 1e3), v ? w.loadAndPlay(g, h) : (J && J.hide(), w.attr({
                            src: " ",
                            poster: h,
                            autoplay: "false"
                        }), w.attr({
                            src: g,
                            autoplay: "autoplay",
                            poster: h
                        }).get(0).load(), this.playVideo()), this.captionsURL(b.captions.sami ? b.captions.sami.url || "" : b.captions.dfxp ? b.captions.dfxp.url || "" : ""), U = b
                    }
                }, this.loadAndStop = function(b) {
                    if (w) {
                        if ("object" != typeof b) {
                            if ("string" == typeof b) {
                                var d = {
                                    guid: b,
                                    status: "available",
                                    destination: q,
                                    player: H.videoType(),
                                    flash: H.isFlashPlayer()
                                };
                                r && (d.program = r), s && (d.category = s), a.ajax({
                                    type: "GET",
                                    url: n + "getVideos/",
                                    dataType: "jsonp",
                                    data: d,
                                    success: function(a) {
                                        if (a.matched > 0) Ib.debug && f("Found Release:", a.items[0]), H.loadAndStop(a.items[0]);
                                        else if (Ib.debug) {
                                            var c = "Could not find a published and available video for this site with the guid: " + b;
                                            f(c, null, "warn", !0)
                                        }
                                    }
                                })
                            } else {
                                var e = "No ReleaseObject or guid was provided. Exiting .loadAndPlay().";
                                f(e, null, "warn", !0)
                            }
                            return
                        }
                        var g = b.videos[t].url ? b.videos[t].url : b.videos[t],
                            h = b.images[V] ? b.images[V].url || "" : "";
                        Tb($, U, 3), $ = 0, X = 0, isNaN(b.duration) && (b.duration = b.videos[t].length / 1e3), v ? w.loadAndStop(g, h) : (J && J.hide(), w.attr({
                            src: " ",
                            poster: h,
                            autoplay: "false"
                        }), w.attr({
                            src: g,
                            poster: h,
                            autoplay: "false"
                        }).get(0).load()), this.captionsURL(b.captions.sami ? b.captions.sami.url || "" : b.captions.dfxp ? b.captions.dfxp.url || "" : ""), U = b
                    }
                }, this.loadAndPause = this.loadAndStop, this.unload = function() {
                    w && (v && w.unload ? w.unload() : (this.pause(), J && J.show(), w.attr({
                        src: " ",
                        poster: " ",
                        autoplay: "false"
                    }), w.trigger("emptied")))
                }, this.showingCaptions = function() {
                    return v && w ? w.showingCaptions() : !1
                }, this.captionsURL = function(a) {
                    v && w && w.captionsURL(a)
                }, this.captionsXML = function(a) {
                    v && w && w.captionsXML(a)
                }, this.showCaptions = function() {
                    v && w && w.showCaptions()
                }, this.hideCaptions = function() {
                    v && w && w.hideCaptions()
                }, this.formatTime = function(a) {
                    if (isNaN(a)) return "--:--";
                    if (0 >= a || a > 1 / 0) return "--:--";
                    var b = Math.floor(a / 60),
                        c = Math.floor(a % 60);
                    return b + ":" + (10 > c ? "0" : "") + c
                }, this.unmute = function() {
                    w && (v ? w.unmute && w.unmute() : w.prop("volume", Math.max(_, .2)))
                }, this.mute = function() {
                    w && (v ? w.mute && w.mute() : (_ = w.prop("volume"), w.prop("volume", 0)))
                }, this.volume = function(a) {
                    return w ? (a = isNaN(a) ? 0 / 0 : Math.max(0, Math.min(1, a)), 0 === a ? (H.mute(), 0) : v ? (w.unmute && w.unmute(), w.volume ? w.volume(a) : 0) : (isNaN(a) || w.prop("volume", a), w.prop("volume"))) : 0
                }, this.registerControl = function(b, c) {
                    Ib.debug && c && f("registerControl() : type: " + b + " , selector: " + c);
                    var d = a(c);
                    if (0 != d.length) switch (b) {
                        case "timerRemaining":
                            eb = d;
                            break;
                        case "timerCurrent":
                            fb = d;
                            break;
                        case "timerDuration":
                            gb = d;
                            break;
                        case "volumeDisplay":
                            jb = d;
                            break;
                        case "muteToggleControl":
                            Cb ? d.hide() : (ab = d, H.canPlay() ? Zb(ab, mc) : $b(ab, mc));
                            break;
                        case "captionsToggleControl":
                            v ? (cb = d, H.canPlay() ? Zb(cb, kc) : $b(cb, kc)) : d.hide();
                            break;
                        case "pauseToggleControl":
                            bb = d, H.canPlay() ? Zb(bb, lc) : $b(bb, lc);
                            break;
                        case "volumeSlider":
                        case "verticalVolumeSlider":
                            var g = a(".scrubber-track", d).first(),
                                h = a(".scrubber-thumb", d).first();
                            if (g.length > 0 && h.length > 0) Cb ? d.hide() : (kb = {}, kb.vertical = "verticalVolumeSlider" == b, kb.scrubber = d.first(), kb.track = g, kb.thumb = h, kb.thumb.css({
                                position: "relative"
                            }), Bb && Ic(kb.scrubber.get(0), "none"), ec(kb, this.volume), kb.track.resize(cc), H.canPlay() ? bc() : ($b(kb.scrubber), $b(kb.track), $b(kb.thumb)));
                            else {
                                var e = 'The html element defined by the selector, "' + c + '", must have a child with the class, "scrubber-track", AND a child with the class, "scrubber-thumb"';
                                f(e, null, "error", !0)
                            }
                            break;
                        case "scrubber":
                            var g = a(".scrubber-track", d).first(),
                                h = a(".scrubber-thumb", d).first();
                            if (g.length > 0 && h.length > 0) hb = {}, hb.scrubber = d.first(), hb.track = g, hb.thumb = h, hb.thumb.css({
                                position: "relative"
                            }), Bb && Ic(hb.scrubber.get(0), "none"), ec(hb, this.seekToPercent), hb.track.resize(dc), H.canSeek() ? _b() : ac();
                            else {
                                var e = 'The html element defined by the selector, "' + c + '", must have a child with the class, "scrubber-track", AND a child with the class, "scrubber-thumb"';
                                f(e, null, "error", !0)
                            }
                            break;
                        default:
                            var e = 'The control-type, "' + b + '" is not a recognized control-type in ' + k + ".registerControl()";
                            f(e, null, "warn", !0)
                    } else if (c) {
                        var e = 'Html element(s) could not be found using the selector, "' + c + '"';
                        f(e, null, "warn", !0)
                    }
                };
                for (l in c) switch (l) {
                    case "onHoverOverlay":
                    case "playIconOverlay":
                    case "loadingOverlay":
                        for (j in c[l]) Ib[l][j] = c[l][j];
                        break;
                    default:
                        Ib[l] = c[l]
                }
                Kb()
            }, org.pbskids.video.PlayerEvent = function() {
                var b = "org_pbskids_video_PlayerEvent";
                return {
                    debug: !1,
                    PLAYER_READY: b + "_PlayerReady",
                    dispatchEvent: function(c) {
                        var d, e = {};
                        switch (c.eventType = (c.eventType || "").replace(/\./g, "_"), c.eventType) {
                            case this.PLAYER_READY:
                                e.success = c.success || !1, e.id = c.id || "", e.ref = c.ref || void 0, e.player = c.player || void 0;
                                break;
                            default:
                                return this.debug && f("eventType, " + c.eventType + ", is not defined in " + b, c, "warn"), void 0
                        }
                        d = a.Event(c.eventType), d.playerData = e;
                        for (var g in e) d[g] = e[g];
                        a(c.caller || document).trigger(d), window.$ && window.$ != a && window.$(c.caller || document).trigger(d)
                    }
                }
            }(), org.pbskids.video.VideoEvent = function() {
                var b = "org_pbskids_video_VideoEvent";
                return {
                    debug: !1,
                    CAN_PLAY_STATE_CHANGE: b + "_CanPlayStateChange",
                    CAN_SEEK_STATE_CHANGE: b + "_CanSeekStateChange",
                    CAPTIONS_STATE_CHANGE: b + "_CaptionsStateChange",
                    CURRENT_TIME_CHANGE: b + "_CurrentTimeChange",
                    DURATION_CHANGE: b + "_DurationChange",
                    LOAD_STATE_CHANGE: b + "_LoadStateChange",
                    MUTE_CHANGE: b + "_MuteChange",
                    PLAY_STATE_CHANGE: b + "_PlayStateChange",
                    SEEKING_CHANGE: b + "_SeekingChange",
                    VIDEO_START: b + "_VideoStart",
                    VIDEO_END: b + "_VideoEnd",
                    VIDEO_VIEWED: b + "_VideoViewed",
                    VOLUME_CHANGE: b + "_VolumeChange",
                    dispatchEvent: function(c) {
                        this.debug && (c.eventType || "").replace(/\./g, "_") != this.CURRENT_TIME_CHANGE && f(c.eventType, c);
                        var d, e = {};
                        switch (c.eventType = (c.eventType || "").replace(/\./g, "_"), c.eventType) {
                            case this.LOAD_STATE_CHANGE:
                                e.loadState = c.loadState || "";
                                break;
                            case this.CAN_PLAY_STATE_CHANGE:
                                e.canPlay = c.canPlay || !1;
                                break;
                            case this.PLAY_STATE_CHANGE:
                                e.playState = c.playState || "";
                                break;
                            case this.CURRENT_TIME_CHANGE:
                                e.time = c.time || 0, e.percent = c.percent || 0;
                                break;
                            case this.DURATION_CHANGE:
                                e.duration = c.duration || 0;
                                break;
                            case this.VIDEO_START:
                                if (!c.release) return;
                                e.release = c.release;
                                break;
                            case this.VIDEO_END:
                                break;
                            case this.VIDEO_VIEWED:
                                if (!c.release) return;
                                e.release = c.release, e.percentViewed = c.percentViewed || 0;
                                break;
                            case this.MUTE_CHANGE:
                                e.muted = c.muted || !1;
                                break;
                            case this.VOLUME_CHANGE:
                                e.muted = c.muted || !1, e.volume = isNaN(c.volume) ? 0 / 0 : c.volume;
                                break;
                            case this.CAPTIONS_STATE_CHANGE:
                                e.captionsState = c.captionsState || "";
                                break;
                            case this.CAN_SEEK_STATE_CHANGE:
                                e.canSeek = c.canSeek || !1;
                                break;
                            case this.SEEKING_CHANGE:
                                e.time = c.time || 0, e.percent = c.percent || 0, e.seeking = c.seeking || !1;
                                break;
                            default:
                                return this.debug && f("eventType, " + c.eventType + ", is not defined in " + b, c, "warn"), void 0
                        }
                        d = a.Event(c.eventType), d.videoData = e;
                        for (var g in e) d[g] = e[g];
                        a(c.caller || document).trigger(d), window.$ && window.$ != a && window.$(c.caller || document).trigger(d)
                    }
                }
            }(), org.pbskids.video.VideoErrorEvent = function() {
                var b = "org_pbskids_video_VideoErrorEvent";
                return {
                    debug: !1,
                    GEO_RESTRICTED: b + "_GeoRestricted",
                    VIDEO_NOT_FOUND: b + "_VideoNotFound",
                    VIDEO_EXPIRED: b + "_VideoExpired",
                    NO_RESPONSE: b + "_NoResponse",
                    dispatchEvent: function(c) {
                        this.debug && f(c.eventType, c, "error");
                        var d, e = {};
                        switch (c.eventType = (c.eventType || "").replace(/\./g, "_"), c.eventType) {
                            case this.GEO_RESTRICTED:
                            case this.VIDEO_NOT_FOUND:
                            case this.VIDEO_EXPIRED:
                            case this.NO_RESPONSE:
                                e.message = (c.message || "").replace("Redirect", "Video").replace("redirect", "video");
                                break;
                            default:
                                return this.debug && f("eventType, " + c.eventType + ", is not defined in " + b, c, "warn"), void 0
                        }
                        d = a.Event(c.eventType), d.videoErrorData = e;
                        for (var g in e) d[g] = e[g];
                        a(c.caller || document).trigger(d);
                        var h = _currentRelease && _currentRelease.guid ? _currentRelease.guid : "No-GUID";
                        E("VideoErrorEvent", c.eventType.replace(b + "_", h)), window.$ && window.$ != a && window.$(c.caller || document).trigger(d)
                    }
                }
            }(), org.pbskids.video.PlayList = function(c, d, g, h) {
                function hb() {
                    for (l in h)
                        if ("object" == typeof fb[l] && "object" == typeof h[l])
                            for (j in h[l]) fb[l][j] = h[l][j];
                        else fb[l] = h[l];
                    u = a("#" + c), o = u.get(0), _releaseClass = " ." + d, x = a(_releaseClass, u).first(), w = g, fb.debug = Boolean(fb.debug && e), org.pbskids.video.PlaylistEvent.debug = fb.debug, "NO_ISCROLL" != fb.iScrollOpts && (B = c + "-iScrollContainer", a("<div/>").prop("id", B).addClass(fb.iScrollOpts.containerClass).css({
                        position: "relative",
                        overflow: "hidden"
                    }).insertBefore(u).append(u), fb.loadingIndicator && (a("<img/>").prop("src", fb.loadingIndicator).addClass(fb.loadingIndicatorClass).appendTo(a("#" + B)), D = a("<li/>").addClass("appendingIndicator-container").append(a("<img/>").prop("src", fb.loadingIndicator).addClass(fb.appendingIndicatorClass)).append(a("<span/>").html(fb.appendingVideosMessage))), fb.loadMoreButtonClass && (E = a("<li/>").addClass(fb.loadMoreButtonClass).append(a("<span/>").html(fb.loadMoreVideosMessage)).css({
                        cursor: "pointer"
                    }).click(function() {
                        m.appendMore()
                    })), C = fb.iScrollOpts.onRefresh, fb.iScrollOpts.onRefresh = qb, m.iScroll = new i(B, fb.iScrollOpts)), m.registerControl("nextVideoControl", fb.nextVideoControl || ""), m.registerControl("previousVideoControl", fb.previousVideoControl || ""), a(document).on(org.pbskids.video.VideoEvent.VIDEO_END, ob), h.disableKeyboard !== !0 && a(document).on("keydown", T ? sb : tb), m.purge()
                }

                function ib(b, c, d) {
                    if (b.videos && b.videos[t]) {
                        var e = x.clone();
                        d = d || -1, kb(e, "video-title", b.title), kb(e, "video-description", b.description), kb(e, "video-duration", w.formatTime(b.videos[t].length / 1e3)), kb(e, "series-title", b.series_title);
                        for (l in b.images) jb(e, l, b.images[l]);
                        switch ((b.type || "").toLowerCase()) {
                            case "episode":
                                e.addClass("episode");
                                break;
                            case "clip":
                                e.addClass("clip")
                        }
                        if (a(".video-airdate", e).addClass("no-value"), b.airdate) {
                            var f = b.airdate.match(/(\d+)/g);
                            if (f) {
                                var g = new Date(f[0], f[1] - 1, f[2], f[3], f[4]),
                                    h = new Date,
                                    i = (h - g) / 864e5;
                                7 >= i && e.addClass("new-video"), a(".video-airdate", e).removeClass("no-value"), kb(e, "video-airdate", f[1] + "-" + f[2] + "-" + f[0])
                            }
                        }
                        if (a(".video-expiration", e).addClass("no-value"), b.expirationdate) {
                            var f = b.expirationdate.match(/(\d+)/g);
                            if (f) {
                                var j = new Date(f[0], f[1] - 1, f[2], f[3], f[4]),
                                    h = new Date,
                                    k = (j - h) / 864e5;
                                7 >= k && (a(".video-expiration", e).removeClass("no-value"), kb(e, "video-expiration", "Expires in " + (1 > k ? Math.round(24 * k) + " hours" : Math.round(k) + " days")))
                            }
                        }
                        return e.addClass("guid_" + b.guid).prop("data-item-guid", b.guid).prop("data-item-index", c).click(function(a) {
                            pb(a, b)
                        }), 1 == c % 2 && e.addClass("alternate"), d == b.guid && e.addClass("selected"), fb.reverseOrder ? e.prependTo(u) : e.appendTo(u), e
                    }
                    return null
                }

                function jb(b, c, d) {
                    d && d.url && a("img." + c, b).prop("src", d.url).prop("data-original-width", d.width + "px").prop("data-original-height", d.height + "px")
                }

                function kb(b, c, d) {
                    d ? (a("." + c, b).html(d), b.prop("data-" + c, d)) : a("." + c, b).addClass("no-value")
                }

                function lb(b, c) {
                    b && (b.removeClass("disabled-control").addClass("enabled-control"), "function" == typeof c && b.each(function() {
                        a(this).off("click"), a(this).on("click", c)
                    }))
                }

                function mb(b, c) {
                    b && (b.addClass("disabled-control").removeClass("enabled-control"), "function" == typeof c && b.each(function() {
                        a(this).off("click", c)
                    }))
                }

                function nb(a) {
                    m.iScroll && m.iScroll.scrollToElement(a, 100)
                }

                function ob() {
                    m.autoPlayNext() && m.next()
                }

                function pb(a, b) {
                    m.setFocusTo(a.currentTarget), w.loadAndPlay(b);
                    var c = {};
                    b.duration = b.videos[t].length / 1e3;
                    for (l in b) c[l] = b[l];
                    delete c.videos, org.pbskids.video.PlaylistEvent.dispatchEvent({
                        eventType: org.pbskids.video.PlaylistEvent.RELEASE_SELECTED,
                        release: c,
                        playlist: m,
                        caller: o
                    })
                }

                function qb() {
                    m.iScroll && m.iScroll.vScrollbarWrapper && a(m.iScroll.vScrollbarWrapper).css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), C && "function" == typeof C && C.call(m.iScroll)
                }

                function rb(b, c, d, e, g) {
                    var h = H.length;
                    if (z = !1, e !== M) return fb.debug && f(u.prop("id") + ": rejected: ", d, "warn"), void 0;
                    fb.debug && f(u.prop("id") + ": received: ", d), N = d, I = d.category || "", J = d.program || "", K = d.group || "", L = c || b.length, A = L > d.endindex && !d.group, H = H.concat(b);
                    for (k in b) ib(b[k], h, d.selectedID), h++;
                    fb.debug && f("items received: " + b.length + "; items requested: " + (d.endindex - d.startindex + 1) + "; can load more: " + A), lb(O, m.next), lb(P, m.previous), y = !0, fb.loadingIndicator && a("." + fb.loadingIndicatorClass, "#" + B).css("display", "none"), D && D.detach(), E && A && E.appendTo(u), m.iScroll && m.iScroll.refresh();
                    var i = m.autoPlay();
                    org.pbskids.video.PlaylistEvent.dispatchEvent({
                        eventType: org.pbskids.video.PlaylistEvent[(g || "REFRESH") + "_COMPLETE"],
                        queryOpts: d,
                        playlist: b,
                        totalCount: L,
                        caller: o
                    }), i ? d.selectedID ? a(_releaseClass + ".guid_" + d.selectedID, u).triggerHandler("click") : m.next() : d.selectedID && "APPEND" != g && m.setFocusTo(a(_releaseClass + ".guid_" + d.selectedID, u))
                }

                function sb(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case R.NEXT:
                            m.next();
                            break;
                        case R.PREVIOUS:
                            m.previous()
                    }
                }

                function tb(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case Q.RIGHT:
                            a.shiftKey && (m.next(), a.preventDefault());
                            break;
                        case Q.LEFT:
                            a.shiftKey && (m.previous(), a.preventDefault())
                    }
                }
                var o, u, w, x, B, C, D, E, G, i = b || org.pbskids.iScrollMOD,
                    m = this,
                    p = "org.pbskids.video.PlayList",
                    y = !1,
                    z = !1,
                    A = !0,
                    H = [],
                    I = "",
                    J = "",
                    K = "",
                    L = 0,
                    M = "",
                    N = {},
                    O = null,
                    P = null,
                    Q = {
                        ENTER: 13,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40
                    },
                    R = {
                        NEXT: 176,
                        PREVIOUS: 177
                    };
                /safari/gi.test(navigator.appVersion);
                var T = /googletv/gi.test(navigator.appVersion);
                /android/gi.test(navigator.appVersion), /silk|kindlefire/gi.test(navigator.appVersion), /iphone|ipad|ipod/gi.test(navigator.appVersion), /iphone|ipod/gi.test(navigator.appVersion), /ipad/gi.test(navigator.appVersion);
                var Z = /hp-tablet/gi.test(navigator.appVersion),
                    $ = Boolean(window.PointerEvent || window.MSPointerEvent),
                    _ = "ontouchstart" in window && !Z;
                window.PointerEvent ? "pointerdown" : window.MSPointerEvent ? "MSPointerDown" : _ ? "touchstart" : "mousedown", window.PointerEvent ? "pointermove" : window.MSPointerEvent ? "MSPointerMove" : _ ? "touchmove" : "mousemove", window.PointerEvent ? "pointerup" : window.MSPointerEvent ? "MSPointerUp" : _ ? "touchend" : "mouseup", window.PointerEvent ? "pointerout" : window.MSPointerEvent ? "MSPointerOut" : _ ? "touchcancel" : document.attachEvent ? "mouseleave" : "mouseout";
                var fb = {
                    autoPlay: !0,
                    autoPlayNext: !0,
                    nextVideoControl: "",
                    previousVideoControl: "",
                    loadingIndicator: "",
                    loadingIndicatorClass: "loading-indicator",
                    appendingIndicatorClass: "appending-indicator",
                    appendingVideosMessage: "Loading More Videos...",
                    loadMoreButtonClass: "",
                    loadMoreVideosMessage: "Load More Videos",
                    reverseOrder: !1,
                    debug: !1,
                    disableKeyboard: !1,
                    iScrollOpts: {
                        hScroll: !1,
                        vScroll: !0,
                        containerClass: "iScrollContainer",
                        dragScrollBars: !(_ || $),
                        minBarHeight: _ || $ ? 8 : 36,
                        scrollbarClass: (_ || $ ? "touch " : "") + "scrollbar"
                    }
                };
                if ("string" != typeof c) {
                    var gb = p + " requires that the first parameter be of type String. This should be the id attribute of the html element to contain the playlist";
                    return f(gb, null, "error", !0), void 0
                }
                if (c = c.substr(c.indexOf("#") + 1), !document.getElementById(c)) {
                    var gb = 'An html element with the id, "' + c + '",  could not be found';
                    return f(gb, null, "error", !0), void 0
                }
                if ("string" != typeof d) {
                    var gb = p + " requires a class name of type String for the sample html element to be used as a model for building playlist items (releases)";
                    return f(gb, null, "error", !0), void 0
                }
                if (d = d.substr(d.indexOf(".") + 1), 0 == a("#" + c + " ." + d).length) {
                    var gb = 'An html element with the class, "' + d + '",  could not be found within #' + c;
                    return f(gb, null, "error", !0), void 0
                }
                if (!g) {
                    var gb = p + " requires that an instance of org.pbskids.video.Player be created to serve videos to";
                    return f(gb, null, "error", !0), void 0
                }
                this.addEventListener = function(b, c) {
                    a(o).off(b, c), a(o).on(b, c)
                }, this.removeEventListener = function(b, c) {
                    a(o).off(b, c)
                }, this.iScroll, this.scrollToSelectedItem = function() {
                    nb(_releaseClass + ".selected")
                }, this.getContainerID = function() {
                    return B
                }, this.getListData = function() {
                    return H
                }, this.getCategory = function() {
                    return I
                }, this.getProgram = function() {
                    return J
                }, this.getGroup = function() {
                    return K
                }, this.getTotalCount = function() {
                    return L
                }, this.getQueryOptions = function() {
                    return N
                }, this.autoPlayNext = function(a) {
                    return "boolean" == typeof a && (fb.autoPlayNext = a), fb.autoPlayNext
                }, this.autoPlay = function(a) {
                    return "boolean" == typeof a && (fb.autoPlay = a), fb.autoPlay
                }, this.hasPlaylist = function() {
                    return y
                }, this.loading = function() {
                    return z
                }, this.canLoadMore = function() {
                    return A && !z
                }, this.length = function() {
                    return H.length
                }, this.selectedIndex = function(b) {
                    return b = parseInt(b), isNaN(b) || (G = Math.max(0, b % H.length), a(_releaseClass + ".guid_" + H[G].guid, u).triggerHandler("click")), G || 0
                }, this.selectItem = function(b) {
                    var c = /^[0-9a-z]{8}\-[0-9a-z]{4}\-[0-9a-z]{4}\-[0-9a-z]{4}\-[0-9a-z]{12}$/;
                    c.test(b) ? a(_releaseClass + ".guid_" + b, u).triggerHandler("click") : isNaN(parseInt(b)) || selectedIndex(b)
                }, this.setFocusTo = function(b) {
                    var c = b;
                    "object" != typeof c && (c = a("" + b, u)), (0 != c.length || (c = a(_releaseClass + ".guid_" + b, u), 0 != c.length)) && (a(_releaseClass + ".selected", u).removeClass("selected"), a(c).addClass("selected"), G = a(c).prop("data-item-index"), m.scrollToSelectedItem())
                }, this.refresh = function(b) {
                    z = !0;
                    var c = {
                        startindex: 1,
                        endindex: 20,
                        program: "",
                        category: "",
                        group: "",
                        selectedID: "",
                        status: "available",
                        player: t,
                        flash: v,
                        destination: q,
                        "return": "airdate, expirationdate"
                    };
                    if ("object" == typeof b && null !== b)
                        for (var d in b) c[d] = b[d];
                    r && (c.program = r), s && (c.category = s), org.pbskids.video.PlaylistEvent.dispatchEvent({
                        eventType: org.pbskids.video.PlaylistEvent.REFRESH_START,
                        queryOpts: c,
                        caller: o
                    }), this.purge();
                    var e = new Date,
                        g = e.getMinutes() + "_" + e.getSeconds() + "_" + e.getMilliseconds();
                    M = g, fb.debug && f(u.prop("id") + ": fetch: ", c), a.ajax({
                        type: "GET",
                        url: n + "getVideos/",
                        dataType: "jsonp",
                        data: c,
                        success: function(a) {
                            rb(a.items, a.matched, c, g)
                        }
                    }), D && D.detach(), fb.loadingIndicator && a("." + fb.loadingIndicatorClass, "#" + B).css("display", "block"), m.iScroll && a(m.iScroll.vScrollbarWrapper).css("display", "none")
                }, this.appendMore = function(b) {
                    if (this.canLoadMore()) {
                        z = !0;
                        var c = N;
                        c.startindex = H.length + 1, c.endindex = H.length + (b || 20), c.status = "available", org.pbskids.video.PlaylistEvent.dispatchEvent({
                            eventType: org.pbskids.video.PlaylistEvent.APPEND_START,
                            queryOpts: c,
                            caller: o
                        });
                        var d = new Date,
                            e = d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
                        M = e, fb.debug && f(u.prop("id") + ": fetch to append: ", c), a.ajax({
                            type: "GET",
                            url: n + "getVideos/",
                            dataType: "jsonp",
                            data: c,
                            success: function(a) {
                                rb(a.items, a.matched, c, e, "APPEND")
                            }
                        }), E && E.detach(), D && (D.detach(), D.appendTo(u), m.iScroll && (m.iScroll.refresh(), setTimeout(function() {
                            nb(".appendingIndicator-container")
                        }, "250")))
                    }
                }, this.appendItem = function(a) {
                    return "object" == typeof a && null !== a ? ib(a, H.push(a) - 1) : null
                }, this.copyFromPlaylist = function(a, b) {
                    a && a.getListData && this.copyPlaylistData(a.getListData(), a.getQueryOptions(), b, a.getTotalCount())
                }, this.copyPlaylistData = function(a, b, c, d) {
                    if (a) {
                        z = !0;
                        var e = b || {};
                        e.startindex = 1, e.endindex = a.length, e.status = "available", c && (e.selectedID = c), org.pbskids.video.PlaylistEvent.dispatchEvent({
                            eventType: org.pbskids.video.PlaylistEvent.COPY_START,
                            queryOpts: e,
                            caller: o
                        }), this.purge();
                        var g = new Date,
                            h = g.getMinutes() + "_" + g.getSeconds() + "_" + g.getMilliseconds();
                        M = h, D && D.detach(), fb.debug && f(u.prop("id") + ": copy: ", e), rb(a, d || a.length, e, h, "COPY")
                    }
                }, this.abortLoad = function() {
                    fb.debug && f(u.prop("id") + ": abort loading", null, "warn"), M = "undefined"
                }, this.purge = function() {
                    mb(O, m.next), mb(P, m.previous), G = 0, H = [], y = !1, z = !1, A = !1, fb.loadingIndicator && a("." + fb.loadingIndicatorClass, "#" + B).css("display", "none"), D && D.detach(), E && E.detach(), m.iScroll && a(m.iScroll.vScrollbarWrapper).css("display", "none"), u.empty(), m.iScroll && m.iScroll.refresh()
                }, this.previous = function(b) {
                    if (w.currentTime() / w.duration() > .1) b && F("Skip Buttons", "Return to Beginning"), w.seekToTime(0);
                    else {
                        b && F("Skip Buttons", "Play Previous");
                        var c = a(_releaseClass + ".selected", u).first().prev();
                        0 == c.length && (c = a(_releaseClass, u).last()), a(c).triggerHandler("click")
                    }
                }, this.next = function(b) {
                    b && F("Skip Buttons", "Play Next");
                    var c = a(_releaseClass + ".selected", u).last().next();
                    0 == c.length && (c = a(_releaseClass, u).first()), a(c).triggerHandler("click")
                }, this.registerControl = function(b, c) {
                    fb.debug && c && f("registerControl() : type: " + b + " , selector: " + c);
                    var d = a(c);
                    if (0 != d.length) switch (b) {
                        case "nextVideoControl":
                            O = d, m.hasPlaylist() ? lb(O, m.next) : mb(O, m.next);
                            break;
                        case "previousVideoControl":
                            P = d, m.hasPlaylist() ? lb(P, m.previous) : mb(P, m.previous);
                            break;
                        default:
                            var e = 'The control-type, "' + b + '" is not a recognized control-type in ' + p + ".registerControl()";
                            f(e, null, "warn", !0)
                    } else if (c) {
                        var e = 'Html element(s) could not be found using the selector, "' + c + '"';
                        f(e, null, "warn", !0)
                    }
                }, hb()
            }, org.pbskids.video.PlaylistEvent = function() {
                var b = "org_pbskids_video_PlaylistEvent";
                return {
                    debug: !1,
                    REFRESH_START: b + "_RefreshStart",
                    REFRESH_COMPLETE: b + "_RefreshComplete",
                    APPEND_START: b + "_AppendStart",
                    APPEND_COMPLETE: b + "_AppendComplete",
                    COPY_START: b + "_CopyStart",
                    COPY_COMPLETE: b + "_CopyComplete",
                    RELEASE_SELECTED: b + "_ReleaseSelected",
                    dispatchEvent: function(c) {
                        var d, e = {};
                        switch (c.eventType = (c.eventType || "").replace(/\./g, "_"), c.eventType) {
                            case this.REFRESH_COMPLETE:
                            case this.APPEND_COMPLETE:
                            case this.COPY_COMPLETE:
                                e.playlist = c.playlist || [], e.totalCount = c.totalCount || e.playlist.length;
                            case this.REFRESH_START:
                            case this.APPEND_START:
                            case this.COPY_START:
                                var g = c.queryOpts || {};
                                e.category = g.category || g.group || (g.keywords || g.tags || g.keyword || g.tag ? "" : "New Videos"), e.program = g.program || "", e.keywords = g.keywords || g.tags || "", e.keyword = g.keyword || g.tag || "", e.videoType = g.type || "mixed";
                                break;
                            case this.RELEASE_SELECTED:
                                e.release = c.release || {}, e.playlist = c.playlist || {};
                                break;
                            default:
                                return this.debug && f("eventType, " + c.eventType + ", is not defined in " + b, c, "warn"), void 0
                        }
                        d = a.Event(c.eventType), d.playlistData = e;
                        for (var h in e) d[h] = e[h];
                        a(c.caller || document).trigger(d), window.$ && window.$ != a && window.$(c.caller || document).trigger(d)
                    }
                }
            }(), "Created: \r\n  - window.org.pbskids.video.Player \r\n  - window.org.pbskids.video.PlayList \r\n  - window.org.pbskids.video.PlayerEvent \r\n  - window.org.pbskids.video.VideoEvent \r\n  - window.org.pbskids.video.VideoErrorEvent \r\n  - window.org.pbskids.video.PlaylistEvent"
        })
}();