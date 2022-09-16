---
id: build-deploy-zapp
title: Deploy your dApp to Point Network
sidebar_label: Deploy dApp to Point Network
slug: ../build-deploy-zapp
---
 
Once you are ready to share your amazing new dApp to the world, you can deploy it to Point Network Mainnet! 
 
### TLDR;
 
Simply run the following command in the root folder of the dApp you want to deploy.

 ```
 point deploy --contracts
 ``` 
 
### Prerequisites
 
Make sure you have installed and are running the [latest version of Point Network](https://pointnetwork.io/download) and you are logged in with the Identity that would be the owner of the dApp (or an designated dApp deployer account) for the dApp you want to deploy.
 
### Deployer Options
 
You can apply the following optional flags to the `point deploy` command:
 
* `--contracts` compile and deploy the dApp contracts (will upgrade the contract when you are using upgradable contracts in your dApp)
* `--force-deploy-proxy` force deploy the contract proxy (instead of upgrading the existing contract - essentially replace with a new one)
* `--dev` deploy a dev version of the dapp (see above)
 
### Example
 
In the dApp folder, build your dApp code and then run the deployment command which will deploy your dApp (including contracts) to the network like so:

```
cd mydapp.point
npm i && npm run build
point deploy --contracts
```

If you experience any issues perhaps consult the troubleshooting section below.
 
Once the deployment is complete you can open your new dApp in Point Network Mainnet. You can share the dApp url (e.g. https://mydapp.point) to anyone you like and they can open the dApp in Point Network Mainnet!

### Dev / Staging Deployment

You can optionally deploy to a dev / staging version of the dApp simply by including the `--dev` flag to the command like so: 

```
point deploy --contracts --dev
``` 

This will deploy your dApp to the same domain with 'dev' appended to the end of the domain. Note you need to also own this Identity.

For example, if you are building a dapp for 'mydapp.point' then including the `--dev` flag will deploy your dApp to `mydappdev.point'. This is useful as a dApp staging area where you can test while running everything in Mainnet!
 
### Troubleshooting
 
#### Error: connect ECONNREFUSED 127.0.0.1:2468
 
```
[1663321171702] FATAL (Error/12992 on ....): connect ECONNREFUSED 127.0.0.1:2468
    Error: connect ECONNREFUSED 127.0.0.1:2468
        at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1187:16)
```
 
This means you do not have the Point Engine running. You need to start Point Engine using the `point` command or start using the Point Dashboard.
 
#### Error: The address 0x... is not allowed to deploy on ... identity
 
```
[1663321334272] ERROR (13414 on ...):
    status: "error"
    identifier: "p7OBTUTRAc2hA7fNjvNj_"
    account: "0x78c16af63ea147c5ca60604e5f4bfe2ce7c46c2a"
    process: "point-engine"
    processVersion: "0.4.5"
    module: "Deploy"
    error: "Error: The address 0x... is not allowed to deploy on ... identity"
```
 
This error means you are not logged into Point Network using the identity that owns the dApp you are deploying. Check the Point Dashboard to see which Identity you are logged in as and change accordingly. It could also mean that your `point.deploy.json` config is not correctly setting the Identity based on what you want so its recommended to check that as well.
 
#### Error: ENOENT: no such file or directory, open '../mydapp.point/point.deploy.json
 
```
[1663321499586] ERROR (13920 on ...):
    status: "error"
    identifier: "p7OBTUTRAc2hA7fNjvNj_"
    account: "0x78c16af63ea147c5ca60604e5f4bfe2ce7c46c2a"
    process: "point-engine"
    processVersion: "0.4.5"
    module: "Deploy"
    error: "Error: ENOENT: no such file or directory, open '../mydapp.point/point.deploy.json'"
```
 
This error means you are not running the `point deploy` command from within the root folder of the dApp you want to deploy. 
