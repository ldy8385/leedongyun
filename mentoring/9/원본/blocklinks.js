(function (e, t) {
    "use strict";
    var n = [508, 691], r = function () {
        var t;
        if (e.addEventListener) {
            t = function (e, t, n) {
                n.addEventListener(e, t, false)
            }
        } else if (e.attachEvent) {
            t = function (e, t, n) {
                n.attachEvent("on" + e, t)
            }
        }
        return t
    }(), i = function (e) {
        if (e.preventDefault) {
            e.preventDefault()
        }
        if (e.stopImmediatePropagation) {
            e.stopImmediatePropagation()
        }
        if (e.stopPropagation) {
            e.stopPropagation()
        }
        if (e.stop) {
            e.stop()
        }
        e.returnValue = false;
        return false
    }, s = function () {
        var n = {createElement: t.createElement, open: e.open};
        t.createElement = function (e) {
            var t = n.createElement.apply(this, arguments);
            if (e && "a" === e) {
                r("click", function (e) {
                    i(e)
                }, t)
            }
            return t
        };
        e.open = function () {
        }
    }, o = function (t) {
        var n = e.location.href.slice(e.location.href.indexOf("?") + 1).split("&"), r = n.length, i, s, o, u;
        for (u = 0; u < r; u += 1) {
            i = n[u].split("=");
            o = i[0];
            s = i[1];
            if (o === t) {
                return decodeURIComponent(s)
            }
        }
        return null
    }, u = [].indexOf || function (e, t, n) {
        for (n = this.length, t = (n + ~~t) % n; t < n && (!(t in this) || this[t] !== e); t++);
        return t ^ n ? t : -1
    }, a = parseInt(o("siteid"), 10);
    if (a && u.call(n, a) > -1) {
        s()
    }
})(window, window.document)