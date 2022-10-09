"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[9289],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={title:"Run a Validator",sidebar_label:"Run a Validator"},r="Run a Validator",l={unversionedId:"point_chain/validators/setup/run_validator",id:"point_chain/validators/setup/run_validator",title:"Run a Validator",description:"Learn how to run a validator node",source:"@site/docs/point_chain/validators/setup/run_validator.md",sourceDirName:"point_chain/validators/setup",slug:"/point_chain/validators/setup/run_validator",permalink:"/docs/point_chain/validators/setup/run_validator",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/setup/run_validator.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1665298455,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{title:"Run a Validator",sidebar_label:"Run a Validator"},sidebar:"pnSidebar",previous:{title:"PointD",permalink:"/docs/point_chain/validators/quickstart/binary"},next:{title:"Configuration",permalink:"/docs/point_chain/validators/setup/configuration"}},s={},d=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Create Your Validator",id:"create-your-validator",level:2},{value:"Edit Validator Description",id:"edit-validator-description",level:2},{value:"View Validator Description",id:"view-validator-description",level:2},{value:"Track Validator Signing Information",id:"track-validator-signing-information",level:2},{value:"Unjail Validator",id:"unjail-validator",level:2},{value:"Confirm Your Validator is Running",id:"confirm-your-validator-is-running",level:2},{value:"Halting Your Validator",id:"halting-your-validator",level:2},{value:"Common Problems",id:"common-problems",level:2},{value:"Problem #1: My validator has <code>voting_power: 0</code>",id:"problem-1-my-validator-has-voting_power-0",level:3},{value:"Problem #2: My node crashes because of <code>too many open files</code>",id:"problem-2-my-node-crashes-because-of-too-many-open-files",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-a-validator"},"Run a Validator"),(0,i.kt)("p",null,"Learn how to run a validator node"),(0,i.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/overview"},"Validator Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/security/"},"Validator Security"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you plan to use a Key Management System (KMS), you should go through these steps first: ",(0,i.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/security/kms"},"Using a KMS"),".")),(0,i.kt)("h2",{id:"create-your-validator"},"Create Your Validator"),(0,i.kt)("p",null,"Your node consensus public key (",(0,i.kt)("inlineCode",{parentName:"p"},"pointvalconspub..."),") can be used to create a new validator by staking POINT tokens. You can find your validator pubkey by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tendermint show-validator\n")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udea8 ",(0,i.kt)("strong",{parentName:"p"},"DANGER"),": ",(0,i.kt)("u",null,"Never")," create your mainnet validator keys using a ",(0,i.kt)("a",{parentName:"p",href:"/docs/point_chain/users/keys/keyring"},(0,i.kt)("inlineCode",{parentName:"a"},"test"))," keying backend. Doing so might result in a loss of funds by making your funds remotely accessible via the ",(0,i.kt)("inlineCode",{parentName:"p"},"eth_sendTransaction")," JSON-RPC endpoint."),(0,i.kt)("p",{parentName:"admonition"},"Ref: ",(0,i.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2015/08/29/security-alert-insecurely-configured-geth-can-make-funds-remotely-accessible/"},"Security Advisory: Insecurely configured geth can make funds remotely accessible"))),(0,i.kt)("p",null,"To create your validator on testnet, just use the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pointd tx staking create-validator \\\n  --amount=1000000apoint \\\n  --pubkey=$(pointd tendermint show-validator) \\\n  --moniker="choose a moniker" \\\n  --chain-id=<chain_id> \\\n  --commission-rate="0.05" \\\n  --commission-max-rate="0.10" \\\n  --commission-max-change-rate="0.01" \\\n  --min-self-delegation="1" \\\n  --gas="auto" \\\n  --gas-prices="0.025apoint" \\\n  --from=<key_name>\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When specifying commission parameters, the ",(0,i.kt)("inlineCode",{parentName:"p"},"commission-max-change-rate")," is used to measure % ",(0,i.kt)("em",{parentName:"p"},"point")," change over the ",(0,i.kt)("inlineCode",{parentName:"p"},"commission-rate"),". E.g. 1% to 2% is a 100% rate increase, but only 1 percentage point.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Min-self-delegation")," is a strictly positive integer that represents the minimum amount of self-delegated voting power your validator must always have. A ",(0,i.kt)("inlineCode",{parentName:"p"},"min-self-delegation")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"1000000")," means your validator will never have a self-delegation lower than ",(0,i.kt)("inlineCode",{parentName:"p"},"1 apoint"))),(0,i.kt)("p",null,"You can confirm that you are in the validator set by using a third party explorer."),(0,i.kt)("h2",{id:"edit-validator-description"},"Edit Validator Description"),(0,i.kt)("p",null,"You can edit your validator's public description. This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to. Make sure to provide input for every flag below. If a flag is not included in the command the field will default to empty (",(0,i.kt)("inlineCode",{parentName:"p"},"--moniker")," defaults to the machine name) if the field has never been set or remain the same if it has been set in the past."),(0,i.kt)("p",null,"The <key_name> specifies which validator you are editing. If you choose to not include certain flags, remember that the --from flag must be included to identify the validator to update."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--identity")," can be used as to verify identity with systems like Keybase or UPort. When using with Keybase ",(0,i.kt)("inlineCode",{parentName:"p"},"--identity")," should be populated with a 16-digit string that is generated with a ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io"},"keybase.io")," account. It's a cryptographically secure method of verifying your identity across multiple online networks. The Keybase API allows us to retrieve your Keybase avatar. This is how you can add a logo to your validator profile."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pointd tx staking edit-validator\n  --moniker="choose a moniker" \\\n  --website="https://pointnetwork.io" \\\n  --identity=6A0D65E29A4CBC8E \\\n  --details="First FullWeb 3.0 Architecture" \\\n  --chain-id=<chain_id> \\\n  --gas="auto" \\\n  --gas-prices="0.025apoint" \\\n  --from=<key_name> \\\n  --commission-rate="0.10"\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"commission-rate")," value must adhere to the following invariants:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Must be between 0 and the validator's ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-rate")),(0,i.kt)("li",{parentName:"ul"},"Must not exceed the validator's ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-change-rate")," which is maximum\n% point change rate ",(0,i.kt)("strong",{parentName:"li"},"per day"),". In other words, a validator can only change\nits commission once per day and within ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-change-rate")," bounds.")),(0,i.kt)("h2",{id:"view-validator-description"},"View Validator Description"),(0,i.kt)("p",null,"View the validator's information with this command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd query staking validator <account_cosmos>\n")),(0,i.kt)("h2",{id:"track-validator-signing-information"},"Track Validator Signing Information"),(0,i.kt)("p",null,"In order to keep track of a validator's signatures in the past you can do so by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"signing-info")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd query slashing signing-info <validator-pubkey>\\\n  --chain-id=<chain_id>\n")),(0,i.kt)("h2",{id:"unjail-validator"},"Unjail Validator"),(0,i.kt)("p",null,'When a validator is "jailed" for downtime, you must submit an ',(0,i.kt)("inlineCode",{parentName:"p"},"Unjail")," transaction from the operator account in order to be able to get block proposer rewards again (depends on the zone fee distribution)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tx slashing unjail \\\n  --from=<key_name> \\\n  --chain-id=<chain_id>\n")),(0,i.kt)("h2",{id:"confirm-your-validator-is-running"},"Confirm Your Validator is Running"),(0,i.kt)("p",null,"Your validator is active if the following command returns anything:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'pointd query tendermint-validator-set | grep "$(pointd tendermint show-address)"\n')),(0,i.kt)("p",null,"You should now see your validator in one of Point Chain explorers. You are looking for the ",(0,i.kt)("inlineCode",{parentName:"p"},"bech32")," encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.pointd/config/priv_validator.json")," file."),(0,i.kt)("admonition",{title:"Note",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"To be in the validator set, you need to have more total voting power than the 100th validator.")),(0,i.kt)("h2",{id:"halting-your-validator"},"Halting Your Validator"),(0,i.kt)("p",null,"When attempting to perform routine maintenance or planning for an upcoming coordinated\nupgrade, it can be useful to have your validator systematically and gracefully halt.\nYou can achieve this by either setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"halt-height")," to the height at which\nyou want your node to shutdown or by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--halt-height")," flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"pointd"),".\nThe node will shutdown with a zero exit code at that given height after committing\nthe block."),(0,i.kt)("h2",{id:"common-problems"},"Common Problems"),(0,i.kt)("h3",{id:"problem-1-my-validator-has-voting_power-0"},"Problem #1: My validator has ",(0,i.kt)("inlineCode",{parentName:"h3"},"voting_power: 0")),(0,i.kt)("p",null,"Your validator has become jailed. Validators get jailed, i.e. get removed from the active validator set, if they do not vote on ",(0,i.kt)("inlineCode",{parentName:"p"},"500")," of the last ",(0,i.kt)("inlineCode",{parentName:"p"},"10000")," blocks, or if they double sign."),(0,i.kt)("p",null,"If you got jailed for downtime, you can get your voting power back to your validator. First, if ",(0,i.kt)("inlineCode",{parentName:"p"},"pointd")," is not running, start it up again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")),(0,i.kt)("p",null,"Wait for your full node to catch up to the latest block. Then, you can ",(0,i.kt)("a",{parentName:"p",href:"#unjail-validator"},"unjail your validator")),(0,i.kt)("p",null,"Lastly, check your validator again to see if your voting power is back."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd status\n")),(0,i.kt)("p",null,"You may notice that your voting power is less than it used to be. That's because you got slashed for downtime!"),(0,i.kt)("h3",{id:"problem-2-my-node-crashes-because-of-too-many-open-files"},"Problem #2: My node crashes because of ",(0,i.kt)("inlineCode",{parentName:"h3"},"too many open files")),(0,i.kt)("p",null,"The default number of files Linux can open (per-process) is ",(0,i.kt)("inlineCode",{parentName:"p"},"1024"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"pointd")," is known to open more than ",(0,i.kt)("inlineCode",{parentName:"p"},"1024")," files. This causes the process to crash. A quick fix is to run ",(0,i.kt)("inlineCode",{parentName:"p"},"ulimit -n 4096")," (increase the number of open files allowed) and then restart the process with ",(0,i.kt)("inlineCode",{parentName:"p"},"pointd start"),". If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," or another process manager to launch ",(0,i.kt)("inlineCode",{parentName:"p"},"pointd")," this may require some configuration at that level. A sample ",(0,i.kt)("inlineCode",{parentName:"p"},"systemd")," file to fix this issue is below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"# /etc/systemd/system/pointd.service\n[Unit]\nDescription=Point Chain Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=ubuntu\nWorkingDirectory=/home/ubuntu\nExecStart=/home/ubuntu/go/bin/pointd start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\n")))}u.isMDXComponent=!0}}]);