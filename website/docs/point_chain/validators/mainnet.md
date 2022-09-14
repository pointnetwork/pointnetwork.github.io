---
title: Join Mainnet
sidebar_label: Join Mainnet
---


# Join Mainnet

This document outlines the steps to join Mainnet by running your own node and optionally become a validator

:::warning **DISCLAIMER:** THE DOCUMENT IS PROVIDED ON "AS IS" AND “AS DEVELOPED” BASIS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE DOCUMENT.

Following this document and/or performing validation activities requires highly experienced DevOps engineers that possess necessary knowledge how to run validators. You are fully responsible for your interaction with validator functionality and running any type of commands, we will not and shall not be liable to you for any omissions, defects, bugs, limitations and delays in the validator functionality or any other related software.

⚠️ This is not the tutorial for most Point Network users! Do not attempt to run the commands from your personal computer, just in case something goes wrong!

:::

## Overview

This document describes step-by-step instructions on joining Point-Mainnet as a validator.

Validators have the responsibility to keep the network operational 24/7. Do not attempt to join the mainnet (and especially mainnet) if you don’t have enough experience. For example, if you install it on your laptop, join as a validator, and then close the laptop, the network will penalize you for being offline by slashing your stake (+the network quality might degrade).

If you have any questions, join our Discord: https://pointnetwork.io/discord and ask in #validators channel (in order to see #validators channel, you should add yourself a Validator role at #roles). This is the channel where we will sync our mainnet efforts and communicate with each other about what's happening.

point is based on Cosmos SDK (which in turn is based on Tendermint), so if you know Cosmos commands, most of them will work here too.


## Pre-requisites

- [Read Validator Security](./security/security.md)
- [Read Hardware Requirements](./overview#hardware)
- [Install Point Node](./quickstart/installation)

:::warning Make sure you have the right version of `pointd` installed.
:::

## Mainnet

You need to set the **genesis file** and **seeds**. If you need more information about past networks, check our [configuration repo](https://github.com/pointnetwork/point-chain-config). The table below gives an overview of all Mainnet Chain IDs. Note that, the displayed version might differ when an active Software Upgrade proposal exists on chain.

| Chain ID       | Description     | Site                                                                          | Status  |
| -------------- | --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| `point_10687-1` | Point Chain Mainnet | [Point Chain](https://github.com/pointnetwork/point-chain-config/tree/main/mainnet-1) | `Live`  |

:::warning
**IMPORTANT:** If you join mainnet as a validator make sure you follow all the [security](./security/security.md) recommendations!
:::


### Save Chain ID

We recommend saving the mainnet `chain-id` into your `pointd`'s `client.toml`. This will make it so you do not have to manually pass in the `chain-id` flag for every CLI command.

:::tip
See the Official [Chain IDs](./../users/technical_concepts/chain_id) for reference.
:::

```bash
pointd config chain-id point_10687-1
```

## Initialize Node

We need to initialize the node to create all the necessary validator and node configuration files:

```bash
pointd init <your_custom_moniker> --chain-id point_10687-1
```

:::danger
Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.
:::

By default, the `init` command creates your `~/.pointd` (i.e `$HOME`) directory with subfolders `config/` and `data/`.
In the `config` directory, the most important files for configuration are `app.toml` and `config.toml`.

## Genesis & Seeds

### Copy the Genesis and Config File

Download the `genesis.json` and `config.toml` file from the [`archive`](https://github.com/pointnetwork/point-chain-config/blob/main/mainnet-1/genesis.json) and copy them over to the `config` directory: `~/.pointd/config`.
```
wget https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/config.toml
wget https://raw.githubusercontent.com/pointnetwork/point-chain-config/main/mainnet-1/genesis.json
mv config.toml genesis.json ~/.pointd/config/
```

Then verify the correctness of the genesis configuration file:

```bash
pointd validate-genesis
```

### Add Seed Nodes

Your node needs to know how to find [peers](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#peers)
By default the initial `config.toml` is configured with default seeds and peers but you can to add healthy [seed nodes](https://docs.tendermint.com/master/tendermint-core/using-tendermint.html#seed) to `$HOME/.pointd/config/config.toml`. The [`mainnet`](https://github.com/pointnetwork/point-chain-config/blob/main/mainnet-1/seeds.txt) repo contains links to some seed nodes.

Edit the file located in `~/.pointd/config/config.toml` and the `seeds` to the following:

```toml
#######################################################
###           P2P Configuration Options             ###
#######################################################
[p2p]

# ...

# Comma separated list of seed nodes to connect to
seeds = "<node-id>@<ip>:<p2p port>"
```

:::tip
For more information on seeds and peers, you can the Tendermint [P2P documentation](https://docs.tendermint.com/master/spec/p2p/peer.html).
:::

### Add Persistent Peers

We can set the [`persistent_peers`](https://github.com/pointnetwork/point-chain-config/blob/main/mainnet-1/peers.txt) field in `~/.pointd/config/config.toml` to specify peers that your node will maintain persistent connections with. You can retrieve them from the list of
available peers on the [`mainnet`](https://github.com/tharsis/mainnet) repo.

A list of available persistent peers is also available in the `#find-peers` channel in the [Point Chain Discord](https://discord.com/invite/DkH6zxCXWz). You can get a random 10 entries from the `peers.txt` file in the `PEERS` variable by running the following command:

## Run the Node

Then run the node and wait for fully sync using bash script:

```./start.sh``` from repository root folder.

If you want it to also respond to the RPC commands, you can instead run:

```pointd start --json-rpc.enable=true --json-rpc.api "eth,txpool,personal,net,debug,web3"```

Now that the node has started, you cannot type any commands in your terminal. But thankfully, your virtual session supports several windows. So if you're on tmux, you can press Ctrl+b and then letter "c" to create a new tab.

Then you can switch between the tabs like this: Ctrl+b and then the window ID (try window 0 where your node runs, and window 1 where you can type commands)

You can run this command to see status of your node:

```pointd status```

You will get the "latest_block_height" of your node.

To see current block height of blockchain run:

```curl  http://rpc-mainnet-1.point.space:8545 -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'```

The result is in hexadecimal, just convert to decimal and see how far are you from full sync.

## Share your Peer

You can share your peer to posting it in the `#validators` channel in the [Point Chain Discord](https://discord.com/invite/DkH6zxCXWz).
:::tip
To get your Node ID use
```bash
pointd tendermint show-node-id
```
:::

# Join Point-Mainnet as a Validator

:::tip
For more details on how to run your validator, follow the validator [these](./setup/run_validator.md) instructions.
:::

:::danger
🚨 **DANGER**: <u>Never</u> create your validator keys using a [`test`](./../users/keys/keyring) keying backend. Doing so might result in a loss of funds by making your funds remotely accessible via the `eth_sendTransaction` JSON-RPC endpoint.

Ref: [Security Advisory: Insecurely configured geth can make funds remotely accessible](https://blog.ethereum.org/2015/08/29/security-alert-insecurely-configured-geth-can-make-funds-remotely-accessible/)
:::

## Sending your first transaction

### Add point network to your wallet

Now while you're waiting for the node to sync, you need to send funds to your validator address. You will need to import a custom network into your wallet, e.g. for Metamask:

```
Network Title: Point
RPC URL: https://rpc-mainnet-1.point.space/
Chain ID: 10687
SYMBOL: POINT
```
More info: [Metamask](../users/wallets/metamask)


### Create validator address

Point has two wallet formats: Cosmos format, and Ethereum format. Cosmos format starts with `point` prefix, and Ethereum format starts with `0x`. Most people don't need to know about Cosmos format, but validators should have a way to change from one to another.

Configure your validator key:

```pointd config keyring-backend file```

Generate a new key/mnemonic for validator: ```pointd keys add validatorkey --keyring-backend file```
You may want to save output somewhere because it contains your point address and other usefull information.

It's really important to back up the validator keys. They were generated inside ~/.pointd/config/priv_validator_key.json
Save this file and don't share it. It's the id of your validator and you will need it for reinstallation or migration of the node

Run ```pointd keys list --keyring-backend file```, and you will see a list of keys attached to your node. Look at the one which has the name `validatorkey`, and note its address (it should be in Cosmos format and start with `point` prefix).

(In most cases it is not needed, but if something goes wrong and if you ever want to import your validator wallet in your Metamask you will need the private key. You can get it with this command: `pointd keys unsafe-export-eth-key validatorkey --keyring-backend file`)

Use this tool to convert it to Ethereum format: https://pointnetwork.io/converter.html

This is your validator address in Ethereum format.

### Fund the validator

Finally, send enough POINT to your validator address

## Stake POINT and Join as a Validator

Now you have to wait for the node to fully sync, because otherwise it will not "find" your address which only appears on the blockchain from the moment of the first transaction.

You can use state state sync to speed up synchronization: [State Sync](./setup/statesync)


Once the node is fully synced, and you got some POINT to stake, check your balance in the node:

```pointd query bank balances <pointaddress>```

If you have enough balance stake your assets and check the transaction:

Before running the command, adjust:
* Replace <myvalidator\> with your own public name for your validator!
* Adjust commissions if you need
* Adjust amount to stake as much as you need (remember that the amounts are in `apoint` and you need to delete 18 zeroes from the right to get to the amount of POINT)
* Adjust min-self-delegation (don't set it too high because if you ever have less - e.g. after being jailed - you will start unbonding)

```
pointd tx staking create-validator \
--amount=1000000000000000000000apoint \
--pubkey=$(pointd tendermint show-validator) \
--moniker="<myvalidator>" \
--chain-id=point_10687-1 \
--commission-rate="0.10" \
--commission-max-rate="0.20" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1" \
--gas="400000" \
--gas-prices="0.025apoint" \
--from=validatorkey \
--keyring-backend file
```

(Note the amount: it's in apoint (which is 1/1e18 POINT). 1000000000000000000000apoint is 1000 POINT (when you remove 18 zeroes at the end). If you decide to adjust the amount, don't forget to adjust `min-self-delegation` flag too.)

You will have to provide your keystore password and approve the transaction for this command.

If everything works ok you will get a txhash. You can check the status of the tx: ```pointd query tx <txhash>```

Transaction receipt may contain errors, so please check if there are any or if it's live. You can use the explorer or ask the node to provide receipt.

If the transaction was correct you should instantly become part of the validators set. Check your pubkey first:

```pointd tendermint show-validator```

You will see a key there, you can identify your node among other validators using that key:

```pointd query tendermint-validator-set```

There you will find more info like your VotingPower that should be bigger than 0. Also you can check your VotingPower by running:

```pointd status```

## What's Next?

Please post on Discord channel #validators when you succeed! https://pointnetwork.io/discord (in order to see #validators channel, you should add yourself a Validator role at #roles)

And if you have any questions, ask in #validators channel. This is the channel where we will sync our mainnet efforts and communicate with each other about what's happening.

Also, check out extra documentation for validators:

- [Validator FAQ](./faq)
- [Validators Overview](./overview)

Share any feedback, questions, and ideas there!

## Useful commands

* How to run the node as a service: https://medium.com/@anttiturunen/running-point-validator-as-a-service-d8e4b0391540

* Check the balance of a point-formatted address: `pointd query bank balances <pointaddress>`

* Check if your validator is active: `pointd query tendermint-validator-set | grep "$(pointd tendermint show-address)"` (if the output is non-empty, you are a validator)

* See the slashing status: `pointd query slashing signing-info $(pointd tendermint show-validator)` Jailed until year 1970 means you are not jailed!

* If the slashing status says you're jailed for downtime, you can unjail yourself once you're back online by first, starting the node, making sure it's synced to the last block, and then running: `pointd tx slashing unjail --from=validatorkey --chain-id=point_10687-1`. Run `pointd status` and `pointd query tendermint-validator-set | grep "$(pointd tendermint show-address)"` to confirm you're unjailed.

* Halting Your Validator:

  * When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have your validator systematically and gracefully halt. You can achieve this by either setting the `halt-height` to the height at which you want your node to shutdown or by passing the `--halt-height` flag to `pointd`. The node will shutdown with a zero exit code at that given height after committing the block.

