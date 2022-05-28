---
id: build-test-visitor-node-using-different-identity
title: Test Visitor Node using a new Identity
sidebar_label: Test Visitor Node with new Identity
slug: ../build-test-visitor-node-using-different-identity
---

Occasionally you might need more than 2 identities during testing and development. If you want to quickly have a new identity to test with temporariily then you can do so in these few simple steps.

## Update the key file for visitor profile

Create a new seed phrase that you want to use for development and testing. NOTE you should never use the seed phrase that you generate here in any production / mainnet environment.

Copy your seed phrase to the visitor profile. For example, if your visitor profile is here `~/workspace/pn/visitlocal` then you would run the following command to copy a `newVisitor.json` key into the visitor profile.

```
cp newVisitorKey.json ~/workspace/pn/visitlocal/keystore/key.json
```

## Fund the account using Hardhat Console

Fund the account using Hardhat Console like so.

Start the console connecting to `development` network:

```
npx hardhat console --network development
```

If you need to get the address of the account that will be derived from the new seed phrase you added then you can run the [blockchain-keys-from-phrase.js](https://github.com/pointnetwork/pointnetwork/blob/develop/scripts/blockchain-keys-from-phrase.js#L1) script in your terminal to get that information. NOTE you need to change the path in that script to load the `key.json` from the visitor profile.

Once you know the address of the new visitor account you want to use you can run the following in the Hardhat console (replace the `newAddress` value with the address you want to fund in your development environment).

```
signer = await ethers.getSigner()
newAddress = '0xc9aedcd1715554817b74372ebc4dba0f298c9134'
tx = await signer.sendTransaction({from: signer.address, to: newAddress, value: ethers.utils.parseEther('1')})
(await ethers.provider.getBalance(newAddress)).toString() // '1000000000000000000'
```

## Reload the Visitor Point Browser

Now you have funds in the new visitor account you can proceed to register the Identity for this account and it should work since the account has funds. You now have a new visitor identity to use in your development environment. This is rarely needed but useful if you want to test anything that requires more than two identities.