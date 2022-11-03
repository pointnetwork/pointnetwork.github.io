"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[8729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Automated Upgrades",sidebar_label:"Automated Upgrades"},i="Automated Upgrades",s={unversionedId:"point_chain/validators/upgrades/automated",id:"point_chain/validators/upgrades/automated",title:"Automated Upgrades",description:"Learn how to automate chain upgrades using Cosmovisor.",source:"@site/docs/point_chain/validators/upgrades/automated.md",sourceDirName:"point_chain/validators/upgrades",slug:"/point_chain/validators/upgrades/automated",permalink:"/docs/point_chain/validators/upgrades/automated",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/upgrades/automated.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Automated Upgrades",sidebar_label:"Automated Upgrades"},sidebar:"pnSidebar",previous:{title:"Manual Upgrades",permalink:"/docs/point_chain/validators/upgrades/manual"},next:{title:"FAQ",permalink:"/docs/point_chain/validators/faq"}},l={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Using Cosmovisor",id:"using-cosmovisor",level:2},{value:"1. Setup Cosmovisor",id:"1-setup-cosmovisor",level:3},{value:"2. Download the Point Chain release",id:"2-download-the-point-chain-release",level:3},{value:"2.a) Manual Download",id:"2a-manual-download",level:4},{value:"2.b) Automatic Download",id:"2b-automatic-download",level:4},{value:"3. Start your node",id:"3-start-your-node",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automated-upgrades"},"Automated Upgrades"),(0,a.kt)("p",null,"Learn how to automate chain upgrades using Cosmovisor."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html#installation"},"Install Cosmovisor"))),(0,a.kt)("h2",{id:"using-cosmovisor"},"Using Cosmovisor"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, cosmovisor can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udc49 For more info about Cosmovisor, please refer to the project official documentation ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html"},"here"),".")),(0,a.kt)("p",null,"We highly recommend validators use Cosmovisor to run their nodes. This will make low-downtime upgrades smoother, as validators don't have to ",(0,a.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/upgrades/manual"},"manually upgrade")," binaries during the upgrade. Instead users can ",(0,a.kt)("a",{parentName:"p",href:"#manual-download"},"pre-install")," new binaries, and Cosmovisor will automatically update them based on on-chain Software Upgrade proposals."),(0,a.kt)("h3",{id:"1-setup-cosmovisor"},"1. Setup Cosmovisor"),(0,a.kt)("p",null,"Set up the Cosmovisor environment variables. We recommend setting these in your ",(0,a.kt)("inlineCode",{parentName:"p"},".profile")," so it is automatically set in every session."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "# Setup Cosmovisor" >> ~/.profile\necho "export DAEMON_NAME=pointd" >> ~/.profile\necho "export DAEMON_HOME=$HOME/.pointd" >> ~/.profile\nsource ~/.profile\n')),(0,a.kt)("p",null,"After this, you must make the necessary folders for ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmosvisor")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"DAEMON_HOME")," directory (",(0,a.kt)("inlineCode",{parentName:"p"},"~/.pointd"),") and copy over the current binary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.pointd/cosmovisor\nmkdir -p ~/.pointd/cosmovisor/genesis\nmkdir -p ~/.pointd/cosmovisor/genesis/bin\nmkdir -p ~/.pointd/cosmovisor/upgrades\n\ncp $GOPATH/bin/pointd ~/.pointd/cosmovisor/genesis/bin\n")),(0,a.kt)("p",null,"To check that you did this correctly, ensure your versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pointd")," are the same:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor version\npointd version\n")),(0,a.kt)("h3",{id:"2-download-the-point-chain-release"},"2. Download the Point Chain release"),(0,a.kt)("h4",{id:"2a-manual-download"},"2.a) Manual Download"),(0,a.kt)("p",null,"Cosmovisor will continually poll the ",(0,a.kt)("inlineCode",{parentName:"p"},"$DAEMON_HOME/data/upgrade-info.json")," for new upgrade instructions. When an upgrade is ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain/releases"},"released"),", node operators need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download (",(0,a.kt)("strong",{parentName:"li"},"NOT INSTALL"),") the binary for the new release"),(0,a.kt)("li",{parentName:"ol"},"Place it under ",(0,a.kt)("inlineCode",{parentName:"li"},"$DAEMON_HOME/cosmovisor/upgrades/<name>/bin"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"<name>")," is the URI-encoded name of the upgrade as specified in the Software Upgrade Plan.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),": for a ",(0,a.kt)("inlineCode",{parentName:"p"},"Plan")," with name ",(0,a.kt)("inlineCode",{parentName:"p"},"v3.0.0")," with the following ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade-info.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "binaries": {\n        "darwin/arm64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Darwin_arm64.tar.gz",\n        "darwin/x86_64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Darwin_x86_64.tar.gz",\n        "linux/arm64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Linux_arm64.tar.gz",\n        "linux/x86_64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Linux_x86_64.tar.gz",\n        "windows/x86_64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point_chain_3.0.0_Windows_x86_64.zip"\n    }\n}\n')),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor/")," directory should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor/\n\u251c\u2500\u2500 current/   # either genesis or upgrades/<name>\n\u251c\u2500\u2500 genesis\n\u2502   \u2514\u2500\u2500 bin\n\u2502       \u2514\u2500\u2500 pointd\n\u2514\u2500\u2500 upgrades\n    \u2514\u2500\u2500 v3.0.0\n        \u251c\u2500\u2500 bin\n        \u2502   \u2514\u2500\u2500 pointd\n        \u2514\u2500\u2500 upgrade-info.json\n")),(0,a.kt)("h4",{id:"2b-automatic-download"},"2.b) Automatic Download"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Auto-download doesn't verify in advance if a binary is available. If there will be any issue with downloading a binary, ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmovisor")," will stop and won't restart the chain (which could lead it to a halt).")),(0,a.kt)("p",null,"It is possible to have Cosmovisor ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html#auto-download"},"automatically download")," the new binary. Validators can use the automatic download option to prevent unnecessary downtime during the upgrade process. This option will automatically restart the chain with the upgrade binary once the chain has halted at the proposed ",(0,a.kt)("inlineCode",{parentName:"p"},"upgrade-height"),". The major benefit of this option is that validators can prepare the upgrade binary in advance and then relax at the time of the upgrade."),(0,a.kt)("p",null,"To set the auto-download use set the following environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=true" >> ~/.profile\n')),(0,a.kt)("h3",{id:"3-start-your-node"},"3. Start your node"),(0,a.kt)("p",null,"Now that everything is setup and ready to go, you can start your node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor start\n")),(0,a.kt)("p",null,"You will need some way to keep the process always running. If you're on linux, you can do this by creating a service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tee /etc/systemd/system/pointd.service > /dev/null <<EOF\n[Unit]\nDescription=Point Chain Daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) start\nRestart=always\nRestartSec=3\nLimitNOFILE=infinity\n\nEnvironment="DAEMON_HOME=$HOME/.pointd"\nEnvironment="DAEMON_NAME=pointd"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,a.kt)("p",null,"Then update and start the node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -S systemctl daemon-reload\nsudo -S systemctl enable pointd\nsudo -S systemctl start pointd\n")),(0,a.kt)("p",null,"You can check the status with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status pointd\n")))}u.isMDXComponent=!0}}]);