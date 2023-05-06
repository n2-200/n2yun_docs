"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},o="DeleteObject",i={unversionedId:"esx/Client/functions/game/deleteobject",id:"esx/Client/functions/game/deleteobject",title:"DeleteObject",description:"This function deletes an object.",source:"@site/docs/esx/Client/functions/game/deleteobject.md",sourceDirName:"esx/Client/functions/game",slug:"/esx/Client/functions/game/deleteobject",permalink:"/docs/esx/Client/functions/game/deleteobject",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/esx/Client/functions/game/deleteobject.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"showNotification",permalink:"/docs/esx/Client/events/shownotification"},next:{title:"DeleteVehicle",permalink:"/docs/esx/Client/functions/game/deletevehicle"}},c={},u=[{value:"Argument",id:"argument",level:2},{value:"Example",id:"example",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deleteobject"},"DeleteObject"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.Game.DeleteObject(object)\n")),(0,a.kt)("p",null,"This function deletes an object."),(0,a.kt)("h2",{id:"argument"},"Argument"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"The object handle")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'\nCreateThread(function()\n  while true do\n    local PlayerPed = ESX.PlayerData.ped\n    local PlayerCoords = GetEntityCoords(PlayerPed)\n\n    local Object = ESX.Game.GetClosestVehicle(PlayerCoords, {["police"] = true}) -- will grab the closest Police Car to the player\n    ESX.Game.DeleteObject(Object) -- Deletes the Police Car\n\n  Wait(0) -- IMPORTANT: Without this, the thread will crash the client.\n  end\nend)\n\n')))}m.isMDXComponent=!0}}]);