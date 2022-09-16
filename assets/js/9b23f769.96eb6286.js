"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6234],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),f=o,h=c["".concat(d,".").concat(f)]||c[f]||p[f]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71855:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var i=n(83117),o=n(80102),r=(n(67294),n(3905)),a=["components"],s={id:"build-test-visitor-node-using-different-identity",title:"Test Visitor Node using a new Identity",sidebar_label:"Test Visitor Node with new Identity",slug:"../build-test-visitor-node-using-different-identity"},d=void 0,l={unversionedId:"build/build-test-visitor-node-using-different-identity",id:"build/build-test-visitor-node-using-different-identity",title:"Test Visitor Node using a new Identity",description:"Occasionally you might need more than 2 identities during testing and development. If you want to quickly have a new identity to test with temporariily then you can do so in these few simple steps.",source:"@site/docs/build/build-run-visitor-node-using-new-key.md",sourceDirName:"build",slug:"/build-test-visitor-node-using-different-identity",permalink:"/docs/build-test-visitor-node-using-different-identity",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-run-visitor-node-using-new-key.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1663321891,formattedLastUpdatedAt:"9/16/2022",frontMatter:{id:"build-test-visitor-node-using-different-identity",title:"Test Visitor Node using a new Identity",sidebar_label:"Test Visitor Node with new Identity",slug:"../build-test-visitor-node-using-different-identity"},sidebar:"pnSidebar",previous:{title:"File Upload using Point CLI",permalink:"/docs/build-file-upload-cli"},next:{title:"Import Data from Live dApps in to Dev",permalink:"/docs/build-import-data-from-live-dapps-into-dev"}},u=[{value:"Update the key file for visitor profile",id:"update-the-key-file-for-visitor-profile",children:[],level:2},{value:"Fund the account using Hardhat Console",id:"fund-the-account-using-hardhat-console",children:[],level:2},{value:"Reload the Visitor Point Browser",id:"reload-the-visitor-point-browser",children:[],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Occasionally you might need more than 2 identities during testing and development. If you want to quickly have a new identity to test with temporariily then you can do so in these few simple steps."),(0,r.kt)("h2",{id:"update-the-key-file-for-visitor-profile"},"Update the key file for visitor profile"),(0,r.kt)("p",null,"Create a new seed phrase that you want to use for development and testing. NOTE you should never use the seed phrase that you generate here in any production / mainnet environment."),(0,r.kt)("p",null,"Copy your seed phrase to the visitor profile. For example, if your visitor profile is here ",(0,r.kt)("inlineCode",{parentName:"p"},"~/workspace/pn/visitlocal")," then you would run the following command to copy a ",(0,r.kt)("inlineCode",{parentName:"p"},"newVisitor.json")," key into the visitor profile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp newVisitorKey.json ~/workspace/pn/visitlocal/keystore/key.json\n")),(0,r.kt)("h2",{id:"fund-the-account-using-hardhat-console"},"Fund the account using Hardhat Console"),(0,r.kt)("p",null,"Fund the account using Hardhat Console like so."),(0,r.kt)("p",null,"Start the console connecting to ",(0,r.kt)("inlineCode",{parentName:"p"},"development")," network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat console --network development\n")),(0,r.kt)("p",null,"If you need to get the address of the account that will be derived from the new seed phrase you added then you can run the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/blob/develop/scripts/blockchain-keys-from-phrase.js#L1"},"blockchain-keys-from-phrase.js")," script in your terminal to get that information. NOTE you need to change the path in that script to load the ",(0,r.kt)("inlineCode",{parentName:"p"},"key.json")," from the visitor profile."),(0,r.kt)("p",null,"Once you know the address of the new visitor account you want to use you can run the following in the Hardhat console (replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"newAddress")," value with the address you want to fund in your development environment)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"signer = await ethers.getSigner()\nnewAddress = '0xc9aedcd1715554817b74372ebc4dba0f298c9134'\ntx = await signer.sendTransaction({from: signer.address, to: newAddress, value: ethers.utils.parseEther('1')})\n(await ethers.provider.getBalance(newAddress)).toString() // '1000000000000000000'\n")),(0,r.kt)("h2",{id:"reload-the-visitor-point-browser"},"Reload the Visitor Point Browser"),(0,r.kt)("p",null,"Now you have funds in the new visitor account you can proceed to register the Identity for this account and it should work since the account has funds. You now have a new visitor identity to use in your development environment. This is rarely needed but useful if you want to test anything that requires more than two identities."))}c.isMDXComponent=!0}}]);