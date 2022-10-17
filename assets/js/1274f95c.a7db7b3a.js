"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[7594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"endermint KMS + Ledger",sidebar_label:"endermint KMS + Ledger"},o="Tendermint KMS + Ledger",l={unversionedId:"point_chain/validators/security/kms_ledger",id:"point_chain/validators/security/kms_ledger",title:"endermint KMS + Ledger",description:"Set up Tendermint KMS with the Tendermint Ledger app",source:"@site/docs/point_chain/validators/security/kms_ledger.md",sourceDirName:"point_chain/validators/security",slug:"/point_chain/validators/security/kms_ledger",permalink:"/docs/point_chain/validators/security/kms_ledger",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/security/kms_ledger.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1666012974,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"endermint KMS + Ledger",sidebar_label:"endermint KMS + Ledger"},sidebar:"pnSidebar",previous:{title:"Tendermint KMS",permalink:"/docs/point_chain/validators/security/kms"},next:{title:"Validator Security Checklist",permalink:"/docs/point_chain/validators/security/checklist"}},p={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Checklist",id:"checklist",level:2},{value:"Tendermint Validator app (for Ledger devices)",id:"tendermint-validator-app-for-ledger-devices",level:2},{value:"KMS configuration",id:"kms-configuration",level:2},{value:"Config file",id:"config-file",level:3},{value:"Generate secret key",id:"generate-secret-key",level:3},{value:"Retrieve validator key",id:"retrieve-validator-key",level:3},{value:"Point Chain configuration",id:"point-chain-configuration",level:2}],s={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tendermint-kms--ledger"},"Tendermint KMS + Ledger"),(0,r.kt)("p",null,"Set up Tendermint KMS with the Tendermint Ledger app"),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/"},"Ledger device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Install Ledger Live"))),(0,r.kt)("h2",{id:"checklist"},"Checklist"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udea7  The following instructions are a brief walkthrough and not a comprehensive guideline. You should consider and research more about the ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/security/"},"security implications")," of activating an external KMS.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 Ledger ",(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/pages/ledger-nano-x"},"Nano X")," or ",(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/products/ledger-nano-s"},"Nano S")," device (compare ",(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/pages/hardware-wallets-comparison"},"here"),")"),(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," installed"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Tendermint app installed (only in ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer Mode"),")"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Latest Versions (Firmware and Tendermint app)")),(0,r.kt)("h2",{id:"tendermint-validator-app-for-ledger-devices"},"Tendermint Validator app (for Ledger devices)"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udea8",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),": KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use under ",(0,r.kt)("strong",{parentName:"p"},"your own risk"))),(0,r.kt)("p",null,"You should be able to find the Tendermint app in Ledger Live."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You will need to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer Mode")," in Ledger Live ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," in order to find the app.")),(0,r.kt)("h2",{id:"kms-configuration"},"KMS configuration"),(0,r.kt)("p",null,"In this section, we will configure a KMS to use a Ledger device running the Tendermint Validator App."),(0,r.kt)("h3",{id:"config-file"},"Config file"),(0,r.kt)("p",null,"You can find other configuration examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/master/tmkms.toml.example"},"here")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.tmkms/tmkms.toml")," file with the following content (use an adequate ",(0,r.kt)("inlineCode",{parentName:"p"},"chain_id"),")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# Example KMS configuration file\n[[validator]]\naddr = "tcp://localhost:26658"                  # or "unix:///path/to/socket"\nchain_id = "point_10687-1"\nreconnect = true                                # true is the default\nsecret_key = "~/.tmkms/secret_connection.key"\n\n[[providers.ledger]]\nchain_ids = ["point_10687-1"]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"addr")," to point to your ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," instance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-id")," to match your ",(0,r.kt)("inlineCode",{parentName:"p"},".pointd/config/config.toml")," settings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"provider.ledger")," has not additional parameters at the moment, however, it is important that you keep that header to enable the feature."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Plug your Ledger device and open the Tendermint validator app.")),(0,r.kt)("h3",{id:"generate-secret-key"},"Generate secret key"),(0,r.kt)("p",null,"Now you need to generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms keygen ~/.tmkms/secret_connection.key\n")),(0,r.kt)("h3",{id:"retrieve-validator-key"},"Retrieve validator key"),(0,r.kt)("p",null,"The last step is to retrieve the validator key that you will use in ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),"."),(0,r.kt)("p",null,"Start the KMS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms start -c ~/.tmkms/tmkms.toml\n")),(0,r.kt)("p",null,"The output should look similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"07:28:24 [INFO] tmkms 0.11.0 starting up...\n07:28:24 [INFO] [keyring:ledger:ledger] added validator key pointvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f\n07:28:24 [INFO] KMS node ID: 1BC12314E2E1C29015B66017A397F170C6ECDE4A\n")),(0,r.kt)("p",null,"The KMS may complain that it cannot connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),". That is fine, we will fix it in the next section.\nThis output indicates the validator key linked to this particular device is: ",(0,r.kt)("inlineCode",{parentName:"p"},"pointvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f"),"\nTake note of the validator pubkey that appears in your screen. ",(0,r.kt)("em",{parentName:"p"},"We will use it in the next section.")),(0,r.kt)("h2",{id:"point-chain-configuration"},"Point Chain configuration"),(0,r.kt)("p",null,"You need to enable KMS access by editing ",(0,r.kt)("inlineCode",{parentName:"p"},".pointd/config/config.toml"),". In this file, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator_laddr")," to create a listening address/port or a unix socket in ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n')),(0,r.kt)("p",null,"Let's assume that you have set up your validator account and called it ",(0,r.kt)("inlineCode",{parentName:"p"},"kmsval"),". You can tell pointd the key that we've got in the previous section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd gentx --name kmsval --pubkey <pub_key>\n")),(0,r.kt)("p",null,"Now start ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),". You should see that the KMS connects and receives a signature request."),(0,r.kt)("p",null,"Once the Ledger device receives the first message, it will ask for confirmation that the values are adequate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tendermint Ledger app &quot;Init Validation&quot;",src:n(491).Z,width:"300",height:"150"})),(0,r.kt)("p",null,"Click the right button, if the height and round are correct."),(0,r.kt)("p",null,"After that, you will see that the KMS will start forwarding all signature requests to the Ledger app:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tendermint Ledger app &quot;Proposal&quot;",src:n(6435).Z,width:"313",height:"150"})),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"The word ",(0,r.kt)("inlineCode",{parentName:"p"},"TEST")," in the second picture, second line appears because they were taken on a pre-release version.\nOnce the app as been released in Ledger's app store, this word should NOT appear.")))}c.isMDXComponent=!0},491:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kms_tm_ledger_01-333b5a02b13138ef329933950ec162af.jpg"},6435:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kms_tm_ledger_02-0fe258512b66899f1a60ffb8986ebb48.jpg"}}]);