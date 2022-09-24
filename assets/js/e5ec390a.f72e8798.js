"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7811],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),d=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),y=r,h=s["".concat(a,".").concat(y)]||s[y]||c[y]||i;return n?o.createElement(h,p(p({ref:t},u),{},{components:n})):o.createElement(h,p({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=s;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var d=2;d<i;d++)p[d]=n[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),p=["components"],l={id:"build-deploy-zapp",title:"Deploy your dApp to Point Network",sidebar_label:"Deploy dApp to Point Network",slug:"../build-deploy-zapp"},a=void 0,d={unversionedId:"build/build-deploy-zapp",id:"build/build-deploy-zapp",title:"Deploy your dApp to Point Network",description:"Once you are ready to share your amazing new dApp to the world, you can deploy it to Point Network Mainnet!",source:"@site/docs/build/build-deploy-zapp.md",sourceDirName:"build",slug:"/build-deploy-zapp",permalink:"/docs/build-deploy-zapp",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-deploy-zapp.md",tags:[],version:"current",lastUpdatedBy:"sergevar",lastUpdatedAt:1664017622,formattedLastUpdatedAt:"9/24/2022",frontMatter:{id:"build-deploy-zapp",title:"Deploy your dApp to Point Network",sidebar_label:"Deploy dApp to Point Network",slug:"../build-deploy-zapp"},sidebar:"pnSidebar",previous:{title:"Point Network dapp Developers Guide",permalink:"/docs/build-zapp-developer-guide"},next:{title:"Point Network Upgradable Zapps",permalink:"/docs/build-upgradable-zapps"}},u=[{value:"TLDR;",id:"tldr",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Deployer Options",id:"deployer-options",children:[],level:3},{value:"Example",id:"example",children:[],level:3},{value:"Dev / Staging Deployment",id:"dev--staging-deployment",children:[],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Error: connect ECONNREFUSED 127.0.0.1:2468",id:"error-connect-econnrefused-1270012468",children:[],level:4},{value:"Error: The address 0x... is not allowed to deploy on ... identity",id:"error-the-address-0x-is-not-allowed-to-deploy-on--identity",children:[],level:4},{value:"Error: ENOENT: no such file or directory, open &#39;../mydapp.point/point.deploy.json",id:"error-enoent-no-such-file-or-directory-open-mydapppointpointdeployjson",children:[],level:4}],level:3}],c={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you are ready to share your amazing new dApp to the world, you can deploy it to Point Network Mainnet! "),(0,i.kt)("h3",{id:"tldr"},"TLDR;"),(0,i.kt)("p",null,"Simply run the following command in the root folder of the dApp you want to deploy."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"point deploy --contracts\n")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Make sure you have installed and are running the ",(0,i.kt)("a",{parentName:"p",href:"https://pointnetwork.io/download"},"latest version of Point Network")," and you are logged in with the Identity that would be the owner of the dApp (or an designated dApp deployer account) for the dApp you want to deploy."),(0,i.kt)("h3",{id:"deployer-options"},"Deployer Options"),(0,i.kt)("p",null,"You can apply the following optional flags to the ",(0,i.kt)("inlineCode",{parentName:"p"},"point deploy")," command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--contracts")," compile and deploy the dApp contracts (will upgrade the contract when you are using upgradable contracts in your dApp)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--force-deploy-proxy")," force deploy the contract proxy (instead of upgrading the existing contract - essentially replace with a new one)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--dev")," deploy a dev version of the dapp (see above)")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"In the dApp folder, build your dApp code and then run the deployment command which will deploy your dApp (including contracts) to the network like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd mydapp.point\nnpm i && npm run build\npoint deploy --contracts\n")),(0,i.kt)("p",null,"If you experience any issues perhaps consult the troubleshooting section below."),(0,i.kt)("p",null,"Once the deployment is complete you can open your new dApp in Point Network Mainnet. You can share the dApp url (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://mydapp.point"},"https://mydapp.point"),") to anyone you like and they can open the dApp in Point Network Mainnet!"),(0,i.kt)("h3",{id:"dev--staging-deployment"},"Dev / Staging Deployment"),(0,i.kt)("p",null,"You can optionally deploy to a dev / staging version of the dApp simply by including the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev")," flag to the command like so: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"point deploy --contracts --dev\n")),(0,i.kt)("p",null,"This will deploy your dApp to the same domain with 'dev' appended to the end of the domain. Note you need to also own this Identity."),(0,i.kt)("p",null,"For example, if you are building a dapp for 'mydapp.point' then including the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dev")," flag will deploy your dApp to `mydappdev.point'. This is useful as a dApp staging area where you can test while running everything in Mainnet!"),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h4",{id:"error-connect-econnrefused-1270012468"},"Error: connect ECONNREFUSED 127.0.0.1:2468"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[1663321171702] FATAL (Error/12992 on ....): connect ECONNREFUSED 127.0.0.1:2468\n    Error: connect ECONNREFUSED 127.0.0.1:2468\n        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1187:16)\n")),(0,i.kt)("p",null,"This means you do not have the Point Engine running. You need to start Point Engine using the ",(0,i.kt)("inlineCode",{parentName:"p"},"point")," command or start using the Point Dashboard."),(0,i.kt)("h4",{id:"error-the-address-0x-is-not-allowed-to-deploy-on--identity"},"Error: The address 0x... is not allowed to deploy on ... identity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[1663321334272] ERROR (13414 on ...):\n    status: "error"\n    identifier: "p7OBTUTRAc2hA7fNjvNj_"\n    account: "0x78c16af63ea147c5ca60604e5f4bfe2ce7c46c2a"\n    process: "point-engine"\n    processVersion: "0.4.5"\n    module: "Deploy"\n    error: "Error: The address 0x... is not allowed to deploy on ... identity"\n')),(0,i.kt)("p",null,"This error means you are not logged into Point Network using the identity that owns the dApp you are deploying. Check the Point Dashboard to see which Identity you are logged in as and change accordingly. It could also mean that your ",(0,i.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," config is not correctly setting the Identity based on what you want so its recommended to check that as well."),(0,i.kt)("h4",{id:"error-enoent-no-such-file-or-directory-open-mydapppointpointdeployjson"},"Error: ENOENT: no such file or directory, open '../mydapp.point/point.deploy.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[1663321499586] ERROR (13920 on ...):\n    status: "error"\n    identifier: "p7OBTUTRAc2hA7fNjvNj_"\n    account: "0x78c16af63ea147c5ca60604e5f4bfe2ce7c46c2a"\n    process: "point-engine"\n    processVersion: "0.4.5"\n    module: "Deploy"\n    error: "Error: ENOENT: no such file or directory, open \'../mydapp.point/point.deploy.json\'"\n')),(0,i.kt)("p",null,"This error means you are not running the ",(0,i.kt)("inlineCode",{parentName:"p"},"point deploy")," command from within the root folder of the dApp you want to deploy."))}s.isMDXComponent=!0}}]);