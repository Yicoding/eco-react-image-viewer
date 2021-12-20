(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [8, 6],
  {
    '9kvl': function (e, n, t) {
      'use strict';
      var i = t('FfOG');
      t.d(n, 'a', function () {
        return i['b'];
      });
      t('bCY9');
    },
    afA6: function (e, n, t) {
      'use strict';
      t.r(n);
      var i = t('0Owb'),
        s = t('q1tI'),
        r = t.n(s),
        a = t('q3YX'),
        o = t('9og8'),
        m = t('WmNS'),
        l = t.n(m),
        c = t('LtsZ'),
        p =
          "import React, { useState } from 'react';\nimport ImageViewer from '@eco/react-image-viewer';\n\nimport s from './styles.less';\n\nimport aLg from '../../assets/images/a-lg.png';\nimport aSm from '../../assets/images/a-sm.png';\nimport xLg from '../../assets/images/x-lg.png';\nimport xSm from '../../assets/images/x-sm.png';\nimport yLg from '../../assets/images/y-lg.png';\nimport ySm from '../../assets/images/y-sm.png';\n\nexport default () => {\n  const [visible, setVisible] = useState<boolean>(false);\n\n  const onClose = () => setVisible((val) => !val);\n\n  return (\n    <div>\n      <div className={s.btnPrimary} onClick={onClose}>\n        \u9884\u89c8\n      </div>\n      {visible && <ImageViewer urls={[aLg, aSm, xLg, xSm, yLg, ySm]} onClose={onClose} />}\n    </div>\n  );\n};",
        g =
          '.btnPrimary {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  height: auto;\n  margin: 0;\n  padding: 7px 16px;\n  color: #fff;\n  font-size: 15px;\n  line-height: 1.4;\n  text-align: center;\n  background: #1677ff;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: opacity ease 0.15s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}',
        u =
          "import React, { useState } from 'react';\nimport ImageViewer from '@eco/react-image-viewer';\n\nimport s from './styles.less';\n\nimport aLg from '../../assets/images/a-lg.png';\nimport aMd from '../../assets/images/a-md.png';\nimport xLg from '../../assets/images/x-lg.png';\nimport xMd from '../../assets/images/x-md.png';\nimport yLg from '../../assets/images/y-lg.png';\nimport yMd from '../../assets/images/y-md.png';\n\nexport default () => {\n  const [visible, setVisible] = useState<boolean>(false);\n\n  const onClose = () => setVisible((val) => !val);\n\n  return (\n    <div>\n      <div className={s.btnPrimary} onClick={onClose}>\n        \u9884\u89c8\n      </div>\n      {visible && <ImageViewer urls={[aLg, aMd, xLg, xMd, yLg, yMd]} onClose={onClose} />}\n    </div>\n  );\n};",
        d = {
          'imageviewer-mobile': {
            component: Object(c['dynamic'])({
              loader: (function () {
                var e = Object(o['a'])(
                  l.a.mark(function e() {
                    return l.a.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Promise.all([t.e(0), t.e(3)]).then(t.bind(null, 'Puaj'))
                            );
                          case 2:
                            return e.abrupt('return', e.sent.default);
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: p }, 'styles.less': { import: './styles.less', content: g } },
              dependencies: {
                react: { version: '>= 16.8.0' },
                '@eco/react-image-viewer': { version: '0.0.1' },
                'react-dom': { version: '>= 16.8.0' },
              },
              identifier: 'imageviewer-mobile',
            },
          },
          'imageviewer-pc': {
            component: Object(c['dynamic'])({
              loader: (function () {
                var e = Object(o['a'])(
                  l.a.mark(function e() {
                    return l.a.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2), Promise.all([t.e(0), t.e(3)]).then(t.bind(null, 'rnuH'))
                            );
                          case 2:
                            return e.abrupt('return', e.sent.default);
                          case 3:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                function n() {
                  return e.apply(this, arguments);
                }
                return n;
              })(),
              loading: () => null,
            }),
            previewerProps: {
              sources: { _: { tsx: u }, 'styles.less': { import: './styles.less', content: g } },
              dependencies: {
                react: { version: '>= 16.8.0' },
                '@eco/react-image-viewer': { version: '0.0.1' },
                'react-dom': { version: '>= 16.8.0' },
              },
              identifier: 'imageviewer-pc',
            },
          },
        },
        f = t('x2v5'),
        v = t('KcUY'),
        b = t.n(v);
      n['default'] = (e) =>
        r.a.createElement(b.a, Object(i['a'])({}, e, { config: a, demos: d, apis: f }));
    },
    q3YX: function (e) {
      e.exports = JSON.parse(
        '{"menus":{"zh-CN":{"/image-viewer":[{"title":"\u56fe\u7247\u9884\u89c8","meta":{"__fallback":true},"children":[{"path":"/image-viewer/mobile","title":"\u79fb\u52a8\u7aef","meta":{}},{"path":"/image-viewer/pc","title":"PC\u7aef","meta":{}}]}],"/docs":[{"title":"\u5feb\u901f\u4e0a\u624b","meta":{"__fallback":true,"order":0},"children":[],"path":"/docs/getting-started"}],"*":[{"path":"/","title":"react-image-viewer - \u57fa\u4e8ereact\u7684\u56fe\u7247\u9884\u89c8\u7ec4\u4ef6\uff0c\u517c\u5bb9PC\u3001\u79fb\u52a8\u7aef","meta":{}}],"/components":[{"title":"\u56fe\u7247\u9884\u89c8","children":[{"title":"\u79fb\u52a8\u7aef","path":"/components/ImageViewer/mobile"},{"title":"PC\u7aef","path":"/components/ImageViewer/pc"}]}]}},"locales":[{"name":"zh-CN","label":"\u4e2d\u6587"}],"navs":{"zh-CN":[{"title":"\u6307\u5357","path":"/docs"},{"path":"/image-viewer","title":"ImageViewer"},{"title":"GitHub","path":"https://github.com/Yicoding/react-image-viewer"}]},"title":"react-image-viewer","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site","repository":{"url":"https://github.com/Yicoding/react-image-viewer","branch":"master"},"theme":{}}',
      );
    },
    x2v5: function (e) {
      e.exports = JSON.parse('{}');
    },
  },
]);
