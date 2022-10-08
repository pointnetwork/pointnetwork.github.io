"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[3883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),c=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=r,h=p["".concat(d,".").concat(y)]||p[y]||u[y]||o;return n?i.createElement(h,a(a({ref:t},s),{},{components:n})):i.createElement(h,a({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={id:"build-use-identity-oracle-in-devlocal",title:"Use Identity Twitter Handle Verification Oracle in dev",sidebar_label:"Using Identity Oracle in dev",slug:"../build-use-identity-oracle-in-devlocal"},a=void 0,l={unversionedId:"build/build-use-identity-oracle-in-devlocal",id:"build/build-use-identity-oracle-in-devlocal",title:"Use Identity Twitter Handle Verification Oracle in dev",description:"By default, when starting Point Node in dev environment, the Point Node will by-pass the need to use an Oracle to verify Twitter handles. This makes it easier and smoother for the development process.",source:"@site/docs/build/build-use-identity-oracle-in-devlocal.md",sourceDirName:"build",slug:"/build-use-identity-oracle-in-devlocal",permalink:"/docs/build-use-identity-oracle-in-devlocal",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-use-identity-oracle-in-devlocal.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1665224220,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{id:"build-use-identity-oracle-in-devlocal",title:"Use Identity Twitter Handle Verification Oracle in dev",sidebar_label:"Using Identity Oracle in dev",slug:"../build-use-identity-oracle-in-devlocal"},sidebar:"pnSidebar",previous:{title:"Delegating a dApp Deployer Identity",permalink:"/docs/build-delegating-deployer-identities"},next:{title:"Upgrade the Identity contract",permalink:"/docs/build-upgrade-identity-contract"}},d={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, when starting Point Node in dev environment, the Point Node will by-pass the need to use an Oracle to verify Twitter handles. This makes it easier and smoother for the development process. "),(0,r.kt)("p",null,"However, if you want to run the node in a dev environment while also connecting to the Identity Registration Twitter Handle Vericiation Oracle you can do so by starting the node using the following alias command (which is defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/blob/develop/.bash_alias"},".bash_alias"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point-dev-use-oracle\n")),(0,r.kt)("p",null,"Now when you need to register an Identity, the Point Node will first check with the Oracle and request that you post a Tweet on the account with the same name as the Identity that you want to register."),(0,r.kt)("p",null,"Naturally, most of the time it is better and easier not to run the Point Node in the development environment with the Oracle enabled. However if you specifically want to test the Oracle or work on debugging an issue with the flow within the Point Node relating to the Oracle then you can do so as described here."))}u.isMDXComponent=!0}}]);