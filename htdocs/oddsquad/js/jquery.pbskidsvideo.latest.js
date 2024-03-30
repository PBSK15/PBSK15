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
 * Version: 1.4.5
 *
 * Author: Renzo Olguin
 * Email: rmolguin@pbs.org
 ******************************************/
! function() {
    var a, b;
    "undefined" != typeof PBS && PBS.KIDS && PBS.KIDS.require && PBS.KIDS.define ? (a = PBS.KIDS.require, b = PBS.KIDS.define) : (a = window.require, b = window.define);
    var c = function(a) {
        var b, c = "undefined" != typeof exports ? exports : window;
        if ("string" == typeof a) {
            b = a.split(".");
            for (var d in b) c[b[d]] || (c[b[d]] = {}), c = c[b[d]]
        }
        return c
    };
    c("org.pbskids"), org.pbskids.swfobject2_2 = org.pbskids.swfobject2_2 || function() {
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
                    }
                return d
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
                    }
                return g
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
                p = window.navigator.msPointerEnabled,
                q = "ontouchstart" in window && !n,
                r = !!d,
                s = E("transition") in c,
                t = "onorientationchange" in window ? "orientationchange" : "resize",
                u = p ? "MSPointerDown" : q ? "touchstart" : "mousedown",
                v = p ? "MSPointerMove" : q ? "touchmove" : "mousemove",
                w = p ? "MSPointerUp" : q ? "touchend" : "mouseup",
                x = p ? "MSPointerOut" : q ? "touchcancel" : b.attachEvent ? "mouseleave" : "mouseout",
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
                        } if ("zoom" == b.options.wheelAction) return g = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), g < b.options.zoomMin && (g = b.options.zoomMin), g > b.options.zoomMax && (g = b.options.zoomMax), g != b.scale && (!b.wheelZoomCount && b.options.onZoomStart && b.options.onZoomStart.call(b, a), b.wheelZoomCount++, b.zoom(a.pageX, a.pageY, g, 400), setTimeout(function() {
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
                        }
                    for (g == d.currPageX && g > 0 && d.dirX < 0 && g--, b = d.pagesX[g], i = a.abs(b - d.pagesX[d.currPageX]), i = i ? 500 * (a.abs(d.x - b) / i) : 0, d.currPageX = g, g = d.pagesY.length - 1, e = 0; g > e; e++)
                        if (c >= d.pagesY[e]) {
                            g = e;
                            break
                        }
                    return g == d.currPageY && g > 0 && d.dirY < 0 && g--, c = d.pagesY[g], j = a.abs(c - d.pagesY[d.currPageY]), j = j ? 500 * (a.abs(d.y - c) / j) : 0, d.currPageY = g, h = a.round(a.max(i, j)) || 200, {
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
                    var b = this;
                    b.wrapper.style["-ms-touch-action"] = a;
                    var c = b.wrapper.childNodes;
                    for (var d in c) c[d].style && (c[d].style["-ms-touch-action"] = a)
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
            }(a, this), c("org.pbskids.video"), org.pbskids.video.version = "1.4.5", org.pbskids.video.Player = function(b, c) {
                function yb() {
                    a.ajax({
                        type: "GET",
                        url: l + "getHostProgram/",
                        dataType: "jsonp",
                        data: {
                            program: window.location.href
                        },
                        fail: function() {
                            var a = "Connection error, please try again in a moment";
                            throw new Error(a)
                        },
                        success: function(b) {
                            if (b && b.playerName) return r = b.playerName, s = b.affiliateId || "", t = b.defaultProgram || "", u = "", Hb("Validated", "Player Location", window.location.href), t ? a.ajax({
                                type: "GET",
                                url: l + "getShows/",
                                dataType: "jsonp",
                                data: {
                                    title: t
                                },
                                fail: function() {
                                    var a = "Connection error, please try again in a moment";
                                    throw new Error(a)
                                },
                                success: function(a) {
                                    a.matched || (u = t, t = ""), zb()
                                }
                            }) : zb(), void 0;
                            var c = "This is not an authorized instance of a PBS KIDS video player";
                            throw new Error(c)
                        }
                    })
                }

                function zb() {
                    wb.debug = Boolean(wb.debug && "undefined" != typeof console && console.log), org.pbskids.video.PlayerEvent.debug = wb.debug, org.pbskids.video.VideoEvent.debug = wb.debug, org.pbskids.video.VideoErrorEvent.debug = wb.debug, tc()
                }

                function Ab() {
                    var c = {
                            allowFullScreen: "true",
                            scale: "default",
                            allowscriptaccess: "always",
                            menu: "false",
                            wmode: "opaque",
                            bgcolor: "#000000"
                        },
                        d = {
                            id: b + "-swf",
                            name: b + "-swf"
                        },
                        e = {
                            isTouchDevice: qb,
                            onVideoClick: wb.onVideoClick,
                            onHoverOverlay: "{'url'       : '" + wb.onHoverOverlay.url + "', " + "'width'     : '" + wb.onHoverOverlay.width + "', " + "'height'    : '" + wb.onHoverOverlay.height + "', " + "'fs_url'    : '" + wb.onHoverOverlay.fs_url + "', " + "'fs_width'  : '" + wb.onHoverOverlay.fs_width + "', " + "'fs_height' : '" + wb.onHoverOverlay.fs_height + "', " + "'alignment' : '" + "TR" + "'  " + "}",
                            playButtonOverlay: "{'url'       : '" + wb.playIconOverlay.url + "', " + "'width'     : '" + wb.playIconOverlay.width + "', " + "'height'    : '" + wb.playIconOverlay.height + "', " + "'color'     : '" + wb.playIconOverlay.color + "', " + "'opacity'   : '" + wb.playIconOverlay.opacity + "', " + "'alignment' : '" + "MM" + "'  " + "}",
                            loadingOverlay: "{'url'       : '" + wb.loadingOverlay.url + "', " + "'swf'       : '" + wb.loadingOverlay.swf + "', " + "'width'     : '" + wb.loadingOverlay.width + "', " + "'height'    : '" + wb.loadingOverlay.height + "', " + "'color'     : '" + wb.loadingOverlay.color + "', " + "'opacity'   : '" + wb.loadingOverlay.opacity + "', " + "'alignment' : '" + "MM" + "'  " + "}",
                            PlayerEvents: "{ 'PlayerReady'         : 'org.pbskids.video.PlayerEvent.dispatchEvent'}",
                            VideoEvents: "{ 'VideoEnd'            : 'org.pbskids.video.VideoEvent.dispatchEvent',  'MuteChange'          : 'org.pbskids.video.VideoEvent.dispatchEvent',  'VolumeChange'        : 'org.pbskids.video.VideoEvent.dispatchEvent',  'PlayStateChange'     : 'org.pbskids.video.VideoEvent.dispatchEvent',  'DurationChange'      : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CurrentTimeChange'   : 'org.pbskids.video.VideoEvent.dispatchEvent',  'SeekingChange'       : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CaptionsStateChange' : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CanPlayStateChange'  : 'org.pbskids.video.VideoEvent.dispatchEvent',  'CanSeekStateChange'  : 'org.pbskids.video.VideoEvent.dispatchEvent',  'LoadStateChange'     : 'org.pbskids.video.VideoEvent.dispatchEvent'  }",
                            VideoErrorEvents: "{ 'GeoRestricted' : 'org.pbskids.video.VideoErrorEvent.dispatchEvent',  'VideoNotFound' : 'org.pbskids.video.VideoErrorEvent.dispatchEvent',  'VideoExpired'  : 'org.pbskids.video.VideoErrorEvent.dispatchEvent',  'NoResponse'    : 'org.pbskids.video.VideoErrorEvent.dispatchEvent'  }"
                        };
                    a(document).on(org.pbskids.video.PlayerEvent.PLAYER_READY, Db), a("<div/>").prop("id", "temp-swf-container").append(a("<div/>").prop("id", "replace-with-flash-content")).insertBefore("#" + b), org.pbskids.swfobject2_2.embedSWF(i, "replace-with-flash-content", "100%", "100%", m, k, e, c, d, Cb)
                }

                function Bb() {
                    if (lb || hb || jb || kb || ib) {
                        if (o = a("video#" + b).length > 0 ? a("video#" + b) : a("#" + b + " video").length > 0 ? a("#" + b + " video").first() : a("<video/>").appendTo("#" + b), q = "html5", p = jb || kb || ib ? "flash" : "iphone", a("html").addClass("no-flash-video"), mb || (w = a("<div/>").insertAfter(a("#" + b)).css({
                            position: "relative",
                            "z-index": "200",
                            height: "0",
                            overflow: "hidden"
                        }), wb.playIconOverlay.url && (z = a("<div/>").appendTo(w).addClass("overlay").append(a("<img/>").prop("src", wb.playIconOverlay.url).css({
                            "line-height": "normal",
                            "vertical-align": "middle",
                            "max-height": "100%"
                        })).css({
                            width: "100%",
                            height: "100%",
                            "text-align": "center",
                            "line-height": "inherit",
                            position: "absolute",
                            "background-image": "url(" + h + "pbsk/video/img/background_" + wb.playIconOverlay.color + "_opacity_" + wb.playIconOverlay.opacity + ".png)",
                            cursor: "pointer"
                        }).hide().click(ac), wb.playIconOverlay.width && a("img", z).css("width", wb.playIconOverlay.width), wb.playIconOverlay.height && a("img", z).css("height", wb.playIconOverlay.height)), wb.loadingOverlay.url && (y = a("<div/>").appendTo(w).addClass("overlay").append(a("<img/>").prop("src", wb.loadingOverlay.url).css({
                            "line-height": "normal",
                            "vertical-align": "middle",
                            "max-height": "100%"
                        })).css({
                            width: "100%",
                            height: "100%",
                            "text-align": "center",
                            "line-height": "inherit",
                            position: "absolute",
                            "background-image": "url(" + h + "pbsk/video/img/background_" + wb.loadingOverlay.color + "_opacity_" + wb.loadingOverlay.opacity + ".png)"
                        }).hide(), wb.loadingOverlay.width && a("img", y).css("width", wb.loadingOverlay.width), wb.loadingOverlay.height && a("img", y).css("height", wb.loadingOverlay.height)), (wb.onVideoClick || wb.onHoverOverlay.url) && (A = a("<div/>").prependTo(w).addClass("overlay").css({
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            cursor: "pointer"
                        }), wb.onVideoClick && A.click(pc), wb.onHoverOverlay.url && (a("<img/>").prop("src", wb.onHoverOverlay.url).css({
                            bottom: "4px",
                            right: "4px",
                            position: "absolute",
                            "max-height": "100%"
                        }).appendTo(A), wb.onHoverOverlay.width && a("img", A).css("width", wb.onHoverOverlay.width), wb.onHoverOverlay.height && a("img", A).css("height", wb.onHoverOverlay.height), qb || (a("img", A).hide(), A.hover(function() {
                            a("img", A).show()
                        }, function() {
                            a("img", A).hide()
                        })))), x = a("<div/>").appendTo(w).addClass("overlay").css({
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            "background-image": "url(" + h + "pbsk/video/img/background_black_opacity_80.png)"
                        }).hide()), "undefined" != typeof document.cancelFullScreen) _ = !0, bb = "legacy-webkit";
                        else if (lb || hb && !jb) _ = !0, bb = "webkit";
                        else
                            for (var c = 0; c < cb.length; c++)
                                if (bb = cb[c], "undefined" != typeof document[bb + "CancelFullScreen"]) {
                                    _ = !0;
                                    break
                                }
                        Nb(), Lb(), Eb()
                    } else Fb()
                }

                function Cb(c) {
                    wb.debug && console.log(" _onFlashCheck() :: succes = " + c.success), c.success ? (_ = !0, D = !0, q = "flash", p = "flash", o = c.ref, a("#" + b).remove(), a("#temp-swf-container").prop("id", b).css({
                        overflow: "hidden"
                    }), a("html").addClass("flash-video"), G ? Eb(null) : sc()) : (a("#temp-swf-container").remove(), Bb())
                }

                function Db(b) {
                    a(document).off(org.pbskids.video.PlayerEvent.PLAYER_READY, Db), wb.debug && console.log(" _onFlashPlayerReady() "), G = !0, D && Eb(b)
                }

                function Eb(d) {
                    wb.debug && console.log("_initSuccessful()"), v.registerControl("muteToggleControl", wb.muteToggleControl || ""), v.registerControl("pauseToggleControl", wb.pauseToggleControl || ""), v.registerControl("captionsToggleControl", wb.captionsToggleControl || ""), v.registerControl("timerRemaining", wb.timerRemaining || ""), v.registerControl("timerCurrent", wb.timerCurrent || ""), v.registerControl("timerDuration", wb.timerDuration || ""), v.registerControl("scrubber", wb.scrubber || ""), v.registerControl("volumeDisplay", wb.volumeDisplay || ""), v.registerControl("volumeSlider", wb.volumeSlider || ""), v.registerControl("verticalVolumeSlider", wb.verticalVolumeSlider || ""), a(window).resize(rc), a(document).on(org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, fc), a(document).on(org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, jc), a(document).on(org.pbskids.video.VideoEvent.DURATION_CHANGE, kc), a(document).on(org.pbskids.video.VideoEvent.SEEKING_CHANGE, ic), a(document).on(org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, gc), a(document).on(org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, hc), a(document).on(org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, ec), a(document).on(org.pbskids.video.VideoEvent.VIDEO_END, lc), qb || (a(document).on(org.pbskids.video.VideoEvent.MUTE_CHANGE, mc), a(document).on(org.pbskids.video.VideoEvent.VOLUME_CHANGE, nc), D && a(document).on(org.pbskids.video.VideoEvent.CAPTIONS_STATE_CHANGE, oc)), c.disableKeyboard === !0 || qb && !pb || a(document).on("keydown", ib ? vc : wc);
                    var e = {
                        success: !0,
                        id: a(o).prop("id"),
                        ref: o,
                        player: v,
                        message: ""
                    };
                    "function" == typeof wb.onPlayerComplete && wb.onPlayerComplete.call(this, e), d || (e.eventType = org.pbskids.video.PlayerEvent.PLAYER_READY, org.pbskids.video.PlayerEvent.dispatchEvent(e)), a("#" + b).resize(sc), sc(), wb.debug && (console.log("----------------------------------------"), console.log("supportsFullScreen: " + _), console.log("browserPrefix: " + bb), console.log("fullScreenEvent: " + ab), console.log("----------------------------------------"), console.log("isFlashPlayer: " + D), console.log("videoType: " + p), console.log("playerType: " + q), console.log("----------------------------------------"), console.log("IS_IE: " + gb), console.log("IS_SAFARI: " + hb), console.log("----------------------------------------"), console.log("IS_GOOGLE_TV: " + ib), console.log("IS_ANDROID: " + jb), console.log("IS_KINDLE_FIRE: " + kb), console.log("IS_iDEVICE: " + lb), console.log("IS_iPOCKET: " + mb), console.log("IS_iPAD: " + nb), console.log("IS_TOUCH_PAD: " + ob), console.log("HAS_TOUCH: " + qb), console.log("HAS_POINTER: " + pb), console.log("----------------------------------------"), console.log("UA-String: " + navigator.appVersion), console.log("Plugin Version: " + org.pbskids.video.version))
                }

                function Fb() {
                    var a = {
                        success: !1,
                        id: b,
                        ref: null,
                        player: null,
                        message: 'To watch videos from your favorite PBS KIDS shows, please install <a href="http://get.adobe.com/flashplayer/">Adobe Flash</a>, or watch on an iPad, iPhone, or iPod Touch.'
                    };
                    "function" == typeof wb.onPlayerComplete && wb.onPlayerComplete.call(this, a)
                }

                function Gb(b, c, d, e, f) {
                    if (!b) {
                        var g = "Comscore Error: Missing Mandatory Tag: Client ID (c2 tag)";
                        return console && console.error && console.error(g), void 0
                    }
                    if (!b.toString().match(/^\d{7}$/)) {
                        var g = "Comscore Error: Invalid Mandatory Tag: Client ID (c2 tag) must be a 7-digit unique client ID";
                        return console && console.error && console.error(g), void 0
                    }
                    if (!c) {
                        var g = "Comscore Error: Missing Mandatory Tag: Video Type (c5 tag)";
                        return console && console.error && console.error(g), void 0
                    }
                    if (!c.toString().match(/^(0[1-6|9]|1[0-3])$/)) {
                        var g = "Comscore Error: Invalid Mandatory Tag: Video Type (c5 tag) must be a 2-digit content type (video type) identifier {01-06, 09-13}";
                        return console && console.error && console.error(g), void 0
                    }
                    var h = new Array(("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/p?", "?c1=", 1, "&c2=", escape(b), "&c5=", escape(c), "&c3=", escape(d || ""), "&c4=", escape(e || ""), "&c6=", escape(f || ""), "&c7=", escape(document.location.href), "&c8=", escape(document.title), "&c9=", "", "&c10=", "", "&rn=", Math.random(), "&cv=", "2.0").join("");
                    db || (db = a("<img/>").prop("id", "pbskids-comscore-video-beacon").appendTo(a("body"))), db.prop("src", h)
                }

                function Hb(a, b, c, d) {
                    a = r + " - " + a, b = (s ? s + " - " : "") + b, wb.debug && console.log("_trackEvent: " + a + " : " + b + " : " + c + " : " + d), window.GA_obj && GA_obj.trackEvent && GA_obj.trackEvent(a, b, c, d)
                }

                function Ib(a, b) {
                    Hb("Controls", a, b)
                }

                function Jb(a, b) {
                    if (b) {
                        var c, d = 100 * (a / b.duration),
                            e = (b.series_title || "No-Series-Title") + " | " + (b.type || "No-Video-Type") + " | " + (b.title || "No-Title") + " | " + v.formatTime(b.duration);
                        isNaN(d) && (d = 0), c = 0 == d ? "0%" : 5 > d ? "0-5%" : 10 > d ? "5-10%" : 20 > d ? "10-20%" : 30 > d ? "20-30%" : 40 > d ? "30-40%" : 50 > d ? "40-50%" : 60 > d ? "50-60%" : 70 > d ? "60-70%" : 80 > d ? "70-80%" : 90 > d ? "80-90%" : 95 > d ? "90-95%" : "95-100%", org.pbskids.video.VideoEvent.dispatchEvent({
                            eventType: org.pbskids.video.VideoEvent.VIDEO_VIEWED,
                            release: b,
                            percentViewed: d
                        }), Hb("Duration Viewed", e, c, Math.ceil(a))
                    }
                }

                function Kb(a, b) {
                    if (b) {
                        switch (a.toLowerCase()) {
                            case "mediaload":
                                a = "MediaLoad";
                                break;
                            case "mediacomplete":
                                a = "MediaComplete";
                                break;
                            case "mediastart":
                                a = "MediaStart";
                                var c;
                                switch ((b.type || "").toLowerCase()) {
                                    case "episode":
                                        c = "03";
                                        break;
                                    case "clip":
                                        c = "02";
                                        break;
                                    case "ad":
                                        c = "09";
                                        break;
                                    default:
                                        c = "00"
                                }
                                Gb(3005420, c, 3005420, 7197992, ""), org.pbskids.video.VideoEvent.dispatchEvent({
                                    eventType: org.pbskids.video.VideoEvent.VIDEO_START,
                                    release: b
                                });
                                break;
                            default:
                                return
                        }
                        var d = (b.series_title || "No-Series-Title") + " | " + (b.type || "No-Video-Type") + " | " + (b.title || "No-Title") + " | " + v.formatTime(b.duration);
                        Hb("Playback", a, d)
                    }
                }

                function Lb() {
                    for (var a in $) lb && "volumechange" == $[a] || (o.bind($[a], dc), wb.debug && console.log('Bound to media event, "' + $[a] + '"'))
                }

                function Nb() {
                    _ && "legacy-webkit" != bb && (lb ? (a(o).on("webkitbeginfullscreen", qc), a(o).on("webkitendfullscreen", qc), ab = "webkitbeginfullscreen && webkitendfullscreen") : (ab = bb + "fullscreenchange", "moz" == bb ? a(document).on(ab, qc) : a(o).on(ab, qc)))
                }

                function Ob(b, c, d, e) {
                    b && ("function" == typeof d && b.each(function() {
                        a(this).off(sb), a(this).on(sb, d)
                    }), "function" == typeof c && b.each(function() {
                        a(this).off("click"), a(this).on("click", c)
                    }), b.removeClass("disabled-control").addClass("enabled-control").css(e || {}))
                }

                function Pb(b, c, d, e) {
                    b && (b.addClass("disabled-control").removeClass("enabled-control").css(e || {}), "function" == typeof d && b.each(function() {
                        a(this).off(sb, d)
                    }), "function" == typeof c && b.each(function() {
                        a(this).off("click", c)
                    }))
                }

                function Qb() {
                    return jb && !_ || kb ? (Rb(), void 0) : (W && (Ob(W.scrubber, null, Wb), Ob(W.track), Ob(W.thumb)), void 0)
                }

                function Rb() {
                    W && (Pb(W.scrubber, null, Wb), Pb(W.track), Pb(W.thumb, null, null, {
                        left: "0"
                    }), $b(null))
                }

                function Sb() {
                    Z && !C && (Ob(Z.scrubber, null, Xb), Ob(Z.track), Ob(Z.thumb), C = !0)
                }

                function Tb() {
                    Vb(Z), nc({
                        volume: 1 == v.muted() ? 0 : v.volume()
                    })
                }

                function Ub() {
                    Vb(W), W.scrubTo(K / M)
                }

                function Vb(a, b) {
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
                            if (scrubbing = !1, a.vertical === !0) {
                                var c = scrubbing ? .5 * i / g : 0;
                                b = 1 - Math.min(1 - c, Math.max(c, b || c)), scrubPosition = (g - (scrubbing ? 0 : i)) * b, a.thumb.css("top", scrubPosition - (scrubbing ? i / 2 : 0))
                            } else {
                                var c = scrubbing ? .5 * h / f : 0;
                                b = Math.min(1 - c, Math.max(c, b || c)), scrubPosition = (f - (scrubbing ? 0 : h)) * b, a.thumb.css("left", scrubPosition - (scrubbing ? h / 2 : 0))
                            }
                        }
                    }
                }

                function Wb(a) {
                    Yb(a, W)
                }

                function Xb(a) {
                    Yb(a, Z)
                }

                function Yb(b, c) {
                    b.preventDefault && b.preventDefault(), b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0, a(document).on(tb, c, Zb), a(document).on(ub, c, $b), qb && a(document).on(vb, c, $b), Zb(b, c)
                }

                function Zb(a, b) {
                    a.preventDefault && a.preventDefault(), b = b || a.data;
                    var c = 0 / 0,
                        d = qb ? a.originalEvent.touches[0] || a.originalEvent.changedTouches[0] : pb ? a.originalEvent : a;
                    d && b && b.bounds && (c = b.vertical === !0 ? Math.min(1, Math.max(0, b.bounds.height - (d.pageY + b.bounds.top)) / b.bounds.height) : Math.min(1, Math.max(0, d.pageX + b.bounds.left) / b.bounds.width), b.scrubTo(c), b.updateFunction(c))
                }

                function $b(b) {
                    a(document).off(tb, Zb), a(document).off(ub, $b), qb && a(document).off(vb, $b), b && b.data & b.data.scrubbing && (b.data.scrubbing = !1)
                }

                function _b() {
                    v.showingCaptions() ? (Ib("toggleCaptions", "Off"), v.hideCaptions()) : (Ib("toggleCaptions", "On"), v.showCaptions())
                }

                function ac() {
                    v.paused() ? (Ib("togglePause", "Unpause"), z && z.hide(), A && A.show(), v.unpause()) : (Ib("togglePause", "Pause"), v.pause())
                }

                function bc() {
                    v.muted() ? v.unmute() : v.mute()
                }

                function cc() {
                    v.isFullscreen() ? (Ib("toggleScreen", "Normal"), v.exitFullscreen()) : (Ib("toggleScreen", "Fullscreen"), v.enterFullscreen())
                }

                function dc(a) {
                    var b = {},
                        c = wb.debug && "timeupdate" != a.type;
                    switch (c && console.log("Video Event: " + a.type), a.type) {
                        case "ended":
                            var d = o.prop("currentTime");
                            if (d > M + 2) return;
                            b.eventType = org.pbskids.video.VideoEvent.VIDEO_END;
                            break;
                        case "loadstart":
                            H || (b.eventType = org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, b.canPlay = !0, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {});
                        case "waiting":
                            b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "loading";
                            break;
                        case "loadeddata":
                            b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "ready";
                            break;
                        case "playing":
                            var e = o.prop("duration");
                            0 == e || isNaN(e) ? (b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "loading", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}) : e == M || isNaN(e) || (b.eventType = org.pbskids.video.VideoEvent.DURATION_CHANGE, b.duration = e, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), X !== v.canSeek() && (b.eventType = org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, b.canSeek = v.canSeek(), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, b.playState = "playing";
                            break;
                        case "pause":
                            var d = o.prop("currentTime");
                            isNaN(d) || d > 0 && M >= d && (b.eventType = org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, b.time = d, b.percent = Math.min(1, Math.max(0, o.prop("currentTime") / (M || 1))), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, b.playState = "paused";
                            break;
                        case "timeupdate":
                            E && (E = !1, b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "ready", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, b.time = o.prop("currentTime") || 0, b.percent = Math.min(1, Math.max(0, o.prop("currentTime") / (M || 1)));
                            break;
                        case "durationchange":
                            E && (b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "ready", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.DURATION_CHANGE, b.duration = o.prop("duration"), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.CURRENT_TIME_CHANGE, b.time = 0, b.percent = 0;
                            break;
                        case "seeking":
                            b.eventType = org.pbskids.video.VideoEvent.SEEKING_CHANGE, b.time = o.prop("currentTime") || 0, b.percent = Math.min(1, Math.max(0, o.prop("currentTime") / (v.duration() || 1))), b.seeking = !0;
                            break;
                        case "seeked":
                            b.eventType = org.pbskids.video.VideoEvent.SEEKING_CHANGE, b.time = o.prop("currentTime") || 0, b.percent = Math.min(1, Math.max(0, o.prop("currentTime") / (v.duration() || 1))), b.seeking = !1;
                            break;
                        case "emptied":
                            b.eventType = org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, b.playState = "paused", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, b.canPlay = !1, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, b.canSeek = !1, org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "unloading", org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}, b.eventType = org.pbskids.video.VideoEvent.LOAD_STATE_CHANGE, b.loadState = "uninitialized";
                            break;
                        case "canplay":
                            X != v.canSeek() && (b.eventType = org.pbskids.video.VideoEvent.CAN_SEEK_STATE_CHANGE, b.canSeek = v.canSeek(), org.pbskids.video.VideoEvent.dispatchEvent(b), b = {}), b.eventType = org.pbskids.video.VideoEvent.CAN_PLAY_STATE_CHANGE, b.canPlay = !0;
                            break;
                        case "volumechange":
                            b.eventType = org.pbskids.video.VideoEvent.VOLUME_CHANGE, b.volume = o.prop("volume"), org.pbskids.video.VideoEvent.dispatchEvent(b);
                            break;
                        default:
                            return wb.debug && (console.log('The video event, "' + a.type + '", does not have a handler'), console.log("--------")), void 0
                    }
                    org.pbskids.video.VideoEvent.dispatchEvent(b), c && console.log("--------")
                }

                function ec(a) {
                    (jb || kb) && !_ || lb && !H ? (E = !1, y && y.hide(), z && z.show(), A && A.hide()) : (E = "loading" == a.loadState, y && y.toggle(E), z && z.toggle(v.paused()), A && A.toggle(!v.paused()))
                }

                function fc(a) {
                    var b, c = "playing" == a.playState;
                    c && (H = !0), b = !c && !E && v.canPlay(), Q && Q.toggleClass("playing", c).toggleClass("paused", !c), z && z.toggle(b), A && A.toggle(!b), wb.debug && (console.log("-- _onPlayStateChange() -----------"), console.log("__playing: " + c), console.log("_supportsFullScreen: " + _), console.log("_videoLoading: " + E), console.log("_that.canPlay(): " + v.canPlay()), console.log("__showPauseOverlay: " + b), console.log("_pauseToggleControl: " + Q), console.log("-----------------------------------"))
                }

                function gc(a) {
                    return F = a.canPlay, a && F ? (Kb("MediaStart", I), Ob(Q, ac), Ob(R, _b), P && !B && (Ob(P, bc), B = !0), Sb(), a.volume = v.muted() ? 0 : v.volume(), nc(a), void 0) : (Pb(Q, ac), Pb(R, _b), z && z.hide(), void 0)
                }

                function hc(a) {
                    X = a.canSeek, a.canSeek ? Qb() : Rb()
                }

                function ic(a) {
                    K = a.time, L = M - K, U && U.html(v.formatTime(K)), T && T.html(v.formatTime(L))
                }

                function jc(a) {
                    !W.scrubbing && !isNaN(a.time) && a.time >= 0 && a.time < 1 / 0 && (N += a.time - K, K = a.time, L = M - K, U && U.html(v.formatTime(K)), T && T.html(v.formatTime(L)), W && W.scrubTo(a.percent))
                }

                function kc(a) {
                    isNaN(a.duration) || a.duration >= 0 && a.duration < 1 / 0 && (M = a.duration, V && V.html(v.formatTime(M)))
                }

                function lc() {
                    y && y.hide(), z && z.show(), A && A.hide(), Kb("MediaComplete", I), N >= 0 && Jb(N, I), N = -1
                }

                function mc(b) {
                    P && (P.toggleClass("muted", b.muted === !0), a("html").toggleClass("video-player-muted", b.muted === !0)), b.volume = b.muted === !0 ? 0 : v.volume(), nc(b)
                }

                function nc(a) {
                    Y && Y.html(Math.round(100 * a.volume) + "%"), Z && Z.scrubTo && !Z.scrubbing && Z.scrubTo(a.volume)
                }

                function oc(a) {
                    R && R.toggleClass("captions-on", "showing" == a.captionsState)
                }

                function pc() {
                    switch (wb.onVideoClick) {
                        case "toggle-fullscreen":
                            cc();
                            break;
                        case "toggle-pause":
                            ac()
                    }
                }

                function qc(a) {
                    wb.debug && (console.log("_onFullScreenChange(): "), console.log(a)), rc()
                }

                function rc() {
                    Z && Tb(), W && Ub()
                }

                function sc() {
                    if (o) {
                        var c, d = a("#" + b);
                        D ? (c = Math.round(d.width() / wb.aspectRatio) + "px", d.css("height", c)) : c = d.css("height"), w && w.css({
                            "margin-top": "-" + c,
                            height: c,
                            "line-height": c
                        }), J = "originalres_" + (wb.aspectRatio > 1.55 ? "16x9" : "4x3")
                    }
                }

                function tc() {
                    a.ajax({
                        type: "GET",
                        url: l + "getVideos/",
                        dataType: "jsonp",
                        data: {
                            endindex: 1,
                            status: "available"
                        },
                        success: function(b) {
                            a.ajax({
                                type: "GET",
                                url: b.items[0].videos.ipad.url,
                                dataType: "jsonp",
                                data: {
                                    format: "jsonp"
                                },
                                success: function(a) {
                                    if ("ok" == a.status) return lb || jb || kb || ib ? Bb() : Ab(), void 0;
                                    var b = {
                                        message: a.message
                                    };
                                    switch (a.http_code) {
                                        case 403:
                                            b.eventType = org.pbskids.video.VideoErrorEvent.GEO_RESTRICTED;
                                            break;
                                        case 404:
                                            b.eventType = org.pbskids.video.VideoErrorEvent.VIDEO_NOT_FOUND;
                                            break;
                                        case 410:
                                            b.eventType = org.pbskids.video.VideoErrorEvent.VIDEO_EXPIRED;
                                            break;
                                        default:
                                            return
                                    }
                                    org.pbskids.video.VideoErrorEvent.dispatchEvent(b)
                                }
                            })
                        }
                    })
                }

                function uc(a, b) {
                    a.style["-ms-touch-action"] = b;
                    var c = a.childNodes;
                    for (var d in c) c[d].style && (c[d].style["-ms-touch-action"] = b)
                }

                function vc(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case eb.SPACE:
                        case fb.TOGGLE_PAUSE:
                            v.togglePause();
                            break;
                        case fb.STOP:
                            v.pause();
                            break;
                        case fb.FORWARD:
                            v.seekToTime(v.currentTime() + 10);
                            break;
                        case fb.REWIND:
                            v.seekToTime(v.currentTime() - 5)
                    }
                }

                function wc(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case eb.ENTER:
                        case eb.SPACE:
                            v.togglePause(), a.preventDefault();
                            break;
                        case eb.RIGHT:
                            a.shiftKey || (v.seekToTime(v.currentTime() + 10), a.preventDefault());
                            break;
                        case eb.LEFT:
                            a.shiftKey || (v.seekToTime(v.currentTime() - 5), a.preventDefault());
                            break;
                        case eb.UP:
                            qb || v.volume(v.volume() + .1), a.preventDefault();
                            break;
                        case eb.DOWN:
                            qb || v.volume(v.volume() - .1), a.preventDefault();
                            break;
                        case eb.C:
                            !qb && a.shiftKey && _b()
                    }
                }
                var d, e = [/^http:\/\/(www|dipsy)?(-tc)?\.?pbs\.org/, /^http:\/\/(www|soup|ernie)?(-tc)?\.?pbskids\.org/, /^http:\/\/(dev|qa|demo)?(-tc)?\.?pbskids\.org/, /^http:\/\/jsfiddle\.net/, /^http:\/\/docs\.pbskids\.org/, /^http:\/\/(www)?(-tc)?\.pbskids\.wested\.org/];
                if (window.top != window) {
                    var f = !1;
                    d = document.referrer;
                    for (var g in e)
                        if (null !== d.match(e[g])) {
                            f = !0, null !== d.match(/\.org\/producerplayer/) && (d = window.top.location.href);
                            break
                        }
                    if (!f) throw new Error("This site does not have permission to frame this PBS KIDS video player")
                } else d = window.location.href;
                //var h = -1 != d.indexOf("dev.pbskids.org/~rmolguin") ? "http://dev.pbskids.org/" : -1 != d.indexOf("qa.pbskids.org/") ? "http://qa.pbskids.org/" : "http://www-tc.pbskids.org/"; - 1 != d.indexOf("dev.pbskids.org/~rmolguin") ? c.testing = !0 : "http://dev.pbskids.org/" != h && (c.testing = !1);
				var h = "http://pbskids.org";
                var o, p, q, r, s, t, u, I, J, db, i = h + "pbsk/video/swf/" + (c && c.testing === !0 ? "org/pbskids/video/" : "") + "VideoPlayer.swf",
                    k = h + "pbsk/swf/expressInstall.swf",
                    l = "http://pbskids.org/pbsk/video/api/",
                    m = "10.1.0",
                    n = "org.pbskids.video.Player",
                    v = this,
                    w = null,
                    x = null,
                    y = null,
                    z = null,
                    A = null,
                    B = !1,
                    C = !1,
                    D = !1,
                    E = !1,
                    F = !1,
                    G = !1,
                    H = !1,
                    K = 0,
                    L = 0,
                    M = 0,
                    N = 0,
                    O = 100,
                    P = null,
                    Q = null,
                    R = null,
                    T = null,
                    U = null,
                    V = null,
                    W = null,
                    X = !1,
                    Y = null,
                    Z = null,
                    $ = new Array("loadstart", "waiting", "loadeddata", "emptied", "canplay", "playing", "pause", "seeking", "seeked", "ended", "durationchange", "timeupdate", "volumechange"),
                    _ = !1,
                    ab = "",
                    bb = "",
                    cb = "webkit moz o ms khtml".split(" "),
                    eb = {
                        SPACE: 32,
                        ENTER: 13,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        C: 67
                    },
                    fb = {
                        FORWARD: 228,
                        REWIND: 227,
                        STOP: 178,
                        TOGGLE_PAUSE: 179
                    },
                    gb = !1,
                    hb = /safari/gi.test(navigator.appVersion) && /apple/gi.test(navigator.vendor),
                    ib = /googletv/gi.test(navigator.appVersion),
                    jb = /android/gi.test(navigator.appVersion),
                    kb = /silk|kindlefire/gi.test(navigator.appVersion),
                    lb = /iphone|ipad|ipod/gi.test(navigator.appVersion),
                    mb = /iphone|ipod/gi.test(navigator.appVersion),
                    nb = /ipad/gi.test(navigator.appVersion),
                    ob = /hp-tablet/gi.test(navigator.appVersion),
                    pb = window.navigator.msPointerEnabled || !1,
                    qb = "ontouchstart" in window && !ob,
                    sb = pb ? "MSPointerDown" : qb ? "touchstart" : "mousedown",
                    tb = pb ? "MSPointerMove" : qb ? "touchmove" : "mousemove",
                    ub = pb ? "MSPointerUp" : qb ? "touchend" : "mouseup",
                    vb = pb ? "MSPointerOut" : qb ? "touchcancel" : document.attachEvent ? "mouseleave" : "mouseout",
                    wb = {
                        debug: !1,
                        aspectRatio: 16 / 9,
                        disableKeyboard: !1,
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
                            url: h + "pbsk/video/img/arrowspin.gif",
                            swf: h + "pbsk/video/swf/arrowspin.swf",
                            width: "50px",
                            height: "50px",
                            color: "white",
                            opacity: 90
                        },
                        playIconOverlay: {
                            url: h + "pbsk/video/img/button_overlay_play.png",
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
                    var xb = "org.pbskids.video.Player requires " + (arguments.length > 0 ? "the first" : "one") + " parameter of type String";
                    throw new Error(xb)
                }
                if (b = b.substr(b.indexOf("#") + 1), !document.getElementById(b)) {
                    var xb = 'An html element with the id, "' + b + '",  could not be found';
                    throw new Error(xb)
                }
                this.toggleFullscreen = function() {
                    cc()
                }, this.enterFullscreen = function() {
                    o && !D && _ && ("" === bb ? o.get(0).requestFullScreen() : bb.match("webkit") ? ib || o.get(0).webkitEnterFullscreen() : o.get(0)[bb + "RequestFullScreen"](), a("html").addClass("isfullscreen"))
                }, this.exitFullscreen = function() {
                    o && !D && _ && ("" === bb ? document.cancelFullScreen() : bb.match("webkit") ? ib || document.webkitExitFullscreen() : document[bb + "CancelFullScreen"](), a("html").removeClass("isfullscreen"))
                }, this.videoType = function() {
                    return p
                }, this.aspectRatio = function() {
                    return wb.aspectRatio
                }, this.isFlashPlayer = function() {
                    return D
                }, this.commonName = function() {
                    return r
                }, this.affiliateId = function() {
                    return s
                }, this.siteProgram = function() {
                    return t
                }, this.siteCategory = function() {
                    return u
                }, this.paused = function() {
                    return o ? D ? o.paused ? o.paused() : !1 : o.prop("paused") : !1
                }, this.muted = function() {
                    return o ? D ? o.muted ? o.muted() : !1 : o.prop("muted") : !1
                }, this.canSeek = function() {
                    return o ? D ? o.canSeek ? o.canSeek() : !1 : o.prop("seekable") ? !0 : !1 : !1
                }, this.canPlay = function() {
                    return o ? D ? o.canPlay ? o.canPlay() : !1 : F : !1
                }, this.isFullscreen = function() {
                    if (!o) return !1;
                    if (D) return o.displayingFullscreen ? o.displayingFullscreen() : !1;
                    if (ib) return a("html").hasClass("isfullscreen");
                    if (_) switch (bb) {
                        case "":
                            return document.fullScreen;
                        case "webkit":
                            return document.webkitIsFullScreen;
                        default:
                            return document[bb + "FullScreen"]
                    }
                }, this.pause = function() {
                    o && (D ? o.pause() : o.get(0).pause())
                }, this.unpause = function() {
                    o && (D ? o.unpause() : o.get(0).play())
                }, this.playVideo = function() {
                    o && (D ? o.playVideo() : o.get(0).play())
                }, this.togglePause = function() {
                    this.paused() ? this.unpause() : this.pause()
                }, this.seekToTime = function(a) {
                    o && !isNaN(a) && (a = Math.max(0, Math.min(a, M)), D ? o.seekToTime(a) : o.prop("currentTime", a))
                }, this.seekToPercent = function(a) {
                    o && !isNaN(a) && (a = Math.max(0, Math.min(a, 1)), D ? o.seekToPercent(a) : o.prop("currentTime", v.duration() * a))
                }, this.currentTime = function() {
                    return K
                }, this.remainingTime = function() {
                    return L
                }, this.duration = function() {
                    return M
                }, this.loadAndPlay = function(b) {
                    if (qb && !H) this.loadAndStop(b);
                    else if (o) {
                        if ("object" != typeof b) {
                            if ("string" == typeof b) {
                                var c = {
                                    guid: b,
                                    status: "available",
                                    player: v.videoType(),
                                    flash: v.isFlashPlayer()
                                };
                                t && (c.program = t), u && (c.category = u), a.ajax({
                                    type: "GET",
                                    url: l + "getVideos/",
                                    dataType: "jsonp",
                                    data: c,
                                    success: function(a) {
                                        if (a.matched > 0) v.loadAndPlay(a.items[0]);
                                        else {
                                            var c = "Could not find a published and available video for this site with the guid: " + b;
                                            console && console.warn && console.warn(c)
                                        }
                                    }
                                })
                            } else {
                                var d = "No ReleaseObject or guid was provided. Exiting .loadAndPlay().";
                                console && console.warn && console.warn(d)
                            }
                            return
                        }
                        var e = b.videos[p].url ? b.videos[p].url : b.videos[p],
                            f = b.images[J] ? b.images[J].url || "" : "";
                        N >= 0 && Jb(N, I), N = 0, K = 0, isNaN(b.duration) && (b.duration = b.videos[p].length / 1e3), Kb("MediaLoad", b), D ? o.loadAndPlay(e, f) : (x && x.hide(), o.attr({
                            src: " ",
                            poster: f,
                            autoplay: "false"
                        }), o.attr({
                            src: e,
                            autoplay: "autoplay",
                            poster: f
                        }).get(0).load(), this.playVideo()), this.captionsURL(b.captions.sami ? b.captions.sami.url || "" : b.captions.dfxp ? b.captions.dfxp.url || "" : ""), I = b
                    }
                }, this.loadAndStop = function(b) {
                    if (o) {
                        if ("object" != typeof b) {
                            if ("string" == typeof b) {
                                var c = {
                                    guid: b,
                                    status: "available",
                                    player: v.videoType(),
                                    flash: v.isFlashPlayer()
                                };
                                t && (c.program = t), u && (c.category = u), a.ajax({
                                    type: "GET",
                                    url: l + "getVideos/",
                                    dataType: "jsonp",
                                    data: c,
                                    success: function(a) {
                                        if (a.matched > 0) wb.debug && (console.log("Found Release:"), console.log(a.items[0])), v.loadAndStop(a.items[0]);
                                        else if (wb.debug) {
                                            var c = "Could not find a published and available video for this site with the guid: " + b;
                                            console.warn ? console.warn(c) : console.log("warning: " + c)
                                        }
                                    }
                                })
                            } else {
                                var d = "No ReleaseObject or guid was provided. Exiting .loadAndPlay().";
                                console && console.warn && console.warn(d)
                            }
                            return
                        }
                        var e = b.videos[p].url ? b.videos[p].url : b.videos[p],
                            f = b.images[J] ? b.images[J].url || "" : "";
                        N >= 0 && Jb(N, I), N = 0, K = 0, isNaN(b.duration) && (b.duration = b.videos[p].length / 1e3), Kb("MediaLoad", b), D ? o.loadAndStop(e, f) : (x && x.hide(), o.attr({
                            src: " ",
                            poster: f,
                            autoplay: "false"
                        }), o.attr({
                            src: e,
                            poster: f,
                            autoplay: "false"
                        }).get(0).load()), this.captionsURL(b.captions.sami ? b.captions.sami.url || "" : b.captions.dfxp ? b.captions.dfxp.url || "" : ""), I = b
                    }
                }, this.loadAndPause = this.loadAndStop, this.unload = function() {
                    o && (D && o.unload ? o.unload() : (this.pause(), x && x.show(), o.attr({
                        src: " ",
                        poster: " ",
                        autoplay: "false"
                    }), o.trigger("emptied")))
                }, this.showingCaptions = function() {
                    return D && o ? o.showingCaptions() : !1
                }, this.captionsURL = function(a) {
                    D && o && o.captionsURL(a)
                }, this.captionsXML = function(a) {
                    D && o && o.captionsXML(a)
                }, this.showCaptions = function() {
                    D && o && o.showCaptions()
                }, this.hideCaptions = function() {
                    D && o && o.hideCaptions()
                }, this.formatTime = function(a) {
                    if (isNaN(a)) return "--:--";
                    if (0 >= a || a > 1 / 0) return "--:--";
                    var b = Math.floor(a / 60),
                        c = Math.floor(a % 60);
                    return b + ":" + (10 > c ? "0" : "") + c
                }, this.unmute = function() {
                    o && (D ? o.unmute && o.unmute() : o.prop("volume", Math.max(O, .2)))
                }, this.mute = function() {
                    o && (D ? o.mute && o.mute() : (O = o.prop("volume"), o.prop("volume", 0)))
                }, this.volume = function(a) {
                    return o ? (a = isNaN(a) ? 0 / 0 : Math.max(0, Math.min(1, a)), 0 === a ? (v.mute(), 0) : D ? (o.unmute && o.unmute(), o.volume ? o.volume(a) : 0) : (isNaN(a) || o.prop("volume", a), o.prop("volume"))) : 0
                }, this.registerControl = function(b, c) {
                    wb.debug && c && console.log("registerControl() : type: " + b + " , selector: " + c);
                    var d = a(c);
                    if (0 != d.length) switch (b) {
                        case "timerRemaining":
                            T = d;
                            break;
                        case "timerCurrent":
                            U = d;
                            break;
                        case "timerDuration":
                            V = d;
                            break;
                        case "volumeDisplay":
                            Y = d;
                            break;
                        case "muteToggleControl":
                            qb ? d.hide() : (P = d, v.canPlay() ? Ob(P, bc) : Pb(P, bc));
                            break;
                        case "captionsToggleControl":
                            D ? (R = d, v.canPlay() ? Ob(R, _b) : Pb(R, _b)) : d.hide();
                            break;
                        case "pauseToggleControl":
                            Q = d, v.canPlay() ? Ob(Q, ac) : Pb(Q, ac);
                            break;
                        case "volumeSlider":
                        case "verticalVolumeSlider":
                            var f = a(".scrubber-track", d).first(),
                                g = a(".scrubber-thumb", d).first();
                            if (f.length > 0 && g.length > 0) qb ? d.hide() : (Z = {}, Z.vertical = "verticalVolumeSlider" == b, Z.scrubber = d.first(), Z.track = f, Z.thumb = g, Z.thumb.css({
                                position: "relative"
                            }), pb && uc(Z.scrubber.get(0), "none"), Vb(Z, this.volume), Z.track.resize(Tb), v.canPlay() ? Sb() : (Pb(Z.scrubber), Pb(Z.track), Pb(Z.thumb)));
                            else {
                                var e = 'The html element defined by the selector, "' + c + '", must have a child with the class, "scrubber-track", AND a child with the class, "scrubber-thumb"';
                                console && console.error && console.error(e)
                            }
                            break;
                        case "scrubber":
                            var f = a(".scrubber-track", d).first(),
                                g = a(".scrubber-thumb", d).first();
                            if (f.length > 0 && g.length > 0) W = {}, W.scrubber = d.first(), W.track = f, W.thumb = g, W.thumb.css({
                                position: "relative"
                            }), pb && uc(W.scrubber.get(0), "none"), Vb(W, this.seekToPercent), W.track.resize(Ub), v.canSeek() ? Qb() : Rb();
                            else {
                                var e = 'The html element defined by the selector, "' + c + '", must have a child with the class, "scrubber-track", AND a child with the class, "scrubber-thumb"';
                                console && console.error && console.error(e)
                            }
                            break;
                        default:
                            var e = 'The control-type, "' + b + '" is not a recognize control-type in ' + n + ".registerControl()";
                            console && console.error && console.error(e)
                    } else if (c) {
                        var e = 'Html element(s) could not be found using the selector, "' + c + '"';
                        console && console.warn && console.warn(e)
                    }
                };
                for (g in c) switch (g) {
                    case "onHoverOverlay":
                    case "playIconOverlay":
                    case "loadingOverlay":
                        for (j in c[g]) wb[g][j] = c[g][j];
                        break;
                    default:
                        wb[g] = c[g]
                }
                yb()
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
                                return this.debug && (console.log("eventType, " + c.eventType + ", is not defined in " + b, "warn"), c && console.log(c)), void 0
                        }
                        d = a.Event(c.eventType);
                        for (var f in e) d[f] = e[f];
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
                        this.debug && (c.eventType || "").replace(/\./g, "_") != this.CURRENT_TIME_CHANGE && console.log(c);
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
                                return this.debug && (console.warn("eventType, " + c.eventType + ", is not defined in " + b), c && console.log(c)), void 0
                        }
                        d = a.Event(c.eventType);
                        for (var f in e) d[f] = e[f];
                        a(c.caller || document).trigger(d), window.$ && window.$ != a && window.$(c.caller || document).trigger(d)
                    }
                }
            }(), org.pbskids.video.VideoErrorEvent = function() {
                var b = "org_pbskids_video_VideoErrorEvent";
				//console.log('PBS VIDEO ERROR: ', b);
                return {
                    debug: !1,
                    GEO_RESTRICTED: b + "_GeoRestricted",
                    VIDEO_NOT_FOUND: b + "_VideoNotFound",
                    VIDEO_EXPIRED: b + "_VideoExpired",
                    NO_RESPONSE: b + "_NoResponse",
                    dispatchEvent: function(c) {
                        this.debug && console.log(c);
                        var d, e = {};
							
                        switch (c.eventType = (c.eventType || "").replace(/\./g, "_"), c.eventType) {
                            case this.GEO_RESTRICTED:
                            case this.VIDEO_NOT_FOUND:
                            case this.VIDEO_EXPIRED:
                            case this.NO_RESPONSE:
                                e.message = (c.message || "").replace("Redirect", "Video").replace("redirect", "video");
                                break;
                            default:
                                return this.debug && (console.warn("eventType, " + c.eventType + ", is not defined in " + b), c && console.log(c)), void 0
                        }
						if(c.eventType == 'org_pbskids_video_VideoErrorEvent_GeoRestricted') {
							$('.videoPlayer-wrapper').addClass('geoError');
							//console.log('THIS IS NOT AVAILABLE IN YOUR GEO LOCATION');
						};
						//console.log('c.eventType: ', c.eventType);
                        d = a.Event(c.eventType);
                        for (var f in e) d[f] = e[f];
                        a(c.caller || document).trigger(d), window.$ && window.$ != a && window.$(c.caller || document).trigger(d)
                    }
                }
            }(), org.pbskids.video.PlayList = function(c, d, e, f) {
                function eb() {
                    for (i in f)
                        if ("object" == typeof cb[i] && "object" == typeof f[i])
                            for (j in f[i]) cb[i][j] = f[i][j];
                        else cb[i] = f[i];
                    n = a("#" + c), l = n.get(0), _releaseClass = " ." + d, t = a(_releaseClass, n).first(), o = e, p = o.commonName(), q = o.affiliateId(), r = o.siteProgram(), s = o.siteCategory(), cb.debug = Boolean(cb.debug && "undefined" != typeof console && console.log), org.pbskids.video.PlaylistEvent.debug = cb.debug, "NO_ISCROLL" != cb.iScrollOpts && (x = c + "-iScrollContainer", a("<div/>").prop("id", x).addClass(cb.iScrollOpts.containerClass).css({
                        position: "relative",
                        overflow: "hidden"
                    }).insertBefore(n).append(n), cb.loadingIndicator && (a("<img/>").prop("src", cb.loadingIndicator).addClass(cb.loadingIndicatorClass).appendTo(a("#" + x)), z = a("<li/>").addClass("appendingIndicator-container").append(a("<img/>").prop("src", cb.loadingIndicator).addClass(cb.appendingIndicatorClass)).append(a("<span/>").html(cb.appendingVideosMessage))), cb.loadMoreButtonClass && (A = a("<li/>").addClass(cb.loadMoreButtonClass).append(a("<span/>").html(cb.loadMoreVideosMessage)).css({
                        cursor: "pointer"
                    }).click(function() {
                        h.appendMore()
                    })), y = cb.iScrollOpts.onRefresh, cb.iScrollOpts.onRefresh = pb, h.iScroll = new g(x, cb.iScrollOpts)), h.registerControl("nextVideoControl", cb.nextVideoControl || ""), h.registerControl("previousVideoControl", cb.previousVideoControl || ""), a(document).on(org.pbskids.video.VideoEvent.VIDEO_END, nb), f.disableKeyboard !== !0 && a(document).on("keydown", Q ? rb : sb), h.purge()
                }

                function fb(b, c, d) {
                    if (b.videos && b.videos[o.videoType()]) {
                        var e = t.clone();
                        d = d || -1, hb(e, "video-title", b.title), hb(e, "video-description", b.description), hb(e, "video-duration", o.formatTime(b.videos[o.videoType()].length / 1e3)), hb(e, "series-title", b.series_title);
                        for (i in b.images) gb(e, i, b.images[i]);
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
                                    j = (h - g) / 864e5;
                                7 >= j && e.addClass("new-video"), a(".video-airdate", e).removeClass("no-value"), hb(e, "video-airdate", f[1] + "-" + f[2] + "-" + f[0])
                            }
                        }
                        if (a(".video-expiration", e).addClass("no-value"), b.expirationdate) {
                            var f = b.expirationdate.match(/(\d+)/g);
                            if (f) {
                                var k = new Date(f[0], f[1] - 1, f[2], f[3], f[4]),
                                    h = new Date,
                                    l = (k - h) / 864e5;
                                7 >= l && (a(".video-expiration", e).removeClass("no-value"), hb(e, "video-expiration", "Expires in " + (1 > l ? Math.round(24 * l) + " hours" : Math.round(l) + " days")))
                            }
                        }
                        return e.addClass("guid_" + b.guid).prop("data-item-guid", b.guid).prop("data-item-index", c).click(function(a) {
                            ob(a, b)
                        }), 1 == c % 2 && e.addClass("alternate"), d == b.guid && e.addClass("selected"), cb.reverseOrder ? e.prependTo(n) : e.appendTo(n), e
                    }
                    return null
                }

                function gb(b, c, d) {
                    d && d.url && a("img." + c, b).prop("src", d.url).prop("data-original-width", d.width + "px").prop("data-original-height", d.height + "px")
                }

                function hb(b, c, d) {
                    d ? (a("." + c, b).html(d), b.prop("data-" + c, d)) : a("." + c, b).addClass("no-value")
                }

                function ib(b, c) {
                    b && (b.removeClass("disabled-control").addClass("enabled-control"), "function" == typeof c && b.each(function() {
                        a(this).off("click"), a(this).on("click", c)
                    }))
                }

                function jb(b, c) {
                    b && (b.addClass("disabled-control").removeClass("enabled-control"), "function" == typeof c && b.each(function() {
                        a(this).off("click", c)
                    }))
                }

                function kb(a) {
                    h.iScroll && h.iScroll.scrollToElement(a, 100)
                }

                function lb(a, b, c, d) {
                    a = p + " - " + a, b = (q ? q + " - " : "") + b, cb.debug && console.log("_trackEvent: " + a + " : " + b + " : " + c + " : " + d), window.GA_obj && GA_obj.trackEvent && GA_obj.trackEvent(a, b, c, d)
                }

                function mb(a, b) {
                    lb("Controls", a, b)
                }

                function nb() {
                    h.autoPlayNext() && h.next()
                }

                function ob(a, b) {
                    h.setFocusTo(a.currentTarget), o.loadAndPlay(b);
                    var c = {};
                    b.duration = b.videos[o.videoType()].length / 1e3;
                    for (i in b) c[i] = b[i];
                    delete c.videos, org.pbskids.video.PlaylistEvent.dispatchEvent({
                        eventType: org.pbskids.video.PlaylistEvent.RELEASE_SELECTED,
                        release: c,
                        playlist: h,
                        caller: l
                    })
                }

                function pb() {
                    h.iScroll && h.iScroll.vScrollbarWrapper && a(h.iScroll.vScrollbarWrapper).css({
                        position: "absolute",
                        top: "0px",
                        right: "0px"
                    }), y && "function" == typeof y && y.call(h.iScroll)
                }

                function qb(b, c, d, e, f) {
                    var g = D.length;
                    if (v = !1, e !== I) return cb.debug && console.log(n.prop("id") + ": rejected: " + (d.category || d.group || __opts.keywords || __opts.tags || d.program)), void 0;
                    cb.debug && console.log(n.prop("id") + ": received: " + (d.category || d.group || __opts.keywords || __opts.tags || d.program)), J = d, E = d.category || "", F = d.program || "", G = d.group || "", H = c || b.length, w = H > d.endindex && !d.group, D = D.concat(b);
                    for (k in b) fb(b[k], g, d.selectedID), g++;
                    cb.debug && console.log("items received: " + b.length + "; items requested: " + (d.endindex - d.startindex + 1) + "; can load more: " + w), ib(K, h.next), ib(L, h.previous), u = !0, cb.loadingIndicator && a("." + cb.loadingIndicatorClass, "#" + x).css("display", "none"), z && z.detach(), A && w && A.appendTo(n), h.iScroll && h.iScroll.refresh();
                    var i = h.autoPlay();
                    org.pbskids.video.PlaylistEvent.dispatchEvent({
                        eventType: org.pbskids.video.PlaylistEvent[(f || "REFRESH") + "_COMPLETE"],
                        queryOpts: d,
                        playlist: b,
                        totalCount: H,
                        caller: l
                    }), i ? d.selectedID ? a(_releaseClass + ".guid_" + d.selectedID, n).triggerHandler("click") : h.next() : d.selectedID && "APPEND" != f && h.setFocusTo(a(_releaseClass + ".guid_" + d.selectedID, n))
                }

                function rb(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case N.NEXT:
                            h.next();
                            break;
                        case N.PREVIOUS:
                            h.previous()
                    }
                }

                function sb(a) {
                    var b = a.keyCode;
                    switch (b) {
                        case M.RIGHT:
                            a.shiftKey && (h.next(), a.preventDefault());
                            break;
                        case M.LEFT:
                            a.shiftKey && (h.previous(), a.preventDefault())
                    }
                }
                var l, n, o, p, q, r, s, t, x, y, z, A, B, g = b || org.pbskids.iScrollMOD,
                    h = this,
                    m = "org.pbskids.video.PlayList",
                    u = !1,
                    v = !1,
                    w = !0,
                    C = "http://pbskids.org/pbsk/video/api/",
                    D = [],
                    E = "",
                    F = "",
                    G = "",
                    H = 0,
                    I = "",
                    J = {},
                    K = null,
                    L = null,
                    M = {
                        ENTER: 13,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40
                    },
                    N = {
                        NEXT: 176,
                        PREVIOUS: 177
                    };
                /safari/gi.test(navigator.appVersion);
                var Q = /googletv/gi.test(navigator.appVersion),
                    W = (/android/gi.test(navigator.appVersion), /silk|kindlefire/gi.test(navigator.appVersion), /iphone|ipad|ipod/gi.test(navigator.appVersion), /iphone|ipod/gi.test(navigator.appVersion), /ipad/gi.test(navigator.appVersion), /hp-tablet/gi.test(navigator.appVersion)),
                    X = window.navigator.msPointerEnabled || !1,
                    Y = "ontouchstart" in window && !W;
                X ? "MSPointerOut" : Y ? "touchcancel" : document.attachEvent ? "mouseleave" : "mouseout";
                var cb = {
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
                        dragScrollBars: !(Y || X),
                        minBarHeight: Y || X ? 8 : 36,
                        scrollbarClass: (Y || X ? "touch " : "") + "scrollbar"
                    }
                };
                if ("string" != typeof c) {
                    var db = m + " requires that the first parameter be of type String. This should be the id attribute of the html element to contain the playlist";
                    return Y && console.error(db), new Error(db), void 0
                }
                if (c = c.substr(c.indexOf("#") + 1), !document.getElementById(c)) {
                    var db = 'An html element with the id, "' + c + '",  could not be found';
                    return console.error(db), void 0
                }
                if ("string" != typeof d) {
                    var db = m + " requires a class name of type String for the sample html element to be used as a model for building playlist items (releases)";
                    return console.error(db), void 0
                }
                if (d = d.substr(d.indexOf(".") + 1), 0 == a("#" + c + " ." + d).length) {
                    var db = 'An html element with the class, "' + d + '",  could not be found within #' + c;
                    return console.error(db), void 0
                }
                if (!e) {
                    var db = m + " requires that an instance of org.pbskids.video.Player be created to serve videos to";
                    return console.error(db), void 0
                }
                this.addEventListener = function(b, c) {
                    a(l).off(b, c), a(l).on(b, c)
                }, this.removeEventListener = function(b, c) {
                    a(l).off(b, c)
                }, this.iScroll, this.scrollToSelectedItem = function() {
                    kb(_releaseClass + ".selected")
                }, this.getContainerID = function() {
                    return x
                }, this.getListData = function() {
                    return D
                }, this.getCategory = function() {
                    return E
                }, this.getProgram = function() {
                    return F
                }, this.getGroup = function() {
                    return G
                }, this.getTotalCount = function() {
                    return H
                }, this.getQueryOptions = function() {
                    return J
                }, this.autoPlayNext = function(a) {
                    return "boolean" == typeof a && (cb.autoPlayNext = a), cb.autoPlayNext
                }, this.autoPlay = function(a) {
                    return "boolean" == typeof a && (cb.autoPlay = a), cb.autoPlay
                }, this.hasPlaylist = function() {
                    return u
                }, this.loading = function() {
                    return v
                }, this.canLoadMore = function() {
                    return w && !v
                }, this.length = function() {
                    return D.length
                }, this.selectedIndex = function(b) {
                    return b = parseInt(b), isNaN(b) || (B = Math.max(0, b % D.length), a(_releaseClass + ".guid_" + D[B].guid, n).triggerHandler("click")), B || 0
                }, this.selectItem = function(b) {
                    var c = /^[0-9a-z]{8}\-[0-9a-z]{4}\-[0-9a-z]{4}\-[0-9a-z]{4}\-[0-9a-z]{12}$/;
                    c.test(b) ? a(_releaseClass + ".guid_" + b, n).triggerHandler("click") : isNaN(parseInt(b)) || selectedIndex(b)
                }, this.setFocusTo = function(b) {
                    var c = b;
                    "object" != typeof c && (c = a("" + b, n)), (0 != c.length || (c = a(_releaseClass + ".guid_" + b, n), 0 != c.length)) && (a(_releaseClass + ".selected", n).removeClass("selected"), a(c).addClass("selected"), B = a(c).prop("data-item-index"), h.scrollToSelectedItem())
                }, this.refresh = function(b) {
                    v = !0;
                    var c = {
                        startindex: 1,
                        endindex: 20,
                        program: "",
                        category: "",
                        group: "",
                        selectedID: "",
                        status: "available",
                        player: o.videoType(),
                        flash: o.isFlashPlayer(),
                        "return": "airdate, expirationdate"
                    };
                    if ("object" == typeof b && null !== b)
                        for (var d in b) c[d] = b[d];
                    r && (c.program = r), s && (c.category = s), org.pbskids.video.PlaylistEvent.dispatchEvent({
                        eventType: org.pbskids.video.PlaylistEvent.REFRESH_START,
                        queryOpts: c,
                        caller: l
                    }), this.purge();
                    var e = new Date,
                        f = e.getMinutes() + "_" + e.getSeconds() + "_" + e.getMilliseconds();
                    I = f, cb.debug && console.log(n.prop("id") + ": fetch: " + (c.category || c.group || c.keywords || c.tags || c.program)), a.ajax({
                        type: "GET",
                        url: C + "getVideos/",
                        dataType: "jsonp",
                        data: c,
                        success: function(a) {
                            qb(a.items, a.matched, c, f)
                        }
                    }), z && z.detach(), cb.loadingIndicator && a("." + cb.loadingIndicatorClass, "#" + x).css("display", "block"), h.iScroll && a(h.iScroll.vScrollbarWrapper).css("display", "none")
                }, this.appendMore = function(b) {
                    if (this.canLoadMore()) {
                        v = !0;
                        var c = J;
                        c.startindex = D.length + 1, c.endindex = D.length + (b || 20), c.status = "available", org.pbskids.video.PlaylistEvent.dispatchEvent({
                            eventType: org.pbskids.video.PlaylistEvent.APPEND_START,
                            queryOpts: c,
                            caller: l
                        });
                        var d = new Date,
                            e = d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
                        I = e, cb.debug && console.log(n.prop("id") + ": fetch to append: " + (c.category || c.group || c.keywords || c.tags || c.program)), a.ajax({
                            type: "GET",
                            url: C + "getVideos/",
                            dataType: "jsonp",
                            data: c,
                            success: function(a) {
                                qb(a.items, a.matched, c, e, "APPEND")
                            }
                        }), A && A.detach(), z && (z.detach(), z.appendTo(n), h.iScroll && (h.iScroll.refresh(), setTimeout(function() {
                            kb(".appendingIndicator-container")
                        }, "250")))
                    }
                }, this.appendItem = function(a) {
                    return "object" == typeof a && null !== a ? fb(a, D.push(a) - 1) : null
                }, this.copyFromPlaylist = function(a, b) {
                    a && a.getListData && this.copyPlaylistData(a.getListData(), a.getQueryOptions(), b, a.getTotalCount())
                }, this.copyPlaylistData = function(a, b, c, d) {
                    if (a) {
                        v = !0;
                        var e = b || {};
                        e.startindex = 1, e.endindex = a.length, e.status = "available", c && (e.selectedID = c), org.pbskids.video.PlaylistEvent.dispatchEvent({
                            eventType: org.pbskids.video.PlaylistEvent.COPY_START,
                            queryOpts: e,
                            caller: l
                        }), this.purge();
                        var f = new Date,
                            g = f.getMinutes() + "_" + f.getSeconds() + "_" + f.getMilliseconds();
                        I = g, z && z.detach(), cb.debug && console.log(n.prop("id") + ": copy: " + (e.category || e.group || e.keywords || e.tags || e.program)), qb(a, d || a.length, e, g, "COPY")
                    }
                }, this.abortLoad = function() {
                    cb.debug && console.log(n.prop("id") + ": aborting loading"), I = "undefined"
                }, this.purge = function() {
                    jb(K, h.next), jb(L, h.previous), B = 0, D = [], u = !1, v = !1, w = !1, cb.loadingIndicator && a("." + cb.loadingIndicatorClass, "#" + x).css("display", "none"), z && z.detach(), A && A.detach(), h.iScroll && a(h.iScroll.vScrollbarWrapper).css("display", "none"), n.empty(), h.iScroll && h.iScroll.refresh()
                }, this.previous = function(b) {
                    if (o.currentTime() / o.duration() > .1) b && mb("Skip Buttons", "Return to Beginning"), o.seekToTime(0);
                    else {
                        b && mb("Skip Buttons", "Play Previous");
                        var c = a(_releaseClass + ".selected", n).first().prev();
                        0 == c.length && (c = a(_releaseClass, n).last()), a(c).triggerHandler("click")
                    }
                }, this.next = function(b) {
                    b && mb("Skip Buttons", "Play Next");
                    var c = a(_releaseClass + ".selected", n).last().next();
                    0 == c.length && (c = a(_releaseClass, n).first()), a(c).triggerHandler("click")
                }, this.registerControl = function(b, c) {
                    cb.debug && c && console.log("registerControl() : type: " + b + " , selector: " + c);
                    var d = a(c);
                    if (0 != d.length) switch (b) {
                        case "nextVideoControl":
                            K = d, h.hasPlaylist() ? ib(K, h.next) : jb(K, h.next);
                            break;
                        case "previousVideoControl":
                            L = d, h.hasPlaylist() ? ib(L, h.previous) : jb(L, h.previous);
                            break;
                        default:
                            console && console.warn && console.warn('The control-type, "' + b + '" is not a recognize control-type in ' + m + ".registerControl()")
                    } else if (c) {
                        var e = 'Html element(s) could not be found using the selector, "' + c + '"';
                        console && console.warn && console.warn(e)
                    }
                }, eb()
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
                                var f = c.queryOpts || {};
                                e.category = f.category || f.group || (f.keywords || f.tags || f.keyword || f.tag ? "" : "New Videos"), e.program = f.program || "", e.keywords = f.keywords || f.tags || "", e.keyword = f.keyword || f.tag || "", e.videoType = f.type || "mixed";
                                break;
                            case this.RELEASE_SELECTED:
                                e.release = c.release || {}, e.playlist = c.playlist || {};
                                break;
                            default:
                                return this.debug && (console.warn("eventType, " + c.eventType + ", is not defined in " + b), c && console.log(c)), void 0
                        }
                        d = a.Event(c.eventType);
                        for (var g in e) d[g] = e[g];
                        a(c.caller || document).trigger(d), window.$ && window.$ != a && window.$(c.caller || document).trigger(d)
                    }
                }
            }(), "Created: \r\n  - window.org.pbskids.video.Player \r\n  - window.org.pbskids.video.PlayList \r\n  - window.org.pbskids.video.PlayerEvent \r\n  - window.org.pbskids.video.VideoEvent \r\n  - window.org.pbskids.video.VideoErrorEvent \r\n  - window.org.pbskids.video.PlaylistEvent"
        })
}();

