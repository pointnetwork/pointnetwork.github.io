"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[2677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Configuration",sidebar_label:"Configuration"},i="Configuration",p={unversionedId:"point_chain/validators/setup/configuration",id:"point_chain/validators/setup/configuration",title:"Configuration",description:"Peers",source:"@site/docs/point_chain/validators/setup/configuration.md",sourceDirName:"point_chain/validators/setup",slug:"/point_chain/validators/setup/configuration",permalink:"/docs/point_chain/validators/setup/configuration",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/setup/configuration.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Configuration",sidebar_label:"Configuration"},sidebar:"pnSidebar",previous:{title:"Run a Validator",permalink:"/docs/point_chain/validators/setup/run_validator"},next:{title:"Disk Usage Optimization",permalink:"/docs/point_chain/validators/setup/disk_optimization"}},s={},c=[{value:"Peers",id:"peers",level:2},{value:"Sharing your Peer",id:"sharing-your-peer",level:3},{value:"Healthy peers",id:"healthy-peers",level:3}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("h2",{id:"peers"},"Peers"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"pointd/config/config.toml")," you can set your peers."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/testnet#add-persistent-peers"},"Add persistent peers section")," in our docs for an automated method, but field should look something like a comma separated string of peers (",(0,a.kt)("strong",{parentName:"p"},"NOTE do not copy, this is just an example"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'persistent_peers = "5576b0160761fe81ccdf88e06031a01bc8643d51@195.201.108.97:24656,13e850d14610f966de38fc2f925f6dc35c7f4bf4@176.9.60.27:26656,38eb4984f89899a5d8d1f04a79b356f15681bb78@18.169.155.159:26656,59c4351009223b3652674bd5ee4324926a5a11aa@51.15.133.26:26656,3a5a9022c8aa2214a7af26ebbfac49b77e34e5c5@65.108.1.46:26656,4fc0bea2044c9fd1ea8cc987119bb8bdff91aaf3@65.21.246.124:26656,6624238168de05893ca74c2b0270553189810aa7@95.216.100.80:26656,9d247286cd407dc8d07502240245f836e18c0517@149.248.32.208:26656,37d59371f7578101dee74d5a26c86128a229b8bf@194.163.172.168:26656,b607050b4e5b06e52c12fcf2db6930fd0937ef3b@95.217.107.96:26656,7a6bbbb6f6146cb11aebf77039089cd038003964@94.130.54.247:26656"\n')),(0,a.kt)("h3",{id:"sharing-your-peer"},"Sharing your Peer"),(0,a.kt)("p",null,"You can see and share your peer with the ",(0,a.kt)("inlineCode",{parentName:"p"},"tendermint show-node-id")," command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pointd tendermint show-node-id\nac29d21d0a6885465048a4481d16c12f59b2e58b\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Peer Format"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"node-id@ip:port")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"ac29d21d0a6885465048a4481d16c12f59b2e58b@143.198.224.124:26656"))),(0,a.kt)("h3",{id:"healthy-peers"},"Healthy peers"),(0,a.kt)("p",null,"If you are relying on just seed node and no persistent peers or a low amount of them, please increase the following params in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Maximum number of inbound peers\nmax_num_inbound_peers = 120\n\n# Maximum number of outbound peers to connect to, excluding persistent peers\nmax_num_outbound_peers = 60\n")))}d.isMDXComponent=!0}}]);