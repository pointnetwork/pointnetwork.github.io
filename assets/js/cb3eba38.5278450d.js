"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[7467],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),g=o,m=s["".concat(u,".").concat(g)]||s[g]||c[g]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={id:"debugging",title:"Debugging",sidebar_label:"Debugging",slug:"../debugging"},i=void 0,l={unversionedId:"general/debugging",id:"general/debugging",title:"Debugging",description:"Run a Point Network Node in a VS Code Debugger",source:"@site/docs/general/debugging.md",sourceDirName:"general",slug:"/debugging",permalink:"/docs/debugging",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/general/debugging.md",tags:[],version:"current",lastUpdatedBy:"Iury V",lastUpdatedAt:1666012974,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging",slug:"../debugging"},sidebar:"pnSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"Contributing",permalink:"/docs/contributing"}},u={},p=[{value:"Run a Point Network Node in a VS Code Debugger",id:"run-a-point-network-node-in-a-vs-code-debugger",level:3},{value:"Sample launch.json file",id:"sample-launchjson-file",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"run-a-point-network-node-in-a-vs-code-debugger"},"Run a Point Network Node in a VS Code Debugger"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": You need to setup your local ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-zapp-dev-environment-direct-install"},"dev environment")," first (without Docker)."),(0,o.kt)("p",null,"To debug the Point Network node in VS code:"),(0,o.kt)("p",null,"In your local pointnetowrk node folder, generate compiled typescript sourcemap files by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run build -- --sourcemap\n")),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," directory including ",(0,o.kt)("inlineCode",{parentName:"p"},"*.js.map")," files which are used by the VS Code debugger."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open VS Code"),(0,o.kt)("li",{parentName:"ol"},"Open the Debugger tool"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"create a launch.json"),' file (located under the blue "Run and Debug" button)'),(0,o.kt)("li",{parentName:"ol"},"Select 'Node JS' from the environment drop down"),(0,o.kt)("li",{parentName:"ol"},"Replace the file created with the sample launch.json file shown below."),(0,o.kt)("li",{parentName:"ol"},"Make sure all the dependent dev services are running such as Arlocal and Ganache (as per the local dev environment setup instructions)"),(0,o.kt)("li",{parentName:"ol"},"Click the 'Play' icon next to 'Launch Program' dropdown on the top left"),(0,o.kt)("li",{parentName:"ol"},"Open a 'Debug Console' tab in VS Code and you will see the running Point Node logs"),(0,o.kt)("li",{parentName:"ol"},"Add a breakpoint to any part of the Point Node JS code (perhaps in one of the common handlers in the client proxy)"),(0,o.kt)("li",{parentName:"ol"},"Open the Point Browser by running the alias ",(0,o.kt)("inlineCode",{parentName:"li"},"point-browser-owner")),(0,o.kt)("li",{parentName:"ol"},"Now you can inspect the variables in VS Code and use the debugger as usual."),(0,o.kt)("li",{parentName:"ol"},"Continue to add breakpoints where you need to assist with your debugging!")),(0,o.kt)("h3",{id:"sample-launchjson-file"},"Sample launch.json file"),(0,o.kt)("p",null,"Below is a sample ",(0,o.kt)("inlineCode",{parentName:"p"},"launch.json")," file that you can use. Its the same as the one generated by VS code with the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputCapture")," key added:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "version": "0.2.0",\n    "configurations": [\n        {\n            "type": "pwa-node",\n            "request": "launch",\n            "name": "Launch Point Node",\n            "skipFiles": [\n                "<node_internals>/**"\n            ],\n            "program": "${workspaceFolder}/point",\n            "outputCapture": "std",\n            "env": {\n                "NODE_CONFIG_ENV": "devlocal",\n                "MODE": "zappdev"\n            }\n        }\n    ]\n}\n')))}c.isMDXComponent=!0}}]);