"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,d=p["".concat(o,".").concat(g)]||p[g]||m[g]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={},i="TriggerServerCallback",s={unversionedId:"esx/Client/functions/triggerservercallback",id:"esx/Client/functions/triggerservercallback",title:"TriggerServerCallback",description:"This function triggers a server callback. See ESX.RegisterServerCallback on registering server callbacks.",source:"@site/docs/esx/Client/functions/triggerservercallback.md",sourceDirName:"esx/Client/functions",slug:"/esx/Client/functions/triggerservercallback",permalink:"/docs/esx/Client/functions/triggerservercallback",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/esx/Client/functions/triggerservercallback.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RequestWeaponAsset",permalink:"/docs/esx/Client/functions/streaming/requestweaponasset"},next:{title:"RegisterElement",permalink:"/docs/esx/Client/functions/ui/hud/registerelement"}},o={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"triggerservercallback"},"TriggerServerCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.TriggerServerCallback(name, cb, args)\n")),(0,a.kt)("p",null,"This function triggers a server callback. See ",(0,a.kt)("a",{parentName:"p",href:"./../../server/functions/registerservercallback"},"ESX.RegisterServerCallback")," on registering server callbacks."),(0,a.kt)("p",null,"!!! warning\nThis is an async function and must be treated as one, examples on how to properly use the async function callback is shown below."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"A valid server callback name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cb"),(0,a.kt)("td",{parentName:"tr",align:null},"function"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The returned function when the async task has completed. The invoked function a varied size of arguments depending on how many arguments are parsed from the server")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"args"),(0,a.kt)("td",{parentName:"tr",align:null},"any"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"Any arguments to parse to the async function")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local myAgument = 'hello'\n\nESX.TriggerServerCallback('esx_example:test', function(isBusy, numKills)\n print(isBusy, numKills)\n print('this code is an asynchronous task')\nend, myAgument)\n\nprint('this code is running in sync')\n")))}m.isMDXComponent=!0}}]);