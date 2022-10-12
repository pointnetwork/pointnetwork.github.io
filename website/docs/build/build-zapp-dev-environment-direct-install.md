---
id: build-zapp-dev-environment-direct-install
title: Setup Zapp Development Environment (without Docker)
sidebar_label: Zapp Development Environment (without Docker)
slug: ../build-zapp-dev-environment-direct-install
---
 
You need to install NVM, Node JS, Arlocal and Ganache-CLI as dependent services for Point Node to use.
 
## Install NVM
 
Follow the instructions on the [NVM repo](https://github.com/nvm-sh/nvm) for your platform.
 
## Install Node JS
 
With NVM installed and setup you are now ready to install Node JS as follows:
 
```
nvm use 16
```
 
The Point Node repo makes use of an [.nvmrc file](https://github.com/pointnetwork/pointnetwork/blob/develop/.nvmrc) which can be recognised by your terminal to automatically switch to the correct version of Node using NVM.
 
If you are using ZSH terminal then follow [these instructions](https://github.com/nvm-sh/nvm#zsh) to add support to switch to the correct Node version automatically. 

## Note for some Linux users

You may need to install the following if not already installed:

* **firefox** using `apt install firefox`
* **make** using `apt install build-essential`
 
## Install Point Network Dependencies
 
Clone the Point Engine repo, the Point Contracts repo and then install the dependencies like so:
 
```bash
git clone https://github.com/pointnetwork/pointnetwork.git
git clone https://github.com/pointnetwork/point-contracts.git
cd pointnetwork
source .bash_alias
point-dev-install
```
 
## Start Point Network Services
 
Once all the dependencies are installed you can start the services like so:
 
```bash
point-dev-start
```
 
## Start Point Network Dev Node
 
Start a Point Network Dev Node like so:
 
```bash
point-dev
```
 
## Deploy the Template Example dApp
 
Point Network provides an [example Template dApp](https://github.com/pointnetwork/template.point) that you can use to build your own dApps from. Clone this repo to a folder **one level below pointnetwork** repo. 
 
Keep the Point Network Dev Node running in your terminal and open a new terminal window to deploy the Template dApp like so. 
 
```bash
cd pointnetwork     <-- NOTE: the folder of the cloned pointnetowrk repo
source .bash_alias
git clone https://github.com/pointnetwork/template.point.git ../template.point
cd ../template.point
npm i && npm run build
cd ../pointnetwork
NODE_CONFIG_ENV=devlocal MODE=zappdev point-deploy ../template.point --contracts
```
 
## Open the deployed Template dApp in the Owner Point Browser
 
In a new terminal window run the following:
 
```bash
cd pointnetwork     <-- NOTE: the folder of the cloned pointnetowrk repo
source .bash_alias
git clone https://github.com/pointnetwork/pointsdk.git ../pointsdk
cd ../pointsdk
nvm use
npm i
npm run build
npm i -g web-ext@6.6.0
point-browser-owner
```
 
**NOTE**: If you see the error message `The request "website_owner" profile name cannot be resolved to a profile path` then you need to [create that specific profile in Firefox](./build-create-a-dev-point-network-profile-in-firefox) then run the above command again to open the Point Browser.
 
## Stop all Dev Services
 
To terminate all Point Network Dev process, run the following:
 
```
point-dev-stop
```
 
## Clean Local Data Cached Chunks and Files from Devlocal and Visitlocal profiles
 
To clear out all locally cached files and chunk data and reset the database for `devlocal` and `visitlocal`, run:
 
```
point-dev-clean
```
 
## (Optional) Run a second Point Node to simulate a Visitor
 
To simulate having more than one Identity on the Network and to be able to interact with both Identities, it is necessary to create a new profile and start a separate instance of the Point Node using this new profile. This is especially useful when developing dApps such as `email.point` which require direct interaction between two identities (sending emails). 
 
## Start Point Network Visitor Node
 
From the cloned Pointnetwork repo, start a Point Network Visitor Node like so:
 
```bash
point-visit
```
 
### Open the dApp in the Visitor Point Browser
 
From the cloned PointSDK repo, open the a Visitor Point Browser like so:
 
```bash
point-browser-visitor
```
 
**NOTE**: If you see the error message `The request "website_visitor" profile name cannot be resolved to a profile path` then you need to [create that specific profile in Firefox](./build-create-a-dev-point-network-profile-in-firefox) then run the above command again to open the Point Browser.
 
You should now be able to interact with any dApps that have been deployed. As mentioned this is useful for dApps that require interacting between two Identities such as the email dApp. I encourage you to try it!


### Deploy your dApp to Point Network

You can modify and deploy the Template dApp to Ponit Network using your own registered Identity. Visit [this page](./build-deploy-zapp) for details.
