"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[7811],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),d=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return n.createElement(a.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,p=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(o),y=r,h=s["".concat(a,".").concat(y)]||s[y]||c[y]||p;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=o.length,i=new Array(p);i[0]=s;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<p;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}s.displayName="MDXCreateElement"},3140:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const p={id:"build-deploy-zapp",title:"Deploy your dApp to Point Network",sidebar_label:"Deploy dApp to Point Network",slug:"../build-deploy-zapp"},i=void 0,l={unversionedId:"build/build-deploy-zapp",id:"build/build-deploy-zapp",title:"Deploy your dApp to Point Network",description:"Once you are ready to share your amazing new dApp to the world, you can deploy it to Point Network Mainnet!",source:"@site/docs/build/build-deploy-zapp.md",sourceDirName:"build",slug:"/build-deploy-zapp",permalink:"/docs/build-deploy-zapp",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-deploy-zapp.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"build-deploy-zapp",title:"Deploy your dApp to Point Network",sidebar_label:"Deploy dApp to Point Network",slug:"../build-deploy-zapp"},sidebar:"pnSidebar",previous:{title:"Point Network dapp Developers Guide",permalink:"/docs/build-zapp-developer-guide"},next:{title:"Point Network Upgradable Zapps",permalink:"/docs/build-upgradable-zapps"}},a={},d=[{value:"TLDR;",id:"tldr",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deployer Options",id:"deployer-options",level:3},{value:"Example",id:"example",level:3},{value:"Dev / Staging Deployment",id:"dev--staging-deployment",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Error: connect ECONNREFUSED 127.0.0.1:2468",id:"error-connect-econnrefused-1270012468",level:4},{value:"Error: The address 0x... is not allowed to deploy on ... identity",id:"error-the-address-0x-is-not-allowed-to-deploy-on--identity",level:4},{value:"Error: ENOENT: no such file or directory, open &#39;../mydapp.point/point.deploy.json",id:"error-enoent-no-such-file-or-directory-open-mydapppointpointdeployjson",level:4}],u={toc:d};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you are ready to share your amazing new dApp to the world, you can deploy it to Point Network Mainnet! "),(0,r.kt)("h3",{id:"tldr"},"TLDR;"),(0,r.kt)("p",null,"Simply run the following command in the root folder of the dApp you want to deploy."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point deploy --contracts\n")),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Make sure you have installed and are running the ",(0,r.kt)("a",{parentName:"p",href:"https://pointnetwork.io/download"},"latest version of Point Network")," and you are logged in with the Identity that would be the owner of the dApp (or an designated dApp deployer account) for the dApp you want to deploy."),(0,r.kt)("h3",{id:"deployer-options"},"Deployer Options"),(0,r.kt)("p",null,"You can apply the following optional flags to the ",(0,r.kt)("inlineCode",{parentName:"p"},"point deploy")," command:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--contracts")," compile and deploy the dApp contracts (will upgrade the contract when you are using upgradable contracts in your dApp)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--force-deploy-proxy")," force deploy the contract proxy (instead of upgrading the existing contract - essentially replace with a new one)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--dev")," deploy a dev version of the dapp (see above)")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"In the dApp folder, build your dApp code and then run the deployment command which will deploy your dApp (including contracts) to the network like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd mydapp.point\nnpm i && npm run build\npoint deploy --contracts\n")),(0,r.kt)("p",null,"If you experience any issues perhaps consult the troubleshooting section below."),(0,r.kt)("p",null,"Once the deployment is complete you can open your new dApp in Point Network Mainnet. You can share the dApp url (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://mydapp.point"},"https://mydapp.point"),") to anyone you like and they can open the dApp in Point Network Mainnet!"),(0,r.kt)("h3",{id:"dev--staging-deployment"},"Dev / Staging Deployment"),(0,r.kt)("p",null,"You can optionally deploy to a dev / staging version of the dApp simply by including the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dev")," flag to the command like so: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"point deploy --contracts --dev\n")),(0,r.kt)("p",null,"This will deploy your dApp to the same domain with 'dev' appended to the end of the domain. Note you need to also own this Identity."),(0,r.kt)("p",null,"For example, if you are building a dapp for 'mydapp.point' then including the ",(0,r.kt)("inlineCode",{parentName:"p"},"--dev")," flag will deploy your dApp to `mydappdev.point'. This is useful as a dApp staging area where you can test while running everything in Mainnet!"),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h4",{id:"error-connect-econnrefused-1270012468"},"Error: connect ECONNREFUSED 127.0.0.1:2468"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1663321171702] FATAL (Error/12992 on ....): connect ECONNREFUSED 127.0.0.1:2468\n    Error: connect ECONNREFUSED 127.0.0.1:2468\n        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1187:16)\n")),(0,r.kt)("p",null,"This means you do not have the Point Engine running. You need to start Point Engine using the ",(0,r.kt)("inlineCode",{parentName:"p"},"point")," command or start using the Point Dashboard."),(0,r.kt)("h4",{id:"error-the-address-0x-is-not-allowed-to-deploy-on--identity"},"Error: The address 0x... is not allowed to deploy on ... identity"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[1663321334272] ERROR (13414 on ...):\n    status: "error"\n    identifier: "p7OBTUTRAc2hA7fNjvNj_"\n    account: "0x78c16af63ea147c5ca60604e5f4bfe2ce7c46c2a"\n    process: "point-engine"\n    processVersion: "0.4.5"\n    module: "Deploy"\n    error: "Error: The address 0x... is not allowed to deploy on ... identity"\n')),(0,r.kt)("p",null,"This error means you are not logged into Point Network using the identity that owns the dApp you are deploying. Check the Point Dashboard to see which Identity you are logged in as and change accordingly. It could also mean that your ",(0,r.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," config is not correctly setting the Identity based on what you want so its recommended to check that as well."),(0,r.kt)("h4",{id:"error-enoent-no-such-file-or-directory-open-mydapppointpointdeployjson"},"Error: ENOENT: no such file or directory, open '../mydapp.point/point.deploy.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[1663321499586] ERROR (13920 on ...):\n    status: "error"\n    identifier: "p7OBTUTRAc2hA7fNjvNj_"\n    account: "0x78c16af63ea147c5ca60604e5f4bfe2ce7c46c2a"\n    process: "point-engine"\n    processVersion: "0.4.5"\n    module: "Deploy"\n    error: "Error: ENOENT: no such file or directory, open \'../mydapp.point/point.deploy.json\'"\n')),(0,r.kt)("p",null,"This error means you are not running the ",(0,r.kt)("inlineCode",{parentName:"p"},"point deploy")," command from within the root folder of the dApp you want to deploy."))}c.isMDXComponent=!0}}]);