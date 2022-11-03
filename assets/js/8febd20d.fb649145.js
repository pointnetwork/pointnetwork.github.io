"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[4167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(p,".").concat(m)]||h[m]||u[m]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Keplr",sidebar_label:"Keplr"},i="Keplr",l={unversionedId:"point_chain/users/wallets/keplr",id:"point_chain/users/wallets/keplr",title:"Keplr",description:"Connect your Keplr wallet with Point Chain.",source:"@site/docs/point_chain/users/wallets/keplr.md",sourceDirName:"point_chain/users/wallets",slug:"/point_chain/users/wallets/keplr",permalink:"/docs/point_chain/users/wallets/keplr",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/wallets/keplr.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Keplr",sidebar_label:"Keplr"},sidebar:"pnSidebar",previous:{title:"Backup",permalink:"/docs/point_chain/users/wallets/backup"},next:{title:"Ledger",permalink:"/docs/point_chain/users/wallets/ledger"}},p={},c=[{value:"Set Up Keplr",id:"set-up-keplr",level:2},{value:"Create a New Account",id:"create-a-new-account",level:3},{value:"Create an Account with a Seed Phrase",id:"create-an-account-with-a-seed-phrase",level:4},{value:"Create an Account with One-Click Login",id:"create-an-account-with-one-click-login",level:4},{value:"Import an Existing Account",id:"import-an-existing-account",level:3},{value:"Import an Account with a Seed Phrase",id:"import-an-account-with-a-seed-phrase",level:4},{value:"Import an Account with a Ledger",id:"import-an-account-with-a-ledger",level:4},{value:"Connect Keplr to Mainnet",id:"connect-keplr-to-mainnet",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keplr"},"Keplr"),(0,r.kt)("p",null,"Connect your Keplr wallet with Point Chain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.keplr.app/"},"Install Keplr"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note"),": The Keplr extension is officially supported only on Chromium-based explorers.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.keplr.app/"},"Keplr")," browser extension is a wallet for accessing applications in the Cosmos ecosystem and managing user identities. It can be used to connect to Point Chain through the official testnet and request Funds from the Faucet."),(0,r.kt)("h2",{id:"set-up-keplr"},"Set Up Keplr"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note"),": Further information about the process of setting up Keplr can be found in the official ",(0,r.kt)("a",{parentName:"p",href:"https://keplr.crunch.help/getting-started"},"Keplr Documentation")," or in this ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/chainapsis/how-to-use-keplr-wallet-40afc80907f6"},"Medium article"),".")),(0,r.kt)("p",null,"Open the Keplr extension on your browser. If you are setting up Keplr for the first time, you can either ",(0,r.kt)("a",{parentName:"p",href:"#create-a-new-account"},"create a new account")," or ",(0,r.kt)("a",{parentName:"p",href:"#import-an-existing-account"},"import an existing account"),"."),(0,r.kt)("h3",{id:"create-a-new-account"},"Create a New Account"),(0,r.kt)("p",null,"There are several ways to create a new account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"via a ",(0,r.kt)("a",{parentName:"li",href:"#create-an-account-with-a-seed-phrase"},"mnemonic/seed phrase")),(0,r.kt)("li",{parentName:"ul"},"via ",(0,r.kt)("a",{parentName:"li",href:"#create-an-account-with-one-click-login"},"one-click login"))),(0,r.kt)("h4",{id:"create-an-account-with-a-seed-phrase"},"Create an Account with a Seed Phrase"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the initial pop-up window, choose ",(0,r.kt)("strong",{parentName:"li"},"Create New Account"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you have used Keplr before, click on the silhouette in the upper-right corner, then the blue box labeled ",(0,r.kt)("strong",{parentName:"li"},"Add Account"),", and select ",(0,r.kt)("strong",{parentName:"li"},"Create New Account")))),(0,r.kt)("li",{parentName:"ol"},"Choose to have a seed/mnemonic phrase of 24 words, and save the phrase",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can change the derivation path by clicking on ",(0,r.kt)("strong",{parentName:"li"},"Advanced"),", but this is optional (learn more in the ",(0,r.kt)("a",{parentName:"li",href:"https://faq.keplr.app/"},"Keplr FAQ"),")"))),(0,r.kt)("li",{parentName:"ol"},"Enter a name for your account (can change later)"),(0,r.kt)("li",{parentName:"ol"},"Once you have transcribed your 24 word seed/mnemonic phrase, click on ",(0,r.kt)("strong",{parentName:"li"},"Next")),(0,r.kt)("li",{parentName:"ol"},"To confirm the creation of the new account, click on the words on the right order in which they appear in your seed/mnemonic phrase, and press ",(0,r.kt)("strong",{parentName:"li"},"Register")),(0,r.kt)("li",{parentName:"ol"},"If you have not used Keplr before, set a password for the Keplr extension, and click ",(0,r.kt)("strong",{parentName:"li"},"Confirm"))),(0,r.kt)("h4",{id:"create-an-account-with-one-click-login"},"Create an Account with One-Click Login"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Note"),": It is suggested to create an account via mnemonic phrase or delegate via Ledger, not to use One-Click Login.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Choose the option ",(0,r.kt)("strong",{parentName:"li"},"Sign in with Google")),(0,r.kt)("li",{parentName:"ol"},"Now enter the email/phone number associated with your Google account, the password, and click ",(0,r.kt)("strong",{parentName:"li"},"Next")),(0,r.kt)("li",{parentName:"ol"},"If you have not used Keplr before, set a password for the Keplr extension, and click ",(0,r.kt)("strong",{parentName:"li"},"Confirm"))),(0,r.kt)("h3",{id:"import-an-existing-account"},"Import an Existing Account"),(0,r.kt)("p",null,"There are several ways to import an existing account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"via a ",(0,r.kt)("a",{parentName:"li",href:"#import-an-account-with-a-seed-phrase"},"mnemonic/seed phrase/private key")),(0,r.kt)("li",{parentName:"ul"},"via ",(0,r.kt)("a",{parentName:"li",href:"#import-an-account-with-a-ledger"},"ledger"))),(0,r.kt)("h4",{id:"import-an-account-with-a-seed-phrase"},"Import an Account with a Seed Phrase"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the initial pop-up window, choose ",(0,r.kt)("strong",{parentName:"li"},"Import Existing Account"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you have used Keplr before, click on the silhouette in the upper-right corner, then the blue box labeled ",(0,r.kt)("strong",{parentName:"li"},"Add Account"),", and select ",(0,r.kt)("strong",{parentName:"li"},"Import Existing Account")))),(0,r.kt)("li",{parentName:"ol"},"Enter your mnemonic/seed phrase/private key in the appropriate slot, seperating the words with spaces and taking care to check they are spelled correctly"),(0,r.kt)("li",{parentName:"ol"},"Make sure you have imported the account with the correct derivation path, viewable by clicking on ",(0,r.kt)("strong",{parentName:"li"},"Advanced"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Normally, the derivation path should be ",(0,r.kt)("inlineCode",{parentName:"li"},"m/44'/\u2026\u2019/0/0/0"),", but if you see that importing the account via mnemonic on Keplr, the Cosmos Mainnet address displayed is different than yours, it is possible the derivation path ends with 1 (or another number) instead of 0"),(0,r.kt)("li",{parentName:"ul"},"If this is the case, you just have to start the process over, and replace the last 0 with 1"),(0,r.kt)("li",{parentName:"ul"},"Learn more in the ",(0,r.kt)("a",{parentName:"li",href:"https://faq.keplr.app/"},"Keplr FAQ")))),(0,r.kt)("li",{parentName:"ol"},"If you have not used Keplr before, set a password for the Keplr extension, and click ",(0,r.kt)("strong",{parentName:"li"},"Confirm"))),(0,r.kt)("h4",{id:"import-an-account-with-a-ledger"},"Import an Account with a Ledger"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the initial pop-up window, choose ",(0,r.kt)("strong",{parentName:"li"},"Import Ledger"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you have used Keplr before, click on the silhouette in the upper-right corner, then the blue box labeled ",(0,r.kt)("strong",{parentName:"li"},"Add Account"),", and select ",(0,r.kt)("strong",{parentName:"li"},"Import Ledger")))),(0,r.kt)("li",{parentName:"ol"},"To complete the connection with your Ledger Nano Hard Wallet, follow the steps described in the pop-up that appears (a detailed tutorial can be found ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/chainapsis/how-to-use-ledger-nano-hardware-wallet-with-keplr-9ea7f07826c2"},"here"),")"),(0,r.kt)("li",{parentName:"ol"},"If you have not used Keplr before, set a password for the Keplr extension, and click ",(0,r.kt)("strong",{parentName:"li"},"Confirm"))),(0,r.kt)("h2",{id:"connect-keplr-to-mainnet"},"Connect Keplr to Mainnet"),(0,r.kt)("p",null,"Once you are signed in to the Keplr extension, you can connect the wallet with the Point Chain network. The Point Chain mainnet network is already built into Keplr; look for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Point Chain (beta)")," network."))}u.isMDXComponent=!0}}]);