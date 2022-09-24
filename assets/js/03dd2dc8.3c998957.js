"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1278],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=c(t),h=i,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return t?a.createElement(m,l(l({ref:n},d),{},{components:t})):a.createElement(m,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},166:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),l=["components"],r={},s=void 0,c={unversionedId:"point_chain/developers/localnet/single_node",id:"point_chain/developers/localnet/single_node",title:"single_node",description:"\x3c!--",source:"@site/docs/point_chain/developers/localnet/single_node.md",sourceDirName:"point_chain/developers/localnet",slug:"/point_chain/developers/localnet/single_node",permalink:"/docs/point_chain/developers/localnet/single_node",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/developers/localnet/single_node.md",tags:[],version:"current",lastUpdatedBy:"sergevar",lastUpdatedAt:1664017622,formattedLastUpdatedAt:"9/24/2022",frontMatter:{}},d=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",children:[],level:2},{value:"Automated Localnet (script)",id:"automated-localnet-script",children:[],level:2},{value:"Manual Localnet",id:"manual-localnet",children:[{value:"Initialize the chain",id:"initialize-the-chain",children:[],level:3},{value:"Genesis Procedure",id:"genesis-procedure",children:[],level:3},{value:"Adding Genesis Accounts",id:"adding-genesis-accounts",children:[],level:3},{value:"Collecting <code>gentx</code>",id:"collecting-gentx",children:[],level:3},{value:"Run Testnet",id:"run-testnet",children:[],level:3}],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"single-node"},"Single Node"),(0,o.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./../../validators/quickstart/installation"},"Install Binary"))),(0,o.kt)("h2",{id:"automated-localnet-script"},"Automated Localnet (script)"),(0,o.kt)("p",null,"You can customize the local testnet script by changing values for convenience for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# customize the name of your key, the chain-id, moniker of the node, keyring backend, and log level\nKEY="mykey"\nCHAINID="point_10731-4"\nMONIKER="localtestnet"\nKEYRING="test"\nLOGLEVEL="info"\n\n\n# Allocate genesis accounts (cosmos formatted addresses)\npointd add-genesis-account $KEY 100000000000000000000000000apoint --keyring-backend $KEYRING\n\n# Sign genesis transaction\npointd gentx $KEY 1000000000000000000000apoint --keyring-backend $KEYRING --chain-id $CHAINID\n')),(0,o.kt)("p",null,"The default configuration will generate a single validator localnet with the chain-id\n",(0,o.kt)("inlineCode",{parentName:"p"},"pointd-1")," and one predefined account (",(0,o.kt)("inlineCode",{parentName:"p"},"mykey"),") with some allocated funds at the genesis."),(0,o.kt)("p",null,"You can start the local chain using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"init.sh\n")),(0,o.kt)("h2",{id:"manual-localnet"},"Manual Localnet"),(0,o.kt)("p",null,"This guide helps you create a single validator node that runs a network locally for testing and other development related uses."),(0,o.kt)("h3",{id:"initialize-the-chain"},"Initialize the chain"),(0,o.kt)("p",null,"Before actually running the node, we need to initialize the chain, and most importantly its genesis file. This is done with the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," subcommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$MONIKER=testing\n$KEY=mykey\n$CHAINID="point_10731-4"\n\n# The argument $MONIKER is the custom username of your node, it should be human-readable.\npointd init $MONIKER --chain-id=$CHAINID\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can ",(0,o.kt)("a",{parentName:"p",href:"./../../validators/quickstart/binary#configuring-the-node"},"edit")," this ",(0,o.kt)("inlineCode",{parentName:"p"},"moniker")," later by updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml")," file."))),(0,o.kt)("p",null,"The command above creates all the configuration files needed for your node and validator to run, as well as a default genesis file, which defines the initial state of the network. All these ",(0,o.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/quickstart/binary#configuring-the-node"},"configuration files")," are in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd")," by default, but you can overwrite the location of this folder by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--home")," flag."),(0,o.kt)("h3",{id:"genesis-procedure"},"Genesis Procedure"),(0,o.kt)("h3",{id:"adding-genesis-accounts"},"Adding Genesis Accounts"),(0,o.kt)("p",null,"Before starting the chain, you need to populate the state with at least one account using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/point_chain/users/keys/keyring"},"keyring"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys add my_validator\n")),(0,o.kt)("p",null,"Once you have created a local account, go ahead and grant it some ",(0,o.kt)("inlineCode",{parentName:"p"},"apoint")," tokens in your chain's genesis file. Doing so will also make sure your chain is aware of this account's existence:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd add-genesis-account my_validator 10000000000apoint\n")),(0,o.kt)("p",null,"Now that your account has some tokens, you need to add a validator to your chain."),(0,o.kt)("p",null," For this guide, you will add your local node (created via the ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," command above) as a validator of your chain. Validators can be declared before a chain is first started via a special transaction included in the genesis file called a ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Create a gentx\n# NOTE: this command lets you set the number of coins.\n# Make sure this account has some coins with the genesis.app_state.staking.params.bond_denom denom\npointd add-genesis-account my_validator 1000000000stake,10000000000apoint\n")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx")," does three things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Registers the ",(0,o.kt)("inlineCode",{parentName:"li"},"validator")," account you created as a validator operator account (i.e. the account that controls the validator)."),(0,o.kt)("li",{parentName:"ol"},"Self-delegates the provided ",(0,o.kt)("inlineCode",{parentName:"li"},"amount")," of staking tokens."),(0,o.kt)("li",{parentName:"ol"},"Link the operator account with a Tendermint node pubkey that will be used for signing blocks. If no ",(0,o.kt)("inlineCode",{parentName:"li"},"--pubkey")," flag is provided, it defaults to the local node pubkey created via the ",(0,o.kt)("inlineCode",{parentName:"li"},"pointd init")," command above.")),(0,o.kt)("p",null,"For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx"),", use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd gentx --help\n")),(0,o.kt)("h3",{id:"collecting-gentx"},"Collecting ",(0,o.kt)("inlineCode",{parentName:"h3"},"gentx")),(0,o.kt)("p",null,"By default, the genesis file do not contain any ",(0,o.kt)("inlineCode",{parentName:"p"},"gentxs"),". A ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx")," is a transaction that bonds\nstaking token present in the genesis file under ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," to a validator, essentially creating a\nvalidator at genesis. The chain will start as soon as more than 2/3rds of the validators (weighted\nby voting power) that are the recipient of a valid ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx")," come online after ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis_time"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"gentx")," can be added manually to the genesis file, or via the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add the gentx to the genesis file\npointd collect-gentxs\n")),(0,o.kt)("p",null,"This command will add all the ",(0,o.kt)("inlineCode",{parentName:"p"},"gentxs")," stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/gentx")," to the genesis file."),(0,o.kt)("h3",{id:"run-testnet"},"Run Testnet"),(0,o.kt)("p",null,"Finally, check the correctness of the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd validate-genesis\n")),(0,o.kt)("p",null,"Now that everything is set up, you can finally start your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To check all the available customizable options when running the node, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," flag."))),(0,o.kt)("p",null,"You should see blocks come in."),(0,o.kt)("p",null,"The previous command allow you to run a single node. This is enough for the next section on interacting with this node, but you may wish to run multiple nodes at the same time, and see how consensus happens between them."),(0,o.kt)("p",null,"You can then stop the node using ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),"."))}u.isMDXComponent=!0}}]);