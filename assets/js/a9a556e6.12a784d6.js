"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8451],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),h=c(n),m=i,u=h["".concat(l,".").concat(m)]||h[m]||s[m]||o;return n?a.createElement(u,r(r({ref:e},d),{},{components:n})):a.createElement(u,r({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=h;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:i,r[1]=p;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},47811:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],p={id:"build-upgrade-identity-contract",title:"Upgrade the Identity contract",sidebar_label:"Upgrade the Identity contract",slug:"../build-upgrade-identity-contract"},l=void 0,c={unversionedId:"build/build-upgrade-identity-contract",id:"build/build-upgrade-identity-contract",title:"Upgrade the Identity contract",description:"The Identity contract is at the heart of Point Network. Sometimes it needs to have some functionality added to it over time.",source:"@site/docs/build/build-upgrade-identity-contract.md",sourceDirName:"build",slug:"/build-upgrade-identity-contract",permalink:"/docs/build-upgrade-identity-contract",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-upgrade-identity-contract.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1664880246,formattedLastUpdatedAt:"10/4/2022",frontMatter:{id:"build-upgrade-identity-contract",title:"Upgrade the Identity contract",sidebar_label:"Upgrade the Identity contract",slug:"../build-upgrade-identity-contract"},sidebar:"pnSidebar",previous:{title:"Using Identity Oracle in dev",permalink:"/docs/build-use-identity-oracle-in-devlocal"},next:{title:"Testing Guide",permalink:"/docs/build-testing-guide"}},d=[{value:"Overview",id:"overview",children:[],level:3},{value:"Technical Process",id:"technical-process",children:[],level:3},{value:"Troubleshooting",id:"troubleshooting",children:[],level:3},{value:"Interact with Identity Contract in Hardhat Console",id:"interact-with-identity-contract-in-hardhat-console",children:[],level:3},{value:"Steps to migrate data to a new Identity contract instance",id:"steps-to-migrate-data-to-a-new-identity-contract-instance",children:[],level:3}],s={toc:d};function h(t){var e=t.components,n=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Identity contract is at the heart of Point Network. Sometimes it needs to have some functionality added to it over time. "),(0,o.kt)("p",null,"In this page we will outline how to upgrade the deployed Identity contract and how to interact with the Identity contract in a Hardhat console."),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"To upgrade the Identity contract with a new version you need to perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure that the Identity contract owners seed phrase is currently saved in the ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.point/keystore/key.json")," file. This is automatically parsed in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/point-contracts/blob/main/hardhat.config.ts#L24"},"hardhat config")," file when connecting to Ynet."),(0,o.kt)("li",{parentName:"ol"},"Compile the Identity contract"),(0,o.kt)("li",{parentName:"ol"},"Run the Hardhat task to update the contract on a specific network (Ynet)"),(0,o.kt)("li",{parentName:"ol"},"Commit the updated ",(0,o.kt)("inlineCode",{parentName:"li"},"unknown-10700.json")," file to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pointnetwork/point-contracts/"},"point-contracts")," repo so that it can be referenced for the next contract upgrade."),(0,o.kt)("li",{parentName:"ol"},"Update the Identity contract ABI file in Arweave"),(0,o.kt)("li",{parentName:"ol"},"Copy the Areweave file hash and use that to update the ",(0,o.kt)("inlineCode",{parentName:"li"},"default.yaml")," file in the Point Engine repo.")),(0,o.kt)("h3",{id:"technical-process"},"Technical Process"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ensure that the Identity contract owners seed phrase is currently saved in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.point/keystore/key.json")," file. "),(0,o.kt)("p",{parentName:"li"},"This step can be done by logging into Point Network via the Point Dashboard using the seed phrase of the Identity owner. "),(0,o.kt)("p",{parentName:"li"},"This is needed because ",(0,o.kt)("strong",{parentName:"p"},"only the owner")," of the Identity contract can upgrade it. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compile the contract"),(0,o.kt)("p",{parentName:"li"},"Use Hardhat to compile the Identity contract like so:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"TS_NODE_TRANSPILE_ONLY=1 npx hardhat compile\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the Hardhat task to update the contract on a specific network"),(0,o.kt)("p",{parentName:"li"},"To update the Identity contract you can run the following command from the cloned ",(0,o.kt)("inlineCode",{parentName:"p"},"point-contracts")," repo folder"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npx hardhat identity-update-contract 0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3 ./resources/unknown-10700.json --network ynet\n")),(0,o.kt)("p",{parentName:"li"},"Details are in the ",(0,o.kt)("inlineCode",{parentName:"p"},"identity-update-contract")," task source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/point-contracts/blob/main/tasks/identity/identity-update-contract.ts"},"here"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Commit the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown-10700.json")," file to the point-contracts repo"),(0,o.kt)("p",{parentName:"li"},"Commit ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown-10700.json")," file after running the command to store proxy metadata for further deployments.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the Identity contract ABI file in Arweave"),(0,o.kt)("p",{parentName:"li"},"This has to be done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"point")," cli and so you will need to cd into the Point Engine repo first."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cd pointnetwork\n./point upload ../point-contracts/build/contracts/Identity.sol/Identity.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the Areweave file hash and use that to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"default.yml")," file in the Point Engine repo."),(0,o.kt)("p",{parentName:"li"},"The returned Arweave file hash for the Identity contract ABI needs to be set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"identity_contract_id")," key of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/blob/develop/config/default.yaml#L3"},"default.yaml")," file in the Point Engine repo."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Make sure to remember to commit all the code changes back to Github and to check the deployment of the contract.")),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"During deployment you may experience some issues. Check below to see if any of the following help you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Error: Timed out waiting for implementation contract deployment to address cannot estimate gas; transaction may fail or may require manual gas limit UNPREDICTABLE_GAS_LIMIT")),(0,o.kt)("p",{parentName:"li"},"  The error indicates that the transaction is not mined by the blockchain with the default gas values. "),(0,o.kt)("p",{parentName:"li"},"  Try this workaround to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-upgrades/issues/85"},"Override transaction options")," (",(0,o.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gas"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"gasPrice"),") in create and upgrade proxy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Deploy from another account or machine"),". "),(0,o.kt)("p",{parentName:"li"},"  One workaround is to deploy from another account. Seems to have some cache related problem that makes the upgrade work from some accounts and not from others. The ",(0,o.kt)("inlineCode",{parentName:"p"},".openzeppelin")," folder also contains metadata from the deployment, some other problems were solved by deleting this file. "),(0,o.kt)("p",{parentName:"li"},"  The file can be recovered from blockchain using ",(0,o.kt)("inlineCode",{parentName:"p"},"forceImport")," as we do ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/blob/9e2c8230c9c6e861af54a98493d88d460bc96f81/src/client/zweb/deployer/index.js#L344"},"here"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Contract size to large to deploy")),(0,o.kt)("p",{parentName:"li"},"  If the contract size seems to be a problem, you can try to use the optimizer to reduce that. It is already enabled by default in the hardhat config of Point Engine.\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Test locally using Geth instead of Ganache"),". "),(0,o.kt)("p",{parentName:"li"},"  This is just an option to confirm if this problem only occurs with YNet since YNet is a geth node any code problem should happen in a local env using Geth. We have a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pointnetwork/pointnetwork/blob/develop/docker-compose.e2e-geth.yaml"},"docker compose file")," that starts as a local blockchain node for testing that."))),(0,o.kt)("h3",{id:"interact-with-identity-contract-in-hardhat-console"},"Interact with Identity Contract in Hardhat Console"),(0,o.kt)("p",null,"Firstly make sure you are in the point-contracts repo and then start hardhat console like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd point-contracts\nnpx hardhat console --network ynet\n")),(0,o.kt)("p",null,"Now in the Hardhat console you can load the Identity contract and start to call functions. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// Load Identity Contract instance\nid = await hre.ethers.getContractAt(\"Identity\", \"0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3\");\n \n// Check the owner of the Identity contract \nawait id.owner()\n \n// Check dev mode setting\nawait id.getDevMode()\n \n// Fetch IKV values from the contract, e.g.\nawait id.ikvGet('social', 'zweb/contracts/address/PointSocial')\n")),(0,o.kt)("h3",{id:"steps-to-migrate-data-to-a-new-identity-contract-instance"},"Steps to migrate data to a new Identity contract instance"),(0,o.kt)("p",null,"If you experience issues with the upgrade process then you can also redeploy a brand new instance of the Identity contract. However, if you do so, you will need to migrate all the data across from the current Indentity instance to the new Identity instance."),(0,o.kt)("p",null,"The steps to perform the Identity contract deployment and data migration are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch in Point Contracts repo and compile the Identity contract using"),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("inlineCode",{parentName:"p"},"TS_NODE_TRANSPILE_ONLY=1 npx hardhat compile"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the data from the existing Identity contract using "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"npx hardhat identity-importer download 0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3 --network ynet")),(0,o.kt)("p",{parentName:"li"},"By default this script will download all registered Identities from block 0 to the last block at the time the script starts. Note that this script may take a long time to run and may even timeout. If you experience timeouts, then you should find a range of blocks that works using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--from-block")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--to-block")," parameters.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to the branch that contains the latest version of the Identity contract you want to deploy")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Compile and deploy a ",(0,o.kt)("strong",{parentName:"p"},"new")," instance of the Identity contract from that branch to YNet using "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"npx hardhat run scripts/deploy.ts --network ynet"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the Point Engine repo upload the updated Identity ABI using "),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"./point upload ../point-contracts/build/contracts/Identity.sol/Identity.json"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"default.yaml")," in Point Engine repo and set ",(0,o.kt)("inlineCode",{parentName:"p"},"identity_contract_id")," to the Identity ABI hash returned in the previous call. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"default.yaml")," in Point Engine and set ",(0,o.kt)("inlineCode",{parentName:"p"},"identity_contract_address")," to the new Identity contract address just deployed.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upload the Identity data to the new Identity contract instance using the following script (once for each migration file you pass to it and replace NEW_ADDRESS & RANGE accordingly):"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"npx hardhat identity-importer upload NEW_ADDRESS --migration-file ./resources/identity-BLOCK_RANGE.json  --network ynet"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upload the ikv versions using the ikversion-importer migration script (once for each migration file you pass to it)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"npx hardhat ikversion-importer 0x8E34Fc67034b8A593E87d5f2644D098A3dBd2Fe7 --migration-file ./resources/identity-BLOCK_RANGE.json --network ynet"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upload the registered dapps data using the dapps-importer migration script (once for each migration file you pass to it)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"npx hardhat dapps-importer 0x8E34Fc67034b8A593E87d5f2644D098A3dBd2Fe7 --migration-file ./resources/identity-BLOCK_RANGE.json --network ynet"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Manually migrate each subidentity by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"subidentitiesListImport")," function on the Identity contract using Hardhat console."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"subidentitiesListImport(address owner, string memory subidentity)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the Identities, Sub Identities IKVs, IKV versions, dApps data have been migrated correctly to the new contract using Hardhat console")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Merge these changes (the updated Identity contract, updated default.yaml etc)"))))}h.isMDXComponent=!0}}]);