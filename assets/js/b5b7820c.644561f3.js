"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[9803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"point_chain/developers/json-rpc/namespaces",id:"point_chain/developers/json-rpc/namespaces",title:"namespaces",description:"\x3c!--",source:"@site/docs/point_chain/developers/json-rpc/namespaces.md",sourceDirName:"point_chain/developers/json-rpc",slug:"/point_chain/developers/json-rpc/namespaces",permalink:"/docs/point_chain/developers/json-rpc/namespaces",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/json-rpc/namespaces.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1666012974,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{}},p={},s=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Ethereum Namespaces",id:"ethereum-namespaces",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"namespaces"},"Namespaces"),(0,r.kt)("p",null,"Check the JSON-RPC namespaces supported on Point Chain."),(0,r.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/docs/rpc/server"},"Geth JSON-RPC Namespaces"))),(0,r.kt)("h2",{id:"ethereum-namespaces"},"Ethereum Namespaces"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported"),(0,r.kt)("th",{parentName:"tr",align:null},"Enabled by Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"eth"))),(0,r.kt)("td",{parentName:"tr",align:null},"Point Chain provides several extensions to the standard ",(0,r.kt)("inlineCode",{parentName:"td"},"eth")," JSON-RPC namespace."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/point_chain/developers/json-rpc/endpoints#web3-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"web3"))),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"web3")," API provides utility functions for the web3 client."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/point_chain/developers/json-rpc/endpoints#net-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"net"))),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"net")," API provides access to network information of the node"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clique")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"clique")," API provides access to the state of the clique consensus engine. You can use this API to manage signer votes and to check the health of a private network."),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debug")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"debug")," API gives you access to several non-standard RPC methods, which will allow you to inspect, debug and set certain debugging flags during runtime."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"les")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"les")," API allows you to manage LES server settings, including client parameters and payment settings for prioritized clients. It also provides functions to query checkpoint information in both server and client mode."),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/point_chain/developers/json-rpc/endpoints#miner-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"miner"))),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"miner")," API allows you to remote control the node\u2019s mining operation and set various mining specific settings."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/point_chain/developers/json-rpc/endpoints#txpool-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"txpool"))),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"txpool")," API gives you access to several non-standard RPC methods to inspect the contents of the transaction pool containing all the currently pending transactions as well as the ones queued for future processing."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"admin")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"admin")," API gives you access to several non-standard RPC methods, which will allow you to have a fine grained control over your nodeinstance, including but not limited to network peer and RPC endpoint management."),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/point_chain/developers/json-rpc/endpoints#personal-methods"},(0,r.kt)("inlineCode",{parentName:"a"},"personal"))),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"personal")," API manages private keys in the key store."),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))))}m.isMDXComponent=!0}}]);