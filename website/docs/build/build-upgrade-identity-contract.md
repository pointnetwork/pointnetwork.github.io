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
    TS_NODE_TRANSPILE_ONLY=1 npx hardhat compile
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
 
During deployment you may experience some issues. Check below to see if any of the following help you:
 
* **Error: Timed out waiting for implementation contract deployment to address cannot estimate gas; transaction may fail or may require manual gas limit UNPREDICTABLE_GAS_LIMIT**
 
    The error indicates that the transaction is not mined by the blockchain with the default gas values. 
    
    Try this workaround to [Override transaction options](https://github.com/OpenZeppelin/openzeppelin-upgrades/issues/85) (`from`, `gas`, `gasPrice`) in create and upgrade proxy.
 
* **Deploy from another account or machine**. 
 
    One workaround is to deploy from another account. Seems to have some cache related problem that makes the upgrade work from some accounts and not from others. The `.openzeppelin` folder also contains metadata from the deployment, some other problems were solved by deleting this file. 
    
    The file can be recovered from blockchain using `forceImport` as we do [here](https://github.com/pointnetwork/pointnetwork/blob/9e2c8230c9c6e861af54a98493d88d460bc96f81/src/client/zweb/deployer/index.js#L344). 
 
* **Contract size to large to deploy**
 
    If the contract size seems to be a problem, you can try to use the optimizer to reduce that. It is already enabled by default in the hardhat config of Point Engine. 
    
* **Test locally using Geth instead of Ganache**. 
 
    This is just an option to confirm if this problem only occurs with YNet since YNet is a geth node any code problem should happen in a local env using Geth. We have a [docker compose file](https://github.com/pointnetwork/pointnetwork/blob/develop/docker-compose.e2e-geth.yaml) that starts as a local blockchain node for testing that.

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

### Steps to migrate data to a new Identity contract instance

If you experience issues with the upgrade process then you can also redeploy a brand new instance of the Identity contract. However, if you do so, you will need to migrate all the data across from the current Indentity instance to the new Identity instance.

The steps to perform the Identity contract deployment and data migration are as follows:

1. Switch to `main` branch in Point Contracts repo and compile the Identity contract using

     `TS_NODE_TRANSPILE_ONLY=1 npx hardhat compile`

1. Download the data from the existing Identity contract using 

    `npx hardhat identity-importer download 0x1574E97F7a60c4eE518f6d7c0Fa701eff8Ab58b3 --network ynet`
    
    By default this script will download all registered Identities from block 0 to the last block at the time the script starts. Note that this script may take a long time to run and may even timeout. If you experience timeouts, then you should find a range of blocks that works using the `--from-block` and `--to-block` parameters.

1. Switch to the branch that contains the latest version of the Identity contract you want to deploy
1. Compile and deploy a **new** instance of the Identity contract from that branch to YNet using 

    `npx hardhat run scripts/deploy.ts --network ynet`

1. From the Point Engine repo upload the updated Identity ABI using 
    
    `./point upload ../point-contracts/build/contracts/Identity.sol/Identity.json`

1. Update `default.yaml` in Point Engine repo and set `identity_contract_id` to the Identity ABI hash returned in the previous call. 
1. Update `default.yaml` in Point Engine and set `identity_contract_address` to the new Identity contract address just deployed.
1. Upload the Identity data to the new Identity contract instance using the following script (once for each migration file you pass to it and replace NEW_ADDRESS & RANGE accordingly):

    `npx hardhat identity-importer upload NEW_ADDRESS --migration-file ./resources/identity-BLOCK_RANGE.json  --network ynet`

1. Upload the ikv versions using the ikversion-importer migration script (once for each migration file you pass to it).

    `npx hardhat ikversion-importer 0x8E34Fc67034b8A593E87d5f2644D098A3dBd2Fe7 --migration-file ./resources/identity-BLOCK_RANGE.json --network ynet`

1. Upload the registered dapps data using the dapps-importer migration script (once for each migration file you pass to it).
    
    `npx hardhat dapps-importer 0x8E34Fc67034b8A593E87d5f2644D098A3dBd2Fe7 --migration-file ./resources/identity-BLOCK_RANGE.json --network ynet`

1. Manually migrate each subidentity by calling the `subidentitiesListImport` function on the Identity contract using Hardhat console.

    `subidentitiesListImport(address owner, string memory subidentity)`

1. Verify the Identities, Sub Identities IKVs, IKV versions, dApps data have been migrated correctly to the new contract using Hardhat console
1. Merge these changes (the updated Identity contract, updated default.yaml etc)