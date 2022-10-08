"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[1278],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(t),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const o={},l=void 0,r={unversionedId:"point_chain/developers/localnet/single_node",id:"point_chain/developers/localnet/single_node",title:"single_node",description:"\x3c!--",source:"@site/docs/point_chain/developers/localnet/single_node.md",sourceDirName:"point_chain/developers/localnet",slug:"/point_chain/developers/localnet/single_node",permalink:"/docs/point_chain/developers/localnet/single_node",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/localnet/single_node.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1665224220,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{}},s={},d=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Automated Localnet (script)",id:"automated-localnet-script",level:2},{value:"Manual Localnet",id:"manual-localnet",level:2},{value:"Initialize the chain",id:"initialize-the-chain",level:3},{value:"Genesis Procedure",id:"genesis-procedure",level:3},{value:"Adding Genesis Accounts",id:"adding-genesis-accounts",level:3},{value:"Collecting <code>gentx</code>",id:"collecting-gentx",level:3},{value:"Run Testnet",id:"run-testnet",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"single-node"},"Single Node"),(0,i.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./../../validators/quickstart/installation"},"Install Binary"))),(0,i.kt)("h2",{id:"automated-localnet-script"},"Automated Localnet (script)"),(0,i.kt)("p",null,"You can customize the local testnet script by changing values for convenience for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# customize the name of your key, the chain-id, moniker of the node, keyring backend, and log level\nKEY="mykey"\nCHAINID="point_10731-4"\nMONIKER="localtestnet"\nKEYRING="test"\nLOGLEVEL="info"\n\n\n# Allocate genesis accounts (cosmos formatted addresses)\npointd add-genesis-account $KEY 100000000000000000000000000apoint --keyring-backend $KEYRING\n\n# Sign genesis transaction\npointd gentx $KEY 1000000000000000000000apoint --keyring-backend $KEYRING --chain-id $CHAINID\n')),(0,i.kt)("p",null,"The default configuration will generate a single validator localnet with the chain-id\n",(0,i.kt)("inlineCode",{parentName:"p"},"pointd-1")," and one predefined account (",(0,i.kt)("inlineCode",{parentName:"p"},"mykey"),") with some allocated funds at the genesis."),(0,i.kt)("p",null,"You can start the local chain using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"init.sh\n")),(0,i.kt)("h2",{id:"manual-localnet"},"Manual Localnet"),(0,i.kt)("p",null,"This guide helps you create a single validator node that runs a network locally for testing and other development related uses."),(0,i.kt)("h3",{id:"initialize-the-chain"},"Initialize the chain"),(0,i.kt)("p",null,"Before actually running the node, we need to initialize the chain, and most importantly its genesis file. This is done with the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," subcommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$MONIKER=testing\n$KEY=mykey\n$CHAINID="point_10731-4"\n\n# The argument $MONIKER is the custom username of your node, it should be human-readable.\npointd init $MONIKER --chain-id=$CHAINID\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can ",(0,i.kt)("a",{parentName:"p",href:"./../../validators/quickstart/binary#configuring-the-node"},"edit")," this ",(0,i.kt)("inlineCode",{parentName:"p"},"moniker")," later by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," file.")),(0,i.kt)("p",null,"The command above creates all the configuration files needed for your node and validator to run, as well as a default genesis file, which defines the initial state of the network. All these ",(0,i.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/quickstart/binary#configuring-the-node"},"configuration files")," are in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.pointd")," by default, but you can overwrite the location of this folder by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--home")," flag."),(0,i.kt)("h3",{id:"genesis-procedure"},"Genesis Procedure"),(0,i.kt)("h3",{id:"adding-genesis-accounts"},"Adding Genesis Accounts"),(0,i.kt)("p",null,"Before starting the chain, you need to populate the state with at least one account using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/point_chain/users/keys/keyring"},"keyring"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys add my_validator\n")),(0,i.kt)("p",null,"Once you have created a local account, go ahead and grant it some ",(0,i.kt)("inlineCode",{parentName:"p"},"apoint")," tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd add-genesis-account my_validator 10000000000apoint\n")),(0,i.kt)("p",null,"Now that your account has some tokens, you need to add a validator to your chain."),(0,i.kt)("p",null," For this guide, you will add your local node (created via the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command above) as a validator of your chain. Validators can be declared before a chain is first started via a special transaction included in the genesis file called a ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a gentx\n# NOTE: this command lets you set the number of coins.\n# Make sure this account has some coins with the genesis.app_state.staking.params.bond_denom denom\npointd add-genesis-account my_validator 1000000000stake,10000000000apoint\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx")," does three things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Registers the ",(0,i.kt)("inlineCode",{parentName:"li"},"validator")," account you created as a validator operator account (i.e. the account that controls the validator)."),(0,i.kt)("li",{parentName:"ol"},"Self-delegates the provided ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," of staking tokens."),(0,i.kt)("li",{parentName:"ol"},"Link the operator account with a Tendermint node pubkey that will be used for signing blocks. If no ",(0,i.kt)("inlineCode",{parentName:"li"},"--pubkey")," flag is provided, it defaults to the local node pubkey created via the ",(0,i.kt)("inlineCode",{parentName:"li"},"pointd init")," command above.")),(0,i.kt)("p",null,"For more information on ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx"),", use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd gentx --help\n")),(0,i.kt)("h3",{id:"collecting-gentx"},"Collecting ",(0,i.kt)("inlineCode",{parentName:"h3"},"gentx")),(0,i.kt)("p",null,"By default, the genesis file do not contain any ",(0,i.kt)("inlineCode",{parentName:"p"},"gentxs"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx")," is a transaction that bonds\nstaking token present in the genesis file under ",(0,i.kt)("inlineCode",{parentName:"p"},"accounts")," to a validator, essentially creating a\nvalidator at genesis. The chain will start as soon as more than 2/3rds of the validators (weighted\nby voting power) that are the recipient of a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx")," come online after ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis_time"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"gentx")," can be added manually to the genesis file, or via the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Add the gentx to the genesis file\npointd collect-gentxs\n")),(0,i.kt)("p",null,"This command will add all the ",(0,i.kt)("inlineCode",{parentName:"p"},"gentxs")," stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/gentx")," to the genesis file."),(0,i.kt)("h3",{id:"run-testnet"},"Run Testnet"),(0,i.kt)("p",null,"Finally, check the correctness of the ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd validate-genesis\n")),(0,i.kt)("p",null,"Now that everything is set up, you can finally start your node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To check all the available customizable options when running the node, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag.")),(0,i.kt)("p",null,"You should see blocks come in."),(0,i.kt)("p",null,"The previous command allow you to run a single node. This is enough for the next section on interacting with this node, but you may wish to run multiple nodes at the same time, and see how consensus happens between them."),(0,i.kt)("p",null,"You can then stop the node using ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),"."))}p.isMDXComponent=!0}}]);