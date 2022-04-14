---
id: build-run-dev-node-and-services
title: Run dev Point Node services
sidebar_label: Run dev Point Node services
slug: ../build-run-dev-node-and-services
---
 
You need to install Arlocal and Ganache-CLI as dependent services for Point Node to use.

## Install Arlocal

To install an start Arlocal:

1. Clone the [Arlocal](https://github.com/textury/arlocal) repo
1. Run `npx arlocal`

## Install Ganache CLI

To install and start Ganache blockchain using Ganache CLI:

1. Install globally via npm: `npm i -g ganache-cli`
1. Start Ganache blockchain on port 7545 including a specific prefunded account: 

```bash
ganache-cli -v -p 7545 -i 256 --keepAliveTimeout 20000 \
  --account 0x011967d88c6b79116bb879d4c2bc2c3caa23569edd85dfe0bc596846837bbc8e,0x56bc75e2d63100000 \
  --account 0x22a316b515a68d4851087571bd5ff051f5ec3f13b28997fb80a8de055052514e,0x56bc75e2d63100000
```

## Deploy Point Contracts

To deploy the Point Contracts:
 
```
source .bash_alias
cd hardhat
rm -rf cache
npm i
npx hardhat compile
npm start
```
 
# Setup Local Point Node Config
 
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
zappsdir: ../zapps
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
 
## Run the Owner Point Node and deploy an example Zapp
 
The above setup steps only need to be performed once. Going forward you can start a Point Node using:
 
```
npm i
npm run build
point-dev
```

Point Network Example Zapps live in their own separate repo called [Zapps](https://github.com/pointnetwork/zapps). Clone this repo to any location you like on your computer and proceed with the instructions below. In this tutorial we will assume that you have cloned the Zapps repo to a folder **one level below pointnetwork** repo. If you want to clone to a different location that is fine - you just need to change the relative paths below to your path.
 
You can deploy a Zapp from the cloned `zapps` folder. So from the pointnetwork repo folder run the following to deploy blog.point that is in the cloned zapps repo folder one level below:
 
```
point-deploy ../zapps/blog.point --contracts
```
 
Open a local Point Browser that connects to the Point Node proxy (which is running on port 8666 since there is no port mapping applied when running the Point Node outside of Docker).
 
NOTE: This has to be run from within the cloned [PointSDK repo](https://github.com/pointnetwork/pointsdk) folder which you will have already setup according to the instructions [here](./build-build-with-pointnetwork.md#create-a-point-network-profile-in-firefox).
 
Run the command below which assumes that you already have created the `pointnetwork` profile as stated earlier:
 
```
point-browser
```

# (Optional) Run a second Point Node to simulate a Visitor

To simulate having more than one Identity on the Netowrk and to be able to interact with both Identities, it is necessary to create a new profile and start a separate instance of the Point Node using this new profile. This is especially useful when developing Zapps such as `email.point` which require direct interaction between two idetntities (sending emails). 

Create a new profile directory on your local machine for `visitlocal`. This is the profile that you can use for running the dev Point Node as a second visitor Identity. This folder can be wherever you like. In this tutorial we will create the profile under `~/workspace/pn/visitlocal`. 
 
Run the `mkdir` command below which will create the folders shown:
 
```
mkdir -p ~/workspace/pn/visitlocal/keystore
```
 
Copy the dev wallet key and arweave key from the pointnetowrk repository into the `keystore` directory that you created in the previous step.
 
Run the `cp` command below. This assumes that you are currently in the cloned pointnetwork repository folder and you have already created the 'keystore' folder in the location specified earlier. Feel free to change this according to your system:
 
```
cp resources/blockchain-test-key2.json ~/workspace/pn/devlocal/keystore/key.json
cp resources/arweave-test-key2.json ~/workspace/pn/devlocal/keystore/arweave.json
```

Create a `visitlocal.yaml` config file and save it in the pointnetwork repo `config` directory. NOTE: This file is ignored by the `gitignore` file automatically so do not commit this!
 
Below is an example, You would only need to change `datadir` and `wallet.keystore_path` values if you have created your profile in a different directory to what is specified:

**NOTE**: You may need to replace the tilde (~) in the directory path below and expand that to the full path, so on a Mac this would be `/Users/YOUR_USERNAME/pn/visitlocal` etc.

**NOTE**: You can change `zappsdir` to any directory on your computer so that it points to the location where you have all your own personal Zapps that you are developing.
 
```
datadir: ~/workspace/pn/visitlocal
zappsdir: ../zapps
wallet:
  keystore_path: ~/workspace/pn/visitlocal/keystore
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
  port: 24682
zproxy:
  host: 127.0.0.1
  port: 65502
  server_port: 8779
  server_http_port: 8780
```

Create a profile in Firefox called `website_visitor_docker` that has a proxy set to route all http / https traffic to `localhost:65502` (**note** you can see this matches the zproxy config set in the `visitlocal.yaml` file defined above). Don't forget to add the [Point Network CA certificate](./build-build-with-pointnetwork.md#create-a-point-network-profile-in-firefox) to the new profile in Firefox. 

## Run the Visitor Point Node
 
The above setup steps for configuring `visitlocal` only need to be performed once. Going forward you can start a Point Node using:
 
```
npm i
point-visit
```
 
Open a local Point Browser that connects to the Visitor Point Node proxy running on port 65502.
 
NOTE: This has to be run from within the cloned [PointSDK repo](https://github.com/pointnetwork/pointsdk) folder which you will have already setup according to the instructions [here](./build-build-with-pointnetwork.md#create-a-point-network-profile-in-firefox).
 
Run the command below which assumes that you already have created the `website_visitor_docker` profile as stated earlier:
 
```
point-browser-visitor
```

You should now be able to interact with any Zapps that have been deployed. As mentioned this is useful for Zapps that required interacting between two Identities such as the email zapp. I encourage you to try it!

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