"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[1786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?i.createElement(f,r(r({ref:t},s),{},{components:n})):i.createElement(f,r({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=n(7462),o=(n(7294),n(3905));const l={id:"build-point-deploy-json-file-explained",title:"Point Deploy Json File Explained",sidebar_label:"Point Deploy Json File Explained",slug:"../build-point-deploy-json-file-explained"},r=void 0,a={unversionedId:"build/build-point-deploy-json-file-explained",id:"build/build-point-deploy-json-file-explained",title:"Point Deploy Json File Explained",description:"This document outlines the options available to you as a Zapp developer when using the point.deploy.json deployment manifest file.",source:"@site/docs/build/build-point-deploy-json-file-explained.md",sourceDirName:"build",slug:"/build-point-deploy-json-file-explained",permalink:"/docs/build-point-deploy-json-file-explained",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-point-deploy-json-file-explained.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"build-point-deploy-json-file-explained",title:"Point Deploy Json File Explained",sidebar_label:"Point Deploy Json File Explained",slug:"../build-point-deploy-json-file-explained"},sidebar:"pnSidebar",previous:{title:"Point Network Upgradable Zapps",permalink:"/docs/build-upgradable-zapps"},next:{title:"Point Routes Json File Explained",permalink:"/docs/build-routes-json-file-explained"}},p={},d=[{value:"Overview",id:"overview",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document outlines the options available to you as a Zapp developer when using the point.deploy.json deployment manifest file."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," deployment manifest file is used as a set of config based instructions for the Point Deployer. It outlines:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The domain of the Zapp."),(0,o.kt)("li",{parentName:"ol"},"The Smart Contract dependencies to compile and deploy."),(0,o.kt)("li",{parentName:"ol"},"Any keyvalues to set in the Smart Contract during the initial deployment."),(0,o.kt)("li",{parentName:"ol"},"A boolean to indicate if the Smart Contracts are ",(0,o.kt)("a",{parentName:"li",href:"./build-upgradable-zapps"},"upgradable"),"."),(0,o.kt)("li",{parentName:"ol"},"The folder where the build static site will be rendered from")),(0,o.kt)("p",null,"A very basic minimal ",(0,o.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "version": 0.1,\n  "target": "hello.point",\n  "keyvalue": {},\n  "contracts": [\n    "Hello"\n  ]    \n  "upgradable": true,\n  "rootDir": "public"\n}\n')),(0,o.kt)("p",null,"Definitions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"version"),": the version of the Point Deploy Manifest"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"target"),": the name of the Zapp and target endpoint of the Zapp for deployment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keyvalue"),": a set of key value pairs used to call functions in the Smart Contract immediately after deployment. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/zapps/blob/main/store.point/point.deploy.json#L4"},"here")," for an example of this."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contracts"),": a list of Smart Contracts to be compiled and deployed along with the Zapp. Any contract names listed here must have a corresponding Solidity Smart Contract file located in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Contracts")," directory of the Zapp"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upgradable"),": indicates if the Smart Contract is built using the supported Open Zeppelin Upgradable Contract pattern. See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/social.point/blob/main/contracts/PointSocial.sol#L6"},"here")," for an example of this."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rootDir"),": the folder where the static website will be built and served from (default is ",(0,o.kt)("inlineCode",{parentName:"li"},"public"),").")))}u.isMDXComponent=!0}}]);