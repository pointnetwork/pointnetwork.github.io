"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7140],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||s[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38002:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={id:"build-using-hardhat-console",title:"Hardhat Console",sidebar_label:"Using Hardhat Console",slug:"../build-using-hardhat-console"},c=void 0,d={unversionedId:"build/build-using-hardhat-console",id:"build/build-using-hardhat-console",title:"Hardhat Console",description:"Start Hardhat Console",source:"@site/docs/build/build-hardhat-console.md",sourceDirName:"build",slug:"/build-using-hardhat-console",permalink:"/docs/build-using-hardhat-console",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-hardhat-console.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1657079232,formattedLastUpdatedAt:"7/6/2022",frontMatter:{id:"build-using-hardhat-console",title:"Hardhat Console",sidebar_label:"Using Hardhat Console",slug:"../build-using-hardhat-console"},sidebar:"pnSidebar",previous:{title:"Point Routes Json File Explained",permalink:"/docs/build-routes-json-file-explained"},next:{title:"File Upload using Point CLI",permalink:"/docs/build-file-upload-cli"}},u=[{value:"Start Hardhat Console",id:"start-hardhat-console",children:[],level:2},{value:"Get the Signer Account",id:"get-the-signer-account",children:[{value:"Load the Identtiy Contract",id:"load-the-identtiy-contract",children:[],level:3},{value:"Interact with the Identity Contract",id:"interact-with-the-identity-contract",children:[],level:3}],level:2}],s={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"start-hardhat-console"},"Start Hardhat Console"),(0,a.kt)("p",null,"If you want to start a hardhat console run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd hardhat\nnpx hardhat console --network development\n")),(0,a.kt)("p",null,"You can connect to different networks by changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," option."),(0,a.kt)("h2",{id:"get-the-signer-account"},"Get the Signer Account"),(0,a.kt)("p",null,"The signer account in development network will be ",(0,a.kt)("inlineCode",{parentName:"p"},"0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048"),". If you connect to Ynet then it will be the account that is represented by the key you have in your local ",(0,a.kt)("inlineCode",{parentName:"p"},".point")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"account = await ethers.getSigner();\naccount.address // 0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048\n(await ethers.provider.getBalance(account.address)).toString() // yPOINT balance\n")),(0,a.kt)("h3",{id:"load-the-identtiy-contract"},"Load the Identtiy Contract"),(0,a.kt)("p",null,"Then you can interact with the deployed Point contracts. In development the Identity contract should always be deployed to ",(0,a.kt)("inlineCode",{parentName:"p"},"0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d")," so you can get a deployed contract instance like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'id = await ethers.getContractAt("Identity", "0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d")\nid.address // 0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d\n')),(0,a.kt)("h3",{id:"interact-with-the-identity-contract"},"Interact with the Identity Contract"),(0,a.kt)("p",null,"Assuming you have already ",(0,a.kt)("a",{parentName:"p",href:"./build-zapp-dev-environment-direct-install#deploy-an-example-zapp"},"deployed Point Social")," to your development environment you can run the following in the Hardhat console to get the deployed Point Social contract address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"await id.ikvGet('social', 'zweb/contracts/address/PointSocial')\n")))}p.isMDXComponent=!0}}]);