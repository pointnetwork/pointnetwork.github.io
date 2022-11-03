"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[2176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Run a node",sidebar_label:"Run a node"},i="Run a Node",l={unversionedId:"point_chain/validators/quickstart/run_node",id:"point_chain/validators/quickstart/run_node",title:"Run a node",description:"Configure and run an Point Chain node",source:"@site/docs/point_chain/validators/quickstart/run_node.md",sourceDirName:"point_chain/validators/quickstart",slug:"/point_chain/validators/quickstart/run_node",permalink:"/docs/point_chain/validators/quickstart/run_node",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/quickstart/run_node.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Run a node",sidebar_label:"Run a node"},sidebar:"pnSidebar",previous:{title:"Installation",permalink:"/docs/point_chain/validators/quickstart/installation"},next:{title:"PointD",permalink:"/docs/point_chain/validators/quickstart/binary"}},s={},p=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Automated deployment",id:"automated-deployment",level:2},{value:"Manual deployment",id:"manual-deployment",level:2},{value:"Start node",id:"start-node",level:2},{value:"Key Management",id:"key-management",level:2},{value:"Keyring backend options",id:"keyring-backend-options",level:3},{value:"Enable Tracing",id:"enable-tracing",level:2},{value:"Clearing data from chain",id:"clearing-data-from-chain",level:2},{value:"Reset Data",id:"reset-data",level:3},{value:"Delete Data",id:"delete-data",level:3},{value:"Recording Transactions Per Second (TPS)",id:"recording-transactions-per-second-tps",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-node"},"Run a Node"),(0,r.kt)("p",null,"Configure and run an Point Chain node"),(0,r.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/quickstart/installation"},"Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/quickstart/binary"},(0,r.kt)("inlineCode",{parentName:"a"},"pointd")))),(0,r.kt)("h2",{id:"automated-deployment"},"Automated deployment"),(0,r.kt)("p",null,"Run the local node by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"init.sh")," script in the base directory of the repository."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The script below will remove any pre-existing binaries installed. Use the manual deploy if you want\nto keep your binaries and configuration files.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./init.sh\n")),(0,r.kt)("h2",{id:"manual-deployment"},"Manual deployment"),(0,r.kt)("p",null,"The instructions for setting up a brand new full node from scratch are the the same as running a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/developers/localnet/single_node#manual-localnet"},"single node local testnet"),"."),(0,r.kt)("h2",{id:"start-node"},"Start node"),(0,r.kt)("p",null,"To start your node, just type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pointd start --json-rpc.enable=true --json-rpc.api="eth,web3,net"\n')),(0,r.kt)("h2",{id:"key-management"},"Key Management"),(0,r.kt)("p",null,"To run a node with the same key every time: replace ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd keys add $KEY")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"./init.sh")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "your mnemonic here" | pointd keys add $KEY --recover\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Point Chain currently only supports 24 word mnemonics.")),(0,r.kt)("p",null,"You can generate a new key/mnemonic with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys add $KEY\n")),(0,r.kt)("p",null,"To export your point key as an Ethereum private key (for use with ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/users/wallets/metamask"},"Metamask")," for example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys unsafe-export-eth-key $KEY\n")),(0,r.kt)("p",null,"For more about the available key commands, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys -h\n")),(0,r.kt)("h3",{id:"keyring-backend-options"},"Keyring backend options"),(0,r.kt)("p",null,"The instructions above include commands to use ",(0,r.kt)("inlineCode",{parentName:"p"},"test")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"keyring-backend"),". This is an unsecured\nkeyring that doesn't require entering a password and should not be used in production. Otherwise,\nPoint Chain supports using a file or OS keyring backend for key storage. To create and use a file\nstored key instead of defaulting to the OS keyring, add the flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--keyring-backend file")," to any\nrelevant command and the password prompt will occur through the command line. This can also be saved\nas a CLI config option with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd config keyring-backend file\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about the Keyring and its backend options, click ",(0,r.kt)("a",{parentName:"p",href:"./../../users/keys/keyring"},"here"),".")),(0,r.kt)("h2",{id:"enable-tracing"},"Enable Tracing"),(0,r.kt)("p",null," To enable tracing when running the node, modify the last line of the ",(0,r.kt)("inlineCode",{parentName:"p"},"init.sh")," script to be the following command, where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$TRACER")," is the EVM tracer type to collect execution traces from the EVM transaction execution (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"json|struct|access_list|markdown"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"$TRACESTORE")," is the output file which contains KVStore tracing (eg. ",(0,r.kt)("inlineCode",{parentName:"li"},"store.txt"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start --evm.tracer $TRACER --tracestore $TRACESTORE --pruning=nothing $TRACE --log_level $LOGLEVEL --minimum-gas-prices=0.0001apoint --json-rpc.api eth,txpool,personal,net,debug,web3\n")),(0,r.kt)("h2",{id:"clearing-data-from-chain"},"Clearing data from chain"),(0,r.kt)("h3",{id:"reset-data"},"Reset Data"),(0,r.kt)("p",null,"Alternatively, you can ",(0,r.kt)("strong",{parentName:"p"},"reset")," the blockchain database, remove the node's address book files, and reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," to the genesis state."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you are running a ",(0,r.kt)("strong",{parentName:"p"},"validator node"),", always be careful when doing ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd unsafe-reset-all"),". You should never use this command if you are not switching ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-id"),".")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),": Make sure that every node has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". ",(0,r.kt)("strong",{parentName:"p"},"Do not")," copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to double sign!")),(0,r.kt)("p",null,"First, remove the outdated files and reset the data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.pointd/config/addrbook.json $HOME/.pointd/config/genesis.json\npointd tendermint unsafe-reset-all --home $HOME/.pointd\n")),(0,r.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded."),(0,r.kt)("h3",{id:"delete-data"},"Delete Data"),(0,r.kt)("p",null,"Data for the pointd binary should be stored at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pointd"),", respectively by default. To ",(0,r.kt)("strong",{parentName:"p"},"delete")," the existing binaries and configuration, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/.pointd\n")),(0,r.kt)("p",null,"To clear all data except key storage (if keyring backend chosen) and then you can rerun the full node installation commands from above to start the node again."),(0,r.kt)("h2",{id:"recording-transactions-per-second-tps"},"Recording Transactions Per Second (TPS)"),(0,r.kt)("p",null,"In order to get a progressive value of the transactions per second, we use Prometheus to return the values."),(0,r.kt)("p",null,"The Prometheus exporter runs at address http://localhost:8877 so please add this\nsection to your ",(0,r.kt)("a",{parentName:"p",href:"https://opencensus.io/codelabs/prometheus/#1"},"Prometheus installation")," config.yaml file like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval: 10s\n\n  external_labels:\n    monitor: 'point-chain'\n\nscrape_configs:\n  - job_name: 'point-chain'\n\n    scrape_interval: 10s\n\n    static_configs:\n      - targets: ['localhost:8877']\n")),(0,r.kt)("p",null,"and then run Prometheus like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"prometheus --config.file=prom_config.yaml\n")),(0,r.kt)("p",null,"and then visit the Prometheus dashboard at http://localhost:9090/ then navigate to the expression area and enter the following expression"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"rate(pointd_transactions_processed[1m])\n")),(0,r.kt)("p",null,"which will show the rate of transactions processed."))}c.isMDXComponent=!0}}]);