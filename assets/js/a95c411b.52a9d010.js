"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1786],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=d(n),f=o,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),l=["components"],a={id:"build-point-deploy-json-file-explained",title:"Point Deploy Json File Explained",sidebar_label:"Point Deploy Json File Explained",slug:"../build-point-deploy-json-file-explained"},p=void 0,d={unversionedId:"build/build-point-deploy-json-file-explained",id:"build/build-point-deploy-json-file-explained",title:"Point Deploy Json File Explained",description:"This document outlines the options available to you as a Zapp developer when using the point.deploy.json deployment manifest file.",source:"@site/docs/build/build-point-deploy-json-file-explained.md",sourceDirName:"build",slug:"/build-point-deploy-json-file-explained",permalink:"/docs/build-point-deploy-json-file-explained",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-point-deploy-json-file-explained.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1663588940,formattedLastUpdatedAt:"9/19/2022",frontMatter:{id:"build-point-deploy-json-file-explained",title:"Point Deploy Json File Explained",sidebar_label:"Point Deploy Json File Explained",slug:"../build-point-deploy-json-file-explained"},sidebar:"pnSidebar",previous:{title:"Point Network Upgradable Zapps",permalink:"/docs/build-upgradable-zapps"},next:{title:"Point Routes Json File Explained",permalink:"/docs/build-routes-json-file-explained"}},s=[{value:"Overview",id:"overview",children:[],level:2}],u={toc:s};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document outlines the options available to you as a Zapp developer when using the point.deploy.json deployment manifest file."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," deployment manifest file is used as a set of config based instructions for the Point Deployer. It outlines:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The domain of the Zapp."),(0,r.kt)("li",{parentName:"ol"},"The Smart Contract dependencies to compile and deploy."),(0,r.kt)("li",{parentName:"ol"},"Any keyvalues to set in the Smart Contract during the initial deployment."),(0,r.kt)("li",{parentName:"ol"},"A boolean to indicate if the Smart Contracts are ",(0,r.kt)("a",{parentName:"li",href:"./build-upgradable-zapps"},"upgradable"),"."),(0,r.kt)("li",{parentName:"ol"},"The folder where the build static site will be rendered from")),(0,r.kt)("p",null,"A very basic minimal ",(0,r.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "version": 0.1,\n  "target": "hello.point",\n  "keyvalue": {},\n  "contracts": [\n    "Hello"\n  ]    \n  "upgradable": true,\n  "rootDir": "public"\n}\n')),(0,r.kt)("p",null,"Definitions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"version"),": the version of the Point Deploy Manifest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target"),": the name of the Zapp and target endpoint of the Zapp for deployment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyvalue"),": a set of key value pairs used to call functions in the Smart Contract immediately after deployment. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/zapps/blob/main/store.point/point.deploy.json#L4"},"here")," for an example of this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contracts"),": a list of Smart Contracts to be compiled and deployed along with the Zapp. Any contract names listed here must have a corresponding Solidity Smart Contract file located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"Contracts")," directory of the Zapp"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"upgradable"),": indicates if the Smart Contract is built using the supported Open Zeppelin Upgradable Contract pattern. See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/social.point/blob/main/contracts/PointSocial.sol#L6"},"here")," for an example of this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rootDir"),": the folder where the static website will be built and served from (default is ",(0,r.kt)("inlineCode",{parentName:"li"},"public"),").")))}c.isMDXComponent=!0}}]);