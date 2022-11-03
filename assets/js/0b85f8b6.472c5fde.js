"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),h=o,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(c,r(r({ref:t},p),{},{components:n})):a.createElement(c,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={title:"Join Mainnet",sidebar_label:"Join Mainnet"},r="Join Mainnet",l={unversionedId:"point_chain/validators/mainnet",id:"point_chain/validators/mainnet",title:"Join Mainnet",description:"This document outlines the steps to join Mainnet by running your own node and optionally become a validator",source:"@site/docs/point_chain/validators/mainnet.md",sourceDirName:"point_chain/validators",slug:"/point_chain/validators/mainnet",permalink:"/docs/point_chain/validators/mainnet",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/mainnet.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667471981,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Join Mainnet",sidebar_label:"Join Mainnet"},sidebar:"pnSidebar",previous:{title:"State Sync",permalink:"/docs/point_chain/validators/setup/statesync"},next:{title:"Testnet",permalink:"/docs/point_chain/validators/testnet"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Mainnet",id:"mainnet",level:2},{value:"Save Chain ID",id:"save-chain-id",level:3},{value:"Initialize Node",id:"initialize-node",level:2},{value:"Genesis &amp; Seeds",id:"genesis--seeds",level:2},{value:"Copy the Genesis and Config File",id:"copy-the-genesis-and-config-file",level:3},{value:"Add Seed Nodes",id:"add-seed-nodes",level:3},{value:"Add Persistent Peers",id:"add-persistent-peers",level:3},{value:"Run the Node",id:"run-the-node",level:2},{value:"Share your Peer",id:"share-your-peer",level:2},{value:"Sending your first transaction",id:"sending-your-first-transaction",level:2},{value:"Add point network to your wallet",id:"add-point-network-to-your-wallet",level:3},{value:"Create validator address",id:"create-validator-address",level:3},{value:"Fund the validator",id:"fund-the-validator",level:3},{value:"Stake POINT and Join as a Validator",id:"stake-point-and-join-as-a-validator",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Useful commands",id:"useful-commands",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"join-mainnet"},"Join Mainnet"),(0,o.kt)("p",null,"This document outlines the steps to join Mainnet by running your own node and optionally become a validator"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"DISCLAIMER:"),' THE DOCUMENT IS PROVIDED ON "AS IS" AND \u201cAS DEVELOPED\u201d BASIS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE DOCUMENT.'),(0,o.kt)("p",{parentName:"admonition"},"Following this document and/or performing validation activities requires highly experienced DevOps engineers that possess necessary knowledge how to run validators. You are fully responsible for your interaction with validator functionality and running any type of commands, we will not and shall not be liable to you for any omissions, defects, bugs, limitations and delays in the validator functionality or any other related software."),(0,o.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f This is not the tutorial for most Point Network users! Do not attempt to run the commands from your personal computer, just in case something goes wrong!")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This document describes step-by-step instructions on joining Point-Mainnet as a validator."),(0,o.kt)("p",null,"Validators have the responsibility to keep the network operational 24/7. Do not attempt to join mainnet (",(0,o.kt)("em",{parentName:"p"},"especially")," mainnet!) if you don\u2019t have enough experience. For example, if you install it on your laptop, join as a validator, and then close the laptop, the network will penalize you for being offline by slashing your stake (+the network quality might degrade)."),(0,o.kt)("p",null,"If you have any questions, join our Discord: ",(0,o.kt)("a",{parentName:"p",href:"https://pointnetwork.io/discord"},"https://pointnetwork.io/discord")," and ask in #validators channel (in order to see #validators channel, you should add yourself a Validator role at #roles). This is the channel where we will sync our mainnet efforts and communicate with each other about what's happening."),(0,o.kt)("p",null,"point is based on Cosmos SDK (which in turn is based on Tendermint), so if you know Cosmos commands, most of them will work here too."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/security/"},"Read Validator Security")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./overview#hardware"},"Read Hardware Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./quickstart/installation"},"Install Point Node"))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Make sure you have the right version of ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"pointd")," installed.")),(0,o.kt)("h2",{id:"mainnet"},"Mainnet"),(0,o.kt)("p",null,"You need to set the ",(0,o.kt)("strong",{parentName:"p"},"genesis file")," and ",(0,o.kt)("strong",{parentName:"p"},"seeds"),". If you need more information about past networks, check our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain-config"},"configuration repo"),". The table below gives an overview of all Mainnet Chain IDs. Note that, the displayed version might differ when an active Software Upgrade proposal exists on chain."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Site"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"point_10687-1")),(0,o.kt)("td",{parentName:"tr",align:null},"Point Chain Mainnet"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/pointnetwork/point-chain-config/tree/main/mainnet-1"},"Point Chain")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Live"))))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"IMPORTANT:")," If you join mainnet as a validator make sure you follow all the ",(0,o.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/security/"},"security")," recommendations!")),(0,o.kt)("h3",{id:"save-chain-id"},"Save Chain ID"),(0,o.kt)("p",null,"We recommend saving the mainnet ",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"client.toml"),". This will make it so you do not have to manually pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," flag for every CLI command."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"See the Official ",(0,o.kt)("a",{parentName:"p",href:"./../users/technical_concepts/chain_id"},"Chain IDs")," for reference.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd config chain-id point_10687-1\n")),(0,o.kt)("h2",{id:"initialize-node"},"Initialize Node"),(0,o.kt)("p",null,"We need to initialize the node to create all the necessary validator and node configuration files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd init <your_custom_moniker> --chain-id point_10687-1\n")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.")),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," command creates your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd")," (i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME"),") directory with subfolders ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data/"),".\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory, the most important files for configuration are ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),"."),(0,o.kt)("h2",{id:"genesis--seeds"},"Genesis & Seeds"),(0,o.kt)("h3",{id:"copy-the-genesis-and-config-file"},"Copy the Genesis and Config File"),(0,o.kt)("p",null,"Download the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain-config/blob/main/mainnet-1/genesis.json"},(0,o.kt)("inlineCode",{parentName:"a"},"archive"))," and copy them over to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd/config"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/config.toml\nwget https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/genesis.json\nmv config.toml genesis.json ~/.pointd/config/\n")),(0,o.kt)("p",null,"Then verify the correctness of the genesis configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd validate-genesis\n")),(0,o.kt)("h3",{id:"add-seed-nodes"},"Add Seed Nodes"),(0,o.kt)("p",null,"Your node needs to know how to find ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#peers"},"peers"),"\nBy default the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," is configured with default seeds and peers but you can to add healthy ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#seed"},"seed nodes")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.pointd/config/config.toml"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain-config/blob/main/mainnet-1/seeds.txt"},(0,o.kt)("inlineCode",{parentName:"a"},"mainnet"))," repo contains links to some seed nodes."),(0,o.kt)("p",null,"Edit the file located in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/config.toml")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"seeds")," to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'#######################################################\n###           P2P Configuration Options             ###\n#######################################################\n[p2p]\n\n# ...\n\n# Comma separated list of seed nodes to connect to\nseeds = "<node-id>@<ip>:<p2p port>"\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more information on seeds and peers, you can the Tendermint ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/p2p/peer.html"},"P2P documentation"),".")),(0,o.kt)("h3",{id:"add-persistent-peers"},"Add Persistent Peers"),(0,o.kt)("p",null,"We can set the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain-config/blob/main/mainnet-1/peers.txt"},(0,o.kt)("inlineCode",{parentName:"a"},"persistent_peers"))," field in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/config.toml")," to specify peers that your node will maintain persistent connections with. You can retrieve them from the list of\navailable peers on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tharsis/mainnet"},(0,o.kt)("inlineCode",{parentName:"a"},"mainnet"))," repo."),(0,o.kt)("p",null,"A list of available persistent peers is also available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#find-peers")," channel in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/DkH6zxCXWz"},"Point Chain Discord"),". You can get a random 10 entries from the ",(0,o.kt)("inlineCode",{parentName:"p"},"peers.txt")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PEERS")," variable by running the following command:"),(0,o.kt)("h2",{id:"run-the-node"},"Run the Node"),(0,o.kt)("p",null,"Then run the node and wait for fully sync using bash script:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"./start.sh")," from repository root folder."),(0,o.kt)("p",null,"If you want it to also respond to the RPC commands, you can instead run:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'pointd start --json-rpc.enable=true --json-rpc.api "eth,txpool,personal,net,debug,web3"')),(0,o.kt)("p",null,'Now that the node has started, you cannot type any commands in your terminal. But thankfully, your virtual session supports several windows. So if you\'re on tmux, you can press Ctrl+b and then letter "c" to create a new tab.'),(0,o.kt)("p",null,"Then you can switch between the tabs like this: Ctrl+b and then the window ID (try window 0 where your node runs, and window 1 where you can type commands)"),(0,o.kt)("p",null,"You can run this command to see status of your node:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pointd status")),(0,o.kt)("p",null,'You will get the "latest_block_height" of your node.'),(0,o.kt)("p",null,"To see current block height of blockchain run:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'curl  http://rpc-mainnet-1.point.space:8545 -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\'')),(0,o.kt)("p",null,"The result is in hexadecimal, just convert to decimal and see how far are you from full sync."),(0,o.kt)("h2",{id:"share-your-peer"},"Share your Peer"),(0,o.kt)("p",null,"You can share your peer to posting it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#validators")," channel in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/DkH6zxCXWz"},"Point Chain Discord"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To get your Node ID use"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tendermint show-node-id\n"))),(0,o.kt)("h1",{id:"join-point-mainnet-as-a-validator"},"Join Point-Mainnet as a Validator"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more details on how to run your validator, follow the validator ",(0,o.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/setup/run_validator"},"these")," instructions.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"\ud83d\udea8 ",(0,o.kt)("strong",{parentName:"p"},"DANGER"),": ",(0,o.kt)("u",null,"Never")," create your validator keys using a ",(0,o.kt)("a",{parentName:"p",href:"./../users/keys/keyring"},(0,o.kt)("inlineCode",{parentName:"a"},"test"))," keying backend. Doing so might result in a loss of funds by making your funds remotely accessible via the ",(0,o.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," JSON-RPC endpoint."),(0,o.kt)("p",{parentName:"admonition"},"Ref: ",(0,o.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2015/08/29/security-alert-insecurely-configured-geth-can-make-funds-remotely-accessible/"},"Security Advisory: Insecurely configured geth can make funds remotely accessible"))),(0,o.kt)("h2",{id:"sending-your-first-transaction"},"Sending your first transaction"),(0,o.kt)("h3",{id:"add-point-network-to-your-wallet"},"Add point network to your wallet"),(0,o.kt)("p",null,"Now while you're waiting for the node to sync, you need to send funds to your validator address. You will need to import a custom network into your wallet, e.g. for Metamask:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Network Title: Point\nRPC URL: https://rpc-mainnet-1.point.space/\nChain ID: 10687\nSYMBOL: POINT\n")),(0,o.kt)("p",null,"More info: ",(0,o.kt)("a",{parentName:"p",href:"../users/wallets/metamask"},"Metamask")),(0,o.kt)("h3",{id:"create-validator-address"},"Create validator address"),(0,o.kt)("p",null,"Point has two wallet formats: Cosmos format, and Ethereum format. Cosmos format starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"point")," prefix, and Ethereum format starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"0x"),". Most people don't need to know about Cosmos format, but validators should have a way to change from one to another."),(0,o.kt)("p",null,"Configure your validator key:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pointd config keyring-backend file")),(0,o.kt)("p",null,"Generate a new key/mnemonic for validator: ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd keys add validatorkey --keyring-backend file"),"\nYou may want to save output somewhere because it contains your point address and other usefull information."),(0,o.kt)("p",null,"It's really important to back up the validator keys. They were generated inside ~/.pointd/config/priv_validator_key.json\nSave this file and don't share it. It's the id of your validator and you will need it for reinstallation or migration of the node"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd keys list --keyring-backend file"),", and you will see a list of keys attached to your node. Look at the one which has the name ",(0,o.kt)("inlineCode",{parentName:"p"},"validatorkey"),", and note its address (it should be in Cosmos format and start with ",(0,o.kt)("inlineCode",{parentName:"p"},"point")," prefix)."),(0,o.kt)("p",null,"(In most cases it is not needed, but if something goes wrong and if you ever want to import your validator wallet in your Metamask you will need the private key. You can get it with this command: ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd keys unsafe-export-eth-key validatorkey --keyring-backend file"),")"),(0,o.kt)("p",null,"Use this tool to convert it to Ethereum format: ",(0,o.kt)("a",{parentName:"p",href:"https://pointnetwork.io/converter.html"},"https://pointnetwork.io/converter.html")),(0,o.kt)("p",null,"This is your validator address in Ethereum format."),(0,o.kt)("h3",{id:"fund-the-validator"},"Fund the validator"),(0,o.kt)("p",null,"Finally, send enough POINT to your validator address"),(0,o.kt)("h2",{id:"stake-point-and-join-as-a-validator"},"Stake POINT and Join as a Validator"),(0,o.kt)("p",null,'Now you have to wait for the node to fully sync, because otherwise it will not "find" your address which only appears on the blockchain from the moment of the first transaction.'),(0,o.kt)("p",null,"You can use state sync to speed up synchronization: ",(0,o.kt)("a",{parentName:"p",href:"./setup/statesync"},"State Sync")),(0,o.kt)("p",null,"Once the node is fully synced, and you got some POINT to stake, check your balance in the node:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pointd query bank balances <pointaddress>")),(0,o.kt)("p",null,"If you have enough balance stake your assets and check the transaction:"),(0,o.kt)("p",null,"Before running the command, adjust:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace <myvalidator",">"," with your own public name for your validator!"),(0,o.kt)("li",{parentName:"ul"},"Adjust commissions if you need"),(0,o.kt)("li",{parentName:"ul"},"Adjust amount to stake as much as you need (remember that the amounts are in ",(0,o.kt)("inlineCode",{parentName:"li"},"apoint")," and you need to delete 18 zeroes from the right to get to the amount of POINT)"),(0,o.kt)("li",{parentName:"ul"},"Adjust min-self-delegation (don't set it too high because if you ever have less - e.g. after being jailed - you will start unbonding)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'pointd tx staking create-validator \\\n--amount=1000000000000000000000apoint \\\n--pubkey=$(pointd tendermint show-validator) \\\n--moniker="<myvalidator>" \\\n--chain-id=point_10687-1 \\\n--commission-rate="0.10" \\\n--commission-max-rate="0.20" \\\n--commission-max-change-rate="0.01" \\\n--min-self-delegation="1" \\\n--gas="400000" \\\n--gas-prices="0.025apoint" \\\n--from=validatorkey \\\n--keyring-backend file\n')),(0,o.kt)("p",null,"(Note the amount: it's in apoint (which is 1/1e18 POINT). 1000000000000000000000apoint is 1000 POINT (when you remove 18 zeroes at the end). If you decide to adjust the amount, don't forget to adjust ",(0,o.kt)("inlineCode",{parentName:"p"},"min-self-delegation")," flag too.)"),(0,o.kt)("p",null,"You will have to provide your keystore password and approve the transaction for this command."),(0,o.kt)("p",null,"If everything works ok you will get a txhash. You can check the status of the tx: ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd query tx <txhash>")),(0,o.kt)("p",null,"Transaction receipt may contain errors, so please check if there are any or if it's live. You can use the explorer or ask the node to provide receipt."),(0,o.kt)("p",null,"If the transaction was correct you should instantly become part of the validators set. Check your pubkey first:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pointd tendermint show-validator")),(0,o.kt)("p",null,"You will see a key there, you can identify your node among other validators using that key:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pointd query tendermint-validator-set")),(0,o.kt)("p",null,"There you will find more info like your VotingPower that should be bigger than 0. Also you can check your VotingPower by running:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pointd status")),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Please post on Discord channel #validators when you succeed! ",(0,o.kt)("a",{parentName:"p",href:"https://pointnetwork.io/discord"},"https://pointnetwork.io/discord")," (in order to see #validators channel, you should add yourself a Validator role at #roles)"),(0,o.kt)("p",null,"And if you have any questions, ask in #validators channel. This is the channel where we will sync our mainnet efforts and communicate with each other about what's happening."),(0,o.kt)("p",null,"Also, check out extra documentation for validators:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./faq"},"Validator FAQ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./overview"},"Validators Overview"))),(0,o.kt)("p",null,"Share any feedback, questions, and ideas there!"),(0,o.kt)("h2",{id:"useful-commands"},"Useful commands"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"How to run the node as a service: ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@anttiturunen/running-point-validator-as-a-service-d8e4b0391540"},"https://medium.com/@anttiturunen/running-point-validator-as-a-service-d8e4b0391540"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the balance of a point-formatted address: ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd query bank balances <pointaddress>"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check if your validator is active: ",(0,o.kt)("inlineCode",{parentName:"p"},'pointd query tendermint-validator-set | grep "$(pointd tendermint show-address)"')," (if the output is non-empty, you are a validator)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"See the slashing status: ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd query slashing signing-info $(pointd tendermint show-validator)")," Jailed until year 1970 means you are not jailed!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the slashing status says you're jailed for downtime, you can unjail yourself once you're back online by first, starting the node, making sure it's synced to the last block, and then running: ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd tx slashing unjail --from=validatorkey --chain-id=point_10687-1"),". Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd status")," and ",(0,o.kt)("inlineCode",{parentName:"p"},'pointd query tendermint-validator-set | grep "$(pointd tendermint show-address)"')," to confirm you're unjailed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Halting Your Validator:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have your validator systematically and gracefully halt. You can achieve this by either setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"halt-height")," to the height at which you want your node to shutdown or by passing the ",(0,o.kt)("inlineCode",{parentName:"li"},"--halt-height")," flag to ",(0,o.kt)("inlineCode",{parentName:"li"},"pointd"),". The node will shutdown with a zero exit code at that given height after committing the block.")))))}u.isMDXComponent=!0}}]);