"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4600],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],c={title:"Architecture",sidebar_label:"Architecture"},s="Architecture",l={unversionedId:"point_chain/users/technical_concepts/architecture",id:"point_chain/users/technical_concepts/architecture",title:"Architecture",description:"Learn how Point Chain's architecture leverages the Cosmos SDK Proof-of-Stake functionality, EVM compatibility and fast-finality from Tendermint Core's BFT consensus.",source:"@site/docs/point_chain/users/technical_concepts/architecture.md",sourceDirName:"point_chain/users/technical_concepts",slug:"/point_chain/users/technical_concepts/architecture",permalink:"/docs/point_chain/users/technical_concepts/architecture",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/technical_concepts/architecture.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1664355522,formattedLastUpdatedAt:"9/28/2022",frontMatter:{title:"Architecture",sidebar_label:"Architecture"},sidebar:"pnSidebar",previous:{title:"Multisig",permalink:"/docs/point_chain/users/keys/multisig"},next:{title:"Accounts",permalink:"/docs/point_chain/users/technical_concepts/accounts"}},p=[{value:"Cosmos SDK",id:"cosmos-sdk",children:[],level:2},{value:"Tendermint Core &amp; the Application Blockchain Interface (ABCI)",id:"tendermint-core--the-application-blockchain-interface-abci",children:[],level:2},{value:"EVM module",id:"evm-module",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Learn how Point Chain's architecture leverages the Cosmos SDK Proof-of-Stake functionality, EVM compatibility and fast-finality from Tendermint Core's BFT consensus."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7"),(0,a.kt)("p",{parentName:"div"},"This documentation page is currently under work in progress."),(0,a.kt)("p",{parentName:"div"},"\ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7 \ud83d\udea7"))),(0,a.kt)("h2",{id:"cosmos-sdk"},"Cosmos SDK"),(0,a.kt)("p",null,"Point Chain enables the full composability and modularity of the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/"},"Cosmos SDK"),"."),(0,a.kt)("h2",{id:"tendermint-core--the-application-blockchain-interface-abci"},"Tendermint Core & the Application Blockchain Interface (ABCI)"),(0,a.kt)("p",null,"Tendermint consists of two chief technical components: a blockchain consensus\nengine and a generic application interface. The consensus engine, called\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/"},"Tendermint Core"),", ensures that the same transactions are recorded on every machine\nin the same order. The application interface, called the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/abci/"},"Application Blockchain Interface (ABCI)"),", enables the transactions to be processed in any programming\nlanguage."),(0,a.kt)("p",null,"Tendermint has evolved to be a general purpose blockchain consensus engine that\ncan host arbitrary application states. Since Tendermint can replicate arbitrary\napplications, it can be used as a plug-and-play replacement for the consensus\nengines of other blockchains. Point Chain is such an example of an ABCI application\nreplacing Ethereum's PoW via Tendermint's consensus engine."),(0,a.kt)("p",null,"Another example of a cryptocurrency application built on Tendermint is the Cosmos\nnetwork. Tendermint is able to decompose the blockchain design by offering a very\nsimple API (ie. the ABCI) between the application process and consensus process."),(0,a.kt)("h2",{id:"evm-module"},"EVM module"),(0,a.kt)("p",null,"Point Chain enables EVM compatibility by implementing various components that together support all the EVM state transitions while ensuring the same developer experience as Ethereum:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ethereum transaction format as a Cosmos SDK ",(0,a.kt)("inlineCode",{parentName:"li"},"Tx")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Msg")," interface"),(0,a.kt)("li",{parentName:"ul"},"Ethereum's ",(0,a.kt)("inlineCode",{parentName:"li"},"secp256k1")," curve for the Cosmos Keyring"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"StateDB")," interface for state updates and queries"),(0,a.kt)("li",{parentName:"ul"},"JSON-RPC client for interacting with the EVM")))}m.isMDXComponent=!0}}]);