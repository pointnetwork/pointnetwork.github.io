"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[4804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=c(r),h=a,d=y["".concat(l,".").concat(h)]||y[h]||u[h]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"learn-cryptography",title:"Cryptography Explainer",sidebar_label:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Point Network",slug:"../learn-cryptography"},i=void 0,p={unversionedId:"learn/learn-cryptography",id:"learn/learn-cryptography",title:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Point Network",source:"@site/docs/learn/learn-cryptography.md",sourceDirName:"learn",slug:"/learn-cryptography",permalink:"/docs/learn-cryptography",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/learn/learn-cryptography.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"learn-cryptography",title:"Cryptography Explainer",sidebar_label:"Cryptography Explainer",description:"An overview of the cryptographic functions used in Point Network",slug:"../learn-cryptography"},sidebar:"pnSidebar",previous:{title:"Payments",permalink:"/docs/learn-payments"},next:{title:"Video Tutorials",permalink:"/docs/learn-video-tutorials"}},l={},c=[{value:"Hashing Algorithm",id:"hashing-algorithm",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a high-level overview of the cryptography used in Point Network. It assumes that you have some\nknowledge about cryptographic primitives that are generally used in blockchains such as hashes,\nelliptic curve cryptography (ECC), and public-private keypairs."),(0,a.kt)("h2",{id:"hashing-algorithm"},"Hashing Algorithm"),(0,a.kt)("p",null,"The hashing algorithm used in Point Network is ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SHA-3"},"Keccak256"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Keccak256")," is considered to be a very fast cryptographic hash function that is also used in the Ethereum EVM."))}u.isMDXComponent=!0}}]);