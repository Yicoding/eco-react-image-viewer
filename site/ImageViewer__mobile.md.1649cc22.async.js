(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [1, 6],
  {
    '9kvl': function (e, a, n) {
      'use strict';
      var t = n('FfOG');
      n.d(a, 'a', function () {
        return t['b'];
      });
      n('bCY9');
    },
    tDy5: function (e, a, n) {
      'use strict';
      n.r(a);
      var t = n('q1tI'),
        r = n.n(t),
        o = n('dEAq'),
        l = n('Hf60'),
        c = r.a.memo((e) => {
          var a = e.demos,
            n = a['imageviewer-mobile'].component;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                'div',
                { className: 'markdown' },
                r.a.createElement(
                  'h1',
                  { id: '\u79fb\u52a8\u7aef\u793a\u4f8b' },
                  r.a.createElement(
                    o['AnchorLink'],
                    { to: '#\u79fb\u52a8\u7aef\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: 'icon icon-link' }),
                  ),
                  '\u79fb\u52a8\u7aef\u793a\u4f8b',
                ),
              ),
              r.a.createElement(
                l['default'],
                a['imageviewer-mobile'].previewerProps,
                r.a.createElement(n, null),
              ),
            ),
          );
        });
      a['default'] = (e) => {
        var a = r.a.useContext(o['context']),
          n = a.demos;
        return (
          r.a.useEffect(() => {
            var a;
            null !== e &&
              void 0 !== e &&
              null !== (a = e.location) &&
              void 0 !== a &&
              a.hash &&
              o['AnchorLink'].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          r.a.createElement(c, { demos: n })
        );
      };
    },
  },
]);
