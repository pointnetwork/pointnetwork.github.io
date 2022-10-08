"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Manual Upgrades",sidebar_label:"Manual Upgrades"},i="Manual Upgrades",s={unversionedId:"point_chain/validators/upgrades/manual",id:"point_chain/validators/upgrades/manual",title:"Manual Upgrades",description:"Learn how to manually upgrade your node.",source:"@site/docs/point_chain/validators/upgrades/manual.md",sourceDirName:"point_chain/validators/upgrades",slug:"/point_chain/validators/upgrades/manual",permalink:"/docs/point_chain/validators/upgrades/manual",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/upgrades/manual.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1665224220,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{title:"Manual Upgrades",sidebar_label:"Manual Upgrades"},sidebar:"pnSidebar",previous:{title:"Rollback",permalink:"/docs/point_chain/validators/upgrades/rollback"},next:{title:"Automated Upgrades",permalink:"/docs/point_chain/validators/upgrades/automated"}},p={},l=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"1. Upgrade the Point Chain version",id:"1-upgrade-the-point-chain-version",level:2},{value:"2. Replace Genesis file",id:"2-replace-genesis-file",level:2},{value:"3. Data Reset",id:"3-data-reset",level:2},{value:"4. Restart Node",id:"4-restart-node",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-upgrades"},"Manual Upgrades"),(0,r.kt)("p",null,"Learn how to manually upgrade your node."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/quickstart/installation"},"Install Point Chain"))),(0,r.kt)("h2",{id:"1-upgrade-the-point-chain-version"},"1. Upgrade the Point Chain version"),(0,r.kt)("p",null,"Before upgrading the Point Chain version. Stop your instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl/Cmd+C"),"."),(0,r.kt)("p",null,"Next, upgrade the software to the desired release version. Check the Point Chain ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetworkmos/point-chain/releases"},"releases page")," for details on each release."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that the version installed matches the one needed for the network you are running (mainnet or testnet).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd point-chain\ngit fetch --all && git checkout <new_version>\nmake install\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you have issues at this step, please check that you have the latest stable version of ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Golang")," installed.")),(0,r.kt)("p",null,"Verify that you've successfully installed Point Chain on your system by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pointd version --long\n\nname: point\nserver_name: pointd\nversion: 3.0.0\ncommit: fe9df43332800a74a163c014c69e62765d8206e3\nbuild_tags: netgo,ledger\ngo: go version go1.18 darwin/amd64\n...\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If the software version does not match, then please check your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," to ensure the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," is running.")),(0,r.kt)("h2",{id:"2-replace-genesis-file"},"2. Replace Genesis file"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file for mainnet or testnet in the following repositories:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet and Testnet"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/point-chain-config"},"github.com/pointnetwork/point-chain-config")))),(0,r.kt)("p",null,"Save the new genesis as ",(0,r.kt)("inlineCode",{parentName:"p"},"new_genesis.json"),". Then, replace the old ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," located in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config/")," directory with ",(0,r.kt)("inlineCode",{parentName:"p"},"new_genesis.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/.pointd/config\ncp -f genesis.json new_genesis.json\nmv new_genesis.json genesis.json\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256sum")," to check the hash of the downloaded genesis against the expected genesis."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/.pointd/config\necho "<expected_hash>  genesis.json" | sha256sum -c\n'))),(0,r.kt)("h2",{id:"3-data-reset"},"3. Data Reset"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/upgrades/"},"here")," if the version you are upgrading require a data reset (hard fork). If this is not the case, you can skip to ",(0,r.kt)("a",{parentName:"p",href:"#restart-node"},"Restart"),".")),(0,r.kt)("p",null,"Remove the outdated files and reset the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.pointd/config/addrbook.json\npointd tendermint unsafe-reset-all --home $HOME/.pointd\n")),(0,r.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\ud83d\udea8 ",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT")," \ud83d\udea8"),(0,r.kt)("p",{parentName:"admonition"},"Make sure that every node has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". ",(0,r.kt)("strong",{parentName:"p"},"DO NOT")," copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/consensus/signing.html#double-signing"},"double sign"),".")),(0,r.kt)("h2",{id:"4-restart-node"},"4. Restart Node"),(0,r.kt)("p",null,"To restart your node once the new genesis has been updated, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")))}u.isMDXComponent=!0}}]);