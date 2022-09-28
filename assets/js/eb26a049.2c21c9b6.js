"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5108],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15518:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Tendermint KMS",sidebar_label:"Tendermint KMS"},p="Tendermint KMS",s={unversionedId:"point_chain/validators/security/kms",id:"point_chain/validators/security/kms",title:"Tendermint KMS",description:"Set up a Key Management System for Point Chain",source:"@site/docs/point_chain/validators/security/kms.md",sourceDirName:"point_chain/validators/security",slug:"/point_chain/validators/security/kms",permalink:"/docs/point_chain/validators/security/kms",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/security/kms.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1664355522,formattedLastUpdatedAt:"9/28/2022",frontMatter:{title:"Tendermint KMS",sidebar_label:"Tendermint KMS"},sidebar:"pnSidebar",previous:{title:"Validator Security",permalink:"/docs/point_chain/validators/security/"},next:{title:"endermint KMS + Ledger",permalink:"/docs/point_chain/validators/security/kms_ledger"}},m=[{value:"Install Tendermint KMS onto the node",id:"install-tendermint-kms-onto-the-node",children:[{value:"Compile from source code",id:"compile-from-source-code",children:[],level:3}],level:2},{value:"Configuration",id:"configuration",children:[{value:"YubiHSM",id:"yubihsm",children:[],level:3},{value:"Ledger Tendermint app",id:"ledger-tendermint-app",children:[],level:3}],level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tendermint-kms"},"Tendermint KMS"),(0,i.kt)("p",null,"Set up a Key Management System for Point Chain"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms"},"Tendermint KMS")," is a Key Management Service (KMS) that allows separating key management from Tendermint nodes. In addition it provides other advantages such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Improved security and risk management policies"),(0,i.kt)("li",{parentName:"ul"},"Unified API and support for various HSM (hardware security modules)"),(0,i.kt)("li",{parentName:"ul"},"Double signing protection (software or hardware based)")),(0,i.kt)("p",null,"It is recommended that the KMS service runs in a separate physical hosts."),(0,i.kt)("h2",{id:"install-tendermint-kms-onto-the-node"},"Install Tendermint KMS onto the node"),(0,i.kt)("p",null,"You will need the following prerequisites:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705 ",(0,i.kt)("strong",{parentName:"p"},"Rust")," (stable; ",(0,i.kt)("strong",{parentName:"p"},"1.56+"),"): ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"https://rustup.rs/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705 ",(0,i.kt)("strong",{parentName:"p"},"C compiler"),": e.g. gcc, clang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705 ",(0,i.kt)("strong",{parentName:"p"},"pkg-config"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705 ",(0,i.kt)("strong",{parentName:"p"},"libusb")," (1.0+). Install instructions for common platforms"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705 Debian/Ubuntu"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libusb-1.0-0-dev\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705 RedHat/CentOS"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yum install libusb1-devel\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u2705 macOS (Homebrew)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"brew install libusb\n")))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"x86_64")," architecture only:"),(0,i.kt)("p",{parentName:"div"},"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"RUSTFLAGS")," environment variable:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export RUSTFLAGS=-Ctarget-feature=+aes,+ssse3\n")))),(0,i.kt)("p",null,"We are ready to install KMS. There are 2 ways to do this: compile from source or install with Rusts cargo-install. We\u2019ll use the first option."),(0,i.kt)("h3",{id:"compile-from-source-code"},"Compile from source code"),(0,i.kt)("p",null,"The following example adds ",(0,i.kt)("inlineCode",{parentName:"p"},"--features=ledger")," to enable Ledger  support.\n",(0,i.kt)("inlineCode",{parentName:"p"},"tmkms")," can be compiled directly from the git repository source code, using the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gh repo clone iqlusioninc/tmkms && cd tmkms\n[...]\ncargo build --release --features=ledger\n")),(0,i.kt)("p",null,"Alternatively, substitute ",(0,i.kt)("inlineCode",{parentName:"p"},"--features=yubihsm")," to enable ",(0,i.kt)("a",{parentName:"p",href:"https://www.yubico.com/products/hardware-security-module/"},"YubiHSM")," support."),(0,i.kt)("p",null,"If successful, it will produce the ",(0,i.kt)("inlineCode",{parentName:"p"},"tmkms")," executable located at: ",(0,i.kt)("inlineCode",{parentName:"p"},"./target/release/tmkms"),"."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"A KMS can be configured using the following HSMs"),(0,i.kt)("h3",{id:"yubihsm"},"YubiHSM"),(0,i.kt)("p",null,"Detailed information on how to setup a KMS with ",(0,i.kt)("a",{parentName:"p",href:"https://www.yubico.com/products/hardware-security-module/"},"YubiHSM 2")," can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/master/README.yubihsm.md"},"here"),"."),(0,i.kt)("h3",{id:"ledger-tendermint-app"},"Ledger Tendermint app"),(0,i.kt)("p",null,"Detailed information on how to setup a KMS with Ledger Tendermint App can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/point_chain/validators/security/kms_ledger"},"here"),"."))}u.isMDXComponent=!0}}]);