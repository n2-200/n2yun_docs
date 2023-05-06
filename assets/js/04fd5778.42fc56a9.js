"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3715:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},o="Math.Trim",c={unversionedId:"esx/Common/functions/trim",id:"esx/Common/functions/trim",title:"Math.Trim",description:"This function trims a string, removing all trailing whitespaces. Often used when sanitizing the GetVehicleNumberPlateText() native.",source:"@site/docs/esx/Common/functions/trim.md",sourceDirName:"esx/Common/functions",slug:"/esx/Common/functions/trim",permalink:"/docs/esx/Common/functions/trim",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/esx/Common/functions/trim.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math.Round",permalink:"/docs/esx/Common/functions/round"},next:{title:"Using StateBags",permalink:"/docs/esx/Common/statebags"}},l={},s=[{value:"Example",id:"example",level:2}],m={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mathtrim"},"Math.Trim"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"ESX.Math.Trim(value)\n")),(0,a.kt)("p",null,"This function trims a string, removing all trailing whitespaces. Often used when sanitizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"GetVehicleNumberPlateText()")," native."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local Vehicle = GetVehiclePedIsIn(ESX.PlayerData.ped, false) -- gets the vehicle the Player is in\n\nlocal LicencePlate = GetVehicleNumberPlateText(Vehicle) -- returns the Vehicles Licence Plate\n\nprint(LicencePlate) -- prints "ESX 123"\n\nlocal TrimmedPlate = ESX.Math.Trim(LicencePlate)\n\nprint(TrimmedPlate) -- prints "ESX123"\n')))}p.isMDXComponent=!0}}]);