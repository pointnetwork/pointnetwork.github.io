"use strict";(self.webpackChunkpointnetwork_github_io=self.webpackChunkpointnetwork_github_io||[]).push([[6093],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=i,f=h["".concat(p,".").concat(m)]||h[m]||c[m]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={id:"learn-point-deployer",title:"Point Deployer",sidebar_label:"Point Deployer",slug:"../learn-point-deployer"},r="File Deployment Process",l={unversionedId:"learn/learn-point-deployer",id:"learn/learn-point-deployer",title:"Point Deployer",description:"Some of the following maybe outdated. Its receommended to check the source code directly for very latest approach implemented in Point Node.",source:"@site/docs/learn/learn-point-deployer.md",sourceDirName:"learn",slug:"/learn-point-deployer",permalink:"/docs/learn-point-deployer",draft:!1,editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/learn/learn-point-deployer.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1667470644,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"learn-point-deployer",title:"Point Deployer",sidebar_label:"Point Deployer",slug:"../learn-point-deployer"},sidebar:"pnSidebar",previous:{title:"Storage Layer",permalink:"/docs/learn-storage-layer"},next:{title:"Web Sockets",permalink:"/docs/learn-websockets"}},p={},s=[{value:"Step 1: Initialization",id:"step-1-initialization",level:2},{value:"Step 2: Process Routes and Smart Contracts",id:"step-2-process-routes-and-smart-contracts",level:2},{value:"Step 3: Parsing Content",id:"step-3-parsing-content",level:2},{value:"Step 4: Parsing Templates",id:"step-4-parsing-templates",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"file-deployment-process"},"File Deployment Process"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Some of the following maybe outdated. Its receommended to check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork"},"source code directly")," for very latest approach implemented in Point Node.")),(0,i.kt)("p",null,"The purpose of this document is to run through at a technical level the process taken by Point Network under the hood to deploy a file to the network."),(0,i.kt)("p",null,"This document outlines a high level overview of the process of deploying files to Point Network via the ",(0,i.kt)("inlineCode",{parentName:"p"},"point cli"),". This document follows the journey of a file as it is uploaded, parsed and finally passed onto the Point Network storage layer for distribution among Point Network nodes."),(0,i.kt)("h2",{id:"step-1-initialization"},"Step 1: Initialization"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At least one Point Network node must already be running. The config file of the desired data directory (set using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--datadir")," cli option) is used to load the config of that running node.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The point CLI will wrap an instance of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Console")," class and make an API call to the Point Network API ",(0,i.kt)("inlineCode",{parentName:"p"},"/deploy")," endpoint as defined in the loaded config file of the previous step. The call will include the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy_path")," query string parameter that will be used by the deployer to locate the files to deploy. The API call may look something like this: http://localhost:2469/deploy?deploy_path=/my/path/to/example/example.z")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The call to the Point Network API endpoint will hit the ",(0,i.kt)("inlineCode",{parentName:"p"},"DeployController")," which passes the call onto the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZWeb Deployer")," class, ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," function. Now we move to the next step: Parsing files."))),(0,i.kt)("h2",{id:"step-2-process-routes-and-smart-contracts"},"Step 2: Process Routes and Smart Contracts"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ZWeb Deployer")," class ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," function is primarily responsible for parsing the template files that are part of the deployment. Once the template is parsed, it's handed off to the storage layer for persistence (which is covered in detail in the next Step).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," function first reads the ",(0,i.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," file that must be available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy_path"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," file is then used as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Identity")," that the deployed resources will be bound to in the Identity Smart Contract (essentially its the domain name, and therefore the owner, that the resources belong to).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deployment of new Smart Contracts (if any) are then deployed. The list of Smart Contracts to deploy is provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts")," key in the  ",(0,i.kt)("inlineCode",{parentName:"p"},"point.deploy.json")," file. A separate ",(0,i.kt)("inlineCode",{parentName:"p"},"deployContract")," function is used to deploy the Contracts. Essentially the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployContract"),"  function compiles and deploys the Smart Contract in a standard way using ",(0,i.kt)("inlineCode",{parentName:"p"},"Web3")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"@truffle/contract")," libraries. The interesting thing to note is that the Contract Artifacts are stored in the Point Network Storage layer with the contract address and contract artifacts storage id being persisted in the Identity Smart Contract as key / value pairs as follows:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zweb/contracts/address/contractName -> address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zweb/contracts/abi/contractName -> artifactsStorageId ")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"routes.json")," file is a core part of a ZWeb deployment. It essentially acts as a DNS for the deployed files on the Point Network. When loaded initially, the file will contain human readable references to each of the files in the domain (for example, it may contain an entry like ",(0,i.kt)("inlineCode",{parentName:"p"},'"/welcome": "welcome.zhtml"'),").  The ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," function will iterate each entry in the routes file and pass that to the ",(0,i.kt)("inlineCode",{parentName:"p"},"processTemplate")," function for parsing (discussed in the next Step)."),(0,i.kt)("p",{parentName:"li"},"The interesting part is that the ",(0,i.kt)("inlineCode",{parentName:"p"},"processTemplate")," function returns the new file id of the file just parsed and the key in the routes file is replaced with this new id. So for example the value for the key ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201c/welcome\u201d")," will be updated to the file id ",(0,i.kt)("inlineCode",{parentName:"p"},'"d1f4740f49adfad36e2a5fe4193b334b76d8ecf6"'),". NOTE: the file id is the randomly generated id of the file record in the LevelDB which has another mapping to the actual filename stored on disk (which might be ",(0,i.kt)("inlineCode",{parentName:"p"},"6251fc539f02c6f2e3669a47c21dbc072e59a38b"),"). The actual file is stored under the Point Network nodes data/deployer_cache directory."),(0,i.kt)("p",{parentName:"li"},"Once the function has parsed all the files referenced in the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes.json")," then the routes file (containing the file ids now - not the human readable names) is persisted to the storage layer. Moreover, the ZDNS record is updated in the Identity Smart Contract against the target (which is the Identity as mentioned earlier) with a key ",(0,i.kt)("inlineCode",{parentName:"p"},"zdns/routes")," and value is the randomly generated file id for the ",(0,i.kt)("inlineCode",{parentName:"p"},"routes.json")," file."))),(0,i.kt)("h2",{id:"step-3-parsing-content"},"Step 3: Parsing Content"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Optionally the ",(0,i.kt)("inlineCode",{parentName:"li"},"point.deploy.json")," file may contain a ",(0,i.kt)("inlineCode",{parentName:"li"},"keyvalue")," option. This contains the content for the site being deployed. The function ",(0,i.kt)("inlineCode",{parentName:"li"},"updateKeyValue")," recursively loops the values until the value is either a string, Array or Object that can be ultimately represented as a JSON string. Each key / value pair is stored against the target in the Idently smart contract.")),(0,i.kt)("h2",{id:"step-4-parsing-templates"},"Step 4: Parsing Templates"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The main part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"deploy")," function  is the calls to the  ",(0,i.kt)("inlineCode",{parentName:"p"},"processTemplate")," function.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The simplest case is when the template file being processed is not a \u2018zhtml\u2019 template file. In this case the file is hashed and this is used as the filename which is persisted in the nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"data/deployer_cache")," directory. Examples would be stylesheet CSS files which do not require parsing by the ZWeb deployment process.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The parser then checks for any ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," references (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"{% extends 'layout.html' %}")," ) and will extract that filename used (i.e. layout.zhtml) and then simply recursively calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"processTemplate")," function with that filename."),(0,i.kt)("p",{parentName:"li"},"The interesting part is that the returned file id from the sub ",(0,i.kt)("inlineCode",{parentName:"p"},"processTemplate")," call is used to replace the human readable filename with that file id like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"{% extends '51c78cf25d8b32ab6d426ab7f2f70943f3bb5344' %}"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next any ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"img")," tags in the template are processed recursively so that all these are also replaced with the file id reference in the parsed template. Again the result is that the human readable referenced filename with parsed file id but this time referencing the storage table in the LevelDB and including the file extension. So one example of a parsed img tag might look like this:",(0,i.kt)("inlineCode",{parentName:"p"},'<img src="/_storage/7de460700a2b69c8241e76593165e76ca29bc3ef.png">'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, once the template has been fully parsed, it is sent to the Point Network Storage Layer for persistence across the network."))))}c.isMDXComponent=!0}}]);