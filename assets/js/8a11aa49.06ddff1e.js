"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,y=s["".concat(l,".").concat(m)]||s[m]||c[m]||r;return n?o.createElement(y,p(p({ref:t},u),{},{components:n})):o.createElement(y,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},14640:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),p=["components"],i={id:"build-zapp-developer-guide",title:"Point Network dapp Developers Guide",sidebar_label:"Point Network dapp Developers Guide",slug:"../build-zapp-developer-guide"},l=void 0,d={unversionedId:"build/build-zapp-developer-guide",id:"build/build-zapp-developer-guide",title:"Point Network dapp Developers Guide",description:"Welcome to the Point Network dapp Developers Guide!",source:"@site/docs/build/build-zapp-developer-guide.md",sourceDirName:"build",slug:"/build-zapp-developer-guide",permalink:"/docs/build-zapp-developer-guide",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-zapp-developer-guide.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1663321891,formattedLastUpdatedAt:"9/16/2022",frontMatter:{id:"build-zapp-developer-guide",title:"Point Network dapp Developers Guide",sidebar_label:"Point Network dapp Developers Guide",slug:"../build-zapp-developer-guide"},sidebar:"pnSidebar",previous:{title:"Create a Dev Point Network Profile in Firefox",permalink:"/docs/build-create-a-dev-point-network-profile-in-firefox"},next:{title:"Deploy dApp to Point Network",permalink:"/docs/build-deploy-zapp"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Anatomy of a dapp",id:"anatomy-of-a-dapp",children:[],level:2},{value:"Procedures for developing a dapp",id:"procedures-for-developing-a-dapp",children:[],level:2},{value:"Deploy your dapp to YNet",id:"deploy-your-dapp-to-ynet",children:[],level:2},{value:"Continue Developing",id:"continue-developing",children:[],level:2},{value:"Upgradable dapps",id:"upgradable-dapps",children:[],level:2}],c={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the Point Network dapp Developers Guide!"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"dApps are decentralized applications running on Point Network."),(0,r.kt)("p",null,"While Point Network does support running EVM based Dapps directly on the network, its also possible to build brand new dapps using our SDK (called ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointsdk"},"Point SDK"),"). "),(0,r.kt)("p",null,"Its highly recommended to use the Point SDK to build new dapps since this SDK automatically proxies connections to the Point Node making development of new dapps very straightforward."),(0,r.kt)("h2",{id:"anatomy-of-a-dapp"},"Anatomy of a dapp"),(0,r.kt)("p",null,"A dapp is made up of the following components at a minimum:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"point.deploy.json")," file which is a deployment manifest for your dapp. You can read more about this file in ",(0,r.kt)("a",{parentName:"li",href:"/docs/build-point-deploy-json-file-explained"},"this article"),"."),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"routes.json")," file which defines your dapps routes. You can read more about the Routes file in ",(0,r.kt)("a",{parentName:"li",href:"/docs/build-routes-json-file-explained"},"this article")),(0,r.kt)("li",{parentName:"ol"},"A static website containing the frontend code of your dapp. Typically this would be a React JS application but you can use any frontend framework."),(0,r.kt)("li",{parentName:"ol"},"One or more Solidity Smart Contracts to be deployed along with your dapp to act as a distributed backend data storage.")),(0,r.kt)("h2",{id:"procedures-for-developing-a-dapp"},"Procedures for developing a dapp"),(0,r.kt)("p",null,"You would take the following steps to develop, test and deploy your dapp onto Point Network."),(0,r.kt)("p",null,"Once you have a great idea for a new decentralized application that you want to deploy and share on Point Network you would:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/template.point"},"template.point")," dapp repo into a local folder:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/pointnetwork/template.point.git mynewdapp.point\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," folder so that you can initialize for your own Github repo later on if you wish: ",(0,r.kt)("inlineCode",{parentName:"p"},"rm -rf mynewdapp.point/.git"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change directory into your new dapp folder and install the dependencies ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i")," and build the React JS application ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," file to contain the following content (replace 'MyNewdapp' with your dapp Name):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n    "version": 0.1,\n    "target": "mynewdapp.point",\n    "keyvalue": {},\n    "contracts": [\n      "MyNewdapp"\n    ]\n  }\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Template.sol")," smart contract to contain the logic of your dapp. Make sure to rename the file to something appropriate like ",(0,r.kt)("inlineCode",{parentName:"p"},"MyNewdapp.sol")," as well.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the React JS components to contain the logic of your dapp.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy and test your dapp locally by following the instructions ",(0,r.kt)("a",{parentName:"p",href:"./build-zapp-dev-environment-direct-install"},"here"),"). In the development environment you can run the watch command for the front end ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run watch")," so that as you make changes to any React JS components they are automatically built and you can simply refresh the Point Browser to see your latest changes. NOTE: if you need to make changes to your Smart Contract you will need to redeploy your dapp to see these changes."))),(0,r.kt)("h2",{id:"deploy-your-dapp-to-ynet"},"Deploy your dapp to YNet"),(0,r.kt)("p",null,"Step by step details on deploying your dapp to YNet are available ",(0,r.kt)("a",{parentName:"p",href:"./build-deploy-zapp"},"here"),"."),(0,r.kt)("h2",{id:"continue-developing"},"Continue Developing"),(0,r.kt)("p",null,"To continue to develop your dapp locally, simply stop the Point Node running that is connected to YNET and restart all your dev services as well as the Point Node running in the development environment as outlined ",(0,r.kt)("a",{parentName:"p",href:"./build-zapp-dev-environment-direct-install"},"here"),"."),(0,r.kt)("h2",{id:"upgradable-dapps"},"Upgradable dapps"),(0,r.kt)("p",null,"If you build a dapp ",(0,r.kt)("em",{parentName:"p"},"without")," using an upgradable smart contract pattern then each time you deploy the smart contract a ",(0,r.kt)("em",{parentName:"p"},"new instance")," of the smart contract will be deployed at a new address which will not contain the data of the previously deployed contract. If you intend to upgrade your dapp from time to time, then consider building your dapp as an ",(0,r.kt)("a",{parentName:"p",href:"./build-upgradable-zapps"},"Upgradable dapp"),"."))}s.isMDXComponent=!0}}]);