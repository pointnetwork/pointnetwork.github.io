"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[5108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Tendermint KMS",sidebar_label:"Tendermint KMS"},o="Tendermint KMS",l={unversionedId:"point_chain/validators/security/kms",id:"point_chain/validators/security/kms",title:"Tendermint KMS",description:"Set up a Key Management System for Point Chain",source:"@site/docs/point_chain/validators/security/kms.md",sourceDirName:"point_chain/validators/security",slug:"/point_chain/validators/security/kms",permalink:"/docs/point_chain/validators/security/kms",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/security/kms.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{title:"Tendermint KMS",sidebar_label:"Tendermint KMS"},sidebar:"pnSidebar",previous:{title:"Validator Security",permalink:"/docs/point_chain/validators/security/"},next:{title:"endermint KMS + Ledger",permalink:"/docs/point_chain/validators/security/kms_ledger"}},p={},s=[{value:"Install Tendermint KMS onto the node",id:"install-tendermint-kms-onto-the-node",level:2},{value:"Compile from source code",id:"compile-from-source-code",level:3},{value:"Configuration",id:"configuration",level:2},{value:"YubiHSM",id:"yubihsm",level:3},{value:"Ledger Tendermint app",id:"ledger-tendermint-app",level:3}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tendermint-kms"},"Tendermint KMS"),(0,a.kt)("p",null,"Set up a Key Management System for Point Chain"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms"},"Tendermint KMS")," is a Key Management Service (KMS) that allows separating key management from Tendermint nodes. In addition it provides other advantages such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved security and risk management policies"),(0,a.kt)("li",{parentName:"ul"},"Unified API and support for various HSM (hardware security modules)"),(0,a.kt)("li",{parentName:"ul"},"Double signing protection (software or hardware based)")),(0,a.kt)("p",null,"It is recommended that the KMS service runs in a separate physical hosts."),(0,a.kt)("h2",{id:"install-tendermint-kms-onto-the-node"},"Install Tendermint KMS onto the node"),(0,a.kt)("p",null,"You will need the following prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 ",(0,a.kt)("strong",{parentName:"p"},"Rust")," (stable; ",(0,a.kt)("strong",{parentName:"p"},"1.56+"),"): ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"https://rustup.rs/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 ",(0,a.kt)("strong",{parentName:"p"},"C compiler"),": e.g. gcc, clang")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 ",(0,a.kt)("strong",{parentName:"p"},"pkg-config"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 ",(0,a.kt)("strong",{parentName:"p"},"libusb")," (1.0+). Install instructions for common platforms"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 Debian/Ubuntu"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libusb-1.0-0-dev\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 RedHat/CentOS"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install libusb1-devel\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2705 macOS (Homebrew)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"brew install libusb\n")))))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64")," architecture only:"),(0,a.kt)("p",{parentName:"admonition"},"Configure ",(0,a.kt)("inlineCode",{parentName:"p"},"RUSTFLAGS")," environment variable:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3\n"))),(0,a.kt)("p",null,"We are ready to install KMS. There are 2 ways to do this: compile from source or install with Rusts cargo-install. We\u2019ll use the first option."),(0,a.kt)("h3",{id:"compile-from-source-code"},"Compile from source code"),(0,a.kt)("p",null,"The following example adds ",(0,a.kt)("inlineCode",{parentName:"p"},"--features=ledger")," to enable Ledger  support.\n",(0,a.kt)("inlineCode",{parentName:"p"},"tmkms")," can be compiled directly from the git repository source code, using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gh repo clone iqlusioninc/tmkms && cd tmkms\n[...]\ncargo build --release --features=ledger\n")),(0,a.kt)("p",null,"Alternatively, substitute ",(0,a.kt)("inlineCode",{parentName:"p"},"--features=yubihsm")," to enable ",(0,a.kt)("a",{parentName:"p",href:"https://www.yubico.com/products/hardware-security-module/"},"YubiHSM")," support."),(0,a.kt)("p",null,"If successful, it will produce the ",(0,a.kt)("inlineCode",{parentName:"p"},"tmkms")," executable located at: ",(0,a.kt)("inlineCode",{parentName:"p"},"./target/release/tmkms"),"."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"A KMS can be configured using the following HSMs"),(0,a.kt)("h3",{id:"yubihsm"},"YubiHSM"),(0,a.kt)("p",null,"Detailed information on how to setup a KMS with ",(0,a.kt)("a",{parentName:"p",href:"https://www.yubico.com/products/hardware-security-module/"},"YubiHSM 2")," can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/master/README.yubihsm.md"},"here"),"."),(0,a.kt)("h3",{id:"ledger-tendermint-app"},"Ledger Tendermint app"),(0,a.kt)("p",null,"Detailed information on how to setup a KMS with Ledger Tendermint App can be found ",(0,a.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/security/kms_ledger"},"here"),"."))}u.isMDXComponent=!0}}]);