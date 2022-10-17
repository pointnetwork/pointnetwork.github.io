"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[3239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"point_chain/developers/tools/hardhat",id:"point_chain/developers/tools/hardhat",title:"hardhat",description:"\x3c!--",source:"@site/docs/point_chain/developers/tools/hardhat.md",sourceDirName:"point_chain/developers/tools",slug:"/point_chain/developers/tools/hardhat",permalink:"/docs/point_chain/developers/tools/hardhat",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/tools/hardhat.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1666012974,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{}},s={},p=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Create Hardhat Project",id:"create-hardhat-project",level:2},{value:"Deploying a Smart Contract",id:"deploying-a-smart-contract",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hardhat-deploying-a-smart-contract"},"Hardhat: Deploying a Smart Contract"),(0,r.kt)("p",null,"Learn how to deploy a simple Solidity-based smart contract to Point Chain using the Hardhat environment"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a flexible development environment for building Ethereum-based smart contracts. It is designed with integrations and extensibility in mind"),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Before proceeding, you need to install Node.js (we'll use v16.x) and the npm package manager. You can download directly from ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," or in your terminal:"),(0,r.kt)("p",null,":::: tabs\n::: tab Ubuntu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -\n\nsudo apt install -y nodejs\n")),(0,r.kt)("p",null,":::\n::: tab MacOS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# You can use homebrew (https://docs.brew.sh/Installation)\n$ brew install node\n\n# Or you can use nvm (https://github.com/nvm-sh/nvm)\n$ nvm install node\n")),(0,r.kt)("p",null,":::\n::::"),(0,r.kt)("p",null,"You can verify that everything is installed correctly by querying the version for each package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ node -v\n...\n\n$ npm -v\n...\n")),(0,r.kt)("h2",{id:"create-hardhat-project"},"Create Hardhat Project"),(0,r.kt)("p",null,"To create a new project, navigate to your project directory and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ npx hardhat\n\n888    888                      888 888               888\n888    888                      888 888               888\n888    888                      888 888               888\n8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888\n888    888     "88b 888P"  d88" 888 888 "88b     "88b 888\n888    888 .d888888 888    888  888 888  888 .d888888 888\n888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.\n888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888\n\n\ud83d\udc77 Welcome to Hardhat v2.9.3 \ud83d\udc77\u200d\n\n? What do you want to do? \u2026\n  Create a basic sample project\n\u276f Create an advanced sample project\n  Create an advanced sample project that uses TypeScript\n  Create an empty hardhat.config.js\n  Quit\n')),(0,r.kt)("p",null,"Following the prompts should create a new project structure in your directory. Consult the ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/config/"},"Hardhat config page")," for a list of configuration options to specify in ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),". Most importantly, you should set the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultNetwork")," entry to point to your desired JSON-RPC network:"),(0,r.kt)("p",null,":::: tabs\n::: tab Local Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  defaultNetwork: "local",\n  networks: {\n    hardhat: {\n    },\n    local: {\n      url: "http://localhost:8545/",\n      accounts: [privateKey1, privateKey2, ...]\n    }\n  },\n  ...\n}\n')),(0,r.kt)("p",null,":::\n::: tab Testnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  defaultNetwork: "testnet",\n  networks: {\n    hardhat: {\n    },\n    testnet: {\n      url: "http://xnet-uranus-1.point.space/",\n      accounts: [privateKey1, privateKey2, ...]\n    }\n  },\n  ...\n}\n')),(0,r.kt)("p",null,":::\n::::"),(0,r.kt)("p",null,"To ensure you are targeting the correct network, you can query for a list of accounts available to you from your default network provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat accounts\n0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266\n0x70997970C51812dc3A010C7d01b50e0d17dc79C8\n0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC\n0x90F79bf6EB2c4f870365E785982E1f101E93b906\n...\n")),(0,r.kt)("h2",{id:"deploying-a-smart-contract"},"Deploying a Smart Contract"),(0,r.kt)("p",null,"You will see that a default smart contract, written in Solidity, has already been provided under ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts/Greeter.sol"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'pragma solidity ^0.8.0;\n\nimport "hardhat/console.sol";\n\ncontract Greeter {\n    string private greeting;\n\n    constructor(string memory _greeting) {\n        console.log("Deploying a Greeter with greeting:", _greeting);\n        greeting = _greeting;\n    }\n\n    function greet() public view returns (string memory) {\n        return greeting;\n    }\n\n    function setGreeting(string memory _greeting) public {\n        console.log("Changing greeting from \'%s\' to \'%s\'", greeting, _greeting);\n        greeting = _greeting;\n    }\n}\n')),(0,r.kt)("p",null,"This contract allows you to set and query a string ",(0,r.kt)("inlineCode",{parentName:"p"},"greeting"),". Hardhat also provides a script to deploy smart contracts to a target network; this can be invoked via the following command, targeting your default network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run scripts/deploy.js\n")),(0,r.kt)("p",null,"Hardhat also lets you manually specify a target network via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--network <your-network>")," flag:"),(0,r.kt)("p",null,":::: tabs\n::: tab Local Node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run --network http://localhost:8545/ scripts/deploy.js\n")),(0,r.kt)("p",null,":::\n::: tab Testnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx hardhat run --network http://xnet-uranus-1.point.space/ scripts/deploy.js\n")),(0,r.kt)("p",null,":::\n::::"),(0,r.kt)("p",null,"Finally, try running a Hardhat test:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat test\nCompiling 1 file with 0.8.4\nCompilation finished successfully\n\n\n  Greeter\nDeploying a Greeter with greeting: Hello, world!\nChanging greeting from 'Hello, world!' to 'Hola, mundo!'\n    \u2713 Should return the new greeting once it's changed (803ms)\n\n\n  1 passing (805ms)\n")))}d.isMDXComponent=!0}}]);