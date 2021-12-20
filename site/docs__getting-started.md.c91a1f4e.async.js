(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [4],
  {
    VCHF: function (e, n, a) {
      'use strict';
      a.r(n);
      var t = a('q1tI'),
        r = a.n(t),
        i = a('dEAq'),
        c = a('6T1g'),
        o = r.a.memo((e) => {
          e.demos;
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              'div',
              { className: 'markdown' },
              r.a.createElement(
                'h1',
                { id: '\u5feb\u901f\u4e0a\u624b' },
                r.a.createElement(
                  i['AnchorLink'],
                  { to: '#\u5feb\u901f\u4e0a\u624b', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u5feb\u901f\u4e0a\u624b',
              ),
              r.a.createElement(
                'p',
                null,
                r.a.createElement(
                  i['Link'],
                  { to: 'https://www.npmjs.com/package/react-image-viewer' },
                  r.a.createElement('img', {
                    src: 'https://img.shields.io/npm/v/react-image-viewer.svg',
                    alt: 'npm',
                  }),
                ),
                ' ',
                r.a.createElement('img', { src: a('ZeF4'), alt: 'GitHub' }),
              ),
              r.a.createElement(
                'h2',
                { id: '\u4f7f\u7528' },
                r.a.createElement(
                  i['AnchorLink'],
                  { to: '#\u4f7f\u7528', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u4f7f\u7528',
              ),
              r.a.createElement(
                'h3',
                { id: 'npm-\u6216-yarn-\u5b89\u88c5' },
                r.a.createElement(
                  i['AnchorLink'],
                  { to: '#npm-\u6216-yarn-\u5b89\u88c5', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                'npm \u6216 yarn \u5b89\u88c5',
              ),
              r.a.createElement(c['a'], {
                code: 'npm install @eco/react-image-viewer\n# or\nyarn add @eco/react-image-viewer',
                lang: 'bash',
              }),
              r.a.createElement(
                'h3',
                { id: '\u793a\u4f8b' },
                r.a.createElement(
                  i['AnchorLink'],
                  { to: '#\u793a\u4f8b', 'aria-hidden': 'true', tabIndex: -1 },
                  r.a.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u793a\u4f8b',
              ),
              r.a.createElement(c['a'], {
                code: "import React, { useState } from 'react';\nimport ImageViewer from '@eco/react-image-viewer';\n\ntype FileItem = {\n  url: string, // \u56fe\u7247url\n  loading?: boolean, // \u56fe\u7247\u662f\u5426\u52a0\u8f7d\u4e2d\n  errorTip?: string, // \u9519\u8bef\u63d0\u793a\n  name?: string, // \u6587\u4ef6\u8bf4\u660e\n  fileName?: string, // \u6587\u4ef6\u540d\u79f0,\u5305\u542b\u540e\u7f00\n  [index: string]: any\n};\n\nexport default () => {\n  const [value, setValue] = useState<FileItem[]>([]);\n\n  // \u6570\u7ec4\u6539\u53d8\n  const onChange = (arr: FileItem[]) => setValue(arr);\n\n  return <ImageViewer index={index} urls={urls} onClose={onClose} />;\n};",
                lang: 'javascript',
              }),
            ),
          );
        });
      n['default'] = (e) => {
        var n = r.a.useContext(i['context']),
          a = n.demos;
        return (
          r.a.useEffect(() => {
            var n;
            null !== e &&
              void 0 !== e &&
              null !== (n = e.location) &&
              void 0 !== n &&
              n.hash &&
              i['AnchorLink'].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)));
          }, []),
          r.a.createElement(o, { demos: a })
        );
      };
    },
    ZeF4: function (e, n, a) {
      e.exports = a.p + 'static/mit.b6f1ea4c.svg';
    },
  },
]);
