"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2380],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],i={},c=void 0,u={unversionedId:"point_chain/developers/tools/truffle",id:"point_chain/developers/tools/truffle",title:"truffle",description:"\x3c!--",source:"@site/docs/point_chain/developers/tools/truffle.md",sourceDirName:"point_chain/developers/tools",slug:"/point_chain/developers/tools/truffle",permalink:"/docs/point_chain/developers/tools/truffle",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/tools/truffle.md",tags:[],version:"current",lastUpdatedBy:"sergevar",lastUpdatedAt:1664017622,formattedLastUpdatedAt:"9/24/2022",frontMatter:{}},s=[{value:"Install Dependencies",id:"install-dependencies",children:[],level:2},{value:"Create Truffle Project",id:"create-truffle-project",children:[],level:2},{value:"Truffle configuration",id:"truffle-configuration",children:[],level:2},{value:"Deploy contract",id:"deploy-contract",children:[],level:2},{value:"Run Truffle tests",id:"run-truffle-tests",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"truffle-deploying-a-smart-contract"},"Truffle: Deploying a Smart Contract"),(0,a.kt)("p",null,"Learn how to deploy a simple Solidity-based smart contract to Point Chain using the Truffle environment"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.trufflesuite.com/truffle"},"Truffle")," is a development framework for deploying and managing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethereum/solidity"},"Solidity")," smart contracts."),(0,a.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("p",null,"First, install the latest Truffle version on your machine globally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install truffle -g\n")),(0,a.kt)("h2",{id:"create-truffle-project"},"Create Truffle Project"),(0,a.kt)("p",null,"In this step we will create a simple counter contract. Feel free to skip this step if you already have your own compiled contract."),(0,a.kt)("p",null,"Create a new directory to host the contracts and initialize it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mkdir point-truffle\ncd point-truffle\n")),(0,a.kt)("p",null,"Initialize the Truffle suite with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle init\n")),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"contracts/Counter.sol")," containing the following contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"pragma solidity >=0.7.0 <0.9.0;\n\ncontract Counter {\n  uint256 counter = 0;\n\n  function add() public {\n    counter++;\n  }\n\n  function subtract() public {\n    counter--;\n  }\n\n  function getCounter() public view returns (uint256) {\n    return counter;\n  }\n}\n")),(0,a.kt)("p",null,"Compile the contract using the ",(0,a.kt)("inlineCode",{parentName:"p"},"compile")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle compile\n")),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"test/counter_test.js")," containing the following tests in Javascript using ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const Counter = artifacts.require(\"Counter\")\n\ncontract('Counter', accounts => {\n  const from = accounts[0]\n  let counter\n\n  before(async() => {\n    counter = await Counter.new()\n  })\n\n  it('should add', async() => {\n    await counter.add()\n    let count = await counter.getCounter()\n    assert(count == 1, `count was ${count}`)\n  })\n})\n")),(0,a.kt)("h2",{id:"truffle-configuration"},"Truffle configuration"),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"truffle-config.js")," and uncomment the ",(0,a.kt)("inlineCode",{parentName:"p"},"development")," section in ",(0,a.kt)("inlineCode",{parentName:"p"},"networks"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'    development: {\n      host: "127.0.0.1",     // Localhost (default: none)\n      port: 8545,            // Standard Ethereum port (default: none)\n      network_id: "*",       // Any network (default: none)\n    },\n')),(0,a.kt)("p",null,"This will allow your contract to connect to your Point Chain local node."),(0,a.kt)("h2",{id:"deploy-contract"},"Deploy contract"),(0,a.kt)("p",null,"In the Truffle terminal, migrate the contract using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"truffle migrate --network development\n")),(0,a.kt)("p",null,"You should see incoming deployment logs in the Point Chain daemon Terminal tab for each transaction (one to deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"Migrations.sol")," and the other to deploy ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter.sol"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ I[2020-07-15|17:35:59.934] Added good transaction                       module=mempool tx=22245B935689918D332F58E82690F02073F0453D54D5944B6D64AAF1F21974E2 res="&{CheckTx:log:\\"[]\\" gas_wanted:6721975 }" height=3 total=1\nI[2020-07-15|17:36:02.065] Executed block                               module=state height=4 validTxs=1 invalidTxs=0\nI[2020-07-15|17:36:02.068] Committed state                              module=state height=4 txs=1 appHash=76BA85365F10A59FE24ADCA87544191C2D72B9FB5630466C5B71E878F9C0A111\nI[2020-07-15|17:36:02.981] Added good transaction                       module=mempool tx=84516B4588CBB21E6D562A6A295F1F8876076A0CFF2EF1B0EC670AD8D8BB5425 res="&{CheckTx:log:\\"[]\\" gas_wanted:6721975 }" height=4 total=1\n')),(0,a.kt)("h2",{id:"run-truffle-tests"},"Run Truffle tests"),(0,a.kt)("p",null,"Now, you can run the Truffle tests using the Point Chain node using the ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ truffle test --network development\n\nUsing network 'development'.\n\n\nCompiling your contracts...\n===========================\n> Everything is up to date, there is nothing to compile.\n\n\n\n  Contract: Counter\n    \u2713 should add (5036ms)\n\n\n  1 passing (10s)\n")))}d.isMDXComponent=!0}}]);