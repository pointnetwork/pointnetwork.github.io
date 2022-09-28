"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[153],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(n),p=s,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},39683:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(83117),s=n(80102),i=(n(67294),n(3905)),o=["components"],r={title:"Gas and Fees",sidebar_label:"Gas and Fees"},l="Gas and Fees",c={unversionedId:"point_chain/users/basics/gas",id:"point_chain/users/basics/gas",title:"Gas and Fees",description:"Learn about the differences between Gas and Fees in Ethereum and Cosmos.",source:"@site/docs/point_chain/users/basics/gas.md",sourceDirName:"point_chain/users/basics",slug:"/point_chain/users/basics/gas",permalink:"/docs/point_chain/users/basics/gas",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/basics/gas.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1664355522,formattedLastUpdatedAt:"9/28/2022",frontMatter:{title:"Gas and Fees",sidebar_label:"Gas and Fees"},sidebar:"pnSidebar",previous:{title:"Tokens",permalink:"/docs/point_chain/users/basics/tokens"},next:{title:"Metamask",permalink:"/docs/point_chain/users/wallets/metamask"}},d=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",children:[],level:2},{value:"Cosmos <code>Gas</code>",id:"cosmos-gas",children:[],level:2},{value:"Matching EVM Gas consumption",id:"matching-evm-gas-consumption",children:[{value:"<code>AnteHandler</code>",id:"antehandler",children:[],level:3}],level:2},{value:"Gas Refunds",id:"gas-refunds",children:[],level:2},{value:"0 Fee Transactions",id:"0-fee-transactions",children:[],level:2},{value:"Gas estimation",id:"gas-estimation",children:[],level:2}],u={toc:d};function h(e){var t=e.components,n=(0,s.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gas-and-fees"},"Gas and Fees"),(0,i.kt)("p",null,"Learn about the differences between ",(0,i.kt)("inlineCode",{parentName:"p"},"Gas")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Fees")," in Ethereum and Cosmos."),(0,i.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/basics/gas-fees.html"},"Cosmos SDK Gas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/gas/"},"Ethereum Gas"))),(0,i.kt)("p",null,"The concept of Gas represents the amount of computational effort required to execute specific operations on the state machine."),(0,i.kt)("p",null,"Gas was created on Ethereum to disallow the EVM (Ethereum Virtual Machine) from running infinite\nloops by allocating a small amount of monetary value into the system. A unit of gas, usually in the\nform of a fraction of the native coin, is consumed for every operation on the EVM and requires a\nuser to pay for these operations. These operations consist in state transitions such as sending a\ntransaction or calling a contract."),(0,i.kt)("p",null,"Exactly like Ethereum, Cosmos utilizes the concept of gas and this is how Cosmos tracks the resource\nusage of operations during execution. Operations on Cosmos are represented as read or writes done to the chain's store."),(0,i.kt)("p",null,"In Cosmos, a fee is calculated and charged to the user during a message execution. This fee is\ncalculated from the sum of all gas consumed in a message execution. So, the fee is equivalent to the gas multiplied by the gas price."),(0,i.kt)("p",null,"In both networks, gas is used to make sure that operations do not require an excess amount of\ncomputational power to complete and as a way to deter bad-acting users from spamming the network."),(0,i.kt)("h2",{id:"cosmos-gas"},"Cosmos ",(0,i.kt)("inlineCode",{parentName:"h2"},"Gas")),(0,i.kt)("p",null,"In the Cosmos SDK, gas is tracked in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockGasMeter"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GasMeter"),": keeps track of the gas consumed during executions that lead to state transitions. It is reset on every transaction execution."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BlockGasMeter"),": keeps track of the gas consumed in a block and enforces that the gas does not go over a predefined limit. This limit is defined in the Tendermint consensus parameters and can be changed via governance parameter change proposals.")),(0,i.kt)("p",null,"More information regarding gas in Cosmos SDK can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/basics/gas-fees.html"},"here"),"."),(0,i.kt)("h2",{id:"matching-evm-gas-consumption"},"Matching EVM Gas consumption"),(0,i.kt)("p",null,"Point Chain is an EVM-compatible chain that supports Ethereum Web3 tooling. For this reason, gas\nconsumption must be equitable with other EVMs, most importantly Ethereum."),(0,i.kt)("p",null,"The main difference between EVM and Cosmos state transitions, is that the EVM uses a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/blob/master/params/protocol_params.go"},"gas table")," for each OPCODE, whereas Cosmos uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"GasConfig")," that charges gas for each CRUD operation by setting a flat and per-byte cost for accessing the database."),(0,i.kt)("p",null,"In order to match the gas consumed by the EVM, the gas consumption logic from the SDK is ignored, and instead the gas consumed is calculated by subtracting the state transition leftover gas plus refund from the gas limit defined on the message."),(0,i.kt)("p",null,"To ignore the SDK gas consumption, we reset the transaction ",(0,i.kt)("inlineCode",{parentName:"p"},"GasMeter")," count to 0 and manually set it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"gasUsed")," value computed by the EVM module at the end of the execution."),(0,i.kt)("h3",{id:"antehandler"},(0,i.kt)("inlineCode",{parentName:"h3"},"AnteHandler")),(0,i.kt)("p",null,"The Cosmos SDK ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/basics/gas-fees.html#antehandler"},(0,i.kt)("inlineCode",{parentName:"a"},"AnteHandler")),"\nperforms basic checks prior to transaction execution. These checks are usually signature\nverification, transaction field validation, transaction fees, etc."),(0,i.kt)("p",null,"Regarding gas consumption and fees, the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," checks that the user has enough balance to\ncover for the tx cost (amount plus fees) as well as checking that the gas limit defined in the\nmessage is greater or equal than the computed intrinsic gas for the message."),(0,i.kt)("h2",{id:"gas-refunds"},"Gas Refunds"),(0,i.kt)("p",null,"In the EVM, gas can be specified prior to execution. The totality of the gas specified is consumed at the beginning of the execution (during the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," step) and the remaining gas is refunded back to\nthe user if any gas is left over after the execution. Additionally the EVM can also define gas to be refunded back to the user but those will be capped to a fraction of the used gas depending on the fork/version being used."),(0,i.kt)("h2",{id:"0-fee-transactions"},"0 Fee Transactions"),(0,i.kt)("p",null,"In Cosmos, a minimum gas price is not enforced by the ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," as the ",(0,i.kt)("inlineCode",{parentName:"p"},"min-gas-prices")," is\nchecked against the local node/validator. In other words, the minimum fees accepted are determined\nby the validators of the network, and each validator can specify a different minimum value for their fees.\nThis potentially allows end users to submit 0 fee transactions if there is at least one single\nvalidator that is willing to include transactions with ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," gas price in their blocks proposed."),(0,i.kt)("p",null,"For this same reason, in Point Chain it is possible to send transactions with ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," fees for transaction\ntypes other than the ones defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"evm")," module. EVM module transactions cannot have ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," fees\nas gas is required inherently by the EVM. This check is done by the EVM transactions stateless validation\n(i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"ValidateBasic"),") function as well as on the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"AnteHandler")," defined by Point Chain."),(0,i.kt)("h2",{id:"gas-estimation"},"Gas estimation"),(0,i.kt)("p",null,"Ethereum provides a JSON-RPC endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_estimateGas")," to help users set up a correct gas limit in their transactions."),(0,i.kt)("p",null,"Unfortunately, we cannot make use of the SDK ",(0,i.kt)("inlineCode",{parentName:"p"},"tx simulation")," for gas estimation because the pre-check in the Ante Handlers would require a valid signature, and the sender balance to be enough to pay for the gas. But in Ethereum, this endpoint can be called without specifying any sender address."),(0,i.kt)("p",null,"For that reason, a specific query API ",(0,i.kt)("inlineCode",{parentName:"p"},"EstimateGas")," is implemented in Point Chain. It will apply the transaction against the current block/state and perform a binary search in order to find the optimal gas value to return to the user (the same transaction will be applied over and over until we find the minimum gas needed before it fails). The reason we need to use a binary search is that the gas required for the\ntransaction might be higher than the value returned by the EVM after applying the transaction, so we need to try until we find the optimal value."),(0,i.kt)("p",null,"A cache context will be used during the whole execution to avoid changes be persisted in the state."))}h.isMDXComponent=!0}}]);