"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2208],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),y=c(n),d=a,u=y["".concat(s,".").concat(d)]||y[d]||m[d]||o;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},11820:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return y}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],p={title:"Backup",sidebar_label:"Backup"},s="Backup",c={unversionedId:"point_chain/users/wallets/backup",id:"point_chain/users/wallets/backup",title:"Backup",description:"Learn how to backup your wallet's mnemonic and private key.",source:"@site/docs/point_chain/users/wallets/backup.md",sourceDirName:"point_chain/users/wallets",slug:"/point_chain/users/wallets/backup",permalink:"/docs/point_chain/users/wallets/backup",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/wallets/backup.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1663588940,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Backup",sidebar_label:"Backup"},sidebar:"pnSidebar",previous:{title:"Metamask",permalink:"/docs/point_chain/users/wallets/metamask"},next:{title:"Keplr",permalink:"/docs/point_chain/users/wallets/keplr"}},l=[{value:"Mnemonics",id:"mnemonics",children:[],level:2},{value:"Export Key",id:"export-key",children:[{value:"Tendermint-Formatted Private Keys",id:"tendermint-formatted-private-keys",children:[],level:3},{value:"Ethereum-Formatted Private Keys",id:"ethereum-formatted-private-keys",children:[],level:3}],level:2},{value:"Import Key",id:"import-key",children:[{value:"Tendermint-Formatted Private Keys",id:"tendermint-formatted-private-keys-1",children:[],level:3},{value:"Ethereum-Formatted Private Keys",id:"ethereum-formatted-private-keys-1",children:[],level:3},{value:"Verification",id:"verification",children:[],level:3}],level:2}],m={toc:l};function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backup"},"Backup"),(0,o.kt)("p",null,"Learn how to backup your wallet's mnemonic and private key."),(0,o.kt)("h2",{id:"mnemonics"},"Mnemonics"),(0,o.kt)("p",null,"When you create a new key, you'll recieve a mnemonic phrase that can be used to restore that key. Backup the mnemonic phrase:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pointd keys add mykey\n{\n  "name": "mykey",\n  "type": "local",\n  "address": "point1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",\n  "pubkey": \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}\',\n  "mnemonic": ""\n}\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\n# <24 word mnemonic phrase>\n')),(0,o.kt)("p",null,"To restore the key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ pointd keys add mykey-restored --recover\n> Enter your bip39 mnemonic\nbanner genuine height east ghost oak toward reflect asset marble else explain foster car nest make van divide twice culture announce shuffle net peanut\n{\n  "name": "mykey-restored",\n  "type": "local",\n  "address": "point1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",\n  "pubkey": \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}\'\n}\n')),(0,o.kt)("h2",{id:"export-key"},"Export Key"),(0,o.kt)("h3",{id:"tendermint-formatted-private-keys"},"Tendermint-Formatted Private Keys"),(0,o.kt)("p",null,"To backup this type of key without the mnemonic phrase, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pointd keys export mykey\nEnter passphrase to decrypt your key:\nEnter passphrase to encrypt the exported key:\n-----BEGIN TENDERMINT PRIVATE KEY-----\nkdf: bcrypt\nsalt: 14559BB13D881A86E0F4D3872B8B2C82\ntype: secp256k1\n\n# <Tendermint private key>\n-----END TENDERMINT PRIVATE KEY-----\n\n$ echo "\\\n-----BEGIN TENDERMINT PRIVATE KEY-----\nkdf: bcrypt\nsalt: 14559BB13D881A86E0F4D3872B8B2C82\ntype: secp256k1\n\n# <Tendermint private key>\n-----END TENDERMINT PRIVATE KEY-----" > mykey.export\n')),(0,o.kt)("h3",{id:"ethereum-formatted-private-keys"},"Ethereum-Formatted Private Keys"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Note"),": These types of keys are MetaMask-compatible."))),(0,o.kt)("p",null,"To backup this type of key without the mnemonic phrase, do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys unsafe-export-eth-key mykey > mykey.export\n**WARNING** this is an unsafe way to export your unencrypted private key, are you sure? [y/N]: y\nEnter keyring passphrase:\n")),(0,o.kt)("h2",{id:"import-key"},"Import Key"),(0,o.kt)("h3",{id:"tendermint-formatted-private-keys-1"},"Tendermint-Formatted Private Keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ pointd keys import mykey-imported ./mykey.export\nEnter passphrase to decrypt your key:\n")),(0,o.kt)("h3",{id:"ethereum-formatted-private-keys-1"},"Ethereum-Formatted Private Keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pointd keys unsafe-import-eth-key mykey-imported ./mykey.export\nEnter passphrase to encrypt your key:\n")),(0,o.kt)("h3",{id:"verification"},"Verification"),(0,o.kt)("p",null,"Verify that your key has been restored using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ pointd keys list\n[\n  {\n    "name": "mykey-imported",\n    "type": "local",\n    "address": "point1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",\n    "pubkey": \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}\'\n  },\n  {\n    "name": "mykey-restored",\n    "type": "local",\n    "address": "point1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",\n    "pubkey": \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}\'\n  },\n  {\n    "name": "mykey",\n    "type": "local",\n    "address": "point1n253dl2tgyhxjm592p580c38r4dn8023ctv28d",\n    "pubkey": \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"ArJhve4v5HkLm+F7ViASU/rAGx7YrwU4+XKV2MNJt+Cq"}\'\n  }\n]\n')))}y.isMDXComponent=!0}}]);