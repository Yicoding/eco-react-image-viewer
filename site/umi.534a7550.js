(function (e) {
  function t(t) {
    for (var n, a, c = t[0], l = t[1], d = t[2], u = 0, s = []; u < c.length; u++)
      (a = c[u]), Object.prototype.hasOwnProperty.call(i, a) && i[a] && s.push(i[a][0]), (i[a] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    p && p(t);
    while (s.length) s.shift()();
    return o.push.apply(o, d || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, a = 1; a < r.length; a++) {
        var c = r[a];
        0 !== i[c] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = l((l.s = r[0]))));
    }
    return e;
  }
  var n = {},
    a = { 7: 0 },
    i = { 7: 0 },
    o = [];
  function c(e) {
    return (
      l.p +
      '' +
      ({
        1: 'ImageViewer__mobile.md',
        2: 'ImageViewer__pc.md',
        3: 'demos_no_comp',
        4: 'docs__getting-started.md',
        5: 'docs__index.md',
        6: 'dumi_demos',
        8: 'wrappers',
      }[e] || e) +
      '.' +
      {
        1: '1649cc22',
        2: 'abfe844d',
        3: '181b1b9c',
        4: 'c91a1f4e',
        5: '5ddf8d35',
        6: '74d388ee',
        8: '85a4290f',
      }[e] +
      '.async.js'
    );
  }
  function l(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, l), (r.l = !0), r.exports;
  }
  (l.e = function (e) {
    var t = [],
      r = { 3: 1 };
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        r[e] &&
        t.push(
          (a[e] = new Promise(function (t, r) {
            for (
              var n =
                  ({
                    1: 'ImageViewer__mobile.md',
                    2: 'ImageViewer__pc.md',
                    3: 'demos_no_comp',
                    4: 'docs__getting-started.md',
                    5: 'docs__index.md',
                    6: 'dumi_demos',
                    8: 'wrappers',
                  }[e] || e) +
                  '.' +
                  {
                    1: '31d6cfe0',
                    2: '31d6cfe0',
                    3: '6397d2ed',
                    4: '31d6cfe0',
                    5: '31d6cfe0',
                    6: '31d6cfe0',
                    8: '31d6cfe0',
                  }[e] +
                  '.chunk.css',
                i = l.p + n,
                o = document.getElementsByTagName('link'),
                c = 0;
              c < o.length;
              c++
            ) {
              var d = o[c],
                u = d.getAttribute('data-href') || d.getAttribute('href');
              if ('stylesheet' === d.rel && (u === n || u === i)) return t();
            }
            var s = document.getElementsByTagName('style');
            for (c = 0; c < s.length; c++) {
              (d = s[c]), (u = d.getAttribute('data-href'));
              if (u === n || u === i) return t();
            }
            var p = document.createElement('link');
            (p.rel = 'stylesheet'),
              (p.type = 'text/css'),
              (p.onload = t),
              (p.onerror = function (t) {
                var n = (t && t.target && t.target.src) || i,
                  o = new Error('Loading CSS chunk ' + e + ' failed.\n(' + n + ')');
                (o.code = 'CSS_CHUNK_LOAD_FAILED'),
                  (o.request = n),
                  delete a[e],
                  p.parentNode.removeChild(p),
                  r(o);
              }),
              (p.href = i);
            var m = document.getElementsByTagName('head')[0];
            m.appendChild(p);
          }).then(function () {
            a[e] = 0;
          })),
        );
    var n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, r) {
          n = i[e] = [t, r];
        });
        t.push((n[2] = o));
        var d,
          u = document.createElement('script');
        (u.charset = 'utf-8'),
          (u.timeout = 120),
          l.nc && u.setAttribute('nonce', l.nc),
          (u.src = c(e));
        var s = new Error();
        d = function (t) {
          (u.onerror = u.onload = null), clearTimeout(p);
          var r = i[e];
          if (0 !== r) {
            if (r) {
              var n = t && ('load' === t.type ? 'missing' : t.type),
                a = t && t.target && t.target.src;
              (s.message = 'Loading chunk ' + e + ' failed.\n(' + n + ': ' + a + ')'),
                (s.name = 'ChunkLoadError'),
                (s.type = n),
                (s.request = a),
                r[1](s);
            }
            i[e] = void 0;
          }
        };
        var p = setTimeout(function () {
          d({ type: 'timeout', target: u });
        }, 12e4);
        (u.onerror = u.onload = d), document.head.appendChild(u);
      }
    return Promise.all(t);
  }),
    (l.m = e),
    (l.c = n),
    (l.d = function (e, t, r) {
      l.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (l.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (l.t = function (e, t) {
      if ((1 & t && (e = l(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var n in e)
          l.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return r;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return l.d(t, 'a', t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = 'https://yicoding.github.io/react-image-viewer/refs/heads/main/'),
    (l.oe = function (e) {
      throw (console.error(e), e);
    });
  var d = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    u = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var s = 0; s < d.length; s++) t(d[s]);
  var p = u;
  o.push([0, 0]), r();
})({
  0: function (e, t, r) {
    e.exports = r('tB8F');
  },
  FfOG: function (e, t, r) {
    'use strict';
    r.d(t, 'a', function () {
      return o;
    }),
      r.d(t, 'b', function () {
        return i;
      });
    var n = r('YS25'),
      a = { basename: '/' };
    window.routerBase && (a.basename = window.routerBase);
    var i = Object({ NODE_ENV: 'production' }).__IS_SERVER ? null : Object(n['b'])(a),
      o = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return e || (i = Object(n['b'])(a)), i;
      };
  },
  bCY9: function (e, t, r) {
    'use strict';
    r.d(t, 'a', function () {
      return a;
    });
    var n = r('LtsZ'),
      a = new n['Plugin']({
        validKeys: [
          'modifyClientRenderOpts',
          'patchRoutes',
          'rootContainer',
          'render',
          'onRouteChange',
          '__mfsu',
        ],
      });
  },
  tB8F: function (e, t, r) {
    'use strict';
    r.r(t);
    r('pNMO'),
      r('4Brf'),
      r('tjZM'),
      r('3I1R'),
      r('7+kd'),
      r('KhsS'),
      r('gOCb'),
      r('a57n'),
      r('GXvd'),
      r('I1Gw'),
      r('gXIK'),
      r('lEou'),
      r('ma9I'),
      r('TeQF'),
      r('BIHw'),
      r('XbcX'),
      r('pjDv'),
      r('yq1k'),
      r('yXV3'),
      r('4mDm'),
      r('uqXc'),
      r('2B1R'),
      r('E9XD'),
      r('9N29'),
      r('Junv'),
      r('+2oP'),
      r('ToJy'),
      r('94Xl'),
      r('pDQq'),
      r('QGkA'),
      r('c9m3'),
      r('wZ/5'),
      r('rOQg'),
      r('7+zs'),
      r('tW5y'),
      r('DEfu'),
      r('Tskq'),
      r('Uydy'),
      r('QFcT'),
      r('I9xj'),
      r('w1rZ'),
      r('toAj'),
      r('zKZe'),
      r('Eqjn'),
      r('5xtp'),
      r('T63A'),
      r('wfmh'),
      r('27RR'),
      r('v5b1'),
      r('W/eh'),
      r('07d7'),
      r('B6y2'),
      r('5s+n'),
      r('p532'),
      r('pv2x'),
      r('SuFq'),
      r('ftMj'),
      r('TWNs'),
      r('U3f4'),
      r('JfAA'),
      r('YGK4'),
      r('inlA'),
      r('JTJg'),
      r('Rm1S'),
      r('hDyC'),
      r('TZCg'),
      r('UxlC'),
      r('hByQ'),
      r('EnZy'),
      r('LKBx'),
      r('SYor'),
      r('HiXI'),
      r('7ueG'),
      r('z8NH'),
      r('SpvK'),
      r('/Yfv'),
      r('iwkZ'),
      r('FDzp'),
      r('XMab'),
      r('ilnZ'),
      r('hMMk'),
      r('+ywr'),
      r('IL/d'),
      r('gvgV'),
      r('7JcK'),
      r('s5qe'),
      r('cvf0'),
      r('ENF9'),
      r('H+LF'),
      r('66V8'),
      r('iIM6'),
      r('2tOg'),
      r('gYJb'),
      r('EDT/'),
      r('j+VE'),
      r('wgYD'),
      r('R3/m'),
      r('l/vG'),
      r('0q/z'),
      r('n5pg'),
      r('zu+z'),
      r('ihrJ'),
      r('Q7Pz'),
      r('unQa'),
      r('Vnov'),
      r('nIe3'),
      r('CUyW'),
      r('qc1c'),
      r('5921'),
      r('VOz1'),
      r('Thag'),
      r('9D6x'),
      r('cOPa'),
      r('vdRX'),
      r('KrxN'),
      r('SL6q'),
      r('lehK'),
      r('eO0o'),
      r('NqR8'),
      r('w7s6'),
      r('uWhJ'),
      r('WPzJ'),
      r('NV22'),
      r('ny8l'),
      r('a5/B'),
      r('vzwy'),
      r('pevA'),
      r('8go2'),
      r('DrvE'),
      r('kCkZ'),
      r('++zV'),
      r('Y4C7'),
      r('ZsH6'),
      r('vZi8'),
      r('5r1n'),
      r('sQ9d'),
      r('bdeN'),
      r('AwgR'),
      r('qgGA'),
      r('49+q'),
      r('AVoK'),
      r('hcok'),
      r('dNT4'),
      r('3uUd'),
      r('tijO'),
      r('1kQv'),
      r('ZY7T'),
      r('C1JJ'),
      r('lmH4'),
      r('Co1j'),
      r('5JV0'),
      r('ctDJ'),
      r('8r4s'),
      r('JwUS'),
      r('qaHo'),
      r('Si40'),
      r('BGb9'),
      r('fN96'),
      r('UzNg'),
      r('DhMN'),
      r('rZ3M'),
      r('apDx'),
      r('4XaG'),
      r('6V7H'),
      r('cfiF'),
      r('702D'),
      r('TJ79'),
      r('Z4nd'),
      r('8STE'),
      r('spTT'),
      r('rb3L'),
      r('FZtP'),
      r('3bBZ'),
      r('Ew+T'),
      r('n5b4'),
      r('Kz25'),
      r('vxnP'),
      r('mGGf'),
      r('VWci');
    var n = r('bCY9'),
      a = r('FfOG'),
      i = r('LtsZ'),
      o = r('/dmz'),
      c = r('tJVT'),
      l = r('9og8'),
      d = r('WmNS'),
      u = r.n(d);
    function s() {
      var e = [
        {
          path: '/~demos/:uuid',
          layout: !1,
          wrappers: [
            Object(i['dynamic'])({
              loader: () => Promise.all([r.e(0), r.e(8)]).then(r.bind(null, 'afA6')),
            }),
            Object(i['dynamic'])({
              loader: () => Promise.all([r.e(0), r.e(8)]).then(r.bind(null, 'cW5v')),
            }),
          ],
          component: ((e) =>
            Object(i['dynamic'])({
              loader: (function () {
                var e = Object(l['a'])(
                  u.a.mark(function e() {
                    var t, n, a, i, o, l, d, s;
                    return u.a.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Promise.resolve().then(r.t.bind(null, 'q1tI', 7));
                          case 2:
                            return (
                              (t = e.sent),
                              (e.next = 5),
                              Promise.all([r.e(0), r.e(6)]).then(r.t.bind(null, 'F4QJ', 7))
                            );
                          case 5:
                            return (
                              (n = e.sent),
                              (a = n.default),
                              (e.next = 9),
                              Promise.all([r.e(0), r.e(6)]).then(r.bind(null, 'Hf60'))
                            );
                          case 9:
                            return (
                              (i = e.sent),
                              (o = i.default),
                              (e.next = 13),
                              Promise.all([r.e(0), r.e(6)]).then(r.t.bind(null, 'dEAq', 7))
                            );
                          case 13:
                            return (
                              (l = e.sent),
                              (d = l.usePrefersColor),
                              (s = l.context),
                              e.abrupt('return', (e) => {
                                var r = t.useContext(s),
                                  n = r.demos,
                                  i = t.useState([]),
                                  l = Object(c['a'])(i, 2),
                                  u = l[0],
                                  p = l[1];
                                switch (
                                  (t.useLayoutEffect(() => {
                                    p(a(e, n));
                                  }, [
                                    e.match.params.uuid,
                                    e.location.query.wrapper,
                                    e.location.query.capture,
                                  ]),
                                  d(),
                                  u.length)
                                ) {
                                  case 1:
                                    return u[0];
                                  case 2:
                                    return t.createElement(o, u[0], u[1]);
                                  default:
                                    return 'Demo '.concat(e.match.params.uuid, ' not found :(');
                                }
                              })
                            );
                          case 17:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
              loading: () => null,
            }))(),
        },
        { path: '/_demos/:uuid', redirect: '/~demos/:uuid' },
        {
          __dumiRoot: !0,
          layout: !1,
          path: '/',
          wrappers: [
            Object(i['dynamic'])({
              loader: () => Promise.all([r.e(0), r.e(8)]).then(r.bind(null, 'afA6')),
            }),
            Object(i['dynamic'])({
              loader: () => Promise.all([r.e(0), r.e(8)]).then(r.bind(null, 'C6LL')),
            }),
          ],
          routes: [
            {
              path: '/image-viewer/mobile',
              component: Object(i['dynamic'])({
                loader: () => Promise.all([r.e(0), r.e(1)]).then(r.bind(null, 'tDy5')),
              }),
              exact: !0,
              meta: {
                filePath: 'src/ImageViewer/mobile.md',
                updatedTime: 1639971669e3,
                mobile: !0,
                group: { title: '\u56fe\u7247\u9884\u89c8', __fallback: !0, path: '/image-viewer' },
                title: '\u79fb\u52a8\u7aef',
                slugs: [
                  {
                    depth: 1,
                    value: '\u79fb\u52a8\u7aef\u793a\u4f8b',
                    heading: '\u79fb\u52a8\u7aef\u793a\u4f8b',
                  },
                ],
                nav: { path: '/image-viewer', title: 'ImageViewer' },
              },
              title: '\u79fb\u52a8\u7aef - react-image-viewer',
            },
            {
              path: '/image-viewer/pc',
              component: Object(i['dynamic'])({
                loader: () => Promise.all([r.e(0), r.e(2)]).then(r.bind(null, '1f46')),
              }),
              exact: !0,
              meta: {
                filePath: 'src/ImageViewer/pc.md',
                updatedTime: 1639971669e3,
                mobile: !1,
                group: { title: '\u56fe\u7247\u9884\u89c8', __fallback: !0, path: '/image-viewer' },
                title: 'PC\u7aef',
                slugs: [
                  { depth: 1, value: 'PC \u7aef\u793a\u4f8b', heading: 'pc-\u7aef\u793a\u4f8b' },
                ],
                nav: { path: '/image-viewer', title: 'ImageViewer' },
              },
              title: 'PC\u7aef - react-image-viewer',
            },
            {
              path: '/docs/getting-started',
              component: Object(i['dynamic'])({
                loader: () => Promise.all([r.e(0), r.e(4)]).then(r.bind(null, 'VCHF')),
              }),
              exact: !0,
              meta: {
                filePath: 'docs/getting-started.md',
                updatedTime: 1639735738e3,
                title: '\u5feb\u901f\u4e0a\u624b',
                order: 0,
                group: { title: '\u5feb\u901f\u4e0a\u624b', __fallback: !0, path: '/docs' },
                nav: { title: '\u6307\u5357', path: '/docs' },
                slugs: [
                  {
                    depth: 1,
                    value: '\u5feb\u901f\u4e0a\u624b',
                    heading: '\u5feb\u901f\u4e0a\u624b',
                  },
                  { depth: 2, value: '\u4f7f\u7528', heading: '\u4f7f\u7528' },
                  {
                    depth: 3,
                    value: 'npm \u6216 yarn \u5b89\u88c5',
                    heading: 'npm-\u6216-yarn-\u5b89\u88c5',
                  },
                  { depth: 3, value: '\u793a\u4f8b', heading: '\u793a\u4f8b' },
                ],
              },
              title: '\u5feb\u901f\u4e0a\u624b - react-image-viewer',
            },
            {
              path: '/',
              component: Object(i['dynamic'])({
                loader: () => Promise.all([r.e(0), r.e(5)]).then(r.bind(null, 'F+kV')),
              }),
              exact: !0,
              meta: {
                filePath: 'docs/index.md',
                updatedTime: 1639735738e3,
                title:
                  'react-image-viewer - \u57fa\u4e8ereact\u7684\u56fe\u7247\u9884\u89c8\u7ec4\u4ef6\uff0c\u517c\u5bb9PC\u3001\u79fb\u52a8\u7aef',
                hero: {
                  title: 'react-image-viewer',
                  desc: '<div class="markdown"><p>\u57fa\u4e8ereact\u7684\u56fe\u7247\u9884\u89c8\u7ec4\u4ef6\uff0c\u517c\u5bb9PC\u3001\u79fb\u52a8\u7aef</p></div>',
                  actions: [{ text: '\u5feb\u901f\u4e0a\u624b', link: '/docs' }],
                },
                features: [
                  {
                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
                    title: '\u7b80\u5355\u6613\u7528',
                    desc: '<div class="markdown"><p>\u57fa\u4e8eReact\u5c01\u88c5</p></div>',
                  },
                  {
                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png',
                    title: '\u529f\u80fd\u4e30\u5bcc',
                    desc: '<div class="markdown"><p>\u517c\u5bb9PC\u3001\u79fb\u52a8\u7aef\u9884\u89c8\u573a\u666f</p></div>',
                  },
                  {
                    icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png',
                    title: 'TypeScript',
                    desc: '<div class="markdown"><p>\u63d0\u4f9b TypeScript \u7c7b\u578b\u5b9a\u4e49</p></div>',
                  },
                ],
                footer:
                  '<div class="markdown"><p>Open-source MIT Licensed | Copyright \xa9 2020<br />Powered by <a href="https://d.umijs.org/" target="_blank">dumi<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="__dumi-default-external-link-icon"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a></p></div>',
                slugs: [],
              },
              title:
                'react-image-viewer - \u57fa\u4e8ereact\u7684\u56fe\u7247\u9884\u89c8\u7ec4\u4ef6\uff0c\u517c\u5bb9PC\u3001\u79fb\u52a8\u7aef - react-image-viewer',
            },
            {
              path: '/image-viewer',
              meta: { __fallback: !0 },
              exact: !0,
              redirect: '/image-viewer/mobile',
            },
            {
              path: '/docs',
              meta: { __fallback: !0 },
              exact: !0,
              redirect: '/docs/getting-started',
            },
          ],
          title: 'react-image-viewer',
          component: (e) => e.children,
        },
      ];
      return (
        n['a'].applyPlugins({
          key: 'patchRoutes',
          type: i['ApplyPluginsType'].event,
          args: { routes: e },
        }),
        e
      );
    }
    var p = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return n['a'].applyPlugins({
          key: 'render',
          type: i['ApplyPluginsType'].compose,
          initialValue: () => {
            var t = n['a'].applyPlugins({
              key: 'modifyClientRenderOpts',
              type: i['ApplyPluginsType'].modify,
              initialValue: {
                routes: e.routes || s(),
                plugin: n['a'],
                history: Object(a['a'])(e.hot),
                isServer: Object({ NODE_ENV: 'production' }).__IS_SERVER,
                dynamicImport: !0,
                rootElement: 'root',
                defaultTitle: 'react-image-viewer',
              },
            });
            return Object(o['a'])(t);
          },
          args: e,
        });
      },
      m = p();
    t['default'] = m();
    window.g_umi = { version: '3.5.20' };
  },
});
