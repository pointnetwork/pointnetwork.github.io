"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3909],{3905:function(t,e,o){o.d(e,{Zo:function(){return s},kt:function(){return m}});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var p=n.createContext({}),d=function(t){var e=n.useContext(p),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,r=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=d(o),m=i,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return o?n.createElement(f,a(a({ref:e},s),{},{components:o})):n.createElement(f,a({ref:e},s))}));function m(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=o.length,a=new Array(r);a[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var d=2;d<r;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},37135:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return u}});var n=o(83117),i=o(80102),r=(o(67294),o(3905)),a=["components"],l={id:"build-import-data-from-live-dapps-into-dev",title:"Import Data from Live dApps in to Development Environment",sidebar_label:"Import Data from Live dApps in to Dev",slug:"../build-import-data-from-live-dapps-into-dev"},p=void 0,d={unversionedId:"build/build-import-data-from-live-dapps-into-dev",id:"build/build-import-data-from-live-dapps-into-dev",title:"Import Data from Live dApps in to Development Environment",description:"Sometimes during development it might be useful to load data that is from the deployed dApp on the live network to test out how the application behaves with real data or to debug an issue with the deployment.",source:"@site/docs/build/build-import-date-from-live-dapps-into-dev.md",sourceDirName:"build",slug:"/build-import-data-from-live-dapps-into-dev",permalink:"/docs/build-import-data-from-live-dapps-into-dev",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-import-date-from-live-dapps-into-dev.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1653722987,formattedLastUpdatedAt:"5/28/2022",frontMatter:{id:"build-import-data-from-live-dapps-into-dev",title:"Import Data from Live dApps in to Development Environment",sidebar_label:"Import Data from Live dApps in to Dev",slug:"../build-import-data-from-live-dapps-into-dev"},sidebar:"pnSidebar",previous:{title:"Test Visitor Node with new Identity",permalink:"/docs/build-test-visitor-node-using-different-identity"},next:{title:"Start Point Node in YNet",permalink:"/docs/build-start-point-node-default"}},s=[{value:"Import Point Social Data from YNET into Dev Environment",id:"import-point-social-data-from-ynet-into-dev-environment",children:[],level:3}],c={toc:s};function u(t){var e=t.components,o=(0,i.Z)(t,a);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes during development it might be useful to load data that is from the deployed dApp on the live network to test out how the application behaves with real data or to debug an issue with the deployment."),(0,r.kt)("h3",{id:"import-point-social-data-from-ynet-into-dev-environment"},"Import Point Social Data from YNET into Dev Environment"),(0,r.kt)("p",null,"First download posts json file from the live contract in YNET. You need to copy the PointSocial contract into your Hardhat folder and compile it and then run the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointsocial-importer")," task to download the posts from YNet. Below shows you how to do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd hardhat\ncp ../../social.point/contracts/PointSocial.sol contracts/.\nnpx hardhat compile\nnpx hardhat pointsocial-importer download 0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3 --network ynet\n")),(0,r.kt)("p",null,"This should download a timestamped data file into ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/migrations/pointsocial-TIMESTAMP.json")," (TIMESTAMP will be the current timestamp when you downloaded the file)."),(0,r.kt)("p",null,"Next, start two Point Nodes - one connected to YNET and one connected to ",(0,r.kt)("inlineCode",{parentName:"p"},"devlocal"),". Deploy a copy of Point Social to devlocal - initially this will not have any data or posts of course!"),(0,r.kt)("p",null,"Now you can import the posts into your local dev envionment. Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointsocial-importer")," script below replacing the ",(0,r.kt)("inlineCode",{parentName:"p"},"POINT_SOCIAL_CONTRACT_ADDR")," with the devlocal contract address and the ",(0,r.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," with the timestamp Point Social json file that contains all the posts from Ynet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat pointsocial-importer upload POINT_SOCIAL_CONTRACT_ADDR --migration-file ../resources/migrations/pointsocial-TIMESTAMP.json --from-port 8666 --to-port 65501 --network development\n")),(0,r.kt)("p",null,"After running this you should have a copy of all the data that is in Point Social Ynet running in your local environment. "),(0,r.kt)("p",null,"If you only want to load a subset of the data then you can modifiy the json file that is downloaded in the first step and manually remove posts."))}u.isMDXComponent=!0}}]);