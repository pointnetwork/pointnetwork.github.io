"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[7140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,y=p["".concat(d,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"build-using-hardhat-console",title:"Hardhat Console",sidebar_label:"Using Hardhat Console",slug:"../build-using-hardhat-console"},i=void 0,l={unversionedId:"build/build-using-hardhat-console",id:"build/build-using-hardhat-console",title:"Hardhat Console",description:"Start Hardhat Console",source:"@site/docs/build/build-hardhat-console.md",sourceDirName:"build",slug:"/build-using-hardhat-console",permalink:"/docs/build-using-hardhat-console",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-hardhat-console.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667471981,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"build-using-hardhat-console",title:"Hardhat Console",sidebar_label:"Using Hardhat Console",slug:"../build-using-hardhat-console"},sidebar:"pnSidebar",previous:{title:"Point Routes Json File Explained",permalink:"/docs/build-routes-json-file-explained"},next:{title:"File Upload using Point CLI",permalink:"/docs/build-file-upload-cli"}},d={},c=[{value:"Start Hardhat Console",id:"start-hardhat-console",level:2},{value:"Get the Signer Account",id:"get-the-signer-account",level:2},{value:"Load the Identtiy Contract",id:"load-the-identtiy-contract",level:3},{value:"Interact with the Identity Contract",id:"interact-with-the-identity-contract",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"start-hardhat-console"},"Start Hardhat Console"),(0,o.kt)("p",null,"If you want to start a hardhat console run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd hardhat\nnpx hardhat console --network development\n")),(0,o.kt)("p",null,"You can connect to different networks by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--network")," option."),(0,o.kt)("h2",{id:"get-the-signer-account"},"Get the Signer Account"),(0,o.kt)("p",null,"The signer account in development network will be ",(0,o.kt)("inlineCode",{parentName:"p"},"0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048"),". If you connect to Ynet then it will be the account that is represented by the key you have in your local ",(0,o.kt)("inlineCode",{parentName:"p"},".point")," folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"account = await ethers.getSigner();\naccount.address // 0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048\n(await ethers.provider.getBalance(account.address)).toString() // yPOINT balance\n")),(0,o.kt)("h3",{id:"load-the-identtiy-contract"},"Load the Identtiy Contract"),(0,o.kt)("p",null,"Then you can interact with the deployed Point contracts. In development the Identity contract should always be deployed to ",(0,o.kt)("inlineCode",{parentName:"p"},"0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d")," so you can get a deployed contract instance like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'id = await ethers.getContractAt("Identity", "0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d")\nid.address // 0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d\n')),(0,o.kt)("h3",{id:"interact-with-the-identity-contract"},"Interact with the Identity Contract"),(0,o.kt)("p",null,"Assuming you have already ",(0,o.kt)("a",{parentName:"p",href:"./build-zapp-dev-environment-direct-install#deploy-an-example-zapp"},"deployed Point Social")," to your development environment you can run the following in the Hardhat console to get the deployed Point Social contract address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"await id.ikvGet('social', 'zweb/contracts/address/PointSocial')\n")))}u.isMDXComponent=!0}}]);