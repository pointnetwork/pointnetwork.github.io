---
id: build-zapp-developer-guide
title: Point Network Zapp Developers Guide
sidebar_label: Point Network Zapp Developers Guide
slug: ../build-zapp-developer-guide
---
 
Welcome to the Zapp Developers Guide!
 
## Overview
 
Zapps are what we call Dapps running on Point Network.
 
While Point Network does support running EVM based Dapps directly on the network, its also possible to build brand new Zapps using our SDK (called [Point SDK](https://github.com/pointnetwork/pointsdk)). 
 
Its highly recommended to use the Point SDK to build new Zapps since this SDK automatically proxies connections to the Point Node making development of new Zapps very straightforward.
 
## Anatomy of a Zapp
 
A Zapp is made up of the following components at a minimum:
 
1. A `point.deploy.json` file which is a deployment manifest for your Zapp. You can read more about this file in [this article](./build-point-deploy-json-file-explained.md).
1. A `routes.json` file which defines your Zapps routes. You can read more about the Routes file in [this article](./build-routes-json-file-explained.md)
1. A static website containing the frontend code of your Zapp. Typically this would be a React JS application but you can use any frontend framework.
1. One or more Solidity Smart Contracts to be deployed along with your Zapp to act as a distributed backend data storage.
 
## Procedures for developing a Zapp
 
You would take the following steps to develop, test and deploy your Zapp onto Point Network.
 
Once you have a great idea for a new decentralized application that you want to deploy and share on Point Network you would:
 
1. Clone the [template.point](https://github.com/pointnetwork/template.point) Zapp repo
1. Copy the folder to a new location `cp template.point ../myzapps/mynewzapp.point`
1. Change directory into your new Zapp folder and install the dependencies `npm i`
1. Startup a local development environment of Point Network and deploy your new Zapp by following the instructions [here](./build-zapp-dev-environment-direct-install)). Once you have completed that and you have your Zapp running locally, return to this tutorial.
1. Modify the `point.deploy.json` file to contain the following content (replace 'MyNewZapp' with your Zapp Name):
 
    ```
    {
        "version": 0.1,
        "target": "mynewzapp.point",
        "keyvalue": {},
        "contracts": [
          "MyNewZapp"
        ]
      }
    ```
 
1. Modify the `Template.sol` smart contract to contain the logic of your Zapp. Make sure to rename the file to something appropriate like `MyNewZapp.sol` as well.
1. Modify the React JS components to contain the logic of your Zapp.
1. Deploy locally and continue to develop the Zapp. In the development environment you can run the watch command for the front end `npm run watch` so that as you make changes to any React JS components they are automatically built and you can simply refresh the Point Browser to see your latest changes. NOTE: if you need to make changes to your Smart Contract you will need to redeploy your Zapp to see these changes.
 
## Deploy your Zapp to YNET
 
Once you are ready to share your amazing new Zapp to the world, you can deploy it to YNET. You can do so as follows:
 
1. Stop all your locally running services - Point Network, Blockchain, Arlocal etc.
1. Download and install the [Point Network ALPHA](https://github.com/pointnetwork/pointnetwork-dashboard/blob/main/ALPHA.md). This will step you through the process of creating your own mnemonic keys and you will also register your identity on YNET. Be sure to register the Identity that you want for your Zapp name e.g. `MyNewZapp` (replace with your Zapp name).
1. Now exit the Alpha application and return to your cloned pointnetwork repo
1. Start the Point Node in YNET mode from the cloned pointnetwork repo folder by running `npm run build && npm run start`
1. Open the Point Browser - which connects to the Point Node that is now connected in YNET
1. Now run the deploy script for your Zapp as you have done during development. Since your Point Node is connected to YNET your Zapp will be deployed to YNET using your Identity that you have registered earlier.
1. Once the deployment is complete you can open your new Zapp in YNET. You can share the Zapp url (e.g. https://mynewzapp.point) to anyone you like and they can open the Zapp in Point Network!
 
## Continue Developing
 
To continue to develop your Zapp locally, simply stop the Point Node running that is connected to YNET and restart all your dev services as well as the Point Node running in the development environment as outlined [here](./build-zapp-dev-environment-direct-install).
 
## Upgradable Zapps
 
If you build a Zapp _without_ using an upgradable smart contract pattern then each time you deploy the smart contract a _new instance_ of the smart contract will be deployed at a new address which will not contain the data of the previously deployed contract. If you intend to upgrade your Zapp from time to time, then consider building your Zapp as an [Upgradable Zapp](./build-upgradable-zapps).
