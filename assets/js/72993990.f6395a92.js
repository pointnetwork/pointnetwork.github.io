"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[928],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(d,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},l),{},{components:n})):a.createElement(h,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24612:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],s={title:"Manual Upgrades",sidebar_label:"Manual Upgrades"},d="Manual Upgrades",p={unversionedId:"point_chain/validators/upgrades/manual",id:"point_chain/validators/upgrades/manual",title:"Manual Upgrades",description:"Learn how to manually upgrade your node.",source:"@site/docs/point_chain/validators/upgrades/manual.md",sourceDirName:"point_chain/validators/upgrades",slug:"/point_chain/validators/upgrades/manual",permalink:"/docs/point_chain/validators/upgrades/manual",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/upgrades/manual.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1663588940,formattedLastUpdatedAt:"9/19/2022",frontMatter:{title:"Manual Upgrades",sidebar_label:"Manual Upgrades"},sidebar:"pnSidebar",previous:{title:"Rollback",permalink:"/docs/point_chain/validators/upgrades/rollback"},next:{title:"Automated Upgrades",permalink:"/docs/point_chain/validators/upgrades/automated"}},l=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"1. Upgrade the Point Chain version",id:"1-upgrade-the-point-chain-version",children:[],level:2},{value:"2. Replace Genesis file",id:"2-replace-genesis-file",children:[],level:2},{value:"3. Data Reset",id:"3-data-reset",children:[],level:2},{value:"4. Restart Node",id:"4-restart-node",children:[],level:2}],c={toc:l};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manual-upgrades"},"Manual Upgrades"),(0,r.kt)("p",null,"Learn how to manually upgrade your node."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/quickstart/installation"},"Install Point Chain"))),(0,r.kt)("h2",{id:"1-upgrade-the-point-chain-version"},"1. Upgrade the Point Chain version"),(0,r.kt)("p",null,"Before upgrading the Point Chain version. Stop your instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl/Cmd+C"),"."),(0,r.kt)("p",null,"Next, upgrade the software to the desired release version. Check the Point Chain ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetworkmos/point-chain/releases"},"releases page")," for details on each release."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Ensure that the version installed matches the one needed for the network you are running (mainnet or testnet)."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd point-chain\ngit fetch --all && git checkout <new_version>\nmake install\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you have issues at this step, please check that you have the latest stable version of ",(0,r.kt)("a",{parentName:"p",href:"https://golang.org/dl/"},"Golang")," installed."))),(0,r.kt)("p",null,"Verify that you've successfully installed Point Chain on your system by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"version")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ pointd version --long\n\nname: point\nserver_name: pointd\nversion: 3.0.0\ncommit: fe9df43332800a74a163c014c69e62765d8206e3\nbuild_tags: netgo,ledger\ngo: go version go1.18 darwin/amd64\n...\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the software version does not match, then please check your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," to ensure the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," is running."))),(0,r.kt)("h2",{id:"2-replace-genesis-file"},"2. Replace Genesis file"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can find the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file for mainnet or testnet in the following repositories:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet and Testnet"),": ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/point-chain-config"},"github.com/pointnetwork/point-chain-config"))))),(0,r.kt)("p",null,"Save the new genesis as ",(0,r.kt)("inlineCode",{parentName:"p"},"new_genesis.json"),". Then, replace the old ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," located in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config/")," directory with ",(0,r.kt)("inlineCode",{parentName:"p"},"new_genesis.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/.pointd/config\ncp -f genesis.json new_genesis.json\nmv new_genesis.json genesis.json\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"sha256sum")," to check the hash of the downloaded genesis against the expected genesis."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~/.pointd/config\necho "<expected_hash>  genesis.json" | sha256sum -c\n')))),(0,r.kt)("h2",{id:"3-data-reset"},"3. Data Reset"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/upgrades/"},"here")," if the version you are upgrading require a data reset (hard fork). If this is not the case, you can skip to ",(0,r.kt)("a",{parentName:"p",href:"#restart-node"},"Restart"),"."))),(0,r.kt)("p",null,"Remove the outdated files and reset the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm $HOME/.pointd/config/addrbook.json\npointd tendermint unsafe-reset-all --home $HOME/.pointd\n")),(0,r.kt)("p",null,"Your node is now in a pristine state while keeping the original ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml"),". If you had any sentry nodes or full nodes setup before,\nyour node will still try to connect to them, but may fail if they haven't also\nbeen upgraded."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udea8 ",(0,r.kt)("strong",{parentName:"p"},"IMPORTANT")," \ud83d\udea8"),(0,r.kt)("p",{parentName:"div"},"Make sure that every node has a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json"),". ",(0,r.kt)("strong",{parentName:"p"},"DO NOT")," copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," from an old node to multiple new nodes. Running two nodes with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"priv_validator.json")," will cause you to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/consensus/signing.html#double-signing"},"double sign"),"."))),(0,r.kt)("h2",{id:"4-restart-node"},"4. Restart Node"),(0,r.kt)("p",null,"To restart your node once the new genesis has been updated, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")))}m.isMDXComponent=!0}}]);