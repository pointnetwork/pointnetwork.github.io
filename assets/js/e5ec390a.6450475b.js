"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7811],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=d(n),y=r,m=s["".concat(l,".").concat(y)]||s[y]||c[y]||p;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var d=2;d<p;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},23140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var o=n(83117),r=n(80102),p=(n(67294),n(3905)),i=["components"],a={id:"build-deploy-zapp",title:"Deploy dApp to Point Network",sidebar_label:"Deploy dApp to Point Network",slug:"../build-deploy-zapp"},l=void 0,d={unversionedId:"build/build-deploy-zapp",id:"build/build-deploy-zapp",title:"Deploy dApp to Point Network",description:"First follow the steps in the dApp Developer Guide to get up and running.",source:"@site/docs/build/build-deploy-zapp.md",sourceDirName:"build",slug:"/build-deploy-zapp",permalink:"/docs/build-deploy-zapp",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-deploy-zapp.md",tags:[],version:"current",lastUpdatedBy:"Amaury Hernandez-Aguila",lastUpdatedAt:1657614270,formattedLastUpdatedAt:"7/12/2022",frontMatter:{id:"build-deploy-zapp",title:"Deploy dApp to Point Network",sidebar_label:"Deploy dApp to Point Network",slug:"../build-deploy-zapp"},sidebar:"pnSidebar",previous:{title:"Point Network dapp Developers Guide",permalink:"/docs/build-zapp-developer-guide"},next:{title:"Point Network Upgradable Zapps",permalink:"/docs/build-upgradable-zapps"}},u=[],c={toc:u};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"First follow the steps in the ",(0,p.kt)("a",{parentName:"p",href:"./build-zapp-developer-guide"},"dApp Developer Guide")," to get up and running."),(0,p.kt)("p",null,"Once you are ready to share your amazing new dApp to the world, you can deploy it to YNet You can do so as follows:"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Stop all your locally running services - Point Network, Blockchain, Arlocal etc (you can use the alias ",(0,p.kt)("inlineCode",{parentName:"p"},"point-dev-stop"),").")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Download and install the ",(0,p.kt)("a",{parentName:"p",href:"https://pointnetwork.io/download"},"Point Network ALPHA"),". This will step you through the process of creating your own mnemonic keys and you will also register your identity on YNet. Be sure to register the Identity that you want for your dApp name e.g. ",(0,p.kt)("inlineCode",{parentName:"p"},"MyNewdApp")," (replace with your dApp name).")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Now exit the Alpha application and return to your cloned pointnetwork repo")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Start the Point Node in YNet mode from the cloned pointnetwork repo folder by running ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run build && npm run start"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Open the Point Browser - which connects to the Point Node that is now connected in YNET. You can run the point browser by entering the ",(0,p.kt)("inlineCode",{parentName:"p"},"pointSDK")," folder and running ",(0,p.kt)("inlineCode",{parentName:"p"},"point-browser")," alias.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Now run the deploy script for your dApp like so (while in the pointnetwork repo directory). NOTE: if you don't have your own dapp to deploy yet then follow the steps in our",(0,p.kt)("a",{parentName:"p",href:"./build-zapp-developer-guide"},"dApp Developer Guide")," first and then come back here:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},"./point deploy ../mydapps/mynewdapp.point --contracts\n")),(0,p.kt)("p",{parentName:"li"},"Since your Point Node is connected to YNET your dApp will be deployed to YNET using your Identity that you have registered earlier.")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"Once the deployment is complete you can open your new dApp in YNET. You can share the dApp url (e.g. ",(0,p.kt)("a",{parentName:"p",href:"https://mynewdapp.point"},"https://mynewdapp.point"),") to anyone you like and they can open the dApp in Point Network!"))))}s.isMDXComponent=!0}}]);