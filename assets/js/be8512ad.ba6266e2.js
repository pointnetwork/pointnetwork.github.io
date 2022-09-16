"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),s=d(n),f=r,b=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return n?i.createElement(b,l(l({ref:t},c),{},{components:n})):i.createElement(b,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],a={id:"build-file-upload-cli",title:"Point CLI File Upload",sidebar_label:"File Upload using Point CLI",slug:"../build-file-upload-cli"},u=void 0,d={unversionedId:"build/build-file-upload-cli",id:"build/build-file-upload-cli",title:"Point CLI File Upload",description:"Upload a file to storage using the Point CLI",source:"@site/docs/build/build-file-upload-cli.md",sourceDirName:"build",slug:"/build-file-upload-cli",permalink:"/docs/build-file-upload-cli",editUrl:"https://github.com/pointnetwork/pointnetwork.github.io/edit/main/website/docs/build/build-file-upload-cli.md",tags:[],version:"current",lastUpdatedBy:"Darren Jensen",lastUpdatedAt:1663321891,formattedLastUpdatedAt:"9/16/2022",frontMatter:{id:"build-file-upload-cli",title:"Point CLI File Upload",sidebar_label:"File Upload using Point CLI",slug:"../build-file-upload-cli"},sidebar:"pnSidebar",previous:{title:"Using Hardhat Console",permalink:"/docs/build-using-hardhat-console"},next:{title:"Test Visitor Node with new Identity",permalink:"/docs/build-test-visitor-node-using-different-identity"}},c=[{value:"Upload a file to storage using the Point CLI",id:"upload-a-file-to-storage-using-the-point-cli",children:[],level:2},{value:"Download the file using CURL",id:"download-the-file-using-curl",children:[],level:2}],p={toc:c};function s(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"upload-a-file-to-storage-using-the-point-cli"},"Upload a file to storage using the Point CLI"),(0,o.kt)("p",null,"To upload any file to the distributed file storage of Point Network, simply run the following (replace ",(0,o.kt)("inlineCode",{parentName:"p"},"testfile.txt")," with your file)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./point upload testfile.txt\n")),(0,o.kt)("p",null,"This will upload the file to YNet and return a file hash that you can use to reference that file later."),(0,o.kt)("h2",{id:"download-the-file-using-curl"},"Download the file using CURL"),(0,o.kt)("p",null,"To download the file you can use the following CURL command."),(0,o.kt)("p",null,"Note you need to start the Point Node conected to Ynet and replace ",(0,o.kt)("inlineCode",{parentName:"p"},"e0bc2350c29534631ddd856bfbb65b41b2cf80795592b7227acaf82d1a743dbc")," with your file id."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --proxy "127.0.0.1:8666" https://point/_storage/e0bc2350c29534631ddd856bfbb65b41b2cf80795592b7227acaf82d1a743dbc --cacert ../pointnetwork/resources/certs/ca.crt \n')),(0,o.kt)("p",null,"You will see the contents of the file you uploaded in the previos step appear in the console."))}s.isMDXComponent=!0}}]);