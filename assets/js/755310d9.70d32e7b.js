"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2941],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,u=m["".concat(d,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37970:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={title:"Testnet",sidebar_label:"Testnet"},d="Join a Testnet",l={unversionedId:"point_chain/validators/testnet",id:"point_chain/validators/testnet",title:"Testnet",description:"This document outlines the steps to join an existing testnet",source:"@site/docs/point_chain/validators/testnet.md",sourceDirName:"point_chain/validators",slug:"/point_chain/validators/testnet",permalink:"/docs/point_chain/validators/testnet",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/testnet.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1663588940,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Testnet",sidebar_label:"Testnet"},sidebar:"pnSidebar",previous:{title:"Join Mainnet",permalink:"/docs/point_chain/validators/mainnet"},next:{title:"Validator Security",permalink:"/docs/point_chain/validators/security/"}},p=[{value:"Pick a Testnet",id:"pick-a-testnet",children:[],level:2},{value:"Install <code>pointd</code>",id:"install-pointd",children:[{value:"Save Chain ID",id:"save-chain-id",children:[],level:3}],level:2},{value:"Initialize Node",id:"initialize-node",children:[],level:2},{value:"Genesis &amp; Seeds",id:"genesis--seeds",children:[{value:"Copy the Genesis File",id:"copy-the-genesis-file",children:[],level:3},{value:"Add Seed Nodes",id:"add-seed-nodes",children:[],level:3},{value:"Add Persistent Peers",id:"add-persistent-peers",children:[],level:3}],level:2},{value:"Run a Testnet Validator",id:"run-a-testnet-validator",children:[],level:2},{value:"Start testnet",id:"start-testnet",children:[],level:2},{value:"Upgrading Your Node",id:"upgrading-your-node",children:[{value:"Reset Data",id:"reset-data",children:[],level:3},{value:"Restart",id:"restart",children:[],level:3}],level:2},{value:"Share your Peer",id:"share-your-peer",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"join-a-testnet"},"Join a Testnet"),(0,o.kt)("p",null,"This document outlines the steps to join an existing testnet"),(0,o.kt)("h2",{id:"pick-a-testnet"},"Pick a Testnet"),(0,o.kt)("p",null,"You specify the network you want to join by setting the ",(0,o.kt)("strong",{parentName:"p"},"genesis file")," and ",(0,o.kt)("strong",{parentName:"p"},"seeds"),". If you need more information about past networks, check our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain-config"},"networks repo"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Testnet Chain ID"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Site"),(0,o.kt)("th",{parentName:"tr",align:null},"Status"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"point_10731-1")),(0,o.kt)("td",{parentName:"tr",align:null},"Uranus Testnet"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/pointnetwork/point-chain-config/tree/main/testnet-xNet-Uranus-1"},"Uranus")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Live"))))),(0,o.kt)("h2",{id:"install-pointd"},"Install ",(0,o.kt)("inlineCode",{parentName:"h2"},"pointd")),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/quickstart/installation"},"installation")," document to install the Point Chain binary ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you have the right version of ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd")," installed."))),(0,o.kt)("h3",{id:"save-chain-id"},"Save Chain ID"),(0,o.kt)("p",null,"We recommend saving the testnet ",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," into your ",(0,o.kt)("inlineCode",{parentName:"p"},"pointd"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"client.toml"),". This will make it so you do not have to manually pass in the ",(0,o.kt)("inlineCode",{parentName:"p"},"chain-id")," flag for every CLI command."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the Official ",(0,o.kt)("a",{parentName:"p",href:"./../users/technical_concepts/chain_id"},"Chain IDs")," for reference."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd config chain-id point_10731-1\n")),(0,o.kt)("h2",{id:"initialize-node"},"Initialize Node"),(0,o.kt)("p",null,"We need to initialize the node to create all the necessary validator and node configuration files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd init <your_custom_moniker> --chain-id point_10731-1\n")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable."))),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," command creates your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd")," (i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME"),") directory with subfolders ",(0,o.kt)("inlineCode",{parentName:"p"},"config/")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"data/"),".\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory, the most important files for configuration are ",(0,o.kt)("inlineCode",{parentName:"p"},"app.toml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),"."),(0,o.kt)("h2",{id:"genesis--seeds"},"Genesis & Seeds"),(0,o.kt)("h3",{id:"copy-the-genesis-file"},"Copy the Genesis File"),(0,o.kt)("p",null,"Check the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain-config/blob/main/testnet-xNet-Uranus-1/genesis.json"},(0,o.kt)("inlineCode",{parentName:"a"},"archive"))," and copy it over to the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," directory: ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/genesis.json"),". This is a genesis file with the chain-id and genesis accounts balances."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install -y unzip wget\nwget  -O ~/.pointd/config/genesis.json https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/testnet-xNet-Uranus-1/genesis.json\n")),(0,o.kt)("p",null,"Then verify the correctness of the genesis configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd validate-genesis\n")),(0,o.kt)("h3",{id:"add-seed-nodes"},"Add Seed Nodes"),(0,o.kt)("p",null,"Your node needs to know how to find ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#peers"},"peers"),". You'll need to add healthy ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#seed"},"seed nodes")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.pointd/config/config.toml"),". The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain-config"},(0,o.kt)("inlineCode",{parentName:"a"},"point-chaing-config"))," repo contains links to some seed nodes."),(0,o.kt)("p",null,"Edit the file located in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/config.toml")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"seeds")," to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'#######################################################\n###           P2P Configuration Options             ###\n#######################################################\n[p2p]\n\n# ...\n\n# Comma separated list of seed nodes to connect to\nseeds = "<node-id>@<ip>:<p2p port>"\n')),(0,o.kt)("p",null,"You can use the following code to get seeds from the repo and add it to your config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'SEEDS=`curl -sL https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/testnet-xNet-Uranus-1/seeds.txt | awk \'{print $1}\' | paste -s -d, -`\nsed -i.bak -e "s/^seeds =.*/seeds = \\"$SEEDS\\"/" ~/.pointd/config/config.toml\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on seeds and peers, you can the Tendermint ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/p2p/peer.html"},"P2P documentation"),"."))),(0,o.kt)("h3",{id:"add-persistent-peers"},"Add Persistent Peers"),(0,o.kt)("p",null,"We can set the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#persistent-peer"},(0,o.kt)("inlineCode",{parentName:"a"},"persistent_peers"))," field in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/config.toml")," to specify peers that your node will maintain persistent connections with."),(0,o.kt)("p",null,"A list of available persistent peers is also available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#find-peers")," channel in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/DkH6zxCXWz"},"Point Chain Discord"),". You can get a random 10 entries from the ",(0,o.kt)("inlineCode",{parentName:"p"},"peers.txt")," file in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PEERS")," variable by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"PEERS=`curl -sL https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/testnet-xNet-Uranus-1/peers.txt | sort -R | head -n 10 | awk '{print $1}' | paste -s -d, -`\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"sed")," to include them into the configuration. You can also add them manually:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$PEERS\\"/" ~/.pointd/config/config.toml\n')),(0,o.kt)("h2",{id:"run-a-testnet-validator"},"Run a Testnet Validator"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more details on how to run your validator, follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/setup/run_validator"},"these")," instructions."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pointd tx staking create-validator \\\n  --amount=1000000000000apoint \\\n  --pubkey=$(pointd tendermint show-validator) \\\n  --moniker="PointWhale" \\\n  --chain-id=<chain_id> \\\n  --commission-rate="0.10" \\\n  --commission-max-rate="0.20" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1" \\\n  --gas="auto" \\\n  --gas-prices="0.025apoint" \\\n  --from=<key_name>\n')),(0,o.kt)("h2",{id:"start-testnet"},"Start testnet"),(0,o.kt)("p",null,"The final step is to ",(0,o.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/quickstart/run_node#start-node"},"start the nodes"),". Once enough voting power (+2/3) from the genesis validators is up-and-running, the testnet will start producing blocks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")),(0,o.kt)("h2",{id:"upgrading-your-node"},"Upgrading Your Node"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet version."))),(0,o.kt)("h3",{id:"reset-data"},"Reset Data"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If the version <new_version> you are upgrading to is not breaking from the previous one, you ",(0,o.kt)("strong",{parentName:"p"},"should not")," reset the data. If this is the case you can skip to ",(0,o.kt)("a",{parentName:"p",href:"#restart"},"Restart")))),(0,o.kt)("p",null,"First, remove the outdated files and reset the data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.pointd/config/addrbook.json $HOME/.pointd/config/genesis.json\npointd tendermint unsafe-reset-all --home $HOME/.pointd\n")),(0,o.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure that every node has a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". Do not copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,o.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to double sign."))),(0,o.kt)("h3",{id:"restart"},"Restart"),(0,o.kt)("p",null,"To restart your node, just type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")),(0,o.kt)("h2",{id:"share-your-peer"},"Share your Peer"),(0,o.kt)("p",null,"You can share your peer to posting it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#find-peers")," channel in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/DkH6zxCXWz"},"Point Discord"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To get your Node ID use"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tendermint show-node-id\n")))))}m.isMDXComponent=!0}}]);