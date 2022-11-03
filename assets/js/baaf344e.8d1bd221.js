"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[5470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),b=r,m=c["".concat(o,".").concat(b)]||c[b]||u[b]||p;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<p;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const p={id:"build-upgradable-zapps",title:"Point Network Upgradable Zapps",sidebar_label:"Point Network Upgradable Zapps",slug:"../build-upgradable-zapps"},i=void 0,l={unversionedId:"build/build-upgradable-zapps",id:"build/build-upgradable-zapps",title:"Point Network Upgradable Zapps",description:"Welcome to the Upgradable Zapps Developers Guide!",source:"@site/docs/build/build-upgradable-zapps.md",sourceDirName:"build",slug:"/build-upgradable-zapps",permalink:"/docs/build-upgradable-zapps",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-upgradable-zapps.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667471981,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"build-upgradable-zapps",title:"Point Network Upgradable Zapps",sidebar_label:"Point Network Upgradable Zapps",slug:"../build-upgradable-zapps"},sidebar:"pnSidebar",previous:{title:"Deploy dApp to Point Network",permalink:"/docs/build-deploy-zapp"},next:{title:"Point Deploy Json File Explained",permalink:"/docs/build-point-deploy-json-file-explained"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Example",id:"example",level:2},{value:"Steps",id:"steps",level:2}],s={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Upgradable Zapps Developers Guide!"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This document outlines developing upgradable Zapps using the Open Zeppelin Proxy Upgrade Pattern."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"For an example of an existing Upgradable Zapp take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/social.point"},"social.point"),"."),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("p",null,"To ensure that your Zapp follows the Upgradable pattern you need to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Familiarize yourself with the Open Zeppelin Smart Contract Proxy Upgrade Pattern ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," set ",(0,r.kt)("inlineCode",{parentName:"p"},"upgradable")," key to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," like this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "version": 0.1,\n  "target": "mynewzapp.point",\n  "keyvalue": {},\n  "contracts": [\n    "MyNewZapp"\n  ]    \n  "upgradable": true\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your Smart Contract, import the required Open Zeppelin Smart Contract Proxy Upgrade Pattern libraries like so:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";\nimport "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";\nimport "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extend your Smart Contract with the required contracts like so:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"contract MyNewZapp is Initializable, UUPSUpgradeable, OwnableUpgradeable\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Declare a ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," function in your Smart Contract that calls ",(0,r.kt)("inlineCode",{parentName:"p"},"__Ownable_init()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"__UUPSUpgradeable_init()")," like so:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"function initialize() public initializer {\n    __Ownable_init();\n    __UUPSUpgradeable_init();\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the dependencies:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm i @openzeppelin/contracts\nnpm i @openzeppelin/contracts-upgradeable\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Build and deploy your Zapp as per the instructions outlined ",(0,r.kt)("a",{parentName:"p",href:"./build-zapp-dev-environment-direct-install"},"here")))))}u.isMDXComponent=!0}}]);