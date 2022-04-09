---
id: build-run-dev-node-outside-docker
title: Run dev Point Node outside of Docker
sidebar_label: Run dev Point Node outside of Docker
slug: ../build-run-dev-node-outside-docker
---
 
## Prerequisites
 
First you need to start all the supporting services in Docker by following the instructions to startup Point Node in Zappdev environment [here](./build-build-with-pointnetwork.md).
 
## Setup
 
Create a new profile directory on your local machine for `devlocal`. This is the profile that you can use for running the dev Point Node directly on your own computer without using Docker. This folder can be wherever you like. In this tutorial we will create the profile under `~/workspace/pn/devlocal`. 
 
Run the `mkdir` command below which will create the folders shown:
 
```
mkdir -p ~/workspace/pn/devlocal/keystore
```
 
Copy the dev wallet key and arweave key from the pointnetowrk repository into the `keystore` directory that you created in the previous step.
 
Run the `cp` command below. This assumes that you are currently in the cloned pointnetwork repository folder and you have already created the 'keystore' folder in the location specified earlier. Feel free to change this according to your system:
 
```
cp resources/blockchain-test-key.json ~/workspace/pn/devlocal/keystore/key.json
cp resources/arweave-test-key.json ~/workspace/pn/devlocal/keystore/arweave.json
```
 
Create a `devlocal.yaml` config file and save it in the pointnetwork repo `config` directory. NOTE: This file is ignored by the `gitignore` file automatically so do not commit this!
 
Below is an example, You would only need to change `datadir` and `wallet.keystore_path` values if you have created your profile in a different directory to what is specified:

**NOTE**: You may need to replace the tilde (~) in the directory path below and expand that to the full path, so on a Mac this would be `/Users/YOUR_USERNAME/pn/devlocal` etc.

**NOTE**: You can change `zappsdir` to any directory on your computer so that it points to the location where you have all your own personal Zapps that you are developing.
 
```
datadir: ~/workspace/pn/devlocal
zappsdir: ./example
wallet:
  keystore_path: ~/workspace/pn/devlocal/keystore
mode: zappdev
log:
  sendLogs: false
  level: debug
storage:
  arweave_host: localhost
  arweave_protocol: http
  arweave_port: 1984
  use_arweave_bundler: false
  use_arlocal: true
  arweave_gateway_url: http://localhost:1984/graphql
network:
  web3: http://localhost:7545
api:
  address: 127.0.0.1
zproxy:
  host: 127.0.0.1
```
 
Ensure that you have loaded the alias commands into your current terminal session.
 
Run the following command from the root of the cloned pointnetwork repo:
 
```
source .bash_alias
```
 
Create a profile in Firefox called `pointnetwork` that has a proxy set to route all http / https traffic to `localhost:8666`. Don't forget to add the [Point Network CA certificate](./build-build-with-pointnetwork.md#create-a-point-network-profile-in-firefox) to the new profile in Firefox. 
 
## Run the Point Node
 
The above setup steps only need to be performed once. Going forward you can start a Point Node using:
 
```
npm i
point-dev
```
 
You can deploy a Zapp from the `example` folder using (this will deploy `blog.point`):
 
```
point-deploy example/blog.point --contracts
```
 
Open a local Point Browser that connects to the Point Node proxy (which is running on port 8666 since there is no port mapping applied when running the Point Node outside of Docker).
 
NOTE: This has to be run from within the cloned [PointSDK repo](https://github.com/pointnetwork/pointsdk) folder which you will have already setup according to the instructions [here](./build-build-with-pointnetwork.md#create-a-point-network-profile-in-firefox).
 
Run the command below which assumes that you already have created the `pointnetwork` profile as stated earlier:
 
```
point-browser
```
 
### (Optional Step) - (Re) Deploy Identity Contract
 
If you need to deploy the Identity contract you can run the following commands from your local machine.
 
Assuming you are already inside the cloned pointnetwork repo folder:
 
```
cd hardhat
rm -rf cache
npx hardhat compile
npx hardhat run scripts/deploy.ts --network development
```
 
If you want to start a hardhat console:
 
```
npx hardhat console --network development
```
