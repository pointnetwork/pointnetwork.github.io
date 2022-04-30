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
nvm use 14
```
 
The Point Node repo makes use of an [.nvmrc file](https://github.com/pointnetwork/pointnetwork/blob/develop/.nvmrc) which can be recognised by your terminal to automatically switch to the correct version of Node using NVM.
 
If you are using ZSH terminal then follow [these instructions](https://github.com/nvm-sh/nvm#zsh) to add support to switch to the correct Node version automatically. 
 
## Install Point Network Dependencies
 
Clone the Pointnetwork repo and install the dependencies like so:
 
```bash
git clone git@github.com:pointnetwork/pointnetwork.git
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
 
## Deploy an Example Zapp
 
Point Network Example Zapps live in their own separate repo called [Zapps](https://github.com/pointnetwork/zapps). Clone this repo to a folder **one level below pointnetwork** repo. 
 
Keep the Point Network Dev Node running in your terminal and open a new terminal window to deploy an example Zapp like so:
 
```bash
cd pointnetwork     <-- NOTE: the folder of the cloned pointnetowrk repo
source .bash_alias
git clone git@github.com:pointnetwork/zapps.git ../zapps
point-deploy ../zapps/blog.point --contracts
```
 
## Open the Example Zapp in the Owner Point Browser
 
In a new terminal window run the following:
 
```bash
cd pointnetwork     <-- NOTE: the folder of the cloned pointnetowrk repo
source .bash_alias
git clone git@github.com:pointnetwork/pointsdk.git ../pointsdk
cd ../pointsdk
nvm use
npm i
npm run build
npm i -g web-ext
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
 
To simulate having more than one Identity on the Network and to be able to interact with both Identities, it is necessary to create a new profile and start a separate instance of the Point Node using this new profile. This is especially useful when developing Zapps such as `email.point` which require direct interaction between two identities (sending emails). 
 
## Start Point Network Visitor Node
 
From the cloned Pointnetwork repo, start a Point Network Visitor Node like so:
 
```bash
point-visit
```
 
### Open the Zapp in the Visitor Point Browser
 
From the cloned PointSDK repo, open the a Visitor Point Browser like so:
 
```bash
point-browser-visitor
```
 
**NOTE**: If you see the error message `The request "website_visitor" profile name cannot be resolved to a profile path` then you need to [create that specific profile in Firefox](./build-create-a-dev-point-network-profile-in-firefox) then run the above command again to open the Point Browser.
 
You should now be able to interact with any Zapps that have been deployed. As mentioned this is useful for Zapps that require interacting between two Identities such as the email zapp. I encourage you to try it!
 
# (Optional) Start a Hardhat console
 
If you want to start a hardhat console:
 
```
npx hardhat console --network development
```
 
Then you can interact with the deployed Point contracts, for example:
 
```
identity = await ethers.getContractAt("identity", "0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d")
await identity.ikvGet('blog', 'zweb/contracts/address/Blog')
```
