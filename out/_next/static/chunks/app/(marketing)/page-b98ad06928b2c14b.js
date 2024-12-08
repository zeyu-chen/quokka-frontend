(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{59528:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isPresetSize=function(e){return["small","middle","large"].includes(e)},n.isValidGapNumber=function(e){return!!e&&"number"==typeof e&&!Number.isNaN(e)}},79386:function(e,n,t){"use strict";var r=t(36199).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(2265)),i=t(38111);n.default=e=>{let{className:n,index:t,children:r,split:o,style:l}=e,{latestIndex:s}=a.useContext(i.SpaceContext);return null==r?null:a.createElement(a.Fragment,null,a.createElement("div",{className:n,style:l},r),t<s&&o&&a.createElement("span",{className:`${n}-split`},o))}},38111:function(e,n,t){"use strict";var r=t(26314).default;Object.defineProperty(n,"__esModule",{value:!0}),n.SpaceContextProvider=n.SpaceContext=void 0;var a=r(t(2265));let i=n.SpaceContext=a.default.createContext({latestIndex:0});n.SpaceContextProvider=i.Provider},80338:function(e,n,t){"use strict";var r=t(26314).default,a=t(36199).default;n.ZP=void 0;var i=a(t(2265)),o=r(t(42744)),l=r(t(2970)),s=t(59528),c=t(9273),u=r(t(91637)),d=t(38111),m=r(t(79386)),f=r(t(3951)),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>n.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};let h=i.forwardRef((e,n)=>{var t,r,a;let{getPrefixCls:u,space:h,direction:x}=i.useContext(c.ConfigContext),{size:g=null!==(t=null==h?void 0:h.size)&&void 0!==t?t:"small",align:v,className:y,rootClassName:b,children:j,direction:N="horizontal",prefixCls:w,split:C,style:k,wrap:z=!1,classNames:_,styles:O}=e,P=p(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[S,$]=Array.isArray(g)?g:[g,g],E=(0,s.isPresetSize)($),Z=(0,s.isPresetSize)(S),A=(0,s.isValidGapNumber)($),G=(0,s.isValidGapNumber)(S),B=(0,l.default)(j,{keepEmpty:!0}),M=void 0===v&&"horizontal"===N?"center":v,R=u("space",w),[I,W,L]=(0,f.default)(R),T=(0,o.default)(R,null==h?void 0:h.className,W,`${R}-${N}`,{[`${R}-rtl`]:"rtl"===x,[`${R}-align-${M}`]:M,[`${R}-gap-row-${$}`]:E,[`${R}-gap-col-${S}`]:Z},y,b,L),H=(0,o.default)(`${R}-item`,null!==(r=null==_?void 0:_.item)&&void 0!==r?r:null===(a=null==h?void 0:h.classNames)||void 0===a?void 0:a.item),V=0,F=B.map((e,n)=>{var t,r;null!=e&&(V=n);let a=(null==e?void 0:e.key)||`${H}-${n}`;return i.createElement(m.default,{className:H,key:a,index:n,split:C,style:null!==(t=null==O?void 0:O.item)&&void 0!==t?t:null===(r=null==h?void 0:h.styles)||void 0===r?void 0:r.item},e)}),q=i.useMemo(()=>({latestIndex:V}),[V]);if(0===B.length)return null;let D={};return z&&(D.flexWrap="wrap"),!Z&&G&&(D.columnGap=S),!E&&A&&(D.rowGap=$),I(i.createElement("div",Object.assign({ref:n,className:T,style:Object.assign(Object.assign(Object.assign({},D),null==h?void 0:h.style),k)},P),i.createElement(d.SpaceContextProvider,{value:q},F)))});h.Compact=u.default,n.ZP=h},65531:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(2265);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((e,n,t)=>!!e&&t.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,r.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:l="",children:s,iconNode:c,...u},d)=>(0,r.createElement)("svg",{ref:d,...o,width:n,height:n,stroke:e,strokeWidth:a?24*Number(t)/Number(n):t,className:i("lucide",l),...u},[...c.map(([e,n])=>(0,r.createElement)(e,n)),...Array.isArray(s)?s:[s]])),s=(e,n)=>{let t=(0,r.forwardRef)(({className:t,...o},s)=>(0,r.createElement)(l,{ref:s,iconNode:n,className:i(`lucide-${a(e)}`,t),...o}));return t.displayName=`${e}`,t}},68883:function(e,n,t){Promise.resolve().then(t.bind(t,98828))},98828:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return z}});var r=t(60230),a=t(57437),i=t(2265),o=t(88110),l=t.n(o),s=t(80338),c=t(49385),u=t(61396),d=t.n(u),m=t(2882),f=t(54227),p=t(65531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let h=(0,p.Z)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);var x=t(97817);function g(){let e=(0,r._)(["\n    opacity: 0;\n    transition: opacity 0.3s ease-in;\n    &.loaded {\n      opacity: 1;\n    }\n  "]);return g=function(){return e},e}function v(){let e=(0,r._)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: ",";\n  "]);return v=function(){return e},e}function y(){let e=(0,r._)(["\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 4rem 2rem;\n  "]);return y=function(){return e},e}function b(){let e=(0,r._)(["\n    text-align: center;\n    margin-bottom: 4rem;\n    h1 {\n      margin-bottom: 1rem;\n      font-size: 3rem;\n      @media (max-width: 768px) {\n        font-size: 2rem;\n      }\n    }\n    p {\n      font-size: 1.25rem;\n      color: rgba(0, 0, 0, 0.65);\n      margin-bottom: 2rem;\n      @media (max-width: 768px) {\n        font-size: 1rem;\n      }\n    }\n  "]);return b=function(){return e},e}function j(){let e=(0,r._)(["\n    height: 42px;\n    padding: 0 24px;\n    font-size: 16px;\n    border-radius: 6px;\n  "]);return j=function(){return e},e}function N(){let e=(0,r._)(["\n    background: rgb(240, 242, 245);\n    color: rgba(0, 0, 0, 0.88);\n    &:hover {\n      background: rgb(233, 236, 239) !important;\n      color: rgba(0, 0, 0, 0.88) !important;\n    }\n  "]);return N=function(){return e},e}function w(){let e=(0,r._)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 2rem;\n    margin-bottom: 4rem;\n  "]);return w=function(){return e},e}function C(){let e=(0,r._)(["\n    padding: 2rem;\n    border-radius: ","px;\n    background: ",";\n    box-shadow: ",";\n    text-align: center;\n    h3 {\n      margin: 1rem 0;\n      font-size: 1.5rem;\n    }\n    p {\n      color: ",";\n    }\n  "]);return C=function(){return e},e}let k=(0,x.kc)(e=>{let{token:n,css:t}=e;return{pageWrapper:t(g()),loadingContainer:t(v(),n.colorBgContainer),container:t(y()),hero:t(b()),actionButton:t(j()),secondaryButton:t(N()),features:t(w()),feature:t(C(),n.borderRadius,n.colorBgContainer,n.boxShadowTertiary,n.colorTextSecondary)}});function z(){let{styles:e}=k(),[n,t]=(0,i.useState)(!0),[r,o]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{o(!0);let e=setTimeout(()=>{t(!1)},1e3);return()=>clearTimeout(e)},[]),r)?n?(0,a.jsx)("div",{className:e.loadingContainer,children:(0,a.jsx)(c.Z,{size:"large",tip:"Loading..."})}):(0,a.jsx)("div",{className:"".concat(e.pageWrapper," ").concat(n?"":"loaded"),children:(0,a.jsxs)("div",{className:e.container,children:[(0,a.jsxs)("section",{className:e.hero,children:[(0,a.jsx)("h1",{children:"AI Content Assistant"}),(0,a.jsx)("p",{children:"Generate, refine, and optimize your content with the power of AI"}),(0,a.jsxs)(s.ZP,{size:"large",children:[(0,a.jsx)(d(),{href:"/chat",passHref:!0,children:(0,a.jsx)(l(),{type:"primary",className:e.actionButton,icon:(0,a.jsx)(m.Z,{size:16}),children:"Start Chatting"})}),(0,a.jsx)(d(),{href:"/generate",passHref:!0,children:(0,a.jsx)(l(),{className:"".concat(e.actionButton," ").concat(e.secondaryButton),icon:(0,a.jsx)(f.Z,{size:16}),children:"Generate Content"})})]})]}),(0,a.jsxs)("section",{className:e.features,children:[(0,a.jsxs)("div",{className:e.feature,children:[(0,a.jsx)(h,{size:32}),(0,a.jsx)("h3",{children:"Smart Generation"}),(0,a.jsx)("p",{children:"Create engaging content tailored to your needs in seconds"})]}),(0,a.jsxs)("div",{className:e.feature,children:[(0,a.jsx)(m.Z,{size:32}),(0,a.jsx)("h3",{children:"Interactive Chat"}),(0,a.jsx)("p",{children:"Refine and improve your content through natural conversation"})]}),(0,a.jsxs)("div",{className:e.feature,children:[(0,a.jsx)(f.Z,{size:32}),(0,a.jsx)("h3",{children:"Multiple Formats"}),(0,a.jsx)("p",{children:"Generate text, images, and more for various platforms"})]})]})]})}):null}}},function(e){e.O(0,[938,876,385,110,673,971,864,744],function(){return e(e.s=68883)}),_N_E=e.O()}]);