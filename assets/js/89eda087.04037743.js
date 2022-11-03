"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[9411],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<s;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const s={title:"Multisig",sidebar_label:"Multisig"},r="Multisig",o={unversionedId:"point_chain/users/keys/multisig",id:"point_chain/users/keys/multisig",title:"Multisig",description:"Learn how to generate, sign and broadcast a transaction using the keyring multisig",source:"@site/docs/point_chain/users/keys/multisig.md",sourceDirName:"point_chain/users/keys",slug:"/point_chain/users/keys/multisig",permalink:"/docs/point_chain/users/keys/multisig",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/keys/multisig.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Multisig",sidebar_label:"Multisig"},sidebar:"pnSidebar",previous:{title:"Keyring",permalink:"/docs/point_chain/users/keys/keyring"},next:{title:"Architecture",permalink:"/docs/point_chain/users/technical_concepts/architecture"}},l={},u=[{value:"Generate a Multisig key",id:"generate-a-multisig-key",level:2},{value:"Signing a transaction",id:"signing-a-transaction",level:2},{value:"Step 1: Create the multisig key",id:"step-1-create-the-multisig-key",level:3},{value:"Step 2: Create the multisig transaction",id:"step-2-create-the-multisig-transaction",level:3},{value:"Step 3: Sign individually",id:"step-3-sign-individually",level:3},{value:"Step 4: Create multisignature",id:"step-4-create-multisignature",level:3},{value:"Step 5: Broadcast transaction",id:"step-5-broadcast-transaction",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multisig"},"Multisig"),(0,i.kt)("p",null,"Learn how to generate, sign and broadcast a transaction using the keyring multisig"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"multisig account")," is an Point Chain account with a special key that can require more than one signature to sign transactions. This can be useful for increasing the security of the account or for requiring the consent of multiple parties to make transactions. Multisig accounts can be created by specifying:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"threshold number of signatures required"),(0,i.kt)("li",{parentName:"ul"},"the public keys involved in signing")),(0,i.kt)("p",null,"To sign with a multisig account, the transaction must be signed individually by the different keys specified for the account. Then, the signatures will be combined into a multisignature which can be used to sign the transaction. If fewer than the threshold number of signatures needed are present, the resultant multisignature is considered invalid."),(0,i.kt)("h2",{id:"generate-a-multisig-key"},"Generate a Multisig key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys add --multisig=name1,name2,name3[...] --multisig-threshold=K new_key_name\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"K")," is the minimum number of private keys that must have signed the transactions that carry the public key's address as signer."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--multisig")," flag must contain the name of public keys that will be combined into a public key that will be generated and stored as ",(0,i.kt)("inlineCode",{parentName:"p"},"new_key_name")," in the local database. All names supplied through ",(0,i.kt)("inlineCode",{parentName:"p"},"--multisig")," must already exist in the local database."),(0,i.kt)("p",null,"Unless the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--nosort")," is set, the order in which the keys are supplied on the command line does not matter, i.e. the following commands generate two identical keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys add --multisig=p1,p2,p3 --multisig-threshold=2 multisig_address\npointd keys add --multisig=p2,p3,p1 --multisig-threshold=2 multisig_address\n")),(0,i.kt)("p",null,"Multisig addresses can also be generated on-the-fly and printed through the which command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys show --multisig-threshold=K name1 name2 name3 [...]\n")),(0,i.kt)("h2",{id:"signing-a-transaction"},"Signing a transaction"),(0,i.kt)("h3",{id:"step-1-create-the-multisig-key"},"Step 1: Create the multisig key"),(0,i.kt)("p",null,"Let's assume that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"test1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test2")," want to make a multisig account with ",(0,i.kt)("inlineCode",{parentName:"p"},"test3"),"."),(0,i.kt)("p",null,"First import the public keys of ",(0,i.kt)("inlineCode",{parentName:"p"},"test3")," into your keyring."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pointd keys add \\\n    test3 \\\n    --pubkey=pointpub1addwnpepqgcxazmq6wgt2j4rdfumsfwla0zfk8e5sws3p3zg5dkm9007hmfysxas0u2\n")),(0,i.kt)("p",null,"Generate the multisig key with 2/3 threshold."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pointd keys add \\\n    multi \\\n    --multisig=test1,test2,test3 \\\n    --multisig-threshold=2\n")),(0,i.kt)("p",null,"You can see its address and details:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pointd keys show multi\n\n- name: multi\n  type: multi\n  address: point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m\n  pubkey: pointpub1ytql0csgqgfzd666axrjzq3mxw59ys6yqcd3ydjvhgs0uzs6kdk5fp4t73gmkl8t6y02yfq7tvfzd666axrjzq3sd69kp5usk492x6nehqjal67ynv0nfqapzrzy3gmdk27la0kjfqfzd666axrjzq6utqt639ka2j3xkncgk65dup06t297ccljmxhvhu3rmk92u3afjuyz9dg9\n  mnemonic: ""\n  threshold: 0\n  pubkeys: []\n')),(0,i.kt)("p",null,"Let's add 10 POINT to the multisig wallet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tx bank send \\\n    test1 \\\n    point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m \\\n    10000000000000000000apoint \\\n    --chain-id=point_10687_1 \\\n    --gas=auto \\\n    --fees=1000000apoint \\\n    --broadcast-mode=block\n")),(0,i.kt)("h3",{id:"step-2-create-the-multisig-transaction"},"Step 2: Create the multisig transaction"),(0,i.kt)("p",null,"We want to send 5 point from our multisig account to ",(0,i.kt)("inlineCode",{parentName:"p"},"point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tx bank send \\\n    point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft \\\n    point157g6rn6t6k5rl0dl57zha2wx72t633axqyvvwq \\\n    5000000000000000000apoint \\\n    --gas=200000 \\\n    --fees=1000000apoint \\\n    --chain-id=point_10687_1 \\\n    --generate-only > unsignedTx.json\n")),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},"unsignedTx.json")," contains the unsigned transaction encoded in JSON."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from_address": "point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft",\n        "to_address": "point157g6rn6t6k5rl0dl57zha2wx72t633axqyvvwq",\n        "amount": [\n          {\n            "denom": "apoint",\n            "amount": "5000000000000000000"\n          }\n        ]\n      }\n    ],\n    "memo": "",\n    "timeout_height": "0",\n    "extension_options": [],\n    "non_critical_extension_options": []\n  },\n  "auth_info": {\n    "signer_infos": [],\n    "fee": {\n      "amount": [\n        {\n          "denom": "apoint",\n          "amount": "1000000"\n        }\n      ],\n      "gas_limit": "200000",\n      "payer": "",\n      "granter": ""\n    }\n  },\n  "signatures": []\n}\n')),(0,i.kt)("h3",{id:"step-3-sign-individually"},"Step 3: Sign individually"),(0,i.kt)("p",null,"Sign with ",(0,i.kt)("inlineCode",{parentName:"p"},"test1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test2")," and create individual signatures."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx sign \\\n    unsignedTx.json \\\n    --multisig=point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m \\\n    --from=test1 \\\n    --output-document=test1sig.json \\\n    --chain-id=point_10687_1\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx sign \\\n    unsignedTx.json \\\n    --multisig=point1e0fx0q9meawrcq7fmma9x60gk35lpr4xk3884m \\\n    --from=test2 \\\n    --output-document=test2sig.json \\\n    --chain-id=point_10687_1\n")),(0,i.kt)("h3",{id:"step-4-create-multisignature"},"Step 4: Create multisignature"),(0,i.kt)("p",null,"Combine signatures to sign transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx multisign \\\n    unsignedTx.json \\\n    multi \\\n    test1sig.json test2sig.json \\\n    --output-document=signedTx.json \\\n    --chain-id=point_10687_1\n")),(0,i.kt)("p",null,"The TX is now signed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "messages": [\n      {\n        "@type": "/cosmos.bank.v1beta1.MsgSend",\n        "from_address": "point1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft",\n        "to_address": "point157g6rn6t6k5rl0dl57zha2wx72t633axqyvvwq",\n        "amount": [\n          {\n            "denom": "apoint",\n            "amount": "5000000000000000000"\n          }\n        ]\n      }\n    ],\n    "memo": "",\n    "timeout_height": "0",\n    "extension_options": [],\n    "non_critical_extension_options": []\n  },\n  "auth_info": {\n    "signer_infos": [\n      {\n        "public_key": {\n          "@type": "/cosmos.crypto.multisig.LegacyAminoPubKey",\n          "threshold": 2,\n          "public_keys": [\n            {\n              "@type": "/cosmos.crypto.secp256k1.PubKey",\n              "key": "ApCzSG8k7Tr4aM6e4OJRExN7cNtvH21L9azbh+uRrvt4"\n            },\n            {\n              "@type": "/cosmos.crypto.secp256k1.PubKey",\n              "key": "Ah91erz8ChNanqLe9ea948rvAiXMCRlR5Ka7EE/c0xUK"\n            },\n            {\n              "@type": "/cosmos.crypto.secp256k1.PubKey",\n              "key": "A0OjtIUCFJM3AobJ9HJTWKP9RZV2+WPcwVjLgsAidrZ/"\n            }\n          ]\n        },\n        "mode_info": {\n          "multi": {\n            "bitarray": {\n              "extra_bits_stored": 3,\n              "elems": "wA=="\n            },\n            "mode_infos": [\n              {\n                "single": {\n                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"\n                }\n              },\n              {\n                "single": {\n                  "mode": "SIGN_MODE_LEGACY_AMINO_JSON"\n                }\n              }\n            ]\n          }\n        },\n        "sequence": "1"\n      }\n    ],\n    "fee": {\n      "amount": [\n        {\n          "denom": "apoint",\n          "amount": "1000000"\n        }\n      ],\n      "gas_limit": "200000",\n      "payer": "",\n      "granter": ""\n    }\n  },\n  "signatures": [\n    "CkCEeIbeGc+I1ipZuhp/0KhVNnWAv2tTlvgo5x61lzk1KHmLPV38m/YFurrFt5cm5+fqIXrn+FlOjrJuzBhw8ogYCkCawm9mpXsBHk0CFsE5618fVnvScEkfrzW0c2jCcjqV8EPuj3ut74UWzZyQkwtJGxUWtro9EgnGsB7Di1Gzizst"\n  ]\n}\n')),(0,i.kt)("h3",{id:"step-5-broadcast-transaction"},"Step 5: Broadcast transaction"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pointd tx broadcast signedTx.json \\\n    --chain-id=point_10687_1 \\\n    --broadcast-mode=block\n")))}c.isMDXComponent=!0}}]);