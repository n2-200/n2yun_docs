"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3882],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=o,f=p["".concat(l,".").concat(b)]||p[b]||d[b]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},8487:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:0},a="nz_lib:join",c={unversionedId:"nz_lib/Event/join",id:"nz_lib/Event/join",title:"nz_lib:join",description:"\u5df2\u8fdb\u5165\u6e38\u620f",source:"@site/docs/nz_lib/Event/join.md",sourceDirName:"nz_lib/Event",slug:"/nz_lib/Event/join",permalink:"/docs/nz_lib/Event/join",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nz_lib/Event/join.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Event \u4e8b\u4ef6",permalink:"/docs/category/event-\u4e8b\u4ef6"},next:{title:"\u6848\u4f8b\u6559\u7a0b",permalink:"/docs/category/\u6848\u4f8b\u6559\u7a0b"}},l={},s=[],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nz_libjoin"},"nz_lib:join"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"nz_lib:join\n")),(0,o.kt)("p",null,"\u5df2\u8fdb\u5165\u6e38\u620f"),(0,o.kt)("h1",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"--  \u5ba2\u6237\u7aef\u4ee3\u7801\nRegisterNetEvent('nz_lib:join')\nAddEventHandler('nz_lib:join', function(source)\n    print('\u5df2\u8fdb\u5165\u6e38\u620f')\nend)\n\n--  \u670d\u52a1\u7aef\u4ee3\u7801\nRegisterServerEvent('nz_lib:join')\nAddEventHandler('nz_lib:join', function(source)\n    print('ID: '..source..' \u5df2\u8fdb\u5165\u6e38\u620f')\nend)\n")))}d.isMDXComponent=!0}}]);