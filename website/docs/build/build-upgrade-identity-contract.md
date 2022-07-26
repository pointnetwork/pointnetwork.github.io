---
id: build-upgrade-identity-contract
title: Upgrade the Identity contract
sidebar_label: Upgrade the Identity contract
slug: ../build-upgrade-identity-contract
---
 
The Identity contract is at the heart of Point Network. Sometimes it needs to have some functionality added to it over time. 
 
In this page we will outline how to upgrade the deployed Identity contract and how to interact with the Identity contract in a Hardhat console.
 
### Overview
 
To upgrade the Identity contract with a new version you need to perform the following steps:
 
1. Ensure that the Identity contract owners seed phrase is currently saved in the `~/.point/keystore/key.json` file. This is automatically parsed in the [hardhat config](https://github.com/pointnetwork/point-contracts/blob/main/hardhat.config.ts#L24) file when connecting to Ynet.
1. Compile the Identity contract
1. Run the Hardhat task to update the contract on a specific network (Ynet)
1. Commit the updated `unknown-10700.json` file to the [point-contracts](https://github.com/pointnetwork/point-contracts/) repo so that it can be referenced for the next contract upgrade.
1. Update the Identity contract ABI file in Arweave
1. Copy the Areweave file hash and use that to update the `default.yaml` file in the Point Engine repo.
 
### Technical Process
 
1. Ensure that the Identity contract owners seed phrase is currently saved in the `~/.point/keystore/key.json` file. 
 
    This step can be done by logging into Point Network via the Point Dashboard using the seed phrase of the Identity owner. 
    
    This is needed because **only the owner** of the Identity contract can upgrade it. 
 
1. Compile the contract

    Use Hardhat to compile the Identity contract like so:
 
    ```
    npx hardhat compile
    ```
 
1. Run the Hardhat task to update the contract on a specific network
 
    To update the Identity contract you can run the following command from the cloned `point-contracts` repo folder
    
    ```
    npx hardhat identity-update-contract 0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3 ./resources/unknown-10700.json --network ynet
    ```
    
    Details are in the `identity-update-contract` task source code [here](https://github.com/pointnetwork/point-contracts/blob/main/tasks/identity/identity-update-contract.ts).
 
1. Commit the updated `unknown-10700.json` file to the point-contracts repo
 
    Commit `unknown-10700.json` file after running the command to store proxy metadata for further deployments.
 
1. Update the Identity contract ABI file in Arweave
 
    This has to be done using the `point` cli and so you will need to cd into the Point Engine repo first.
    
    ```
    cd pointnetwork
    ./point upload ../point-contracts/build/contracts/Identity.sol/Identity.json
    ```
 
 1. Copy the Areweave file hash and use that to update the `default.yml` file in the Point Engine repo.
 
    The returned Arweave file hash for the Identity contract ABI needs to be set in the `identity_contract_id` key of the [default.yaml](https://github.com/pointnetwork/pointnetwork/blob/develop/config/default.yaml#L3) file in the Point Engine repo.
  
**Make sure to remember to commit all the code changes back to Github and to check the deployment of the contract.**

### Troubleshooting

If you see the following errors after running the upgrade script...

**Error: Timed out waiting for implementation contract deployment to address**

**cannot estimate gas; transaction may fail or may require manual gas limit UNPREDICTABLE_GAS_LIMIT**

...try this workaround to [Override transaction options](https://github.com/OpenZeppelin/openzeppelin-upgrades/issues/85) (from, gas, gasPrice) in create and upgrade proxy.
 
### Interact with Identity Contract in Hardhat Console
 
Firstly make sure you are in the point-contracts repo and then start hardhat console like so:
 
```
cd point-contracts
npx hardhat console --network ynet
```
 
Now in the Hardhat console you can load the Identity contract and start to call functions. 
 
```
// Load Identity Contract instance
id = await hre.ethers.getContractAt("Identity", "0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3");
 
// Check the owner of the Identity contract 
await id.owner()
 
// Check dev mode setting
await id.getDevMode()
 
// Fetch IKV values from the contract, e.g.
await id.ikvGet('social', 'zweb/contracts/address/PointSocial')
```
