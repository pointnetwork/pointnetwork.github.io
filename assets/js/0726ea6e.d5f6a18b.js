"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6415],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6041:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Binary",sidebar_label:"Binary"},d="pointd",p={unversionedId:"point_chain/validators/quickstart/binary",id:"point_chain/validators/quickstart/binary",title:"Binary",description:"pointd is the all-in-one command-line interface. It supports wallet management, queries and transaction operations",source:"@site/docs/point_chain/validators/quickstart/binary.md",sourceDirName:"point_chain/validators/quickstart",slug:"/point_chain/validators/quickstart/binary",permalink:"/docs/point_chain/validators/quickstart/binary",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/quickstart/binary.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1664355522,formattedLastUpdatedAt:"9/28/2022",frontMatter:{title:"Binary",sidebar_label:"Binary"}},s=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",children:[],level:2},{value:"Build and Configuration",id:"build-and-configuration",children:[{value:"Using <code>pointd</code>",id:"using-pointd",children:[],level:3},{value:"Config and data directory",id:"config-and-data-directory",children:[],level:3},{value:"Configuring the Node",id:"configuring-the-node",children:[],level:3},{value:"Pruning of State",id:"pruning-of-state",children:[],level:3},{value:"Client configuration",id:"client-configuration",children:[],level:3},{value:"Options",id:"options",children:[],level:3}],level:2},{value:"Command list",id:"command-list",children:[],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pointd"},(0,r.kt)("inlineCode",{parentName:"h1"},"pointd")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," is the all-in-one command-line interface. It supports wallet management, queries and transaction operations"),(0,r.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/quickstart/installation"},"Installation"))),(0,r.kt)("h2",{id:"build-and-configuration"},"Build and Configuration"),(0,r.kt)("h3",{id:"using-pointd"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"pointd")),(0,r.kt)("p",null,"After you have obtained the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," binary, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd [command]\n")),(0,r.kt)("p",null,"Check the version you are running using"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd version\n")),(0,r.kt)("p",null,"There is also a ",(0,r.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," command available"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd -h\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also enable auto-completion with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd completion")," command. For example, at the start of a bash session, run ",(0,r.kt)("inlineCode",{parentName:"p"},". <(pointd completion)"),", and all ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," subcommands will be auto-completed."))),(0,r.kt)("h3",{id:"config-and-data-directory"},"Config and data directory"),(0,r.kt)("p",null,"By default, your config and data are stored in the folder located at the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pointd")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".                                   # ~/.pointd\n  \u251c\u2500\u2500 data/                           # Contains the databases used by the node.\n  \u2514\u2500\u2500 config/\n      \u251c\u2500\u2500 app.toml                   # Application-related configuration file.\n      \u251c\u2500\u2500 config.toml                # Tendermint-related configuration file.\n      \u251c\u2500\u2500 genesis.json               # The genesis file.\n      \u251c\u2500\u2500 node_key.json              # Private key to use for node authentication in the p2p protocol.\n      \u2514\u2500\u2500 priv_validator_key.json    # Private key to use as a validator in the consensus protocol.\n")),(0,r.kt)("p",null,"To specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," config and data storage directory; you can update it using the global flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--home <directory>")),(0,r.kt)("h3",{id:"configuring-the-node"},"Configuring the Node"),(0,r.kt)("p",null,"The Cosmos SDK automatically generates two configuration files inside ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pointd/config"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config.toml"),": used to configure the Tendermint, learn more on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/master/nodes/configuration.html"},"Tendermint's documentation"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app.toml"),": generated by the Cosmos SDK, and used to configure your app, such as state pruning strategies, telemetry, gRPC and REST servers configuration, state sync, JSON-RPC, etc.")),(0,r.kt)("p",null,"Both files are heavily commented, please refer to them directly to tweak your node."),(0,r.kt)("p",null,"One example config to tweak is the ",(0,r.kt)("inlineCode",{parentName:"p"},"minimum-gas-prices")," field inside ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml"),", which defines the minimum amount the validator node is willing to accept for processing a transaction. It is an anti spam mechanism and it will reject incoming transactions with less than the minimum gas prices."),(0,r.kt)("p",null,"If it's empty, make sure to edit the field with some value, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"10token"),", or else the node will halt on startup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},' # The minimum gas prices a validator is willing to accept for processing a\n # transaction. A transaction\'s fees must meet the minimum of any denomination\n # specified in this config (e.g. 0.25token1;0.0001token2).\n minimum-gas-prices = "0apoint"\n')),(0,r.kt)("h3",{id:"pruning-of-state"},"Pruning of State"),(0,r.kt)("p",null,"There are four strategies for pruning state. These strategies apply only to state and do not apply to block storage.\nTo set pruning, adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"pruning")," parameter in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/app.toml")," file.\nThe following pruning state settings are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"everything"),": Prune all saved states other than the current state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nothing"),": Save all states and delete nothing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default"),": Save the last 100 states and the state of every 10,000th block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"custom"),": Specify pruning settings with the ",(0,r.kt)("inlineCode",{parentName:"li"},"pruning-keep-recent"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"pruning-keep-every"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"pruning-interval")," parameters.")),(0,r.kt)("p",null,"By default, every node is in ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," mode which is the recommended setting for most environments.\nIf you would like to change your nodes pruning strategy then you must do so when the node is initialized. Passing a flag when starting ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," will always override settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.toml")," file, if you would like to change your node to the ",(0,r.kt)("inlineCode",{parentName:"p"},"everything")," mode then you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"---pruning everything")," flag when you call ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd start"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),":\nWhen you are pruning state you will not be able to query the heights that are not in your store."))),(0,r.kt)("h3",{id:"client-configuration"},"Client configuration"),(0,r.kt)("p",null,"We can view the default client config setting by using ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd config")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pointd config\n{\n "chain-id": "",\n "keyring-backend": "os",\n "output": "text",\n "node": "tcp://localhost:26657",\n "broadcast-mode": "sync"\n}\n')),(0,r.kt)("p",null,"We can make changes to the default settings upon our choices, so it allows users to set the configuration beforehand all at once, so it would be ready with the same config afterward."),(0,r.kt)("p",null,"For example, the chain identifier can be changed to ",(0,r.kt)("inlineCode",{parentName:"p"},"point_10687-1")," from a blank name by using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pointd config "chain-id" point_10687-1\npointd config\n{\n "chain-id": "point_10687-1",\n "keyring-backend": "os",\n "output": "text",\n "node": "tcp://localhost:26657",\n "broadcast-mode": "sync"\n}\n')),(0,r.kt)("p",null,"Other values can be changed in the same way."),(0,r.kt)("p",null,"Alternatively, we can directly make the changes to the config values in one place at client.toml. It is under the path of ",(0,r.kt)("inlineCode",{parentName:"p"},".pointd/config/client.toml")," in the folder where we installed pointd:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'############################################################################\n### Client Configuration ###\n\n############################################################################\n\n# The network chain ID\n\nchain-id = "point_10687-1"\n\n# The keyring\'s backend, where the keys are stored (os|file|kwallet|pass|test|memory)\n\nkeyring-backend = "os"\n\n# CLI output format (text|json)\n\noutput = "number"\n\n# <host>:<port> to Tendermint RPC interface for this chain\n\nnode = "tcp://localhost:26657"\n\n# Transaction broadcasting mode (sync|async|block)\n\nbroadcast-mode = "sync"\n')),(0,r.kt)("p",null,"After the necessary changes are made in the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.toml"),", then save. For example, if we directly change the chain-id from ",(0,r.kt)("inlineCode",{parentName:"p"},"point_10731-1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"point_10687-1"),", and output to number, it would change instantly as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'pointd config\n{\n "chain-id": "point_10687-1",\n "keyring-backend": "os",\n "output": "number",\n "node": "tcp://localhost:26657",\n "broadcast-mode": "sync"\n}\n')),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"A list of commonly used flags of ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," is listed below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--chain-id")),(0,r.kt)("td",{parentName:"tr",align:null},"Full Chain ID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--home")),(0,r.kt)("td",{parentName:"tr",align:null},"Directory for config and data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~/.pointd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--keyring-backend")),(0,r.kt)("td",{parentName:"tr",align:null},"Select keyring's backend"),(0,r.kt)("td",{parentName:"tr",align:null},'`{"os"'),(0,r.kt)("td",{parentName:"tr",align:null},'"file"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output")),(0,r.kt)("td",{parentName:"tr",align:null},"Output format"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'"text"')))),(0,r.kt)("h2",{id:"command-list"},"Command list"),(0,r.kt)("p",null,"A list of commonly used ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," commands. You can obtain the full list by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd -h")," command."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Subcommands (example)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keys")),(0,r.kt)("td",{parentName:"tr",align:null},"Keys management"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"list"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"show"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"add"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"add  --recover"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"delete"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tx")),(0,r.kt)("td",{parentName:"tr",align:null},"Transactions subcommands"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bank send"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ibc-transfer transfer"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"distribution withdraw-all-rewards"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"query")),(0,r.kt)("td",{parentName:"tr",align:null},"Query subcommands"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bank balance"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"staking validators"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"gov proposals"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tendermint")),(0,r.kt)("td",{parentName:"tr",align:null},"Tendermint subcommands"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show-address"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"show-node-id"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"version"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config")),(0,r.kt)("td",{parentName:"tr",align:null},"Client configuration"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"init")),(0,r.kt)("td",{parentName:"tr",align:null},"Initialize full node"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"start")),(0,r.kt)("td",{parentName:"tr",align:null},"Run full node"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version")),(0,r.kt)("td",{parentName:"tr",align:null},"Point Chain version"),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);