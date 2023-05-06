"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="GetPlayers",o={unversionedId:"esx/Client/functions/game/getplayers",id:"esx/Client/functions/game/getplayers",title:"GetPlayers",description:"This function is used to get all the active players.",source:"@site/docs/esx/Client/functions/game/getplayers.md",sourceDirName:"esx/Client/functions/game",slug:"/esx/Client/functions/game/getplayers",permalink:"/docs/esx/Client/functions/game/getplayers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/esx/Client/functions/game/getplayers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPeds",permalink:"/docs/esx/Client/functions/game/getpeds"},next:{title:"GetPlayersInArea",permalink:"/docs/esx/Client/functions/game/getplayersinarea"}},s={},u=[{value:"Arguments",id:"arguments",level:2},{value:"Example",id:"example",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getplayers"},"GetPlayers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.Game.GetPlayers(onlyOtherPlayers, returnKeyValue, returnPeds)\n")),(0,a.kt)("p",null,"This function is used to get all the active players."),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"onlyOtherPlayers"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"nil (false)"),(0,a.kt)("td",{parentName:"tr",align:null},"Only return other players than yourself?")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"returnKeyValue"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"nil (false)"),(0,a.kt)("td",{parentName:"tr",align:null},"If set to true it will return in a key-value table where key is player client id and key being the ped handle. Otherwise it create a index-value table, with value being either the ped handle or client id depending on ",(0,a.kt)("inlineCode",{parentName:"td"},"returnPeds"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"returnPeds"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"nil (false)"),(0,a.kt)("td",{parentName:"tr",align:null},"If set to true it will return the ped handle for that player, otherwise it will return the player client id")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local players = ESX.Game.GetPlayers()\n\nfor k,v in ipairs(players) do\n local targetPed = GetPlayerPed(v)\n print(('A player with server id %s found at %s!'):format(GetPlayerServerId(v), GetEntityCoords(targetPed)))\nend\n")))}d.isMDXComponent=!0}}]);