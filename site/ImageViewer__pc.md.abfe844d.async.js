(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [2, 6],
  {
    '1f46': function (e, a, n) {
      'use strict';
      n.r(a);
      var t = n('q1tI'),
        r = n.n(t),
        c = n('dEAq'),
        o = n('Hf60'),
        l = r.a.memo((e) => {
          var a = e.demos,
            n = a['imageviewer-pc'].component;
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
                  { id: 'pc-\u7aef\u793a\u4f8b' },
                  r.a.createElement(
                    c['AnchorLink'],
                    { to: '#pc-\u7aef\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
                    r.a.createElement('span', { className: 'icon icon-link' }),
                  ),
                  'PC \u7aef\u793a\u4f8b',
                ),
              ),
              r.a.createElement(
                o['default'],
                a['imageviewer-pc'].previewerProps,
                r.a.createElement(n, null),
              ),
            ),
          );
        });
      a['default'] = (e) => {
        var a = r.a.useContext(c['context']),
          n = a.demos;
        return (
          r.a.useEffect(() => {
            var a;
            null !== e &&
              void 0 !== e &&
              null !== (a = e.location) &&
              void 0 !== a &&
              a.hash &&
              c['AnchorLink'].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          r.a.createElement(l, { demos: n })
        );
      };
    },
    '9kvl': function (e, a, n) {
      'use strict';
      var t = n('FfOG');
      n.d(a, 'a', function () {
        return t['b'];
      });
      n('bCY9');
    },
  },
]);
