(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{NvW2:function(e,a,n){e.exports=n.p+"static/mit.b6f1ea4c.svg"},VCHF:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),i=n.n(t),r=n("dEAq"),m=n("H1Ra"),o=i.a.memo((e=>{e.demos;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h1",{id:"\u5feb\u901f\u4e0a\u624b"},i.a.createElement(r["AnchorLink"],{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),i.a.createElement("p",null,i.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/react-image-view"},i.a.createElement("img",{src:"https://img.shields.io/npm/v/react-image-view.svg",alt:"npm"}))," ",i.a.createElement("img",{src:n("NvW2"),alt:"GitHub"})),i.a.createElement("h2",{id:"\u4f7f\u7528"},i.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528"),i.a.createElement("h3",{id:"npm-\u6216-yarn-\u5b89\u88c5"},i.a.createElement(r["AnchorLink"],{to:"#npm-\u6216-yarn-\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"npm \u6216 yarn \u5b89\u88c5"),i.a.createElement(m["a"],{code:"npm install react-image-view\n# or\nyarn add react-image-view",lang:"bash"}),i.a.createElement("h3",{id:"\u793a\u4f8b"},i.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),i.a.createElement(m["a"],{code:"import React, { useState } from 'react';\nimport ImagePreview from 'react-image-view';\n\nimport s from './styles.less';\n\nimport aLg from '../../fixtures/images/a-lg.png';\nimport aMd from '../../fixtures/images/a-md.png';\nimport xLg from '../../fixtures/images/x-lg.png';\nimport xMd from '../../fixtures/images/x-md.png';\nimport yLg from '../../fixtures/images/y-lg.png';\nimport yMd from '../../fixtures/images/y-md.png';\n\nexport default () => {\n  const [visible, setVisible] = useState<boolean>(false);\n\n  const onClose = () => setVisible((val) => !val);\n\n  return (\n    <div>\n      <div className={s.btnPrimary} onClick={onClose}>\n        \u9884\u89c8\n      </div>\n      {visible && <ImagePreview urls={[aLg, aMd, xLg, xMd, yLg, yMd]} onClose={onClose} />}\n    </div>\n  );\n};",lang:"ts"})))}));a["default"]=e=>{var a=i.a.useContext(r["context"]),n=a.demos;return i.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),i.a.createElement(o,{demos:n})}}}]);