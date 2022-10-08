"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[7962],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3306:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Rollback",sidebar_label:"Rollback"},i="Rollback",l={unversionedId:"point_chain/validators/upgrades/rollback",id:"point_chain/validators/upgrades/rollback",title:"Rollback",description:"Learn how to rollback the chain version in the case of an unsuccessful chain upgrade.",source:"@site/docs/point_chain/validators/upgrades/rollback.md",sourceDirName:"point_chain/validators/upgrades",slug:"/point_chain/validators/upgrades/rollback",permalink:"/docs/point_chain/validators/upgrades/rollback",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/point_chain/validators/upgrades/rollback.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1665224220,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{title:"Rollback",sidebar_label:"Rollback"},sidebar:"pnSidebar",previous:{title:"Upgrades",permalink:"/docs/point_chain/validators/upgrades/"},next:{title:"Manual Upgrades",permalink:"/docs/point_chain/validators/upgrades/manual"}},s={},p=[{value:"Restoring State Procedure",id:"restoring-state-procedure",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rollback"},"Rollback"),(0,n.kt)("p",null,"Learn how to rollback the chain version in the case of an unsuccessful chain upgrade."),(0,n.kt)("p",null,"In order to restore a previous chain version, the following data must be recovered by validators:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the database that contains the state of the previous chain (in ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.pointd/data")," by default)"),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("inlineCode",{parentName:"li"},"priv_validator_state.json")," file of the validator (also in ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.pointd/data")," by default)")),(0,n.kt)("p",null,"If validators don't possess their database data, another validator should share a copy of the database. Validators will be able to download a copy of the data and verify it before starting their node. If validators don't have the backup ",(0,n.kt)("inlineCode",{parentName:"p"},"priv_validator_state.json")," file, then those validators will not have double-sign protection on their first block."),(0,n.kt)("h2",{id:"restoring-state-procedure"},"Restoring State Procedure"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"First, stop your node.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then, copy the contents of your backup data directory back to the ",(0,n.kt)("inlineCode",{parentName:"p"},"$EVMOS_HOME/data")," directory (which, by default, should be ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.pointd/data"),")."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'# Assumes backup is stored in "backup" directory\nrm -rf ~/.pointd/data\nmv backup/.pointd/data ~/.pointd/data\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Next, install the previous version of Point Chain.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# from pointd directory\ngit checkout <prev_version>\nmake install\n## verify version\npointd version --long\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Finally, start the node.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pointd start\n")))}d.isMDXComponent=!0}}]);