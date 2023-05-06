"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6948],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,u(u({ref:n},s),{},{components:t})):r.createElement(f,u({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[p]="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},u="Math.Round",c={unversionedId:"esx/Common/functions/round",id:"esx/Common/functions/round",title:"Math.Round",description:"This function rounds off a number, and optionally you can parse how many decimals you want (defaults to 0)",source:"@site/docs/esx/Common/functions/round.md",sourceDirName:"esx/Common/functions",slug:"/esx/Common/functions/round",permalink:"/docs/esx/Common/functions/round",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/esx/Common/functions/round.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math.GroupDigits",permalink:"/docs/esx/Common/functions/groupdigits"},next:{title:"Math.Trim",permalink:"/docs/esx/Common/functions/trim"}},i={},l=[{value:"Example",id:"example",level:2}],s={toc:l},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mathround"},"Math.Round"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.Math.Round(value, numDecimalPlaces)\n")),(0,o.kt)("p",null,"This function rounds off a number, and optionally you can parse how many decimals you want (defaults to 0)"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"local value - 5.444\n\nprint('value: ' .. value) -- returns 5.444\nprint('value rounded: ' .. ESX.Math.Round(value)) -- returns 5\nprint('value rounded: ' .. ESX.Math.Round(value, 1)) -- returns 5.4\n")))}m.isMDXComponent=!0}}]);