!function (v, I, _) {
    "use strict";
    var p = "ht", Z = v[p], J = Z.Default, C = Z.graph, t = J.getInternal(), z = t.ui(), f = z.NodeUI.prototype,
        N = z.ShapeUI.prototype, q = C.GraphView, A = q.prototype, b = z.EdgeUI.prototype, j = Z.Node, D = Z.Shape,
        g = Z.Edge, O = Z.Group, y = J.isTouchable, X = J.preventDefault, W = v.setTimeout, a = J.grow,
        M = J.isDragging, F = J.getDistance, Y = null, P = Z.List,
        w = "undefined" != typeof Float32Array ? Float32Array : Array, T = Math, V = T.PI, l = "Crossing",
        E = "No Crossing", S = V / 2, s = 2 * V, K = T.atan2, Q = T.sqrt, o = T.pow, n = T.sin, U = T.cos, k = T.min,
        R = T.max, H = T.abs, c = T.ceil, i = T.round, h = J.unionPoint, L = J.unionRect, e = J.containsPoint,
        m = J.clone, G = "rgb(52, 152, 219)", x = "red",
        r = {northwest: 0, north: 1, northeast: 2, west: 7, east: 3, southwest: 6, south: 5, southeast: 4}, $ = {
            width: 400, height: 100, comps: [{
                type: "shape", points: {
                    func: function () {
                        for (var z = [10, 8, 162, 36, 314, 37, 269, 2, 398, 49, 268, 98, 314, 58, 161, 60, 9, 91, 103, 49, 10, 8], H = 0; H < z.length; H++) {
                            var V = z[H];
                            V = 0 === H % 2 ? V / 400 * $.width : V / 100 * $.height, z[H] = V
                        }
                        return $.width > 120 && (z[4] = $.width - 26, z[6] = $.width - 40, z[10] = $.width - 40, z[12] = $.width - 26, z[18] = 33), z
                    }
                }, segments: [1, 3, 2, 2, 2, 2, 3, 2, 2], background: "white", gradient: "linear.east", gradientColor: "red"
            }]
        }, u = {
            width: 300,
            height: 300,
            comps: [{type: "circle", rect: [20, 0, 120, 120], background: G, rotation: .61}, {
                type: "circle",
                rect: [200, 120, 70, 70],
                background: G,
                rotation: .61
            }, {type: "circle", rect: [200, 220, 70, 70], background: G, rotation: .61}, {
                type: "shape",
                points: [80, 60, 80, 155, 200, 155],
                borderWidth: 20,
                borderColor: G
            }, {type: "shape", points: [80, 60, 80, 255, 200, 255], borderWidth: 20, borderColor: G}]
        }, d = {
            width: 300,
            height: 300,
            comps: [{
                type: "shape",
                points: [114, 239, 115, 106, 112, 73, 149, 73, 149, 73, 175, 73, 177, 105, 179, 261, 178, 302, 147, 307, 98, 308, 83, 307, 72, 276, 73, 260, 72, 81, 74, 29, 115, 21, 191, 21, 221, 22, 224, 53, 223, 238],
                segments: [1, 2, 3, 2, 3, 2, 3, 2, 4, 2, 3, 2, 3, 2],
                borderWidth: 20,
                borderColor: x,
                rotation: .61
            }]
        }, B = {
            width: 300,
            height: 300,
            comps: [{type: "circle", rect: [210, 0, 90, 90], background: G}, {
                type: "circle",
                rect: [0, 210, 90, 90],
                background: G
            }, {type: "shape", points: [255, 45, 45, 255], borderWidth: 20, borderColor: G}]
        }, es = {
            width: 300,
            height: 300,
            comps: [{type: "shape", points: [20, 20, 280, 280], borderWidth: 30, borderColor: x}, {
                type: "shape",
                points: [280, 20, 20, 280],
                borderWidth: 30,
                borderColor: x
            }]
        }, Cp = {
            width: 300,
            height: 300,
            comps: [{type: "shape", points: [270, 30, 30, 150, 270, 270], borderWidth: 40, borderColor: G}]
        }, ub = {
            width: 300,
            height: 300,
            comps: [{type: "shape", points: [30, 30, 270, 150, 30, 270], borderWidth: 40, borderColor: x}]
        }, rr = {
            width: 300,
            height: 300,
            comps: [{
                type: "rect",
                rect: [125.58, 52.76, 40, 231.96],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000"
            }, {
                type: "rect",
                rect: [27.87, 61.06, 150, 30],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000",
                rotation: 5.5
            }, {
                type: "rect",
                rect: [113.36, 61, 150, 30],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000",
                rotation: .79
            }]
        }, Dl = {
            width: 300,
            height: 300,
            author: "",
            note: "",
            comps: [{
                type: "rect",
                rect: [135.15, 38.76, 28.63, 82.84],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000"
            }, {
                type: "triangle",
                rect: [94.69, 2.35, 110, 44.77],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000"
            }, {
                type: "rect",
                rect: [31.71, 115.72, 240, 15],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000"
            }, {
                type: "rect",
                rect: [31.71, 167.62, 240, 15],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000"
            }, {
                type: "rect",
                rect: [135.15, 177.33, 28.63, 82.84],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000"
            }, {
                type: "triangle",
                rect: [94.69, 251.39, 110, 44.77],
                background: "rgb(0,0,0)",
                borderWidth: 1,
                borderColor: "#000",
                rotation: 3.14
            }]
        }, Fg = function (u) {
            var W = u.touches[0];
            return W ? W : u.changedTouches[0]
        }, Xq = function (C, r, g, M) {
            return K(M - r, g - C)
        }, un = function (p, P) {
            return {x: p.x * P, y: p.y * P}
        }, Hb = function ($, O) {
            $.each(function (V) {
                return $.isSelected(V) ? O(V) : void 0
            })
        }, On = function (D, g) {
            D.reverseEach(function (s) {
                return D.isSelected(s) ? g(s) : void 0
            })
        }, zs = function (g, N, I) {
            var a, p, d, V, e, t = this, J = N, h = t.gv;
            if (g instanceof D) {
                d = g.getSegments();
                var f = h.getDataUI(g);
                e = f._55O.$15l, d && d.size() || (d = Jn(e)), g.isClosePath() && d.indexOf(5) < 0 && (d = new P(d._as), d.add(5)), a = Wo(g, f, J), p = e[a]
            } else {
                var S = h.getDataUI(g);
                e = wi(S, g.s("edge.points")), d = g.s("edge.segments"), d && d.size() || (d = Jn(e)), e = e._as, a = Wo(g, S, J), p = e[a]
            }
            if (d && (V = d.get(J)), 2 === V || 1 === V || 5 === V) {
                var C = e[a + 1];
                5 === V && (C = e[0]);
                var X = Pk(p, I, C);
                return X
            }
            return I
        }, cc = function (v, J, X, Y) {
            var j = J / 2, k = X / 2, c = bf(v, -j, -k, Y), D = bf(v, j, -k, Y), W = bf(v, -j, k, Y), O = bf(v, j, k, Y),
                C = bf(v, 0, -k, Y), o = bf(v, j, 0, Y), Z = bf(v, 0, k, Y), t = bf(v, -j, 0, Y);
            return [c, D, W, O, C, o, Z, t]
        }, Pk = function (S, L, _) {
            var i = {x: L.x - S.x, y: L.y - S.y}, l = {x: _.x - S.x, y: _.y - S.y},
                A = Q(o(_.x - S.x, 2) + o(_.y - S.y, 2)), u = {x: l.x / A, y: l.y / A}, C = i.x * u.x + i.y * u.y,
                X = {x: u.x * C, y: u.y * C};
            return {x: S.x + X.x, y: S.y + X.y}
        }, bf = function (f, u, V, T) {
            var M = U(T) * u - n(T) * V, i = n(T) * u + U(T) * V;
            return f ? {x: f.x + M, y: f.y + i} : {x: M, y: i}
        }, ii = function (e, v) {
            return v > 2 * e ? e : v / 2
        }, vs = function (P, B, R, b) {
            var c = F(P, B);
            return R = b ? k(R, c) : ii(R, c), c ? R /= c : R = 0, {x: P.x + (B.x - P.x) * R, y: P.y + (B.y - P.y) * R}
        }, Ql = function (l, k) {
            var Y, U, L = l.gv, q = l._data, Z = q._40I, u = q._41I, h = q.s("edge.offset"),
                W = q.s("edge.source.position"), d = q.s("edge.target.position"), v = q.s("edge.source.offset.x"),
                B = q.s("edge.source.offset.y"), f = q.s("edge.target.offset.x"), e = q.s("edge.target.offset.y"),
                z = q.s("edge.source.anchor.x"), T = q.s("edge.source.anchor.y"), G = q.s("edge.target.anchor.x"),
                x = q.s("edge.target.anchor.y");
            if (k ? (Y = t.getEdgeAgentPosition(L, Z, W, v, B, z, T), U = t.getEdgeAgentPosition(L, u, d, f, e, G, x)) : (Y = t.getEdgeAgentPosition(L, Z, W, 0, 0, z, T), U = t.getEdgeAgentPosition(L, u, d, 0, 0, G, x)), "points" === q.s("edge.type") && h && !q.s("edge.center") && Y) {
                var X = q.s("edge.points") || new P, O = X.size(), o = vs(Y, O ? X.get(0) : U, h, O),
                    s = vs(U, O ? X.get(O - 1) : Y, h, O);
                Y = o, U = s
            }
            return [Y, U]
        }, wi = function (g, q, O) {
            var s = g._78o, o = g._data, M = o.s("edge.type"), T = [s.sourcePoint, s.targetPoint];
            return "points" === M ? O && (T = Ql(g)) : T = s.center ? M ? O ? Ql(g) : Ql(g, !0) : O ? Ql(g) : [s.c1, s.c2] : O ? Ql(g) : Ql(g, !0), q = new P(q ? q._as : Y), q.add(T[0], 0), q.add(T[1]), q
        }, Ce = function (z) {
            return z = new P(z._as), z.removeAt(0), z.removeAt(z.size() - 1), z
        }, Jn = function (S) {
            S._as || (S = new P(S));
            var J = new P;
            J.add(1);
            for (var d = 1; d < S.size(); d++) J.add(2);
            return J
        }, fo = function (A, B) {
            return {x: (A.x + B.x) / 2, y: (A.y + B.y) / 2}
        }, Oc = function (J, p) {
            return {x: J.x + 1 * (p.x - J.x) / 4, y: J.y + 1 * (p.y - J.y) / 4}
        }, ne = function (M, t) {
            return {x: M.x + 3 * (t.x - M.x) / 4, y: M.y + 3 * (t.y - M.y) / 4}
        }, Jd = function (k, l, v, J) {
            var T = l.x + l.width / 2, Z = l.y + l.height / 2, y = Q(T * T + Z * Z), M = K(Z, T) + v;
            return {x: J.x + y * U(M), y: J.y + y * n(M)}
        }, nk = A.validateImpl, Zo = A.isRectEditable, lo = A.isPointEditable, ln = A._42, Br = N._79o, nd = b._79o,
        tg = N._48O, zn = N._47O, mn = f._48O, Ci = f._80o, Wb = N._80o, Ro = f.getSelectWidth, Zc = f._47O,
        wc = b._47O, dh = A.isEditable,
        Ih = ["northwest", "north", "northeast", "east", "southeast", "south", "southwest", "west"],
        cs = function (D, S, o, T, F, w, Z, N, c, z) {
            var e = D.x, A = D.y, O = D.width, X = D.height, x = {x: e + O / 2, y: A + X / 2};
            T = T || 0, S = bf(x, S.x - x.x, S.y - x.y, -T), Z && !N && (S.x += c, S.y += z);
            var _ = .01;
            if ("northwest" === o ? (S.x + F > e + O - _ && (S.x = e + O - F - _), S.y + F > A + X - _ && (S.y = A + X - F - _), D = h(S, {
                    x: e + O,
                    y: A + X
                })) : "north" === o ? (S.y + F > A + X - _ && (S.y = A + X - F - _), D = h({x: e, y: S.y}, {
                    x: e + O,
                    y: A + X
                })) : "northeast" === o ? (S.x < e + F + _ && (S.x = e + F + _), S.y + F > A + X - _ && (S.y = A + X - F - _), D = h({
                    x: e,
                    y: S.y
                }, {x: S.x, y: A + X})) : "west" === o ? (S.x + F > e + O - _ && (S.x = e + O - F - _), D = h({
                    x: S.x,
                    y: A
                }, {x: e + O, y: A + X})) : "east" === o ? (S.x < e + F + _ && (S.x = e + F + _), D = h({
                    x: e,
                    y: A
                }, {
                    x: S.x,
                    y: A + X
                })) : "southwest" === o ? (S.x + F > e + O - _ && (S.x = e + O - F - _), S.y < A + F + _ && (S.y = A + F + _), D = h({
                    x: S.x,
                    y: A
                }, {x: e + O, y: S.y})) : "south" === o ? (S.y < A + F + _ && (S.y = A + F + _), D = h({
                    x: e,
                    y: A
                }, {
                    x: e + O,
                    y: S.y
                })) : "southeast" === o && (S.x < e + F + _ && (S.x = e + F + _), S.y < A + F + _ && (S.y = A + F + _), D = h({
                    x: e,
                    y: A
                }, S)), "keepRatio" === w && (!Z && N || Z && !N) && ("northeast" === o || "southeast" === o || "northwest" === o || "southwest" === o)) {
                var t = D.width, r = D.height, y = t / O, P = r / X, p = k(y, P);
                D.width = O * p, D.height = X * p, "northeast" === o ? D.y = A + (X - D.height) : "northwest" === o ? (D.y = A + (X - D.height), D.x = e + (O - D.width)) : "southwest" === o && (D.x = e + (O - D.width))
            }
            D.x -= x.x, D.y -= x.y;
            var Q = Jd(Y, D, T, x);
            return D.x = Q.x - D.width / 2, D.y = Q.y - D.height / 2, D
        }, Vr = function (i, Z, y, q) {
            var u = i.getRotation(), C = Z, B = C.x, Q = C.y, X = C.width, Y = C.height,
                l = {x: B + C.width / 2, y: Q + C.height / 2};
            q = bf(l, q.x - l.x, q.y - l.y, -u), "northwest" === y ? C = h(q, {
                x: B + X,
                y: Q + Y
            }) : "north" === y ? C = h({x: B, y: q.y}, {x: B + X, y: Q + Y}) : "northeast" === y ? C = h({
                x: B,
                y: q.y
            }, {x: q.x, y: Q + Y}) : "west" === y ? C = h({x: q.x, y: Q}, {
                x: B + X,
                y: Q + Y
            }) : "east" === y ? C = h({x: B, y: Q}, {x: q.x, y: Q + Y}) : "southwest" === y ? C = h({
                x: q.x,
                y: Q
            }, {x: B + X, y: q.y}) : "south" === y ? C = h({x: B, y: Q}, {
                x: B + X,
                y: q.y
            }) : "southeast" === y && (C = h({x: B, y: Q}, q)), i.setRect(C), C.x -= l.x, C.y -= l.y;
            var m = Jd(i, C, u, l);
            i.p(m.x, m.y)
        }, ye = function (D, O, d, l, h, b, f, s) {
            var C = Y;
            b ? (C = bf(Y, h.x - O.x, h.y - O.y, -d), C.x -= f.x, C.y -= f.y) : C = bf(Y, h.x - O.x, h.y - O.y, 0);
            var L = {x: O.x + C.x, y: O.y + C.y};
            s && (L = s(L.x, L.y)), L.e = D.getPoints().get(l).e, D.setPoint(l, L);
            var j = D.getWidth(), B = D.getHeight(), z = D.p().x - j / 2, T = D.p().y - B / 2;
            z -= O.x, T -= O.y;
            var e = Jd(D, {x: z, y: T, width: j, height: B}, d, O);
            D.p(e.x, e.y)
        }, Wo = function (o, G, H) {
            var u, s;
            if (o instanceof D ? (u = o.getPoints(), s = o.getSegments()) : o instanceof g && "points" === o.s("edge.type") && (u = o.s("edge.points"), s = o.s("edge.segments"), u = wi(G, u)), s && s.size() || (s = Jn(u)), o instanceof D && o.isClosePath() && s.indexOf(5) < 0 && (s = new P(s._as), s.add(5)), s) for (var Y = -1, V = 0; V < s.size(); V++) {
                if (V === H) return Y;
                var y = s.get(V);
                1 === y ? Y += 1 : 2 === y ? Y += 1 : 3 === y ? Y += 2 : 4 === y && (Y += 3)
            }
        }, Qh = function (t, G, S) {
            var A, m;
            if (t instanceof D ? (A = t.getPoints(), m = t.getSegments()) : t instanceof g && "points" === t.s("edge.type") && (A = t.s("edge.points"), m = t.s("edge.segments"), A = wi(G, A)), m && m.size() || (m = Jn(A)), m) for (var f = -1, E = 0; E < m.size(); E++) {
                var x = m.get(E);
                if (1 === x ? f += 1 : 2 === x ? f += 1 : 3 === x ? f += 2 : 4 === x && (f += 3), f === S) return E
            }
        }, bj = function (S, w) {
            var s = [S[0] - w[0], S[1] - w[1], S[2] - w[2]];
            return s
        }, Vc = function () {
            var G = new w(16);
            return G[0] = 1, G[1] = 0, G[2] = 0, G[3] = 0, G[4] = 0, G[5] = 1, G[6] = 0, G[7] = 0, G[8] = 0, G[9] = 0, G[10] = 1, G[11] = 0, G[12] = 0, G[13] = 0, G[14] = 0, G[15] = 1, G
        }, oe = function (g, N) {
            var I = g[0], $ = g[1], F = g[2];
            return g[0] = N[0] * I + N[4] * $ + N[8] * F + N[12], g[1] = N[1] * I + N[5] * $ + N[9] * F + N[13], g[2] = N[2] * I + N[6] * $ + N[10] * F + N[14], g
        }, xr = function (l, u) {
            if (u) {
                var G = n(u), c = U(u), K = l[0], A = l[1], X = l[2], p = l[3], I = l[8], N = l[9], m = l[10], w = l[11];
                l[0] = K * c - I * G, l[1] = A * c - N * G, l[2] = X * c - m * G, l[3] = p * c - w * G, l[8] = K * G + I * c, l[9] = A * G + N * c, l[10] = X * G + m * c, l[11] = p * G + w * c
            }
        }, $i = function (c, L) {
            for (var f = c.s("grid.row.count"), u = c.s("grid.column.count"), $ = 0; f > $; $++) for (var d = 0; u > d; d++) {
                var w = c.getCellRect($, d);
                if (e(w, L)) return {rowIndex: $, columnIndex: d, rect: w, grid: c}
            }
            return null
        }, wp = function (J, A, h, Y, i, y) {
            var b = {}, I = h - J, z = Y - A, l = T.sqrt(I * I + z * z), j = I / l, L = z / l,
                x = (-J + i) * j + (-A + y) * L;
            return 0 >= x ? (b.x = J, b.y = A) : x >= l ? (b.x = h, b.y = Y) : (b.x = J + x * j, b.y = A + x * L), I = i - b.x, z = y - b.y, b.z = T.sqrt(I * I + z * z), b
        }, gr = function (r, O) {
            var L, f, m, h, w, U, K, x, V = r.getPoints(), C = r.getSegments(), b = r.p(), J = r.getRotation();
            if (!C || !(C.indexOf(3) > 0 || C.indexOf(4) > 0)) {
                for (x = 0; x <= V.size() - 1; x++) if (x === V.size() - 1 ? (w = V.get(0), h = V.get(x)) : (h = V.get(x), w = V.get(x + 1)), h = bf(b, h.x - b.x, h.y - b.y, J), w = bf(b, w.x - b.x, w.y - b.y, J), U = wp(h.x, h.y, w.x, w.y, O.x, O.y), K = U.z, K < (r.s("shape.border.width") || 10)) {
                    f = h, m = w, L = x;
                    break
                }
                if (L != Y) {
                    var _ = wp(f.x, f.y, m.x, m.y, O.x, O.y), G = F(f, _);
                    return {attachIndex: L, attachOffset: G}
                }
            }
        }, qk = function (M) {
            for (var T = M._data, K = T.p(), W = T.getRotation(), o = T.getPoints(), g = Y, l = [], S = 0; S < o.size(); S++) g = o.get(S), l.push(bf(K, g.x - K.x, g.y - K.y, W));
            M._55O.$15l = l
        };
    J.setImage("xeditinteractor_parentIcon", u), J.setImage("xeditinteractor_hostIcon", d), J.setImage("xeditinteractor_edgeIcon", B), J.setImage("xeditinteractor_removeIcon", es), J.setImage("xeditinteractor_sourceIcon", Cp), J.setImage("xeditinteractor_targetIcon", ub), J.setImage("xeditinteractor_elevationIcon", rr), J.setImage("xeditinteractor_tallIcon", Dl), A._editPointSize = y ? 24 : 9, A._edgeHelpers = ["parent", "remove", "source", "target"], A._leftTopHelpers = ["parent"], A._rightTopHelpers = ["host"], A._leftBottomHelpers = ["edge"], A._rightBottomHelpers = ["remove"], Ih = Ih.concat(Ih).concat(Ih), b._79o = function () {
        var o = this, A = o.gv, Z = A.getZoom(), H = A._editInteractor, Y = nd.call(o);
        if (!Y) return null;
        var $ = Ql(o, !0), F = $[0], M = $[1], u = {x: Y.x, y: Y.y, width: Y.width, height: Y.height}, B = h(F, M);
        if (H instanceof C.XEditInteractor) {
            u = L(u, B);
            var P = o._55O, x = A.getEditPointSize() / Z + 2, R = 0;
            P && P._43O && (R += x / 2, a(u, R))
        }
        return u
    }, b._47O = function ($) {
        var o = this, Q = o.gv, h = Q._editInteractor;
        h instanceof C.XEditInteractor || wc.call(o, $)
    }, b.rectIntersects = function (F) {
        var z = this, V = z._data, v = z.gv, i = v.getZoom(), Q = z._55O, N = v._editInteractor;
        if (N instanceof C.XEditInteractor && v.isEditable(V) && Q && Q._43O && "points" === V.s("edge.type")) {
            var H = V.s("edge.points"), S = V.s("edge.segments");
            H = wi(z, H), S && S.size() || (S = Jn(H)), H = H._as;
            var r = !1, p = y ? 5 : 1, $ = F.x + p, g = F.y + p, R = {x: $, y: g};
            if (N._edge === V && N._hoverSegmentIndex >= 0) {
                var D = v._editInteractor._hoverSegmentIndex, X = S.get(D), A = Wo(V, z, D), O = Y;
                if (A != Y && A >= 0) {
                    var m = H[A], h = v.getSegmentHoverWidth() / i;
                    if (2 === X || 1 === X) {
                        var K = H[A + 1];
                        O = Ad(new te(m.x, m.y), new te(K.x, K.y), new te(R.x - h, R.y - h), new te(R.x + 2 * h, R.y + 2 * h)), O.$62l === l && (r = !0)
                    } else if (3 === X) {
                        var e = H[A + 1], K = H[A + 2];
                        O = Yh(new te(m.x, m.y), new te(e.x, e.y), new te(K.x, K.y), new te(R.x - h, R.y - h), new te(R.x + 2 * h, R.y + 2 * h)), O.$62l === l && (r = !0)
                    } else if (4 === X) {
                        var j = H[A + 1], o = H[A + 2];
                        K = H[A + 3], O = Io(new te(m.x, m.y), new te(j.x, j.y), new te(o.x, o.y), new te(K.x, K.y), new te(R.x - h, R.y - h), new te(R.x + 2 * h, R.y + 2 * h)), O.$62l === l && (r = !0)
                    }
                }
            }
            if (r) return !0
        }
        return Y
    }, N._47O = function (m) {
        var p = this, L = p.gv, n = L._editInteractor;
        n instanceof C.XEditInteractor || zn.call(p, m)
    }, N.rectIntersects = function (w) {
        var f = this, p = f._data, J = f.gv, K = J.getZoom(), V = f._55O, e = J._editInteractor;
        if (e instanceof C.XEditInteractor && J.isEditable(p) && V && V._43O) {
            var U = V.$15l, g = !1, u = y ? 5 : 1, B = w.x + u, r = w.y + u, x = {x: B, y: r};
            if (U && U.length === p.getPoints().size() || (qk(f), U = V.$15l), e._shape === p && e._hoverSegmentIndex >= 0) {
                var c = p.getSegments();
                c && c.size() || (c = Jn(U));
                var N = J._editInteractor._hoverSegmentIndex, m = c.get(N), z = Wo(p, f, N), L = Y;
                if (z != Y && z >= 0) {
                    var s = U[z], E = J.getSegmentHoverWidth() / K;
                    if (2 === m || 1 === m) {
                        var F = U[z + 1];
                        L = Ad(new te(s.x, s.y), new te(F.x, F.y), new te(x.x - E, x.y - E), new te(x.x + 2 * E, x.y + 2 * E)), L.$62l === l && (g = !0)
                    } else if (3 === m) {
                        var Q = U[z + 1], F = U[z + 2];
                        L = Yh(new te(s.x, s.y), new te(Q.x, Q.y), new te(F.x, F.y), new te(x.x - E, x.y - E), new te(x.x + 2 * E, x.y + 2 * E)), L.$62l === l && (g = !0)
                    } else if (4 === m) {
                        var v = U[z + 1], i = U[z + 2];
                        F = U[z + 3], L = Io(new te(s.x, s.y), new te(v.x, v.y), new te(i.x, i.y), new te(F.x, F.y), new te(x.x - E, x.y - E), new te(x.x + 2 * E, x.y + 2 * E)), L.$62l === l && (g = !0)
                    }
                }
            }
            if (g) return !0
        }
        return Y
    }, N._48O = function () {
        var U = this, M = U.gv, g = M._editInteractor;
        g instanceof C.XEditInteractor ? (f._48O.call(U), U._55O._43O && qk(U)) : tg.call(U)
    }, N._79o = function () {
        var o = this, h = o.gv, v = h.getZoom(), J = h._editInteractor, p = Br.call(o);
        if (p) {
            var S = {x: p.x, y: p.y, width: p.width, height: p.height};
            if (J instanceof C.XEditInteractor) {
                var e = o._55O, r = h.getEditPointSize() / v + 2, l = 0;
                e && e._43O && (l += r / 2, a(S, l))
            }
            return S
        }
    }, f._47O = function (Q) {
        var L = this, j = L.gv, t = j._editInteractor;
        if (t instanceof C.XEditInteractor) ; else {
            var W = L._55O;
            W && W._98o && Zc.call(L, Q)
        }
    }, f.getSelectWidth = function () {
        var c = this, b = c.gv, r = b._editInteractor, G = c._data;
        return b.isEditable(G) && r instanceof C.XEditInteractor ? 0 : Ro.call(c)
    }, f._80o = function (J) {
        var s = this, k = s.gv._editInteractor;
        if (Ci.call(s, J), k && k._debug) {
            J.save(), J.beginPath(), J.lineWidth = 1, J.strokeStyle = "green";
            var d = s._79o();
            d && (J.rect(d.x, d.y, d.width, d.height), J.stroke()), J.restore()
        }
    }, N._80o = function (D) {
        var V = this, R = V.gv._editInteractor;
        if (Wb.call(V, D), R && R._debug) {
            D.save(), D.beginPath(), D.lineWidth = 1, D.strokeStyle = "green";
            var t = V._79o();
            D.rect(t.x, t.y, t.width, t.height), D.stroke(), D.restore()
        }
    }, f._48O = function () {
        var r = this, _ = r.gv, g = r._data, B = _._editInteractor, p = r._55O, s = g.p(), G = g.getRotation();
        if (B instanceof C.XEditInteractor) {
            if (p._42O) {
                var u = cc(s, g.getWidth(), g.getHeight(), G), c = u[0], P = u[1], o = u[2], j = u[3], l = u[4],
                    I = u[5], Q = u[6], d = u[7];
                p.$45l = [c, l, P, I, j, Q, o, d]
            }
        } else mn.call(r)
    }, A.getResizeMode = function () {
        return this.$25l || "normal"
    }, A.setResizeMode = function (s) {
        var p = this.$25l;
        this.$25l = s, this.fp("resizeMode", p, s)
    }, A.getSnapAngle = function () {
        return this.$26l || Math.PI / 36
    }, A.setSnapAngle = function (g) {
        var L = this.$26l;
        this.$26l = g, this.fp("snapAngle", L, g)
    }, A.getSnapSpacing = function () {
        return this.$27l
    }, A.setSnapSpacing = function (c) {
        var n = this.$27l;
        this.$27l = c, this.fp("snapSpacing", n, c)
    }, A.getPointSnapSpacing = function () {
        return this._pointSnapSpacing
    }, A.setPointSnapSpacing = function (K) {
        var I = this._pointSnapSpacing;
        this._pointSnapSpacing = K, this.fp("pointSnapSpacing", I, K)
    }, A.setHelperEditableFunc = function (j) {
        var J = this._helperEditableFunc;
        this._helperEditableFunc = j, this.fp("helperEditableFunc", J, j)
    }, A.getHelperEditableFunc = function () {
        return this._helperEditableFunc
    }, A.setLeftTopHelpers = function (V) {
        var Q = this._leftTopHelpers;
        this._leftTopHelpers = V, this.fp("leftTopHelpers", Q, V)
    }, A.getLeftTopHelpers = function () {
        return this._leftTopHelpers
    }, A.setLeftTopHelpersAlign = function (K) {
        var I = this._leftTopHelpersAlign;
        this._leftTopHelpersAlign = K, this.fp("leftTopHelpersAlign", I, K)
    }, A.getLeftTopHelpersAlign = function () {
        return this._leftTopHelpersAlign
    }, A.setRightTopHelpers = function (v) {
        var h = this._rightTopHelpers;
        this._rightTopHelpers = v, this.fp("rightTopHelpers", h, v)
    }, A.getRightTopHelpers = function () {
        return this._rightTopHelpers
    }, A.setRightTopHelpersAlign = function (i) {
        var h = this._rightTopHelpersAlign;
        this._rightTopHelpersAlign = i, this.fp("rightTopHelpersAlign", h, i)
    }, A.getRightTopHelpersAlign = function () {
        return this._rightTopHelpersAlign
    }, A.setLeftBottomHelpers = function (B) {
        var e = this._leftBottomHelpers;
        this._leftBottomHelpers = B, this.fp("leftBottomHelpers", e, B)
    }, A.getLeftBottomHelpers = function () {
        return this._leftBottomHelpers
    }, A.setLeftBottomHelpersAlign = function (z) {
        var w = this._leftBottomHelpersAlign;
        this._leftBottomHelpersAlign = z, this.fp("leftBottomHelpersAlign", w, z)
    }, A.getLeftBottomHelpersAlign = function () {
        return this._leftBottomHelpersAlign
    }, A.setRightBottomHelpers = function (A) {
        var V = this._rightBottomHelpers;
        this._rightBottomHelpers = A, this.fp("rightBottomHelpers", V, A)
    }, A.getRightBottomHelpers = function () {
        return this._rightBottomHelpers
    }, A.setRightBottomHelpersAlign = function (F) {
        var b = this._rightBottomHelpersAlign;
        this._rightBottomHelpersAlign = F, this.fp("rightBottomHelpersAlign", b, F)
    }, A.getRightBottomHelpersAlign = function () {
        return this._rightBottomHelpersAlign
    }, A.setEdgeHelpers = function (q) {
        var z = this._edgeHelpers;
        this._edgeHelpers = q, this.fp("edgeHelpers", z, q)
    }, A.getEdgeHelpers = function () {
        return this._edgeHelpers
    }, A.isHelperEditable = function (x, X) {
        return x instanceof g && ("host" === X || "edge" === X || "elevation" === X || "tall" === X) ? !1 : x instanceof j && ("source" === X || "target" === X) ? !1 : "pointElevation" === X ? this._helperEditableFunc ? this._helperEditableFunc(x, X) : !1 : this._helperEditableFunc ? this._helperEditableFunc(x, X) : !0
    }, A.getEditHelperSize = function () {
        return this._editHelperSize || (y ? 28 : 16)
    }, A.setEditHelperSize = function (p) {
        var V = this._editHelperSize;
        this._editHelperSize = p, this.fp("editHelperSize", V, p)
    }, A.getEditRectBorderColor = function () {
        return this.$28l || "rgb(0, 168, 255)"
    }, A.setEditRectBorderColor = function (l) {
        var v = this.$28l;
        this.$28l = l, this.fp("editRectBorderColor", v, l)
    }, A.getNodeBorderColor = function () {
        return this.$29l || "#1ABC9C"
    }, A.setNodeBorderColor = function (M) {
        var m = this.$29l;
        this.$29l = M, this.fp("nodeBorderColor", m, M)
    }, A.getEditRectBorderStyle = function () {
        return this.$30l || "dashed"
    }, A.setEditRectBorderStyle = function (I) {
        var _ = this.$30l;
        this.$30l = I, this.fp("editRectBorderStyle", _, I)
    }, A.getControlPointBackground = function () {
        return this.$31l || "#ff0"
    }, A.setControlPointBackground = function ($) {
        var H = this.$31l;
        this.$31l = $, this.fp("controlPointBackground", H, $)
    }, A.getControlPointBorderColor = function () {
        return this.$32l || this._editPointBorderColor
    }, A.setControlPointBorderColor = function (t) {
        var H = this.$32l;
        this.$32l = t, this.fp("controlPointBorderColor", H, t)
    }, A.getJoinPointBackground = function () {
        return this.$33l || this._editPointBackground
    }, A.setJoinPointBackground = function (Z) {
        var z = this.$33l;
        this.$33l = Z, this.fp("joinPointBackground", z, Z)
    }, A.getJoinPointBorderColor = function () {
        return this.$34l || this._editPointBorderColor
    }, A.setJoinPointBorderColor = function (n) {
        var s = this.$34l;
        this.$34l = n, this.fp("joinPointBorderColor", s, n)
    }, A.getDirectionLineColor = function () {
        return this.$35l || "#888"
    }, A.setDirectionLineColor = function ($) {
        var v = this.$35l;
        this.$35l = $, this.fp("directionLineColor", v, $)
    }, A.getSegmentHoverColor = function () {
        return this.$36l || "rgba(255, 0, 0, 0.3)"
    }, A.setSegmentHoverColor = function (H) {
        var l = this.$36l;
        this.$36l = H, this.fp("segmentHoverColor", l, H)
    }, A.getSegmentHoverWidth = function () {
        return this.$22l || (y ? 16 : 8)
    }, A.setSegmentHoverWidth = function (g) {
        var G = this.$22l;
        this.$22l = g, this.fp("segmentHoverWidth", G, g)
    }, A.getSnapPointBorderColor = function () {
        return this.$38l || "#f00"
    }, A.setSnapPointBorderColor = function (k) {
        var w = this.$38l;
        this.$38l = k, this.fp("snapPointBorderColor", w, k)
    }, A.getEditRectPadding = function () {
        return this.$39l != Y ? this.$39l : 6
    }, A.setEditRectPadding = function (f) {
        var x = this.$39l;
        this.$39l = f, this.fp("editRectPading", x, f)
    }, A.isRectEditable = function ($) {
        var w = this, f = w._editInteractor;
        return f instanceof C.XEditInteractor ? w._rectEditableFunc ? w._rectEditableFunc($) : !0 : Zo.call(w, $)
    }, A.isPointEditable = function (M) {
        var y = this, c = y._editInteractor;
        return c instanceof C.XEditInteractor ? y._pointEditableFunc ? y._pointEditableFunc(M) : !0 : lo.call(y, M)
    }, A.validateImpl = function () {
        var e = this, q = e.$14l, p = e._editInteractor;
        if (q) {
            var I = e.getWidth(), J = e.getHeight();
            (I !== q.clientWidth || J !== q.clientHeight) && (p && (p._68I = 1), t.setCanvas(q, I, J), e._32I = 1)
        }
        nk.call(this)
    }, A.isEditable = function (D) {
        var z = dh.call(this, D), j = this._editInteractor;
        if (j instanceof C.XEditInteractor && D instanceof g) {
            if (!D.s("2d.editable")) return !1;
            var K = this.getEditableFunc();
            z = K ? K(D) : !0
        }
        return z
    }, A._42 = function (u, T) {
        var o = this, z = o._editInteractor;
        ln.call(o, u, T), z instanceof C.XEditInteractor && z._68I && z._42()
    }, A.isSnapPoint = function () {
        return !0
    };
    var cg = function (D) {
        arguments.length > 0 && this.$58l(D)
    }, Xe = cg.prototype;
    Xe.$58l = function (w) {
        this.$62l = w, this.points = new Array
    }, Xe.$56l = function (X) {
        this.points.push(X)
    }, Xe.$57l = function (P) {
        this.points = this.points.concat(P)
    };
    var te = function (N, f) {
        arguments.length > 0 && this.$58l(N, f)
    }, Kd = te.prototype;
    Kd.$58l = function (e, J) {
        this.x = e, this.y = J
    }, Kd.add = function (U) {
        return new te(this.x + U.x, this.y + U.y)
    }, Kd.addEquals = function (Y) {
        return this.x += Y.x, this.y += Y.y, this
    }, Kd.$55l = function (x) {
        return new te(this.x * x, this.y * x)
    }, Kd.eq = function ($) {
        return this.x == $.x && this.y == $.y
    }, Kd.lt = function (h) {
        return this.x < h.x && this.y < h.y
    }, Kd.lte = function (h) {
        return this.x <= h.x && this.y <= h.y
    }, Kd.gt = function (L) {
        return this.x > L.x && this.y > L.y
    }, Kd.gte = function (g) {
        return this.x >= g.x && this.y >= g.y
    }, Kd.lerp = function (P, x) {
        return new te(this.x + (P.x - this.x) * x, this.y + (P.y - this.y) * x)
    }, Kd.distanceFrom = function (g) {
        var B = this.x - g.x, b = this.y - g.y;
        return Q(B * B + b * b)
    }, Kd.min = function (v) {
        return new te(k(this.x, v.x), k(this.y, v.y))
    }, Kd.max = function (C) {
        return new te(R(this.x, C.x), R(this.y, C.y))
    }, Kd.toString = function () {
        return this.x + "," + this.y
    };
    var fk = function () {
        this.$58l(arguments)
    }, Zr = fk.prototype;
    fk.TO = 1e-6, fk.AC = 6, Zr.$58l = function (p) {
        this.co = new Array;
        for (var g = p.length - 1; g >= 0; g--) this.co.push(p[g])
    }, Zr.$55l = function (w) {
        for (var O = new fk, x = 0; x <= this.$50l() + w.$50l(); x++) O.co.push(0);
        for (var x = 0; x <= this.$50l(); x++) for (var L = 0; L <= w.$50l(); L++) O.co[x + L] += this.co[x] * w.co[L];
        return O
    }, Zr.$59l = function () {
        for (var Z = this.$50l(); Z >= 0 && H(this.co[Z]) <= fk.TO; Z--) this.co.pop()
    }, Zr.$50l = function () {
        return this.co.length - 1
    }, Zr.$51l = function () {
        var y;
        switch (this.$59l(), this.$50l()) {
            case 0:
                y = new Array;
                break;
            case 1:
                y = this.$52l();
                break;
            case 2:
                y = this.$53l();
                break;
            case 3:
                y = this.$54l();
                break;
            case 4:
                y = this.$63l();
                break;
            default:
                y = new Array
        }
        return y
    }, Zr.$52l = function () {
        var M = new Array, x = this.co[1];
        return 0 != x && M.push(-this.co[0] / x), M
    }, Zr.$53l = function () {
        var q = new Array;
        if (2 == this.$50l()) {
            var T = this.co[2], H = this.co[1] / T, _ = this.co[0] / T, d = H * H - 4 * _;
            if (d > 0) {
                var c = Q(d);
                q.push(.5 * (-H + c)), q.push(.5 * (-H - c))
            } else 0 == d && q.push(.5 * -H)
        }
        return q
    }, Zr.$63l = function () {
        var r = new Array;
        if (4 == this.$50l()) {
            var a = this.co[4], q = this.co[3] / a, Z = this.co[2] / a, o = this.co[1] / a, O = this.co[0] / a,
                z = new fk(1, -Z, q * o - 4 * O, -q * q * O + 4 * Z * O - o * o).$54l(), i = z[0],
                A = q * q / 4 - Z + i;
            if (H(A) <= fk.TO && (A = 0), A > 0) {
                var e = Q(A), w = 3 * q * q / 4 - e * e - 2 * Z, X = (4 * q * Z - 8 * o - q * q * q) / (4 * e),
                    R = w + X, s = w - X;
                if (H(R) <= fk.TO && (R = 0), H(s) <= fk.TO && (s = 0), R >= 0) {
                    var M = Q(R);
                    r.push(-q / 4 + (e + M) / 2), r.push(-q / 4 + (e - M) / 2)
                }
                if (s >= 0) {
                    var M = Q(s);
                    r.push(-q / 4 + (M - e) / 2), r.push(-q / 4 - (M + e) / 2)
                }
            } else if (0 > A) ; else {
                var X = i * i - 4 * O;
                if (X >= -fk.TO) {
                    if (0 > X && (X = 0), X = 2 * Q(X), w = 3 * q * q / 4 - 2 * Z, w + X >= fk.TO) {
                        var v = Q(w + X);
                        r.push(-q / 4 + v / 2), r.push(-q / 4 - v / 2)
                    }
                    if (w - X >= fk.TO) {
                        var v = Q(w - X);
                        r.push(-q / 4 + v / 2), r.push(-q / 4 - v / 2)
                    }
                }
            }
        }
        return r
    }, Zr.$54l = function () {
        var _ = new Array;
        if (3 == this.$50l()) {
            var O = this.co[3], E = this.co[2] / O, v = this.co[1] / O, B = this.co[0] / O, $ = (3 * v - E * E) / 3,
                f = (2 * E * E * E - 9 * v * E + 27 * B) / 27, T = E / 3, m = f * f / 4 + $ * $ * $ / 27, k = f / 2;
            if (H(m) <= fk.TO && (m = 0), m > 0) {
                var r, V, W = Q(m);
                r = -k + W, V = r >= 0 ? o(r, 1 / 3) : -o(-r, 1 / 3), r = -k - W, r >= 0 ? V += o(r, 1 / 3) : V -= o(-r, 1 / 3), _.push(V - T)
            } else if (0 > m) {
                var A = Q(-$ / 3), G = K(Q(-m), -k) / 3, z = U(G), F = n(G), j = Q(3);
                _.push(2 * A * z - T), _.push(-A * (z + j * F) - T), _.push(-A * (z - j * F) - T)
            } else {
                var r;
                r = k >= 0 ? -o(k, 1 / 3) : o(-k, 1 / 3), _.push(2 * r - T), _.push(-r - T)
            }
        }
        return _
    };
    var Pm = function (R, u) {
        arguments.length > 0 && this.$58l(R, u)
    }, bp = Pm.prototype;
    bp.$58l = function (Y, i) {
        this.x = Y, this.y = i
    }, bp.length = function () {
        return Q(this.x * this.x + this.y * this.y)
    }, bp.$60l = function (H) {
        return this.x * H.x + this.y * H.y
    };
    var _p = function (t, X, T, m) {
        var P, K = (m.x - T.x) * (t.y - T.y) - (m.y - T.y) * (t.x - T.x),
            k = (X.x - t.x) * (t.y - T.y) - (X.y - t.y) * (t.x - T.x),
            M = (m.y - T.y) * (X.x - t.x) - (m.x - T.x) * (X.y - t.y);
        if (0 != M) {
            var Y = K / M, V = k / M;
            Y >= 0 && 1 >= Y && V >= 0 && 1 >= V ? (P = new cg(l), P.points.push(new te(t.x + Y * (X.x - t.x), t.y + Y * (X.y - t.y)))) : P = new cg(E)
        } else P = 0 == K || 0 == k ? new cg("C") : new cg("P");
        return P
    }, dn = function (_, F, J, f, z) {
        var S, T, H, Z, n, O, D, r = f.min(z), G = f.max(z), v = new cg(E);
        S = F.$55l(-2), H = _.add(S.add(J)), S = _.$55l(-2), T = F.$55l(2), Z = S.add(T), n = new te(_.x, _.y), D = new Pm(f.y - z.y, z.x - f.x), O = f.x * z.y - z.x * f.y;
        for (var A = new fk(D.$60l(H), D.$60l(Z), D.$60l(n) + O).$51l(), j = 0; j < A.length; j++) {
            var Y = A[j];
            if (Y >= 0 && 1 >= Y) {
                var R = _.lerp(F, Y), x = F.lerp(J, Y), V = R.lerp(x, Y);
                f.x == z.x ? r.y <= V.y && V.y <= G.y && (v.$62l = l, v.$56l(V)) : f.y == z.y ? r.x <= V.x && V.x <= G.x && (v.$62l = l, v.$56l(V)) : V.gte(r) && V.lte(G) && (v.$62l = l, v.$56l(V))
            }
        }
        return v
    }, Yh = function (F, z, f, c, N) {
        var e = c.min(N), a = c.max(N), b = new te(a.x, e.y), t = new te(e.x, a.y), h = dn(F, z, f, e, b),
            i = dn(F, z, f, b, a), I = dn(F, z, f, a, t), p = dn(F, z, f, t, e), R = new cg(E);
        return R.$57l(h.points), R.$57l(i.points), R.$57l(I.points), R.$57l(p.points), R.points.length > 0 && (R.$62l = l), R
    }, Dp = function (Y, f, n, K, _, D) {
        var d, B, g, Q, c, m, T, u, o, I, h = _.min(D), F = _.max(D), k = new cg(E);
        d = Y.$55l(-1), B = f.$55l(3), g = n.$55l(-3), Q = d.add(B.add(g.add(K))), c = new Pm(Q.x, Q.y), d = Y.$55l(3), B = f.$55l(-6), g = n.$55l(3), Q = d.add(B.add(g)), m = new Pm(Q.x, Q.y), d = Y.$55l(-3), B = f.$55l(3), g = d.add(B), T = new Pm(g.x, g.y), u = new Pm(Y.x, Y.y), I = new Pm(_.y - D.y, D.x - _.x), o = _.x * D.y - D.x * _.y;
        for (var b = new fk(I.$60l(c), I.$60l(m), I.$60l(T), I.$60l(u) + o).$51l(), S = 0; S < b.length; S++) {
            var $ = b[S];
            if ($ >= 0 && 1 >= $) {
                var e = Y.lerp(f, $), x = f.lerp(n, $), p = n.lerp(K, $), i = e.lerp(x, $), R = x.lerp(p, $),
                    G = i.lerp(R, $);
                _.x == D.x ? h.y <= G.y && G.y <= F.y && (k.$62l = l, k.$56l(G)) : _.y == D.y ? h.x <= G.x && G.x <= F.x && (k.$62l = l, k.$56l(G)) : G.gte(h) && G.lte(F) && (k.$62l = l, k.$56l(G))
            }
        }
        return k
    }, Io = function (t, d, U, e, W, n) {
        var k = W.min(n), H = W.max(n), c = new te(H.x, k.y), $ = new te(k.x, H.y), o = Dp(t, d, U, e, k, c),
            I = Dp(t, d, U, e, c, H), P = Dp(t, d, U, e, H, $), K = Dp(t, d, U, e, $, k), T = new cg(E);
        return T.$57l(o.points), T.$57l(I.points), T.$57l(P.points), T.$57l(K.points), T.points.length > 0 && (T.$62l = l), T
    }, Ad = function (j, J, n, h) {
        var D = n.min(h), y = n.max(h), m = new te(y.x, D.y), s = new te(D.x, y.y), e = _p(D, m, j, J),
            i = _p(m, y, j, J), Z = _p(y, s, j, J), $ = _p(s, D, j, J), p = new cg(E);
        return p.$57l(e.points), p.$57l(i.points), p.$57l(Z.points), p.$57l($.points), p.points.length > 0 && (p.$62l = l), p
    }, po = C.XEditInteractor = function (L) {
        var c = this, E = c._view = document.createElement("canvas");
        E.className = "editCanvas", E.style.position = "absolute", po.superClass.constructor.call(c, L)
    };
    J.def(po, C.Interactor, {
        ms_edit: 1, setUp: function () {
            var l = this, N = l.gv, H = N.getView(), C = l._view;
            po.superClass.setUp.call(l), N.setEditInteractor(l), N.$14l = C, N._79O ? H.insertBefore(C, N._79O) : H.appendChild(C);
            var u = l.$49l = l.$11l.bind(l);
            N.dm().md(u), N.sm().ms(u), N.mp(u)
        }, tearDown: function () {
            var w = this, p = w.gv, o = p.getView(), W = w.$49l;
            po.superClass.tearDown.call(w), p.setEditInteractor(Y), p.$14l = Y, o.removeChild(w._view), p.dm().umd(W), p.sm().ums(W), p.ump(W)
        }, clear: function () {
            var Y = this, f = Y.gv;
            delete Y._hoverSegmentIndex, delete Y._edge, delete Y._shape, delete f._editing, delete Y.$10l, delete Y.$13l, delete Y.$9l, delete Y._removePointIndex, delete Y._lp, Y.$12l = "", delete Y.$40l, delete Y.$67l, delete Y.$72l, delete Y.$73l, delete Y.$75l, delete Y.$1l, delete Y.$3l, delete Y.$2l, delete Y.$92l, delete Y.$93l, delete Y.$94l, Y.clearDragging()
        }, handle_keydown: function (L) {
            this.$48l !== L.shiftKey && (this.$48l = L.shiftKey, this.handle_mousemove(L, _, !0))
        }, handle_keyup: function (D) {
            this.$48l !== D.shiftKey && (this.$48l = D.shiftKey, this.handle_mousemove(D, _, !0))
        }, handle_touchstart: function (d) {
            this.handle_mousemove(d), this.handle_mousedown(d)
        }, handle_mousedown: function (b) {
            X(b);
            var Q = this, T = Q.$13l, s = Q.gv, K = s.dm(), p = s.sm(), n = s.getZoom(), x = s.lp(b),
                Z = J.isDoubleClick(b), S = J.isLeftButton(b), z = Q.$7l, Y = Q._shape, i = Q._hoverSegmentIndex,
                H = Q._edge, $ = Q.$87l, C = Q.$88l, u = function () {
                    Q._68I || $ === Q.$87l && C === Q.$88l || Q.$43l()
                };
            if (7 !== Q.$67l && (delete Q.$87l, delete Q.$88l), S && (Y || H) && i >= 0 && Z && (Y && p.contains(Y) || H && p.contains(H))) {
                var f = zs.call(Q, Y || H, i, x);
                return Q.addShapePoint(Y || H, i, f), W(function () {
                    Q.handle_mousemove(b)
                }, 40), void 0
            }
            if (S && (Y || H) && Q._removePointIndex >= 0 && Z) return Q.removeShapePoint(), Q.$5l = 1, W(function () {
                Q.handle_mousemove(b)
            }, 40), void 0;
            if (!S || !s._editing) return u(), void 0;
            if (Y && T >= 0) {
                var l = Y.getPoints().get(T), g = Y.p(), I = bf(g, l.x - g.x, l.y - g.y, -z + Y.getRotation());
                e = bf(g, x.x - g.x, x.y - g.y, -z), Q.$24l = {
                    x: e.x - I.x,
                    y: e.y - I.y
                }, Q.startDragging(b), K.beginTransaction(), Q.fi({
                    kind: "beginEditPoint",
                    event: b,
                    data: Y,
                    index: T
                }), Q.$88l = T, Q.$87l = Y
            } else if (Q.$10l) {
                var c = s.sm().getSelection(), B = Q.$6l, O = Q.$1l = {}, A = Q.$3l = {}, h = Q.$16l[r[Q.$10l]],
                    d = {x: B.x, y: B.y}, P = {x: B.x + B.width / 2, y: B.y + B.height / 2};
                Q.$24l = {x: x.x - h.x / n, y: x.y - h.y / n}, Q.$2l = m(Q.$8l), Q.$4l = m(B), c.each(function (b) {
                    if (b instanceof j) {
                        var p = b.p(), L = b.getWidth(), Z = b.getHeight(), i = bf(P, p.x - P.x, p.y - P.y, -z);
                        O[b.getId()] = {
                            x: p.x - L / 2,
                            y: p.y - Z / 2,
                            width: L,
                            height: Z
                        }, A[b.getId()] = {x: (i.x - d.x) / B.width, y: (i.y - d.y) / B.height}
                    }
                }), Q.startDragging(b), K.beginTransaction(), Q.fi({kind: "beginEditRect", event: b, direction: Q.$10l})
            } else if (H && T >= 0) {
                var o = wi(s.getDataUI(H), H.s("edge.points")), l = o.get(T);
                Q.$24l = {
                    x: x.x - l.x,
                    y: x.y - l.y
                }, Q.startDragging(b), K.beginTransaction(), Q.fi({
                    kind: "beginEditPoint",
                    event: b,
                    data: H,
                    index: T
                }), Q.$88l = T, Q.$87l = H
            } else if (Q.$40l) {
                var B = Q.$6l, P = {x: B.x + B.width / 2, y: B.y + B.height / 2}, w = m(Q.$23l);
                w.x /= n, w.y /= n;
                var N = bf(P, w.x - P.x, w.y - P.y, -z), e = bf(P, x.x - P.x, x.y - P.y, -z);
                Q.$24l = {
                    x: e.x - N.x,
                    y: e.y - N.y
                }, Q.startDragging(b), K.beginTransaction(), Q.fi({
                    kind: "beginEditRotation",
                    event: b,
                    data: Q._rotationNode
                })
            } else if ([1, 2, 3, 5, 6, 7, 8, 9].indexOf(Q.$67l) >= 0) {
                var y = Q.$67l;
                (7 === y || 8 === y || 9 === y) && K.beginTransaction(), Q.startDragging(b)
            } else if (Q.$71l && Z && Q.$79l(Q.$71l, x)) {
                var F = p.toSelection();
                K.beginTransaction(), F.each(function (t) {
                    K.remove(t)
                }), K.endTransaction()
            }
            u()
        }, $11l: function () {
            var L = this, U = L.gv;
            U._editing && (L.$13l == Y || L._shape == Y && L._edge == Y) && (L.$73l == Y || 1 !== L.$67l && 5 !== L.$67l && 6 !== L.$67l) || (L.$5l = 1), L._68I = 1
        }, $46l: function (r) {
            var c = this, $ = c.gv, w = $.lp(r), R = [];
            return On($, function (x) {
                var b = $.getDataUI(x);
                if (b) {
                    var U = b._79o();
                    e(U, w) && R.push(x)
                }
            }), R
        }, $47l: function (T) {
            var m = this, k = m.$13l, $ = m.gv.dm();
            m.$10l ? (m.fi({
                kind: "endEditRect",
                event: T,
                direction: m.$10l
            }), $.endTransaction()) : m._shape && k >= 0 ? (m.fi({
                kind: "endEditPoint",
                event: T,
                data: m._shape,
                index: k
            }), $.endTransaction()) : m._edge && k >= 0 ? (m.fi({
                kind: "endEditPoint",
                event: T,
                data: m._edge,
                index: k
            }), $.endTransaction()) : m.$23l && m.$40l && (m.fi({
                kind: "endEditRotation",
                event: T
            }), $.endTransaction())
        }, handleWindowTouchEnd: function (I) {
            this.handleWindowMouseUp(I)
        }, handleWindowMouseUp: function (r) {
            var q = this, t = q.gv, D = t.dm(), c = q._shape, M = q._edge, h = q.$13l, I = q.$40l, x = q.$9l,
                Q = q.$10l, C = q.$67l;
            if ((c || M) && h >= 0 && x >= 0) {
                var k, e;
                if (c) {
                    var n = c.p(), A = c.getRotation();
                    k = c.getPoints(), e = k.get(x), ye(c, n, A, h, e, !1)
                } else if (k = wi(t.getDataUI(M), M.s("edge.points"), !0), e = k.get(x), 0 === h) {
                    var U = k.get(0);
                    M.s("edge.source.offset.x", e.x - U.x), M.s("edge.source.offset.y", e.y - U.y)
                } else if (h === k.size() - 1) {
                    var W = k.get(k.size() - 1);
                    M.s("edge.target.offset.x", e.x - W.x), M.s("edge.target.offset.y", e.y - W.y)
                } else "points" === M.s("edge.type") && (k.set(h, e), M.s("edge.points", Ce(k)))
            }
            q.$47l(r);
            var H = q.$73l;
            1 === C ? (D.beginTransaction(), H ? t.sm().each(function (b) {
                if (b.setHost && t.isHelperEditable(b, "host")) {
                    b.setHost(H);
                    var J = q.$75l, P = q.$74l;
                    J && (b.s("attach.row.index", J.rowIndex), b.s("attach.column.index", J.columnIndex)), P && (b.s("attach.index", P.attachIndex), b.s("attach.offset", P.attachOffset), b.s("attach.offset.relative", !1), b.s("attach.offset.opposite", !1))
                }
            }) : t.sm().each(function (r) {
                r.setHost && t.isHelperEditable(r, "host") && (r.setHost(Y), r.s("attach.row.index", _), r.s("attach.column.index", _), r.s("attach.index", _), r.s("attach.offset", _), r.s("attach.offset.relative", !1), r.s("attach.offset.opposite", !1))
            }), D.endTransaction()) : 2 === C ? (D.beginTransaction(), H ? t.sm().each(function (X) {
                X.setParent && t.isHelperEditable(X, "parent") && X.setParent(H)
            }) : t.sm().each(function (M) {
                M.setParent && t.isHelperEditable(M, "parent") && M.setParent(Y)
            }), D.endTransaction()) : 3 === C ? H && (D.beginTransaction(), t.sm().each(function (P) {
                if (t.isHelperEditable(P, "edge") && P instanceof j && H instanceof j) {
                    var E = new Z.Edge;
                    D.add(E), E.setSource(P), E.setTarget(H), q.onEdgeCreated && q.onEdgeCreated(r, E)
                }
            }), D.endTransaction()) : 5 === C || 6 === C ? H && (D.beginTransaction(), t.sm().each(function (I) {
                I instanceof g && H instanceof j && (5 === C && t.isHelperEditable(I, "source") ? I.setSource(H) : 6 === C && t.isHelperEditable(I, "source") && I.setTarget(H))
            }), D.endTransaction()) : (7 === C || 8 === C || 9 === C) && D.endTransaction(), (Q || I) && q.$43l(!0), y ? (q.clear(), delete q.$64l, q._68I || q.$43l()) : (q.handle_mousemove(r, !0), C && !q._68I && q.$43l())
        }, handleWindowTouchMove: function (S) {
            this.handleWindowMouseMove(S)
        }, handleWindowMouseMove: function (D) {
            this._78I(D)
        }, handle_mousemove: function (e, l, t) {
            if (!this._pause) {
                if (!t) {
                    var k = y ? Fg(e) : e;
                    this.$61l = {clientX: k.clientX, clientY: k.clientY}
                }
                if (l === !0 || !M()) {
                    var Q = this, q = Q.gv, h = !1, H = Y;
                    Q.clear(), q.sm().size() > 0 && (H = q.lp(t ? Q.$61l : e), h = Q._79I(e, H)), h && (q._editing = 1), Q.$12l !== Q.$65l && (Q.$65l = Q.$12l, Q.setCursor(Q.$12l)), Q.$40l !== Q.$64l && (Q.$64l = Q.$40l, Q._68I || Q.$43l()), Q._hoverSegmentIndex !== Q.$66l && (Q.$66l = Q._hoverSegmentIndex, Q._68I || Q.$43l())
                }
            }
        }, _78I: function (k) {
            this.autoScroll(k);
            var n = this, Z = n.gv, $ = Z.lp(k), P = Z.getZoom(), l = n.$13l;
            if ((n._shape || n._edge) && l >= 0) {
                var v, w, f, r = n._shape, d = n._edge, _ = n.$24l, C = Z.getPointSnapSpacing(), M = function (K, n) {
                    return C == Y || isNaN(C) ? {x: K, y: n} : {x: i(K / C) * C, y: i(n / C) * C}
                };
                if (r) {
                    v = r.getPoints();
                    var z = r.p(), O = r.getRotation(), x = 0;
                    w = bf(z, $.x - z.x, $.y - z.y, -O), ye(r, z, O, l, $, !0, _, M), n.fi({
                        kind: "betweenEditPoint",
                        event: k,
                        data: r,
                        index: l
                    })
                } else if (d) {
                    v = wi(Z.getDataUI(d), d.s("edge.points"), !0), $.x -= _.x, $.y -= _.y, w = $;
                    var B, L, G = d.s("edge.offset"), U = v.size(), o = U > 2;
                    if (0 === l) {
                        var A = v.get(0);
                        G && (A = vs(A, v.get(1), -G, o), $ = vs($, v.get(1), -G, o)), B = $.x - A.x, L = $.y - A.y, f = M(B, L), d.s("edge.source.offset.x", f.x), d.s("edge.source.offset.y", f.y)
                    } else if (l === U - 1) {
                        var h = v.get(U - 1);
                        G && (h = vs(h, v.get(U - 2), -G, o), $ = vs($, v.get(U - 2), -G, o)), B = $.x - h.x, L = $.y - h.y, f = M(B, L), d.s("edge.target.offset.x", f.x), d.s("edge.target.offset.y", f.y)
                    } else "points" === d.s("edge.type") && (f = M($.x, $.y), f.e = v.get(l).e, v.set(l, f), d.s("edge.points", Ce(v)));
                    n.fi({kind: "betweenEditPoint", event: k, data: d, index: l})
                }
                if (delete n.$9l, Z.isSnapPoint(r) || Z.isSnapPoint(d)) for (x = 0; x < v.size(); x++) if (x !== l) {
                    var a = v.get(x);
                    if (F(a, w) < Z.getEditPointSize() / P) {
                        n.$9l = x;
                        break
                    }
                }
            } else if (n.$10l) {
                var _ = n.$24l;
                $.x -= _.x, $.y -= _.y;
                var b = Z.sm().getSelection(), m = n.$1l, E = n.$7l, R = n.$10l, t = n.$4l, p = n.$2l,
                    I = Z.getEditRectPadding() / P, T = 2 * I, q = Z.getSnapSpacing(), X = q != Y && !isNaN(q),
                    N = cs(p, $, R, E, 2 * I, Z.getResizeMode(), X, !0), c = n.$6l;
                if (X) {
                    var y = N.width - T, e = N.height - T, u = i(y / q) * q, gr = i(e / q) * q, xb = u - y, Hm = gr - e;
                    ("west" === R || "northwest" === R || "southwest" === R) && (xb = -xb), ("north" === R || "northwest" === R || "northeast" === R) && (Hm = -Hm), N = cs(p, $, R, E, 2 * I, Z.getResizeMode(), X, !1, xb, Hm)
                }
                n.$8l = N, c.x = N.x + I, c.y = N.y + I, c.width = N.width - T, c.height = N.height - T;
                var nb = N.x + N.width / 2, lg = N.y + N.height / 2, _p = c.x, zh = c.y, ak = c.width / t.width,
                    oo = c.height / t.height;
                b.each(function (O) {
                    if (O instanceof j && Z.isEditable(O) && Z.isRectEditable(O)) {
                        var s = m[O.getId()], S = n.$3l[O.getId()], e = {x: s.x + s.width / 2, y: s.y + s.height / 2},
                            D = 0, o = 0, i = R, d = 180 * H(E - O.getRotation()) / V;
                        "northeast" === R ? d >= 315 || 45 > d ? (D = s.width * ak + s.x, o = s.height * (1 - oo) + s.y, i = "northeast") : d >= 45 && 135 > d ? (D = s.width * (1 - oo) + s.x, o = s.height * (1 - ak) + s.y, i = "northwest") : d >= 135 && 225 > d ? (D = s.width * (1 - ak) + s.x, o = s.height * oo + s.y, i = "southwest") : (D = s.width * oo + s.x, o = s.height * ak + s.y, i = "southeast") : "north" === R ? d >= 315 || 45 > d ? (o = s.height * (1 - oo) + s.y, i = "north") : d >= 45 && 135 > d ? (D = s.width * (1 - oo) + s.x, i = "west") : d >= 135 && 225 > d ? (o = s.height * oo + s.y, i = "south") : (D = s.width * oo + s.x, i = "east") : "northwest" === R ? d >= 315 || 45 > d ? (D = s.width * (1 - ak) + s.x, o = s.height * (1 - oo) + s.y, i = "northwest") : d >= 45 && 135 > d ? (D = s.width * (1 - oo) + s.x, o = s.height * ak + s.y, i = "southwest") : d >= 135 && 225 > d ? (D = s.width * ak + s.x, o = s.height * oo + s.y, i = "southeast") : (D = s.width * oo + s.x, o = s.height * (1 - ak) + s.y, i = "northeast") : "west" === R ? d >= 315 || 45 > d ? (D = s.width * (1 - ak) + s.x, i = "west") : d >= 45 && 135 > d ? (o = s.height * ak + s.y, i = "south") : d >= 135 && 225 > d ? (D = s.width * ak + s.x, i = "east") : (o = s.height * (1 - ak) + s.y, i = "north") : "southwest" === R ? d >= 315 || 45 > d ? (D = s.width * (1 - ak) + s.x, o = s.height * oo + s.y, i = "southwest") : d >= 45 && 135 > d ? (D = s.width * oo + s.x, o = s.height * ak + s.y, i = "southeast") : d >= 135 && 225 > d ? (D = s.width * ak + s.x, o = s.height * (1 - oo) + s.y, i = "northeast") : (D = s.width * (1 - oo) + s.x, o = s.height * (1 - ak) + s.y, i = "northwest") : "east" === R ? d >= 315 || 45 > d ? (D = s.width * ak + s.x, i = "east") : d >= 45 && 135 > d ? (o = s.height * (1 - ak) + s.y, i = "north") : d >= 135 && 225 > d ? (D = s.width * (1 - ak) + s.x, i = "west") : (o = s.height * ak + s.y, i = "south") : "south" === R ? d >= 315 || 45 > d ? (o = s.height * oo + s.y, i = "south") : d >= 45 && 135 > d ? (D = s.width * oo + s.x, i = "east") : d >= 135 && 225 > d ? (o = s.height * (1 - oo) + s.y, i = "north") : (D = s.width * (1 - oo) + s.x, i = "west") : "southeast" === R && (d >= 315 || 45 > d ? (D = s.width * ak + s.x, o = s.height * oo + s.y, i = "southeast") : d >= 45 && 135 > d ? (D = s.width * oo + s.x, o = s.height * (1 - ak) + s.y, i = "northeast") : d >= 135 && 225 > d ? (D = s.width * (1 - ak) + s.x, o = s.height * (1 - oo) + s.y, i = "northwest") : (D = s.width * (1 - oo) + s.x, o = s.height * ak + s.y, i = "southwest"));
                        var l = bf(e, D - e.x, o - e.y, O.getRotation());
                        Vr(O, s, i, {x: l.x, y: l.y});
                        var w = _p + c.width * S.x, P = zh + c.height * S.y, X = {x: w, y: P};
                        X = bf({x: nb, y: lg}, X.x - nb, X.y - lg, E), O.p(X.x, X.y)
                    }
                }), n.fi({kind: "betweenEditRect", event: k, direction: R})
            } else if (n.$23l && n.$40l) {
                var vc = n.$8l, hi = vc.width, dp = vc.height, z = {x: vc.x + hi / 2, y: vc.y + dp / 2}, _ = n.$24l,
                    vf = n.$23l, ef = vf.x / P - z.x, Rh = vf.y / P - z.y, _q = Q(ef * ef + Rh * Rh),
                    Xb = Math.asin(_.x / _q), _h = Z.sm().getSelection(), ns = S + K($.y - z.y, $.x - z.x) - Xb,
                    Pk = Z.getSnapAngle(), ns = i(ns / Pk) * Pk;
                0 > ns && (ns += s);
                var Ie = ns - n.$7l, Kc = [z.x, 0, z.y];
                _h.each(function (g) {
                    if (Z.isEditable(g) && Z.isRotationEditable(g) && Z.isVisible(g)) {
                        var O = bj(g.p3(), Kc), Q = Vc();
                        xr(Q, -Ie), g.setRotation(g.getRotation() + Ie), oe(O, Q), g.p3(Kc[0] + O[0], Kc[1] + O[1], Kc[2] + O[2])
                    }
                }), n.$7l = ns, n.fi({kind: "betweenEditRotation", event: k})
            } else if ([1, 2, 3, 5, 6].indexOf(n.$67l) >= 0) n.$72l = k, n.$78l || (n.$78l = 1, W(function () {
                J.isDragging() && n.$43l(), delete n.$78l
            }, 12)); else if (7 === n.$67l) {
                if (n.$87l instanceof D) {
                    var r = n.$87l, xk = n.$88l, Ab = J.clone(r.getPoints().get(xk)), Nh = $.y - Ab.y;
                    Ab.e || (Ab.e = 0), n.$92l || (n.$92l = Ab.e), Ab.e = n.$92l - Nh, r.setPoint(xk, Ab)
                } else if (n.$87l instanceof g) {
                    var d = n.$87l, xk = n.$88l, v = wi(Z.getDataUI(d), d.s("edge.points")), Ab = v.get(xk),
                        Nh = $.y - Ab.y;
                    Ab.e || (Ab.e = 0), n.$92l || (n.$92l = Ab.e), Ab.e = n.$92l - Nh, v.set(xk, Ab), d.s("edge.points", Ce(v))
                }
            } else if (8 === n.$67l) {
                var _h = Z.sm().getSelection(), Ip = n.$93l;
                Ip || (Ip = n.$93l = {}), _h.each(function (B) {
                    if (B.p3) {
                        var x = B.p3(), V = Ip[B.getId()];
                        V == Y && (V = Ip[B.getId()] = x[1]), B.p3([x[0], V - ($.y - n.$90l.y / P), x[2]])
                    }
                })
            } else if (9 === n.$67l) {
                var _h = Z.sm().getSelection(), Ri = n.$94l;
                Ri || (Ri = n.$94l = {}), _h.each(function (O) {
                    if (O.s3) {
                        var o = O.s3(), j = Ri[O.getId()];
                        j == Y && (j = Ri[O.getId()] = o[1]);
                        var _ = j - ($.y - n.$91l.y / P);
                        0 > _ && (_ = .01), O.s3([o[0], _, o[2]])
                    }
                })
            }
        }, $79l: function (Q, K) {
            var Y = this, C = Y.gv, T = C.getZoom(), X = C.getEditHelperSize(), x = Q.x / T, J = Q.y / T, i = X / T,
                k = i / 2;
            return e({x: x - k, y: J - k, width: i, height: i}, K) ? !0 : void 0
        }, getHelperCursor: function () {
            return "crosshair"
        }, _79I: function (H, F) {
            for (var Y = this, w = Y.gv, J = w.getZoom(), B = w.getEditPointSize(), o = B / J, x = o / 2, u = Y.$46l(H), C = 0; C < u.length; C++) {
                var W, E, O = u[C], d = w.getDataUI(O);
                if (d && d._55O) {
                    var s = d._55O;
                    if (s._43O && O instanceof g) {
                        if (W = O.s("edge.points"), W = wi(d, W), E = O.s("edge.segments"), E && E.size() || (E = Jn(W)), Y.$42l(O, F, W._as, E, "edge")) return !0;
                        if ("points" === O.s("edge.type") && Y.$41l(O, F, W._as, E, "edge")) return
                    }
                    if (s._43O && O instanceof D && s.$15l && s.$15l.length === O.getPoints().size()) {
                        if (W = s.$15l, E = O.getSegments(), E && E.size() || (E = Jn(W)), Y.$42l(O, F, W, E, "shape")) return !0;
                        if (Y.$41l(O, F, W, E, "shape")) return
                    }
                }
            }
            if (Y.$16l) {
                var W, K = Y.$16l, V = K[3].x - K[7].x, z = K[3].y - K[7].y, $ = Q(V * V + z * z), L = K[1].x - K[5].x,
                    l = K[1].y - K[5].y, f = Q(L * L + l * l), h = {x: F.x * J, y: F.y * J};
                if (Y._80I(h, 0, K[0], "northwest", $, f) || Y._80I(h, 1, K[1], "north", $, f) || Y._80I(h, 2, K[2], "northeast", $, f) || Y._80I(h, 7, K[7], "west", $, f) || Y._80I(h, 3, K[3], "east", $, f) || Y._80I(h, 6, K[6], "southwest", $, f) || Y._80I(h, 5, K[5], "south", $, f) || Y._80I(h, 4, K[4], "southeast", $, f)) return !0
            }
            if (Y.$23l) {
                var q = Y.$23l, G = q.x / J, b = q.y / J;
                if (e({
                        x: G - x,
                        y: b - x,
                        width: o,
                        height: o
                    }, F)) return Y.$40l = 1, Y.$12l = Y.getHelperCursor("rotation") || "crosshair", !0
            }
            return Y.$68l && Y.$79l(Y.$68l, F) ? (Y.$67l = 1, Y.$12l = Y.getHelperCursor("host") || "crosshair", !0) : Y.$69l && Y.$79l(Y.$69l, F) ? (Y.$67l = 2, Y.$12l = Y.getHelperCursor("parent") || "crosshair", !0) : Y.$70l && Y.$79l(Y.$70l, F) ? (Y.$67l = 3, Y.$12l = Y.getHelperCursor("edge") || "crosshair", !0) : Y.$71l && Y.$79l(Y.$71l, F) ? (Y.$67l = 4, Y.$12l = Y.getHelperCursor("remove") || "crosshair", !0) : Y.$82l && Y.$79l(Y.$82l, F) ? (Y.$67l = 5, Y.$12l = Y.getHelperCursor("source") || "crosshair", !0) : Y.$83l && Y.$79l(Y.$83l, F) ? (Y.$67l = 6, Y.$12l = Y.getHelperCursor("target") || "crosshair", !0) : Y._pointElevationHelperPoint && Y.$79l(Y._pointElevationHelperPoint, F) ? (Y.$67l = 7, Y.$12l = Y.getHelperCursor("pointElevation") || "crosshair", !0) : Y.$90l && Y.$79l(Y.$90l, F) ? (Y.$67l = 8, Y.$12l = Y.getHelperCursor("elevation") || "crosshair", !0) : Y.$91l && Y.$79l(Y.$91l, F) ? (Y.$67l = 9, Y.$12l = Y.getHelperCursor("tall") || "crosshair", !0) : !1
        }, _80I: function (S, r, i, C, J, m) {
            var P = this, G = P.gv, c = G.getEditPointSize(), q = c / 2, k = G.sm(), p = G.isDirectionEditable;
            if (p && 1 === k.size()) {
                var A = k.ld();
                if (p = p.bind(G), A instanceof j) {
                    if (!p(A, C)) return !1;
                    if ("east" === C) {
                        if (p(A, "northeast") && p(A, "southeast") && 2 * c >= m) return !1
                    } else if ("west" === C) {
                        if (p(A, "northwest") && p(A, "southwest") && 2 * c >= m) return !1
                    } else if ("north" === C) {
                        if (p(A, "northwest") && p(A, "northeast") && 2 * c >= J) return !1
                    } else if ("south" === C && p(A, "southwest") && p(A, "southeast") && 2 * c >= J) return !1
                }
            } else {
                if (2 * c >= J && ("north" === C || "south" === C)) return !1;
                if (2 * c >= m && ("east" === C || "west" === C)) return !1
            }
            if (e({x: i.x - q, y: i.y - q, width: c, height: c}, S)) {
                if (P.$10l !== C) {
                    var R = 180 * P.$7l / V, B = "";
                    R >= 337.5 || 22.5 > R ? B = "north" : R >= 22.5 && 67.5 > R ? B = "northeast" : R >= 67.5 && 112.5 > R ? B = "east" : R >= 112.5 && 157.5 > R ? B = "southeast" : R >= 157.5 && 202.5 > R ? B = "south" : R >= 202.5 && 247.5 > R ? B = "southwest" : R >= 247.5 && 292.5 > R ? B = "west" : R >= 292.5 && 337.5 > R && (B = "northwest");
                    var u = Ih.indexOf(B), B = Ih[r - (1 - u) + 8];
                    switch (B) {
                        case"northwest":
                            P.$12l = "nwse-resize";
                            break;
                        case"northeast":
                            P.$12l = "nesw-resize";
                            break;
                        case"southwest":
                            P.$12l = "nesw-resize";
                            break;
                        case"southeast":
                            P.$12l = "nwse-resize";
                            break;
                        case"north":
                            P.$12l = "ns-resize";
                            break;
                        case"east":
                            P.$12l = "ew-resize";
                            break;
                        case"south":
                            P.$12l = "ns-resize";
                            break;
                        case"west":
                            P.$12l = "ew-resize"
                    }
                    P.$10l = C
                }
                return !0
            }
            return !1
        }, $42l: function (K, A, I, u, C) {
            var q, v = this, N = v.gv, Z = N.getEditPointSize(), M = Z / N.getZoom(), o = -1,
                w = {x: A.x, y: A.y, width: 0, height: 0}, W = function (x) {
                    "shape" === C ? v._shape = K : v._edge = K, v._removePointIndex = x
                }, d = function (c) {
                    "shape" === C ? v._shape = K : v._edge = K, v.$13l = c, v.$12l = "crosshair"
                };
            for (a(w, M / 2), o = I.length - 1, q = u.size() - 1; q >= 0; q--) {
                var J = u.get(q);
                if (1 === J || 2 === J) o -= 1; else if (3 === J) {
                    var D = I[o - 1];
                    if (e(w, D)) return d(o - 1), !0;
                    o -= 2
                } else if (4 === J) {
                    var $ = I[o - 1], c = I[o - 2];
                    if (e(w, $)) return d(o - 1), !0;
                    if (e(w, c)) return d(o - 2), !0;
                    o -= 3
                }
            }
            for (o = I.length - 1, q = u.size() - 1; q >= 0; q--) {
                var J = u.get(q), n = I[o];
                if (e(w, n)) return W(o), d(o), !0;
                1 === J || 2 === J ? o -= 1 : 3 === J ? o -= 2 : 4 === J && (o -= 3)
            }
            return !1
        }, $41l: function (x, E, h, b, i) {
            var s = this, r = s.gv, C = -1, y = 0, g = {x: E.x, y: E.y, width: 0, height: 0}, m = function (L, W) {
                s._hoverSegmentIndex = W, s._lp = E, "shape" === i ? s._shape = x : s._edge = x
            };
            for (a(g, r.getSegmentHoverWidth() / 2 / r.getZoom()), x instanceof D && x.isClosePath() && b.indexOf(5) < 0 && (b = new P(b._as), b.add(5)); y < b.size(); y++) {
                var o = b.get(y);
                if (1 === o) {
                    var S = h[C], B = h[C + 1];
                    if (S) {
                        var J = Ad(new te(S.x, S.y), new te(B.x, B.y), new te(g.x, g.y), new te(g.x + g.width, g.y + g.height));
                        if (J.$62l === l && J.points.length > 0) return m(J, y), !0
                    }
                    C += 1
                } else if (2 === o) {
                    var S = h[C], B = h[C + 1],
                        J = Ad(new te(S.x, S.y), new te(B.x, B.y), new te(g.x, g.y), new te(g.x + g.width, g.y + g.height));
                    if (J.$62l === l && J.points.length > 0) return m(J, y), !0;
                    C += 1
                } else if (3 === o) {
                    var S = h[C], Y = h[C + 1], F = h[C + 2],
                        J = Yh(new te(S.x, S.y), new te(Y.x, Y.y), new te(F.x, F.y), new te(g.x, g.y), new te(g.x + g.width, g.y + g.height));
                    if (J.$62l === l) return m(J, y), !0;
                    C += 2
                } else if (4 === o) {
                    var S = h[C], $ = h[C + 1], j = h[C + 2], F = h[C + 3],
                        J = Io(new te(S.x, S.y), new te($.x, $.y), new te(j.x, j.y), new te(F.x, F.y), new te(g.x, g.y), new te(g.x + g.width, g.y + g.height));
                    if (J.$62l === l) return m(J, y), !0;
                    C += 3
                } else if (5 === o) {
                    var S = h[C], B = h[0];
                    if (S) {
                        var J = Ad(new te(S.x, S.y), new te(B.x, B.y), new te(g.x, g.y), new te(g.x + g.width, g.y + g.height));
                        if (J.$62l === l && J.points.length > 0) return m(J, y), !0
                    }
                }
            }
            return !1
        }, addShapePoint: function (E, r, b) {
            var R = this, B = R.gv, V = B.dm();
            if (V.beginTransaction(), 0 === arguments.length && (E = R._shape || R._edge, r = R._hoverSegmentIndex, b = R._lp), E instanceof D || E instanceof g) {
                var S = Wo(E, B.getDataUI(E), r);
                if (!isNaN(r) && b && !isNaN(S)) {
                    var n = b;
                    if (E instanceof D) {
                        var j = E.p(), c = E.getRotation(), J = E.toSegments();
                        J && J.size() || (J = Jn(E.getPoints())), E.isClosePath() && J.indexOf(5) < 0 && (J = new P(J._as), J.add(5));
                        var Q = J.get(r), l = "addPoint", F = "removePointAt";
                        if (2 === Q || 1 === Q) {
                            var h = {x: n.x, y: n.y};
                            J.add(Q, r), h = bf(j, h.x - j.x, h.y - j.y, -c), E[l](h, S + 1)
                        } else if (3 === Q) {
                            var q = E.getPoints(), s = q.get(S), y = q.get(S + 2), h = {x: n.x, y: n.y};
                            h = bf(j, h.x - j.x, h.y - j.y, -c);
                            var O = fo(s, h), A = fo(h, y);
                            J.removeAt(r), J.add(3, r), J.add(3, r), E.setPoint(S + 1, h), E[l](A, S + 2), E[l](O, S + 1)
                        } else if (4 === Q) {
                            var q = E.getPoints(), s = q.get(S), y = q.get(S + 3), h = {x: n.x, y: n.y};
                            h = bf(j, h.x - j.x, h.y - j.y, -c);
                            var O = Oc(s, h), A = ne(s, h), C = Oc(h, y), W = ne(h, y);
                            J.removeAt(r), J.add(4, r), J.add(4, r), E[F](S + 1), E[F](S + 1), E[l](h, S + 1), E[l](W, S + 2), E[l](C, S + 2), E[l](A, S + 1), E[l](O, S + 1)
                        } else if (5 === Q) {
                            var h = {x: n.x, y: n.y};
                            J.add(2, r), h = bf(j, h.x - j.x, h.y - j.y, -c), E[l](h, S + 1)
                        }
                        E.isClosePath() && J.remove(5), E.setSegments(J);
                        var $ = E.getWidth(), x = E.getHeight(), k = E.p().x - $ / 2, I = E.p().y - x / 2;
                        k -= j.x, I -= j.y;
                        var L = Jd(E, {x: k, y: I, width: $, height: x}, c, j);
                        E.p(L.x, L.y)
                    } else if (E instanceof g) {
                        if ("points" !== E.s("edge.type")) return V.endTransaction(), void 0;
                        var q = E.s("edge.points");
                        J = E.s("edge.segments"), q = wi(B.getDataUI(E), q), J && J.size() || (J = Jn(q)), J = new P(J._as.slice(0)), q = new P(q._as.slice(0));
                        var Q = J.get(r);
                        if (2 === Q || 1 === Q) {
                            var h = {x: n.x, y: n.y};
                            J.add(Q, r), q.add(h, S + 1)
                        } else if (3 === Q) {
                            var s = q.get(S), y = q.get(S + 2), h = {x: n.x, y: n.y}, O = fo(s, h), A = fo(h, y);
                            J.removeAt(r), J.add(3, r), J.add(3, r), q.set(S + 1, h), q.add(A, S + 2), q.add(O, S + 1)
                        } else if (4 === Q) {
                            var s = q.get(S), y = q.get(S + 3), h = {x: n.x, y: n.y}, O = Oc(s, h), A = ne(s, h),
                                C = Oc(h, y), W = ne(h, y);
                            J.removeAt(r), J.add(4, r), J.add(4, r), q.removeAt(S + 1), q.removeAt(S + 1), q.add(h, S + 1), q.add(W, S + 2), q.add(C, S + 2), q.add(A, S + 1), q.add(O, S + 1)
                        }
                        E.s("edge.points", Ce(q)), E.s("edge.segments", J)
                    }
                }
            }
            V.endTransaction()
        }, removeShapePoint: function (I, T) {
            var W = this, o = "removeAt", q = W.gv, v = q.dm();
            if (v.beginTransaction(), 0 === arguments.length && (I = W._shape || W._edge, T = W._removePointIndex), T >= 0 && (I instanceof D || I instanceof g)) {
                var u = Qh(I, W.gv.getDataUI(I), T), f = T;
                if (I instanceof D) {
                    var V = I.p(), k = I.toSegments();
                    k && k.size() || (k = Jn(I.getPoints()));
                    var R = k.get(u), c = "removePointAt";
                    if (1 === R && 0 === f) if (I.getPoints().size() > 1) {
                        var d = k.get(u + 1);
                        k[o](u + 1), 3 === d ? I[c](f + 1) : 4 === d && (I[c](f + 2), I[c](f + 1)), I[c](f)
                    } else I.dm().remove(I); else 2 === R || 1 === R ? (k[o](u), I[c](f)) : 3 === R ? (k[o](u), I[c](f), I[c](f - 1)) : 4 === R && (k[o](u), I[c](f), I[c](f - 1), I[c](f - 2));
                    I.setSegments(k);
                    var F = I.getWidth(), y = I.getHeight(), w = I.p().x - F / 2, K = I.p().y - y / 2;
                    w -= V.x, K -= V.y;
                    var Q = Jd(I, {x: w, y: K, width: F, height: y}, I.getRotation(), V);
                    I.p(Q.x, Q.y)
                } else if (I instanceof g) {
                    if ("points" !== I.s("edge.type")) return v.endTransaction(), void 0;
                    var a = I.s("edge.points");
                    if (k = I.s("edge.segments"), a && (a = wi(W.gv.getDataUI(I), a), k && k.size() || (k = Jn(a))), 0 === T || T === a.size() - 1) return v.endTransaction(), void 0;
                    k = new P(k._as.slice(0)), a = new P(a._as.slice(0));
                    var R = k.get(u);
                    2 === R || 1 === R ? (k[o](u), a[o](f)) : 3 === R ? (k[o](u), a[o](f), a[o](f - 1)) : 4 === R && (k[o](u), a[o](f), a[o](f - 1), a[o](f - 2)), I.s("edge.segments", k), I.s("edge.points", Ce(a))
                }
            }
            v.endTransaction()
        }, changeShapeSegment: function (A, R, N) {
            var S = this, w = S.gv, C = w.dm();
            if (C.beginTransaction(), 1 !== arguments.length || isNaN(A) || (N = A, A = S._shape || S._edge, R = S._hoverSegmentIndex), A instanceof D || A instanceof g) {
                var u = Wo(A, S.gv.getDataUI(A), R);
                if (!isNaN(R) && !isNaN(u)) if (A instanceof D) {
                    var o = A.p(), a = A.toSegments();
                    a && a.size() || (a = Jn(A.getPoints()));
                    var I = a.get(R), k = A.toPoints();
                    if (1 === N || 2 === N) 1 === I || 2 === I ? a.set(R, N) : 3 === I ? (a.set(R, N), k.removeAt(u + 1)) : 4 === I && (a.set(R, N), k.removeAt(u + 1), k.removeAt(u + 1)); else if (3 === N) {
                        var J = function () {
                            var K = k.get(u), H = k.get(u + 1), S = fo(K, H);
                            a.set(R, 3), k.add(S, u + 1)
                        };
                        2 === I || 1 === I ? J() : 4 === I && (k.removeAt(u + 1), k.removeAt(u + 1), J())
                    } else if (4 === N) {
                        var y = function () {
                            var W = k.get(u), D = k.get(u + 1), K = Oc(W, D), x = ne(W, D);
                            a.set(R, 4), k.add(K, u + 1), k.add(x, u + 2)
                        };
                        2 === I || 1 === I ? y() : 3 === I && (k.removeAt(u + 1), y())
                    }
                    A.setSegments(a), A.setPoints(k);
                    var q = A.getWidth(), s = A.getHeight(), b = A.p().x - q / 2, i = A.p().y - s / 2;
                    b -= o.x, i -= o.y;
                    var r = new Jd(A, {x: b, y: i, width: q, height: s}, A.getRotation(), o);
                    A.p(r.x, r.y)
                } else if (A instanceof g) {
                    if ("points" !== A.s("edge.type")) return C.endTransaction(), void 0;
                    var k = A.s("edge.points");
                    a = A.s("edge.segments"), k && (k = wi(S.gv.getDataUI(A), k), a && a.size() || (a = Jn(k))), a = new P(a._as.slice(0)), k = new P(k._as.slice(0));
                    var I = a.get(R);
                    if (1 === N || 2 === N) 1 === I || 2 === I ? a.set(R, N) : 3 === I ? (a.set(R, N), k.removeAt(u + 1)) : 4 === I && (a.set(R, N), k.removeAt(u + 1), k.removeAt(u + 1)); else if (3 === N) {
                        var J = function () {
                            var A = k.get(u), b = k.get(u + 1), E = fo(A, b);
                            a.set(R, 3), k.add(E, u + 1)
                        };
                        2 === I || 1 === I ? J() : 4 === I && (k.removeAt(u + 1), k.removeAt(u + 1), J())
                    } else if (4 === N) {
                        var y = function () {
                            var y = k.get(u), G = k.get(u + 1), T = Oc(y, G), z = ne(y, G);
                            a.set(R, 4), k.add(T, u + 1), k.add(z, u + 2)
                        };
                        2 === I || 1 === I ? y() : 3 === I && (k.removeAt(u + 1), y())
                    }
                    A.s("edge.points", Ce(k)), A.s("edge.segments", a)
                }
            }
            C.endTransaction()
        }, getDefaultSegments: function (P) {
            var W = this.gv, E = W.getDataUI(P);
            if (P instanceof g) {
                var m = P.s("edge.points");
                return m = wi(E, m), Jn(m)
            }
            if (P instanceof D) {
                var m = P.getPoints(), n = P.getSegments();
                return n && n.size() > 0 ? n : Jn(m)
            }
        }, $43l: function (t) {
            var J = this;
            t && (J.$5l = 1), J._68I = 1, J._42()
        }, _42: function () {
            var F = this;
            if (F._68I) {
                delete F._68I;
                var S = F.gv, T = F.$5l, q = S.getZoom(), I = S.getEditPointSize(), k = I / 2, f = new P, w = F._view,
                    R = F._edge, e = F._shape, r = w.getContext("2d"), K = S.tx(), n = S.ty(), y = Y,
                    M = S.getEditPointBackground(), H = S.getControlPointBackground(),
                    C = S.getControlPointBorderColor(), W = S.getEditPointBorderColor(), i = S.getEditRectBorderColor(),
                    X = S.getDirectionLineColor(), l = S.getSegmentHoverColor(), E = S.getSnapPointBorderColor(),
                    u = S.getJoinPointBackground(), U = S.getJoinPointBorderColor(), v = S.getSegmentHoverWidth(),
                    z = [5, 5], N = S.getEditRectBorderStyle();
                Hb(S, function (Q) {
                    S.isSelected(Q) && S.isVisible(Q) && f.add(Q)
                }), r.clearRect(0, 0, c(w.width), c(w.height)), r.save(), t.translateAndScale(r, K, n, 1);
                var d = Y, B = {x: 0, y: 0, width: 0, height: 0}, V = 0, p = 0, A = 0, _ = 0, o = 0, b = 0, Kd = 0,
                    mc = 0, Nq = 0, Vh = 0, Yf = [];
                if (T ? (delete F.$6l, delete F.$8l, delete F.$7l, delete F.$16l, delete F.$23l) : (d = F.$6l, y = F.$7l), delete F.$68l, delete F.$69l, delete F.$71l, delete F.$70l, delete F.$82l, delete F.$83l, delete F._pointElevationHelperPoint, delete F.$90l, delete F.$91l, delete F.$75l, delete F.$74l, f.each(function (k) {
                        var K = S.getDataUI(k);
                        if (K) {
                            var W = K._55O;
                            if (S.isEditable(k)) W._56O && k instanceof j && p++, Yf.push(k), W._42O && k instanceof j && V++, S.isHelperEditable(k, "host") && _++, S.isHelperEditable(k, "parent") && A++, S.isHelperEditable(k, "remove") && o++, S.isHelperEditable(k, "edge") && b++, S.isHelperEditable(k, "source") && Kd++, S.isHelperEditable(k, "target") && mc++, S.isHelperEditable(k, "elevation") && Nq++, S.isHelperEditable(k, "tall") && Vh++; else if (k instanceof O && k.isExpanded()) {
                                var z = !0, l = S.getEditableFunc();
                                l && (z = l(k)), z && (S.isHelperEditable(k, "host") && _++, S.isHelperEditable(k, "parent") && A++, S.isHelperEditable(k, "remove") && o++, S.isHelperEditable(k, "edge") && b++, S.isHelperEditable(k, "source") && Kd++, S.isHelperEditable(k, "target") && mc++, S.isHelperEditable(k, "elevation") && Nq++, S.isHelperEditable(k, "tall") && Vh++, Yf.push(k))
                            }
                        }
                    }), r.beginPath(), r.lineWidth = 1, r.strokeStyle = S.getNodeBorderColor(), Yf.forEach(function (e) {
                        var H = S.getDataUI(e), v = H._55O;
                        if (T) if (y == Y && (y = e instanceof g ? 0 : e instanceof O && e.isExpanded() ? 0 : e.getRotation(), F.$7l = y), d == Y) {
                            var W, b, Q;
                            if (e instanceof O && e.isExpanded() || e instanceof g) {
                                var z = S.getDataUIBounds(e);
                                b = z.width, Q = z.height, W = {x: z.x + b / 2, y: z.y + Q / 2}
                            } else W = e.p(), b = e.getWidth(), Q = e.getHeight();
                            d = {
                                x: W.x,
                                y: W.y,
                                width: 0,
                                height: 0
                            }, B.x = W.x - b / 2, B.y = W.y - Q / 2, B.width = b, B.height = Q, d = L(d, B)
                        } else {
                            var W, b, Q, U, D = d.x + d.width / 2, o = d.y + d.height / 2, M = {x: D, y: o};
                            if (e instanceof O && e.isExpanded() || e instanceof g) {
                                U = 0;
                                var z = S.getDataUIBounds(e);
                                b = z.width, Q = z.height, W = {x: z.x + b / 2, y: z.y + Q / 2}
                            } else W = e.p(), b = e.getWidth(), Q = e.getHeight(), U = e.getRotation();
                            var u = {x: W.x - b / 2, y: W.y - Q / 2, width: b, height: Q}, X = {x: u.x, y: u.y},
                                R = {x: u.x + u.width, y: u.y}, G = {x: u.x, y: u.y + u.height},
                                i = {x: u.x + u.width, y: u.y + u.height}, X = bf(W, X.x - W.x, X.y - W.y, U),
                                G = bf(W, G.x - W.x, G.y - W.y, U), i = bf(W, i.x - W.x, i.y - W.y, U),
                                R = bf(W, R.x - W.x, R.y - W.y, U), I = -y, w = bf(M, X.x - M.x, X.y - M.y, I),
                                t = bf(M, R.x - M.x, R.y - M.y, I), E = bf(M, G.x - M.x, G.y - M.y, I),
                                x = bf(M, i.x - M.x, i.y - M.y, I), N = h([w, t, E, x]);
                            d = L(d, N), d.x -= D, d.y -= o;
                            var Z = Jd(Y, d, y, M);
                            d.x = Z.x - d.width / 2, d.y = Z.y - d.height / 2
                        }
                        if (V > 1 && S.isEditable(e) && S.isRectEditable(e) && e instanceof j) {
                            var k = e.getRect(), p = v.$45l, f = un(p[0], q), a = un(p[2], q), n = un(p[4], q),
                                l = un(p[6], q);
                            e.getRotation() ? (r.moveTo(f.x, f.y), r.lineTo(a.x, a.y), r.lineTo(n.x, n.y), r.lineTo(l.x, l.y), r.lineTo(f.x, f.y)) : r.rect(k.x * q, k.y * q, k.width * q, k.height * q)
                        }
                    }), r.stroke(), d) {
                    F.$6l = m(d), a(d, S.getEditRectPadding() / q);
                    var zs = {x: d.x + d.width / 2, y: d.y + d.height / 2}, dr = cc(zs, d.width, d.height, y),
                        $m = dr[0], Qo = dr[1], fn = dr[2], nk = dr[3], Gm = dr[4], Fi = dr[5], Yh = dr[6], Dr = dr[7];
                    if ($m = un(dr[0], q), Qo = un(dr[1], q), fn = un(dr[2], q), nk = un(dr[3], q), Gm = un(dr[4], q), Fi = un(dr[5], q), Yh = un(dr[6], q), Dr = un(dr[7], q), F.$8l = d, V > 0 && (F.$16l = [$m, Gm, Qo, Fi, nk, Yh, fn, Dr], r.beginPath(), r.lineWidth = 1, r.strokeStyle = i, "dashed" === N && r.setLineDash && r.setLineDash(z), r.moveTo($m.x, $m.y), r.lineTo(Qo.x, Qo.y), r.lineTo(nk.x, nk.y), r.lineTo(fn.x, fn.y), r.lineTo($m.x, $m.y), r.stroke(), "dashed" === N && r.setLineDash && r.setLineDash([])), r.beginPath(), r.lineWidth = 1, r.fillStyle = M, r.strokeStyle = W, V > 0) {
                        var kq = Fi.x - Dr.x, Sj = Fi.y - Dr.y, sg = Q(kq * kq + Sj * Sj), Pg = Gm.x - Yh.x,
                            so = Gm.y - Yh.y, _f = Q(Pg * Pg + so * so), Gr = 2 * I;
                        if (S.isDirectionEditable && 1 === Yf.length) {
                            var dm = Yf[0], Se = S.getDataUI(dm), np = Se._55O, ld = S.isDirectionEditable.bind(S);
                            if (np._42O) {
                                var Dm, lj, Pd, kp;
                                ld(dm, "northwest") && (Dm = !0, r.rect($m.x - k, $m.y - k, I, I)), ld(dm, "northeast") && (lj = !0, r.rect(Qo.x - k, Qo.y - k, I, I)), ld(dm, "southwest") && (Pd = !0, r.rect(fn.x - k, fn.y - k, I, I)), ld(dm, "southeast") && (kp = !0, r.rect(nk.x - k, nk.y - k, I, I)), ld(dm, "north") && (Dm && lj ? sg > Gr && r.rect(Gm.x - k, Gm.y - k, I, I) : r.rect(Gm.x - k, Gm.y - k, I, I)), ld(dm, "south") && (kp && Pd ? sg > Gr && r.rect(Yh.x - k, Yh.y - k, I, I) : r.rect(Yh.x - k, Yh.y - k, I, I)), ld(dm, "west") && (Pd && Dm ? _f > Gr && r.rect(Dr.x - k, Dr.y - k, I, I) : r.rect(Dr.x - k, Dr.y - k, I, I)), ld(dm, "east") && (kp && lj ? _f > Gr && r.rect(Fi.x - k, Fi.y - k, I, I) : r.rect(Fi.x - k, Fi.y - k, I, I))
                            }
                        } else sg > Gr && (r.rect(Gm.x - k, Gm.y - k, I, I), r.rect(Yh.x - k, Yh.y - k, I, I)), _f > Gr && (r.rect(Fi.x - k, Fi.y - k, I, I), r.rect(Dr.x - k, Dr.y - k, I, I)), r.rect($m.x - k, $m.y - k, I, I), r.rect(Qo.x - k, Qo.y - k, I, I), r.rect(fn.x - k, fn.y - k, I, I), r.rect(nk.x - k, nk.y - k, I, I)
                    }
                    if (p > 0) {
                        var Ah = F.$23l = bf(Gm, 0, 2 * -I, y);
                        r.moveTo(Ah.x + k, Ah.y), r.arc(Ah.x, Ah.y, k, 0, s, !1)
                    }
                    r.fill(), r.stroke(), F.$40l && F.$44l(r, d, y);
                    var Xn, Ng, jm = S.getLeftTopHelpers(), sh = S.getRightTopHelpers(), jl = S.getLeftBottomHelpers(),
                        xr = S.getRightBottomHelpers(), Ko = S.getEdgeHelpers(), Vj = S.getEditHelperSize(),
                        Ke = Vj / 2, Pc = function (t, j, e, n) {
                            "leftTop" === j ? (Xn = d.x * q - Vj - k - ("h" === n ? e * (Vj + k) : 0) - 1, Ng = d.y * q - Vj - k - ("v" === n ? e * (Vj + k) : 0) - 1) : "rightTop" === j ? (Xn = (d.x + d.width) * q + k + ("h" === n ? e * (Vj + k) : 0) + 1, Ng = d.y * q - Vj - k - ("v" === n ? e * (Vj + k) : 0) - 1) : "leftBottom" === j ? (Xn = d.x * q - Vj - k - ("h" === n ? e * (Vj + k) : 0) - 1, Ng = (d.y + d.height) * q + k + ("v" === n ? e * (Vj + k) : 0) + 1) : "rightBottom" === j && (Xn = (d.x + d.width) * q + k + ("h" === n ? e * (Vj + k) : 0) + 1, Ng = (d.y + d.height) * q + k + ("v" === n ? e * (Vj + k) : 0) + 1);
                            var x = Xn + Ke, h = Ng + Ke, $ = (d.x + d.width / 2) * q, G = (d.y + d.height / 2) * q,
                                Q = bf({x: $, y: G}, x - $, h - G, y);
                            if ("host" === t) {
                                if (_ > 0) return F.$77l(r, y, Q), !0
                            } else if ("edge" === t) {
                                if (b > 0) return F.$80l(r, y, Q), !0
                            } else if ("remove" === t) {
                                if (o > 0) return Yf && 1 === Yf.length && Yf[0] instanceof g ? F.$81l(r, y, {
                                    x: $ + Vj / 2 + 5,
                                    y: G
                                }) : F.$81l(r, y, Q), !0
                            } else if ("parent" === t) {
                                if (A > 0) return Yf && 1 === Yf.length && Yf[0] instanceof g ? F.$76l(r, y, {
                                    x: $ - Vj / 2 - 5,
                                    y: G
                                }) : F.$76l(r, y, Q), !0
                            } else if ("elevation" === t) {
                                if (Nq > 0) return F.$85l(r, y, Q), !0
                            } else if ("tall" === t) {
                                if (Vh > 0) return F.$86l(r, y, Q), !0
                            } else if ("source" === t || "target" === t) {
                                var Y = Yf[0], z = S.getDataUI(Y), P = Ql(z, !0), m = P[0], V = P[1];
                                if (Kd && "source" === t) return F.$84l(r, d, m, !0, Y.isLooped(), j, e, n), !0;
                                if (mc && "target" === t) return F.$84l(r, d, V, !1, Y.isLooped(), j, e, n), !0
                            }
                        };
                    if (jm && jm.length > 0) {
                        var pf = 0;
                        jm.forEach(function (s) {
                            Pc(s, "leftTop", pf, S.getLeftTopHelpersAlign() || "h") && pf++
                        })
                    }
                    if (sh && sh.length > 0) {
                        var pf = 0;
                        sh.forEach(function (v) {
                            Pc(v, "rightTop", pf, S.getRightTopHelpersAlign() || "h") && pf++
                        })
                    }
                    if (jl && jl.length > 0) {
                        var pf = 0;
                        jl.forEach(function (g) {
                            Pc(g, "leftBottom", pf, S.getLeftBottomHelpersAlign() || "h") && pf++
                        })
                    }
                    if (xr && xr.length > 0) {
                        var pf = 0;
                        xr.forEach(function (D) {
                            Pc(D, "rightBottom", pf, S.getRightBottomHelpersAlign() || "h") && pf++
                        })
                    }
                    if (Ko && Ko.length > 0 && ((Kd || mc) && Yf && 1 === Yf.length && Yf[0] instanceof g ? !0 : !1)) {
                        var pf = 0;
                        Ko.forEach(function (R) {
                            Pc(R, "edge", pf, "h") && pf++
                        })
                    }
                    if (F.$72l) {
                        var kk, Rp = F.$67l, Zp = F.$68l, Wq = F.$69l, fb = (F.$71l, F.$70l), ee = F.$82l, aj = F.$83l;
                        if (1 === Rp ? kk = Zp : 2 === Rp ? kk = Wq : 3 === Rp ? kk = fb : 5 === Rp ? kk = ee : 6 === Rp && (kk = aj), kk) {
                            var yq = S.lp(F.$72l), Yr = S.getDataAt(F.$72l);
                            if (Yr && Yr instanceof j) {
                                var cn, Cf, fh;
                                if (F.$73l = Yr, 1 === Rp) if (Yr instanceof Z.Grid) cn = F.$75l = $i(Yr, yq); else if (Yr instanceof Z.Shape) {
                                    fh = F.$74l = gr(Yr, yq);
                                    var vs = Yr.getPoints();
                                    if (fh) {
                                        var Re = fh.attachIndex, ye = Wo(Yr, S.getDataUI(Yr), Re) + 1,
                                            Mj = ye + 1 >= vs.size() ? 0 : ye + 1, Sp = vs.get(ye), lk = vs.get(Mj),
                                            Uo = Yr.p(), Pf = Yr.getRotation();
                                        Sp = bf(Uo, Sp.x - Uo.x, Sp.y - Uo.y, Pf), lk = bf(Uo, lk.x - Uo.x, lk.y - Uo.y, Pf), r.beginPath(), r.strokeStyle = l, r.lineWidth = v, r.moveTo(Sp.x * q, Sp.y * q), r.lineTo(lk.x * q, lk.y * q), r.stroke()
                                    }
                                }
                                cn ? Cf = cn.rect : (Cf = J.clone(S.getDataUIBounds(Yr)), J.grow(Cf, 2)), r.beginPath(), r.rect(Cf.x * q, Cf.y * q, Cf.width * q, Cf.height * q), r.strokeStyle = 1 === Rp || 4 === Rp || 6 === Rp ? x : G, r.lineWidth = 2, r.setLineDash && r.setLineDash([8, 8]), r.stroke()
                            } else delete F.$73l;
                            yq.x = yq.x * q, yq.y = yq.y * q;
                            var Sl = Xq(kk.x, kk.y, yq.x, yq.y), Ar = bf(kk, yq.x - kk.x, yq.y - kk.y, -Sl),
                                Gd = Ar.x - kk.x;
                            r.save(), r.translate(kk.x, kk.y), r.rotate(Sl), $.width = Gd, $.height = 40;
                            var Co = G;
                            (1 === Rp || 4 === Rp || 6 === Rp) && (Co = x), $.comps[0].gradientColor = Co, J.drawImage(r, $, 0, -20, Gd, 40), r.restore()
                        }
                    }
                }
                if (f.each(function (K) {
                        var M = S.getDataUI(K);
                        if (M) {
                            var f, d, b = M._55O, j = M._78o;
                            if (b && b._43O && K instanceof D ? (f = b.$15l, d = K.getSegments(), d && d.size() || (d = Jn(f)), K.isClosePath() && d.indexOf(5) < 0 && (d = new P(d._as), d.add(5))) : b && j && b._43O && (f = K.s("edge.points"), d = K.s("edge.segments"), f = wi(M, f), d && d.size() || (d = Jn(f)), f && (f = f._as)), f && d) {
                                var y = 0, p = d.size(), _ = F._hoverSegmentIndex;
                                f = f.slice(0);
                                for (var h = 0; h < f.length; h++) f[h] = un(f[h], q);
                                r.beginPath(), r.strokeStyle = X, r.lineWidth = 1, y = 0;
                                for (var h = 0; p > h; h++) {
                                    var V = d.get(h);
                                    if (1 === V || 2 === V) y++; else if (3 === V) {
                                        var A = f[y - 1], Q = f[y], O = f[y + 1];
                                        r.moveTo(A.x, A.y), r.lineTo(Q.x, Q.y), r.lineTo(O.x, O.y), y += 2
                                    } else if (4 === V) {
                                        var A = f[y - 1], J = f[y], L = f[y + 1], O = f[y + 2];
                                        r.moveTo(A.x, A.y), r.lineTo(J.x, J.y), r.moveTo(L.x, L.y), r.lineTo(O.x, O.y), y += 3
                                    }
                                }
                                if (r.stroke(), e === K || R === K && "points" === R.s("edge.type")) {
                                    r.beginPath(), y = 0, r.strokeStyle = l, r.lineWidth = v;
                                    for (var h = 0; p > h; h++) {
                                        var V = d.get(h);
                                        if (1 === V || 2 === V) {
                                            if (_ === h) {
                                                var A = f[y - 1], O = f[y];
                                                r.moveTo(A.x, A.y), r.lineTo(O.x, O.y);
                                                break
                                            }
                                            y++
                                        } else if (3 === V) {
                                            if (_ === h) {
                                                var A = f[y - 1], Q = f[y], O = f[y + 1];
                                                r.moveTo(A.x, A.y), r.quadraticCurveTo(Q.x, Q.y, O.x, O.y);
                                                break
                                            }
                                            y += 2
                                        } else if (4 === V) {
                                            if (_ === h) {
                                                var A = f[y - 1], J = f[y], L = f[y + 1], O = f[y + 2];
                                                r.moveTo(A.x, A.y), r.bezierCurveTo(J.x, J.y, L.x, L.y, O.x, O.y);
                                                break
                                            }
                                            y += 3
                                        } else if (5 === V && _ === h) {
                                            var A = f[y - 1], O = f[0];
                                            r.moveTo(A.x, A.y), r.lineTo(O.x, O.y);
                                            break
                                        }
                                    }
                                    r.stroke()
                                }
                                r.beginPath(), y = 0, r.strokeStyle = U, r.lineWidth = 1, r.fillStyle = u;
                                for (var h = 0; p > h; h++) {
                                    var V = d.get(h);
                                    if (1 === V || 2 === V) {
                                        var O = f[y];
                                        r.moveTo(O.x + k, O.y), r.arc(O.x, O.y, k, 0, s, !0), y++
                                    } else if (3 === V) {
                                        var O = f[y + 1];
                                        r.moveTo(O.x + k, O.y), r.arc(O.x, O.y, k, 0, s, !0), y += 2
                                    } else if (4 === V) {
                                        var O = f[y + 2];
                                        r.moveTo(O.x + k, O.y), r.arc(O.x, O.y, k, 0, s, !0), y += 3
                                    }
                                }
                                r.fill(), r.stroke(), r.beginPath(), y = 0, r.strokeStyle = C, r.lineWidth = 1, r.fillStyle = H;
                                for (var h = 0; p > h; h++) {
                                    var V = d.get(h);
                                    if (1 === V || 2 === V) y++; else if (3 === V) {
                                        var Q = f[y];
                                        r.moveTo(Q.x + k, Q.y), r.arc(Q.x, Q.y, k, 0, s, !0), y += 2
                                    } else if (4 === V) {
                                        var J = f[y], L = f[y + 1];
                                        r.moveTo(J.x + k, J.y), r.arc(J.x, J.y, k, 0, s, !0), r.moveTo(L.x + k, L.y), r.arc(L.x, L.y, k, 0, s, !0), y += 3
                                    }
                                }
                                if (r.fill(), r.stroke(), r.beginPath(), y = 0, r.strokeStyle = E, r.lineWidth = 2, (e === K || R === K) && F.$9l != Y) {
                                    var O = f[F.$9l];
                                    r.moveTo(O.x + k, O.y), r.arc(O.x, O.y, k, 0, s, !0), r.stroke()
                                }
                            }
                        }
                    }), F.$87l && S.sm().contains(F.$87l)) {
                    var rh, cf = F.$87l, ni = F.$88l, Vj = S.getEditHelperSize(), Ke = Vj / 2;
                    if (S.isHelperEditable(cf, "pointElevation")) if (cf instanceof D) {
                        var Xo = cf.getPosition();
                        rh = J.clone(cf.getPoints().get(ni)), rh = bf({
                            x: Xo.x,
                            y: Xo.y
                        }, rh.x - Xo.x, rh.y - Xo.y, cf.getRotation()), rh.x *= q, rh.y *= q, r.translate(rh.x, rh.y), J.drawImage(r, J.getImage("xeditinteractor_elevationIcon"), Ke, -Ke, Vj, Vj), r.translate(-rh.x, -rh.y), F._pointElevationHelperPoint = {
                            x: rh.x + Vj,
                            y: rh.y
                        }
                    } else if (cf instanceof g) {
                        var Ud = wi(S.getDataUI(cf), cf.s("edge.points")), rh = J.clone(Ud.get(ni));
                        rh.x *= q, rh.y *= q, r.translate(rh.x, rh.y), J.drawImage(r, J.getImage("xeditinteractor_elevationIcon"), Ke, -Ke, Vj, Vj), r.translate(-rh.x, -rh.y), F._pointElevationHelperPoint = {
                            x: rh.x + Vj,
                            y: rh.y
                        }
                    }
                }
                r.restore(), F.$5l = 0
            }
        }, $89l: function (U, d, g, E) {
            U.save();
            var u = this, x = u.gv, h = x.getEditHelperSize(), n = h / 2;
            U.beginPath(), U.translate(g.x, g.y), U.rotate(d), J.drawImage(U, E, -n, -n, h, h), U.restore()
        }, $85l: function (Z, f, I) {
            var P = this;
            P.$90l = I, P.$89l(Z, f, I, J.getImage("xeditinteractor_elevationIcon"))
        }, $86l: function (K, I, r) {
            var u = this;
            u.$91l = r, u.$89l(K, I, r, J.getImage("xeditinteractor_tallIcon"))
        }, $77l: function (F, R, f) {
            var B = this;
            B.$68l = f, B.$89l(F, R, f, J.getImage("xeditinteractor_hostIcon"))
        }, $80l: function (d, p, H) {
            var Q = this;
            Q.$70l = H, Q.$89l(d, p, H, J.getImage("xeditinteractor_edgeIcon"))
        }, $81l: function (h, w, H) {
            var k = this;
            k.$71l = H, k.$89l(h, w, H, J.getImage("xeditinteractor_removeIcon"))
        }, $76l: function (f, v, g) {
            var l = this;
            l.$69l = g, l.$89l(f, v, g, J.getImage("xeditinteractor_parentIcon"))
        }, $84l: function (g, N, l, d, s) {
            var M, a = this, G = a.gv, X = G.getZoom(), U = G.getEditHelperSize(), H = U / 2;
            l.x *= X, l.y *= X, s && (d ? l.x -= H + 5 : l.x += H + 5), l.y -= U - 2, d ? (a.$82l = l, M = J.getImage("xeditinteractor_sourceIcon")) : (a.$83l = l, M = J.getImage("xeditinteractor_targetIcon")), g.beginPath(), g.translate(l.x, l.y), J.drawImage(g, M, -H, -H, U, U), g.translate(-l.x, -l.y)
        }, $44l: function (p, y, z) {
            p.save();
            var A = this.gv.getZoom(), x = Q(o(y.width, 2) + o(y.height, 2)) / 2 * A + 10, g = x, K = g + 8, t = g + 18,
                c = z, k = y.x + y.width / 2, N = y.y + y.height / 2;
            p.translate(k * A, N * A), p.beginPath(), p.strokeStyle = "rgb(150, 150, 150)";
            for (var O = 0, w = 0, a = 0, u = 0, F = 0, m = 0; 360 > m; m++) O = m * V / 180, 0 === m % 5 && (w = U(O) * g, a = n(O) * g, u = U(O) * K, F = n(O) * K, p.moveTo(w, a), p.lineTo(u, F)), 0 === m % 45 && (w = U(O) * g, a = n(O) * g, u = U(O) * t, F = n(O) * t, p.moveTo(w, a), p.lineTo(u, F));
            p.stroke(), p.beginPath(), p.rotate(-S), p.beginPath(), p.fillStyle = "rgba(255, 0, 0, 0.1)", p.strokeStyle = "rgb(157, 157, 157)", p.moveTo(0, 0), p.arc(0, 0, t, 0, z, !1), p.fill(), p.beginPath(), p.moveTo(0 + t, 0), p.arc(0, 0, t, 0, z, !1), p.stroke(), p.rotate(S), p.font = "bold 12px Verdana, Arial";
            var H = 20 * n(c), M = 20 * U(c), l = i(180 * c / V) + "°";
            p.textAlign = "center", p.textBaseline = "middle", p.beginPath();
            var v = p.measureText("365.°").width;
            p.fillStyle = "white", p.rect(H - v / 2, -M - 10, v, 20), p.fill(), p.beginPath(), p.fillStyle = "rgb(79,79,79)", p.fillText(l, H, -M), p.restore()
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);