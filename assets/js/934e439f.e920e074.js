"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8729],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Automated Upgrades",sidebar_label:"Automated Upgrades"},l="Automated Upgrades",p={unversionedId:"point_chain/validators/upgrades/automated",id:"point_chain/validators/upgrades/automated",title:"Automated Upgrades",description:"Learn how to automate chain upgrades using Cosmovisor.",source:"@site/docs/point_chain/validators/upgrades/automated.md",sourceDirName:"point_chain/validators/upgrades",slug:"/point_chain/validators/upgrades/automated",permalink:"/docs/point_chain/validators/upgrades/automated",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/upgrades/automated.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1663321891,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Automated Upgrades",sidebar_label:"Automated Upgrades"},sidebar:"pnSidebar",previous:{title:"Manual Upgrades",permalink:"/docs/point_chain/validators/upgrades/manual"},next:{title:"FAQ",permalink:"/docs/point_chain/validators/faq"}},d=[{value:"Pre-requisites",id:"pre-requisites",children:[],level:2},{value:"Using Cosmovisor",id:"using-cosmovisor",children:[{value:"1. Setup Cosmovisor",id:"1-setup-cosmovisor",children:[],level:3},{value:"2. Download the Point Chain release",id:"2-download-the-point-chain-release",children:[{value:"2.a) Manual Download",id:"2a-manual-download",children:[],level:4},{value:"2.b) Automatic Download",id:"2b-automatic-download",children:[],level:4}],level:3},{value:"3. Start your node",id:"3-start-your-node",children:[],level:3}],level:2}],c={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"automated-upgrades"},"Automated Upgrades"),(0,r.kt)("p",null,"Learn how to automate chain upgrades using Cosmovisor."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html#installation"},"Install Cosmovisor"))),(0,r.kt)("h2",{id:"using-cosmovisor"},"Using Cosmovisor"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"cosmovisor")," is a small process manager for Cosmos SDK application binaries that monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, cosmovisor can automatically download the new binary, stop the current binary, switch from the old binary to the new one, and finally restart the node with the new binary.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udc49 For more info about Cosmovisor, please refer to the project official documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html"},"here"),"."))),(0,r.kt)("p",null,"We highly recommend validators use Cosmovisor to run their nodes. This will make low-downtime upgrades smoother, as validators don't have to ",(0,r.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/upgrades/manual"},"manually upgrade")," binaries during the upgrade. Instead users can ",(0,r.kt)("a",{parentName:"p",href:"#manual-download"},"pre-install")," new binaries, and Cosmovisor will automatically update them based on on-chain Software Upgrade proposals."),(0,r.kt)("h3",{id:"1-setup-cosmovisor"},"1. Setup Cosmovisor"),(0,r.kt)("p",null,"Set up the Cosmovisor environment variables. We recommend setting these in your ",(0,r.kt)("inlineCode",{parentName:"p"},".profile")," so it is automatically set in every session."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "# Setup Cosmovisor" >> ~/.profile\necho "export DAEMON_NAME=pointd" >> ~/.profile\necho "export DAEMON_HOME=$HOME/.pointd" >> ~/.profile\nsource ~/.profile\n')),(0,r.kt)("p",null,"After this, you must make the necessary folders for ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmosvisor")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"DAEMON_HOME")," directory (",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pointd"),") and copy over the current binary."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/.pointd/cosmovisor\nmkdir -p ~/.pointd/cosmovisor/genesis\nmkdir -p ~/.pointd/cosmovisor/genesis/bin\nmkdir -p ~/.pointd/cosmovisor/upgrades\n\ncp $GOPATH/bin/pointd ~/.pointd/cosmovisor/genesis/bin\n")),(0,r.kt)("p",null,"To check that you did this correctly, ensure your versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmovisor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pointd")," are the same:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor version\npointd version\n")),(0,r.kt)("h3",{id:"2-download-the-point-chain-release"},"2. Download the Point Chain release"),(0,r.kt)("h4",{id:"2a-manual-download"},"2.a) Manual Download"),(0,r.kt)("p",null,"Cosmovisor will continually poll the ",(0,r.kt)("inlineCode",{parentName:"p"},"$DAEMON_HOME/data/upgrade-info.json")," for new upgrade instructions. When an upgrade is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-chain/releases"},"released"),", node operators need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download (",(0,r.kt)("strong",{parentName:"li"},"NOT INSTALL"),") the binary for the new release"),(0,r.kt)("li",{parentName:"ol"},"Place it under ",(0,r.kt)("inlineCode",{parentName:"li"},"$DAEMON_HOME/cosmovisor/upgrades/<name>/bin"),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"<name>")," is the URI-encoded name of the upgrade as specified in the Software Upgrade Plan.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),": for a ",(0,r.kt)("inlineCode",{parentName:"p"},"Plan")," with name ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0")," with the following ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-info.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "binaries": {\n        "darwin/arm64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Darwin_arm64.tar.gz",\n        "darwin/x86_64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Darwin_x86_64.tar.gz",\n        "linux/arm64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Linux_arm64.tar.gz",\n        "linux/x86_64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point-chain_3.0.0_Linux_x86_64.tar.gz",\n        "windows/x86_64": "https://github.com/pointnetwork/point-chain]/releases/download/v3.0.0/point_chain_3.0.0_Windows_x86_64.zip"\n    }\n}\n')),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmovisor/")," directory should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cosmovisor/\n\u251c\u2500\u2500 current/   # either genesis or upgrades/<name>\n\u251c\u2500\u2500 genesis\n\u2502   \u2514\u2500\u2500 bin\n\u2502       \u2514\u2500\u2500 pointd\n\u2514\u2500\u2500 upgrades\n    \u2514\u2500\u2500 v3.0.0\n        \u251c\u2500\u2500 bin\n        \u2502   \u2514\u2500\u2500 pointd\n        \u2514\u2500\u2500 upgrade-info.json\n")),(0,r.kt)("h4",{id:"2b-automatic-download"},"2.b) Automatic Download"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"NOTE"),": Auto-download doesn't verify in advance if a binary is available. If there will be any issue with downloading a binary, ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmovisor")," will stop and won't restart an the chain (which could lead it to a halt)."))),(0,r.kt)("p",null,"It is possible to have Cosmovisor ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html#auto-download"},"automatically download")," the new binary. Validators can use the automatic download option to prevent unnecessary downtime during the upgrade process. This option will automatically restart the chain with the upgrade binary once the chain has halted at the proposed ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-height"),". The major benefit of this option is that validators can prepare the upgrade binary in advance and then relax at the time of the upgrade."),(0,r.kt)("p",null,"To set the auto-download use set the following environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=true" >> ~/.profile\n')),(0,r.kt)("h3",{id:"3-start-your-node"},"3. Start your node"),(0,r.kt)("p",null,"Now that everything is setup and ready to go, you can start your node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cosmovisor start\n")),(0,r.kt)("p",null,"You will need some way to keep the process always running. If you're on linux, you can do this by creating a service."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo tee /etc/systemd/system/pointd.service > /dev/null <<EOF\n[Unit]\nDescription=Point Chain Daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$(which cosmovisor) start\nRestart=always\nRestartSec=3\nLimitNOFILE=infinity\n\nEnvironment="DAEMON_HOME=$HOME/.pointd"\nEnvironment="DAEMON_NAME=pointd"\nEnvironment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"\nEnvironment="DAEMON_RESTART_AFTER_UPGRADE=true"\n\n[Install]\nWantedBy=multi-user.target\nEOF\n')),(0,r.kt)("p",null,"Then update and start the node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -S systemctl daemon-reload\nsudo -S systemctl enable pointd\nsudo -S systemctl start pointd\n")),(0,r.kt)("p",null,"You can check the status with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status pointd\n")))}u.isMDXComponent=!0}}]);