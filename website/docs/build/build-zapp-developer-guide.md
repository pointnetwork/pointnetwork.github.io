---
id: build-zapp-developer-guide
title: Point Network dapp Developers Guide
sidebar_label: Point Network dapp Developers Guide
slug: ../build-zapp-developer-guide
---
 
Welcome to the Point Network dapp Developers Guide!
 
## Overview
 
dApps are decentralized applications running on Point Network.
 
While Point Network does support running EVM based Dapps directly on the network, its also possible to build brand new dapps using our SDK (called [Point SDK](https://github.com/pointnetwork/pointsdk)). 
 
Its highly recommended to use the Point SDK to build new dapps since this SDK automatically proxies connections to the Point Node making development of new dapps very straightforward.
 
## Anatomy of a dapp
 
A dapp is made up of the following components at a minimum:
 
1. A `point.deploy.json` file which is a deployment manifest for your dapp. You can read more about this file in [this article](./build-point-deploy-json-file-explained.md).
1. A `routes.json` file which defines your dapps routes. You can read more about the Routes file in [this article](./build-routes-json-file-explained.md)
1. A static website containing the frontend code of your dapp. Typically this would be a React JS application but you can use any frontend framework.
1. One or more Solidity Smart Contracts to be deployed along with your dapp to act as a distributed backend data storage.
 
## Procedures for developing a dapp
 
You would take the following steps to develop, test and deploy your dapp onto Point Network.
 
Once you have a great idea for a new decentralized application that you want to deploy and share on Point Network you would:
 
1. Clone the [template.point](https://github.com/pointnetwork/template.point) dapp repo into a local folder:

    ```
    git clone https://github.com/pointnetwork/template.point.git mynewdapp.point
    ```

1. Remove the `.git` folder so that you can initialize for your own Github repo later on if you wish: `rm -rf mynewdapp.point/.git`
1. Change directory into your new dapp folder and install the dependencies `npm i` and build the React JS application `npm run build`
1. Modify the `point.deploy.json` file to contain the following content (replace 'MyNewdapp' with your dapp Name):
 
    ```
    {
        "version": 0.1,
        "target": "mynewdapp.point",
        "keyvalue": {},
        "contracts": [
          "MyNewdapp"
        ]
      }
    ```
 
1. Modify the `Template.sol` smart contract to contain the logic of your dapp. Make sure to rename the file to something appropriate like `MyNewdapp.sol` as well.
1. Modify the React JS components to contain the logic of your dapp.
1. Deploy and test your dapp locally by following the instructions [here](./build-zapp-dev-environment-direct-install)). In the development environment you can run the watch command for the front end `npm run watch` so that as you make changes to any React JS components they are automatically built and you can simply refresh the Point Browser to see your latest changes. NOTE: if you need to make changes to your Smart Contract you will need to redeploy your dapp to see these changes.
 
## Deploy your dapp to YNet
 
Step by step details on deploying your dapp to YNet are available [here](./build-deploy-zapp).
 
## Continue Developing
 
To continue to develop your dapp locally, simply stop the Point Node running that is connected to YNET and restart all your dev services as well as the Point Node running in the development environment as outlined [here](./build-zapp-dev-environment-direct-install).
 
## Upgradable dapps
 
If you build a dapp _without_ using an upgradable smart contract pattern then each time you deploy the smart contract a _new instance_ of the smart contract will be deployed at a new address which will not contain the data of the previously deployed contract. If you intend to upgrade your dapp from time to time, then consider building your dapp as an [Upgradable dapp](./build-upgradable-zapps).
