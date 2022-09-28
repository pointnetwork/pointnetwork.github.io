"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5752],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||a;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var i=n(83117),o=n(80102),a=(n(67294),n(3905)),r=["components"],s={title:"Disk Usage Optimization",sidebar_label:"Disk Usage Optimization"},l="Disk Usage Optimization",p={unversionedId:"point_chain/validators/setup/disk_optimization",id:"point_chain/validators/setup/disk_optimization",title:"Disk Usage Optimization",description:"Customize the configuration settings to lower the disk requirements for your validator node",source:"@site/docs/point_chain/validators/setup/disk_optimization.md",sourceDirName:"point_chain/validators/setup",slug:"/point_chain/validators/setup/disk_optimization",permalink:"/docs/point_chain/validators/setup/disk_optimization",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/setup/disk_optimization.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1664355522,formattedLastUpdatedAt:"9/28/2022",frontMatter:{title:"Disk Usage Optimization",sidebar_label:"Disk Usage Optimization"},sidebar:"pnSidebar",previous:{title:"Configuration",permalink:"/docs/point_chain/validators/setup/configuration"},next:{title:"State Sync",permalink:"/docs/point_chain/validators/setup/statesync"}},u=[{value:"Indexing",id:"indexing",children:[],level:2},{value:"State-sync snapshots",id:"state-sync-snapshots",children:[],level:2},{value:"Configure pruning",id:"configure-pruning",children:[],level:2},{value:"Logging",id:"logging",children:[],level:2},{value:"Results",id:"results",children:[],level:2}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"disk-usage-optimization"},"Disk Usage Optimization"),(0,a.kt)("p",null,"Customize the configuration settings to lower the disk requirements for your validator node"),(0,a.kt)("p",null,"Blockchain database tends to grow over time, depending e.g. on block\nspeed and transaction amount. For Point Chain, we are talking about close to\n100GB of disk usage in first two weeks."),(0,a.kt)("p",null,"There are few configurations that can be done to reduce the required\ndisk usage quite significantly. Some of these changes take full effect\nonly when you do the configuration and start syncing from start with\nthem in use."),(0,a.kt)("h2",{id:"indexing"},"Indexing"),(0,a.kt)("p",null,"If you do not need to query transactions from the specific node, you can\ndisable indexing. On ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'indexer = "null"\n')),(0,a.kt)("p",null,"If you do this on already synced node, the collected index is not purged\nautomatically, you need to delete it manually. The index is located\nunder the database directory with name ",(0,a.kt)("inlineCode",{parentName:"p"},"data/tx_index.db/"),"."),(0,a.kt)("h2",{id:"state-sync-snapshots"},"State-sync snapshots"),(0,a.kt)("p",null,"I believe this was disabled by default on Point Chain, but listing it in any\ncase here. On ",(0,a.kt)("inlineCode",{parentName:"p"},"app.toml")," set"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},"snapshot-interval = 0\n")),(0,a.kt)("p",null,"Note that if state-sync was enabled on the network and working properly,\nit would allow one to sync a new node in few minutes. But this node\nwould not have the history."),(0,a.kt)("h2",{id:"configure-pruning"},"Configure pruning"),(0,a.kt)("p",null,"By default every 500th state, and the last 100 states are kept. This\nconsumes a lot of disk space on long run, and can be optimized with\nfollowing custom configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'pruning = "custom"\npruning-keep-recent = "100"\npruning-keep-every = "0"\npruning-interval = "10"\n')),(0,a.kt)("p",null,"Configuring ",(0,a.kt)("inlineCode",{parentName:"p"},'pruning-keep-recent = "0"')," might sound tempting, but this\nwill risk database corruption if the ",(0,a.kt)("inlineCode",{parentName:"p"},"pointd")," is killed for any reason.\nThus, it is recommended to keep the few latest states."),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("p",null,"By default the logging level is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", and this produces a lot of\nlogs. This log level might be good when starting up to see that the\nnode starts syncing properly. However, after you see the syncing is\ngoing smoothly, you can lower the log level to ",(0,a.kt)("inlineCode",{parentName:"p"},"warn")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"). On\n",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," set the following"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'log_level = "warn"\n')),(0,a.kt)("p",null,"Also ensure your log rotation is configured properly."),(0,a.kt)("h2",{id:"results"},"Results"),(0,a.kt)("p",null,"Below is the disk usage after two weeks of Point Chain testnet. The default\nconfiguration results in disk usage of 90GB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"5.3G    ./state.db\n70G     ./application.db\n20K     ./snapshots/metadata.db\n24K     ./snapshots\n9.0G    ./blockstore.db\n20K     ./evidence.db\n1018M   ./cs.wal\n4.7G    ./tx_index.db\n90G     .\n")),(0,a.kt)("p",null,"This optimized configuration has reduced the disk usage to 17 GB."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"17G     .\n1.1G    ./cs.wal\n946M    ./application.db\n20K     ./evidence.db\n9.1G    ./blockstore.db\n24K     ./snapshots\n20K     ./snapshots/metadata.db\n5.3G    ./state.db\n")))}c.isMDXComponent=!0}}]);