"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(v,o(o({ref:t},l),{},{components:n})):r.createElement(v,o({ref:t},l))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="esx:pauseMenuActive",s={unversionedId:"esx/Client/events/pausemenuactive",id:"esx/Client/events/pausemenuactive",title:"esx:pauseMenuActive",description:"\u4ece\u6b64\u7248\u672c\u53ef\u7528: 1.9.1",source:"@site/docs/esx/Client/events/pausemenuactive.md",sourceDirName:"esx/Client/events",slug:"/esx/Client/events/pausemenuactive",permalink:"/docs/esx/Client/events/pausemenuactive",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/esx/Client/events/pausemenuactive.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"esx:addInventoryItem",permalink:"/docs/esx/Client/events/addinventoryitem"},next:{title:"playerLoaded",permalink:"/docs/esx/Client/events/playerloaded"}},c={},u=[{value:"\u4ece\u6b64\u7248\u672c\u53ef\u7528: 1.9.1",id:"\u4ece\u6b64\u7248\u672c\u53ef\u7528-191",level:4},{value:"\u7528\u6cd5\u793a\u4f8b",id:"\u7528\u6cd5\u793a\u4f8b",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"esxpausemenuactive"},"esx:pauseMenuActive"),(0,a.kt)("h4",{id:"\u4ece\u6b64\u7248\u672c\u53ef\u7528-191"},"\u4ece\u6b64\u7248\u672c\u53ef\u7528: ",(0,a.kt)("a",{parentName:"h4",href:"https://github.com/esx-framework/esx_core/releases/tag/1.9.1"},"1.9.1")),(0,a.kt)("p",null,"\u5f53\u73a9\u5bb6\u5207\u6362\u6682\u505c\u83dc\u5355\u65f6\u89e6\u53d1\u6b64\u4e8b\u4ef6"),(0,a.kt)("h3",{id:"\u7528\u6cd5\u793a\u4f8b"},"\u7528\u6cd5\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('esx:pauseMenuActive', function(isActive)\n    print('\u6682\u505c\u83dc\u5355\u72b6\u6001:', isActive)\nend)\n")))}d.isMDXComponent=!0}}]);