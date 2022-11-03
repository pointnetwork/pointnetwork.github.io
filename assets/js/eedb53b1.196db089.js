"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[9659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"point_chain/developers/json-rpc/server",id:"point_chain/developers/json-rpc/server",title:"server",description:"\x3c!--",source:"@site/docs/point_chain/developers/json-rpc/server.md",sourceDirName:"point_chain/developers/json-rpc",slug:"/point_chain/developers/json-rpc/server",permalink:"/docs/point_chain/developers/json-rpc/server",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/json-rpc/server.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{}},p={},s=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Web3 Support",id:"web3-support",level:2},{value:"HEX value encoding",id:"hex-value-encoding",level:2},{value:"Default block parameter",id:"default-block-parameter",level:2},{value:"Curl Examples Explained",id:"curl-examples-explained",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-rpc-server"},"JSON-RPC Server"),(0,r.kt)("p",null,"Learn about the JSON-RPC server to interact with the EVM."),(0,r.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eth.wiki/json-rpc/API"},"EthWiki JSON-RPC API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://geth.ethereum.org/docs/rpc/server"},"Geth JSON-RPC Server"))),(0,r.kt)("p",null,"The JSON-PRC Server provides an API that allows you to connect to the Point Chain blockchain and interact with the EVM. This gives you direct access to reading Ethereum-formatted transactions or sending them to the network which otherwise wouldn't be possible on a Cosmos chain, such as Point Chain."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.jsonrpc.org/specification"},"JSON-RPC")," is a stateless, light-weight remote procedure call (RPC) protocol. It defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over HTTP, or in many various message passing environments. It uses JSON (",(0,r.kt)("a",{parentName:"p",href:"https://www.ietf.org/rfc/rfc4627.txt"},"RFC 4627"),") as data format."),(0,r.kt)("p",null,"JSON-RPC is provided on multiple transports. Point Chain supports JSON-RPC over HTTP and WebSocket. Transports must be enabled through command-line flags or through the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml")," configuration file."),(0,r.kt)("h2",{id:"web3-support"},"Web3 Support"),(0,r.kt)("p",null,"Point Chain supports all standard web3 JSON-RPC APIs. You can find documentation for these APIs on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/json-rpc/endpoints"},(0,r.kt)("inlineCode",{parentName:"a"},"JSON-RPC Methods"))," page."),(0,r.kt)("p",null,"Ethereum JSON-RPC APIs use a name-space system. RPC methods are grouped into several categories depending on their purpose. All method names are composed of the namespace, an underscore, and the actual method name within the namespace. For example, the eth_call method resides in the eth namespace."),(0,r.kt)("p",null,"Access to RPC methods can be enabled on a per-namespace basis. Find documentation for individual namespaces in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/json-rpc/namespaces"},"Namespaces")," page."),(0,r.kt)("h2",{id:"hex-value-encoding"},"HEX value encoding"),(0,r.kt)("p",null,"At present there are two key datatypes that are passed over JSON:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"quantities")," and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"unformatted byte arrays"),".")),(0,r.kt)("p",null,"Both are passed with a hex encoding, however with different requirements to formatting."),(0,r.kt)("p",null,"When encoding quantities (integers, numbers), encode as hex, prefix with ",(0,r.kt)("inlineCode",{parentName:"p"},'"0x"'),", the most compact representation (slight exception: zero should be represented as ",(0,r.kt)("inlineCode",{parentName:"p"},'"0x0"'),"). Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x41")," (65 in decimal)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x400")," (1024 in decimal)"),(0,r.kt)("li",{parentName:"ul"},"WRONG: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x")," (should always have at least one digit - zero is ",(0,r.kt)("inlineCode",{parentName:"li"},'"0x0"'),")"),(0,r.kt)("li",{parentName:"ul"},"WRONG: ",(0,r.kt)("inlineCode",{parentName:"li"},"0x0400")," (no leading zeroes allowed)"),(0,r.kt)("li",{parentName:"ul"},"WRONG: ",(0,r.kt)("inlineCode",{parentName:"li"},"ff")," (must be prefixed ",(0,r.kt)("inlineCode",{parentName:"li"},"0x"),")")),(0,r.kt)("p",null,"When encoding unformatted data (byte arrays, account addresses, hashes, bytecode arrays), encode as hex, prefix with ",(0,r.kt)("inlineCode",{parentName:"p"},'"0x"'),", two hex digits per byte. Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x41")," (size 1, ",(0,r.kt)("inlineCode",{parentName:"li"},'"A"'),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x004200")," (size 3, ",(0,r.kt)("inlineCode",{parentName:"li"},'"\\0B\\0"'),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x")," (size 0, ",(0,r.kt)("inlineCode",{parentName:"li"},'""'),")"),(0,r.kt)("li",{parentName:"ul"},"WRONG: ",(0,r.kt)("inlineCode",{parentName:"li"},"0xf0f0f")," (must be even number of digits)"),(0,r.kt)("li",{parentName:"ul"},"WRONG: ",(0,r.kt)("inlineCode",{parentName:"li"},"004200")," (must be prefixed ",(0,r.kt)("inlineCode",{parentName:"li"},"0x"),")")),(0,r.kt)("h2",{id:"default-block-parameter"},"Default block parameter"),(0,r.kt)("p",null,"The following methods have an extra default block parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-getbalance"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getBalance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-getcode"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getCode"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-gettransactioncount"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getTransactionCount"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-getstorageat"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_getStorageAt"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/developers/json-rpc/endpoints#eth-call"},(0,r.kt)("inlineCode",{parentName:"a"},"eth_call")))),(0,r.kt)("p",null,"When requests are made that act on the state of Point Chain, the last default block parameter determines the height of the block."),(0,r.kt)("p",null,"The following options are possible for the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultBlock")," parameter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEX String")," - an integer block number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'String "earliest"')," for the earliest/genesis block"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'String "latest"')," - for the latest mined block"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'String "pending"')," - for the pending state/transactions")),(0,r.kt)("h2",{id:"curl-examples-explained"},"Curl Examples Explained"),(0,r.kt)("p",null,"The curl options below might return a response where the node complains about the content type, this is because the ",(0,r.kt)("inlineCode",{parentName:"p"},"--data")," option sets the content type to ",(0,r.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),". If your node does complain, manually set the header by placing ",(0,r.kt)("inlineCode",{parentName:"p"},'-H "Content-Type: application/json"')," at the start of the call."),(0,r.kt)("p",null,"The examples also do not include the URL/IP & port combination which must be the last argument given to curl e.x. ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:8545")))}d.isMDXComponent=!0}}]);