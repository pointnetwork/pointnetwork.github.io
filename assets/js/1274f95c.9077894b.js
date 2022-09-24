"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7594],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46449:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"endermint KMS + Ledger",sidebar_label:"endermint KMS + Ledger"},d="Tendermint KMS + Ledger",p={unversionedId:"point_chain/validators/security/kms_ledger",id:"point_chain/validators/security/kms_ledger",title:"endermint KMS + Ledger",description:"Set up Tendermint KMS with the Tendermint Ledger app",source:"@site/docs/point_chain/validators/security/kms_ledger.md",sourceDirName:"point_chain/validators/security",slug:"/point_chain/validators/security/kms_ledger",permalink:"/docs/point_chain/validators/security/kms_ledger",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/security/kms_ledger.md",tags:[],version:"current",lastUpdatedBy:"sergevar",lastUpdatedAt:1664017622,formattedLastUpdatedAt:"9/24/2022",frontMatter:{title:"endermint KMS + Ledger",sidebar_label:"endermint KMS + Ledger"},sidebar:"pnSidebar",previous:{title:"Tendermint KMS",permalink:"/docs/point_chain/validators/security/kms"},next:{title:"Validator Security Checklist",permalink:"/docs/point_chain/validators/security/checklist"}},s=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Checklist",id:"checklist",children:[],level:2},{value:"Tendermint Validator app (for Ledger devices)",id:"tendermint-validator-app-for-ledger-devices",children:[],level:2},{value:"KMS configuration",id:"kms-configuration",children:[{value:"Config file",id:"config-file",children:[],level:3},{value:"Generate secret key",id:"generate-secret-key",children:[],level:3},{value:"Retrieve validator key",id:"retrieve-validator-key",children:[],level:3}],level:2},{value:"Point Chain configuration",id:"point-chain-configuration",children:[],level:2}],c={toc:s};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tendermint-kms--ledger"},"Tendermint KMS + Ledger"),(0,r.kt)("p",null,"Set up Tendermint KMS with the Tendermint Ledger app"),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/"},"Ledger device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Install Ledger Live"))),(0,r.kt)("h2",{id:"checklist"},"Checklist"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udea7  The following instructions are a brief walkthrough and not a comprehensive guideline. You should consider and research more about the ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/security/"},"security implications")," of activating an external KMS."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2705 Ledger ",(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/pages/ledger-nano-x"},"Nano X")," or ",(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/products/ledger-nano-s"},"Nano S")," device (compare ",(0,r.kt)("a",{parentName:"li",href:"https://shop.ledger.com/pages/hardware-wallets-comparison"},"here"),")"),(0,r.kt)("li",{parentName:"ul"},"\u2705 ",(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/ledger-live"},"Ledger Live")," installed"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Tendermint app installed (only in ",(0,r.kt)("inlineCode",{parentName:"li"},"Developer Mode"),")"),(0,r.kt)("li",{parentName:"ul"},"\u2705 Latest Versions (Firmware and Tendermint app)")),(0,r.kt)("h2",{id:"tendermint-validator-app-for-ledger-devices"},"Tendermint Validator app (for Ledger devices)"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udea8",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT"),": KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use under ",(0,r.kt)("strong",{parentName:"p"},"your own risk")))),(0,r.kt)("p",null,"You should be able to find the Tendermint app in Ledger Live."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer Mode")," in Ledger Live ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," in order to find the app."))),(0,r.kt)("h2",{id:"kms-configuration"},"KMS configuration"),(0,r.kt)("p",null,"In this section, we will configure a KMS to use a Ledger device running the Tendermint Validator App."),(0,r.kt)("h3",{id:"config-file"},"Config file"),(0,r.kt)("p",null,"You can find other configuration examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/master/tmkms.toml.example"},"here")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.tmkms/tmkms.toml")," file with the following content (use an adequate ",(0,r.kt)("inlineCode",{parentName:"p"},"chain_id"),")"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'# Example KMS configuration file\n[[validator]]\naddr = "tcp://localhost:26658"                  # or "unix:///path/to/socket"\nchain_id = "point_10687-1"\nreconnect = true                                # true is the default\nsecret_key = "~/.tmkms/secret_connection.key"\n\n[[providers.ledger]]\nchain_ids = ["point_10687-1"]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"addr")," to point to your ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," instance.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Adjust ",(0,r.kt)("inlineCode",{parentName:"p"},"chain-id")," to match your ",(0,r.kt)("inlineCode",{parentName:"p"},".pointd/config/config.toml")," settings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"provider.ledger")," has not additional parameters at the moment, however, it is important that you keep that header to enable the feature."))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Plug your Ledger device and open the Tendermint validator app.")),(0,r.kt)("h3",{id:"generate-secret-key"},"Generate secret key"),(0,r.kt)("p",null,"Now you need to generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_key"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms keygen ~/.tmkms/secret_connection.key\n")),(0,r.kt)("h3",{id:"retrieve-validator-key"},"Retrieve validator key"),(0,r.kt)("p",null,"The last step is to retrieve the validator key that you will use in ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),"."),(0,r.kt)("p",null,"Start the KMS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tmkms start -c ~/.tmkms/tmkms.toml\n")),(0,r.kt)("p",null,"The output should look similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"07:28:24 [INFO] tmkms 0.11.0 starting up...\n07:28:24 [INFO] [keyring:ledger:ledger] added validator key pointvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f\n07:28:24 [INFO] KMS node ID: 1BC12314E2E1C29015B66017A397F170C6ECDE4A\n")),(0,r.kt)("p",null,"The KMS may complain that it cannot connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),". That is fine, we will fix it in the next section.\nThis output indicates the validator key linked to this particular device is: ",(0,r.kt)("inlineCode",{parentName:"p"},"pointvalconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f"),"\nTake note of the validator pubkey that appears in your screen. ",(0,r.kt)("em",{parentName:"p"},"We will use it in the next section.")),(0,r.kt)("h2",{id:"point-chain-configuration"},"Point Chain configuration"),(0,r.kt)("p",null,"You need to enable KMS access by editing ",(0,r.kt)("inlineCode",{parentName:"p"},".pointd/config/config.toml"),". In this file, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator_laddr")," to create a listening address/port or a unix socket in ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n')),(0,r.kt)("p",null,"Let's assume that you have set up your validator account and called it ",(0,r.kt)("inlineCode",{parentName:"p"},"kmsval"),". You can tell pointd the key that we've got in the previous section."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd gentx --name kmsval --pubkey <pub_key>\n")),(0,r.kt)("p",null,"Now start ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd"),". You should see that the KMS connects and receives a signature request."),(0,r.kt)("p",null,"Once the Ledger device receives the first message, it will ask for confirmation that the values are adequate."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tendermint Ledger app &quot;Init Validation&quot;",src:n(72452).Z})),(0,r.kt)("p",null,"Click the right button, if the height and round are correct."),(0,r.kt)("p",null,"After that, you will see that the KMS will start forwarding all signature requests to the Ledger app:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tendermint Ledger app &quot;Proposal&quot;",src:n(35219).Z})),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The word ",(0,r.kt)("inlineCode",{parentName:"p"},"TEST")," in the second picture, second line appears because they were taken on a pre-release version.\nOnce the app as been released in Ledger's app store, this word should NOT appear."))))}m.isMDXComponent=!0},72452:function(e,t,n){t.Z=n.p+"assets/images/kms_tm_ledger_01-333b5a02b13138ef329933950ec162af.jpg"},35219:function(e,t,n){t.Z=n.p+"assets/images/kms_tm_ledger_02-0fe258512b66899f1a60ffb8986ebb48.jpg"}}]);