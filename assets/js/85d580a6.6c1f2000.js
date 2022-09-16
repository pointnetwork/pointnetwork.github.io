"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6967],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),d=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(y,i(i({ref:e},u),{},{components:n})):r.createElement(y,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33490:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Validator Security Checklist",sidebar_label:"Validator Security Checklist"},s="Validator Security Checklist",d={unversionedId:"point_chain/validators/security/checklist",id:"point_chain/validators/security/checklist",title:"Validator Security Checklist",description:"Conduct a security checklist survey to go through the security measures of a validator",source:"@site/docs/point_chain/validators/security/checklist.md",sourceDirName:"point_chain/validators/security",slug:"/point_chain/validators/security/checklist",permalink:"/docs/point_chain/validators/security/checklist",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/security/checklist.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1663321891,formattedLastUpdatedAt:"9/16/2022",frontMatter:{title:"Validator Security Checklist",sidebar_label:"Validator Security Checklist"},sidebar:"pnSidebar",previous:{title:"endermint KMS + Ledger",permalink:"/docs/point_chain/validators/security/kms_ledger"},next:{title:"Backup",permalink:"/docs/point_chain/validators/security/backup"}},u=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",children:[],level:2},{value:"Conduct Survey on General Controls of Hosting Data Centre",id:"conduct-survey-on-general-controls-of-hosting-data-centre",children:[],level:2},{value:"Current Status of Node Setup",id:"current-status-of-node-setup",children:[],level:2}],c={toc:u};function p(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"validator-security-checklist"},"Validator Security Checklist"),(0,o.kt)("p",null," Conduct a security checklist survey to go through the security measures of a validator"),(0,o.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite Readings"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/point_chain/validators/security/"},"Validator Security"))),(0,o.kt)("h2",{id:"conduct-survey-on-general-controls-of-hosting-data-centre"},"Conduct Survey on General Controls of Hosting Data Centre"),(0,o.kt)("p",null,"Perform a survey on the hosting data centre, and compare your result with the best practice suggested below"),(0,o.kt)("p",null,"For example, your hosting data centre should have following features"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Controls Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Description of Best Practice"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Center"),(0,o.kt)("td",{parentName:"tr",align:null},"Redundant Power")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Center"),(0,o.kt)("td",{parentName:"tr",align:null},"Redundant Cooling")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Center"),(0,o.kt)("td",{parentName:"tr",align:null},"Redundant Networking")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Center"),(0,o.kt)("td",{parentName:"tr",align:null},"Physical Cage/Gated Access")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data Center"),(0,o.kt)("td",{parentName:"tr",align:null},"Remote Alerting Security Camera")))),(0,o.kt)("h2",{id:"current-status-of-node-setup"},"Current Status of Node Setup"),(0,o.kt)("p",null,"Perform a survey on your current status of node setup, and compare your result with the best practice suggested below"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Controls Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Description of Best Practice"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"General System Security"),(0,o.kt)("td",{parentName:"tr",align:null},"Operating system appropriately patched. Kernel is updated to latest stable version. The node should be operated in x86_64 environment")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"General System Security"),(0,o.kt)("td",{parentName:"tr",align:null},"Auto-updates for operation system is configured. Toolkit for automatic upgrades exists (e.g. auter, yum-cron, dnf-automatic, unattended-upgrades)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"General System Security"),(0,o.kt)("td",{parentName:"tr",align:null},"Security framework enabled and enforcing. SELinux / AppArmor / Tomoyo / Grsecurity Enabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"General System Security"),(0,o.kt)("td",{parentName:"tr",align:null},"No insecure and unnecessary services Installed. (e.g. telnet, rsh, inetd, etc ...)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"General System Security"),(0,o.kt)("td",{parentName:"tr",align:null},"GRUB boot loader password is configured. Grub2 configured with password")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"General System Security"),(0,o.kt)("td",{parentName:"tr",align:null},"Only root permissions on core system files")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"File Directory Security"),(0,o.kt)("td",{parentName:"tr",align:null},"Secure the directory ",(0,o.kt)("inlineCode",{parentName:"td"},"~/.pointd")," to be accessible by owner only")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Binary Configuration"),(0,o.kt)("td",{parentName:"tr",align:null},"Recommend the following settings in config.toml for both performance and security - For ",(0,o.kt)("strong",{parentName:"td"},"sentry nodes"),": ",(0,o.kt)("inlineCode",{parentName:"td"},'max_num_inbound_peers = 500, max_num_outbound_peers = 50, flush_throttle_timeout = "300ms"')," - For ",(0,o.kt)("strong",{parentName:"td"},"validator node"),": ",(0,o.kt)("inlineCode",{parentName:"td"},'max_num_inbound_peers = 100, max_num_outbound_peers = 10, flush_throttle_timeout = "100ms"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Security & Remote Access"),(0,o.kt)("td",{parentName:"tr",align:null},"Following Password policies are enforced: No Blank Passwords; Weak Passwords Not Allowed")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Account Security & Remote Access"),(0,o.kt)("td",{parentName:"tr",align:null},"Following SSH configurations are enabled: PermitRootLogin: ",(0,o.kt)("inlineCode",{parentName:"td"},"no"),"; PasswordAuthentication ",(0,o.kt)("inlineCode",{parentName:"td"},"no"),"; ChallengeResponseAuthentication ",(0,o.kt)("inlineCode",{parentName:"td"},"no"),"; UsePAM ",(0,o.kt)("inlineCode",{parentName:"td"},"yes"),"; AllowUsers ",(0,o.kt)("inlineCode",{parentName:"td"},"Necessary user only"),"; AllowGroups ",(0,o.kt)("inlineCode",{parentName:"td"},"Necessary group only"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Networking"),(0,o.kt)("td",{parentName:"tr",align:null},"Network throughput test using speedtest. Recommend to have at least 5 Mbps upload, 5 Mbps download)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Networking"),(0,o.kt)("td",{parentName:"tr",align:null},"Host-based (e.g. iptables) or cloud-based (e.g. AWS Security Group) firewall is enabled to protect all the involved nodes. Remote management ports (e.g. SSH - TCP 22) should only be exposed to selected IP instead of the internet. No overly permissive rules (e.g. wide range of allowed ports 1-65535) should be set. For internal communication channels between nodes, they should be set with specific source and destination addresses. For internet reachable nodes, set TCP 26656 to be the only incoming port, if possible.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Networking"),(0,o.kt)("td",{parentName:"tr",align:null},"Intrusion Detection / Prevention System (e.g. Fail2Ban, Snort, OSSEC) is installed and enforcing")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Networking"),(0,o.kt)("td",{parentName:"tr",align:null},"Setup sentry node architecture to protect validator node, and set firewall rules to restrict direct internet access to it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Networking"),(0,o.kt)("td",{parentName:"tr",align:null},"The Remote Procedure Call (RPC) provides sensitive operations and information that is not supposed to be exposed to the Internet. By default, RPC is on and allow connection from ",(0,o.kt)("inlineCode",{parentName:"td"},"127.0.0.1")," only. Please be extremely careful if you need to allow RPC from other IP addresses.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Redundancy"),(0,o.kt)("td",{parentName:"tr",align:null},"Hot standby node is setup with the same configuration as main node")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Redundancy"),(0,o.kt)("td",{parentName:"tr",align:null},"System monitoring and alerting is setup to alert owners on anomalies")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Key Management"),(0,o.kt)("td",{parentName:"tr",align:null},"Setup ",(0,o.kt)("a",{parentName:"td",href:"/docs/point_chain/validators/security/kms"},"Tendermint KMS")," with HSM or equivalent online service, which should replace the static key file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DDOS"),(0,o.kt)("td",{parentName:"tr",align:null},"Setup validator in accordance with sentry architecture. Kindly refer to the setup ",(0,o.kt)("a",{parentName:"td",href:"https://docs.tendermint.com/master/nodes/validators.html#setting-up-a-validator"},"instruction")," and ",(0,o.kt)("a",{parentName:"td",href:"https://forum.cosmos.network/t/sentry-node-architecture-overview/454"},"detailed description"),".")))))}p.isMDXComponent=!0}}]);