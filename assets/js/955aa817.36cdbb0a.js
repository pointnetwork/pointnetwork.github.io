"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"point_chain/developers/guides/query_balances",id:"point_chain/developers/guides/query_balances",title:"query_balances",description:"\x3c!--",source:"@site/docs/point_chain/developers/guides/query_balances.md",sourceDirName:"point_chain/developers/guides",slug:"/point_chain/developers/guides/query_balances",permalink:"/docs/point_chain/developers/guides/query_balances",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/guides/query_balances.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1666012974,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{}},p={},s=[{value:"<code>pointd</code> &amp; Tendermint RPC",id:"pointd--tendermint-rpc",level:2},{value:"JSON-RPC",id:"json-rpc",level:2},{value:"gRPC",id:"grpc",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-balances"},"Query Balances"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Learn how to query balances of IBC Cosmos Coins and ERC-20s on Point Chain.")),(0,r.kt)("p",null,"This guide will cover the following query methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pointd--tendermint-rpc"},(0,r.kt)("inlineCode",{parentName:"a"},"pointd")," & Tendermint RPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#json-rpc"},"JSON-RPC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#grpc"},"gRPC"))),(0,r.kt)("h2",{id:"pointd--tendermint-rpc"},(0,r.kt)("inlineCode",{parentName:"h2"},"pointd")," & Tendermint RPC"),(0,r.kt)("p",null,"Upon ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/quickstart/installation"},"installation")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/quickstart/binary"},"configuration")," of the Point Chain Daemon, developers can query account balances using ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," with the following CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ pointd query bank balances $POINTADDRESS --count-total=$COUNTTOTAL --height=$HEIGHT --output=$OUTPUT --node=$NODE\nbalances:\n- amount: "1000000000000000000"\n  denom: apoint\n- amount: "100000"\n  denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518\npagination:\n  next_key: null\n  total: "0"\n')),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$POINTADDRESS")," is the Point Chain address with balances of interest (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"point1..."),")."),(0,r.kt)("li",{parentName:"ul"},"(optional) ",(0,r.kt)("inlineCode",{parentName:"li"},"$COUNTTOTAL")," counts the total number of records in all balances to query for."),(0,r.kt)("li",{parentName:"ul"},"(optional) ",(0,r.kt)("inlineCode",{parentName:"li"},"$HEIGHT")," is the specific height to query state at (can error if node is pruning state)."),(0,r.kt)("li",{parentName:"ul"},"(optional) ",(0,r.kt)("inlineCode",{parentName:"li"},"$OUTPUT")," is the output format (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"text"),").")),(0,r.kt)("p",null,"Details of non-native currencies (ie. not ",(0,r.kt)("inlineCode",{parentName:"p"},"apoint"),") can be queried with the following CLI command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pointd query erc20 token-pair $DENOM --node=$NODE --height=$HEIGHT --output=$OUTPUT\ntoken_pair:\n  contract_owner: OWNER_MODULE\n  denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518\n  enabled: true\n  erc20_address: 0xFA3C22C069B9556A4B2f7EcE1Ee3B467909f4864\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"$DENOM")," is the denomination of the coin (eg. ",(0,r.kt)("inlineCode",{parentName:"p"},"ibc/ED07A3391A1..."),")."),(0,r.kt)("h2",{id:"json-rpc"},"JSON-RPC"),(0,r.kt)("p",null,"Developers can query account balances of ",(0,r.kt)("inlineCode",{parentName:"p"},"apoint")," using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/json-rpc/endpoints#ethgetbalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance"))," JSON-RPC method in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/"},(0,r.kt)("inlineCode",{parentName:"a"},"curl")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"eth_getBalance","params":[`$ETHADDRESS`, `$BLOCK`],"id":1}\' -H "Content-Type: application/json" $NODE\n\n# Result\n{"jsonrpc":"2.0","id":1,"result":"0x36354d5575577c8000"}\n')),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ETHADDRESS")," is the Etherum hex-address the balance is to be queried from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$BLOCK")," is the block number or block hash (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},'"0x0"'),").\nThe reasoning for this parameter is due to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1898.md"},"EIP-1898"),"."),(0,r.kt)("li",{parentName:"ul"},"(optional if running local node) ",(0,r.kt)("inlineCode",{parentName:"li"},"$NODE")," is the JSON-RPC node information is requested from.")),(0,r.kt)("p",null,"Developers can also query account balances of ",(0,r.kt)("inlineCode",{parentName:"p"},"x/erc20"),"-module registered coins using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/json-rpc/endpoints#ethcall"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_call"))," JSON-RPC method in conjunction with ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se/"},(0,r.kt)("inlineCode",{parentName:"a"},"curl")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ncurl -X POST --data \'{"jsonrpc":"2.0","method":"eth_call","params":[{"from":`SENDERCONTRACTADDRESS`, "to":`ERCCONTRACTADDRESS`, "data":`$DATA`}, `$BLOCK`],"id":1}\'  -H "Content-Type: application/json" $NODE\n\n# Result\n{"jsonrpc":"2.0","id":1,"result":"0x"}\n')),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$SENDERCONTRACTADDRESS")," is the Ethereum hex-address this smart contract call is sent from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$ERCCONTRACTADDRESS")," is the Ethereum hex-address of the ERC-20 contract corresponding to the coin denomination being queried."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$DATA")," is the hash of the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20"},(0,r.kt)("inlineCode",{parentName:"a"},"balanceof"))," method signature and encoded parameters.\n",(0,r.kt)("inlineCode",{parentName:"li"},"balanceOf")," is a required method in every ERC-20 contract, and the encoded parameter is the address which is having its balance queried. For additional information, see the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.soliditylang.org/en/v0.8.13/abi-spec.html"},"Ethereum Contract ABI"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$BLOCK")," is the block number or block hash (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},'"0x0"'),").\nThe reasoning for this parameter is due to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1898.md"},"EIP-1898"),"."),(0,r.kt)("li",{parentName:"ul"},"(optional if running local node) ",(0,r.kt)("inlineCode",{parentName:"li"},"$NODE")," is the JSON-RPC node information is requested from (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://eth.bd.evmos.org:8545"),").")),(0,r.kt)("h2",{id:"grpc"},"gRPC"),(0,r.kt)("p",null,"Developers can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},(0,r.kt)("inlineCode",{parentName:"a"},"grpcurl"))," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"AllBalances")," endpoint to query account balance by address for all denominations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Request\ngrpcurl $OUTPUT -d \'{"address":`$POINTADDRESS`}\' $NODE cosmos.bank.v1beta1.Query/AllBalances\n\n# Result\n{\n  "balances": [\n    {\n      "denom": "stake",\n      "amount": "1000000000"\n    }\n  ],\n  "pagination": {\n    "total": "1"\n  }\n}\n')),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$POINTADDRESS")," is the Point Chain address with balances of interest (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},'"point1..."'),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$NODE")," is the Cosmos gRPC node information is requested from (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://grpc.bd.evmos.org:9090"),")."),(0,r.kt)("li",{parentName:"ul"},"(optional) ",(0,r.kt)("inlineCode",{parentName:"li"},"$OUTPUT")," is the output format (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"plaintext"),").")),(0,r.kt)("p",null,"State can also be queried using gRPC within a Go program. The idea is to create a gRPC connection, then use the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protobuf"),"-generated client code to query the gRPC server."))}d.isMDXComponent=!0}}]);