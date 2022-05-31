---
id: build-using-hardhat-console
title: Hardhat Console
sidebar_label: Using Hardhat Console
slug: ../build-using-hardhat-console
---

## Start Hardhat Console
 
If you want to start a hardhat console run:
 
```
cd hardhat
npx hardhat console --network development
```

You can connect to different networks by changing the `--network` option.
 
## Get the Signer Account

The signer account in development network will be `0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048`. If you connect to Ynet then it will be the account that is represented by the key you have in your local `.point` folder.

```
account = await ethers.getSigner();
account.address // 0x916f8E7566Dd63D7c444468CaDeA37e80f7F8048
(await ethers.provider.getBalance(account.address)).toString() // yPOINT balance
```

### Load the Identtiy Contract

Then you can interact with the deployed Point contracts. In development the Identity contract should always be deployed to `0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d` so you can get a deployed contract instance like so:
 
```
id = await ethers.getContractAt("Identity", "0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d")
id.address // 0xD61e5eFcB183418E1f6e53D0605eed8167F90D4d
```

### Interact with the Identity Contract

Assuming you have already [deployed Point Social](./build-zapp-dev-environment-direct-install#deploy-an-example-zapp) to your development environment you can run the following in the Hardhat console to get the deployed Point Social contract address.

```
await id.ikvGet('social', 'zweb/contracts/address/PointSocial')
```