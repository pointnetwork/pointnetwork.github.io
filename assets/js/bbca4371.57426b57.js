"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3099],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31421:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),o=["components"],s={title:"Pending State",sidebar_label:"Pending State"},c="Pending State",l={unversionedId:"point_chain/users/technical_concepts/pending_state",id:"point_chain/users/technical_concepts/pending_state",title:"Pending State",description:"Learn how Point Chain handles pending state queries.",source:"@site/docs/point_chain/users/technical_concepts/pending_state.md",sourceDirName:"point_chain/users/technical_concepts",slug:"/point_chain/users/technical_concepts/pending_state",permalink:"/docs/point_chain/users/technical_concepts/pending_state",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/technical_concepts/pending_state.md",tags:[],version:"current",lastUpdatedBy:"sergevar",lastUpdatedAt:1664017622,formattedLastUpdatedAt:"9/24/2022",frontMatter:{title:"Pending State",sidebar_label:"Pending State"},sidebar:"pnSidebar",previous:{title:"Encoding",permalink:"/docs/point_chain/users/technical_concepts/encoding"},next:{title:"Validator's Overview",permalink:"/docs/point_chain/validators/overview"}},p=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",children:[],level:2},{value:"Point Chain vs Ethereum",id:"point-chain-vs-ethereum",children:[],level:2},{value:"Pending State Queries",id:"pending-state-queries",children:[{value:"JSON-RPC Calls on Pending Transactions",id:"json-rpc-calls-on-pending-transactions",children:[],level:3}],level:2}],d={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pending-state"},"Pending State"),(0,a.kt)("p",null,"Learn how Point Chain handles pending state queries."),(0,a.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/master/tendermint-core/mempool/"},"Tendermint Mempool"))),(0,a.kt)("h2",{id:"point-chain-vs-ethereum"},"Point Chain vs Ethereum"),(0,a.kt)("p",null,"In Ethereum, pending blocks are generated as they are queued for production by miners. These pending\nblocks include pending transactions that are picked out by miners, based on the highest reward paid\nin gas. This mechanism exists as block finality is not possible on the Ethereum network. Blocks are\ncommitted with probabilistic finality, which means that transactions and blocks become less likely\nto become reverted as more time (and blocks) passes."),(0,a.kt)("p",null,'Point Chain is designed quite differently on this front as there is no concept of a "pending state".\nPoint Chain uses ',(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/"},"Tendermint Core")," BFT consensus which provides instant\nfinality for transaction. For this reason, Ethermint does not require a pending state mechanism, as\nall (if not most) of the transactions will be committed to the next block (avg. block time on Cosmos chains is ~8s). However, this causes a\nfew hiccups in terms of the Ethereum Web3-compatible queries that can be made to pending state."),(0,a.kt)("p",null,"Another significant difference with Ethereum, is that blocks are produced by validators or block producers, who include transactions from their local mempool into blocks in a\nfirst-in-first-out (FIFO) fashion. Transactions on Point Chain cannot be ordered or cherry picked out from the Tendermint node ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/mempool/"},"mempool"),"."),(0,a.kt)("h2",{id:"pending-state-queries"},"Pending State Queries"),(0,a.kt)("p",null,"Point Chain will make queries which will account for any unconfirmed transactions present in a node's\ntransaction mempool. A pending state query made will be subjective and the query will be made on the\ntarget node's mempool. Thus, the pending state will not be the same for the same query to two\ndifferent nodes."),(0,a.kt)("h3",{id:"json-rpc-calls-on-pending-transactions"},"JSON-RPC Calls on Pending Transactions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth_getbalance"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getBalance"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-gettransactioncount"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-getblocktransactioncountbynumber"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getBlockTransactionCountByNumber"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-getblockbynumber"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getBlockByNumber"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-gettransactionbyhash"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getTransactionByHash"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-gettransactionbyblockhashandindex"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_getTransactionByBlockNumberAndIndex"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-sendtransaction"},(0,a.kt)("inlineCode",{parentName:"a"},"eth_sendTransaction")))))}u.isMDXComponent=!0}}]);