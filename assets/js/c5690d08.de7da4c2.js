"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[1836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=o,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Metamask",sidebar_label:"Metamask"},r="MetaMask",l={unversionedId:"point_chain/users/wallets/metamask",id:"point_chain/users/wallets/metamask",title:"Metamask",description:"Connect your Metamask wallet with Point Chain.",source:"@site/docs/point_chain/users/wallets/metamask.md",sourceDirName:"point_chain/users/wallets",slug:"/point_chain/users/wallets/metamask",permalink:"/docs/point_chain/users/wallets/metamask",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/users/wallets/metamask.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667471981,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Metamask",sidebar_label:"Metamask"},sidebar:"pnSidebar",previous:{title:"Gas and Fees",permalink:"/docs/point_chain/users/basics/gas"},next:{title:"Backup",permalink:"/docs/point_chain/users/wallets/backup"}},p={},s=[{value:"Adding a New Network",id:"adding-a-new-network",level:2},{value:"Import Account to Metamask",id:"import-account-to-metamask",level:2},{value:"Reset Account",id:"reset-account",level:2},{value:"Download Account State",id:"download-account-state",level:2}],c={toc:s};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"metamask"},"MetaMask"),(0,o.kt)("p",null,"Connect your Metamask wallet with Point Chain."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://metamask.io/download/"},"Install Metamask"))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," browser extension is a wallet for accessing Ethereum-enabled applications and managing user identities. It can be used to connect to Point Chain through the official testnet or via a locally-running Point Chain node."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are planning on developing on Point Chain locally and you haven\u2019t already set up your own local node, refer to ",(0,o.kt)("a",{parentName:"p",href:"../../validators/quickstart/run_node"},"the quickstart tutorial"),", or follow the instructions in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain/"},"GitHub repository"),".")),(0,o.kt)("h2",{id:"adding-a-new-network"},"Adding a New Network"),(0,o.kt)("p",null,"Open the MetaMask extension on your browser, you may have to log in to your MetaMask account if you are not already. Then click the top right circle and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Networks")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Network")," and fill the form as shown below."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also lookup the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md"},"EIP155")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Chain ID")," by referring to ",(0,o.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"chainlist.org"),". Alternatively, to get the full Chain ID from Genesis, check the ",(0,o.kt)("a",{parentName:"p",href:"../../users/technical_concepts/chain_id"},"Chain ID")," documentation page.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"metamask networks settings",src:n(1340).Z,width:"848",height:"1132"})),(0,o.kt)("p",null,"Here is the list of fields that you can use to paste on Metamask:"),(0,o.kt)("admonition",{title:"Mainnet",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network Name:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Point Chain Mainnet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"New RPC URL:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https://rpc-mainnet-1.point.space")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chain ID:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"10687")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Currency Symbol (optional):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Point")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block Explorer URL (optional):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https://explorer.pointnetwork.io/")))),(0,o.kt)("admonition",{title:"Testnet",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network Name:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Point Chain Testnet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"New RPC URL:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"http://xnet-uranus-1.point.space/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chain ID:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"10731")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Currency Symbol (optional):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"xPoint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block Explorer URL (optional):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"https://explorer-xnet-triton.point.space/")))),(0,o.kt)("admonition",{title:"Local Node",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network Name:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Point Chain Local")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"New RPC URL:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8545/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chain ID:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"10731")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Currency Symbol (optional):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"xPoint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Block Explorer URL (optional):")," ",(0,o.kt)("inlineCode",{parentName:"li"},"n/a")))),(0,o.kt)("h2",{id:"import-account-to-metamask"},"Import Account to Metamask"),(0,o.kt)("p",null,"Close the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings"),", go to ",(0,o.kt)("inlineCode",{parentName:"p"},"My Accounts")," (top right circle) and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Import Account"),". You should see an image like the following one:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"metamask manual import account page",src:n(5439).Z,width:"2170",height:"1148"})),(0,o.kt)("p",null,"Now you can export your private key from the terminal using the following command. Again, make sure to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"mykey")," with the name of the key that you want to export and use the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"keyring-backend"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pointd keys unsafe-export-eth-key mykey\n")),(0,o.kt)("p",null,"Go back to the browser and select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Private Key")," option. Then paste the private key exported from the ",(0,o.kt)("inlineCode",{parentName:"p"},"unsafe-export-eth-key")," command."),(0,o.kt)("p",null,"Your account balance should show up as ",(0,o.kt)("inlineCode",{parentName:"p"},"1 tPoint Chain")," and do transfers as usual."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If it takes some time to load the balance of the account, change the network to ",(0,o.kt)("inlineCode",{parentName:"p"},"Main Ethereum Network")," (or any other than ",(0,o.kt)("inlineCode",{parentName:"p"},"Localhost 8545")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Point Chain"),") and then switch back to ",(0,o.kt)("inlineCode",{parentName:"p"},"Point Chain"),".")),(0,o.kt)("h2",{id:"reset-account"},"Reset Account"),(0,o.kt)("p",null,"If you used your Metamask account for a legacy testnet/mainnet upgrade, you will need to reset your account in order to use it with the new network. This will clear your account's transaction history, but it won't change the balances in your accounts or require you to re-enter your ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Recovery Phrase"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you download your ",(0,o.kt)("a",{parentName:"p",href:"#download-account-state"},"account state")," to persist public account addresses and transactions before clearing your wallet accounts.")),(0,o.kt)("p",null,"Go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced"),"  and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Account")," button as shown below:"),(0,o.kt)("h2",{id:"download-account-state"},"Download Account State"),(0,o.kt)("p",null,"To see your Metamask logs, click the top right circle and go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"State Logs"),". If you search through the JSON file for the account address you'll find the transaction history."))}m.isMDXComponent=!0},5439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_import-4208a57a26979e3849966a19d9caadfd.png"},1340:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/metamask_network_settings-04d44958085bdd1275f7983e8a3d6049.png"}}]);