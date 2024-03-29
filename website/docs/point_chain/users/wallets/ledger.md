---
title: Ledger
sidebar_label: Ledger
---

# Ledger

Get started with your Ledger hardware wallet on Point Chain

## Pre-requisites

- [Ledger device](https://shop.ledger.com/)
- [Install Ledger Live](https://www.ledger.com/ledger-live)
- [Install Metamask](https://metamask.io)

## Checklist

- ✅ Ledger [Nano X](https://shop.ledger.com/pages/ledger-nano-x) or [Nano S](https://shop.ledger.com/products/ledger-nano-s) device (compare [here](https://shop.ledger.com/pages/hardware-wallets-comparison))
- ✅ [Ledger Live](https://www.ledger.com/ledger-live) installed
- ✅ [Metamask](https://metamask.io) installed
- ✅ Ethereum Ledger app installed
- ✅ Latest Versions (Firmware and Ethereum app)

## Introduction

[Ledger](https://www.ledger.com/)'s hardware wallets are cryptocurrency wallets that are used to store private keys offline.

> “Hardware wallets are a form of offline storage. A hardware wallet is a cryptocurrency wallet that stores the user's private keys (a critical piece of information used to authorize outgoing transactions on the blockchain network) in a secure hardware device.”
> [Investopedia](https://www.investopedia.com/terms/l/ledger-wallet.asp)

## Installation

## Ethereum Ledger App

If you want to connect to Point Chain mainnet and Point Chain testnet, you can use the Ethereum Ledger app on Ledger Live by setting the chain ID.

First, you will need to install the Ethereum Ledger app by following the instructions below:

1. Open up Ledger Live app on your Desktop
2. Select **Manager** from the menu
3. Connect and unlock your device (this must be done before installation)
4. In the **App catalog** search for `Ethereum (ETH)` and click **Install**. Your Ledger device will show **Processing** and once the installation is complete, the app will appear on your Ledger device

In the Ledger Live app, you should see the Ethereum app listed under the **Apps installed** tab on the **Manager** page. After the app has been successfully installed, you can close out of Ledger Live.

### Chain IDs

In the table below you can find a list of Chain IDs to use with the Ethereum Ledger app.

|               | EIP155 chain ID |
| ------------- | --------------- |
| Point Chain mainnet | `10687`          |
| Point Chain testnet | `10731`          |

## Import your Ledger Account

### Metamask

Now that you've installed the app on Ledger Live, you can connect your Ledger to your computer and unlock it with your PIN-code and open the Ethereum app.

:::tip
Follow our [Metamask Guide](./metamask.md) to add the Point Chain Mainnet and Testnet to your Settings
:::

Now you can import your Ledger account to MetaMask by using the following steps:

1. Click on connect hardware wallet

![mm1.png](./../../img/mm1.png)

2. Select Ledger hardware wallet

![mm2.png](./../../img/mm2.png)

3. Select your connected Ledger Device

![mm4.png](./../../img/mm4.png)

4. Import the hex addresses that you want to use

![mm3.png](./../../img/mm3.png)

## EIP712 signing

In order to sign Cosmos transactions (staking, voting on proposals, IBC transfers), with Ledger hardware wallets, we implemented EIP712.

EIP712 means that the signer will generate a signature for something like a JSON representation of the Cosmos transaction and that signature will be included in the Cosmos transaction itself.

### Ledger signing

If you have a Ledger connected to Metamask, you need to use it to sign the message.

The Ledger device will display the domain hash and message hash before asking you to sign the transaction.

![hw_01.jpg](./../../img/hw_01.jpg)

![hw_02.jpg](./../../img/hw_02.jpg)

![hw_03.jpg](./../../img/hw_03.jpg)

![hw_04.jpg](./../../img/hw_04.jpg)


### Common errors

- Make sure that the Ethereum Ledger app is installed. The Cosmos Ledger app is not supported on the Point Chain chain at the moment (see [FAQ](#faq)).
- Make sure you have created at least one Ethereum address on the Ledger Ethereum app.
- Make sure the Ledger device is unlocked and with the Ledger Ethereum app opened before starting the importing process.

### Known issues

- The denomination displayed as `ETH` when importing the wallet because we are using the Ethereum app.
- If you have Metamask correctly configured, the balance on the extension will be displayed as `EVMOS`, but on the Ledger device it will be displayed as `ETH`.

:::warning
**IMPORTANT:** Make sure you are on the correct network before signing any transaction!
:::

## FAQ

1. **How can I generate Cosmos `secp256k1` keys with Ledger?**

Cosmos `secp256k1` keys are not supported on Point Chain with Ledger. Only Ethereum keys (`eth_secp256k1`) can be generated with Ledger.

2. **I can’t generate keys using the CLI with `pointd` with the `--ledger` flag**

CLI bindings with `pointd` binary are not currently supported. In the meantime. See the [`EIP712 Signing`](#eip712-signing) section for reference.

3. **I can’t generate a key for the Point Chain native multisig using the `pointd` CLI and and Ledger**

You can generate a multisig wallet using the `pointd` CLI, although the `--ledger` option is not available at the moment.

4. **I can’t use Metamask or Keplr with the Cosmos Ledger app**

Since Point Chain only support Ethereum keys and uses the same HD path as Ethereum, the Cosmos Ledger app doesn’t work to sign cosmos transactions.

<!-- 4. **I can’t use Ledger for my validator**

Validators can use [`EIP712`](#eip712-signing) with their Ethereum Ledger app to sign transactions. If you are using an existing Cosmos `secp256k1` key, it won't work -->
