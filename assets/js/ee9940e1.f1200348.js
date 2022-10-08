"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[1368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"point_chain/developers/clients",id:"point_chain/developers/clients",title:"clients",description:"\x3c!--",source:"@site/docs/point_chain/developers/clients.md",sourceDirName:"point_chain/developers",slug:"/point_chain/developers/clients",permalink:"/docs/point_chain/developers/clients",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/clients.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1665224220,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{}},s={},d=[{value:"Cosmos gRPC",id:"cosmos-grpc",level:2},{value:"Cosmos gRPC-Gateway (HTTP REST)",id:"cosmos-grpc-gateway-http-rest",level:3},{value:"Ethereum JSON-RPC",id:"ethereum-json-rpc",level:2},{value:"Ethereum Websocket",id:"ethereum-websocket",level:2},{value:"Tendermint Websocket",id:"tendermint-websocket",level:2},{value:"List of Tendermint Events",id:"list-of-tendermint-events",level:3},{value:"Example",id:"example",level:3},{value:"CLI",id:"cli",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"point-chain-clients"},"Point Chain Clients"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Learn about all the available services for clients")),(0,r.kt)("p",null,"The Point Chain supports different clients in order to support Cosmos and Ethereum transactions\nand queries:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Port"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cosmos ",(0,r.kt)("a",{parentName:"strong",href:"#cosmos-grpc"},"gRPC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Query or send Point Chain transactions using gRPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"9090"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cosmos REST (",(0,r.kt)("a",{parentName:"strong",href:"#cosmos-grpc-gateway"},"gRPC-Gateway"),")")),(0,r.kt)("td",{parentName:"tr",align:null},"Query or send Point Chain transactions using an HTTP RESTful API"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"9091"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Ethereum ",(0,r.kt)("a",{parentName:"strong",href:"#ethereum-json-rpc"},"JSON-RPC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Query Ethereum-formatted transactions and blocks or send Ethereum txs using JSON-RPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8545"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Ethereum ",(0,r.kt)("a",{parentName:"strong",href:"#ethereum-websocket"},"Websocket"))),(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to Ethereum logs and events emitted in smart contracts."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8586"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tendermint ",(0,r.kt)("a",{parentName:"strong",href:"#tendermint-rpc"},"RPC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to Ethereum logs and events emitted in smart contracts."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"26657"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Tendermint ",(0,r.kt)("a",{parentName:"strong",href:"#tendermint-websocket"},"Websocket"))),(0,r.kt)("td",{parentName:"tr",align:null},"Query transactions, blocks, consensus state, broadcast transactions, etc."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"26657"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Command Line Interface (",(0,r.kt)("a",{parentName:"strong",href:"#cli"},"CLI"),")")),(0,r.kt)("td",{parentName:"tr",align:null},"Query or send Point Chain transactions using your Terminal or Console."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,r.kt)("h2",{id:"cosmos-grpc"},"Cosmos gRPC"),(0,r.kt)("p",null,"Point Chain exposes gRPC endpoints for all the integrated Cosmos SDK modules. This makes it easier for\nwallets and block explorers to interact with the Proof-of-Stake logic and native Cosmos transactions and queries."),(0,r.kt)("h3",{id:"cosmos-grpc-gateway-http-rest"},"Cosmos gRPC-Gateway (HTTP REST)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://grpc-ecosystem.github.io/grpc-gateway/"},"gRPC-Gateway")," reads a gRPC service definition and\ngenerates a reverse-proxy server which translates RESTful JSON API into gRPC. With gRPC-Gateway,\nusers can use REST to interact the Cosmos gRPC service."),(0,r.kt)("h2",{id:"ethereum-json-rpc"},"Ethereum JSON-RPC"),(0,r.kt)("p",null,"Point Chain supports most of the standard ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/json-rpc/server"},"JSON-RPC APIs")," to connect with existing Ethereum-compatible web3 tooling."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out the list of supported JSON-RPC API ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/json-rpc/endpoints"},"endpoints")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/json-rpc/namespaces"},"namespaces"),".")),(0,r.kt)("h2",{id:"ethereum-websocket"},"Ethereum Websocket"),(0,r.kt)("p",null,"Then, start a websocket subscription with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashrocket/ws"},(0,r.kt)("inlineCode",{parentName:"a"},"ws"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# connect to tendermint websocet at port 8546 as defined above\nws ws://localhost:8546/\n\n# subscribe to new Ethereum-formatted block Headers\n> {"id": 1, "method": "eth_subscribe", "params": ["newHeads", {}]}\n< {"jsonrpc":"2.0","result":"0x44e010cb2c3161e9c02207ff172166ef","id":1}\n')),(0,r.kt)("h2",{id:"tendermint-websocket"},"Tendermint Websocket"),(0,r.kt)("p",null,"Tendermint Core provides a Websocket connection to subscribe or unsubscribe to Tendermint ABCI events."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more info about the how to subscribe to events, please refer to the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/v0.34/tendermint-core/subscription.html"},"Tendermint documentation"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "subscribe",\n    "id": "0",\n    "params": {\n        "query": "tm.event=\'<event_value>\' AND eventType.eventAttribute=\'<attribute_value>\'"\n    }\n}\n')),(0,r.kt)("h3",{id:"list-of-tendermint-events"},"List of Tendermint Events"),(0,r.kt)("p",null,"The main events you can subscribe to are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NewBlock"),": Contains ",(0,r.kt)("inlineCode",{parentName:"li"},"events")," triggered during ",(0,r.kt)("inlineCode",{parentName:"li"},"BeginBlock")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"EndBlock"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tx"),": Contains ",(0,r.kt)("inlineCode",{parentName:"li"},"events")," triggered during ",(0,r.kt)("inlineCode",{parentName:"li"},"DeliverTx")," (i.e. transaction processing)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ValidatorSetUpdates"),": Contains validator set updates for the block.")),(0,r.kt)("p",null,"List of all Tendermint event keys:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Event Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Categories"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to a specific event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tm.event"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to a specific transaction"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tx.hash"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to transactions at a specific block height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"tx.height"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Index ",(0,r.kt)("inlineCode",{parentName:"td"},"BeginBlock")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Endblock")," events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"block.height"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to ABCI ",(0,r.kt)("inlineCode",{parentName:"td"},"BeginBlock")," events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"begin_block"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subscribe to ABCI ",(0,r.kt)("inlineCode",{parentName:"td"},"EndBlock")," events"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"end_block"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))))),(0,r.kt)("p",null,"Below is a list of values that you can use to subscribe for the ",(0,r.kt)("inlineCode",{parentName:"p"},"tm.event")," type:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Event Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Categories"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New block"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewBlock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New block header"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewBlockHeader"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New Byzantine Evidence"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewEvidence"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New transaction"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Tx"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Validator set updated"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ValidatorSetUpdates"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"block"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block sync status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"BlockSyncStatus"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lock"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Lock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New consensus round"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"NewRound"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polka"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Polka"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relock"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Relock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"State sync status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"StateSyncStatus"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout propose"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"TimeoutPropose"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout wait"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"TimeoutWait"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unlock"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Unlock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Block is valid"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"ValidBlock"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Consensus vote"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Vote"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consensus"))))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ws ws://localhost:26657/websocket\n> { "jsonrpc": "2.0", "method": "subscribe", "params": ["tm.event=\'ValidatorSetUpdates\'"], "id": 1 }\n')),(0,r.kt)("p",null,"Example response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 0,\n    "result": {\n        "query": "tm.event=\'ValidatorSetUpdates\'",\n        "data": {\n            "type": "tendermint/event/ValidatorSetUpdates",\n            "value": {\n              "validator_updates": [\n                {\n                  "address": "09EAD022FD25DE3A02E64B0FE9610B1417183EE4",\n                  "pub_key": {\n                    "type": "tendermint/PubKeyEd25519",\n                    "value": "ww0z4WaZ0Xg+YI10w43wTWbBmM3dpVza4mmSQYsd0ck="\n                  },\n                  "voting_power": "10",\n                  "proposer_priority": "0"\n                }\n              ]\n            }\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("p",null,"Users can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," binary to interact directly with an Point Chain node\nthough the CLI."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udc49 To use the CLI, you will need to provide a Tendermint RPC address for the ",(0,r.kt)("inlineCode",{parentName:"p"},"--node")," flag.\nLook for a publicly available addresses for testnet and mainnet in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/connect"},"Quick Connect")," page.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transactions"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd tx")),(0,r.kt)("p",{parentName:"li"},"  The list of available commands, as of ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0"),", are:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Available Commands:\n  authz               Authorization transactions subcommands\n  bank                Bank transaction subcommands\n  broadcast           Broadcast transactions generated offline\n  crisis              Crisis transactions subcommands\n  decode              Decode a binary encoded transaction string\n  distribution        Distribution transactions subcommands\n  encode              Encode transactions generated offline\n  erc20               erc20 subcommands\n  evidence            Evidence transaction subcommands\n  evm                 evm transactions subcommands\n  feegrant            Feegrant transactions subcommands\n  gov                 Governance transactions subcommands\n  ibc                 IBC transaction subcommands\n  ibc-transfer        IBC fungible token transfer transaction subcommands\n  multisign           Generate multisig signatures for transactions generated offline\n  multisign-batch     Assemble multisig transactions in batch from batch signatures\n  sign                Sign a transaction generated offline\n  sign-batch          Sign transaction batch files\n  slashing            Slashing transaction subcommands\n  staking             Staking transaction subcommands\n  validate-signatures validate transactions signatures\n  vesting             Vesting transaction subcommands\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Queries"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd query")),(0,r.kt)("p",{parentName:"li"},"The list of available commands, as of ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0"),", are:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Available Commands:\n  account                  Query for account by address\n  auth                     Querying commands for the auth module\n  authz                    Querying commands for the authz module\n  bank                     Querying commands for the bank module\n  block                    Get verified data for a the block at given height\n  claims                   Querying commands for the claims module\n  distribution             Querying commands for the distribution module\n  epochs                   Querying commands for the epochs module\n  erc20                    Querying commands for the erc20 module\n  evidence                 Query for evidence by hash or for all (paginated) submitted evidence\n  evm                      Querying commands for the evm module\n  feegrant                 Querying commands for the feegrant module\n  feemarket                Querying commands for the fee market module\n  gov                      Querying commands for the governance module\n  ibc                      Querying commands for the IBC module\n  ibc-transfer             IBC fungible token transfer query subcommands\n  incentives               Querying commands for the incentives module\n  inflation                Querying commands for the inflation module\n  params                   Querying commands for the params module\n  recovery                 Querying commands for the recovery module\n  slashing                 Querying commands for the slashing module\n  staking                  Querying commands for the staking module\n  tendermint-validator-set Get the full tendermint validator set at given height\n  tx                       Query for a transaction by hash, "<addr>/<seq>" combination or comma-separated signatures in a committed block\n  txs                      Query for paginated transactions that match a set of events\n  upgrade                  Querying commands for the upgrade module\n  vesting                  Querying commands for the vesting module\n')))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note:")," When querying Ethereum transactions versus Cosmos transactions, the transaction hashes are different.\nWhen querying Ethereum transactions, users need to use event query.\nHere's an example with the CLI:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://localhost:26657/tx_search?query=ethereum_tx.ethereumTxHash%3D0x8d43464891fac6c113e809e14dff1a3e608eae124d629799e42ca0e36562d9d7&prove=false&page=1&per_page=30&order_by=asc" -H "accept: application/json"\n'))))}p.isMDXComponent=!0}}]);